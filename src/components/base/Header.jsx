import React from "react";
import ReactGA from 'react-ga';
import { Outlet, Link } from "react-router-dom";
import { Navbar, Collapse, Typography, IconButton, Button, } from "@material-tailwind/react";

import SelectMenu from "./Menu";

import logo from "../../assets/8medical.svg"
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";

function NavList() {

    function handleClick() {
        ReactGA.event({
          category: 'Button Click',
          action: 'Clicked on Buy Now',
          label: 'Product Page',
        });
      }

    return (
        <ul className="my-2 py-6 flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <Typography
                as="li"
                className="p-1 font-medium"
            >
                <SelectMenu/>
            </Typography>
            <Typography
                as="li"
                className="p-1 font-medium"
            >
                <Link to="/" className="navlink">
                    Pricing
                </Link>
            </Typography>
            <Typography
                as="li"
                className="p-1 font-medium"
            >
                <Link to="/" className="navlink">
                    Blog
                </Link>
            </Typography>
            <Typography
                as="li"
                className="p-1 font-medium"
            >
                <Link to="/contact" className="navlink">
                    Contact Us
                </Link>
            </Typography>
            <div className="flex gap-2 justify-between md:hidden">
                <Typography
                    as="li"
                    className="p-1 font-medium w-1/2"
                >
                    <Link to="/contact" className="navlink">
                        Sign In
                    </Link>
                </Typography>
                <Button className="button capitalize w-1/2 navbutton" onClick={handleClick}>
                    <Link to="/contact">
                        Getting Started
                    </Link>
                </Button>
            </div>
        </ul>
    );
}

export default function Header() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="max-w-full px-6 py-3 shadow-none">
            <div className="w-full justify-between flex items-center      ">
                <div className="flex items-center gap-[3rem]">
                    <Link to="/">
                        <img src={logo} alt="Aura logo" className="cursor-pointer logo" />
                    </Link>
                    <div className="flex hidden md:block">
                        <NavList />
                    </div>
                </div>
                <div className="hidden md:block gap-6 md:flex items-center">
                    <Typography
                        className="p-1 font-medium"
                    >
                        <Link to="/">
                            Sign In
                        </Link>
                    </Typography>
                    <Button className="capitalize button navbutton lg:px-14">
                        <Link to="/">
                            Get Started
                        </Link>
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
            <Outlet />
        </Navbar>
    );
}