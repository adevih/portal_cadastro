import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import interno
import "./index.css";
import Menu from "./menu";
import Cadastro from "./cadastro";
import New from "./new";
import CadSuccess from "./cad_success";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Menu />,
		children: [
			{
				path: "/",
				element: <New />,
			},
			{
				path: "/cadastro",
				element: <Cadastro />,
				children: [
					{
						path: "/cadastro/:id",
					},
				],
			},
			{
				path: "cadastro/success/",
				element: <CadSuccess />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
