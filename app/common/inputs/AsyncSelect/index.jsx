"use client";
import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import "./style.css";
import { token } from "@/config";
import axios from "axios";
import { useAxios } from "@/hooks";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  dark,
  api,
  setState,
  state,
  search,
  optionTitle,
  optionValue,
  condition,
  placeHolder,
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  /* const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]; */
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    setLoading(true);
    useAxios
      .get(api)
      .then((res) => {
        setLoading(false);
        let response = res.data.elements;
        let arr = [];
        response.forEach((element) => {
          arr.push({
            value: element[optionValue],
            label: element[optionTitle],
          });
        });

        setData(arr);
      })
      .catch((e) => {
        setLoading(false);
        // alert("Error !!!!!!")
      });
  }, [api, optionTitle, optionValue, condition]);
  useEffect(() => {
    setState(data[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  /*   useEffect(() => {
    setState();
  }, [condition]); */
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <Select
      options={data}
      isLoading={loading}
      onChange={setState}
      isRtl={true}
      value={state}
      placeholder={placeHolder ? placeHolder : "انتخاب کنید..."}
      isSearchable={search}
      loadingMessage={() => <span>در حال بارگزاری...</span>}
      noOptionsMessage={() => <span>اطلاعاتی موجود نیست</span>}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "black" : "silver",
          backgroundColor: dark ? "#2f2f2f80" : "white",
          width: "100% !important",
        }),
        /*   option: (provided) => ({
            ...provided,
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
          }), */
        singleValue: (provided) => ({
          ...provided,
          color: dark ? "white" : "black",
        }),
      }}
    />
  );
}
