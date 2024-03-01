import { PropsWithChildren, ReactNode } from "react";
import "./index.css";
import "./button.css";
// C2: ReactNode
type Props = {
    children: ReactNode;
};

// ------------------------------ C1: PropsWithChildren
export function GlobalStyle(props: PropsWithChildren) {
    return props.children;
}
