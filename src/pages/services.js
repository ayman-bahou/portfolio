import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout"; 
import AnimatedText from "../components/AnimatedText"; 
import { motion } from "framer-motion";
import { FaCode, FaChalkboardTeacher, FaChartPie, FaGamepad, FaUsers, FaLightbulb, FaPaintBrush } from "react-icons/fa"; // Updated icons
import TransitionEffect from "@/components/TransitionEffect";

const services = [
  {
    title: "Web Development & Design",
    description:
      "I can build responsive, visually appealing websites using HTML, CSS, JavaScript, and other front-end technologies like React. Whether you need a simple landing page or a full-fledged web application, I ensure the design is user-friendly and optimized for performance. I can also teach the basics of web development and help you understand how to code with the core technologies.",
    icon: <FaCode />,
  },
  {
    title: "Teaching Web Development & Coding Languages",
    description:
      "I can teach you the fundamentals of web development and coding languages such as Java, HTML, CSS and Python. Whether you're starting from scratch or aiming to enhance your skills, I will provide step-by-step guidance and real-world examples to help you master the concepts and start building your own projects.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Data Visualization & Analytics",
    description:
      "I can transform complex data into intuitive, visually appealing dashboards using tools like Python (Matplotlib, Seaborn, Pandas), or PowerBI. Whether it’s business intelligence or academic research, I can analyze trends, make predictions, and present your data in a way that makes it easier to understand and act upon.",
    icon: <FaChartPie />,
  },
  {
    title: "Game Coding & Development",
    description:
      "I can create interactive, engaging games using Java. From simple browser-based games to more complex experiences, I combine creativity with coding to bring your ideas to life. I also enjoy teaching game development to aspiring developers looking to enter this fun and dynamic field.",
    icon: <FaGamepad />,
  },
  {
    title: "Collaborative Project Development",
    description:
      "I can collaborate with you on your development projects, ensuring that your project is well-organized, the code is efficient, and milestones are met on time.",
    icon: <FaUsers />,
  },
  {
    title: "Consultancy & Graphics Design",
    description:
      "I offer consultancy services for web development, design, and overall digital strategies. I can also create logos and branding materials.",
    icon: (
      <div className="flex space-x-2 ">
        <FaLightbulb /> <FaPaintBrush />
      </div>
    ),
  },
];

const Services = () => {
  return (
    <>
      <Head>
        <title>AymanBahou | Services Page</title>
        <meta name="description" content="Explore my range of services, from web development to data visualization and financial engineering." />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Empowering Your Vision Through Expertise!"
            className="mb-16"
          />

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
      <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>

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
