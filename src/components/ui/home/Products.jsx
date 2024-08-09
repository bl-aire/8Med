import useSWR from 'swr';
import { Typography, Button } from "@material-tailwind/react";
import React from 'react';

import arrow from "../../../assets/fi_arrow-left.svg"
import purpleKnot from "../../../assets/thorusknot.png"

import { ProductCard } from "../../base/Cards";

export default function Products() {

    //const productUrl = import.meta.env.VITE_PRODUCT_API_ENDPOINT

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const {
        data: products,
        error,
        isValidating,
    } = useSWR("https://eightmedical.onrender.com/products", fetcher);

    if (error) return <div className='failed'>failed to load</div>;
    if (isValidating) return <div className="Loading">Loading...</div>;

    return (
        <div className="py-12">
            <div className='flex max-sm:flex-col gap-6 justify-between flex-wrap align-center mb-12'>
                <div>
                    <div className="flex gap-2 bg-[#0000000F] mb-2 py-2 px-6 rounded-[20px] w-fit items-center">
                        <img src={purpleKnot} alt="" className="w-[24px]" />
                        <Typography variant="small">
                            Limited Time Offer: Summer sale only valid until 07/31
                        </Typography>
                    </div>
                    <Typography
                        variant="h4"
                        className="flex flex-col"
                    >
                        <span>Budget-friendly weight loss</span> medications that actually work.
                    </Typography>
                </div>
                <Typography>
                    A unique plan tailored for you, <br /> for wherever you are in your journey.
                </Typography>
                <Button variant="outlined" className="outline-button capitalize flex items-center gap-3 w-fit h-fit">
                    Explore pricing plans <img src={arrow} alt="arrow icon" />
                </Button>
            </div>
            <div className='flex max-sm:flex-col gap-6 justify-between flex-wrap align-center'>
                {products &&
                    products.map((product, key) => (
                        <ProductCard
                            name={product.name}
                            description={`${product.description.slice(0, 80)}...`}
                            price={product.price}
                            discount={product.discount}
                            image={`https://eightmedical.onrender.com/${product.image}`}
                            key={key}
                        />

                    ))
                }
            </div>
        </div>
    )
}