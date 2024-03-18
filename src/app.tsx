// ** Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.config.tsx";
// ** End - Router

// ** Redux
import { store } from './redux/store.config.ts';
import { Provider } from 'react-redux';
// ** End - Redux
import { GlobalStyle } from "./components/global-style/global-style.tsx";

import { useEffect } from "react";
import { getProfile } from "./services/index.ts";

export function App() {
    useEffect(() => {
        // 1.
        getProfile()
            .then((res) => {
                // Lưu vào redux
                console.log(res);
            })
            .catch(console.log)
    }, [])

    return (
        <GlobalStyle>
            <Provider store={store}>
                {/* ReactNode */}
                <RouterProvider router={router} />
            </Provider>
        </GlobalStyle>
    );
}
