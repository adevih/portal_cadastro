import logo from "./logo.svg";
import React from "react";
import "./App.css";

function Home() {
	return (
		<div className="App  bg-gray-200">
			{/* /* {Menu()} / */}
			<header className="App-header">
				<form
					className="bg-white rounded-md w-3/4 h-3/4 p-10"
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<div className="flex flex-col justify-center items-center m-10">
						<h2 className="text-black">Portal Cadastro</h2>
						<img src={logo} className=" mb-0 " width="100" alt="logo" />
					</div>
				</form>
			</header>
		</div>
	);
}

export default Home;
