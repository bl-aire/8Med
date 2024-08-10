import useSWR from 'swr';
import { Typography, Button, Spinner } from "@material-tailwind/react";
import React from 'react';

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