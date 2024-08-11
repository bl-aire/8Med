import { Typography, Button } from "@material-tailwind/react"

import check from "../../../src/assets/check-purple.png"
import star from "../../../src/assets/star.svg";
import star1 from "../../../src/assets/star1.png";

export function DesktopGrid() {
    return (
        <div className="p-8 sm:p-10 lg:flex-auto">
            <div className="w-full md:max-w-[30rem]">
                <Typography variant="h3">
                    Why choose <br /><span className="text-[#6D09F9]">8Medical</span>
                </Typography>
                <Typography class="mt-2">
                    Explore and contrast some of the distinctive deals offered by 8Medical that you won’t find anywhere else.
                </Typography>
            </div>
            <ul role="list" className="w-[80%] mx-auto grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-3 sm:gap-6">
                <li className="flex gap-x-3">
                </li>
                <li className="flex gap-x-3 py-6">
                    <div className="mx-auto">
                        <Typography variant="h5" className="text-center">
                            8Medical
                        </Typography>
                        <span className="flex mt-3 gap-2 why-tag px-2 items-center">
                            <img src={star1} alt="star icon" className="h-[15px]" />
                            <small>25k+</small>
                            <small>5 star reviews</small>
                        </span>
                    </div>
                </li>
                <li className="flex gap-x-3 py-6">
                    <div className="mx-auto">
                        <Typography variant="h5" className="text-center">
                            Others
                        </Typography>
                        <span className="flex mt-3 gap-2 why-tag px-2 items-center">
                            <img src={star} alt="star icon" className="h-[15px]" />
                            <small>25k+</small>
                            <small>1 star reviews</small>
                        </span>
                    </div>
                </li>
                <li className="flex gap-x-3">
                    <Typography>
                        Target multiple appetite regulators
                    </Typography>
                </li>
                <li className="flex gap-x-3 mx-auto">
                    <img src={check} alt="check icon" className="h-[20px]" />
                </li>
                <li className="flex gap-x-3 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                    </svg>
                </li>
                <li className="flex gap-x-3">
                    <Typography>
                        Holistic program
                    </Typography>
                </li>
                <li className="flex gap-x-3 mx-auto">
                    <img src={check} alt="check icon" className="h-[20px]" />
                </li>
                <li className="flex gap-x-3 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                    </svg>
                </li>
                <li className="flex gap-x-3">
                    <Typography>
                        No needles or injections
                    </Typography>
                </li>
                <li className="flex gap-x-3 mx-auto">
                    <img src={check} alt="check icon" className="h-[20px]" />
                </li>
                <li className="flex gap-x-3 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                    </svg>
                </li>
                <li className="flex gap-x-3">
                    <Typography>
                        Affordable
                    </Typography>
                </li>
                <li className="flex gap-x-3 mx-auto">
                    <img src={check} alt="check icon" className="h-[20px]" />
                </li>
                <li className="flex gap-x-3 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                    </svg>
                </li>
                <li className="flex gap-x-3">
                    <Typography>
                        No insurance required
                    </Typography>
                </li>
                <li className="flex gap-x-3">
                    <Typography className="mx-auto">
                        As low as $75/mo.
                    </Typography>
                </li>
                <li className="flex gap-x-3">
                    <Typography className="mx-auto">
                        $300/mo
                    </Typography>
                </li>
                <li className="flex gap-x-3">

                </li>
                <li className="flex gap-x-3">
                    <Button className="button capitalize md:px-10 mx-auto">Try 8Medical</Button>
                </li>
                <li className="flex gap-x-3">
                </li>
            </ul>
        </div>
    )
}