import { Typography, Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind/react"
import useSWR from 'swr';
import React from "react";

import cross from "../../../assets/cross.svg"

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

export default function Faq() {

    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const {
        data: faqs,
        error,
        isValidating,
    } = useSWR("https://eightmedical.onrender.com/faq", fetcher);

    if (error) return <div className='failed'>failed to load</div>;
    if (isValidating) return <div className="Loading">Loading...</div>;

    return (
        <div className="w-[100%] bg-[#F5F7F5] py-16 px-6">
            <Typography variant="h4" className="text-center mb-12">
                Frequently Asked Questions
            </Typography>

            <div className="w-full md:max-w-[50%] mx-auto ">
                {faqs &&
                    faqs.map((faq, key) => (
                        <Accordion open={open === key} animate={CUSTOM_ANIMATION} className="full">
                            <AccordionHeader onClick={() => handleOpen(key)} className="w-full">
                                <Typography variant="h6" className="w-full flex items-center justify-between">
                                    {faq.question}
                                    <img src={cross} alt="" />
                                </Typography>
                            </AccordionHeader>
                            <AccordionBody>
                                <Typography>
                                    {faq.answer}
                                </Typography>
                            </AccordionBody>
                        </Accordion>

                    ))
                }
            </div>


        </div>
    )
}