import ReactGA from "react-ga4"

import Hero from "../components/ui/home/Hero"
import Products from "../components/ui/home/Products"
import Testimony from "../components/ui/home/Testimony"
import WhyUs from "../components/ui/home/WhyUs"

export default function HomePage() {

    ReactGA.send({
        hitType: "pageview",
        page: "/",
        title: "Home",
    })

    return(
        <div className="my-6">
            <Hero/>
            <Products/>
            <Testimony/>
            <WhyUs/>
        </div>
    )
}