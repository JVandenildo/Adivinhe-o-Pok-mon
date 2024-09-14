const campoPalpite = document.getElementById("campoPalpite");
const ultimosPalpites = document.getElementById("ultimosPalpites");
const campoDicas = document.getElementById("campoDicas");
const ultimato = document.getElementById("ultimato");
const btnPalpite = document.getElementById("btnPalpite");
const nomesGeral = document.querySelector(".nomesGeral");
const opcoesNomes = document.querySelector(".opcoesNomes");

let escolhido = {
	nome: "MissingNo.",
	numero: 0, // considerando a national dex
	tipo: ["Normal"],
	massa: 0, // em kg
	altura: 0, // em metros
	estatistica: {
		hp: 178,
		atq: 136,
		def: 11,
		atq_esp: 23,
		def_esp: 23,
		vel: 29,
	},
	descricao: "Algo de errado, não está certo.", // considerando a dex da primeira geração que apareceu
	categoria: "Pokémon Perdido",
	lendario: true,
	local: "Memoria",
	sprite: "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png",
	link: "https://bulbapedia.bulbagarden.net/wiki/MissingNo.",
};
let palpites = 0;

/**
 * Gera um novo PKMN para começar um novo jogo.
 * @returns Retorna um novo PKMN.
 */
function novaTentativa() {
	resetar();
	const data = new Date();
	const ticket = Math.floor(Math.random(data) * primeiraGeracao.length);

	escolhido = primeiraGeracao[ticket];

	console.info(
		`Somente testes: ${escolhido.nome}`,
		"\n",
		`Avanço: ${primeiraGeracao.length}/151`,
		"\n",
		`${Math.round((primeiraGeracao.length / 151) * 100)}%`
	);

	campoDicas.insertAdjacentHTML(
		"beforeend",
		`<p>${escolhido.massa}kg e ${escolhido.altura}m de altura</p>`
	);

	return escolhido;
}

/**
 * Verifica se o palpite do usuário está correto.
 * @returns Retorna nada.
 */
function darPalpite() {
	opcoesNomes.classList.remove("opcoesNomesShow");
	nomesGeral.classList.remove("nomesGeralShow");

	const listaDiscas = [
		escolhido.tipo,
		escolhido.categoria,
		escolhido.local,
		`HP:        ${escolhido.estatistica[0]}<br>
		Atq.:       ${escolhido.estatistica[1]}<br>
		Def.:       ${escolhido.estatistica[2]}<br>
		Atq. Esp.:  ${escolhido.estatistica[3]}<br>
		Def. Esp.:  ${escolhido.estatistica[4]}<br>
		Vel.:       ${escolhido.estatistica[5]}<br>`, // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		escolhido.descricao,
		`<img src="${escolhido.sprite}" />`,
	];

	switch (campoPalpite.value.toLowerCase()) {
		case "":
			alert("Calma lá! Tente algum nome!");

			break;

		case escolhido.nome.toLowerCase():
			ganhou(palpites + 1);

			break;

		default:
			if (palpites >= listaDiscas.length) {
				perdeu();

				break;
			} else {
				campoDicas.insertAdjacentHTML(
					"beforeend",
					`<p>${listaDiscas[palpites]}</p>`
				);
				ultimosPalpites.insertAdjacentHTML(
					"beforeend",
					`<p>${campoPalpite.value}</p>`
				);
				palpites += 1;
			}

			break;
	}

	campoPalpite.value = "";

	return;
}

function resetar() {
	campoPalpite.value = "";
	opcoesNomes.classList.remove("opcoesNomesShow");
	nomesGeral.classList.remove("nomesGeralShow");
	ultimosPalpites.innerHTML = "<h4>Últimos Palpites</h4>";
	campoDicas.innerHTML = "";
	ultimato.innerHTML = "";
	palpites = 0;
	btnPalpite.addEventListener("click", darPalpite);

	return true;
}

function procurarNomes() {
	switch (campoPalpite.value) {
		case "":
			opcoesNomes.classList.remove("opcoesNomesShow");
			nomesGeral.classList.remove("nomesGeralShow");

			break;
		default:
			opcoesNomes.innerHTML = "";
			opcoesNomes.classList.add("opcoesNomesShow");
			nomesGeral.classList.add("nomesGeralShow");

			const nomes = nomesPrimeira.filter(
				/**
				 * @param {string} nome
				 * @returns {string}
				 */
				(nome) => nome.toLowerCase().includes(campoPalpite.value.toLowerCase())
			);

			for (let i in nomes) {
				opcoesNomes.insertAdjacentHTML(
					"beforeend",
					`<div class="nomePalpite" onclick="selecaoPalpite('${nomes[i]}')">${nomes[i]}</div>`
				);
			}

			break;
	}
}

/**
 * @param {string} Palpite escrito.
 * @returns {void}
 */
function selecaoPalpite(palpite) {
	campoPalpite.value = palpite;

	opcoesNomes.classList.remove("opcoesNomesShow");
	nomesGeral.classList.remove("nomesGeralShow");

	return console.log(palpite);
}

/**
 * Lida com o acerto do jogador.
 * @param {number} palpites quantidade de vezes que o jogador fez um palpite.
 * @returns nada.
 */
function ganhou(palpites) {
	btnPalpite.removeEventListener("click", darPalpite);

	switch (palpites) {
		case 1:
			ultimato.innerHTML = `<p>Você acertou depois de ${palpites} palpite!<br><a href="${escolhido.link}">Mais informações</a>.</p><a href="${escolhido.link}"><img src="${escolhido.sprite}" /></a>`;

			return true;
		default:
			ultimato.innerHTML = `<p>Você acertou depois de ${palpites} palpites!<br><a href="${escolhido.link}">Mais informações</a>.</p><a href="${escolhido.link}"><img src="${escolhido.sprite}" /></a>`;

			return true;
	}
}
/**
 * Lida com a derrota do jogador.
 * @returns nada.
 */
function perdeu() {
	btnPalpite.removeEventListener("click", darPalpite);
	ultimato.innerHTML = `<p>Você errou! Era ${escolhido.nome}!<br><a href="${escolhido.link}">Mais informações.</a>.</p><a href="${escolhido.link}"><img src="${escolhido.sprite}" /></a>`;

	return false;
}
