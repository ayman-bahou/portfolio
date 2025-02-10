import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion";
import LiIcon from '@/components/LiIcon';

const Details = ({ type, time, place, info}) => {
    const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[100%] mx-auto flex flex-col items-center justify-between mb-8'> {/* Add mb-8 here */}
        <LiIcon reference={ref}/>

        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5,type:"spring"}}
            >
            <h3 className='capitalize font-bold text-2xl'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {place}
            </span>
            <p className='font-medium w-full '>
                {info}
            </p>
        </motion.div>
    </li>
    );
}


const Education = () => {
    const ref = useRef(null);
    const{scrollYProgress} = useScroll(
        {
            target: ref,
            offset:["start end", "center start"]
        }
    )

    return (
        <div className='my-64'>
            <h2 className='font-bold text-7xl mb-32 w-full text-center'>
                Education
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative'>
<motion.div 
    style={{scaleY: scrollYProgress}}
    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light" />


                <ul className="w-full flex flex-col items-start justify-between ml-16">
                    <Details
                    type="Baccalaureate Diploma in Mathematical Sciences :"
                    time="2019-2021"
                    place="The HighSchool Of Excellence"
                    info="
At the High School of Excellence, majoring in Mathematical Sciences, the competition was intense, especially among Sciences Maths students. The workload was heavy, but it was a great experience where I built a strong foundation in both mathematics and coding. The challenging environment pushed me to excel, and I graduated with my Baccalaureate Diploma, earning high honors." 



                    
                    />

                    

                    <Details
                    type="Preparatory Classes for Elite Schools(CPGE) :"
                    time="2021-2023"
                    place="The HighSchool Of Excellence"
                    info="
In CPGE, the academic environment was highly demanding and competitive. The rigorous program pushed me to develop strong analytical and problem-solving skills, while adapting quickly to complex challenges. This experience built my resilience and sharpened my technical abilities." 



                    
                    />
                    <Details
                    type="Engineering Program in Computer Science :"
                    time="2023-Today"
                    place="ENSEEIHT-INP"
                    info="
Currently, I am deeply immersed in the study of digital technology, honing my expertise in computer science. I’m driven by a passion for continuous learning and growth in this ever-evolving field, and I'm committed to using my skills to craft innovative and impactful solutions." 



                    
                    />
                    



                </ul>
            </div>
        </div>
    )
}

export default Education;