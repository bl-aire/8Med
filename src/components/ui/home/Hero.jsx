import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import useWindowSize from "../../../assets/hooks/useWindowSize";

import mobileHero from "../../../assets/mobile-hero.svg"
import desktopHero from "../../../assets/desktop.png"
import purpleKnot from "../../../assets/thorusknot.png"
import check from "../../../assets/group.svg"
import arrow from "../../../assets/fi_arrow-left.svg"

export default function Hero() {

    const size = useWindowSize()

    return (
        <div className="hero py-5 px-6 lg:flex lg:flex-row-reverse items-center justify-between max-w-full h-fit">
            <div className="lg:w-1/2">
                <img src={size.width > 800 ? desktopHero : mobileHero} alt="A blonde lady on an orange top" className="rounded-[20px] mx-auto" />
            </div>
            <div className="my-6 lg:w-1/2">
                <div className="flex gap-2 bg-[#0000000F] py-2 px-6 rounded-[20px] w-fit">
                    <img src={purpleKnot} alt="" className="w-[24px]" />
                    <Typography variant="small">
                        Start your journey for just $295/month
                    </Typography>
                </div>
                <Typography
                    variant="h3"
                    className="flex flex-col mt-6"
                >
                    <span className="text-[#6D09F9]">Get more affordable </span> Medication for your weightloss program
                </Typography>
                <ul className="perks py-6 flex flex-col gap-2">
                    <Typography
                        as="li"
                        className="flex gap-2"
                    >
                        <img src={check} alt="check icon" /> Doctor personalized plans, just for you.
                    </Typography>
                    <Typography
                        as="li"
                        className="flex gap-2"
                    >
                        <img src={check} alt="check icon" /> Lose up to 25% of your weight.
                    </Typography>
                    <Typography
                        as="li"
                        className="flex gap-2"
                    >
                        <img src={check} alt="check icon" /> All inclusive pricing.
                    </Typography>
                </ul>
                <div className="flex flex-col gap-4 md:flex-row items-center justify-between md:justify-start md:gap-8 py-6">
                    <Button className="button px-14 capitalize">Get Started</Button>
                    <Link to="/" className="flex items-center gap-3">
                        Explore pricing plans <img src={arrow} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}