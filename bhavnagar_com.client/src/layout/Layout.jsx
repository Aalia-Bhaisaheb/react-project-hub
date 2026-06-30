import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollProgress } from "../components/ScrollProgress";
import { SearchOverlay } from "../components/SearchOverlay";

export default function Layout() {
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <>
            <ScrollProgress />

            <Navbar
                onSearchOpen={() => setSearchOpen(true)}
            />

            <SearchOverlay
                open={searchOpen}
                onClose={() => setSearchOpen(false)}
            />

            <main>
                <Outlet
                    context={{
                        onSearchOpen: () => setSearchOpen(true),
                    }}
                />
            </main>

            <Footer />
        </>
    );
}