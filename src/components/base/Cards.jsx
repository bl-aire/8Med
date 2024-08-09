import { Typography, Button } from "@material-tailwind/react";

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
                <img src={image} alt="" />
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