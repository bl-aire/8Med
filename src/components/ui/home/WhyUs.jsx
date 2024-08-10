import { Button, Typography } from "@material-tailwind/react"

import useWindowSize from "../../../assets/hooks/useWindowSize";
import { DesktopGrid, Plans, MobileGrid } from "../../base/Cards"

export default function WhyUs() {

    const size = useWindowSize()

    return (
        <div className="lg:flex-auto my-12">

            {size.width < 800 && <Plans />}

            

            {size.width > 800 ? <DesktopGrid /> : <MobileGrid/>}

        </div>
    )
}

//w-[100%] flex gap-6 flex-col lg:flex-row my-12 items-center justify-center