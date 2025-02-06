import React from "react";
import "./Portfolio.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="min-vh-100 bg-black text-white d-flex flex-column align-items-center py-5 px-4">
      <h1 className="display-4 fw-bold">Hi, I'm Tanmay 👋</h1>
      <p className="fs-5 mt-2 text-center px-3">
        Software Developer focused both Frontend & Backend. Self-taught and
        always eager to learn new technologies.
      </p>

      {/* About Section */}
      <div className="mt-5 w-100" style={{ maxWidth: "800px" }}>
        <h2 className="h3 fw-semibold">About</h2>
        <p className="mt-2 text-secondary">
          I am a full-stack Java developer who loves to write clean and
          maintainable code, striving for elegance and efficiency in every
          project.
        </p>
      </div>

      {/* Education Section */}
      <div className="mt-5 w-100" style={{ maxWidth: "800px" }}>
        <h2 className="h3 fw-semibold">Education</h2>
        <div className="glass-card">
          <h3 className="h5 fw-semibold">
            Government College of Engineering and Reasearch, Avasari Khurd, Pune
          </h3>
          <p className="text-light">
            Bachelor's Degree in Computer Engineering | 2020 - 2024
          </p>
        </div>
        <div className="glass-card">
          <h3 className="h5 fw-semibold">
            K.T.H.M College of Engineering, Nashik
          </h3>
          <p className="text-light">
            Higher Secondary Education (Science) | 2018 - 2020
          </p>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="mt-5 w-100" style={{ maxWidth: "800px" }}>
        <h2 className="h3 fw-semibold">Certifications</h2>
        <div className="glass-card">
          <h3 className="h4 fw-semibold">
            Full Stack Java Development Training
          </h3>
          <h5>Profound Edutech Pvt Ltd</h5>
          <p className="text-light">June 2024 - Present</p>
          <p className="mt-2 text-white-50">
            During the Full Stack Java Development Training, you learned
            front-end technologies like HTML, CSS, JavaScript, and React, and
            back-end technologies including Java, Spring Boot, Hibernate, and
            MySQL. You also gained skills in version control with Git and
            full-stack application development.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-5 w-100" style={{ maxWidth: "800px" }}>
        <h2 className="h3 fw-semibold">Skills</h2>
        <div className="mt-3 d-flex flex-wrap gap-2">
          {[
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "C++",
            "Spring",
            "Springboot",
            "Postgres",
            "MySQL",
            "Bootstrap",
            "MaterialUI",
          ].map((skill) => (
            <span key={skill} className="glass-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-5 w-100 text-center" style={{ maxWidth: "800px" }}>
        <h2 className="h3 fw-bold">Check out my latest work</h2>
        <p className="mt-2 text-secondary">
          I've worked on a variety of projects, from simple websites to complex
          web applications.
        </p>
        <a
          href="https://github.com/tanmay156"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-3 btn btn-primary">My Projects</button>
        </a>
      </div>

      {/* Project Cards */}
      <div className="mt-5 w-100" style={{ maxWidth: "800px" }}>
        {[
          {
            title: "CourseConnect (A Course Management System ) ",

            description:
              "Developed a web application for managing courses with CRUD functionality using React for the frontend and Spring Boot for the backend. Integrated Axios for API communication and MySQL for data storage, offering dynamic course listings and user-friendly forms.",
            skills: ["ReactJs", "Bootstrap", "Springboot", "Axios", "MySQL"],
          },
          {
            title: "Blog Management System",
            description:
              "This project is a simple blogging platform where users can register, log in, create, view, and edit blog posts. It uses Spring Boot for the backend and React for the frontend, with session management for user authentication.",
            skills: [
              "React.js",
              "Bootstrap",
              "MySQL",
              "Springboot",
              "Axios",
              "Maven",
              "Vite",
            ],
          },
          {
            title: "Personal Portfolio",
            description:
              "A personal portfolio website built using React, showcasing my skills, work experience, education, and projects. It features a clean design with a modern UI and interactive elements like badges and frosted-glass effect cards.",
            skills: ["React", "JavaScript", "Bootstrap"],
          },
        ].map((project) => (
          <div className="glass-card" key={project.title}>
            <h3 className="h4 fw-semibold">{project.title}</h3>
            <p className="text-light">{project.date}</p>
            {project.description && (
              <p className="mt-2 text-white-50">{project.description}</p>
            )}
            {project.skills.length > 0 && (
              <div className="d-flex flex-wrap gap-2 mt-2">
                {project.skills.map((skill) => (
                  <span key={skill} className="glass-badge">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-5 w-100 text-center">
        <h2 className="h3 fw-bold">Connect with Me</h2>
        <p className="text-secondary">
          Feel free to reach out on any of the platforms below.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a
            href="https://github.com/tanmay156"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/tanmay-jadhav-5981b725a/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:tanmayj725@gmail.com" className="social-btn">
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
