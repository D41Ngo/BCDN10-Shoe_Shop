// ** Router
import { RouterProvider, useLocation } from "react-router-dom";
import { router } from "./router/router.config.tsx";
// ** End - Router
import { GlobalStyle } from "./components/global-style/global-style.tsx";

import { styled } from "styled-components";
import React, { useEffect } from "react";
import { getProfile } from "./services/index.ts";

// ** Định nghĩa type cho styled-component
type TH1Props = {
    color: string;
};

const H1 = styled.h3<TH1Props>`
    font-size: 50px;
    /* color: green; */

    /* Nhận props */

    color: ${(props) => {
        console.log(props);
        return props.color;
    }};
`;

/**
 * Không được tạo component bên trong component
 */

export function App() {
    // return <RouterProvider router={router} />;

    // ctrl+shift+p: restart ts server

    useEffect(() => {
        getProfile()
            .then(() => {
                // Lưu vào redux
            })
            .catch(console.log)
    }, [])

    return (
        <GlobalStyle>
            {/* ReactNode */}
            <RouterProvider router={router} />
        </GlobalStyle>
    );
}
