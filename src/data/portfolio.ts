import javascript from "@/assets/tech/javascript.png";
import typescript from "@/assets/tech/typescript.png";
import reactjs from "@/assets/tech/reactjs.png";
import redux from "@/assets/tech/redux.png";
import tailwind from "@/assets/tech/tailwind.png";
import nodejs from "@/assets/tech/nodejs.png";
import mysql from "@/assets/tech/mysql.png";
import django from "@/assets/tech/django.png";
import python from "@/assets/tech/python.png";
import aws from "@/assets/tech/aws.png";
import git from "@/assets/tech/git.png";
import figma from "@/assets/tech/figma.png";
import docker from "@/assets/tech/docker.png";

import merinasoft from "@/assets/company/merinasoft.png";
import jvai from "@/assets/company/jvai.png";

import choosie from "@/assets/projects/choosie.png";
import orani from "@/assets/projects/orani.png";
import arfoodmenu from "@/assets/projects/arfoodmenu.png";
import carrent from "@/assets/projects/carrent.png";
import jobit from "@/assets/projects/jobit.png";
import backend from "@/assets/projects/backend.png";
import lms from "@/assets/projects/lms.png";
import mobile from "@/assets/projects/mobile.png";
import creator from "@/assets/projects/creator.png";
import web from "@/assets/projects/backend.png";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "tech", title: "Tech" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "Full Stack Developer", icon: web },
  { title: "AI Integration Engineer", icon: mobile },
  { title: "Backend & API Developer", icon: backend },
  { title: "Cloud & DevOps Practitioner", icon: creator },
];

export const technologies = [
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: reactjs },
  { name: "Redux", icon: redux },
  { name: "Tailwind", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "Django", icon: django },
  { name: "Python", icon: python },
  { name: "AWS", icon: aws },
  { name: "MySQL", icon: mysql },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "MerinaSoft",
    icon: merinasoft,
    date: "Nov 2023 — Nov 2024",
    points: [
      "Built a full-scale Point of Sale system with billing, sales processing, and inventory management using React and Node.js.",
      "Optimized PostgreSQL queries for real-time inventory tracking with improved accuracy and performance.",
      "Created a scalable e-commerce platform with product lifecycle, cart, and order processing modules.",
      "Architected modular backend systems and ensured seamless API integration across services.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Join Venture AI",
    icon: jvai,
    date: "Dec 2024 — Present",
    points: [
      "Engineered scalable web and mobile apps using React, Next.js, React Native, and Django with a focus on performance.",
      "Architected RESTful APIs for real-time data sync and high-throughput backend systems.",
      "Integrated AI workflows with OpenAI, Twilio and Vapi to automate communication and improve engagement.",
      "Executed Docker-based deployments and CI/CD pipelines for automated testing and production releases.",
    ],
  },
];

export const projects = [
  {
    name: "Choosie — AI Restaurant Discovery",
    description:
      "AI-powered restaurant recommendation platform with conversational ordering, optimized REST APIs, and scalable backend performance.",
    tags: ["react", "django", "openai"],
    image: choosie,
    link: "https://choosie.net",
  },
  {
    name: "Orani — AI Voice Receptionist",
    description:
      "AI voice receptionist for automated call handling with real-time speech processing, webhook event architecture, and scalable Django + PostgreSQL backend.",
    tags: ["twilio", "vapi", "django"],
    image: orani,
    link: "https://play.google.com/store/search?q=orani&c=apps",
  },
  {
    name: "ARFoodMenu — AR Food Experience",
    description:
      "AR-based food visualization with React and WebAR, integrated AWS S3 for media storage, optimized for mobile rendering.",
    tags: ["react", "webar", "aws"],
    image: arfoodmenu,
    link: "https://demo-restaurant.netlify.app",
  },
  {
    name: "Room Booking System",
    description:
      "Web platform to search, book, and manage room reservations with smooth booking flow, payment support, and availability management.",
    tags: ["react", "django", "tailwind"],
    image: carrent,
    link: "https://github.com/Ibrahimkhalill/Apartment-Booking-Sytem-React-.git",
  },
  {
    name: "Online Shopping System",
    description:
      "Scalable e-commerce app for product browsing, cart, order management, and secure end-to-end purchase flow.",
    tags: ["react", "django", "bootstrap"],
    image: jobit,
    link: "https://github.com/Ibrahimkhalill/EcomerceFrontendReact.git",
  },
  {
    name: "LMS Platform",
    description:
      "User-focused Learning Management System for course creation, delivery, and student progress tracking.",
    tags: ["react", "nodejs", "tailwind"],
    image: lms,
    link: "https://github.com/Ibrahimkhalill/Learning-Management-System.git",
  },
];
