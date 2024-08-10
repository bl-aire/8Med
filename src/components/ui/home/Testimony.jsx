import useSWR from 'swr';
import { Typography, Button, Spinner } from "@material-tailwind/react";
import React from 'react';

import knot from "../../../assets/thorus2.svg"

export default function Testimony() {

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const {
        data: testimonies,
        error,
        isValidating,
    } = useSWR("https://eightmedical.onrender.com/testimonials", fetcher);

    /*if (error) return <div className='failed'>failed to load</div>;*/
    if (isValidating) return <div className="Loading"><Spinner /></div>;

    return (
        <div>
            <div className="w-full md:max-w-[30rem] text-center mx-auto my-6">
                <div className="flex gap-2 bg-[#0000000F] py-2 px-6 rounded-[20px] w-fit mx-auto">
                    <img src={knot} alt="" className="w-[24px]" />
                    <Typography variant="small">
                        Testimonials
                    </Typography>
                </div>
                <Typography variant="h4" className="my-3">
                    See what thousands of <br /> satisfied customers are saying
                </Typography>
                <Typography class="mt-2">
                    See how our valued customers are reaching their weight loss goals with our exclusive discounted deals and premium products.
                </Typography>
            </div>
            {testimonies &&
                testimonies.map((testimony, key) => (
                    <p>{testimony.firstName}</p>
                    //description={`${product.description.slice(0, 80)}...`}
                    // <img src={`https://eightmedical.onrender.com/${testimony.profilePicture}`} />

                ))
            }
        </div>
    )
}