"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const navlinks = [
    { name: "Home", path: "#top" },
    { name: "About us", path: "#about" },
    { name: "Events", path: "#events" },
    { name: "Sponsors", path: "#sponsors" },
    { name: "Contact us", path: "#footer" },
  ];
  const [ham, setHam] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 968) {
      setHam(true);
    }
  }, []);

  const handleHam = () => {
    setActive(!active);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Navbar}>
        <div className={styles.logo}>
          <Image src="https://res.cloudinary.com/sahincloudinary/image/upload/f_auto,q_auto/v1/Advay/logo" alt="Logo" fill="true" />
        </div>
        {ham && (
          <button onClick={handleHam} className={styles.hamburger}>
            {active ? (
              <Icon
                icon="line-md:menu-to-close-alt-transition"
                width="1.6em"
                height="1.6em"
                style={{ color: "white" }}
              />
            ) : (
              <Icon
                icon="line-md:close-to-menu-alt-transition"
                width="1.6em"
                height="1.6em"
                style={{ color: "white" }}
              />
            )}
          </button>
        )}
        <div className={`${styles.navlinks} ${active ? styles.activeNav : ""}`}>
          {navlinks.map((link) => {
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`${styles.navlink} ${usePathname() === link.path ? styles.active : ""}`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* <Link
            href="https://wa.me/916295265705?text=Hello%20Sahin,%20this%20is"
            target="_blank"
          >
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl custom" />
              <div className="px-8 py-2  bg-black rounded-3xl  relative group transition duration-500 text-white hover:bg-transparent">
                Lets Talk
              </div>
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;