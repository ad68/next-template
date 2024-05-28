import { Button } from '@/common'
import { NotifyMessage, NotifyType } from '@/enums'
import { showNotify } from '@/helper'
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
            <section className='text-3xl font-bold text-center'>Buttons</section>
            <section className='flex justify-center gap-1'>
                <Button type='primary' onClick={() => showNotify(NotifyMessage.GLOBAL_ERROR, NotifyType.ERROR)}>Primary</Button>
                <Button type='danger'>Danger</Button>

            </section>
        </section>
    )
}
