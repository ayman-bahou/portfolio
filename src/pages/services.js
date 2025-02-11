import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import { motion } from "framer-motion";
import {sportpic} from "../../public/images/profile/spaym.jpg"
import {
  FaCode,
  FaChalkboardTeacher,
  FaChartPie,
  FaGamepad,
  FaUsers,
  FaLightbulb,
  FaPaintBrush,
  FaRunning,
  FaFutbol,
} from "react-icons/fa";
import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";

const services = [
  {
    title: "Grand passionné de football",
    description:
      "Depuis mon enfance, le football occupe une place importante dans ma vie. J'apprécie l'ambiance conviviale et l'esprit d'équipe qui se crée lors de chaque match, et je m'investis pleinement dans la stratégie collective pour atteindre nos objectifs. Actif au sein du club de foot de l'AS-INP n7 depuis un an, je vis pleinement cette passion.",
    icon: <FaFutbol />,
  },
  {
    title: "La course à pied",
    description:
      "La course à pied me permet de clarifier mes idées tout en me défoulant. Participer à des marathons et compétitions organisés par mon école a renforcé ma détermination et m'a offert des moments de dépassement personnel.",
    icon: <FaRunning />,
  },
  {
    title: "Gaming",
    description:
      "Passionné par les jeux vidéo, j'apprécie l'immersion dans des univers variés et les défis constants qu'ils proposent, stimulant ma créativité et ma réactivité.",
    icon: <FaGamepad />,
  },
];

const Services = () => {
  return (
    <>
      <Head>
        <title>AymanBahou | Activités et Hobbies</title>
        <meta
          name="description"
          content="Explore my range of services, from web development to data visualization and financial engineering."
        />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Découvrez qui je suis" className="mb-16" />

          <div className="grid grid-cols-12 gap-24 gap-y-32 dark:text-light">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </Layout>
      </main>
      
      
    </>
  );
};

// Service Card Component
const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to handle "Read More"

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="col-span-12 md:col-span-4 bg-gray-200 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between dark:bg-dark dark:border-light dark:text-light dark:border-2 dark:border-white"
      whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)" }}
    >
      {/* Logo with Hover Effect */}
      <motion.div
        className="text-6xl mb-4 text-primary flex justify-center "
        whileHover={{ rotate: 10 }}
        transition={{ duration: 0.3 }}
      >
        {service.icon}
      </motion.div>

      {/* Title centered */}
      <h3 className="text-xl font-semibold mb-2 text-center">
        {service.title}
      </h3>

      {/* Description with Slide-in effect */}
      <motion.p
        className="text-gray-600 dark:text-light"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        {isExpanded
          ? service.description
          : `${service.description.slice(0, 100)}...`}
      </motion.p>

      {/* Read More Button */}
      <button
        onClick={toggleDescription}
        className="w-full py-3 mt-4 text-primary font-semibold border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition duration-300"
      >
        {isExpanded ? "Read Less" : "Read More..."}
      </button>
      
    </motion.div>
  );
};

export default Services;
