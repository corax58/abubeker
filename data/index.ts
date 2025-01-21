import { Project } from "@/lib/types";

export const tools = [
  {
    id: 0,
    name: "Javascript",
    img: "../Icons/javascript.svg",
  },
  {
    id: 1,
    name: "Typescript",
    img: "../Icons/typescript.svg",
  },
  {
    id: 2,
    name: "Python",
    img: "../Icons/python.svg",
  },
  {
    id: 3,
    name: "Reactjs",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207",
    needRound: false,
  },
  {
    id: 4,
    name: "NextJs",
    img: "../Icons/nextjs.svg",
  },
  {
    id: 5,
    name: "ExpressJs",
    img: "../Icons/expressjs.png",
  },
  {
    id: 6,
    name: "Nodejs",
    img: "../Icons/nodejs.svg",
  },
  {
    id: 7,
    name: "MongoDb",
    img: "../Icons/mongodb.svg",
  },
  {
    id: 8,
    name: "Postgresql",
    img: "../Icons/postgresql.svg",
    needRound: false,
  },
  {
    id: 9,
    name: "Mysql",
    img: "../Icons/mysql.svg",
  },
  {
    id: 10,
    name: "Tailwind",
    img: "../Icons/tailwind.svg",
  },
];

export const ProjectsList: Project[] = [
  {
    id: 0,
    Title: "Fable Forge",
    Tag: "Full-Stack",
    Description:
      "Fable Forge lets you create interactive, branching **Choose Your Own Adventure** stories. Built with **Next.js** and **PostgreSQL** for a smooth user experience.",
    img: "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737405859/Projects/photo_1_2025-01-20_23-41-53_ahhfif.jpg",
    Stack: [4, 10, 8],
    Link: "https://fable-forge-two.vercel.app/",
    Github: "https://github.com/corax58/fable-forge",
    Details: `## **Fable Forge** 🌟

**[Live Demo](https://fable-forge-two.vercel.app/)**

Fable Forge is an interactive **Choose Your Own Adventure** website that allows users to create **branching stories** with complex choices and paths. Whether you're a writer, creator, or storyteller, this platform gives you the tools to build and share your unique adventures. The website supports **multiple endings**, dynamic choices, and a seamless user experience for both creators and readers.

---

### **Features**  
- **🌍 Build Branching Stories**: Create stories with **multiple paths** and **endings**, allowing readers to shape their own adventure.
- **⚙️ Intuitive Story Builder**: Use a simple yet powerful interface to design intricate storylines and complex choices.
- **🔀 Dynamic Choices**: Embed **choices** that affect the storyline and lead to different outcomes.
- **📈 Progress Tracking**: Keep track of how far readers have come in the story and which paths they've taken.
- **📝 Collaborative Storytelling**: While users can create individual stories, the platform offers a space for shared exploration and feedback.
- **🎮 Interactive Experience**: A dynamic, engaging way to experience storytelling through decisions and consequences.

---

### **Tech Stack**  
- **Frontend**: Built with **Next.js**, providing a fast, responsive, and seamless user interface.
- **Backend**: Powered by **PostgreSQL**, ensuring smooth data storage and management of user-generated content.
- **Hosting**: Deployed on **Vercel**, enabling quick loading times and a smooth user experience.

---

**Start building your adventure today!**  
Whether you're crafting a short story or an epic journey, Fable Forge offers the tools you need to make your narrative come to life.

---

*For feedback, updates, and feature requests, feel free to reach out!*
`,
    Images: [
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737405859/Projects/photo_1_2025-01-20_23-41-53_ahhfif.jpg",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737405864/Projects/photo_5_2025-01-20_23-41-53_rcwbth.jpg",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737405858/Projects/photo_2_2025-01-20_23-41-53_hmzn4q.jpg",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737405858/Projects/photo_4_2025-01-20_23-41-53_u1ifoa.jpg",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737405858/Projects/photo_3_2025-01-20_23-41-53_rgnvtr.jpg",
    ],
  },
  {
    id: 1,
    Title: "Optima",
    Tag: "Full-Stack",
    Description:
      "Comprehensive web app for tracking habits and managing projects. ",
    Stack: [3, 5, 10, 6, 8],

    Images: [
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737396519/Projects/photo_5_2025-01-20_21-07-40_mvqwmx.jpg",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737396518/Projects/photo_3_2025-01-20_21-07-40_fuzbjc.jpg",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737396523/Projects/photo_1_2025-01-20_21-07-40_paayfi.jpg",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737396520/Projects/photo_2_2025-01-20_21-07-40_cvw9i0.jpg",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737396519/Projects/photo_4_2025-01-20_21-07-40_nzgkdu.jpg",
    ],
    Details: `## Optima: Habit Tracking and Project Management Platform 🚀

[**Live link**](https://optima-jet.vercel.app/)

### Features
1. **Habit Tracking**:
   - Create habits with customizable settings. ⚙️
   - Set up reminders to stay on track. ⏰
   - View progress reports to analyze performance. 📊

2. **Project Management and Collaboration**:
   - Create projects and set deadlines. 🗓️
   - Divide projects into subtasks for better organization. 📝
   - Invite collaborators to join projects. 🤝
   - Collaborators can accept invitations and be assigned subtasks.

3. **Calendar View**:
   - Visualize project timelines and compare them in a calendar layout. 📅

4. **User Experience**:
   - Supports both light mode 🌞 and dark mode 🌙.
   - Fully mobile-responsive for seamless use on any device.

---

**Tech Stack**:  
- **Frontend**: React.js, Tailwind CSS  
- **Backend**: Node.js, Express  
- **Database**: PostgreSQL, Prisma  
- **Hosting**: Vercel  
`,

    img: "../project_Pictures/optima.png",
    Link: "https://optima-jet.vercel.app/",
    Github: "https://github.com/corax58/Optima",
  },

  {
    id: 2,
    Title: "Pico",
    Tag: "Full-Stack",
    Description:
      "Pico is a MERN stack-based image sharing platform where users can post single or multiple images as albums. Its mobile responsive for seamless use across devices.",
    Stack: [3, 5, 6, 10, 7],
    Details: `## **Pico** 📸

**[Live Demo](https://pico-self-five.vercel.app/)** | **[GitHub](https://github.com/corax58/Pico)**

Pico is a simple **image sharing platform** built with the **MERN stack**. Users can post one or multiple images as albums, making it easy to share and organize their photos. The platform is **mobile responsive** for a seamless experience on all devices.

---

### **Features**  
- **📷 Image Uploads**: Post single or multiple images at once, organized into albums.
- **📱 Mobile Responsive**: Optimized for smooth use across all screen sizes.
- **⚡ Fast and Simple**: A clean, user-friendly interface built for easy image sharing.

---

### **Tech Stack**  
- **Frontend**: Built with **React**, 
- **Backend**: Powered by **Node.js** and **Express**, with **MongoDB** for storing image data.
- **Hosting**: Deployed on **Vercel** and **Render** for fast, reliable access.

---

**Start sharing your photos today on Pico!**
`,
    Images: [
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737406831/Projects/photo_1_2025-01-20_23-59-27_l9kxe0.jpg",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737406820/Projects/photo_3_2025-01-20_23-59-27_xo4vpz.jpg",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737407668/Projects/e80499b4-1dcf-474f-87b3-41679b6d360a.png",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737406816/Projects/photo_2_2025-01-20_23-59-27_tdl7kw.jpg",
    ],
    img: "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737406831/Projects/photo_1_2025-01-20_23-59-27_l9kxe0.jpg",
    Link: "https://pico-self-five.vercel.app/",
    Github: "https://github.com/corax58/Pico",
  },
  {
    id: 3,
    Title: "Portfolio website",
    Tag: "Frontend",
    Description:
      "My portfolio Website is a sleek, modern platform built with Next.js and Tailwind CSS to showcase projects and skills. It's fast, responsive, and visually stunning.",
    Stack: [4, 10],
    Images: [
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737095267/Projects/7223fd79-965d-4368-b7e1-d4cdfa3e7c02.png",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737095303/Projects/db7d609f-b324-485f-8496-e10bd51f0492.png",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737095342/Projects/8fffc65e-3253-4526-98e1-472585f1ad3c.png",
    ],
    Details: `## Portfolio website

 

🌟 A **sleek**, **modern**, and **fast** website designed to highlight my projects, skills, and talents. Built with **Next.js** and styled using **Tailwind CSS**, it delivers a stunning and responsive experience.

---

## 🔑 Key Features

- ✨ **Showcase of Skills**: A dedicated platform to present my work and expertise.  
- 📱 **Mobile Responsive**: Optimized for seamless browsing on any device.  
- 🎨 **Modern Design**: A slick, visually appealing, and user-friendly layout.  
- ⚡ **High Performance**: Fast loading and efficient, leveraging Next.js for the best user experience.

---

🎯 **Explore Now**:  
[![Portfolio Link](https://img.shields.io/badge/Visit-Portfolio-blue?style=for-the-badge)](https://abubeker-portfolio.vercel.app/)

`,
    img: "../project_Pictures/portfolio.png",
    Link: "https://abubeker-portfolio.vercel.app/",
    Github: "https://github.com/corax58/abubeker",
  },
  {
    id: 4,
    Title: "Unique",
    Tag: "Static",
    Description:
      "Unique is a sleek, mobile-responsive car rental website featuring smooth Framer Motion animations. Built with React.js, TypeScript, and Vite, it ensures speed and style.",
    Details: `## Unique

**Unique** is a modern, visually captivating landing page built with React.js, TypeScript, Vite, and Framer Motion. This project demonstrates the power of Framer Motion in crafting sleek, interactive animations, offering an engaging and seamless user experience. The website is fully mobile-responsive, ensuring accessibility across all devices.

## Features

### ✨ **Beautiful Animations**
- Leverages **Framer Motion** to implement smooth, responsive, and visually appealing animations.
- Adds life to the interface with dynamic transitions and interactive elements.

### 📱 **Mobile Responsive**
- Fully optimized for various screen sizes, providing a consistent and polished experience across devices.
- Ensures seamless usability on both desktop and mobile platforms.

### ⚡ **High-Performance Setup**
- Built with **Vite** for a fast and optimized development and build process.
- Guarantees efficient rendering and smooth interactions.

### 🎨 **Modern Design**
- A clean, professional, and user-friendly design with a focus on aesthetics and usability.
- Perfectly suited for showcasing animation libraries or serving as a starting point for creative projects.

### 🛠️ **Technologies Used**
- **React.js**: A robust JavaScript library for building user interfaces.
- **TypeScript**: Enhances code quality and maintainability with strong typing.
- **Vite**: Ensures a fast and optimized development environment.
- **Framer Motion**: Powers the website with smooth animations and transitions.

## Live Demo
Check out the live demo here: [Unique](https://unique-indol.vercel.app/)
`,
    Stack: [3, 10, 6],
    img: "../project_Pictures/unique.jpg",
    Images: [
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1736879444/Projects/6d74afa7-b050-433d-a6e8-1a36b163bf04.png",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1736879501/Projects/ff30dcff-38fa-4f6d-b357-aaa3369da56f.png",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1736879522/Projects/88cdc7ef-47ce-4d4e-929c-42e3f2e5c696.png",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1736881879/Projects/83eb8931-bdd1-4a6f-a079-effdf1c9dd1e.png",
    ],
    Link: "https://unique-indol.vercel.app/",
    Github: "https://github.com/corax58/Unique",
  },
  {
    id: 5,
    Title: "Camper",
    Tag: "Static",
    Description:
      "Camper is a sleek, mobile-responsive landing page for a travel agency. Built with React, it features a clean design and seamless user experience.",
    Stack: [3, 10],
    Images: [
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737093605/Projects/a79b07cc-2dcd-4ce6-a0b8-173e9ef60803.png",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737093651/Projects/3e496846-4536-4d03-9fe7-21baa4b2e356.png",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737093698/Projects/4d6d2110-3d96-482e-a16c-28569ffac7e6.png",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737093745/Projects/656a2424-49b0-4eb0-aea9-53b01b3c1308.png",
    ],
    Details: `
## Camper

[Camper](https://camper-lime.vercel.app/) is a sleek and simple landing page designed for a travel agency. Built with **React**, the site offers a clean and professional design while maintaining **mobile responsiveness** to ensure a seamless user experience across devices.

Key Features:  
- **Modern Design**: Engaging visuals and a user-friendly layout tailored for travel agencies.  
- **Mobile Responsiveness**: Optimized for all screen sizes, delivering a smooth browsing experience on both desktop and mobile devices.  
- **React-Powered**: Built with React for a dynamic and efficient front-end experience.  

Explore Camper and see the design live: [Camper](https://camper-lime.vercel.app/)`,
    img: "../project_Pictures/camper.jpg",
    Link: "https://camper-lime.vercel.app/",
    Github: "https://github.com/corax58/Camper",
  },

  {
    id: 6,
    Title: "Game dashboard",
    Tag: "Frontend",
    Description:
      "a Game Dashboard thats is a sleek, responsive interface for managing gaming data. Built with Next.js and Tailwind CSS, it ensures high performance and modern design.",
    Stack: [4, 10],
    Images: [
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737094298/Projects/23721121-172d-4aa7-a1db-94b628de99b3.png",
    ],
    Details: `
## Game Dashboard: A Beautiful Game Management Interface

This project is a visually appealing **game dashboard** designed to manage and display gaming-related data efficiently. Developed using **Next.js** and styled with **Tailwind CSS**, it combines high performance with a sleek and responsive design.

Key Features:  
- **Elegant Design**: A clean and modern interface that enhances user experience.  
- **Optimized Performance**: Built with Next.js for fast loading and seamless interactions.  
- **Responsive Layout**: Styled with Tailwind CSS, ensuring usability across all devices.  

Experience the dashboard live: [https://game-dashboard-rho.vercel.app/](https://game-dashboard-rho.vercel.app/)`,
    img: "../project_Pictures/game_dashboard.png",
    Link: "https://game-dashboard-rho.vercel.app/",
    Github: "https://github.com/corax58/ui-test",
  },

  {
    id: 7,
    Title: "Fakebook",
    Tag: "Full-Stack",
    Description:
      "A lightweight, mobile-responsive Facebook clone. It supports text-based posts, post searching, and account management, offering a simple and functional user experience. ",
    Stack: [3, 5, 10, 6, 7],
    Images: [
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737095983/Projects/e62d62e9-0d12-4848-9aba-f9b877405ea2.png",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737096023/Projects/f71634be-3aaf-43d8-bc47-362ce171db1e.png",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737096030/Projects/0960d061-dc6b-459c-bcb8-28c696741a15.png",
    ],
    Details: `

## Fakebook: A Simple Facebook Clone

🌐 **[Visit Fakebook](https://fakebook-ten-ruddy.vercel.app/)**  

Fakebook is a lightweight and mobile-responsive **Facebook clone** designed for simplicity and functionality. Built to replicate key social media features, it allows users to interact seamlessly.

---

## 🔑 Features

- 📝 **Post Text-Based Content**: Share your thoughts with a simple and intuitive interface.  
- 🔍 **Search Posts**: Find specific posts quickly with the search feature.  
- 🔑 **Account Management**:  
  - Login and logout effortlessly.  
  - Create new accounts with ease.  

---

📱 **Mobile-Responsive**: Designed to look great and function smoothly on any device.

🎯 **Explore Now**:  
[![Fakebook Link](https://img.shields.io/badge/Visit-Fakebook-blue?style=for-the-badge)](https://fakebook-ten-ruddy.vercel.app/)
`,
    img: "../project_Pictures/fakebook.png",
    Link: "https://fakebook-ten-ruddy.vercel.app/",
    Github: "https://github.com/corax58/fakebook",
  },
  {
    id: 8,
    Title: "Anime Land",
    Tag: "Frontend",
    Description:
      "Anime Land is a mobile-responsive website for discovering anime. It features powerful search functionality and detailed information for anime enthusiasts.",
    Stack: [3, 10],
    Images: [
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737097038/Projects/ee9f98d0-3859-43c7-9e1f-c599808fdd6b.png",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737097334/Projects/271bea18-773a-4db3-9fe6-8532de5711cb.png",
      "https://res.cloudinary.com/dkka6f7kc/image/upload/v1737097214/Projects/2def8f6b-f513-431b-a410-dc081eeb1b46.png ",
    ],
    Details: `
    ## Anime Land: Explore the World of Anime

🌐 **Anime Land** is your go-to website for discovering and exploring anime. With a user-friendly design and powerful search capabilities, it makes browsing anime a breeze.  

---

## 🔑 Features

- 🔍 **Search Anime**: Quickly find your favorite anime or discover new ones.  
- 📖 **Get Anime Details**: Access detailed information about any anime, including synopsis, genres, and more.  
- 📱 **Mobile-Responsive**: Designed to provide a seamless experience across all devices.  

---

🎯 **Explore the World of Anime** and enjoy a rich browsing experience tailored for anime lovers.
`,
    img: "../project_Pictures/animeland.png",
    Link: "https://animeland-pink.vercel.app/",
    Github: "https://github.com/corax58/animeland",
  },
];
