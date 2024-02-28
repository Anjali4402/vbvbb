import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";


const Card = ({cardValue}) => {
    return (
        <>
        <div className='py-4'>
            <div className='grid grid-cols-11 p-2'>
                {/* image and name */}
                <div className='flex col-start-1 col-end-3 items-center gap-2'>
                    <div className='w-6 h-6 md:w-10 md:h-10 rounded-[2rem] border border-black bg-slate-500'  />
                    <div>
                        <h4 className='text-black font-bold leading-5 text-base md:text-lg'>{cardValue.patient_name}</h4>
                        <h5 className='text text-stone-700 text-sm md:text-base leading-5'>{cardValue.mobile_number}</h5>
                    </div>
                </div>
                {/* date */}
                <div className='col-start-3 col-end-5 text-stone-700 text-base md:text-lg font-medium flex items-center gap-1 '>
                    <CiCalendar className='text-[22px]'/>
                    <h4>{cardValue.appointment_date}</h4>
                </div>
                {/* time */}
                <div className='col-start-5 col-end-7 text-stone-700 text-base md:text-lg font-medium flex items-center gap-1'>
                    <MdOutlineWatchLater className='text-[22px] '/>
                    <h4>{cardValue.appointment_time}</h4>
                </div>
                {/* doctor */}
                <div className='col-start-7 col-end-9 text-stone-700 text-base md:text-lg font-medium flex items-center gap-1'>
                    <div className='p-1 bg-[#66CB9F] rounded-[2rem]'>
                        <FaRegStar className='text-xl text-white'/>
                        </div>
                    <h4>{cardValue.doctor}</h4>
                </div>
                {/* injury */}
                <div className='col-start-9 col-end-11 text-stone-700 text-base md:text-lg font-medium flex items-center'>
                    <h4 className='px-4 py-1 rounded-lg cursor-pointer bg-slate-300'>{cardValue.injury}</h4>
                </div>
                {/* action */}
                <div className='text-stone-700 text-base md:text-lg font-medium flex items-center'>
                    <HiOutlineDotsVertical/>
                </div>
            </div>
        </div>
        <div className='w-[98%] mx-auto border border-slate-400'></div>
        </>
    )
}



export default Card
