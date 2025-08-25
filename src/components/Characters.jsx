import React, { useEffect, useState, useRef } from 'react'
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
//cursor code custom
function CustomCursor({isHovering3D}) {
    const [position, setPosition] = useState({ x: 0, y: 0})
    const cursorRef = useRef(null)

    useEffect(()=> {
        const handleMouseMove = (e) => {
            setPosition({ x:e.clientX, y:e.clientY })
        }

        document.addEventListener("mousemove", handleMouseMove)
        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }
    })

    return(
        <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
        animate={{
            x: position.x - (isHovering3D ? 12: 15 ),
            y: position.y - (isHovering3D ? 12: 15 ),
            scale : isHovering3D ? 1.5 : 1,
        }}
        transition = {{
            type : "spring",
            stiffness : 500,
            damping: 28,
            mass: 0.5,
        }}>
            <motion.div 
            className={`rounded-full ${isHovering3D ? "bg-violet-500": "bg-white"}`}
            animate = {{
                width: isHovering3D ? "24px" : "40px",
                height: isHovering3D ? "24px" : "40px",
            }}
            transition={{duration: 0.2}}
            />

            {isHovering3D && (
                <motion.div className='absolute inset-0 rounded-full bg-transition border border-violet-500' 
                initial = {{scale: 0.5, opacity: 0}}
                animate = {{scale: 2, opacity: 0.5}}
                transition= {{duration: 1, repeat: Number.POSITIVE_INFINITY}}
                />
            )}


        </motion.div>
    )
}


const Characters = () => {

    //track avatar selection

    const [selectedAvatar, setSelectedAvatar ] = useState("VIKI");
    const [cursorInModelArea, setCursorInModelArea] = useState(false)

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
    const handle3DAreaMouseEnter = () => {
        setCursorInModelArea(true)
    }

    const handle3DAreaMouseLeave = () => {
        setCursorInModelArea(false)
    }

  return (
    <div className='relative w-full h-screen overflow-hidden mb-[10%]'>

        {/* <CustomCursor isHovering3D={cursorInModelArea}/> */}
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
                    <h1 className='text-2xl font-semibold mb-2'>{currentAvatar.name}</h1>
                    {/* avatar stats */}
                        <div className='space-y-3 mb-16'>
                            
                            {/* Power */}
                            <div className='flex items-center'>
                                <span className='w-24 text-gray-400'>
                                    Power
                                </span>
                                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                                    <div className='h-full bg-gradient-to-r from-violet-600 to-white' style={{width: `${currentAvatar.power}%`}}>

                                    </div>
                                </div>
                                <span className='ml-2'>{currentAvatar.power}</span>
                            </div>
                            {/* Power 2*/}
                            <div className='flex items-center'>
                                <span className='w-24 text-gray-400'>
                                    Power 2
                                </span>
                                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                                    <div className='h-full bg-gradient-to-r from-violet-600 to-white 'style={{width: `${currentAvatar.power_2}%`}}>

                                    </div>
                                </div>
                                <span className='ml-2'>{currentAvatar.power_2}</span>
                            </div>
                            {/* Power 3*/}
                            <div className='flex items-center'>
                                <span className='w-24 text-gray-400'>
                                    Power 3
                                </span>
                                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                                    <div className='h-full bg-gradient-to-r from-violet-600 to-white' style={{width: `${currentAvatar.power_3}%`}}>

                                    </div>
                                </div>
                                <span className='ml-2'>{currentAvatar.power_3}</span>
                            </div>
                            {/* Power 4*/}
                            <div className='flex items-center'>
                                <span className='w-24 text-gray-400'>
                                    Power 4
                                </span>
                                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                                    <div className='h-full bg-gradient-to-r from-violet-600 to-white'style={{width: `${currentAvatar.power_4}%`}}>

                                    </div>
                                </div>
                                <span className='ml-2'>{currentAvatar.power_4}</span>
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

                    <div className='grid grid-cols-2 gap-4'>
                        {/* VIKI */}
                        <div className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300'
                        onClick={() => setSelectedAvatar("VIKI")
                        }>

                            <div className='text-lg mb-2'>
                                VIKI
                            </div>
                            <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2' >
                                <img src="public\images\VIKI.png" alt="VIKI-logo" />
                            </div>
                            <div className='flex'>
                                {[...Array(3)].map((_,i) => (
                                    <Star key={i} className='w-4 h-4 fill-violet-400 text-violet-500' />
                                ))}
                            </div>
                            {selectedAvatar == "VIKI" && (
                                <div className='absolute inset-0 border-2 rounded-lg pointer-events-none'>
                                </div>
                            )}

                        </div>

                        {/* EVA */}
                        <div className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300'
                         onClick={() => setSelectedAvatar("EVA")
                        }>

                            <div className='text-lg mb-2'>
                                EVA
                            </div>
                            <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2' >
                                <img src="public\images\EVA.png" alt="EVA-logo" />
                            </div>
                            <div className='flex'>
                                {[...Array(4)].map((_,i) => (
                                    <Star key={i} className='w-4 h-4 fill-violet-400 text-violet-500' />
                                ))}
                            </div>
                            {selectedAvatar == "EVA" && (
                                <div className='absolute inset-0 border-2 rounded-lg pointer-events-none'>

                                </div>
                            )}

                        </div>
                    </div>


                </div>
                {/* right side */}
                <div className='relative md:w-2/4 w-full md:h-full h-80 flex items-center justify-center overflow-hidden'>
                <AnimatePresence mode='wait'>
                    {selectedAvatar === "VIKI" ? (
                    <motion.div
                    key="VIKI"
                    className='absolute inset-0'
                    initial={{x: "100%"}}
                    animate ={{x : 0}}
                    exit ={{x : "-100%"}}
                    transition={{ duration : 0.5}}>
                          <Spline
                            scene="https://prod.spline.design/n3CzOkPlFU0rJUgw/scene.splinecode" 
                        />
                    </motion.div>
                    ) : (
                        <motion.div
                    key="EVA"
                    className='absolute inset-0'
                    initial={{x: "100%"}}
                    animate ={{x : 0}}
                    exit ={{x : "-100%"}}
                    transition={{ duration : 0.5}}>
                        <Spline
                        scene="https://prod.spline.design/MXsYotRT0tUtj5Wf/scene.splinecode" 
                        />
                    </motion.div>
                    )}
                    </AnimatePresence>
                </div>
        </div>
    </div>
  )
}

export default Characters