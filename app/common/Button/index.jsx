"use client";
import React, { useState, useContext, useEffect } from "react";
import "./style.css";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  children,
  type,
  dark,
  className,
  loading,
  ...rest
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getColor = () => {
    if (type === "primary") {
      return "bg-blue";
    } else if (type === "danger") {
      return "bg-red";
    } else {
      return "bg-blue";
    }
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <button
      {...rest}
      className={`relative flex h-12 ${loading && "pl-10"} items-center justify-center rounded-md ${dark ? "border border-[gray]  bg-[#ffffff1a]" : getColor()} px-5 text-white   transition-all duration-700 disabled:opacity-30 ${className}`}
    >
      {children}
      <div className={`deleteLoader ${loading ? "opacity-1" : "opacity-0"}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </button>
  );
}
