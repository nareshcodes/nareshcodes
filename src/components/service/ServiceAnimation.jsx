import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "App Development",
    descriptions: `As an App developer, I ensure that the design is optimized for various screen sizes, resolutions, and devices to provide a seamless user experience. Overall, my app design services aim to create user-centered designs that not only look great but also help achieve the client's business objectives by providing a positive user experience.`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "Web Design",
    descriptions: `As a web developer offering web design services, I would work closely with clients to understand their needs, goals, and target audience. I would then create custom designs and layouts using various tools and technologies such as HTML, CSS, JavaScript, and responsive design to ensure the website looks great on any device.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "Web Development",
    descriptions: `As a Full stack developer, I offer comprehensive web development services that encompass everything from website design and development to website maintenance and support. I specialize in creating responsive and user-friendly websites that are optimized for search engines and deliver a seamless user experience.`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
