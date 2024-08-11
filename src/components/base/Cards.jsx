import { Typography, Button } from "@material-tailwind/react";

import checkorange from "../../../src/assets/check.svg";
import knot from "../../../src/assets/thorus2.svg";


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