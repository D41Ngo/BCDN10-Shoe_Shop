import { Outlet } from "react-router-dom";
export function AdminTemplate() {
    return (
        <>
            <header>Header</header>

            <div
                style={{
                    display: "flex",
                    gap: "2rem",
                }}
            >
                <aside>Sidebar</aside>

                <main>
                    Component Page: <Outlet />
                </main>
            </div>
        </>
    );
}
