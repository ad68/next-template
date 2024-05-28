"use client";
import React from "react";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function page() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  //

  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className='w-screen h-screen m-auto bg-black text-white flex flex-col justify-center items-center '>
        <h1 className='text-bold text-[72px] tgr'>Next.js</h1>
        <section className='w-[600px] flex justify-between ltr tgrd'>
          <span className=''>Tailwind</span>
          <span className=''>Axios</span>
          <span className=''>Zustand</span>
          <span className=''>Gulp</span>
          <span className=''>React-Hot-Toast</span>
          <span className=''>React-Slick</span>
          <span className=''>Antd</span>
        </section>
      </section>
    </>
  );
}
