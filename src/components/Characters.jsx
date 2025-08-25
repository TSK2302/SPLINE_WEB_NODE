import React, { useState } from 'react'

const Characters = () => {

    //track avatar selection

    const [selectedAvatar, setSelectedAvatar ] = useState("VIKI");

    const Avatar = {
        VIKI:{
            name:"VIKI",
            power:75,
            power_2:95,
            power_3:80,
            power_4:90,
            stars: 3,
        },
        EVA :{
            name:"EVA",
            power:100,
            power_2:90,
            power_3:80,
            power_4:60,
            stars: 4,
        }
    }

    const currentAvatar = Avatar[selectedAvatar];

  return (
    <div className='relative w-full h-screen overflow-hidden mb-[10%]'>
        {/* Section title */}
        <div className='relative z-10 pt-6 text-center'>
            <h1 className='text-5xl font-bold tracking-widset md:-mb-14 mb-8' style={{textShadow:"0 0 10px rgba(255, 255, 255, 0.7)"}}>
                FIGHTERS
            </h1>
        </div>
        {/* main content area */}
        <div className='relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4'>
            {/* left side info panel */}
                <div className='w-full md:w-2/4 flex flex-col md:ml-10'>
                    {/* Avatar info Card */}
                    <div className='bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167,139,250,0.2)]'>
                    <h1 className='text-2xl font-semibold'>{currentAvatar.name}</h1>
                    {/* avatar stats */}
                        <div className='space-y-3 mb-16'>
                            
                            {/* Power */}
                            <div className='flex items-center'>
                                <span className='w-24 text-gray-400'>
                                    Power
                                </span>
                                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                                    <div className='h-full bg-gradient-to-r from-violet-600 to-white'>

                                    </div>
                                </div>
                            </div>
                            {/* Power 2*/}
                            <div className='flex items-center'>
                                <span className='w-24 text-gray-400'>
                                    Power 2
                                </span>
                                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                                    <div className='h-full bg-gradient-to-r from-violet-600 to-white'>

                                    </div>
                                </div>
                            </div>
                            {/* Power 3*/}
                            <div className='flex items-center'>
                                <span className='w-24 text-gray-400'>
                                    Power 3
                                </span>
                                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                                    <div className='h-full bg-gradient-to-r from-violet-600 to-white'>

                                    </div>
                                </div>
                            </div>
                            {/* Power 4*/}
                            <div className='flex items-center'>
                                <span className='w-24 text-gray-400'>
                                    Power 4
                                </span>
                                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                                    <div className='h-full bg-gradient-to-r from-violet-600 to-white'>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* action buttons */}
                        <div className='flex  gap-3'>
                            <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                                Porficient
                            </button>

                            <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                                Redemption
                            </button>
                        </div>

                    </div>
                    {/*avatar stats selection  */}
                </div>
        </div>
    </div>
  )
}

export default Characters