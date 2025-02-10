import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import project1 from "../../public/images/projects/hotell.JPG";
import project2 from "../../public/images/projects/mono.JPG";
import project3 from "../../public/images/projects/stick.JPG";
import project4 from "../../public/images/projects/compilat.JPG";
import project5 from "../../public/images/projects/projetgs.JPG";
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import TransitionEffect from '@/components/TransitionEffect';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex flex-col md:flex-row items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-lg p-8 dark:bg-dark dark:border-light space-y-6 md:space-y-0">
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl' />
            
            <Link
                href={link}
                target="_blank"
                className="w-full md:w-1/2 cursor-pointer overflow-hidden rounded-lg"
            >
                <Image
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover rounded-lg"
                    layout="responsive"
                />
            </Link>
            

            {/* Content Section */}
            <div className="w-full md:w-1/2 flex flex-col items-start justify-between px-6">
                {/* Type */}
                <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>

                {/* Title */}
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="text-2xl font-bold hover:underline dark:text-light">{title}</h2>
                </Link>

                {/* Summary */}
                <p className="text-dark font-medium my-4 dark:text-light">{summary}</p>

                {/* Action Links */}
                <div className="flex items-center space-x-4 mt-4">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon  />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({ title, type, img, link, github, summary }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light  dark:bg-dark dark:border-light p-6 relative space-y-6">
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
            {/* Image Section */}
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <Image
                    src={img}
                    alt={title}
                    className="w-full h-auto object-cover rounded-lg"
                    layout="responsive"
                />
            </Link>

            {/* Content Section */}
            <div className="w-full flex flex-col items-start justify-between mt-4 space-y-4 dark:text-light">
                {/* Type */}
                <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>

                {/* Title */}
                <Link href={link} target="_blank" className="hover:underline underline-offset-2 dark:text-light">
                    <h2 className="text-3xl font-bold hover:underline">{title}</h2>
                </Link>

                {/* Summary */}
                <p className="text-dark font-medium dark:text-light">{summary}</p>

                {/* Action Links */}
                <div className="flex items-center justify-between w-full space-x-4 mt-4">
                    <Link
                        href={link}
                        target="_blank"
                        className="text-lg font-semibold underline"
                    >
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="text-dark w-8 h-6">
                        <GithubIcon className="w-full h-full" />
                    </Link>
                </div>
            </div>
        </article>
    );
};


const Projects = () => {
    return (
        <>
            <Head>
                <title>AymanBahou | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Mes projets Récents" className='mb-16' />

                    <div className="grid grid-cols-12 gap-24 gap-y-32">
                    <div className="col-span-12 mt-12">
                            <FeaturedProject
                                title="Projet fullstack gestion de stock avec Spring Boot/ReactJs"
                                img={project5}
                                summary="Conception et développement d’une API REST complète avec Spring
Boot pour la gestion de produits et des mouvements de stock. Développement d’une interface utilisateur responsive en React pour
consulter, ajouter, modifier et supprimer des produits.

"
                                link="https://github.com/ayman-bahou/gestion_de_stock"
                                github="https://github.com/ayman-bahou/gestion_de_stock"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-12 mt-12">
                            <FeaturedProject
                                title="Tripin un site de réservation hôtelière(Stage)"
                                img={project1}
                                summary="Développement frontend dans une équipe en binôme d’une interface utilisateur responsive pour un site de réservation hôtelière en utilisant le framework ReactJS. Mise en place d’appels asynchrones pour récupérer en temps réel la
disponibilité des chambres via une API tierce.
"
                                link="https://github.com/ayman-bahou"
                                github="https://github.com/ayman-bahou"
                                type="Featured Project"
                            />
                        </div>

                        {/* Placeholder Projects */}
                        <div className="col-span-6"><Project
                            title="Projet Jeu Monopolie version Toulousaine avec Java"
                            img={project2}
                            summary="Développement du jeu avec Java dans une équipe de 5 avec la méthode Agile Scrum (4 sprints de 2 semaines)."
                            link="https://github.com/ayman-bahou/Enseeiht/tree/main/1A_SN/java_projects/projet_monopoly_Toulouse/pl-main"
                            github="https://github.com/ayman-bahou/Enseeiht/tree/main/1A_SN/java_projects/projet_monopoly_Toulouse/pl-main"
                            type="Featured Project"
                        /></div>

                        {/* These are now using Project component for consistency */}
                        <div className="col-span-6"><Project
                            title="Projet Jeu Allumettes avec Java"
                            img={project3}
                            summary="Développement du jeu où l’utilisateur affronte un autre utilisateur ou l’ordinateur avec les modes de jeu (expert-naïf...) ainsi que la gestion de la triche.

"
                            link="https://github.com/ayman-bahou/Enseeiht/tree/main/1A_SN/java_projects/projet-allumettes"
                            github="https://github.com/ayman-bahou/Enseeiht/tree/main/1A_SN/java_projects/projet-allumettes"
                            type="Featured Project"
                        /></div>
                        
                        <div className="col-span-12 mt-12"><FeaturedProject
                            title="Projet Compilateur d'un langage de programmation simplifié"
                            img={project4}
                            summary="Développement d'un compilateur d'un langage avec Ocaml.

"
                            link="https://github.com/ayman-bahou/Enseeiht/tree/main/2A_SN/Traduction_de_langages/projet_compilateur"
                            github="https://github.com/ayman-bahou/Enseeiht/tree/main/2A_SN/Traduction_de_langages/projet_compilateur"
                            type="Featured Project"
                        /></div>

                        {/* Using Project component for 5th and 6th project */}
                       
                    </div>
                </Layout>
            </main>
        </>
    );
};


export default Projects;
