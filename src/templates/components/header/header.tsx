import { Link, NavLink } from "react-router-dom";
import S from "./header.module.css";

// ** Issue
// import { LogoIcon } from "../../../assets/icons/logo.icon";
// import { SearchIcon } from "../../../assets/icons/search.icon";
// ** Solution
// Đường dẫn: relative => absolute
import { LogoIcon, SearchIcon } from "@/assets/icons";

import { CiShoppingCart } from "react-icons/ci";

export function Header() {
    return (
        <header className={S.header}>
            <Link to={"/"}>
                <LogoIcon />
            </Link>

            <div className={S["header-nav"]}>
                <Link className={S["nav-link"]} to={"/search"}>
                    <SearchIcon />

                    <span>Search</span>
                </Link>

                <Link className={S["nav-link"]} to={"/"}>
                    <CiShoppingCart />
                    <span>(1)</span>
                </Link>
                <Link className={S["nav-link"]} to={"/login"}>
                    Login
                </Link>
                <Link className={S["nav-link"]} to={"/register"}>
                    Register
                </Link>
            </div>
        </header>
    );
}
