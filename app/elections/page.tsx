import React from 'react'
import {BiPlus } from 'react-icons/bi'
import ElectionFormDialog from '@/components/ElectionFormDialog'

const electionpage = () => {
    return (
        <div className='bg-zinc-50 h-screen pt-28 px-28'>
            <div className='grid grid-cols-4 gap-5'>
                <ElectionFormDialog>
                
                <div className='h-[200px] border border-slate-300 shadow-sm rounded-[8px] cursor-pointer hover:bg-slate-100 transition-all hover:-translate-y-[0.1 rem] flex items-center justify-center'>
                    <BiPlus size={100}/>
                </div>

                </ElectionFormDialog>
                
                <div className='h-[200px] border border-slate-300 shadow-sm rounded-[8px] cursor-pointer hover:bg-slate-100 transition-all hover:-translate-y-[0.1 rem]'></div>
                <div className='h-[200px] border border-slate-300 shadow-sm rounded-[8px] cursor-pointer hover:bg-slate-100 transition-all hover:-translate-y-[0.1 rem]'></div>
                <div className='h-[200px] border border-slate-300 shadow-sm rounded-[8px] cursor-pointer hover:bg-slate-100 transition-all hover:-translate-y-[0.1 rem]'></div>
                <div className='h-[200px] border border-slate-300 shadow-sm rounded-[8px] cursor-pointer hover:bg-slate-100 transition-all hover:-translate-y-[0.1 rem]'></div>
            </div>

        </div>
    )
}

export default electionpage