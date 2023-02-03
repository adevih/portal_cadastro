import React from "react";
import "./App.css";
import logo from "./logo.svg";

function CadSuccess() {
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
							<h1 className=" text-slate-900 text-center">
								Obrigado por se cadastrar!<br></br> Em breve, entraremos em
								contato!
							</h1>
						</div>
					</div>
				</form>
			</header>
		</div>
	);
}

export default CadSuccess;
