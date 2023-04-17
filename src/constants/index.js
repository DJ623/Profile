import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
  
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "java",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "mysql",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
   
  ];
  
  const experiences = [
    {
      title: "Computer Science",
      company_name: "MIT-WPU Pune",
      icon: starbucks,
      iconBg: "black",
      date: "March 2020 - August 2024",
      points: [
        "Key Subjects :",
        "Big Data Technologies",
        "Cognitive Computing and Natural Language Processing",
        "CGPA : 9.32",
      ],
    },
    {
      title: "XII th std",
      company_name: "Dhruv Global School CBSE",
      icon: tesla,
      iconBg: "black",
      date: "2020",
      points: [
        "Percentage : 85.20 %"
      ],
    },
    {
      title: "X th std",
      company_name: "Dhruv Global School CBSE",
      icon: tesla,
      iconBg: "black",
      date: "2018",
      points: [
        
      ],
    },
    
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [

    {
      name: "My Profile Website",
      description:
        "A Dynamic responsive profile website showcasing my skills and projects",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      //source_code_link:
    },

   
    {
      name: "Song Recommendation based on emotions using face detection",
      description:
        "This project captures emotions through a webcam and suggests songs based on them. Image segmentation and processing techniques are used to detect emotions from facial features. The system identifies the user's emotional state and recommends songs accordingly. This approach offers a personalized music experience, enhancing the overall music listening experience."
        ,
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "deep face",
          color: "green-text-gradient",
        },
        {
          name: "opencv",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      //source_code_link:
     
    },

    {
      name: "Java Topic Allocation",
      description:
        "An app-based system, which allocates the topic to the scholar based on his interest and stores it. This system will control the database and hold a listing of all college students which have been assigned their topics based on their interest.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "My-SQL",
          color: "green-text-gradient",
        },
        {
          name: "Java swing",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      //source_code_link:
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };