import qmsportal1 from "../../public/assets/projects-resized.png";
import qmsportal2 from "../../public/assets/qmsportal-2.png";
import zynappse from "../../public/assets/zynappse.png";
import article from "../../public/assets/article-website2.png";
import portfolio from "../../public/assets/portfolio-site2.png";

export const SliderData = [
  {
    image: qmsportal1,
    title: "PUP Quality Management System Portal",
    description:
      "A quality management system portal for PUP, developed using C# and ASP.NET, to support and streamline the processes of the university related to quality assurance and compliance.",
    githubLink: "https://github.com/jerichoempleo/Document_Management_System",
    demoLink: "https://qms-portal-demo.com",
  },
  {
    image: qmsportal2,
    title: "PUP Quality Management System Portal",
    description:
      "A Documented Information Management Module integrated into the PUP QMS Portal, designed to simplify document enrollment, revision, and tracking processes with an intuitive user interface.",
    githubLink: "https://github.com/jerichoempleo/Document_Management_System",
    demoLink: "https://qms-portal-demo.com",
  },
  {
    image: zynappse,
    title: "Revamped Zynappse Website",
    description:
      "A fully functional, responsive website built with React, integrating UI components, animations, and additional features to enhance user engagement and overall site appearance.",
    githubLink: "https://github.com/reyadrian26/Zynappse-Website",
    demoLink: "https://www.zynappse.com/",
  },
  {
    image: article,
    title: "Article Website",
    description:
      "A multi-page article website utilizing Next.js and Sass, incorporating responsive layout, routing, and performance enhancements for improved user experience.",
    githubLink: "https://github.com/reyadrian26/CyberCentral",
    demoLink: "https://reyadrian26.github.io/CyberCentral/",
  },
  {
    image: portfolio,
    title: "My Portfolio Website",
    description:
      "A personal portfolio website created with React and Next.js, featuring responsive design and optimized performance for seamless access across devices.",
    githubLink: "https://github.com/reyadrian26/rydrn-portfolio",
    demoLink: "https://reyadrian26.github.io/rydrn-portfolio/",
  },
  
].map((slide, index, array) => ({
  ...slide,
  number: `${index + 1}/${array.length}`,
}));
