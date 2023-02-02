import logo from "./logo.svg";
import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function Cadastro() {
	const [name, setName] = useState("");
	const [sobrenome, setSobrenome] = useState("");
	const [nascimento, setNascimento] = useState("");
	const [sexo, setSexo] = useState("masculino");
	const [rg, setRg] = useState("");
	const [cpf, setCpf] = useState("");
	const [cel, setCel] = useState("");
	const [email, setEmail] = useState("");
	const [estadoCivil, setEstadoCivil] = useState("solteiro");
	const [cep, setCep] = useState("");
	const [estado, setEstado] = useState("");
	const [cidade, setCidade] = useState("");
	const [endereco, setEndereco] = useState("");
	const [numEndereco, setNumEndereco] = useState("");
	const [complemento, setComplemento] = useState("");
	const [nacionalidade, setNacionaliade] = useState("brasil");
	//
	const [post, setPost] = React.useState("");
	useState("");
	const urlString = window.location.href;
	const urlS = new URL(urlString);
	const urlID = urlS.searchParams.get("");
	const url = process.env.url;

	// VERIFICAÇÃO ID NULO / DESABILITAR CAMPO

	var ativo = true;
	function disabled() {
		if (urlID == null) {
			ativo = true;
		} else {
			ativo = false;
		}
	}

	disabled();
	console.log(ativo);
	console.log(urlID);
	//

	const baseURL = url + urlID;
	//
	React.useEffect(() => {
		axios.get(baseURL).then((response) => {
			setPost(response.data[0]);
		});
	}, []);

	//atualizar o nome com o valor do campo
	const handleNomeChange = (e) => {
		setName(e.target.value);
	};
	const handleSobrenomeChange = (e) => {
		setSobrenome(e.target.value);
	};
	const handleNascimentoChange = (e) => {
		setNascimento(e.target.value);
	};
	const handleSexoChange = (e) => {
		setSexo(e.target.value);
	};
	const handleRgChange = (e) => {
		setRg(e.target.value.replace(/\D/g, ""));
	};
	const handleCpfChange = (e) => {
		setCpf(e.target.value.replace(/\D/g, ""));
	};
	const handleCelChange = (e) => {
		setCel(e.target.value.replace(/\D/g, ""));
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handleNacionalidadeChange = (e) => {
		setNacionaliade(e.target.value);
	};
	const handleEstadoCivilChange = (e) => {
		setEstadoCivil(e.target.value);
	};
	const handleCepChange = (e) => {
		setCep(e.target.value.replace(/\D/g, ""));
	};
	const handleEstadoChange = (e) => {
		setEstado(e.target.value);
	};
	const handleCidadeChange = (e) => {
		setCidade(e.target.value);
	};
	const handleEnderecoChange = (e) => {
		setEndereco(e.target.value);
	};
	const handleNumEnderecoChange = (e) => {
		setNumEndereco(e.target.value.replace(/\D/g, ""));
	};

	const handleComplementoChange = (e) => {
		// Texto que só aceita numero
		setComplemento(e.target.value);
	};

	// const list = {
	// 	masculino: "masculino",
	// 	feminino: "feminino",
	// 	outros: "outros",
	// };

	const handleSubmit = (e) => {
		axios
			.post(url, {
				rede_prim: post.id,
				rede_rank: parseFloat(post.rede_rank) + 1,
				nome: name,
				sobrenome: sobrenome,
				dt_nascimento: nascimento,
				sexo: sexo,
				rg: rg,
				cpf: cpf,
				cel: cel,
				email: email,
				nacionalidade: nacionalidade,
				est_civil: estadoCivil,
				cep: cep,
				estado: estado,
				cidade: cidade,
				endereco: endereco,
				num_endereco: numEndereco,
				complemento: complemento,
			})
			.then((response) => {
				setPost(response.data);
			});

		alert("Cadastro efetuado!");
		window.location.reload();
		e.preventDefault();
	};

	return (
		<div className="App  bg-gray-200">
			{/* {Menu()} */}
			<header className="App-header">
				<form
					className="bg-white rounded-md w-3/4 h-3/4 p-10"
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<div className="flex flex-col justify-center items-center m-10">
						{/* <h2 className="text-black">Portal Geah</h2> */}
						<a>
							<img src={logo} className=" mb-0 " width="100" alt="logo" />
						</a>
					</div>
					{/* Puxando Consultor que mandou o convite */}
					{/* <input
						className="txt m-3 text-black"
						placeholder="{...}"
						value={urlID}
						disabled
					/>
					<br />  */}
					{/*  */}
					{/* <input
						className="txt m-3"
						placeholder="..."
						value={post.nome + " " + post.sobrenome}
						disabled
					/>
					<br />

					{/* Novo Consultor */}

					<div className="grid xl:grid-cols-2 xl:gap-6">
						<div className="relative z-0 mb-8 w-full group">
							{/* Nome */}
							<input
								disabled={ativo}
								type="text"
								name="floating_nome"
								id="floating_nome"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
								placeholder=" "
								value={name}
								required
								onChange={(e) => {
									handleNomeChange(e);
								}}
							/>
							<label
								htmlFor="floating_nome"
								className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
							>
								Nome
							</label>
						</div>
						<div className="relative z-0 mb-8 w-full group">
							{/* Sobrenome */}
							<input
								disabled={ativo}
								type="text"
								name="floating_sobrenome"
								id="floating_sobrenome"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
								placeholder=" "
								value={sobrenome}
								required
								onChange={(e) => {
									handleSobrenomeChange(e);
								}}
							/>
							<label
								htmlFor="floating_sobrenome"
								className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
							>
								Sobrenome
							</label>
						</div>
					</div>
					{/*  */}

					<div className="grid xl:grid-cols-2 xl:gap-6">
						<div className="relative z-0 mb-8 w-full group">
							{/* RG */}
							<input
								disabled={ativo}
								type="text"
								maxLength={9}
								name="floating_rg"
								id="floating_rg"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
								placeholder=" "
								value={rg}
								required
								onChange={(e) => {
									handleRgChange(e);
								}}
							/>
							<label
								htmlFor="floating_rg"
								className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
							>
								RG
							</label>
						</div>
						<div className="relative z-0 mb-8 w-full group">
							{/* CPF */}
							<input
								disabled={ativo}
								type="text"
								maxLength={11}
								name="floating_cpf"
								id="floating_cpf"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
								placeholder=" "
								value={cpf}
								required
								onChange={(e) => {
									handleCpfChange(e);
								}}
							/>
							<label
								htmlFor="floating_cpf"
								className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
							>
								CPF
							</label>
						</div>
					</div>

					{/*  */}

					<div className="grid xl:grid-cols-4 xl:gap-6">
						<div className="relative z-0 mb-6 w-full group">
							{/* Data de Nascimento */}
							<input
								disabled={ativo}
								type="date"
								name="floating_data"
								id="floating_data"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
								placeholder=" "
								value={nascimento}
								required
								onChange={(e) => {
									handleNascimentoChange(e);
								}}
							/>
							<label
								htmlFor="floating_data"
								className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
							>
								Data de Nascimento
							</label>
						</div>
						<div className="relative z-0 mb-8 w-full group">
							{/* Sexo */}
							<select
								disabled={ativo}
								name="floating_sexo"
								id="floating_sexo"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
								required
								value={sexo}
								onChange={(e) => {
									handleSexoChange(e);
								}}
							>
								<option value="masculino">Masculino</option>
								<option value="feminino">Feminino</option>
								<option value="outros">Outros</option>
							</select>
							<label
								htmlFor="floating_sexo"
								className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
							>
								Sexo
							</label>
						</div>
						<div className="relative z-0 mb-8 w-full group">
							{/* EStado Civil */}
							<select
								disabled={ativo}
								name="floating_estadoCivil"
								id="floating_estado_Civil"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
								placeholder=" "
								required
								value={estadoCivil}
								onChange={(e) => {
									handleEstadoCivilChange(e);
								}}
							>
								<option value="solteiro">Solteiro</option>
								<option value="casado">Casado</option>
							</select>
							<label
								htmlFor="floating_EstadoCivil"
								className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
							>
								Estado Civil
							</label>
						</div>
						<div className="relative z-0 mb-8 w-full group">
							{/* nacionalidade */}
							<select
								disabled={ativo}
								name="floating_nacionalidade"
								id="floating_nacionalidade"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
								placeholder=" "
								required
								value={nacionalidade}
								onChange={(e) => {
									handleNacionalidadeChange(e);
								}}
							>
								<option value="brasil">Brasil</option>
								<option value="outros">Outros</option>
							</select>
							<label
								htmlFor="floating_nacionalidade"
								className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
							>
								Nacionalidade
							</label>
						</div>
					</div>

					{/*  */}

					{/*  */}

					<div className="grid xl:grid-cols-3 xl:gap-6">
						<div className="relative z-0 mb-8 w-full group">
							{/* CEP */}
							<input
								disabled={ativo}
								type="text"
								maxLength={8}
								name="floating_cep"
								id="floating_cep"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
								placeholder=" "
								value={cep}
								required
								onChange={(e) => {
									handleCepChange(e);
								}}
							/>
							<label
								htmlFor="floating_cep"
								className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
							>
								CEP
							</label>
						</div>
						<div className="relative z-0 mb-8 w-full group">
							{/* Estado */}
							<input
								disabled={ativo}
								type="text"
								maxLength={30}
								name="floating_estado"
								id="floating_estado"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
								placeholder=" "
								value={estado}
								required
								onChange={(e) => {
									handleEstadoChange(e);
								}}
							/>
							<label
								htmlFor="floating_estado"
								className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
							>
								Estado
							</label>
						</div>
						<div className="relative z-0 mb-8 w-full group">
							{/* Cidade */}
							<input
								disabled={ativo}
								type="text"
								maxLength={30}
								name="floating_cidade"
								id="floating_cidade"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
								placeholder=" "
								value={cidade}
								required
								onChange={(e) => {
									handleCidadeChange(e);
								}}
							/>
							<label
								htmlFor="floating_cidade"
								className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
							>
								Cidade
							</label>
						</div>
					</div>
					{/*  */}

					<div className="grid xl:grid-cols-3 xl:gap-6">
						<div className="relative z-0 mb-8 w-full group">
							{/* Endereço */}
							<input
								disabled={ativo}
								type="text"
								maxLength={80}
								name="floating_endereco"
								id="floating_endereco"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
								placeholder=" "
								value={endereco}
								required
								onChange={(e) => {
									handleEnderecoChange(e);
								}}
							/>
							<label
								htmlFor="floating_endereco"
								className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
							>
								Endereço
							</label>
						</div>
						<div className="relative z-0 mb-8 w-full group">
							{/* Numero */}
							<input
								disabled={ativo}
								type="text"
								maxLength={5}
								name="floating_numero"
								id="floating_numero"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
								placeholder=" "
								required
								value={numEndereco}
								onChange={(e) => {
									handleNumEnderecoChange(e);
								}}
							/>
							<label
								htmlFor="floating_numero"
								className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
							>
								Número
							</label>
						</div>
						<div className="relative z-0 mb-8 w-full group">
							{/* complemento */}
							<input
								disabled={ativo}
								type="text"
								maxLength={80}
								name="floating_complemento"
								id="floating_complemento"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
								placeholder=" "
								value={complemento}
								required
								onChange={(e) => {
									handleComplementoChange(e);
								}}
							/>
							<label
								htmlFor="floating_complemento"
								className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
							>
								Complemento
							</label>
						</div>
					</div>

					{/*  */}

					<div className="grid xl:grid-cols-2 xl:gap-6">
						<div className="relative z-0 mb-8 w-full group">
							{/* Email */}
							<input
								disabled={ativo}
								type="email"
								name="floating_email"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
								placeholder=" "
								value={email}
								required
								onChange={(e) => {
									handleEmailChange(e);
								}}
							/>
							<label
								htmlFor="floating_email"
								className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
							>
								Email
							</label>
						</div>
						<div className="relative z-0 mb-8 w-full group">
							{/* Celular */}
							<input
								disabled={ativo}
								type="text"
								maxLength={13}
								name="floating_cel"
								id="floating_cel"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
								placeholder=" "
								required
								value={cel}
								onChange={(e) => {
									handleCelChange(e);
								}}
							/>
							<label
								htmlFor="floating_cel"
								className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
							>
								Celular
							</label>
						</div>
					</div>

					{/* Botão */}
					<div className="flex justify-center mt-5">
						<input
							disabled={ativo}
							type="submit"
							value="Cadastrar"
							className="btt hover:dark:bg-slate-900 hover:text-white cursor-pointer transition-all delay-100 text-sm"
						/>
					</div>
				</form>
			</header>
		</div>
	);
}

export default Cadastro;
