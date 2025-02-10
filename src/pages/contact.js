import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser } from "react-icons/fa"; // For icons
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import TransitionEffect from "@/components/TransitionEffect";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;

    const templateParams = {
      from_name: name,
      from_email: email,
      phone_number: phone,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_ppzz66b", // Replace with your EmailJS Service ID
        "template_mptqecs", // Replace with your EmailJS Template ID
        templateParams,
        "A6dPIkv76XJIfbXZj" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("Success:", response);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.error("Failed:", error);
          alert("Error sending message. Please try again later.");
        }
      );
  };

  return (
    <>
      <Head>
        <title>AymanBahou | Contact</title>
        <meta
          name="description"
          content="Contact Ayman Bahou for your next project."
        />
      </Head>
      <TransitionEffect />

      <main className="w-full flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <motion.h1
            className="text-3xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.h1>

          {/* Contact Section with id="contact" */}
          <div id="contact" className="grid grid-cols-12 gap-8 w-full dark:bg-dark dark:border-light dark:text-light  dark:border-white">
            {/* Left Section - Contact Info */}
            <div className="col-span-12 md:col-span-5 flex flex-col items-start space-y-14 p-6 bg-gray-100 rounded-lg shadow-lg border-2 border-black relative dark:bg-dark dark:border-light dark:text-light dark:border-2 dark:border-white">
              <motion.div
                className="absolute top-4 left-4 text-3xl text-primary font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                
                <span className="text-primary font-bold">Get in Touch!</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <FaMapMarkerAlt className="text-2xl text-primary" />{" "}
                <span className="text-lg font-semibold">
                  13 Rue johannes Toulouse
                </span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <FaPhone className="text-2xl text-primary" />{" "}
                <span className="text-lg font-semibold dark:text-light">07 44 19 56 01</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <FaEnvelope className="text-2xl text-primary" />{" "}
                <span className="text-lg font-semibold dark:text-light">
                  bahou20032003@gmail.com
                </span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <FaUser className="text-2xl text-primary" />{" "}
                <span className="text-lg font-semibold dark:text-light">Age: 21</span>
              </motion.div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="col-span-12 md:col-span-7 p-6 bg-gray-100 rounded-lg shadow-lg border-2 border-black dark:bg-dark dark:border-light dark:text-light dark:border-2 dark:border-white">
              <motion.h2
                className="text-2xl font-bold text-primary mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Contact Me!
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full p-4 rounded-lg border-2 border-gray-300 text-black"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-4 rounded-lg border-2 border-gray-300 text-black"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full p-4 rounded-lg border-2 border-gray-300 text-black"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="4"
                  className="w-full p-4 rounded-lg border-2 border-gray-300 text-black"
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-dark rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300 border-2 border-black transform hover:scale-105 active:translate-y-1 "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;