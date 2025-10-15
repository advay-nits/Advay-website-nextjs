"use client";

import Image from "next/image";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PinDropIcon from "@mui/icons-material/PinDrop";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.Footer} id="footer"> 
      <Image src="/images/Footerbackground.png" fill="true" alt="advay" />
      <div>
        <h3>Contact us</h3>
        <ul>
          <li>Gopal Ranjan - 9955960437</li>
          <li>Rishabh Mishra - 9369769882</li>
          <li>
            <MailOutlineIcon /> advay@nits.ac.in
          </li>
        </ul>
      </div>
      <div>
        <div className={styles.logo}>
          {" "}
          <Image src="/images/Drama-Logo.png" fill="true" alt="advay" />{" "}
        </div>
        All right reserved @Advay, NIT Silchar
      </div>
      <div>
        <ul>
          <li><h3>NIT Silchar</h3></li>
          <li>
            <PinDropIcon /> Silchar,Assam,788010
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
