import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/templates/components/header/header";
import { Footer } from "src/templates/components/footer";
import { Menu } from "src/templates/components/menu";

export function UserTemplate() {
    return (
        <>
            <Header />
            <Menu />

            <main>
                <Suspense fallback="Loading...">
                    <Outlet />
                </Suspense>
            </main>

            <Footer />
        </>
    );
}
