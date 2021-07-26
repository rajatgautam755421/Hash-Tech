import React from "react";
import "./PhrasesSec.css";
import Button from "../Button/Button";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PhrasesSec = () => {
  return (
    <>
      <motion.div className="main__phrase__sec container">
        <div className="row">
          {/* First column */}
          <motion.div
            className="col-md-6 col-sm-10"
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2.8, delay: 1.5 }}
          >
            <h3 className="main__phrase__sec__h3">
              One stop shop for Blockchain, Web and Mobile Application
              Development
              <br />
              <br />
            </h3>
            <p className="main__phrase__sec__p">
              Hash Technologies is a software development company with a special
              focus on start-up and developing companies. We understand the
              stress and frustration that it takes to start a company, and take
              that burden off our customers problem list.
              <br />
              <br />
              <br />
              Through our office in Biratnagar we offer competitive software
              development and maintenance services across the globe and around
              the clock.
              <br />
              <br />
              <br />
              We have a team of experienced agile developer / designers who get
              the things done. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Laboriosam dolorum aliquid dolorem culpa nemo
              nobis in maiores doloribus, iure ducimus cumque fuga laborum rerum
              quaerat aut doloremque! Quis, delectus harum eaque quae cupiditate
              natus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam deleniti dolores beatae et
            </p>
            <br />
            <Link to="/main-services" style={{ textDecoration: "none" }}>
              <Button Icon={BookOutlinedIcon} text="Learn More" type="button" />
            </Link>
          </motion.div>
          {/* Second Column */}
          <motion.div
            className=" col-md-6 col-sm-10"
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2.8, delay: 1.5 }}
          >
            {/* Second Column first row*/}
            <div className="second__col__first__row row container-fluid">
              <p>
                Get a full spectrum of Blockchain development services to expand
                your e-commerce business potency using the highly sophisticated
                blockchain technologies that we offer for data storage,
                integrity verification, and continued transactions.
              </p>
            </div>
            <Link
              to="/blockchain-devlopment"
              style={{ textDecoration: "none" }}
            >
              <Button
                Icon={BookOutlinedIcon}
                text="Our Services"
                type="button"
                style={{ margin: "10px 0px 10px 0px" }}
                className="ourservices__button"
              />
            </Link>
            {/* Second Column second row*/}
            <div className="second__col__first__row row container-fluid">
              While the usage of mobiles and other hand-devices is witnessing an
              explosive growth, we find it as an opportunity to place your brand
              in every users hand. Our integrated expertise in mobile
              application development facilitates your business with augmented
              customer reach.
            </div>
            <Link to="app-devlopment" style={{ textDecoration: "none" }}>
              <Button
                Icon={BookOutlinedIcon}
                text="Learn More"
                type="button"
                style={{ margin: "10px 0px 10px 0px" }}
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default PhrasesSec;
