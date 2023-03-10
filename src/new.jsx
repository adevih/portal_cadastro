import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, BrowserRouter } from "react-router-dom";
//import interno
import "./App.css";
import logo from "./logo.svg";

function Home() {
	return (
		<div className="App  bg-gray-200 w-screen">
			{/* /* {Menu()} / */}
			<header className="App-header">
				<form
					className="bg-white rounded-md w-3/4 h-3/4 p-10"
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<div className="flex flex-col justify-center items-center m-10 h-96">
						<div className=" justify-start h-28">
							<img src={logo} className=" mb-0 " width="100" alt="logo" />
						</div>
						<div>
							<h1 className=" text-slate-900">Seja bem vindo!</h1>
						</div>
						{/* Botão */}
						<div className="flex justify-center mt-5">
							<Link to={"/cadastro/1000"}>
								<input
									type="submit"
									value="Comece por aqui!"
									className="btt hover:dark:bg-slate-900 hover:text-white cursor-pointer transition-all delay-100 text-sm"
								/>
							</Link>
						</div>
					</div>
				</form>
			</header>
		</div>
	);
}

export default Home;
