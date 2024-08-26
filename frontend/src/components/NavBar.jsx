import React from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/choji-logo.png'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
export default function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 500 && setOpenNav(false), // Change to 500px
    );
  }, []);
 
  const navList = (
    <img
  src={logo} // Replace with the actual path to your image
  alt="Navigation"
  className="w-16 h-auto object-contain" // w-48 corresponds to 192px (close to 200px)
/>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 xs:px-8 xs:py-4 bg-[#282828]">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-bold"
        >
          <Link to="/">
          <Button
            //   variant="gradient"
              size="sm"
              className="bg-[#ECD313] hidden xs:inline-block"
            >
              <span>Order</span>
            </Button>
          </Link>
        </Typography>
        <div className="hidden xs:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <Link to="/contact">
            <Button
            //   variant="gradient"
              size="sm"
              className="bg-[#FFFFFF] hidden xs:inline-block text-gray-900 mx-2"
            >
              <span>Login</span>
            </Button>
          </Link>
          <Link to="/contact">
            <Button
            //   variant="gradient"
              size="sm"
              className="bg-[#2CCA50] hidden xs:inline-block"
            >
              <span>Sign Up</span>
            </Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent xs:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Link to="/contact">
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Contact</span>
              </Button>
            </Link>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
