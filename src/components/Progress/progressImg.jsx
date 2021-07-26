import React from "react";
import "./progressImg.css";
import { motion } from "framer-motion";

const progress = () => {
  return (
    <>
      <motion.div
        className="container"
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 2.8,
          delay: 2.1,
        }}
      >
        <img
          src="https://hashtechnologies.net/wp-content/uploads/2021/02/illustretioin-process-a9d3246c36a71ca41157cc9799a792bd.png"
          alt="Our Process"
          className="process__image"
        />
      </motion.div>
    </>
  );
};

export default progress;
