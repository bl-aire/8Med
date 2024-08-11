import { Typography, Button } from "@material-tailwind/react";

import star from "../../../src/assets/star.svg";
import star1 from "../../../src/assets/star1.png";
import checkorange from "../../../src/assets/check.svg";

export function MobileGrid() {

    const why8medLIst = [
        "Targets multiple appetite regulators",
        "Holistic program",
        "No needles or injections",
        "Affordable",
        "No insurance required"
    ];

    const checkNumber = 4;
    const checkList = [];

    const minusNumber = 4;
    const minusList = [];


    const renderCheckIcon = () => {
        for (let i = 0; i < checkNumber; i++) {
            checkList.push(
                <li className="flex gap-x-3">
                    <img src={checkorange} alt="check icon" className="h-[20px] mx-auto" />
                </li>
            )
        }
        return checkList;
    }

    const renderMinusIcon = () => {
        for (let i = 0; i < minusNumber; i++) {
            minusList.push(
                <li className="flex gap-x-3 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                    </svg>
                </li>
            )
        }
        return minusList;
    }

    return (
        <div>
            <div className="why-cards max-w-[20rem] mx-auto my-6">
                <div className="w-full md:max-w-[30rem] mb-6">
                    <Typography variant="h3" className="mb-3">
                        Why choose <br /><span className="text-[#6D09F9]">8Medical</span>
                    </Typography>
                    <Typography class="mt-2">
                        Explore and contrast some of the distinctive deals offered by 8Medical that you won’t find anywhere else.
                    </Typography>
                </div>
                <ul>
                    {why8medLIst.map((data) => (
                        <li className="flex gap-x-3 py-3 why8med-listitem">
                            <Typography className="flex gap-3">
                                {data}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="eight-med why-cards max-w-[20rem] mx-auto my-6">
                <ul>
                    <li className="flex gap-x-3">
                        <div className="mx-auto my-6">
                            <Typography variant="h5" className="text-center">
                                8Medical
                            </Typography>
                            <span className="flex mt-3 gap-2 why-tag px-6 py-1 items-center">
                                <img src={star1} alt="star icon" className="h-[15px]" />
                                <small>25k+</small>
                                <small>5 star reviews</small>
                            </span>
                        </div>
                    </li>
                    {renderCheckIcon()}
                    <li className="flex gap-x-3">
                        <Typography className="mx-auto">
                            As low as $75/mo.
                        </Typography>
                    </li>
                    <Button className="button capitalize md:px-10 mx-auto flex gap-x-3 mt-6">Try 8Medical</Button>
                </ul>
            </div>
            <div className="others why-cards max-w-[20rem] mx-auto my-6">
                <ul>
                    <li className="flex gap-x-3 mb-3">
                        <div className="mx-auto my-6">
                            <Typography variant="h5" className="text-center">
                                Others
                            </Typography>
                            <span className="flex mt-3 gap-2 why-tag px-6 py-1 items-center">
                                <img src={star} alt="star icon" className="h-[15px]" />
                                <small>25k+</small>
                                <small>1 star reviews</small>
                            </span>
                        </div>
                    </li>

                    {renderMinusIcon()}

                    <li className="flex gap-x-3 justify-center">
                        <Typography className="mx-auto">
                            $300/mo.
                        </Typography>
                    </li>
                </ul>
            </div>
        </div>
    )
}