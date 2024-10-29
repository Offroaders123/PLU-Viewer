/* @refresh reload */
import { render } from "solid-js/web";
import { App } from "./App.js";
import "./index.css";

if (window.isSecureContext && !import.meta.env.DEV){
  await navigator.serviceWorker.register("./service-worker.js");
}

const root: HTMLDivElement = document.querySelector("#root")!;

render(() => <App/>, root);