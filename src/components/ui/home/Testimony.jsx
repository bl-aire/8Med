import useSWR from 'swr';
import { Typography, Button, Spinner } from "@material-tailwind/react";
import React from 'react';

import knot from "../../../assets/thorus2.svg"
import x from "../../../assets/x.svg"

export default function Testimony() {

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const {
        data: testimonies,
        error,
        isValidating,
    } = useSWR("https://eightmedical.onrender.com/testimonials", fetcher);

    /*if (error) return <div className='failed'>failed to load</div>;*/
    if (isValidating) return <div className="Loading mx-auto"><Spinner /></div>;

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
            <div className='w-full mx-auto my-2 flex flex-col md:flex-row flex-wrap justify-center p-6 '>
                {testimonies &&
                    testimonies.slice(0, 3).map((testimony, key) => (
                        <div className="w-full mb-6 max-w-[16rem] mx-auto flex flex-col">
                            <div className='w-full my-3'>
                                <img src={`https://eightmedical.onrender.com/${testimony.profilePicture}`} alt="" className='rounded-[20px]' />
                            </div>
                            <div className='bg-[#F9FAF9] rounded-[20px] p-3'>
                                <div className='my-3'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-3'>
                                            <img src={`https://eightmedical.onrender.com/${testimony.profilePicture}`} alt="" className='h-[40px] w-[40px] rounded-[100%]' />
                                            <div className='flex flex-col'>
                                                <span>
                                                    <small>
                                                        <b>
                                                            {testimony.firstName} {testimony.lastName}
                                                        </b>
                                                    </small>
                                                    <img src="" alt="" />
                                                </span>
                                                <small className='font-normal'>@{testimony.username}</small>
                                            </div>
                                        </div>
                                        <img src={x} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <Typography variant='small'>
                                        {`${testimony.testimonial.slice(0, 80)}...`}
                                    </Typography>
                                    <span>
                                        <small>5:25PM . Sep 1, 2023 . XDeck</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}