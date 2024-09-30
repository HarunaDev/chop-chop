// import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/choji-logo.png';
import { motion } from "framer-motion";
import {
  Navbar,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function NavbarDefault(prop) {
  // No mobile nav handling needed
  const navList = (
    <Link to="/">
      <img
        src={logo}
        alt="Navigation"
        className="w-16 h-auto object-contain"
      />
    </Link>
  );

  return (
    <motion.div 
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#EEEEEE]"
    >
      <Navbar className="mx-auto max-w-screen-xl px-4 py-2 xs:px-8 xs:py-4 bg-[#282828]">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-bold">
            <Link to={prop.url}>
              <Button size="sm" className="bg-[#ECD313]">
                <span>{prop.text}</span>
              </Button>
            </Link>
          </Typography>
          
          {/* Normal Navbar */}
          <div>{navList}</div>
          
          {/* User Auth Buttons */}
          <div className="flex items-center gap-x-1">
            {prop.user === null ? (
              <>
                <Link to="/login">
                  <Button size="sm" className="bg-[#FFFFFF] text-gray-900 mx-2">
                    <span>Login</span>
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm" className="bg-[#2CCA50]">
                    <span>Sign Up</span>
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <p className="text-gray-200 mx-4">Hello {prop.user}</p>
                <Link to="/logout">
                  <Button size="sm" className="bg-[#D42B31]">
                    <span>Logout</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Navbar>
    </motion.div>
  );
}
