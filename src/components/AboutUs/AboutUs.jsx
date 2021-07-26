import React from "react";
import "./AboutUs.css";
import Typewriter from "typewriter-effect";
import AboutUsCard from "./AboutUsCard";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* header section  */}
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h3 className="About__main__h3">
              <Typewriter
                options={{
                  strings: ["About Us"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
          </div>

          <h5 className="RubyDev__title1 container">
            We are a leading digital development agency offering web and
            mobility solutions to a spectrum of industries including e-commerce,
            healthcare, hospitality, and F&B. Headquartered in Biratnagar,Nepal
            and outfitted with a team of highly talented industry professionals,
            expert designers and skilled developers, we build digital products
            that boost your business exponentially. <br />
          </h5>
        </div>
      </div>
      {/* header section ends */}

      <div className="container visionmissionvalues">
        <div className="row">
          <div className="col-md-4 col-sm-10 aboutus__card__col">
            <AboutUsCard
              image="https://hashtechnologies.net/wp-content/uploads/2021/02/Vision.png"
              description="To create absolute digital solidarity for the businesses to find seamless growth and success. We envision a digitally fueled business world where every brand is placed in the prospective customer’s immediate reach bringing timeless profits."
            />
          </div>
          <div className="col-md-4 col-sm-10 aboutus__card__col">
            <AboutUsCard
              image="https://hashtechnologies.net/wp-content/uploads/2021/02/mission.png"
              description="To become an extended department of the organizations offering them unique value propositions through best technological tools. To develop expandable digital architecture through websites and mobile apps and create meticulous brand cohesion for the growing companies."
            />
          </div>
          <div className="col-md-4 col-sm-10 aboutus__card__col">
            <AboutUsCard
              image="https://hashtechnologies.net/wp-content/uploads/2021/02/Values.png"
              description="We hold an expertise of working with organizations of all sizes across numerous industry realms. Our specialization remains developing scalable and customized mobile applications for funded start-ups as well as fast-growing companies that need an instant digital boost."
            />
          </div>
        </div>
      </div>

      {/* 2nd part */}

      <motion.div
        className="container ourapproach"
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 2.8,
          delay: 0.4,
        }}
      >
        <div className="row">
          <div className="col-sm-6">
            <img
              className="first-image"
              src="https://hashtechnologies.net/wp-content/uploads/2021/02/Capture.png"
              alt="hero"
            />
          </div>
          <div className="col-sm-6">
            <h3 className="About__main__h3">
              <Typewriter
                options={{
                  strings: ["Approach We Follow"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>

            <p>
              We ideate, we sketch the process, we design, we develop, we test
              and we launch integrated mobility and web solutions, in the best
              possible framework. Catering to mobile entertainment, mobile
              commerce, mobile services and mobile marketing domains, we help
              the small firms, midsized companies and large enterprises to
              distribute their digital content and interactive services for
              endless mobile users. Our endeavours are completely dedicated to
              offering end-to-end enterprise mobility solutions to help the
              companies promote their businesses and trade. Our bespoke web
              designs and mobile applications are the best tools for you to
              reach your target audiences and assure optimum conversions.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Our Process start */}
      <div className="container mb-5 ourprocess col-md-12 col-sm-12">
        <div className="row">
          <h3 className="About__main__h3">
            <Typewriter
              options={{
                strings: ["Our Process"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <img
            src="https://hashtechnologies.net/wp-content/uploads/2021/02/123.png"
            alt="processimage"
            style={{
              width: "75%",
              marginLeft: "auto",
              marginRight: "auto",
              height: "500px",
            }}
          />
          <img
            src="https://hashtechnologies.net/wp-content/uploads/2021/02/111.png"
            alt="2nd"
            style={{ width: "75%", height: "500px" }}
          />
        </div>
      </div>
      {/* Our process section ends */}
    </>
  );
};

export default About;
