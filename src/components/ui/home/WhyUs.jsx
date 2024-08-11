import useWindowSize from "../../../assets/hooks/useWindowSize";
import { Plans } from "../../base/Cards";
import { DesktopGrid } from "../../base/DesktopGrid";
import { MobileGrid } from "../../base/MobileGrid";

export default function WhyUs() {

    const size = useWindowSize()

    return (
        <div className="lg:flex-auto my-12">

            {size.width < 800 && <Plans />}

            {size.width > 800 ? <DesktopGrid /> : <MobileGrid/>}

        </div>
    )
}