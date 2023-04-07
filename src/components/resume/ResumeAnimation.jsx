import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Web Designer`,
    jobType: `web Designer | Remote`,
    jobDuration: `Feb 2017 - June 2017`,
    timeDuraton: `Full Time`,
    compnayName: "IT Training Nepal",
    jobDescription: `Designed and developed user-friendly and visually appealing websites for clients across various industries.
    Collaborated with cross-functional teams to ensure projects were completed on-time and within budget.
    Conducted user research and usability testing to inform design decisions and optimize user experience.
    Managed multiple projects simultaneously and communicated progress and updates to clients and team members.   
    Stayed up-to-date with industry trends and technologies to continually improve design skills and deliver cutting-edge solutions.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Junior Web Developer`,
    jobType: `Php Developer| Intern`,
    jobDuration: `Mar 2020 - October 2020`,
    timeDuraton: `Part Time`,
    compnayName: "Broadway Infosys",
    jobDescription: `Designed and developed user-friendly, responsive websites using HTML, CSS, Bootstrap and JavaScript. I collaborated with cross-functional teams, including designers and project managers, to ensure timely delivery of high-quality projects. I also maintained and updated existing websites, ensuring that they were optimized for performance and user experience. During my tenure, I gained experience with various content management systems and front-end frameworks, and honed my skills in troubleshooting and problem-solving.`,
    delayAnimation: "100",
  },
  {
    jobPosition: `Flutter App Developer`,
    jobType: `App Developer | Intern`,
    jobDuration: `Aug 2022 - November 2023`,
    timeDuraton: `Full Time`,
    compnayName: "Code It",
    jobDescription: ` Designed and developed user-friendly Flutter applications.
    Collaborated with product owners and designers to implement new features and enhancements.
    Implemented and maintained robust and scalable codebase using clean architecture and best practices.
    Debugged and resolved technical issues, ensuring high-quality code and timely delivery.
    Contributed to the development of a mobile application framework and provided mentorship to junior developers.
    Stayed up-to-date with the latest trends and advancements in mobile app development, and proposed improvements to the existing codebase.`,
    delayAnimation: "200",
  },
];

const educatonContent = [
  {
    
    degreeTitle: "Bachelor in Computer Engineering",
    instituteName: "Purabanchal University School of Engineering",
  },
  {
    degreeTitle: "Web Development",
    instituteName: "Broadway Infosys",
  },
  {
    degreeTitle: "Flutter/Laravel Development",
    instituteName: "Code It",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Education & Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
