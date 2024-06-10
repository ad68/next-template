"use client";
import React, { useEffect, useRef, useState } from "react";
import { IconClose } from "../icons";
import Image from "next/image";
import Delete from "./icon/delete.svg";
import { useAxiosWithToken } from "@/hooks";
import "./style.css";
import { notify } from "@/helper";
import { NotifyMessage } from "@/enums";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  children,
  open,
  onClose,
  onSuccess,
  width,
  buttonText,
  api,
  id,
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const modalBox = useRef();
  const overlay = useRef();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [loading, setLoading] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (open) {
      overlay.current.style.display = "block";
      showDialog();
    } else {
      hideDialog();
      setTimeout(() => {
        overlay.current.style.display = "none";
      }, 200);
    }
    // eslint-disable-next-line
  }, [open]);

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const showDialog = () => {
    setTimeout(() => {
      modalBox.current.style.transform = "scale(1)";
    }, 10);
  };
  const hideDialog = () => {
    setTimeout(() => {
      modalBox.current.style.transform = "scale(0)";
      onClose();
    }, 10);
  };
  const success = () => {
    setLoading(true);
    useAxiosWithToken
      .delete(api + id)
      .then((res) => {
        setLoading(false);
        /* message.success("عملیات با موفقیت انجام شد"); */
        notify.Success(NotifyMessage.SUCCESS_ACTION);
        if (onSuccess) {
          onSuccess();
        }
        onClose();
      })
      .catch((err) => {
        notify.Error(NotifyMessage.GLOBAL_ERROR);
        setLoading(false);
        onClose();
      });
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section
      ref={overlay}
      className=" fixed left-0 top-0 z-[100] hidden h-full w-full bg-[#2362e51f] backdrop-blur-[2.4px] "
    >
      <section className="relative left-0 top-0 flex h-full w-full items-center justify-center">
        <section
          ref={modalBox}
          className="ease-[cubic-bezier(0.39, 0.58, 0.57, 1)] mt-[-300px] h-auto min-h-[300px] max-w-[98%] rounded-[24px] bg-white px-8 pb-10 transition-all duration-300"
          style={{ width: width ? width : 399, transform: "scale(0)" }}
        >
          <span
            onClick={onClose}
            className="absolute left-[34px] top-[34px]   flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-full bg-[#A6A9BD]"
          >
            <IconClose fill="white" color="white" width={16} height={16} />
          </span>
          <section className="mt-[54px] flex w-full items-center justify-center">
            <Image src={Delete} alt="" />
          </section>
          <section className="flex items-center justify-start">
            <span
              className={`block h-[12px] w-[12px] rounded-full bg-[#E14856]`}
            ></span>
            <span className="mr-[12px]"> کاربر گرامی:</span>
          </section>
          <p className="mt-[10px]  w-[335px]">{children}</p>
          <section className="flex items-center justify-between">
            <button
              onClick={onClose}
              className={`m-auto mt-[32px] block h-[48px] w-[155px] max-w-[48%]  rounded-[8px] border-2 border-[#A6A9BD] text-[#A6A9BD]`}
            >
              بازگشت
            </button>
            <button
              onClick={success}
              className={`relative m-auto mt-[32px] block h-[48px] w-[155px] max-w-[48%] rounded-[8px] bg-[#E14856] text-white`}
            >
              {loading && <section className="deleteLoader"></section>}
              {buttonText ? buttonText : "حذف"}
            </button>
          </section>
        </section>
      </section>
    </section>
  );
}
