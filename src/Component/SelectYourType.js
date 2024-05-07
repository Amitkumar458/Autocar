import React, { useEffect } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SelectYourType = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const squareVariants = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
    };
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <span className='selectTypeHead'>
                <span className='selectTypeText'>
                    SELECT YOUR TYPE
                </span>
            </span>
            <div className='selecttypecar'>
                <motion.div ref={ref} initial={{ opacity: 0, scale: 0.5 }}
                    animate={controls}
                    variants={squareVariants}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='text-center box'>
                    <div className='animation-hover'>
                        <img src='/images/suv.png' alt='loading' height={'75px'} width={'150px'} />
                    </div>
                    <div className='l-space'>SUV</div>
                </motion.div>
                <motion.div ref={ref} initial={{ opacity: 0, scale: 0.5 }}
                    animate={controls}
                    variants={squareVariants}
                    transition={{
                        duration: 0.8,
                        delay: 0.4,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='text-center box'>
                    <div className='animation-hover'>
                        <img src='/images/convertible.png' alt='loading' height={'75px'} width={'150px'} />
                    </div>
                    <div className='l-space'>CONVERTIBLE</div>
                </motion.div>
                <motion.div ref={ref} initial={{ opacity: 0 , scale:0.5}}
                    animate={controls}
                    variants={squareVariants}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='text-center box'>
                    <div className='animation-hover'>
                        <img src='/images/crossover.png' alt='loading' height={'75px'} width={'150px'} />
                    </div>
                    <div className='l-space'>CROSSOVER</div>
                </motion.div>
                <motion.div ref={ref} initial={{ opacity: 0 , scale:0.5}}
                    animate={controls}
                    variants={squareVariants}
                    transition={{
                        duration: 0.8,
                        delay: 0.6,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='text-center box'>
                    <div className='animation-hover'>
                        <img src='/images/luxurycar.png' alt='loading' height={'75px'} width={'150px'} />
                    </div>
                    <div className='l-space'>LUXURYCAR</div>
                </motion.div>
            </div>
            <div className='selecttypecar my-5'>
                <motion.div ref={ref} initial={{ opacity: 0 , scale:0.5}}
                    animate={controls}
                    variants={squareVariants}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='text-center box'>
                    <div className='animation-hover'>
                        <img src='/images/pickupTruck.png' alt='loading' height={'75px'} width={'150px'} />
                    </div>
                    <div className='l-space'>PICKUP TRUCK</div>
                </motion.div>
                <motion.div ref={ref} initial={{ opacity: 0 , scale:0.5}}
                    animate={controls}
                    variants={squareVariants}
                    transition={{
                        duration: 0.8,
                        delay: 0.4,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='text-center box'>
                    <div className='animation-hover'>
                        <img src='/images/sedan.png' alt='loading' height={'75px'} width={'150px'} />
                    </div>
                    <div className='l-space'>SEDAN</div>
                </motion.div>
                <motion.div ref={ref} initial={{ opacity: 0 , scale:0.5}}
                    animate={controls}
                    variants={squareVariants}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='text-center box'>
                    <div className='animation-hover'>
                        <img src='/images/sportsCar.png' alt='loading' height={'75px'} width={'150px'} />
                    </div>
                    <div className='l-space'>SPORTSCAR</div>
                </motion.div>
                <motion.div ref={ref} initial={{ opacity: 0 , scale:0.5}}
                    animate={controls}
                    variants={squareVariants}
                    transition={{
                        duration: 0.8,
                        delay: 0.6,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='text-center box'>
                    <div className='animation-hover'>
                        <img src='/images/suv.png' alt='loading' height={'75px'} width={'150px'} />
                    </div>
                    <div className='l-space'>SUV</div>
                </motion.div>
            </div>
        </div>
    )
}

export default SelectYourType;