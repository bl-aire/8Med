import React from "react";
import { Outlet, Link } from "react-router-dom";

import logo from "../../assets/8medical.svg"

import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Button,
} from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link to="/" className="flex items-center header-link transition-colors">
                    Services
                </Link>
            </Typography>
            <Typography
                as="li"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link to="/" className="flex items-center">
                    Pricing
                </Link>
            </Typography>
            <Typography
                as="li"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link to="/" className="flex items-center">
                    Blog
                </Link>
            </Typography>
            <Typography
                as="li"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link to="/contact" className="flex items-center">
                    Contact Us
                </Link>
            </Typography>

            <Button className="green-button capitalize md:hidden lg:hidden">
                <Link to="/contact">
                    Panic Button
                </Link>
            </Button>
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
        <Navbar className="mx-auto w-screen px-6 py-3 shadow-none">
            <div className="flex items-center justify-between text-blue-gray-900">
                <div className="flex">
                    <Link to="/">
                        <img src={logo} alt="Aura logo" className="cursor-pointer h-[40px] logo" />
                    </Link>
                    <div className="flex hidden lg:block ml-[10rem]">
                        <NavList />
                    </div>

                </div>

                <div className="hidden lg:block">
                    <Button className="green-button capitalize">
                        <Link to="/contact">
                            Panic Button
                        </Link>
                    </Button>
                </div>





                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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