import { Link } from "react-router-dom";
import S from "./header.module.css";

// ** Issue
// import { LogoIcon } from "../../../assets/icons/logo.icon";
// import { SearchIcon } from "../../../assets/icons/search.icon";
// ** Solution
// Đường dẫn: relative => absolute
import { LogoIcon, SearchIcon } from "@/assets/icons";

import { CiShoppingCart } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "@/redux/hook.ts";
import { setUser } from "@/redux/auth/auth.slice.ts";

export function Header() {
    // Lấy từ redux xuống để kiểm tra xem thử người dùng đã login hay chưa
    const user = useAppSelector((state) => state.authReducer.user);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(setUser(null));
        // Xóa localStorage
    };

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
                {user ? (
                    <>
                        <Link className={S["nav-link"]} to={"/profile"}>
                            Profile
                        </Link>
                        <button className={"text-white"} onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        {/* Chưa đăng nhập */}
                        <Link className={S["nav-link"]} to={"/login"}>
                            Login
                        </Link>
                        <Link className={S["nav-link"]} to={"/register"}>
                            Register
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}
