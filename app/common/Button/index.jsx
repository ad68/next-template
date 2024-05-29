"use client";
import React from "react";
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
  danger,
  warning,
  success,
  size,
  onClick,
  className,
  loading,
  ...rest
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getType = () => {
    if (!type || type === "primary") {
      if (danger) {
        return "danger-btn hover:danger-hover"
      }
      else if (warning) {
        return "warning-btn hover:warning-hover"
      }
      else if (success) {
        return "success-btn hover:success-hover"
      }
      else {
        return "primary-btn hover:primary-hover"
      }
    }
    else if (type === "outlined") {
      if (danger) {
        return "outlined-btn danger-outlined hover:danger-hover"
      }
      else if (warning) {
        return "outlined-btn  warning-outlined  hover:warning-hover"
      }
      else if (success) {
        return "outlined-btn success-outlined hover:success-hover"
      }
      else {
        return "outlined-btn primary-outlined hover:primary-hover"
      }
    }
    else if (type === "dashed") {
      if (danger) {
        return "dashed-btn danger-outlined hover:danger-hover"
      }
      else if (warning) {
        return "dashed-btn warning-outlined hover:warning-hover"
      }
      else if (success) {
        return "dashed-btn success-outlined hover:success-hover"
      }
      else {
        return "dashed-btn primary-outlined hover:primary-hover"
      }
    }

  };
  const getLoaderType = () => {
    if (!type || type === "primary") {
      return "white-loader"
    }
    else {
      if (danger) {
        return "danger-loader"
      }
      else if (warning) {
        return "warning-loader"
      }
      else if (success) {
        return "success-loader"
      }
      else {
        return "primary-loader"
      }
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
      onClick={onClick}
      className={`myBtn ${size === "small" ? "small" : ""} ${loading ? "pl-10 px-5" : 'px-5'} ${getType()}  ${className} `}
    >
      {children}
      <div className={`${size === "small" ? "loader-btn-tiny" : "loader-btn"} ${getLoaderType()} danger-loader ${loading ? "opacity-1" : "opacity-0"} `}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </button>
  );
}
