import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team1",
      desc: `  I highly recommend for anyone in need of a professional and reliable web developer. They were easy to work with, communicative, and always delivered work on time. Their ability to turn my vision into a reality was truly impressive.`,
      reviewerName: "It Training Nepal",
      designation: "CEO @ Eprabidihi",
      delayAnimation: "",
    },
    {
      imageName: "team2",
      desc: ` Working with Naresh was an absolute pleasure. They listened carefully to my needs and delivered a beautiful, user-friendly website that exceeded my expectations. Their attention to detail and technical expertise are unparalleled`,
      reviewerName: "Broadway Infosys",
      designation: "sales @ broadwayInfosys",
      delayAnimation: "200",
    },
    {
      imageName: "team3",
      desc: `I highly recommend Naresh, it was an amazing experience. They took the time to understand my vision and built an app that was both visually stunning and incredibly functional. Their expertise in app development is second to none.`,
      reviewerName: "codesoft",
      designation: "CEO @ codesoft",
      delayAnimation: "400",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
