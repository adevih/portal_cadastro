import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Menu from "./menu";
import Cadastro from "./cadastro";
import New from "./new";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
	<Menu />,
	{
		path: "/",
		element: <New />,
	},
	{
		path: "cadastro",
		element: <Cadastro />,
	},
]);

const menuprincipal = createBrowserRouter([
	{
		path: "/",
		element: <Menu />,
		children: [
			{
				path: "cadastro",
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={menuprincipal} />
		<RouterProvider router={router} />
	</React.StrictMode>
);
