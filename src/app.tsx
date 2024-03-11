// ** Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.config.tsx";
// ** End - Router
import { GlobalStyle } from "./components/global-style/global-style.tsx";

import { styled } from "styled-components";
import React from "react";

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

    return (
        <GlobalStyle>
            {/* ReactNode */}
            <RouterProvider router={router} />
        </GlobalStyle>
    );
}
