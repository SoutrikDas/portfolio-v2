import project1 from "../assets/projects/isea.png";
import project4 from "../assets/projects/project-2.jpg";
import project2 from "../assets/projects/automaticdraft.png";
import project3 from "../assets/projects/imgur.jpg";

// export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const HERO_CONTENT = `I am a dedicated software engineer with a strong focus on web development and automation. I specialize in building robust applications using Node.js and React, and managing databases with MongoDB and Firebase. My expertise extends to scripting in Python and leveraging Google Apps Script to automate workflows and enhance productivity. My goal is to harness my technical skills to develop innovative software solutions, optimize processes, and deliver high-quality digital experiences.`;

export const ABOUT_TEXT = `I am a versatile software engineer passionate about creating dynamic web applications and streamlining workflows through automation. I have built and maintained applications using Node.js and React, managed data with MongoDB and Firebase, and utilized Python scripting for various tasks. Additionally, I have experience with Google Apps Script to automate and improve Google Workspace functionality. My journey in software engineering is driven by a love for problem-solving and a commitment to continuous learning. I enjoy collaborating with teams to tackle complex challenges and deliver impactful solutions. Outside of work, I stay engaged with the latest technology trends and contribute to open-source projects to further my skills and knowledge.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "ISEA ISAP Convention Site",
    image: project1,
    description:
      "ISEA is a Highly Celebrated Computer Technology Convention in India. ",
    technologies: ["HTML", "CSS", "React", "Node.js"],
  },
  {
    title: "Email Automatic Draft Maker",
    image: project2,
    description:
      "An application to check if a new incoming mail has certain keywords, and if it has then draft a reply corresponding to that keyword",
    technologies: ["HTML", "Google Appscript", "GMail"],
    link: "https://github.com/SoutrikDas/autodraftreply",
  },
  {
    title: "Screenshot Auto Uploader",
    image: project3,
    description:
      "Sometimes we just need a anonymous link to our screenshot instead of just the screenshot, this app does just that by automatically uploading the image to platforms like imgur and retrieving the links",
    technologies: ["Python"],
  },
  {
    title: "Flutter Todo App",
    image: project4,
    description:
      "A Simple Android / iOS app to create and maintain TODO list for your daily lives.",
    technologies: ["Flutter", "Android", "Dart"],
    link: "https://github.com/SoutrikDas/ftodo",
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "",
  email: "soutrik@duck.com",
};
