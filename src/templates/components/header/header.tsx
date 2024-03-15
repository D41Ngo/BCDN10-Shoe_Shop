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
    // Lấy từ redux xuống để kiểm tra xem thử người dùng đã login hay chưa
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

                {/* Nếu đăng nhập */}
                <Link className={S["nav-link"]} to={"/profile"}>
                    Profile
                </Link>

                {/* Chưa đăng nhập */}
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
