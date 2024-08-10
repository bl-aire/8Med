import { Typography, Button } from "@material-tailwind/react";

import star from "../../../src/assets/star.svg"
import star1 from "../../../src/assets/star1.png"
import check from "../../../src/assets/check-purple.png"
import checkorange from "../../../src/assets/check.svg"
import knot from "../../../src/assets/thorus knot-2.svg"



export function ProductCard(props) {

    const { discount, price, image, name, description } = props

    return (
        <div className="w-screen max-w-[20rem] mx-auto my-2 flex flex-col justify-between p-6 rounded-[20px] bg-[#F9FAF9] product-card">
            <div>
                <Typography className="flex items-center gap-2 bg-[#0000000F] w-fit py-1 px-6 rounded-[20px]" variant="small">
                    <b className="text-[#6D09F9] line-through">${discount}</b>
                    <b>${price}</b>
                </Typography>
            </div>
            <div>
                <img src={image} alt="" className="mx-auto pt-4 h-[10rem]" />
            </div>
            <div>
                <Typography variant="h6">
                    {name}
                    <sup>&reg;</sup>
                </Typography>
                <Typography className="product-description pb-4" variant="small">{description}</Typography>
                <div className="flex justify-between mt-4">
                    <Button className="product-button button capitalize w-fit px-8">Get Started</Button>
                    <Button className="outline-button product-button w-fit capitalize px-8" variant="outlined">Learn More</Button>
                </div>
            </div>
        </div>
    )
}





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
                <li className="flex gap-x-3">
                    <div className="mx-auto">
                        <Typography variant="h6" className="text-center">
                            8Medical
                        </Typography>
                        <span className="flex mt-3 gap-2 why-tag px-2 items-center">
                            <img src={star1} alt="star icon" className="h-[15px]" />
                            <small>25k+</small>
                            <small>5 star reviews</small>
                        </span>
                    </div>
                </li>
                <li className="flex gap-x-3">
                    <div className="mx-auto">
                        <Typography variant="h6" className="text-center">
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





export function Plans() {

    const SelfpayText = [
        "Monthly doctor visits",
        "Personalized nutrition plans",
        "Workout plans",
        "Medication cost included",
        "Semaglutide($295/mo.)",
        "Tirzepatide($359/mo, $399 in LA, ME, nc)"
    ]

    const insuranceText = [
        "Use for Zepbound and Wegovy request",
        "Personalized nutrition plans",
        "Workout plans",
        "Medication prescription(if approved)",
        "Pharmacy determines co-pay"
    ]

    return (
        <div>
            <div className="w-full md:max-w-[30rem]">
                <div className="flex gap-2 bg-[#0000000F] py-2 px-6 rounded-[20px] w-fit">
                    <img src={knot} alt="" className="w-[24px]" />
                    <Typography variant="small">
                        Get started for as low as $295/mo.
                    </Typography>
                </div>
                <Typography variant="h4" className="my-3">
                    Choose a plan <br /> that fits your budget
                </Typography>
                <Typography class="mt-2">
                    Your insurance status doesn’t prevent you from getting care. If your insurance company does not cover your meds, we have an affordable plan for you with no hidden fees.
                </Typography>
            </div>
            <div className="flex flex-col min-sm:flex-row gap-4 my-6">
                <div className="why-cards self-pay max-w-[20rem] mx-auto">
                    <div>
                        <Typography className="bg-[#0000000F] w-fit rounded-[20px] px-4">
                            $295
                        </Typography>
                        <Typography variant="h4" className="my-1">Self-pay</Typography>
                        <Typography variant="small">The hassle-free option</Typography>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 mt-2">
                            {SelfpayText.map((data) => (
                                <Typography as="li" variant="small" className="flex gap-3">
                                    <img src={checkorange} alt="" />
                                    <span>{data}</span>
                                </Typography>
                            ))}
                        </ul>
                        <div className="pt-6 flex gap-3 justify-between">
                            <Button variant="outlined" className="capitalize button">Learn more</Button>
                            <Button className="capitalize button">Choose plan</Button>
                        </div>
                    </div>
                </div>
                <div className="why-cards insurance max-w-[20rem] mx-auto my-6">
                    <div>
                        <Typography className="bg-[#0000000F] w-fit rounded-[20px] px-4">
                            $295
                        </Typography>
                        <Typography variant="h4" className="my-1">Insurance</Typography>
                        <Typography variant="small">The hassle-free option</Typography>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 mt-2">
                            {insuranceText.map((data) => (
                                <Typography as="li" variant="small" className="flex gap-3">
                                    <img src={checkorange} alt="" />
                                    <span>{data}</span>
                                </Typography>
                            ))}
                        </ul>
                        <div className="pt-6 flex gap-3 justify-between">
                            <Button variant="outlined" className="capitalize button">Learn more</Button>
                            <Button className="capitalize button">Choose plan</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}





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
                    <li className="flex gap-x-3 mb-3">
                        <div className="mx-auto">
                            <Typography variant="h6" className="text-center">
                                8Medical
                            </Typography>
                            <span className="flex mt-3 gap-2 why-tag px-2 items-center">
                                <img src={star1} alt="star icon" className="h-[15px]" />
                                <small>25k+</small>
                                <small>5 star reviews</small>
                            </span>
                        </div>
                    </li>
                    {renderCheckIcon()}
                    <li className="flex gap-x-3">
                        <Typography className="mx-auto" variant="small">
                            As low as $75/mo.
                        </Typography>
                    </li>
                    <Button className="button capitalize md:px-10 mx-auto flex gap-x-3 mt-6">Try 8Medical</Button>
                </ul>
            </div>
            <div className="others why-cards max-w-[20rem] mx-auto my-6">
                <ul>
                    <li className="flex gap-x-3 mb-3">
                        <div className="mx-auto">
                            <Typography variant="h6" className="text-center">
                                Others
                            </Typography>
                            <span className="flex mt-3 gap-2 why-tag px-2 items-center">
                                <img src={star} alt="star icon" className="h-[15px]" />
                                <small>25k+</small>
                                <small>1 star reviews</small>
                            </span>
                        </div>
                    </li>

                    {renderMinusIcon()}

                    <li className="flex gap-x-3 justify-center">
                        <Typography className="mx-auto" variant="small">
                            $300/mo.
                        </Typography>
                    </li>
                </ul>
            </div>
        </div>
    )
}