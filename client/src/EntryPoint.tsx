import * as React from "react";
import * as ReactDom from "react-dom";
import {App} from "./ui/App";

window.addEventListener("load", () => {
    const reactContainer = document.createElement("div");

    document.body.appendChild(reactContainer);
    ReactDom.render(<App/>, reactContainer);
});
