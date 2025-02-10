import React from 'react'
import {motion} from "framer-motion";



const Skill = ({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            py-3 px-6 shadow-dark cursor-pointer absolute  dark:text-dark dark:bg-light
            '
            whileHover={{scale:1.05}}
            intial={{x:0,y:0}}
            whileInView={{ x:x, y:y, transition: {duration: 1.5} }}
            viewport={{ once: true}}
            >
                {name}
            </motion.div>

    )

}

const Skills = () => {
    return (
        <>
        {/* Keep the "Skills" title in place */}
        <h2 className='font-bold text-7xl mt-32 mb-12 w-full text-center'>Skills</h2> 
        <div className='w-full h-screen relative flex items-center justify-center bg-circularLight dark:bg-circularDark'>

            {/* Adjust the margin to move the circular map up */}
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light' 
            style={{ marginTop: '-40px' }} // Adjust this value as needed
            whileHover={{scale:1.05}}
            >
                Web
            </motion.div>

            <Skill name="Spring Boot" x="-12vw" y="0vw"/>
            <Skill name="Communication" x="-23vw" y="8vw"/>
            <Skill name="Esprit d'équipe" x="15vw" y="-20vw"/>
            <Skill name="Hibernate" x="-15vw" y="-10vw"/>
            <Skill name="API REST" x="-23vw" y="-17vw"/>
            <Skill name="Scrum" x="7vw" y="2vw"/>
            <Skill name="Java" x="-4vw" y="-10vw"/>
            <Skill name="HTML" x="20vw" y="0vw"/>
            <Skill name="CSS" x="2vw" y="10vw"/>
            <Skill name="Python" x="15vw" y="15vw"/>
            <Skill name="Maven" x="18vw" y="9vw"/>
            <Skill name="React.JS" x="-30vw" y="-5vw"/>
            <Skill name="C" x="12vw" y="-12vw"/>
            <Skill name="Shell" x="30vw" y="-5vw"/>
            <Skill name="Ada" x="0vw" y="-18vw"/>
            <Skill name="Git" x="-25vw" y="20vw"/>
            <Skill name="MariaDB" x="0vw" y="18vw"/>

        </div>
        
        </>
    )
}

export default Skills
