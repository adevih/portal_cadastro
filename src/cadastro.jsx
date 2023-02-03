import React, { useState } from "react";
import { useSubmit, useLocation, useParams, Outlet } from "react-router-dom";
import axios from "axios";
// import interno
import "./App.css";
import logo from "./logo.svg";
import { url, urlAll } from "./ur";

// app
function Cadastro() {
	// Constantes do formulário
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
	// state do evento change
	useState("");
	//constante que chamo no useEffect
	const [post, setPost] = React.useState("");
	//constante do evento de rota na hora do submit
	const submit = useSubmit();
	//constantes da url dinamica
	const { id } = useParams();
	const baseURL = url + id;
	// verificação pra saber se o id que puxo na url existe na rota e bloquear os campos do form de acordo com o resultado
	const ativo = !post ? true : false;
	//useEffect com get usando axios para validar minha url e puxar os dados do json na minha api
	React.useEffect(() => {
		axios.get(baseURL).then((response) => {
			setPost(response.data[0]);
		});
	}, []);

	//usando axios get e post pra validação e envio do form
	async function getCpf() {
		// Validando o cpf digitado e checar se já existe na rota da api
		try {
			const response = await axios.get(urlAll);
			const data = response.data;

			const existingData = data.find(superdata);
			if (existingData) {
				alert("O CPF digitado já existe!");
				return;
			}
			//Se o cpf não existir na rota, acontece o envio da requisição pra rota da api
			const postResponse = await axios.post(url, {
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
			});

			setPost(postResponse.data);
			// submit da minha rota de navegação da url com o react router, caso o envio seja feito, ocorre o redirecionamento da pagina
			submit(null, {
				action: "cadastro/success",
			});
		} catch (error) {
			console.error(error);
		}
	}
	//evento onchange pra pegar os dados nos inputs do form
	const handleChange = (fieldName) => (e) => {
		switch (fieldName) {
			case "name":
				setName(e.target.value);
				break;
			case "sobrenome":
				setSobrenome(e.target.value);
				break;
			case "nascimento":
				setNascimento(e.target.value);
				break;
			case "sexo":
				setSexo(e.target.value);
				break;
			case "rg":
				setRg(e.target.value.replace(/\D/g, ""));
				break;
			case "cpf":
				setCpf(e.target.value.replace(/\D/g, ""));
				break;
			case "cel":
				setCel(e.target.value.replace(/\D/g, ""));
				break;
			case "email":
				setEmail(e.target.value);
				break;
			case "nacionalidade":
				setNacionaliade(e.target.value);
				break;
			case "estadoCivil":
				setEstadoCivil(e.target.value);
				break;
			case "cep":
				setCep(e.target.value.replace(/\D/g, ""));
				break;
			case "estado":
				setEstado(e.target.value);
				break;
			case "cidade":
				setCidade(e.target.value);
				break;
			case "endereco":
				setEndereco(e.target.value);
				break;
			case "numEndereco":
				setNumEndereco(e.target.value.replace(/\D/g, ""));
				break;
			case "complemento":
				setComplemento(e.target.value);
				break;
			default:
				break;
		}
	};

	//envio do form
	const handleSubmit = (e) => {
		e.preventDefault();
		// função async que criei acima
		getCpf();
	};

	//checa o valor de cpf pra ser validado no try da função acima.
	function superdata(omegadata) {
		return omegadata.cpf === cpf;
	}

	//
	return (
		<div className="App  bg-gray-200 w-screen min-w-full">
			{/* {Menu()} */}
			<header className="App-header">
				<form
					className="bg-white rounded-md w-3/4 h-3/4 p-10"
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<div className="flex flex-col justify-center items-center m-10">
						<img src={logo} className=" mb-0 " width="100" alt="logo" />
						<h2 className="text-black">Portal Cadastro</h2>
					</div>

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
								maxLength={80}
								required
								onChange={handleChange("name")}
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
								maxLength={80}
								required
								onChange={handleChange("sobrenome")}
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
								onChange={handleChange("rg")}
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
								onChange={handleChange("cpf")}
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
								onChange={handleChange("nascimento")}
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
								onChange={handleChange("sexo")}
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
								onChange={handleChange("estadoCivil")}
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
								onChange={handleChange("nacionalidade")}
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
								onChange={handleChange("cep")}
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
								onChange={handleChange("estado")}
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
								onChange={handleChange("cidade")}
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
								onChange={handleChange("endereco")}
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
								onChange={handleChange("numEndereco")}
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
								onChange={handleChange("complemento")}
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
								maxLength={80}
								required
								onChange={handleChange("email")}
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
								onChange={handleChange("cel")}
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
