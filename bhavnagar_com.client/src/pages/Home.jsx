import { useOutletContext } from "react-router-dom";

import { Hero } from "../components/Hero";
import { DistrictAtGlance } from "../components/DistrictAtGlance";
import { Tourism } from "../components/Tourism";
import { CitizenServices } from "../components/CitizenServices";
import { BusinessDirectory } from "../components/BusinessDirectory";
import { News } from "../components/News";
import { Events } from "../components/Events";

export default function Home() {
    const { onSearchOpen } = useOutletContext();

    return (
        <>
            <Hero onSearchOpen={onSearchOpen} />

            <DistrictAtGlance />

            <Tourism />

            <CitizenServices />

            <BusinessDirectory />

            <News />

            <Events />
        </>
    );
}