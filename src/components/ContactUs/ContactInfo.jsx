import React from "react";
import "./ContactInfo.css";
import ContactUsImg from "./ContactUsImg";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import ContactInfoItem from "./ContactInfoItem";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <>
      <div className="ContactInfo container">
        <div className="row">
          <motion.div
            className="ContactInfo__image col-md-6 col-12 container-fluid"
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <ContactUsImg />
          </motion.div>
          <motion.div
            className="contactinfo__col col-md-6 col-12"
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <ContactInfoItem
              Icon={EditLocationIcon}
              text="Address"
              value="Hash Towers , Traffic Chowk , Biratnagar"
            />
            <ContactInfoItem
              Icon={EmailIcon}
              text="Email At Us"
              value="info@hashtechnologies.net"
            />
            <ContactInfoItem
              Icon={PhoneIcon}
              text="Contact Us "
              value="+977-21-511707/9804098333"
            />
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
