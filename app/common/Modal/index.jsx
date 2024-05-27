"use client";
import React, { useEffect, useRef } from "react";
import "./style.css";
import Close from "./icons/close";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ children, open, onClose, width, title }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const modalBox = useRef();
  const overlay = useRef();
  // ─── States ─────────────────────────────────────────────────────────────────────

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

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section ref={overlay} className="modalOverLay">
      <section className="modalWrapper">
        <section
          ref={modalBox}
          className="modalBox"
          style={{ width: width ? width : 500 }}
        >
          <section
            onClick={onClose}
            className="absolute left-3 top-3 z-10 h-[5] w-[50] cursor-pointer rounded-full p-1 transition-all hover:bg-slate-200"
          >
            <Close fill="gray" color="gray" />
          </section>

          <span className="title ">{title}</span>
          {open ? <section>{children}</section> : ""}
        </section>
      </section>
    </section>
  );
}
