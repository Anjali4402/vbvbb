import React, { useState } from 'react'
import Card from './Card';

import patientJSONData from '../Data.json';


const HomePage = () => {
    const [data, setData] = useState(patientJSONData.appointments);

    return (
        <div className='border border-slate-300 py-2 px-1 md:p-6 shadow-lg rounded-[1rem] mt-[4rem] w-[98%] md:w-[90%] mx-auto'>
            <h1 className='text-[#8E8EAC] font-bold text-2xl'>Today's Appointment List</h1>
        
                    <div className='rounded-xl overflow-hidden py-4'>
                        <div className='text-lg uppercase grid grid-cols-11 bg-slate-100 p-2 text-[#535372]'>
                            <h1 className='col-start-1 col-end-3'>patients</h1>
                            <h1 className='col-start-3 col-end-5'>date</h1>
                            <h1 className='col-start-5 col-end-7'>time</h1>
                            <h1 className='col-start-7 col-end-9'>doctor</h1>
                            <h1 className='col-start-9 col-end-11'>injury</h1>
                            <h1>action</h1>
                        </div>
                        
                        {
                            data.map((val, index) => {
                                return(
                                    <Card key={index} cardValue={val}/>
                                )
                            })
                        }


                        
                    </div>
                    
            
        </div>
    )
}

export default HomePage

