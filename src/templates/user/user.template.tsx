import { Link, NavLink, Outlet } from "react-router-dom";

export function UserTemplate() {
    return (
        <>
            <header>
                <Link to={"/"}>Home</Link>
                <Link to={"/detail"}>Detail</Link>
                <NavLink to={"/carts"}>Carts</NavLink>
            </header>

            <main>
                Component Page: <Outlet />
            </main>

            <footer>Footer</footer>
        </>
    );
}
