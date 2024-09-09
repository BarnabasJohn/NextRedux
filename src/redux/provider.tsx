//a provider is component that makes redux store available to other app components

"use client"

import { store } from "./store";
import { Provider } from "react-redux";

export function ReduxProvider({children}: { children: React.ReactNode}) {
    return <Provider store={store}> {children} </Provider>
}










