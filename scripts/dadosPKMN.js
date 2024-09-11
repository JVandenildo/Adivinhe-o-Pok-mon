const primeiraGeracao = [
	{
		nome: "Bulbasaur",
		numero: 1, // considerando a national dex
		tipo: ["Planta", "Venenoso"],
		massa: 6.9, // em kg
		altura: 0.7, // em metros
		descricao:
			"Uma semente estranha foi plantada nas suas costas em seu nascimento. A planta brota e cresce com esse Pokémon.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Semente",
		lendario: false,
		local: "Laboratório Prof. Carvalho",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/375px-0001Bulbasaur.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)",
	},
	{
		nome: "Ivysaur",
		numero: 2, // considerando a national dex
		tipo: ["Planta", "Venenoso"],
		massa: 13.0, // em kg
		altura: 1.0, // em metros
		descricao:
			"Quando o bulbo nas suas costas cresce, aparenta perder a capacidade de ficar em pé nas patas traseiras.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Semente",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/375px-0002Ivysaur.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Ivysaur_(Pok%C3%A9mon)",
	},
	{
		nome: "Venusaur",
		numero: 3, // considerando a national dex
		tipo: ["Planta", "Venenoso"],
		massa: 100.0, // em kg
		altura: 2.0, // em metros
		descricao:
			"A planta floresce quando absorve energia solar. Permanece se movimentando em busca de luz solar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Semente",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/6/6b/0003Venusaur.png/375px-0003Venusaur.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Venusaur_(Pok%C3%A9mon)",
	},
	{
		nome: "Charmander",
		numero: 4, // considerando a national dex
		tipo: ["Fogo"],
		massa: 8.5, // em kg
		altura: 0.6, // em metros
		descricao:
			"Obviamente prefere lugares quentes. Dizem que quando chove, sai vapor da ponta de sua cauda.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lagarto",
		lendario: false,
		local: "Laboratório Prof. Carvalho",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/375px-0004Charmander.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)",
	},
	{
		nome: "Charmeleon",
		numero: 5, // considerando a national dex
		tipo: ["Fogo"],
		massa: 19.0, // em kg
		altura: 1.1, // em metros
		descricao:
			"Quando balança sua cauda em chamas, a temperatura é elevada a níveis insuportavelmente altos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/0/05/0005Charmeleon.png/375px-0005Charmeleon.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Charmeleon_(Pok%C3%A9mon)",
	},
	{
		nome: "Charizard",
		numero: 6, // considerando a national dex
		tipo: ["Fogo"],
		massa: 90.5, // em kg
		altura: 1.7, // em metros
		descricao:
			"Cospe fogo quente o suficiente para derreter rochas. É conhecido por causar incêndio florestal não intencionalmente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/3/38/0006Charizard.png/375px-0006Charizard.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Charizard_(Pok%C3%A9mon)",
	},
	{
		nome: "Squirtle",
		numero: 7, // considerando a national dex
		tipo: ["Água"],
		massa: 9.0, // em kg
		altura: 0.5, // em metros
		descricao:
			"Após seu nascimento, suas costas incham e endurecem em uma carapaça. Espalha poderosamente uma espuma de sua boca.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pequena Tartaruga",
		lendario: false,
		local: "Laboratório Prof. Carvalho",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/5/54/0007Squirtle.png/375px-0007Squirtle.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)",
	},
	{
		nome: "Wartortle",
		numero: 8, // considerando a national dex
		tipo: ["Água"],
		massa: 22.5, // em kg
		altura: 1.0, // em metros
		descricao:
			"Comumente esconde-se na água para perseguir presa desavisada. Para um nado rápido, movimenta suas orelhas para manter estabilidade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Tartaruga",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/0/0f/0008Wartortle.png/375px-0008Wartortle.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Wartortle_(Pok%C3%A9mon)",
	},
	{
		nome: "Blastoise",
		numero: 9, // considerando a national dex
		tipo: ["Planta", "Venenoso"],
		massa: 100.0, // em kg
		altura: 2.0, // em metros
		descricao:
			"Um Pokémon brutal com jatos de água pressurizada em seu casco. São usados em investidas de alta velocidade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Casco",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/0/0a/0009Blastoise.png/375px-0009Blastoise.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Blastoise_(Pok%C3%A9mon)",
	},
	{
		nome: "Mew",
		numero: 151, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 4.0, // em kg
		altura: 0.4, // em metros
		descricao:
			"É tão raro que ainda é dito ser uma miragem por vários especialistas. Somente algumas pessoas o viram ao redor do mundo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Novo Espécime",
		lendario: true,
		local: "Somente evento",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/9a/0151Mew.png/375px-0151Mew.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)",
	},
];

const segundaGeracao = [
	{
		nome: "Chikorita",
		numero: 152, // considerando a national dex
		tipo: ["Planta"],
		massa: 6.4, // em kg
		altura: 0.9, // em metros
		descricao:
			"Adora aproveitar a luz do sol. Usa a folha na cabeça para procurar lugares quentes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Folha",
		lendario: false,
		local: "Laboratório Prof. Elm",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/b/bc/0152Chikorita.png/375px-0152Chikorita.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Chikorita_(Pok%C3%A9mon)",
	},
	{
		nome: "Bayleef",
		numero: 153, // considerando a national dex
		tipo: ["Planta"],
		massa: 15.8, // em kg
		altura: 1.2, // em metros
		descricao:
			"Um aroma picante emana de seu pescoço. O aroma age como um estimulante para restaurar saúde.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Folha",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/85/0153Bayleef.png/375px-0153Bayleef.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Bayleef_(Pok%C3%A9mon)",
	},
	{
		nome: "Meganium",
		numero: 154, // considerando a national dex
		tipo: ["Planta"],
		massa: 100.5, // em kg
		altura: 1.8, // em metros
		descricao:
			"O aroma que surge de suas pétalas contém uma substância que acalma sentimentos agressivos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Erva",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/8b/0154Meganium.png/375px-0154Meganium.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Meganium_(Pok%C3%A9mon)",
	},
	{
		nome: "Cyndaquil",
		numero: 155, // considerando a national dex
		tipo: ["Fogo"],
		massa: 7.9, // em kg
		altura: 0.5, // em metros
		descricao:
			"Geralmente fica curvado. Quando está com raiva ou surpreso, atira chamas de suas costas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato de Fogo",
		lendario: false,
		local: "Laboratório Prof. Elm",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/97/0155Cyndaquil.png/375px-0155Cyndaquil.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Cyndaquil_(Pok%C3%A9mon)",
	},
	{
		nome: "Quilava",
		numero: 156, // considerando a national dex
		tipo: ["Fogo"],
		massa: 19.0, // em kg
		altura: 0.9, // em metros
		descricao:
			"É coberto totalmente por pelo não inflamável. Consegue aguentar qualquer tipo de ataque de fogo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vulcão",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/3/3f/0156Quilava.png/375px-0156Quilava.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Quilava_(Pok%C3%A9mon)",
	},
	{
		nome: "Typhlosion",
		numero: 157, // considerando a national dex
		tipo: ["Fogo"],
		massa: 79.5, // em kg
		altura: 1.7, // em metros
		descricao:
			"Quando sua raiva atinge seu ápice, fica tão quente que qualquer coisa que toque imediatamente pega fogo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vulcão",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/1/13/0157Typhlosion.png/375px-0157Typhlosion.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Typhlosion_(Pok%C3%A9mon)",
	},
	{
		nome: "Totodile",
		numero: 158, // considerando a national dex
		tipo: ["Água"],
		massa: 9.5, // em kg
		altura: 0.6, // em metros
		descricao:
			"As mandíbulas bem desenvolvidas são poderosas e capazes de esmagar qualquer coisa. Mesmo seu treinador deve ter cuidado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mandíbula Grande",
		lendario: false,
		local: "Laboratório Prof. Elm",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/f/f7/0158Totodile.png/375px-0158Totodile.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Totodile_(Pok%C3%A9mon)",
	},
	{
		nome: "Croconaw",
		numero: 159, // considerando a national dex
		tipo: ["Água"],
		massa: 25.0, // em kg
		altura: 1.1, // em metros
		descricao:
			"Quando perde uma presa, uma nova cresce em seu lugar. Sempre há 48 presas revestindo na boca.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mandíbula Grande",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/0/03/0159Croconaw.png/375px-0159Croconaw.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Croconaw_(Pok%C3%A9mon)",
	},
	{
		nome: "Feraligatr",
		numero: 160, // considerando a national dex
		tipo: ["Água"],
		massa: 88.8, // em kg
		altura: 2.3, // em metros
		descricao:
			"Quando morde com as mandíbulas grandes e poderosas, balança sua cabeça e estraçalha sua vítima com selvageria.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mandíbula Grande",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/29/0160Feraligatr.png/375px-0160Feraligatr.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Feraligatr_(Pok%C3%A9mon)",
	},
	{
		nome: "Celebi",
		numero: 251, // considerando a national dex
		tipo: ["Psíquico", "Grama"],
		massa: 0.6, // em kg
		altura: 5.0, // em metros
		descricao:
			"Este Pokémon vaga pelo tempo. A grama e as árvores floresce nas florestas em que apareceu.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Viajante do Tempo",
		lendario: true,
		local: "Somente evento",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/3/3f/0251Celebi.png/375px-0251Celebi.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Celebi_(Pok%C3%A9mon)",
	},
];

const terceiraGeracao = [
	{
		nome: "Treecko",
		numero: 252, // considerando a national dex
		tipo: ["Planta"],
		massa: 5.0, // em kg
		altura: 0.5, // em metros
		descricao:
			"Faz seu ninho em uma árvore gigante na floresta. Guarda-o ferozmente contra qualquer coisa que chegue perto de seu território. É dito ser o protetor das árvores das florestas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lagartixa de Madeira",
		lendario: false,
		local: "Rota 101",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/90/0252Treecko.png/375px-0252Treecko.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Treecko_(Pok%C3%A9mon)",
	},
	{
		nome: "Grovyle",
		numero: 253, // considerando a national dex
		tipo: ["Planta"],
		massa: 21.6, // em kg
		altura: 0.9, // em metros
		descricao:
			"As folhas crescendo em seu corpo são convenientes para se camuflar de inimigos na floresta. É um mestre em escalar árvores na floresta.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lagartixa de Madeira",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/b/bb/0253Grovyle.png/375px-0253Grovyle.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Grovyle_(Pok%C3%A9mon)",
	},
	{
		nome: "Sceptile",
		numero: 254, // considerando a national dex
		tipo: ["Planta"],
		massa: 52.2, // em kg
		altura: 1.7, // em metros
		descricao:
			"As folhas que crescem em seu corpo são muito afiadas. Sendo muito ágil consegue saltar pelos galhos das árvores e saltar em seu oponente por cima ou por trás.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Floresta",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/5/5c/0254Sceptile.png/375px-0254Sceptile.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Sceptile_(Pok%C3%A9mon)",
	},
	{
		nome: "Torchic",
		numero: 255, // considerando a national dex
		tipo: ["Fogo"],
		massa: 2.5, // em kg
		altura: 0.4, // em metros
		descricao:
			"Possui um lugar dentro de seu corpo onde mantém suas chamas.É coberto por uma pelagem fofa de penugem.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pinto",
		lendario: false,
		local: "Rota 101",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/7/7d/0255Torchic.png/375px-0255Torchic.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Torchic_(Pok%C3%A9mon)",
	},
	{
		nome: "Combusken",
		numero: 256, // considerando a national dex
		tipo: ["Fogo", "Lutador"],
		massa: 19.5, // em kg
		altura: 0.9, // em metros
		descricao:
			"Batalha com as chamas intensamente quentes que expele de seu bico e com chutes excepcionalmente destrutíveis. Seu grito é muito alto e perturbador.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Frango",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/7/78/0256Combusken.png/375px-0256Combusken.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Combusken_(Pok%C3%A9mon)",
	},
	{
		nome: "Blaziken",
		numero: 257, // considerando a national dex
		tipo: ["Fogo", "Lutador"],
		massa: 52.0, // em kg
		altura: 1.9, // em metros
		descricao:
			"Em batalha, sopra chamas intensas de seus punhos e ataca os oponentes corajosamente. Quanto mais forte o oponente, mais intensamente as chamas de seu punho queimam.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/c/c0/0257Blaziken.png/375px-0257Blaziken.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Blaziken_(Pok%C3%A9mon)",
	},
	{
		nome: "Mudkip",
		numero: 258, // considerando a national dex
		tipo: ["Água"],
		massa: 7.6, // em kg
		altura: 0.4, // em metros
		descricao:
			"A barbatana em sua cabeça age como um radar altamente sensível. Usando essa barbatana para sentir os movimentos da água e do ar, consegue determinar o que está acontecendo ao seu redor sem usar os olhos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe de Lama",
		lendario: false,
		local: "Rota 101",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/26/0258Mudkip.png/375px-0258Mudkip.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Mudkip_(Pok%C3%A9mon)",
	},
	{
		nome: "Marshtomp",
		numero: 259, // considerando a national dex
		tipo: ["Água", "Terra"],
		massa: 28.0, // em kg
		altura: 0.7, // em metros
		descricao:
			"É muito mais rápido na lama do que nadando. Seus membros inferiores exibem desenvolvimento óbvio, dando a habilidade de andar apenas com as patas traseiras.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe de Lama",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/e/eb/0259Marshtomp.png/375px-0259Marshtomp.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Marshtomp_(Pok%C3%A9mon)",
	},
	{
		nome: "Swampert",
		numero: 260, // considerando a national dex
		tipo: ["Água", "Terra"],
		massa: 81.9, // em kg
		altura: 1.5, // em metros
		descricao:
			"É tão forte que consegue arrastar facilmente uma rocha pesando mais de uma tonelada. Também possui uma ótima visão, podendo enxergar pela água turva.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe de Lama",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/3/34/0260Swampert.png/375px-0260Swampert.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Swampert_(Pok%C3%A9mon)",
	},
	{
		nome: "Deoxys",
		numero: 386, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 60.8, // em kg
		altura: 1.7, // em metros
		descricao:
			"Um Pokémon que evoluiu de um vírus extraterrestre exposto a um rio laser.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon DNA",
		lendario: true,
		local: "Somente evento",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/d/d7/0386Deoxys.png/375px-0386Deoxys.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pok%C3%A9mon)",
	},
];

const quartaGeracao = [
	{
		nome: "Turtwig",
		numero: 387, // considerando a national dex
		tipo: ["Planta"],
		massa: 10.2, // em kg
		altura: 0.4, // em metros
		descricao:
			"Feito de solo, a carapaça nas suas costas endurece quando bebe água. Vive perto de lagos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pequena Folha",
		lendario: false,
		local: "Rota 201 ou Lago Verdade, dependendo da versão.",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/6/68/0387Turtwig.png/375px-0387Turtwig.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Turtwig_(Pok%C3%A9mon)",
	},
	{
		nome: "Grotle",
		numero: 388, // considerando a national dex
		tipo: ["Planta"],
		massa: 97.0, // em kg
		altura: 1.1, // em metros
		descricao:
			"Vive próximo a água em florestas. Durante o dia, deixa a floresta para tomar banho de sol em seu casco arborizado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bosque",
		lendario: false,
		local: "Por evolução.",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/f/f8/0388Grotle.png/375px-0388Grotle.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Grotle_(Pok%C3%A9mon)",
	},
	{
		nome: "Torterra",
		numero: 389, // considerando a national dex
		tipo: ["Planta", "Terra"],
		massa: 310.0, // em kg
		altura: 2.2, // em metros
		descricao:
			"Ocasionalmente, pequenos Pokémon se reúnem em suas costas para construir seus ninhos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Continente",
		lendario: false,
		local: "Por evolução.",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/ac/0389Torterra.png/375px-0389Torterra.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Torterra_(Pok%C3%A9mon)",
	},
	{
		nome: "Chimchar",
		numero: 390, // considerando a national dex
		tipo: ["Fogo"],
		massa: 6.2, // em kg
		altura: 0.5, // em metros
		descricao:
			"É muito ágil. Antes de dormir, extingue a chama de sua calda para prevenir incêndios.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chimpanzé",
		lendario: false,
		local: "Rota 201 ou Lago Verdade, dependendo da versão.",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/91/0390Chimchar.png/375px-0390Chimchar.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Chimchar_(Pok%C3%A9mon)",
	},
	{
		nome: "Monferno",
		numero: 391, // considerando a national dex
		tipo: ["Fogo", "Lutador"],
		massa: 22.0, // em kg
		altura: 0.9, // em metros
		descricao:
			"Para se defender, estica o fogo em sua calda para parecer ser maior.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Brincalhão",
		lendario: false,
		local: "Por evolução.",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/5/52/0391Monferno.png/375px-0391Monferno.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Monferno_(Pok%C3%A9mon)",
	},
	{
		nome: "Infernape",
		numero: 389, // considerando a national dex
		tipo: ["Fogo", "Lutador"],
		massa: 55.0, // em kg
		altura: 1.2, // em metros
		descricao:
			"Usa um tipo especial de artes marciais envolvendo todos os seus membros. Seu fogo nunca se extingue.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		lendario: false,
		local: "Por evolução.",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/82/0392Infernape.png/375px-0392Infernape.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Infernape_(Pok%C3%A9mon)",
	},
	{
		nome: "Piplup",
		numero: 393, // considerando a national dex
		tipo: ["Água"],
		massa: 5.2, // em kg
		altura: 0.4, // em metros
		descricao:
			"Por ser muito orgulhoso, odeia aceitar comida de pessoas. Sua penugem grossa o protege do frio.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Penguin",
		lendario: false,
		local: "Rota 201 ou Lago Verdade, dependendo da versão.",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/b/ba/0393Piplup.png/375px-0393Piplup.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Piplup_(Pok%C3%A9mon)",
	},
	{
		nome: "Prinplup",
		numero: 388, // considerando a national dex
		tipo: ["Água"],
		massa: 23.0, // em kg
		altura: 0.8, // em metros
		descricao:
			"Vive sozinho, longe de outros. Aparentemente, todos de sua espécie acredita ser o mais importante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Penguin",
		lendario: false,
		local: "Por evolução.",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/ac/0394Prinplup.png/375px-0394Prinplup.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Prinplup_(Pok%C3%A9mon)",
	},
	{
		nome: "Empoleon",
		numero: 395, // considerando a national dex
		tipo: ["Água", "Metal"],
		massa: 84.5, // em kg
		altura: 1.7, // em metros
		descricao:
			"Nada tão rápido quanto uma lancha. As bordas de suas asas são afiadas e podem cortar blocos de gelo à deriva.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Imperador",
		lendario: false,
		local: "Por evolução.",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/7/7f/0395Empoleon.png/375px-0395Empoleon.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Empoleon_(Pok%C3%A9mon)",
	},
	{
		nome: "Arceus",
		numero: 493, // considerando a national dex
		tipo: ["Normal"],
		massa: 320.0, // em kg
		altura: 3.2, // em metros
		descricao:
			"É descrito na mitologia como o Pokémon que moldou o universo com seus 1'000 braços.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Alpha",
		lendario: true,
		local: "Salão da Origem",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/9e/0493Arceus.png/375px-0493Arceus.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Arceus_(Pok%C3%A9mon)",
	},
];

const todasGeracoes = [
	primeiraGeracao,
	segundaGeracao,
	terceiraGeracao,
	quartaGeracao,
];
// console.log("Todas gerações:", todasGeracoes);

const nomesPrimeira = primeiraGeracao.map((x) => x.nome);
const nomesSegunda = segundaGeracao.map((x) => x.nome);
const nomesTerceira = terceiraGeracao.map((x) => x.nome);
const nomesQuarta = quartaGeracao.map((x) => x.nome);
