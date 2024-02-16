import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const BrowserRouter = createBrowserRouter()

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <BrowserRouter>
    <RouterProvider routes={routes} />
    </BrowserRouter>
);
