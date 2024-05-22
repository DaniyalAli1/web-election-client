import React, { HTMLAttributes } from 'react'

type ElectionType ={
    electionId: bigint;
    name: string;
    description: string;
    startTime: bigint;
    endTime: bigint;
}
import { SlCalender } from "react-icons/sl";

interface ElectionCardProps extends HTMLAttributes<HTMLDivElement>{
    election: ElectionType
}

// ... (spreading operator)
export default function ElectionCard ({election, ...props}: ElectionCardProps) {

    const {electionId,name,description,startTime,endTime} = election;

    const startDateJS = new Date(Number(startTime)*1000).toDateString();
    const endDateJS = new Date(Number(endTime)*1000).toDateString();

  return (
  
  <div {...props}key={electionId} className='h-[200px] border border-slate-300 shadow-sm rounded-[8px] cursor-pointer hover:bg-slate-100 transition-all hover:-translate-y-[0.1 rem] relative'>
  <h1 className='w-full text-center font-bold text-2xl absolute left-[50%] -translate-x-[50%] top-6'>
      {name}
  </h1>
  <h2 className='w-full text-center text-muted-foreground absolute left-[50%] -translate-x-[50%] top-14'>
  {description}
  </h2>

  <div className='w-full absolute left-4 bottom-10 flex flex-col gap-2'>
      <h3 className='flex gap-2 items-center text-sm'> <SlCalender/>Start Date : <span>{startDateJS}</span></h3>
      <h3 className='flex gap-2 items-center text-sm'> <SlCalender/>End Date : <span>{endDateJS}</span></h3>
  </div>
</div>

  )
}
