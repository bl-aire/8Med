import React from "react";
import { Typography, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";

import { ChevronDownIcon } from "@heroicons/react/24/solid";


export default function SelectMenu() {
    const [openMenu, setOpenMenu] = React.useState(false);

    const menuItems = [
        {
            title: "Ambulance Standby",
            description:
                "Lorem ipsum",
        },
        {
            title: "Air and Ground Transport",
            description:
                "Lorem Ipsum",
        },
    ];
    return (
        <Menu open={openMenu} handler={setOpenMenu} allowHover>
            <MenuHandler>
                <Typography

                    className="flex items-center gap-3 text-base font-normal capitalize tracking-normal"
                >
                    Services{" "}
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""}`}
                    />
                </Typography>
            </MenuHandler>
            <MenuList className="hidden w-[20rem] gap-3 overflow-visible grid border-none">
                <ul className="flex w-full flex-col gap-1">
                    {menuItems.map(({ title, description }) => (
                        <a href="#" key={title}>
                            <MenuItem>
                                <Typography variant="h6" className="mb-1">
                                    {title}
                                </Typography>
                                <Typography
                                    variant="small"
                                    className="font-normal"
                                >
                                    {description}
                                </Typography>
                            </MenuItem>
                        </a>
                    ))}
                </ul>
            </MenuList>
        </Menu>
    )
}