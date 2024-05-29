import { Button } from '@/common'
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
                <Button type='primary'>Primary</Button>
                <Button size="small" type='primary'>Primary</Button>
                <Button danger>Danger</Button>
                <Button type='primary' warning>warning</Button>
                <Button success>success</Button>

                <Button type='outlined'>Primary</Button>
                <Button type='outlined' danger>Danger</Button>
                <Button type='outlined' warning>warning</Button>
                <Button type='outlined' success>success</Button>

                <Button type='dashed'>Primary</Button>
                <Button type='dashed' danger>Danger</Button>
                <Button type='dashed' warning>warning</Button>
                <Button type='dashed' success>success</Button>
                <Button type='primary' loading>
                    Loading
                </Button>
                <Button size="small" type='primary' loading>
                    Loading
                </Button>
            </section>
        </section>
    )
}
