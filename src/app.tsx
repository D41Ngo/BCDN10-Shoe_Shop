// ** Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.config.tsx";
// ** End - Router
import { GlobalStyle } from "./components/global-style/global-style.tsx";

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
