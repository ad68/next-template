'use client'
import { Button } from '@/common'
import { NotifyMessage, NotifyType } from '@/enums'
import { notify } from '@/helper'
import React from 'react'



//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
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
        <section>
            <section className='text-3xl font-bold text-center mt-10'>Notify</section>
            <section className='flex justify-center gap-1'>
                <Button size="small" type='outlined' danger onClick={() => notify.Error(NotifyMessage.GLOBAL_ERROR)}>Error notify</Button>
                <Button size="small" type='outlined' onClick={() => notify.Success(NotifyMessage.SUCCESS_ACTION)}>Success notify</Button>
            </section>
        </section>
    )
}
