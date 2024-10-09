const pkmnDisponiveis = [
	{
		nome: "Bulbasaur",
		numero: 1, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 6.9, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d1/F0001.png",
		estatistica: {
			ps: 45,
			atq: 49,
			def: 49,
			atq_esp: 65,
			def_esp: 65,
			vel: 45,
		},
		descricao:
			"Uma semente estranha foi plantada nas suas costas em seu nascimento. A planta brota e cresce com esse Pokémon.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Semente",
		obtencao: "Laboratório do Prof. Carvalho",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/fb/001Bulbasaur_Dream_5.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)",
	},
	{
		nome: "Ivysaur",
		numero: 2, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 13.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/4a/F0002.png",
		estatistica: {
			ps: 60,
			atq: 62,
			def: 63,
			atq_esp: 80,
			def_esp: 80,
			vel: 60,
		},
		descricao:
			"Quando o bulbo nas suas costas cresce, aparenta perder a capacidade de ficar em pé nas patas traseiras.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Semente",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/36/002Ivysaur_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ivysaur_(Pok%C3%A9mon)",
	},
	{
		nome: "Venusaur",
		numero: 3, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 100.0, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8e/F0003.png",
		estatistica: {
			ps: 80,
			atq: 82,
			def: 83,
			atq_esp: 100,
			def_esp: 100,
			vel: 80,
		},
		descricao:
			"A planta floresce quando absorve energia solar. Permanece se movimentando em busca de luz solar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Semente",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b2/003Venusaur_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Venusaur_(Pok%C3%A9mon)",
	},
	{
		nome: "Charmander",
		numero: 4, // considerando a national dex
		tipo: ["Fogo"],
		massa: 8.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8c/F0004.png",
		estatistica: {
			ps: 39,
			atq: 52,
			def: 43,
			atq_esp: 60,
			def_esp: 50,
			vel: 65,
		},
		descricao:
			"Obviamente prefere lugares quentes. Dizem que quando chove, sai vapor da ponta de sua cauda.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lagarto",
		obtencao: "Laboratório do Prof. Carvalho",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b9/004Charmander_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)",
	},
	{
		nome: "Charmeleon",
		numero: 5, // considerando a national dex
		tipo: ["Fogo"],
		massa: 19.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/67/F0005.png",
		estatistica: {
			ps: 58,
			atq: 64,
			def: 58,
			atq_esp: 80,
			def_esp: 65,
			vel: 80,
		},
		descricao:
			"Quando balança sua cauda em chamas, a temperatura é elevada a níveis insuportavelmente altos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/df/005Charmeleon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Charmeleon_(Pok%C3%A9mon)",
	},
	{
		nome: "Charizard",
		numero: 6, // considerando a national dex
		tipo: ["Fogo", " Voador"],
		massa: 90.5, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/05/F0006.png",
		estatistica: {
			ps: 78,
			atq: 84,
			def: 78,
			atq_esp: 109,
			def_esp: 85,
			vel: 100,
		},
		descricao:
			"Cospe fogo quente o suficiente para derreter rochas. É conhecido por causar incêndio florestal não intencionalmente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/65/006Charizard_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Charizard_(Pok%C3%A9mon)",
	},
	{
		nome: "Squirtle",
		numero: 7, // considerando a national dex
		tipo: ["Água"],
		massa: 9.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/87/F0007.png",
		estatistica: {
			ps: 44,
			atq: 48,
			def: 65,
			atq_esp: 50,
			def_esp: 64,
			vel: 43,
		},
		descricao:
			"Após seu nascimento, suas costas incham e endurecem em uma carapaça. Espalha poderosamente uma espuma de sua boca.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Tartaruguinha",
		obtencao: "Laboratório do Prof. Carvalho",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9a/007Squirtle_Dream_7.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)",
	},
	{
		nome: "Wartortle",
		numero: 8, // considerando a national dex
		tipo: ["Água"],
		massa: 22.5, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/81/F0008.png",
		estatistica: {
			ps: 59,
			atq: 63,
			def: 80,
			atq_esp: 65,
			def_esp: 80,
			vel: 58,
		},
		descricao:
			"Comumente esconde-se na água para perseguir presa desavisada. Para um nado rápido, movimenta suas orelhas para manter estabilidade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Tartaruga",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/21/008Wartortle_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wartortle_(Pok%C3%A9mon)",
	},
	{
		nome: "Blastoise",
		numero: 9, // considerando a national dex
		tipo: ["Água"],
		massa: 85.5, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8e/F0009.png",
		estatistica: {
			ps: 79,
			atq: 83,
			def: 100,
			atq_esp: 85,
			def_esp: 105,
			vel: 78,
		},
		descricao:
			"Um Pokémon brutal com jatos de água pressurizada em seu casco. São usados em investidas de alta velocidade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Marisco",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2e/009Blastoise_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Blastoise_(Pok%C3%A9mon)",
	},
	{
		nome: "Caterpie",
		numero: 10, // considerando a national dex
		tipo: ["Inseto"],
		massa: 2.9, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/77/F0010.png",
		estatistica: {
			ps: 45,
			atq: 30,
			def: 35,
			atq_esp: 20,
			def_esp: 20,
			vel: 45,
		},
		descricao:
			"Seus pés curtos são dotados de ventosas que lhe permitem escalar encostas e paredes sem cansar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Minhoca",
		obtencao: "Rotas 2, 24, e 25; e Floresta de Viridiana",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/89/010Caterpie_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)",
	},
	{
		nome: "Metapod",
		numero: 11, // considerando a national dex
		tipo: ["Inseto"],
		massa: 9.9, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/59/F0011.png",
		estatistica: {
			ps: 50,
			atq: 20,
			def: 55,
			atq_esp: 25,
			def_esp: 25,
			vel: 30,
		},
		descricao:
			"É vulnerável a ataques enquanto seu casulo está mole, expondo seu corpo fraco e frágil.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Casulo",
		obtencao: "Rotas 24, e 25; Floresta de Viridiana; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/8c/011Metapod_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Metapod_(Pok%C3%A9mon)",
	},
	{
		nome: "Butterfree",
		numero: 12, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 32.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/ac/F0012.png",
		estatistica: {
			ps: 60,
			atq: 45,
			def: 50,
			atq_esp: 80,
			def_esp: 80,
			vel: 70,
		},
		descricao:
			"Em batalha, bate suas asas em alta velocidade para liberar poeira altamente tóxico no ar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Borboleta",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6f/012Butterfree_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Butterfree_(Pok%C3%A9mon)",
	},
	{
		nome: "Weedle",
		numero: 13, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 3.2, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/00/F0013.png",
		estatistica: {
			ps: 40,
			atq: 35,
			def: 30,
			atq_esp: 20,
			def_esp: 20,
			vel: 50,
		},
		descricao:
			"Comumente encontrado em florestas, comendo folhas. Possui um ferrão afiado e venenoso em sua cabeça.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Inseto Peludo",
		obtencao: "Rotas 2, 24, e 25; e Floresta de Viridiana",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/64/013Weedle_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Weedle_(Pok%C3%A9mon)",
	},
	{
		nome: "Kakuna",
		numero: 14, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 10.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/38/F0014.png",
		estatistica: {
			ps: 45,
			atq: 25,
			def: 50,
			atq_esp: 25,
			def_esp: 25,
			vel: 35,
		},
		descricao:
			"Quase incapaz de se mover, este Pokémon consegue só endurecer seu casulo para proteger a si mesmo de predadores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Casulo",
		obtencao: "Rotas 24, e 25; Floresta de Viridiana; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/07/014Kakuna_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kakuna_(Pok%C3%A9mon)",
	},
	{
		nome: "Beedrill",
		numero: 15, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 29.5, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/cc/F0015.png",
		estatistica: {
			ps: 65,
			atq: 80,
			def: 40,
			atq_esp: 45,
			def_esp: 80,
			vel: 75,
		},
		descricao:
			"Voa em alta velocidade e ataca usando seus ferrões venenosos localizados nas patas dianteiras e cauda.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abelha Venenosa",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/ae/015Beedrill_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Beedrill_(Pok%C3%A9mon)",
	},
	{
		nome: "Pidgey",
		numero: 16, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 1.8, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/ab/F0016.png",
		estatistica: {
			ps: 40,
			atq: 45,
			def: 40,
			atq_esp: 35,
			def_esp: 35,
			vel: 56,
		},
		descricao:
			"Comum ser visto em florestas e bosques. Bate as asas próximo ao chão para levantar poeira ofuscante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Passarinho",
		obtencao: "Rotas 1, 2, 3, e outras; e Floresta de Viridiana",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/05/016Pidgey_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pidgey_(Pok%C3%A9mon)",
	},
	{
		nome: "Pidgeotto",
		numero: 17, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 30.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/dc/F0017.png",
		estatistica: {
			ps: 63,
			atq: 60,
			def: 55,
			atq_esp: 50,
			def_esp: 50,
			vel: 71,
		},
		descricao:
			"Muito protetor de sua extensa área territorial, este Pokémon irá bicar ferozmente qualquer intruso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro",
		obtencao: "Rotas 5, 6, 7, e outras; Floresta de Viridiana; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3c/017Pidgeotto_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pidgeotto_(Pok%C3%A9mon)",
	},
	{
		nome: "Pidgeot",
		numero: 18, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 39.5, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b7/F0018.png",
		estatistica: {
			ps: 83,
			atq: 80,
			def: 75,
			atq_esp: 70,
			def_esp: 70,
			vel: 91,
		},
		descricao:
			"Quando caça, desliza na superfície da água em alta velocidade para pegar presas desavisadas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ed/018Pidgeot_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pidgeot_(Pok%C3%A9mon)",
	},
	{
		nome: "Rattata de Kanto",
		numero: 19.1, // considerando a national dex
		tipo: ["Normal"],
		massa: 3.5, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/64/F0019.png",
		estatistica: {
			ps: 30,
			atq: 56,
			def: 35,
			atq_esp: 25,
			def_esp: 35,
			vel: 72,
		},
		descricao:
			"Morde qualquer coisa quando ataca. Pequeno e muito rápido, é comum ser visto em vários lugares.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		obtencao: "Rotas 1, 2, 3, e outras; e Mansão Pokémon",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2b/019Rattata_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rattata_(Pok%C3%A9mon)",
	},
	{
		nome: "Rattata de Alola",
		numero: 19.2, // considerando a national dex
		tipo: ["Noturno", " Normal"],
		massa: 3.8, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/64/F0019.png",
		estatistica: {
			ps: 30,
			atq: 56,
			def: 35,
			atq_esp: 25,
			def_esp: 35,
			vel: 72,
		},
		descricao:
			"Quando o sol se põe, este Pokémon se torna ativo. Corre pela cidade a procura de boa comida para o líder de seu ninho.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		obtencao:
			"Rotas 1, 2, 3, e outras; Hau'oli City; Kala'e Bay; e Verdant Cavern",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/33/019Rattata_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rattata_(Pok%C3%A9mon)",
	},
	{
		nome: "Raticate de Kanto",
		numero: 20.1, // considerando a national dex
		tipo: ["Normal"],
		massa: 18.5, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/2a/F0020.png",
		estatistica: {
			ps: 55,
			atq: 81,
			def: 60,
			atq_esp: 50,
			def_esp: 70,
			vel: 97,
		},
		descricao:
			"Usa seus bigodes para manter o equilíbrio. Aparentemente fica mais lento quando são cortados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		obtencao:
			"Rotas 9, 10, 11, e outras; Mansão Pokémon; Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b1/020Raticate_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Raticate_(Pok%C3%A9mon)",
	},
	{
		nome: "Raticate de Alola",
		numero: 20.2, // considerando a national dex
		tipo: ["Noturno", " Normal"],
		massa: 25.5, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/2a/F0020.png",
		estatistica: {
			ps: 75,
			atq: 71,
			def: 70,
			atq_esp: 40,
			def_esp: 80,
			vel: 77,
		},
		descricao:
			"Este Pokémon gourmet é exigente sobre o gosto e o frescor de sua comida. Restaurantes onde vive possui uma boa reputação.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		obtencao:
			"Rotas 10, 11, 15, e outras; Akala Outskirts; Ancient Poni Path; Poni Gauntlet; Poni Grove; Poni Plains; Poni Wilds; Tapu Village; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2c/020Raticate_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Raticate_(Pok%C3%A9mon)",
	},
	{
		nome: "Spearow",
		numero: 21, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 2.0, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/4d/F0021.png",
		estatistica: {
			ps: 40,
			atq: 60,
			def: 30,
			atq_esp: 31,
			def_esp: 31,
			vel: 70,
		},
		descricao:
			"Come insetos em áreas gramadas. Tem que bater suas curtas asas em alta velocidade para se manter no ar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Passarinho",
		obtencao: "Rotas 3, 4, 9, e outras",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/67/021Spearow_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Spearow_(Pok%C3%A9mon)",
	},
	{
		nome: "Fearow",
		numero: 22, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 38.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8d/F0022.png",
		estatistica: {
			ps: 65,
			atq: 90,
			def: 65,
			atq_esp: 61,
			def_esp: 61,
			vel: 100,
		},
		descricao:
			"Com suas imensas e magnificas asas, consegue permanecer no ar sem pousar para descansar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bico",
		obtencao: "Rotas 9, 16, 17, e outras; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/56/022Fearow_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Fearow_(Pok%C3%A9mon)",
	},
	{
		nome: "Ekans",
		numero: 23, // considerando a national dex
		tipo: ["Veneno"],
		massa: 6.9, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/14/F0023.png",
		estatistica: {
			ps: 35,
			atq: 60,
			def: 44,
			atq_esp: 40,
			def_esp: 54,
			vel: 55,
		},
		descricao:
			"Move-se de maneira silenciosa e furtiva. Come ovos de pássaros, como Pidgey e Spearow.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Serpente",
		obtencao: "Rotas 4, 8, 9, e outras",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7e/023Ekans_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)",
	},
	{
		nome: "Arbok",
		numero: 24, // considerando a national dex
		tipo: ["Veneno"],
		massa: 65.0, // em kg
		altura: 3.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a8/F0024.png",
		estatistica: {
			ps: 60,
			atq: 85,
			def: 69,
			atq_esp: 65,
			def_esp: 79,
			vel: 80,
		},
		descricao:
			"Rumores dizem que as marcas de sua barriga mudam de área para área.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cobra",
		obtencao: "Rota 23; Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/22/024Arbok_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Arbok_(Pok%C3%A9mon)",
	},
	{
		nome: "Pikachu",
		numero: 25, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 6.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c4/F0025.png",
		estatistica: {
			ps: 35,
			atq: 55,
			def: 30,
			atq_esp: 50,
			def_esp: 40,
			vel: 90,
		},
		descricao:
			"Quando vários Pokémon dessa espécie se reúnem, sua eletricidade poderia aumentar e causar tempestades elétricas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		obtencao: "Floresta de Viridiana; e Usina Elétrica Abandonada",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4d/025Pikachu_Dream_3.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)",
	},
	{
		nome: "Raichu de Kanto",
		numero: 26.1, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 30.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/93/F0026.png",
		estatistica: {
			ps: 60,
			atq: 90,
			def: 55,
			atq_esp: 90,
			def_esp: 80,
			vel: 110,
		},
		descricao:
			"Sua longa cauda serve como um fio-terra que o protege de sua própria potência elétrica.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		obtencao: "Usina Elétrica Abadona; Caverna de Cerulean; e por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/98/026Raichu_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Raichu_(Pok%C3%A9mon)",
	},
	{
		nome: "Raichu de Alola",
		numero: 26.2, // considerando a national dex
		tipo: ["Elétrico", " Psíquico"],
		massa: 21.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/93/F0026.png",
		estatistica: {
			ps: 60,
			atq: 85,
			def: 50,
			atq_esp: 95,
			def_esp: 85,
			vel: 110,
		},
		descricao:
			"Usa psicocinese para controlar eletricidade. Pula em sua própria cauda, usa poderes psíquicos para levantar a cauda e se mover enquanto a cavalga.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/03/026Raichu_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Raichu_(Pok%C3%A9mon)",
	},
	{
		nome: "Sandshrew de Kanto",
		numero: 27.1, // considerando a national dex
		tipo: ["Terra"],
		massa: 12.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/99/F0027.png",
		estatistica: {
			ps: 50,
			atq: 75,
			def: 85,
			atq_esp: 20,
			def_esp: 30,
			vel: 40,
		},
		descricao:
			"Escava profundamente na terra em lugares áridos e distantes de água. Só sai para caçar comida.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		obtencao: "Rotas 3, 4, 8, e outras; e Monte da Lua",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/81/027Sandshrew_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sandshrew_(Pok%C3%A9mon)",
	},
	{
		nome: "Sandshrew de Alola",
		numero: 27.2, // considerando a national dex
		tipo: ["Gelo", " Metal"],
		massa: 40.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/99/F0027.png",
		estatistica: {
			ps: 50,
			atq: 75,
			def: 90,
			atq_esp: 10,
			def_esp: 35,
			vel: 40,
		},
		descricao:
			"Vive em montanhas nevadas. Sua carapaça metálica é muito dura, tão dura que não consegue se enrolar em uma bola.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		obtencao: "Mount Lanakila; e Tapu Village",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e0/027Sandshrew_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sandshrew_(Pok%C3%A9mon)",
	},
	{
		nome: "Sandslash de Kanto",
		numero: 28.1, // considerando a national dex
		tipo: ["Terra"],
		massa: 29.5, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/97/F0028.png",
		estatistica: {
			ps: 75,
			atq: 100,
			def: 110,
			atq_esp: 45,
			def_esp: 55,
			vel: 65,
		},
		descricao:
			"Enrola-se em uma bola espinhosa quando se sente ameaçado. Pode rolar para atacar ou escapar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		obtencao: "Rota 23; Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/eb/028Sandslash_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sandslash_(Pok%C3%A9mon)",
	},
	{
		nome: "Sandslash de Alola",
		numero: 28.2, // considerando a national dex
		tipo: ["Gelo", " Metal"],
		massa: 55.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/97/F0028.png",
		estatistica: {
			ps: 75,
			atq: 100,
			def: 120,
			atq_esp: 25,
			def_esp: 65,
			vel: 65,
		},
		descricao:
			"Fugindo de uma erupção vulcânica, se estabeleceu em uma montanha nevada. Enquanto corre pelos campos de neve, envia um jato de neve.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/01/028Sandslash_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sandslash_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidoran♀",
		numero: 29, // considerando a national dex
		tipo: ["Veneno"],
		massa: 7.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d1/F0029.png",
		estatistica: {
			ps: 55,
			atq: 47,
			def: 52,
			atq_esp: 40,
			def_esp: 40,
			vel: 41,
		},
		descricao:
			"Apesar de pequenos, seus espinhos venenosos tornam este Pokémon perigoso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espinho Venenoso",
		obtencao: "Rotas 2, 9, 10, e outra; e Zona Safari",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5b/029Nidoran_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidoran%E2%99%80_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidorina",
		numero: 30, // considerando a national dex
		tipo: ["Veneno"],
		massa: 20.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e0/F0030.png",
		estatistica: {
			ps: 70,
			atq: 62,
			def: 67,
			atq_esp: 55,
			def_esp: 55,
			vel: 56,
		},
		descricao:
			"O chifre da fêmea desenvolve devagar. Prefere ataques físicos como mordida e patadas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espinho Venenoso",
		obtencao: "Rotas 9, e 23; Zona Safari; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ea/030Nidorina_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidorina_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidoqueen",
		numero: 31, // considerando a national dex
		tipo: ["Veneno", " Terra"],
		massa: 60.0, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8f/F0031.png",
		estatistica: {
			ps: 90,
			atq: 82,
			def: 87,
			atq_esp: 75,
			def_esp: 85,
			vel: 76,
		},
		descricao:
			"Suas duras escamas lhe dão uma forte proteção. Usa seu grande volume para executar ataques poderosos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Perfurador",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1b/031Nidoqueen_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidoqueen_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidoran♂",
		numero: 32, // considerando a national dex
		tipo: ["Veneno"],
		massa: 9.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e8/F0032.png",
		estatistica: {
			ps: 46,
			atq: 57,
			def: 40,
			atq_esp: 40,
			def_esp: 40,
			vel: 50,
		},
		descricao:
			"Enrijece suas orelhas para sentir perigo. Quanto maior seus chifres, mais poderoso é seu veneno secretado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espinho Venenoso",
		obtencao: "Rotas 2, 9, 10, e outra; e Zona Safari",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/15/032Nidoran_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidoran%E2%99%82_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidorino",
		numero: 33, // considerando a national dex
		tipo: ["Veneno"],
		massa: 19.5, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/20/F0033.png",
		estatistica: {
			ps: 61,
			atq: 72,
			def: 57,
			atq_esp: 55,
			def_esp: 55,
			vel: 65,
		},
		descricao:
			"Um Pokémon agressivo que é rápido para atacar. O chifre em sua cabeça secreta um poderoso veneno.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espinho Venenoso",
		obtencao: "Rotas 9, e 23; Zona Safari; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/56/033Nidorino_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidorino_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidoking",
		numero: 34, // considerando a national dex
		tipo: ["Veneno", " Terra"],
		massa: 62.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/1e/F0034.png",
		estatistica: {
			ps: 81,
			atq: 92,
			def: 77,
			atq_esp: 85,
			def_esp: 75,
			vel: 85,
		},
		descricao:
			"Usa sua poderosa cauda para golpear, imobilizar, e então quebrar os ossos de sua presa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Perfurador",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a3/034Nidoking_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidoking_(Pok%C3%A9mon)",
	},
	{
		nome: "Clefairy",
		numero: 35, // considerando a national dex
		tipo: ["Fada"],
		massa: 7.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f2/F0035.png",
		estatistica: {
			ps: 70,
			atq: 45,
			def: 48,
			atq_esp: 60,
			def_esp: 65,
			vel: 35,
		},
		descricao:
			"Sua aparência mágica e fofa possui muitos admiradores. É raro e encontrado somente em certas áreas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fada",
		obtencao: "Monte da Lua; e Caverna de Cerulean",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e8/035Clefairy_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Clefairy_(Pok%C3%A9mon)",
	},
	{
		nome: "Clefable",
		numero: 36, // considerando a national dex
		tipo: ["Fada"],
		massa: 40.0, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d8/F0036.png",
		estatistica: {
			ps: 95,
			atq: 70,
			def: 73,
			atq_esp: 85,
			def_esp: 90,
			vel: 60,
		},
		descricao:
			"Um Pokémon fada tímido que é raramente visto. Corre e se esconde no momento que sente uma pessoa por perto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fada",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/fb/036Clefable_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Clefable_(Pok%C3%A9mon)",
	},
	{
		nome: "Vulpix de Kanto",
		numero: 37.1, // considerando a national dex
		tipo: ["Fogo"],
		massa: 9.9, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/de/F0037.png",
		estatistica: {
			ps: 38,
			atq: 41,
			def: 40,
			atq_esp: 50,
			def_esp: 65,
			vel: 65,
		},
		descricao:
			"No momento do nascimento, só possui uma cauda. A cauda se divide a partir da ponta a medida que envelhece.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raposa",
		obtencao: "Rotas 7, e 8; e Mansão Pokémon",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/72/037Vulpix_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vulpix_(Pok%C3%A9mon)",
	},
	{
		nome: "Vulpix de Alola",
		numero: 37.2, // considerando a national dex
		tipo: ["Gelo"],
		massa: 9.9, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/de/F0037.png",
		estatistica: {
			ps: 38,
			atq: 41,
			def: 40,
			atq_esp: 50,
			def_esp: 65,
			vel: 65,
		},
		descricao:
			"Em climas quentes, este Pokémon cria cacos de gelo com suas seis caudas e os espalha para se refrescar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raposa",
		obtencao: "Tapu Village; e Mount Lanakila",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c4/037Vulpix_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vulpix_(Pok%C3%A9mon)",
	},
	{
		nome: "Ninetales de Kanto",
		numero: 38.1, // considerando a national dex
		tipo: ["Fogo"],
		massa: 19.9, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/3b/F0038.png",
		estatistica: {
			ps: 73,
			atq: 76,
			def: 75,
			atq_esp: 81,
			def_esp: 100,
			vel: 100,
		},
		descricao:
			"Muito inteligente e vingativo. Agarrar uma de suas várias caldas poderia resultar um uma maldição de 1'000 anos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raposa",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a4/038Ninetales_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ninetales_(Pok%C3%A9mon)",
	},
	{
		nome: "Ninetales de Alola",
		numero: 38.2, // considerando a national dex
		tipo: ["Gelo", " Fada"],
		massa: 19.9, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/3b/F0038.png",
		estatistica: {
			ps: 73,
			atq: 67,
			def: 75,
			atq_esp: 81,
			def_esp: 100,
			vel: 109,
		},
		descricao:
			"Cria gotas de gelo em seu pelo e as joga sobre seus inimigos. Qualquer um que o irrite ficará congelado em um instante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raposa",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/cc/038Ninetales_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ninetales_(Pok%C3%A9mon)",
	},
	{
		nome: "Jigglypuff",
		numero: 39, // considerando a national dex
		tipo: ["Normal", " Fada"],
		massa: 5.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e4/F0039.png",
		estatistica: {
			ps: 115,
			atq: 45,
			def: 20,
			atq_esp: 45,
			def_esp: 25,
			vel: 20,
		},
		descricao:
			"Quando seus grandes olhos se iluminam, canta uma melodia misteriosamente suave que embala seus inimigos para dormir.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Balão",
		obtencao: "Rotas 3, 5, 6, e outras",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ed/039Jigglypuff_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Jigglypuff_(Pok%C3%A9mon)",
	},
	{
		nome: "Wigglytuff",
		numero: 40, // considerando a national dex
		tipo: ["Normal", " Fada"],
		massa: 12.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d1/F0040.png",
		estatistica: {
			ps: 140,
			atq: 70,
			def: 45,
			atq_esp: 75,
			def_esp: 50,
			vel: 45,
		},
		descricao:
			"Seu corpo é macio e emborrachado. Quando atiçado, suga ar e infla-se a um tamanho enorme.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Balão",
		obtencao: "Caverna de Cerulean; e por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d8/040Wigglytuff_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wigglytuff_(Pok%C3%A9mon)",
	},
	{
		nome: "Zubat",
		numero: 41, // considerando a national dex
		tipo: ["Veneno", " Voador"],
		massa: 7.5, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/6d/F0041.png",
		estatistica: {
			ps: 40,
			atq: 45,
			def: 35,
			atq_esp: 30,
			def_esp: 40,
			vel: 55,
		},
		descricao:
			"Forma colônias em lugares escuros. Usa ondas ultrassônicas para identificar e se aproximar de alvos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Morcego",
		obtencao:
			"Monte da Lua; Túnel de Rocha; Ilhas Espuma; e Estrada da Vitória",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d9/041Zubat_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zubat_(Pok%C3%A9mon)",
	},
	{
		nome: "Golbat",
		numero: 42, // considerando a national dex
		tipo: ["Veneno", " Voador"],
		massa: 55.0, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/ec/F0042.png",
		estatistica: {
			ps: 75,
			atq: 80,
			def: 70,
			atq_esp: 65,
			def_esp: 75,
			vel: 90,
		},
		descricao:
			"Uma vez que ataca, não para de drenar a energia de suas vítimas mesmo que fique pesado demais para voar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Morcego",
		obtencao:
			"Ilhas Espuma; Estrada da Vitória; Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/ff/042Golbat_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Golbat_(Pok%C3%A9mon)",
	},
	{
		nome: "Oddish",
		numero: 43, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 5.4, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d7/F0043.png",
		estatistica: {
			ps: 45,
			atq: 50,
			def: 55,
			atq_esp: 75,
			def_esp: 65,
			vel: 30,
		},
		descricao:
			"Durante o dia, mantém seu rosto enterrado no chão. Durante a noite, vagueia semeando suas sementes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Erva Daninha",
		obtencao: "Rotas 5, 6, 7, e outras",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/43/043Oddish_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Oddish_(Pok%C3%A9mon)",
	},
	{
		nome: "Gloom",
		numero: 44, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 8.6, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/4e/F0044.png",
		estatistica: {
			ps: 60,
			atq: 65,
			def: 70,
			atq_esp: 85,
			def_esp: 75,
			vel: 40,
		},
		descricao:
			"O fluido que escorre de sua boca não é baba. É um néctar usado para atrair suas presas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Erva Daninha",
		obtencao: "Rotas 12, 13, 14, e outra; Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/81/044Gloom_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gloom_(Pok%C3%A9mon)",
	},
	{
		nome: "Vileplume",
		numero: 45, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 18.6, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f2/F0045.png",
		estatistica: {
			ps: 75,
			atq: 80,
			def: 85,
			atq_esp: 100,
			def_esp: 90,
			vel: 50,
		},
		descricao:
			"Quanto maior suas pétalas, mais pólen tóxico contém. Sua cabeça grande é pesada e difícil de segurar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Flor",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a7/045Vileplume_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vileplume_(Pok%C3%A9mon)",
	},
	{
		nome: "Paras",
		numero: 46, // considerando a national dex
		tipo: ["Inseto", " Planta"],
		massa: 5.4, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f6/F0046.png",
		estatistica: {
			ps: 35,
			atq: 70,
			def: 55,
			atq_esp: 45,
			def_esp: 55,
			vel: 25,
		},
		descricao:
			"Escava para se alimentar de raízes. Os cogumelos em suas costas crescem extraindo nutrientes do inseto hospedeiro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cogumelo",
		obtencao: "Monte da Lua; e Zona Safari",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1c/046Paras_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Paras_(Pok%C3%A9mon)",
	},
	{
		nome: "Parasect",
		numero: 47, // considerando a national dex
		tipo: ["Inseto", " Planta"],
		massa: 29.5, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/40/F0047.png",
		estatistica: {
			ps: 60,
			atq: 95,
			def: 80,
			atq_esp: 60,
			def_esp: 80,
			vel: 30,
		},
		descricao:
			"Um par hospedeiro-parasita no qual o cogumelo parasita assumiu o controle do inseto hospedeiro. Prefere lugares úmidos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cogumelo",
		obtencao: "Zona Safari; Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0e/047Parasect_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Parasect_(Pok%C3%A9mon)",
	},
	{
		nome: "Venonat",
		numero: 48, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 30.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/37/F0048.png",
		estatistica: {
			ps: 60,
			atq: 55,
			def: 50,
			def_esp: 40,
			atq_esp: 55,
			vel: 45,
		},
		descricao:
			"Vive nas sombras de árvores altas onde come insetos. É atraído por luzes durante a noite.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Inseto",
		obtencao: "Rotas 12, 13, 14, e outras; e Zona Safari",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9f/048Venonat_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Venonat_(Pok%C3%A9mon)",
	},
	{
		nome: "Venomoth",
		numero: 49, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 12.5, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/bd/F0049.png",
		estatistica: {
			ps: 70,
			atq: 65,
			def: 60,
			atq_esp: 90,
			def_esp: 75,
			vel: 90,
		},
		descricao:
			"As escamas semelhantes a poeira que cobrem suas asas são codificadas por cor para indicar os tipos de veneno que possui.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mariposa Venenosa",
		obtencao:
			"Zona Safari; Estrada da Vitória; Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f3/049Venomoth_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Venomoth_(Pok%C3%A9mon)",
	},
	{
		nome: "Diglett de Kanto",
		numero: 50.1, // considerando a national dex
		tipo: ["Terra"],
		massa: 0.8, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5e/F0050.png",
		estatistica: {
			ps: 10,
			atq: 55,
			def: 25,
			atq_esp: 35,
			def_esp: 45,
			vel: 95,
		},
		descricao:
			"Vive em torno de um metro abaixo da superfície onde se alimente de raízes. Aparece ocasionalmente acima da superfície.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Toupeira",
		obtencao: "Túnel dos Diglett",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a6/050Diglett_Dream_3.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Diglett_(Pok%C3%A9mon)",
	},
	{
		nome: "Diglett de Alola",
		numero: 50.2, // considerando a national dex
		tipo: ["Terra", " Metal"],
		massa: 1.0, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5e/F0050.png",
		estatistica: {
			ps: 10,
			atq: 55,
			def: 30,
			atq_esp: 35,
			def_esp: 45,
			vel: 90,
		},
		descricao:
			"Seus pelos dourados funcionam como sensores. Os coloca para fora de sua toca para monitorar os arredores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Toupeira",
		obtencao:
			"Rotas 5, e 7; Diglett's Tunnel; Lush Jungle (Cave); Seaward Cave; Ten Carat Hill; e Verdant Cavern",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/80/050Diglett_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Diglett_(Pok%C3%A9mon)",
	},
	{
		nome: "Dugtrio de Kanto",
		numero: 51.1, // considerando a national dex
		tipo: ["Terra"],
		massa: 33.3, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/03/F0051.png",
		estatistica: {
			ps: 35,
			atq: 100,
			def: 50,
			atq_esp: 50,
			def_esp: 70,
			vel: 120,
		},
		descricao: "Desencadeia grandes terremotos ao cavar 100km no subsolo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Toupeira",
		obtencao: "Túnel dos Diglett; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/26/051Dugtrio_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dugtrio_(Pok%C3%A9mon)",
	},
	{
		nome: "Dugtrio de Alola",
		numero: 51.2, // considerando a national dex
		tipo: ["Terra", " Metal"],
		massa: 66.6, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/03/F0051.png",
		estatistica: {
			ps: 35,
			atq: 100,
			def: 60,
			atq_esp: 50,
			def_esp: 70,
			vel: 110,
		},
		descricao:
			"Seus pelos dourados brilhantes lhe fornecem proteção. Dizem que guardar qualquer um de seu cabelo caído trará azar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Toupeira",
		obtencao:
			"Haina Desert; Poni Coast; Resolution Cave; Vast Poni Canyon; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7d/051Dugtrio_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dugtrio_(Pok%C3%A9mon)",
	},
	{
		nome: "Meowth de Kanto",
		numero: 52.1, // considerando a national dex
		tipo: ["Normal"],
		massa: 4.2, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/df/F0052.png",
		estatistica: {
			ps: 40,
			atq: 45,
			def: 35,
			atq_esp: 40,
			def_esp: 40,
			vel: 90,
		},
		descricao:
			"Gosta de objetos redondos. Vaga pelas ruas todas as noites procurando por trocados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Arranha Gato",
		obtencao: "Rotas 5, 6, 7, e outra",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/84/052Meowth_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Meowth_(Pok%C3%A9mon)",
	},
	{
		nome: "Meowth de Alola",
		numero: 52.2, // considerando a national dex
		tipo: ["Noturno"],
		massa: 4.2, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/df/F0052.png",
		estatistica: {
			ps: 40,
			atq: 35,
			def: 35,
			atq_esp: 50,
			def_esp: 40,
			vel: 90,
		},
		descricao:
			"Quando seu delicado orgulho é ferido, ou quando a moeda dourada em sua testa é suja, corre em fúria histérica.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Arranha Gato",
		obtencao: "Rota 2; Trainer's School; Hau'oli City; e Malie Garden",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a6/052Meowth_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Meowth_(Pok%C3%A9mon)",
	},
	{
		nome: "Meowth de Galar",
		numero: 52.3, // considerando a national dex
		tipo: ["Metal"],
		massa: 7.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/df/F0052.png",
		estatistica: {
			ps: 50,
			atq: 65,
			def: 55,
			atq_esp: 40,
			def_esp: 40,
			vel: 40,
		},
		descricao:
			"Esses Pokémon ousados têm moedas em suas testas. Moedas mais escuras são mais duras, e moedas mais duras ganham mais respeito entre os de sua espécie.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Arranha Gato",
		obtencao: "Rota 4",
		estagio: 1,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7d/052Meowth_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Meowth_(Pok%C3%A9mon)",
	},
	{
		nome: "Persian de Kanto",
		numero: 53.1, // considerando a national dex
		tipo: ["Normal"],
		massa: 32.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/10/F0053.png",
		estatistica: {
			ps: 65,
			atq: 70,
			def: 60,
			atq_esp: 65,
			def_esp: 65,
			vel: 115,
		},
		descricao:
			"Apesar de seu pelo possuir muitos admiradores, é difícil de criar como animal de estimação por sua maldade inconstante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gato de Luxo",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/65/053Persian_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Persian_(Pok%C3%A9mon)",
	},
	{
		nome: "Persian de Alola",
		numero: 53.2, // considerando a national dex
		tipo: ["Noturno"],
		massa: 33.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/10/F0053.png",
		estatistica: {
			ps: 65,
			atq: 60,
			def: 60,
			atq_esp: 75,
			def_esp: 65,
			vel: 115,
		},
		descricao:
			"Olha com desdém para todos, exceto para si. Suas táticas preferidas são socos e ataques surpresa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gato de Luxo",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/95/053Persian_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Persian_(Pok%C3%A9mon)",
	},
	{
		nome: "Psyduck",
		numero: 54, // considerando a national dex
		tipo: ["Água"],
		massa: 19.6, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/ba/F0054.png",
		estatistica: {
			ps: 50,
			atq: 52,
			def: 48,
			atq_esp: 65,
			def_esp: 50,
			vel: 55,
		},
		descricao:
			"Enquanto engana seus oponentes com seu olhar distraído, este astuto Pokémon usa seus poderes psicocinéticos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pato",
		obtencao: "Rotas 6, 24, e 25; Ilhas Espuma; e Zona Safari",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/72/054Psyduck_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Psyduck_(Pok%C3%A9mon)",
	},
	{
		nome: "Golduck",
		numero: 55, // considerando a national dex
		tipo: ["Água"],
		massa: 76.6, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/72/F0055.png",
		estatistica: {
			ps: 80,
			atq: 82,
			def: 78,
			atq_esp: 95,
			def_esp: 80,
			vel: 85,
		},
		descricao:
			"Frequentemente visto nadando elegantemente às marges de lagos. Muitas vezes confundido com a criatura japonesa, Kappa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pato",
		obtencao: "Rota 6; Ilhas Espuma; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/04/055Golduck_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Golduck_(Pok%C3%A9mon)",
	},
	{
		nome: "Mankey",
		numero: 56, // considerando a national dex
		tipo: ["Lutador"],
		massa: 28.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f8/F0056.png",
		estatistica: {
			ps: 40,
			atq: 80,
			def: 35,
			atq_esp: 35,
			def_esp: 45,
			vel: 70,
		},
		descricao:
			"Extremamente rápido em se irritar. Pode ser dócil em um momento e logo depois se debater.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Macaco Porco",
		obtencao: "Rotas 3, 4, 5, e outras",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6f/056Mankey_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mankey_(Pok%C3%A9mon)",
	},
	{
		nome: "Primeape",
		numero: 57, // considerando a national dex
		tipo: ["Lutador"],
		massa: 32.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/87/F0057.png",
		estatistica: {
			ps: 65,
			atq: 105,
			def: 60,
			atq_esp: 60,
			def_esp: 70,
			vel: 95,
		},
		descricao:
			"Só deixa de estar raivoso quando mais ninguém está por perto. Não deixará de perseguir sua presa até que seja pega.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Macaco Porco",
		obtencao: "Rota 23; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/24/057Primeape_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Primeape_(Pok%C3%A9mon)",
	},
	{
		nome: "Growlithe de Kanto",
		numero: 58.1, // considerando a national dex
		tipo: ["Fogo"],
		massa: 19.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/82/F0058.png",
		estatistica: {
			ps: 55,
			atq: 70,
			def: 45,
			atq_esp: 70,
			def_esp: 50,
			vel: 60,
		},
		descricao:
			"Muito protetor de seu território. Late e morde para repelir invasores de seu espaço.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Filhote",
		obtencao: "Rotas 7, e 8; e Mansão Pokémon",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b0/058Growlithe_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Growlithe_(Pok%C3%A9mon)",
	},
	{
		nome: "Growlithe de Hisui",
		numero: 58.2, // considerando a national dex
		tipo: ["Fogo", " Rocha"],
		massa: 22.7, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/82/F0058.png",
		estatistica: {
			ps: 60,
			atq: 75,
			def: 45,
			atq_esp: 65,
			def_esp: 50,
			vel: 55,
		},
		descricao:
			"Patrulham seu território em pares. Acredito que os componentes de rocha ígnea no pelo desta espécie são o resultado de atividade vulcânica em seu habitat.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escoteiro",
		obtencao: "Cobalt: Coastlands: Windbreak Stand, e Veilstone Cape",
		estagio: 1,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/ff/058Growlithe-Hisui_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Growlithe_(Pok%C3%A9mon)",
	},
	{
		nome: "Arcanine de Kanto",
		numero: 59.1, // considerando a national dex
		tipo: ["Fogo"],
		massa: 155.0, // em kg
		altura: 1.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/12/F0059.png",
		estatistica: {
			ps: 90,
			atq: 110,
			def: 80,
			atq_esp: 100,
			def_esp: 80,
			vel: 95,
		},
		descricao:
			"Um Pokémon que tem sido admirado por sua beleza. Corre com agilidade como se tivesse asas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lendário",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b5/059Arcanine_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Arcanine_(Pok%C3%A9mon)",
	},
	{
		nome: "Arcanine de Hisui",
		numero: 59.2, // considerando a national dex
		tipo: ["Fogo", " Rocha"],
		massa: 168.0, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/12/F0059.png",
		estatistica: {
			ps: 95,
			atq: 115,
			def: 80,
			atq_esp: 95,
			def_esp: 80,
			vel: 90,
		},
		descricao:
			"Ataca seus inimigos com presas envoltas em chamas ardentes. Apesar do tamanho, engana seus oponentes com movimentos rápidos em todas as direções, levando-os a uma perseguição enquanto dança ao redor deles.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lendário",
		obtencao: "Cobalt Coastlands; e por evolução",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ee/059Arcanine_Hisui_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Arcanine_(Pok%C3%A9mon)",
	},
	{
		nome: "Poliwag",
		numero: 60, // considerando a national dex
		tipo: ["Água"],
		massa: 12.4, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/db/F0060.png",
		estatistica: {
			ps: 40,
			atq: 50,
			def: 40,
			atq_esp: 40,
			def_esp: 40,
			vel: 90,
		},
		descricao:
			"Suas pernas recém crescidas o previnem de correr. Aparenta preferir nadar a tentar ficar de pé.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Girino",
		obtencao:
			"Rotas 6, 10, 11, e outras; Caverna de Cerulean; Zona Safari; Ilhas Espuma; e Planalto Índigo",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/39/060Poliwag_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Poliwag_(Pok%C3%A9mon)",
	},
	{
		nome: "Poliwhirl",
		numero: 61, // considerando a national dex
		tipo: ["Água"],
		massa: 20.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f1/F0061.png",
		estatistica: {
			ps: 65,
			atq: 65,
			def: 65,
			atq_esp: 50,
			def_esp: 50,
			vel: 90,
		},
		descricao:
			"Capaz de viver dentro e fora d'água. Quando está fora da água, transpira para manter seu corpo viscoso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Girino",
		obtencao: "Rotas 10, 22, e 23; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d0/061Poliwhirl_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Poliwhirl_(Pok%C3%A9mon)",
	},
	{
		nome: "Poliwrath",
		numero: 62, // considerando a national dex
		tipo: ["Água", " Lutador"],
		massa: 54.0, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e9/F0062.png",
		estatistica: {
			ps: 90,
			atq: 85,
			def: 95,
			atq_esp: 70,
			def_esp: 90,
			vel: 70,
		},
		descricao:
			"Um hábil nadador dos nado crawl e nado peito. Facilmente ultrapassa os melhores nadadores humanos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Girino",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f0/062Poliwrath_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Poliwrath_(Pok%C3%A9mon)",
	},
	{
		nome: "Abra",
		numero: 63, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 19.5, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9a/F0063.png",
		estatistica: {
			ps: 25,
			atq: 20,
			def: 15,
			atq_esp: 105,
			def_esp: 55,
			vel: 90,
		},
		descricao:
			"Usando sua habilidade de ler mentes, identifica o perigo iminente e teleporta para um local seguro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Psi",
		obtencao: "Rotas 5, 6, 7, e outras",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d6/063Abra_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Abra_(Pok%C3%A9mon)",
	},
	{
		nome: "Kadabra",
		numero: 64, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 56.5, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d6/F0064.png",
		estatistica: {
			ps: 40,
			atq: 35,
			def: 30,
			atq_esp: 120,
			def_esp: 70,
			vel: 105,
		},
		descricao:
			"Emite ondas alfas especiais de seu corpo que induzem dores de cabeça apenas por estar por perto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Psi",
		obtencao: "Rota 8; Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e9/064Kadabra_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kadabra_(Pok%C3%A9mon)",
	},
	{
		nome: "Alakazam",
		numero: 65, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 48.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/99/F0065.png",
		estatistica: {
			ps: 55,
			atq: 50,
			def: 45,
			atq_esp: 135,
			def_esp: 85,
			vel: 120,
		},
		descricao:
			"Seu cérebro consegue superar um super-computador. É dito que seu QI é de 5'000.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Psi",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/63/065Alakazam_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)",
	},
	{
		nome: "Machop",
		numero: 66, // considerando a national dex
		tipo: ["Lutador"],
		massa: 19.5, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/F0066.png",
		estatistica: {
			ps: 70,
			atq: 80,
			def: 50,
			atq_esp: 35,
			def_esp: 35,
			vel: 35,
		},
		descricao:
			"Gosta de construir seu músculos. Treina em todos os estilos de artes marciais para se tornar mais forte.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Superpoder",
		obtencao: "Rota 10; Túnel de Rocha; e Estrada da Vitória",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/87/066Machop_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Machop_(Pok%C3%A9mon)",
	},
	{
		nome: "Machoke",
		numero: 67, // considerando a national dex
		tipo: ["Lutador"],
		massa: 70.5, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f8/F0067.png",
		estatistica: {
			ps: 80,
			atq: 100,
			def: 70,
			atq_esp: 50,
			def_esp: 60,
			vel: 45,
		},
		descricao:
			"Seu corpo musculoso é tão poderoso, deve usar um cinto regulador de energia para.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Superpoder",
		obtencao: "Estrada da Vitória; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/47/067Machoke_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Machoke_(Pok%C3%A9mon)",
	},
	{
		nome: "Machamp",
		numero: 68, // considerando a national dex
		tipo: ["Lutador"],
		massa: 130.0, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/68/F0068.png",
		estatistica: {
			ps: 90,
			atq: 130,
			def: 80,
			atq_esp: 65,
			def_esp: 85,
			vel: 55,
		},
		descricao:
			"Usando seus pesados músculos, lança poderosos socos que conseguem mandar a vítima para o horizonte.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Superpoder",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/77/068Machamp_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Machamp_(Pok%C3%A9mon)",
	},
	{
		nome: "Bellsprout",
		numero: 69, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 4.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/40/F0069.png",
		estatistica: {
			ps: 50,
			atq: 75,
			def: 35,
			atq_esp: 70,
			def_esp: 30,
			vel: 40,
		},
		descricao:
			"Um Pokémon carnívoro que prende e come insetos. Usa seus pés raiz para sugar a umidade necessária.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Flor",
		obtencao: "Rotas 5, 6, 7, e outras",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/ac/069Bellsprout_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bellsprout_(Pok%C3%A9mon)",
	},
	{
		nome: "Weepinbell",
		numero: 70, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 6.4, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a1/F0070.png",
		estatistica: {
			ps: 65,
			atq: 90,
			def: 50,
			atq_esp: 85,
			def_esp: 45,
			vel: 55,
		},
		descricao:
			"Expele Pó de Veneno para imobilizar seu adversário e então finaliza com um spray de Ácido.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mata-Moscas",
		obtencao: "Rotas 12, 13, 14, e outra; Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1e/070Weepinbell_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Weepinbell_(Pok%C3%A9mon)",
	},
	{
		nome: "Victreebel",
		numero: 71, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 15.5, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8d/F0071.png",
		estatistica: {
			ps: 80,
			atq: 105,
			def: 65,
			atq_esp: 100,
			def_esp: 60,
			vel: 70,
		},
		descricao:
			"É dito viver em grandes colônias nas profundezas das selvas, embora ninguém tenha retornando de lá.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mata-Moscas",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/22/071Victreebel_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Victreebel_(Pok%C3%A9mon)",
	},
	{
		nome: "Tentacool",
		numero: 72, // considerando a national dex
		tipo: ["Água", " Veneno"],
		massa: 45.5, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/51/F0072.png",
		estatistica: {
			ps: 40,
			atq: 40,
			def: 35,
			atq_esp: 50,
			def_esp: 100,
			vel: 70,
		},
		descricao:
			"Deriva em mares rasos. Pescadores que os fisgam por acidente são frequentemente punidos por seu Ácido.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Água-Viva",
		obtencao: "Rotas 11, 12, 13, e outras",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/da/072Tentacool_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tentacool_(Pok%C3%A9mon)",
	},
	{
		nome: "Tentacruel",
		numero: 73, // considerando a national dex
		tipo: ["Água", " Veneno"],
		massa: 55.5, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d7/F0073.png",
		estatistica: {
			ps: 80,
			atq: 70,
			def: 65,
			atq_esp: 80,
			def_esp: 120,
			vel: 100,
		},
		descricao:
			"Os tentáculos são normalmente mantidos curtos. Nas caçadas, os tentáculos são estendidos para enredar e imobilizar presas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Água-Viva",
		obtencao: "Rotas 19, 20, e 21; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f5/073Tentacruel_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tentacruel_(Pok%C3%A9mon)",
	},
	{
		nome: "Geodude de Kanto",
		numero: 74.1, // considerando a national dex
		tipo: ["Rocha", " Terra"],
		massa: 20.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/ca/F0074.png",
		estatistica: {
			ps: 40,
			atq: 80,
			def: 100,
			atq_esp: 30,
			def_esp: 30,
			vel: 20,
		},
		descricao:
			"Encontrado em campos e montanhas. Pessoas, por confundi-los com pedras, pisam ou tropeçam neles.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rocha",
		obtencao: "Monte da Lua; Túnel de Rocha; e Estrada da Vitória",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5e/074Geodude_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Geodude_(Pok%C3%A9mon)",
	},
	{
		nome: "Geodude de Alola",
		numero: 74.2, // considerando a national dex
		tipo: ["Rocha", " Elétrico"],
		massa: 20.3, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/ca/F0074.png",
		estatistica: {
			ps: 40,
			atq: 80,
			def: 100,
			atq_esp: 30,
			def_esp: 30,
			vel: 20,
		},
		descricao:
			"Seu corpo é uma rocha magnética. Areia de ferro se prende firmemente as partes de seu corpo que são particularmente magnéticas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rocha",
		obtencao: "Rota 12; e Blush Mountain",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/eb/074Geodude_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Geodude_(Pok%C3%A9mon)",
	},
	{
		nome: "Graveler de Kanto",
		numero: 75.1, // considerando a national dex
		tipo: ["Rocha", " Terra"],
		massa: 105.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/26/F0075.png",
		estatistica: {
			ps: 55,
			atq: 95,
			def: 115,
			atq_esp: 45,
			def_esp: 45,
			vel: 35,
		},
		descricao:
			"Rola para se mover. Rola sobre qualquer obstáculo sem diminuir a velocidade ou muda sua direção.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rocha",
		obtencao: "Estrada da Vitória; Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/72/075Graveler_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Graveler_(Pok%C3%A9mon)",
	},
	{
		nome: "Graveler de Alola",
		numero: 75.2, // considerando a national dex
		tipo: ["Rocha", " Elétrico"],
		massa: 110.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/26/F0075.png",
		estatistica: {
			ps: 55,
			atq: 95,
			def: 115,
			atq_esp: 45,
			def_esp: 45,
			vel: 35,
		},
		descricao:
			"Sua comida preferida é dravita. Após ter comido esse mineral, cristais se formam dentro do Pokémon, subindo para a superfície de parte de seu corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rocha",
		obtencao: "Rota 17; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1d/075Graveler_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Graveler_(Pok%C3%A9mon)",
	},
	{
		nome: "Golem de Kanto",
		numero: 76.1, // considerando a national dex
		tipo: ["Rocha", " Terra"],
		massa: 300.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/11/F0076.png",
		estatistica: {
			ps: 80,
			atq: 120,
			def: 130,
			atq_esp: 55,
			def_esp: 65,
			vel: 45,
		},
		descricao:
			"Seu corpo semelhante a uma pedra é extremamente duro. Consegue facilmente aguentar explosões de dinamite sem dano algum.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Megaton",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/be/076Golem_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Golem_(Pok%C3%A9mon)",
	},
	{
		nome: "Golem de Alola",
		numero: 76.2, // considerando a national dex
		tipo: ["Rocha", " Elétrico"],
		massa: 316.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/11/F0076.png",
		estatistica: {
			ps: 80,
			atq: 120,
			def: 130,
			atq_esp: 55,
			def_esp: 65,
			vel: 45,
		},
		descricao:
			"Atira rochas carregas com eletricidade. Mesmo se a rocha não for atirada com tanta precisão, apenas arranhar o oponente causará dormência e desmaio.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Megaton",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/13/076Golem_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Golem_(Pok%C3%A9mon)",
	},
	{
		nome: "Ponyta de Kanto",
		numero: 77.1, // considerando a national dex
		tipo: ["Fogo"],
		massa: 30.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/2a/F0077.png",
		estatistica: {
			ps: 50,
			atq: 85,
			def: 55,
			atq_esp: 65,
			def_esp: 65,
			vel: 90,
		},
		descricao:
			"Seus cascos são dez vezes mais duros que diamantes. Consegue atropelar qualquer coisa completamente plana em pouco tempo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cavalo de Fogo",
		obtencao: "Rota 17; e Mansão Pokémon",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/da/077Ponyta_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ponyta_(Pok%C3%A9mon)",
	},
	{
		nome: "Ponyta de Galar",
		numero: 77.2, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 24.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/2a/F0077.png",
		estatistica: {
			ps: 50,
			atq: 85,
			def: 55,
			atq_esp: 65,
			def_esp: 65,
			vel: 90,
		},
		descricao:
			"Seu pequeno chifre esconde um poder de cura. Com algumas esfregadas do chifre deste Pokémon, qualquer ferimento leve que você tenha será curado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chifre Único",
		obtencao: "Glimwood Tangle; e Old Cemetery",
		estagio: 1,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b2/077Ponyta_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ponyta_(Pok%C3%A9mon)",
	},
	{
		nome: "Rapidash de Kanto",
		numero: 78.1, // considerando a national dex
		tipo: ["Fogo"],
		massa: 95.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/ce/F0078.png",
		estatistica: {
			ps: 65,
			atq: 100,
			def: 70,
			atq_esp: 80,
			def_esp: 80,
			vel: 105,
		},
		descricao:
			"Muito competitivo, este Pokémon persegue qualquer coisa que se mova rápido na esperança de competir.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cavalo de Fogo",
		obtencao: "Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d0/078Rapidash_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)",
	},
	{
		nome: "Rapidash de Galar",
		numero: 78.2, // considerando a national dex
		tipo: ["Psíquico", " Fada"],
		massa: 80.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/ce/F0078.png",
		estatistica: {
			ps: 65,
			atq: 100,
			def: 70,
			atq_esp: 80,
			def_esp: 80,
			vel: 105,
		},
		descricao:
			"Corajoso e orgulhoso, este Pokémon corre velozmente pela floresta, com seus passos auxiliados pelo poder psíquico armazenado no pelo dos seus boletos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chifre Único",
		obtencao: "Old Cemetery",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c1/078Rapidash_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)",
	},
	{
		nome: "Slowpoke de Kanto",
		numero: 79.1, // considerando a national dex
		tipo: ["Água", " Psíquico"],
		massa: 36.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/dd/F0079.png",
		estatistica: {
			ps: 90,
			atq: 65,
			def: 65,
			atq_esp: 40,
			def_esp: 40,
			vel: 15,
		},
		descricao:
			"Incrivelmente lento. Demora cinco segundos para sentir dor quando atacado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Atordoado",
		obtencao: "Rotas 10, 12, e 13; Ilhas Espuma; e Zona Safari",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b7/079Slowpoke_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Slowpoke_(Pok%C3%A9mon)",
	},
	{
		nome: "Slowpoke de Galar",
		numero: 79.2, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 36.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/dd/F0079.png",
		estatistica: {
			ps: 90,
			atq: 65,
			def: 65,
			atq_esp: 40,
			def_esp: 40,
			vel: 15,
		},
		descricao:
			"Apesar de normalmente ser um Pokémon desorientado, sua expressão abruptamente se aguça dependendo da ocasião. A causa disso parece estar em sua dieta.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Atordoado",
		obtencao: "Wedgehurst Station; e Fields of Honor",
		estagio: 1,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a6/079Slowpoke_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Slowpoke_(Pok%C3%A9mon)",
	},
	{
		nome: "Slowbro de Kanto",
		numero: 80.1, // considerando a national dex
		tipo: ["Água", " Psíquico"],
		massa: 78.5, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9b/F0080.png",
		estatistica: {
			ps: 95,
			atq: 75,
			def: 110,
			atq_esp: 100,
			def_esp: 80,
			vel: 30,
		},
		descricao:
			"É dito que o Shellder que está preso à sua cauda se alimenta dos restos que sobraram do hospedeiro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Caranguejo Eremita",
		obtencao:
			"Rotas 12, 13, e 23; Caverna de Cerulean; Ilhas Espuma; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ef/080Slowbro_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Slowbro_(Pok%C3%A9mon)",
	},
	{
		nome: "Slowbro de Galar",
		numero: 80.2, // considerando a national dex
		tipo: ["Veneno", " Psíquico"],
		massa: 70.5, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9b/F0080.png",
		estatistica: {
			ps: 95,
			atq: 100,
			def: 95,
			atq_esp: 100,
			def_esp: 70,
			vel: 30,
		},
		descricao:
			"Uma mordida de Shellder desencadeou uma reação química com os temperos dentro de seu corpo, fazendo com que ele se tornasse um Pokémon do tipo Veneno.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Caranguejo Eremita",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ea/080Slowbro_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Slowbro_(Pok%C3%A9mon)",
	},
	{
		nome: "Magnemite",
		numero: 81, // considerando a national dex
		tipo: ["Elétrico", " Metal"],
		massa: 6.0, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/7a/F0081.png",
		estatistica: {
			ps: 25,
			atq: 35,
			def: 70,
			atq_esp: 95,
			def_esp: 55,
			vel: 45,
		},
		descricao:
			"Usa anti-gravidade para permanecer suspenso. Aparece sem qualquer aviso e usa Onda-Trovão e movimentos similares.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Magnético",
		obtencao: "Rota 10; e Usina Elétrica Abandonada",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/59/081Magnemite_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Magnemite_(Pok%C3%A9mon)",
	},
	{
		nome: "Magneton",
		numero: 82, // considerando a national dex
		tipo: ["Elétrico", " Metal"],
		massa: 60.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/2d/F0082.png",
		estatistica: {
			ps: 50,
			atq: 60,
			def: 95,
			atq_esp: 120,
			def_esp: 70,
			vel: 70,
		},
		descricao:
			"Gera estranhas ondas de rádio. Aumenta a temperatura em dois graus Célsius dentro de um quilômetro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Magnético",
		obtencao: "Usina Elétrica Abandonada; Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d8/082Magneton_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Magneton_(Pok%C3%A9mon)",
	},
	{
		nome: "Farfetch'd de Kanto",
		numero: 83.1, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 15.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/eb/F0083.png",
		estatistica: {
			ps: 52,
			atq: 90,
			def: 55,
			atq_esp: 58,
			def_esp: 62,
			vel: 60,
		},
		descricao:
			"O ramo de cebolinha que segura é sua arma. É usado como uma espada de metal.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pato Selvagem",
		obtencao: "Rotas 12, e 13",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/21/083Farfetch%27d_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Farfetch%27d_(Pok%C3%A9mon)",
	},
	{
		nome: "Farfetch'd de Galar",
		numero: 83.2, // considerando a national dex
		tipo: ["Lutador"],
		massa: 42.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/eb/F0083.png",
		estatistica: {
			ps: 52,
			atq: 95,
			def: 55,
			atq_esp: 58,
			def_esp: 62,
			vel: 55,
		},
		descricao:
			"São guerreiros corajosos e usam alhos-porós grossos e resistentes na batalha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pato Selvagem",
		obtencao: "Rota 5; e Giant's Mirror",
		estagio: 1,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/8b/083Farfetch%27d_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Farfetch%27d_(Pok%C3%A9mon)",
	},
	{
		nome: "Doduo",
		numero: 84, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 39.2, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/45/F0084.png",
		estatistica: {
			ps: 35,
			atq: 85,
			def: 45,
			atq_esp: 35,
			def_esp: 35,
			vel: 75,
		},
		descricao:
			"Um pássaro que compensa por seu vôo ruim com sua alta velocidade de patas. Deixa pegadas gigantes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro Gêmeo",
		obtencao: "Rotas 16, 17, e 18; e Zona Safari",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/88/084Doduo_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Doduo_(Pok%C3%A9mon)",
	},
	{
		nome: "Dodrio",
		numero: 85, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 85.2, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/76/F0085.png",
		estatistica: {
			ps: 60,
			atq: 110,
			def: 70,
			atq_esp: 60,
			def_esp: 60,
			vel: 100,
		},
		descricao:
			"Usa seus três cérebros para executar planos complexos. Enquanto duas cabeças dormem, uma cabeça permanece acordada.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro Triplo",
		obtencao: "Rota 17; Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f2/085Dodrio_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dodrio_(Pok%C3%A9mon)",
	},
	{
		nome: "Seel",
		numero: 86, // considerando a national dex
		tipo: ["Água"],
		massa: 90.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/60/F0086.png",
		estatistica: {
			ps: 65,
			atq: 45,
			def: 55,
			atq_esp: 45,
			def_esp: 70,
			vel: 45,
		},
		descricao:
			"O chifre protuberante em sua cabeça é muito duro. É usado para bater em gelo espesso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Leão Marinho",
		obtencao: "Ilhas Espuma",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0d/086Seel_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Seel_(Pok%C3%A9mon)",
	},
	{
		nome: "Dewgong",
		numero: 87, // considerando a national dex
		tipo: ["Água", " Gelo"],
		massa: 120.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d3/F0087.png",
		estatistica: {
			ps: 90,
			atq: 70,
			def: 80,
			atq_esp: 70,
			def_esp: 95,
			vel: 70,
		},
		descricao:
			"Armazena calor em seu corpo. Nada a 8 nós constantes, mesmo em águas intensamente frias.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Leão Marinho",
		obtencao: "Ilhas Espuma; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d2/087Dewgong_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dewgong_(Pok%C3%A9mon)",
	},
	{
		nome: "Grimer de Kanto",
		numero: 88.1, // considerando a national dex
		tipo: ["Veneno"],
		massa: 30.0, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b4/F0088.png",
		estatistica: {
			ps: 80,
			atq: 80,
			def: 50,
			atq_esp: 40,
			def_esp: 50,
			vel: 25,
		},
		descricao:
			"Aparece em áreas imundas. Prospera consumindo lodo poluído que é bombeado para fora das fábricas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lodo",
		obtencao: "Mansão Pokémon; e Usina Elétrica Abandonada",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0e/088Grimer_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Grimer_(Pok%C3%A9mon)",
	},
	{
		nome: "Grimer de Alola",
		numero: 88.2, // considerando a national dex
		tipo: ["Veneno", " Noturno"],
		massa: 42.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b4/F0088.png",
		estatistica: {
			ps: 80,
			atq: 80,
			def: 50,
			atq_esp: 40,
			def_esp: 50,
			vel: 25,
		},
		descricao:
			"Os cristais em seu corpo são pedaços de toxinas. Se um deles cair, venenos letais vazam.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lodo",
		obtencao: "Trainers' School; Hau'oli City; e Malie City",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/fb/088Grimer_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Grimer_(Pok%C3%A9mon)",
	},
	{
		nome: "Muk de Kanto",
		numero: 89.1, // considerando a national dex
		tipo: ["Veneno"],
		massa: 30.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/4e/F0089.png",
		estatistica: {
			ps: 105,
			atq: 105,
			def: 75,
			atq_esp: 65,
			def_esp: 100,
			vel: 50,
		},
		descricao:
			"Coberto por uma camada grossa de lama imunda e vil. É tão tóxico, mesmo suas pegadas contém veneno.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lodo",
		obtencao: "Mansão Pokémon; Usina Elétrica Abandonada; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a0/089Muk_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Muk_(Pok%C3%A9mon)",
	},
	{
		nome: "Muk de Alola",
		numero: 89.2, // considerando a national dex
		tipo: ["Veneno", " Noturno"],
		massa: 52.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/4e/F0089.png",
		estatistica: {
			ps: 105,
			atq: 105,
			def: 75,
			atq_esp: 65,
			def_esp: 100,
			vel: 50,
		},
		descricao:
			"O lixo que come causa mudanças químicas constantes em seu corpo, o que produz sua coloração excessivamente vívida.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lodo",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d1/089Muk_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Muk_(Pok%C3%A9mon)",
	},
	{
		nome: "Shellder",
		numero: 90, // considerando a national dex
		tipo: ["Água"],
		massa: 4.0, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/be/F0090.png",
		estatistica: {
			ps: 30,
			atq: 65,
			def: 100,
			atq_esp: 45,
			def_esp: 25,
			vel: 40,
		},
		descricao:
			"Sua carapaça dura repele qualquer tipo de ataque. É vulnerável somente quando abre sua carapaça.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bivalve",
		obtencao: "Rotas 6, 11, 19, e outras; e Ilhas Espuma",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/62/090Shellder_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shellder_(Pok%C3%A9mon)",
	},
	{
		nome: "Cloyster",
		numero: 91, // considerando a national dex
		tipo: ["Água", " Gelo"],
		massa: 132.5, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d7/F0091.png",
		estatistica: {
			ps: 50,
			atq: 95,
			def: 180,
			atq_esp: 85,
			def_esp: 45,
			vel: 70,
		},
		descricao:
			"Quando atacado, lança seus chifres em voleios rápidos. Seu interior nunca foi visto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bivalve",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5c/091Cloyster_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cloyster_(Pok%C3%A9mon)",
	},
	{
		nome: "Gastly",
		numero: 92, // considerando a national dex
		tipo: ["Fantasma", " Veneno"],
		massa: 0.1, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e8/F0092.png",
		estatistica: {
			ps: 30,
			atq: 35,
			def: 30,
			atq_esp: 100,
			def_esp: 35,
			vel: 80,
		},
		descricao:
			"Quase invisível, este Pokémon gasoso envolve o alvo e o põe para dormir sem que perceba.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gás",
		obtencao: "Torre Pokémon",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/aa/092Gastly_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gastly_(Pok%C3%A9mon)",
	},
	{
		nome: "Haunter",
		numero: 93, // considerando a national dex
		tipo: ["Fantasma", " Veneno"],
		massa: 0.1, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/3f/F0093.png",
		estatistica: {
			ps: 45,
			atq: 50,
			def: 45,
			atq_esp: 115,
			def_esp: 55,
			vel: 95,
		},
		descricao:
			"Por causa de sua habilidade de atravessar paredes, é dito ser de outra dimensão.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gás",
		obtencao: "Torre Pokémon; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d1/093Haunter_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Haunter_(Pok%C3%A9mon)",
	},
	{
		nome: "Gengar",
		numero: 94, // considerando a national dex
		tipo: ["Fantasma", " Veneno"],
		massa: 40.5, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c1/F0094.png",
		estatistica: {
			ps: 60,
			atq: 65,
			def: 60,
			atq_esp: 130,
			def_esp: 75,
			vel: 110,
		},
		descricao:
			"Sob a lua cheia, este Pokémon imita as sombras das pessoas e ri do medo delas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sombra",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ed/094Gengar_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gengar_(Pok%C3%A9mon)",
	},
	{
		nome: "Onix",
		numero: 95, // considerando a national dex
		tipo: ["Rocha", " Terra"],
		massa: 210.0, // em kg
		altura: 8.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/35/F0095.png",
		estatistica: {
			ps: 35,
			atq: 45,
			def: 160,
			atq_esp: 30,
			def_esp: 45,
			vel: 70,
		},
		descricao:
			"A medida que cresce, as porções de rocha de seu corpo endurecem para se tornarem semelhante a diamante, mas de cor preta.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Serpente de Pedra",
		obtencao: "Túnel de Rocha; e Estrada da Vitória",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7a/095Onix_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Onix_(Pok%C3%A9mon)",
	},
	{
		nome: "Drowzee",
		numero: 96, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 32.4, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5b/F0096.png",
		estatistica: {
			ps: 60,
			atq: 48,
			def: 45,
			atq_esp: 43,
			def_esp: 90,
			vel: 42,
		},
		descricao:
			"Põe os adversários para dormir então come seus sonhos. Ocasionalmente fica doente por comer sonhos ruins.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Hipnose",
		obtencao: "Rota 11",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2f/096Drowzee_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Drowzee_(Pok%C3%A9mon)",
	},
	{
		nome: "Hypno",
		numero: 97, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 75.6, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/93/F0097.png",
		estatistica: {
			ps: 85,
			atq: 73,
			def: 70,
			atq_esp: 73,
			def_esp: 115,
			vel: 67,
		},
		descricao:
			"Quando trava os olhos em um oponente, usa uma mistura de movimentos psíquicos, como Hipnose e Confusão.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Hipnose",
		obtencao: "Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/8d/097Hypno_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hypno_(Pok%C3%A9mon)",
	},
	{
		nome: "Krabby",
		numero: 98, // considerando a national dex
		tipo: ["Água"],
		massa: 6.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/ce/F0098.png",
		estatistica: {
			ps: 30,
			atq: 105,
			def: 90,
			atq_esp: 25,
			def_esp: 25,
			vel: 50,
		},
		descricao:
			"Suas pinças não são só poderosas armas, são usadas para equilíbrio quando está andando de lado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Caranguejo de Rio",
		obtencao: "Rotas 6, 10, 11, e outras; Zona Safari; e Ilhas Espuma",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/cf/098Krabby_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Krabby_(Pok%C3%A9mon)",
	},
	{
		nome: "Kingler",
		numero: 99, // considerando a national dex
		tipo: ["Água"],
		massa: 60.0, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f1/F0099.png",
		estatistica: {
			ps: 55,
			atq: 130,
			def: 115,
			atq_esp: 50,
			def_esp: 50,
			vel: 75,
		},
		descricao:
			"A pinça maior possui 10'000 cv em poder de esmagamento. Contudo, seu tamanho o torna difícil de usar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pinça",
		obtencao:
			"Rotas 10, 23, e 25; Caverna de Cerulean; Ilhas Espuma; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1f/099Kingler_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kingler_(Pok%C3%A9mon)",
	},
	{
		nome: "Voltorb de Kanto",
		numero: 100.1, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 10.4, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/45/F0100.png",
		estatistica: {
			ps: 40,
			atq: 30,
			def: 50,
			atq_esp: 55,
			def_esp: 55,
			vel: 100,
		},
		descricao:
			"Normalmente encontrado em usinas elétricas. Facilmente confundido com uma Poké Bola, já eletrocutaram muitas pessoas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bola",
		obtencao: "Rota 10; e Usina Elétrica Abandonada",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/63/100Voltorb_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Voltorb_(Pok%C3%A9mon)",
	},
	{
		nome: "Voltorb de Hisui",
		numero: 100.2, // considerando a national dex
		tipo: ["Elétrico", " Planta"],
		massa: 13.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/45/F0100.png",
		estatistica: {
			ps: 40,
			atq: 30,
			def: 50,
			atq_esp: 55,
			def_esp: 55,
			vel: 100,
		},
		descricao:
			"Um Pokémon enigmático que, por acaso, tem uma semelhança com uma Pokébola. Quando animado, descarrega a corrente elétrica que armazenou em sua barriga e então solta uma grande e estrondosa risada.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Esfera",
		obtencao: "Coronet Highlands: Celestica Ruins, e Sacred Plaza",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4f/100Voltorb-Hisui_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Voltorb_(Pok%C3%A9mon)",
	},
	{
		nome: "Electrode de Kanto",
		numero: 101.1, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 66.6, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5f/F0101.png",
		estatistica: {
			ps: 60,
			atq: 50,
			def: 70,
			atq_esp: 80,
			def_esp: 80,
			vel: 150,
		},
		descricao:
			"Armazena energia elétrica sob pressão muito alta. Geralmente explode com pouca ou nenhuma provocação.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bola",
		obtencao: "Usina Elétrica Abandonada; Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/ca/101Electrode_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Electrode_(Pok%C3%A9mon)",
	},
	{
		nome: "Electrode de Hisui",
		numero: 101.2, // considerando a national dex
		tipo: ["Elétrico", " Planta"],
		massa: 71.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5f/F0101.png",
		estatistica: {
			ps: 60,
			atq: 50,
			def: 70,
			atq_esp: 80,
			def_esp: 80,
			vel: 150,
		},
		descricao:
			"O tecido na superfície de seu corpo é curiosamente semelhante a composição de uma Bolota. Quando irritado, este Pokémon libera uma corrente elétrica igual a 20 raios.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Esfera",
		obtencao: "Coronet Highlands; e por evolução",
		estagio: 1,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6c/101Electrode-Hisui_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Electrode_(Pok%C3%A9mon)",
	},
	{
		nome: "Exeggcute",
		numero: 102, // considerando a national dex
		tipo: ["Planta", " Psíquico"],
		massa: 2.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f8/F0102.png",
		estatistica: {
			ps: 60,
			atq: 40,
			def: 80,
			atq_esp: 60,
			def_esp: 45,
			vel: 40,
		},
		descricao:
			"Comumente confundido por ovos. Quando perturbados, rapidamente se reúnem e atacam em bando.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ovo",
		obtencao: "Zona Safari",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/74/102Exeggcute_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Exeggcute_(Pok%C3%A9mon)",
	},
	{
		nome: "Exeggutor de Kanto",
		numero: 103.1, // considerando a national dex
		tipo: ["Planta", " Psíquico"],
		massa: 120.0, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fb/F0103.png",
		estatistica: {
			ps: 95,
			atq: 95,
			def: 85,
			atq_esp: 125,
			def_esp: 75,
			vel: 55,
		},
		descricao:
			"Seus gritos são muito barulhentos. Isso ocorre porque cada uma das três cabeças pensa no que quiser.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coco",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7f/103Exeggutor_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Exeggutor_(Pok%C3%A9mon)",
	},
	{
		nome: "Exeggutor de Alola",
		numero: 103.2, // considerando a national dex
		tipo: ["Planta", " Dragão"],
		massa: 415.6, // em kg
		altura: 10.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fb/F0103.png",
		estatistica: {
			ps: 95,
			atq: 105,
			def: 85,
			atq_esp: 125,
			def_esp: 75,
			vel: 45,
		},
		descricao:
			"À medida que crescia mais e mais, sua dependência de poderes psíquicos aumentava, enquanto dentro de si despertava o poder do dragão adormecido.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coco",
		obtencao: "Exeggutor Island; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e3/103Exeggutor_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Exeggutor_(Pok%C3%A9mon)",
	},
	{
		nome: "Cubone",
		numero: 104, // considerando a national dex
		tipo: ["Terra"],
		massa: 6.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9c/F0104.png",
		estatistica: {
			ps: 50,
			atq: 50,
			def: 95,
			atq_esp: 40,
			def_esp: 50,
			vel: 35,
		},
		descricao:
			"Por nunca remover seu capacete, ninguém nunca viu o real rosto deste Pokémon.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Solitário",
		obtencao: "Torre Pokémon; e Zona Safari",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3a/104Cubone_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cubone_(Pok%C3%A9mon)",
	},
	{
		nome: "Marowak de Kanto",
		numero: 105.1, // considerando a national dex
		tipo: ["Terra"],
		massa: 45.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/15/F0105.png",
		estatistica: {
			ps: 60,
			atq: 80,
			def: 110,
			atq_esp: 50,
			def_esp: 80,
			vel: 45,
		},
		descricao:
			"O osso que segura é sua arma principal. Lança o osso com destreza como um boomerang para nocautear os alvos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Acumulador de Ossos",
		obtencao:
			"Zona Safari; Estrada da Vitória; Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c9/105Marowak_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Marowak_(Pok%C3%A9mon)",
	},
	{
		nome: "Marowak de Alola",
		numero: 105.2, // considerando a national dex
		tipo: ["Fogo", " Fantasma"],
		massa: 34.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/15/F0105.png",
		estatistica: {
			ps: 60,
			atq: 80,
			def: 110,
			atq_esp: 50,
			def_esp: 80,
			vel: 45,
		},
		descricao:
			"Os ossos que possui já foram de sua mãe. Os arrependimentos de sua mãe se tornaram como um espírito vingativo protegendo este Pokémon.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Acumulador de Ossos",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/61/105Marowak_Alola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Marowak_(Pok%C3%A9mon)",
	},
	{
		nome: "Hitmonlee",
		numero: 106, // considerando a national dex
		tipo: ["Lutador"],
		massa: 49.8, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c1/F0106.png",
		estatistica: {
			ps: 50,
			atq: 120,
			def: 53,
			atq_esp: 35,
			def_esp: 110,
			vel: 87,
		},
		descricao:
			"Quando está com pressa, o comprimento de suas pernas aumenta progressivamente. Corre suavemente com passadas longas e inclinadas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chutador",
		obtencao: "Dojo de tipo Lutador",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3c/106Hitmonlee_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hitmonlee_(Pok%C3%A9mon)",
	},
	{
		nome: "Hitmonchan",
		numero: 107, // considerando a national dex
		tipo: ["Lutador"],
		massa: 50.2, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/13/F0107.png",
		estatistica: {
			ps: 50,
			atq: 105,
			def: 79,
			atq_esp: 35,
			def_esp: 110,
			vel: 76,
		},
		descricao:
			"Embora aparente fazer nada, dispara socos em voleios rápidos impossíveis de ver.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Socador",
		obtencao: "Dojo de tipo Lutador",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b3/107Hitmonchan_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hitmonchan_(Pok%C3%A9mon)",
	},
	{
		nome: "Lickitung",
		numero: 108, // considerando a national dex
		tipo: ["Normal"],
		massa: 65.5, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/74/F0108.png",
		estatistica: {
			ps: 90,
			atq: 55,
			def: 75,
			atq_esp: 60,
			def_esp: 75,
			vel: 30,
		},
		descricao:
			"Sua língua pode ser estendida como a de um camaleão. Deixa uma sensação de formigamento quando lambe inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lambedor",
		obtencao: "Zona Safari; e Caverna de Cerulean",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f5/108Lickitung_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lickitung_(Pok%C3%A9mon)",
	},
	{
		nome: "Koffing",
		numero: 109, // considerando a national dex
		tipo: ["Veneno"],
		massa: 1.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/03/F0109.png",
		estatistica: {
			ps: 40,
			atq: 65,
			def: 95,
			atq_esp: 60,
			def_esp: 45,
			vel: 35,
		},
		descricao:
			"Por armazenar vários tipos de gases tóxicos em seu corpo, é propenso a explodir sem aviso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gás Venenoso",
		obtencao: "Mansão Pokémon",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/89/109Koffing_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Koffing_(Pok%C3%A9mon)",
	},
	{
		nome: "Weezing de Kanto",
		numero: 110.1, // considerando a national dex
		tipo: ["Veneno"],
		massa: 9.5, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/de/F0110.png",
		estatistica: {
			ps: 65,
			atq: 90,
			def: 120,
			atq_esp: 85,
			def_esp: 70,
			vel: 60,
		},
		descricao:
			"Vive e cresce absorvendo poeira, germes e gases venenosos contidos em resíduos tóxicos e lixo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gás Venenoso",
		obtencao: "Mansão Pokémon; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/43/110Weezing_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Weezing_(Pok%C3%A9mon)",
	},
	{
		nome: "Weezing de Galar",
		numero: 110.2, // considerando a national dex
		tipo: ["Veneno", " Fada"],
		massa: 16.0, // em kg
		altura: 3.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/de/F0110.png",
		estatistica: {
			ps: 65,
			atq: 90,
			def: 120,
			atq_esp: 85,
			def_esp: 70,
			vel: 60,
		},
		descricao:
			"Este Pokémon consome partículas que contaminam o ar. Em vez de deixar fezes, expele ar limpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gás Venenoso",
		obtencao:
			"East Lake Axewell; Lake of Outrage; Slumbering Weald; e por evolução",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/da/110Weezing_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Weezing_(Pok%C3%A9mon)",
	},
	{
		nome: "Rhyhorn",
		numero: 111, // considerando a national dex
		tipo: ["Terra", " Rocha"],
		massa: 115.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5a/F0111.png",
		estatistica: {
			ps: 80,
			atq: 85,
			def: 95,
			atq_esp: 30,
			def_esp: 30,
			vel: 25,
		},
		descricao:
			"Seus ossos maciços são 1'000 vezes mais duros que os ossos de humanos. Consegue facilmente mandar um trailer voando.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espigão",
		obtencao: "Zona Safari; e Caverna Cerulean",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/63/111Rhyhorn_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rhyhorn_(Pok%C3%A9mon)",
	},
	{
		nome: "Rhydon",
		numero: 112, // considerando a national dex
		tipo: ["Terra", " Rocha"],
		massa: 120.0, // em kg
		altura: 1.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/39/F0112.png",
		estatistica: {
			ps: 105,
			atq: 130,
			def: 120,
			atq_esp: 45,
			def_esp: 45,
			vel: 40,
		},
		descricao:
			"Protegido por um couro semelhante a uma armadura, é capaz de viver em lava derretida de 2'000° Celsius.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Perfurador",
		obtencao: "Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/ff/112Rhydon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rhydon_(Pok%C3%A9mon)",
	},
	{
		nome: "Chansey",
		numero: 113, // considerando a national dex
		tipo: ["Normal"],
		massa: 34.6, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/de/F0113.png",
		estatistica: {
			ps: 250,
			atq: 5,
			def: 5,
			atq_esp: 35,
			def_esp: 105,
			vel: 50,
		},
		descricao:
			"Um Pokémon raro e indescritível que dizem trazer felicidade àqueles que conseguem obtê-la.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ovo",
		obtencao: "Zona Safari; e Caverna de Cerulean",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2a/113Chansey_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Chansey_(Pok%C3%A9mon)",
	},
	{
		nome: "Tangela",
		numero: 114, // considerando a national dex
		tipo: ["Planta"],
		massa: 35.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b6/F0114.png",
		estatistica: {
			ps: 65,
			atq: 55,
			def: 115,
			atq_esp: 100,
			def_esp: 40,
			vel: 60,
		},
		descricao:
			"Todo seu corpo é coberto por trepadeiras largas que são semelhantes a algas marinhas. Suas vinhas tremem enquanto caminha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Trepadeira",
		obtencao: "Rota 21; e Zona Safari",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ef/114Tangela_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tangela_(Pok%C3%A9mon)",
	},
	{
		nome: "Kangaskhan",
		numero: 115, // considerando a national dex
		tipo: ["Normal"],
		massa: 80.0, // em kg
		altura: 2.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/87/F0115.png",
		estatistica: {
			ps: 105,
			atq: 95,
			def: 80,
			atq_esp: 40,
			def_esp: 80,
			vel: 90,
		},
		descricao:
			"A criança raramente sai da bolsa protetora da mãe antes dos três anos de idade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Materno",
		obtencao: "Zona Safari",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3c/115Kangaskhan_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kangaskhan_(Pok%C3%A9mon)",
	},
	{
		nome: "Horsea",
		numero: 116, // considerando a national dex
		tipo: ["Água"],
		massa: 8.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b3/F0116.png",
		estatistica: {
			ps: 30,
			atq: 40,
			def: 70,
			atq_esp: 70,
			def_esp: 25,
			vel: 60,
		},
		descricao:
			"Conhecido por abater insetos voadores com jatos de tintas precisos da superfície da água.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		obtencao: "Rotas 10, 11, 12, e outras; e Ilhas Espuma",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/de/116Horsea_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Horsea_(Pok%C3%A9mon)",
	},
	{
		nome: "Seadra",
		numero: 117, // considerando a national dex
		tipo: ["Água"],
		massa: 25.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/35/F0117.png",
		estatistica: {
			ps: 55,
			atq: 65,
			def: 95,
			atq_esp: 95,
			def_esp: 45,
			vel: 85,
		},
		descricao:
			"Capaz de nadar para trás, batendo rapidamente a cauda robusta e suas barbatanas peitorais em forma de asa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		obtencao:
			"Rotas 12, 13, e 23; Ilhas Espuma; Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/59/117Seadra_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Seadra_(Pok%C3%A9mon)",
	},
	{
		nome: "Goldeen",
		numero: 118, // considerando a national dex
		tipo: ["Água"],
		massa: 15.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/1b/F0118.png",
		estatistica: {
			ps: 45,
			atq: 67,
			def: 60,
			atq_esp: 35,
			def_esp: 50,
			vel: 63,
		},
		descricao:
			"Sua barbatana caudal ondula como um elegante vestido de baile, dando-lhe o apelido de 'Rainha da Água'.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe Dourado",
		obtencao:
			"Rotas 6, 10, 11, e outras; Zona Safari; Ilhas Espuma; Planalto Índigo e Caverna de Cerulean",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/af/118Goldeen_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Goldeen_(Pok%C3%A9mon)",
	},
	{
		nome: "Seaking",
		numero: 119, // considerando a national dex
		tipo: ["Água"],
		massa: 39.0, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/12/F0119.png",
		estatistica: {
			ps: 80,
			atq: 92,
			def: 65,
			atq_esp: 65,
			def_esp: 80,
			vel: 68,
		},
		descricao:
			"Na temporada de desova de outono, podem ser vistos nadando majestosamente em rios e riachos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe Dourado",
		obtencao: "Rota 23; Caverna de Cerulean; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c9/119Seaking_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Seaking_(Pok%C3%A9mon)",
	},
	{
		nome: "Staryu",
		numero: 120, // considerando a national dex
		tipo: ["Água"],
		massa: 34.5, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/ac/F0120.png",
		estatistica: {
			ps: 30,
			atq: 45,
			def: 55,
			atq_esp: 70,
			def_esp: 55,
			vel: 85,
		},
		descricao:
			"Um Pokémon enigmático que regenera sem esforço qualquer apêndice que perca em batalha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Forma Estrelada",
		obtencao: "Rotas 19, 20, e 21; e Ilhas Espuma",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/10/120Staryu_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Staryu_(Pok%C3%A9mon)",
	},
	{
		nome: "Starmie",
		numero: 121, // considerando a national dex
		tipo: ["Água", " Psíquico"],
		massa: 80.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e6/F0121.png",
		estatistica: {
			ps: 60,
			atq: 75,
			def: 85,
			atq_esp: 100,
			def_esp: 85,
			vel: 115,
		},
		descricao:
			"Seu núcleo central brilha com as sete cores do arco-íris. Algumas pessoas valorizam o núcleo como uma gema.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Misterioso",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d8/121Starmie_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Starmie_(Pok%C3%A9mon)",
	},
	{
		nome: "Mr. Mime de Kanto",
		numero: 122.1, // considerando a national dex
		tipo: ["Psíquico", " Fada"],
		massa: 54.5, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/4d/F0122.png",
		estatistica: {
			ps: 40,
			atq: 45,
			def: 65,
			atq_esp: 100,
			def_esp: 120,
			vel: 90,
		},
		descricao:
			"Caso seja interrompido enquanto faz sua mímica, dá um tapa em quem interrompeu com suas mão abertas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Barreira",
		obtencao: "Por troca na rota 2",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/10/122Mr._Mime_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mr._Mime_(Pok%C3%A9mon)",
	},
	{
		nome: "Mr. Mime de Galar",
		numero: 122.2, // considerando a national dex
		tipo: ["Gelo", " Psíquico"],
		massa: 56.8, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/4d/F0122.png",
		estatistica: {
			ps: 50,
			atq: 65,
			def: 65,
			atq_esp: 90,
			def_esp: 90,
			vel: 100,
		},
		descricao:
			"Seu talento é o sapateado. Consegue manipular temperaturas para criar um piso de gelo, que este Pokémon pode levantar para usar como barreira.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dançante",
		obtencao: "Rota 10; Lake of Outrage; e por evolução",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e0/122Mr._Mime_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mr._Mime_(Pok%C3%A9mon)",
	},
	{
		nome: "Scyther",
		numero: 123, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 56.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/49/F0123.png",
		estatistica: {
			ps: 70,
			atq: 110,
			def: 80,
			atq_esp: 55,
			def_esp: 80,
			vel: 105,
		},
		descricao:
			"Com agilidade e velocidade semelhantes a de um ninja, consegue criar a ilusão de que há mais de um.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mantídeo",
		obtencao: "Zona Safari",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1f/123Scyther_Dream_3.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Scyther_(Pok%C3%A9mon)",
	},
	{
		nome: "Jynx",
		numero: 124, // considerando a national dex
		tipo: ["Gelo", " Psíquico"],
		massa: 40.6, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/32/F0124.png",
		estatistica: {
			ps: 65,
			atq: 50,
			def: 35,
			atq_esp: 115,
			def_esp: 95,
			vel: 95,
		},
		descricao:
			"Mexe os quadris de maneira sedutora enquanto caminha. Pode fazer as pessoas dançarem em uníssono.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Forma Humana",
		obtencao: "Ilhas Espuma",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e5/124Jynx_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Jynx_(Pok%C3%A9mon)",
	},
	{
		nome: "Electabuzz",
		numero: 125, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 30.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/0d/F0125.png",
		estatistica: {
			ps: 65,
			atq: 83,
			def: 57,
			atq_esp: 95,
			def_esp: 85,
			vel: 105,
		},
		descricao:
			"Normalmente encontrado próximo a usinas de energia, podem se afastar e causar grandes apagões nas cidades.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Elétrico",
		obtencao: "Usina Elétrica Abandonada",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/bf/125Electabuzz_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Electabuzz_(Pok%C3%A9mon)",
	},
	{
		nome: "Magmar",
		numero: 126, // considerando a national dex
		tipo: ["Fogo"],
		massa: 44.5, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/76/F0126.png",
		estatistica: {
			ps: 65,
			atq: 95,
			def: 57,
			atq_esp: 100,
			def_esp: 85,
			vel: 93,
		},
		descricao:
			"Seu corpo sempre queima com um brilho laranja que o permite se esconder em meio a chamas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cospe-fogo",
		obtencao: "Mansão Pokémon",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/52/126Magmar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Magmar_(Pok%C3%A9mon)",
	},
	{
		nome: "Pinsir",
		numero: 127, // considerando a national dex
		tipo: ["Inseto"],
		massa: 55.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/62/F0127.png",
		estatistica: {
			ps: 65,
			atq: 125,
			def: 100,
			atq_esp: 55,
			def_esp: 70,
			vel: 85,
		},
		descricao:
			"Caso falhe em esmagar sua vítima com suas pinças, balança e joga a vítima com força.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lucanídeo",
		obtencao: "Zona Safari",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c5/127Pinsir_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pinsir_(Pok%C3%A9mon)",
	},
	{
		nome: "Tauros",
		numero: 128.1, // considerando a national dex
		tipo: ["Normal"],
		massa: 88.4, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d8/F0128.png",
		estatistica: {
			ps: 75,
			atq: 100,
			def: 95,
			atq_esp: 40,
			def_esp: 70,
			vel: 110,
		},
		descricao:
			"Quando mira em um inimigo, investe furiosamente enquanto chicoteia seu corpo com suas longas caudas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Touro Selvagem",
		obtencao: "Zona Safari",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/99/128Tauros_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tauros_(Pok%C3%A9mon)",
	},
	{
		nome: "Tauros (Variedade Combativa)",
		numero: 128.2, // considerando a national dex
		tipo: ["Lutador"],
		massa: 115.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d8/F0128.png",
		estatistica: {
			ps: 75,
			atq: 110,
			def: 105,
			atq_esp: 30,
			def_esp: 70,
			vel: 100,
		},
		descricao:
			"Este Pokémon possui um corpo musculoso e se desta em comate corpo a corpo. Usa seus chifres curtos para atacar os pontos fracos do oponente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Touro Selvagem",
		obtencao: "East Province: Area One, e Area Two; e West Province: Area Two",
		estagio: 1,
		geracao: 9, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6c/0128Tauros-Paldea_Combat_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tauros_(Pok%C3%A9mon)",
	},
	{
		nome: "Tauros (Variedade Ardente)",
		numero: 128.3, // considerando a national dex
		tipo: ["Lutador", " Fogo"],
		massa: 85.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d8/F0128.png",
		estatistica: {
			ps: 75,
			atq: 110,
			def: 105,
			atq_esp: 30,
			def_esp: 70,
			vel: 100,
		},
		descricao:
			"Quando está aquecido pela energia do fogo, seus chifres podem chegar a mais de 1'000° Celsius. Aqueles que forem chifrados por eles sofrerão ferimentos e queimaduras.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Touro Selvagem",
		obtencao: "East Province: Area Two; e West Province: Area Two",
		estagio: 1,
		geracao: 9, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/cd/0128Tauros-Paldea_Blaze_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tauros_(Pok%C3%A9mon)",
	},
	{
		nome: "Tauros (Variedade Aquática)",
		numero: 128.4, // considerando a national dex
		tipo: ["Lutador", " Água"],
		massa: 110.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d8/F0128.png",
		estatistica: {
			ps: 75,
			atq: 110,
			def: 105,
			atq_esp: 30,
			def_esp: 70,
			vel: 100,
		},
		descricao:
			"Este Pokémon lança água de buracos nas pontas de seus chifres, os jatos de alta pressão perfuram seus inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Touro Selvagem",
		obtencao:
			"East Province: Area Two; West Province: Area Two; e Union Circle",
		estagio: 1,
		geracao: 9, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2c/0128Tauros-Paldea_Aqua_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tauros_(Pok%C3%A9mon)",
	},
	{
		nome: "Magikarp",
		numero: 129, // considerando a national dex
		tipo: ["Água"],
		massa: 10.0, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/32/F0129.png",
		estatistica: {
			ps: 20,
			atq: 10,
			def: 55,
			atq_esp: 15,
			def_esp: 20,
			vel: 80,
		},
		descricao:
			"Em um passado distante, de alguma maneira já foi mais forte que seus descendentes terrivelmente fracos que existem hoje.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe",
		obtencao:
			"Rotas 6, 10, 11, e outras; Zona Safari; Ilhas Espuma; Caverna de Cerulean; e Planalto Índigo",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f7/129Magikarp_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Magikarp_(Pok%C3%A9mon)",
	},
	{
		nome: "Gyarados",
		numero: 130, // considerando a national dex
		tipo: ["Água", " Voador"],
		massa: 235.0, // em kg
		altura: 6.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a4/F0130.png",
		estatistica: {
			ps: 95,
			atq: 125,
			def: 79,
			atq_esp: 60,
			def_esp: 100,
			vel: 81,
		},
		descricao:
			"Raramente visto na natureza. Enorme e cruel, é capaz de destruir cidades inteiras em um ataque de raiva.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Atrocidade",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2a/130Gyarados_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gyarados_(Pok%C3%A9mon)",
	},
	{
		nome: "Lapras",
		numero: 131, // considerando a national dex
		tipo: ["Água", " Gelo"],
		massa: 220.0, // em kg
		altura: 2.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/30/F0131.png",
		estatistica: {
			ps: 130,
			atq: 85,
			def: 80,
			atq_esp: 85,
			def_esp: 95,
			vel: 60,
		},
		descricao:
			"Um Pokémon que tem sido caçado até a quase extinção. Consegue transportar pessoas através de água.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Transporte",
		obtencao: "Recebido na Companhia Silph",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/74/131Lapras_Dream_6.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lapras_(Pok%C3%A9mon)",
	},
	{
		nome: "Ditto",
		numero: 132, // considerando a national dex
		tipo: ["Normal"],
		massa: 4.0, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/ff/F0132.png",
		estatistica: {
			ps: 48,
			atq: 48,
			def: 48,
			atq_esp: 48,
			def_esp: 48,
			vel: 48,
		},
		descricao:
			"Capaz de copiar o código genético do oponente para instantaneamente si transformar em uma duplicada do oponente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Transformação",
		obtencao:
			"Rotas 13, 14, 15, e outra; Túnel de Rocha; Mansão Pokémon; e Caverna de Cerulean",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d1/132Ditto_Dream_6.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ditto_(Pok%C3%A9mon)",
	},
	{
		nome: "Eevee",
		numero: 133, // considerando a national dex
		tipo: ["Normal"],
		massa: 6.5, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/ac/F0133.png",
		estatistica: {
			ps: 55,
			atq: 55,
			def: 50,
			atq_esp: 45,
			def_esp: 65,
			vel: 55,
		},
		descricao:
			"Seu código genético é irregular. Pode sofrer mutação caso seja exposto a radiação de Pedras elementais.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Evolução",
		obtencao: "Recebido na Mansão Celadon",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b0/133Eevee_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Eevee_(Pok%C3%A9mon)",
	},
	{
		nome: "Vaporeon",
		numero: 134, // considerando a national dex
		tipo: ["Água"],
		massa: 29.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/72/F0134.png",
		estatistica: {
			ps: 130,
			atq: 65,
			def: 60,
			atq_esp: 110,
			def_esp: 95,
			vel: 65,
		},
		descricao:
			"Vive próximo a água. Sua longa cauda é estriada com uma barbatana que muitas vezes confundida com a de uma sereia.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Jato de Bolha",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/93/134Vaporeon_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vaporeon_(Pok%C3%A9mon)",
	},
	{
		nome: "Jolteon",
		numero: 135, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 24.5, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/ab/F0135.png",
		estatistica: {
			ps: 65,
			atq: 65,
			def: 60,
			atq_esp: 110,
			def_esp: 95,
			vel: 130,
		},
		descricao:
			"Acumula íons negativos na atmosfera para lançar raios de 10'000 volts.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raios",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/67/135Jolteon_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Jolteon_(Pok%C3%A9mon)",
	},
	{
		nome: "Flareon",
		numero: 136, // considerando a national dex
		tipo: ["Fogo"],
		massa: 25.0, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5b/F0136.png",
		estatistica: {
			ps: 65,
			atq: 130,
			def: 60,
			atq_esp: 95,
			def_esp: 110,
			vel: 65,
		},
		descricao:
			"Quando armazena energia térmica em seu corpo, sua temperatura poderia superar os 900° Celsius.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ee/136Flareon_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Flareon_(Pok%C3%A9mon)",
	},
	{
		nome: "Porygon",
		numero: 137, // considerando a national dex
		tipo: ["Normal"],
		massa: 36.5, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d4/F0137.png",
		estatistica: {
			ps: 65,
			atq: 60,
			def: 70,
			atq_esp: 85,
			def_esp: 75,
			vel: 40,
		},
		descricao:
			"Um Pokémon que consiste inteiramente de código de programação. Capaz de se mover livremente no espaço cibernético.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Virtual",
		obtencao: "Casino Rocket",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/60/137Porygon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Porygon_(Pok%C3%A9mon)",
	},
	{
		nome: "Omanyte",
		numero: 138, // considerando a national dex
		tipo: ["Rocha", " Água"],
		massa: 7.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fd/F0138.png",
		estatistica: {
			ps: 35,
			atq: 40,
			def: 100,
			atq_esp: 90,
			def_esp: 55,
			vel: 35,
		},
		descricao:
			"Mesmo há muito extinto, em casos raros, pode ser ressuscitado a partir de fósseis.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espiral",
		obtencao: "Revivido a partir de fóssil",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/95/138Omanyte_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Omanyte_(Pok%C3%A9mon)",
	},
	{
		nome: "Omastar",
		numero: 139, // considerando a national dex
		tipo: ["Rocha", " Água"],
		massa: 35.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/3b/F0139.png",
		estatistica: {
			ps: 70,
			atq: 60,
			def: 125,
			atq_esp: 115,
			def_esp: 70,
			vel: 55,
		},
		descricao:
			"Um Pokémon pré-histórico que morreu quando sua pesada carapaça tornou impossível de caçar suas presas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espiral",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/37/139Omastar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Omastar_(Pok%C3%A9mon)",
	},
	{
		nome: "Kabuto",
		numero: 140, // considerando a national dex
		tipo: ["Rocha", " Água"],
		massa: 11.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/21/F0140.png",
		estatistica: {
			ps: 30,
			atq: 80,
			def: 90,
			atq_esp: 55,
			def_esp: 45,
			vel: 55,
		},
		descricao:
			"Um Pokémon que foi ressuscitado a partir de um fóssil encontrado no que já foi o fundo do oceano, eras atrás.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Marisco",
		obtencao: "Revivido a partir de fóssil",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/88/140Kabuto_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kabuto_(Pok%C3%A9mon)",
	},
	{
		nome: "Kabutops",
		numero: 141, // considerando a national dex
		tipo: ["Rocha", " Água"],
		massa: 40.5, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d6/F0141.png",
		estatistica: {
			ps: 60,
			atq: 115,
			def: 105,
			atq_esp: 65,
			def_esp: 70,
			vel: 80,
		},
		descricao:
			"Seu formato peculiar é perfeito para nadar. Fatia sua presa com suas garras e drena os fluidos corporais.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Marisco",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/83/141Kabutops_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kabutops_(Pok%C3%A9mon)",
	},
	{
		nome: "Aerodactyl",
		numero: 142, // considerando a national dex
		tipo: ["Rocha", " Voador"],
		massa: 59.0, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/02/F0142.png",
		estatistica: {
			ps: 80,
			atq: 105,
			def: 65,
			atq_esp: 60,
			def_esp: 75,
			vel: 130,
		},
		descricao:
			"Um Pokémon pré-histórico feroz que morreu em tempos antigos. Foi ressuscitado usando DNA pego de âmbar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fóssil",
		obtencao: "Revivido a partir do Âmbar Antigo",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c6/142Aerodactyl_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Aerodactyl_(Pok%C3%A9mon)",
	},
	{
		nome: "Snorlax",
		numero: 143, // considerando a national dex
		tipo: ["Normal"],
		massa: 460.0, // em kg
		altura: 2.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/7e/F0143.png",
		estatistica: {
			ps: 160,
			atq: 110,
			def: 65,
			atq_esp: 65,
			def_esp: 110,
			vel: 30,
		},
		descricao:
			"Muito preguiçoso. Só come e dorme. À medida que seu corpo redondo aumenta, se torna cada vez mais preguiçoso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dorminhoco",
		obtencao: "Rotas 12, e 16",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/20/143Snorlax_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)",
	},
	{
		nome: "Articuno de Kanto",
		numero: 144.1, // considerando a national dex
		tipo: ["Gelo", " Voador"],
		massa: 55.4, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fa/F0144.png",
		estatistica: {
			ps: 90,
			atq: 85,
			def: 100,
			atq_esp: 95,
			def_esp: 125,
			vel: 85,
		},
		descricao:
			"Um pássaro lendário que supostamente aparece a pessoas condenadas que estão perdidas em montanhas geladas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Congelamento",
		obtencao: "Ilhas Espuma",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/46/144Articuno_Dream_3.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Articuno_(Pok%C3%A9mon)",
	},
	{
		nome: "Articuno de Galar",
		numero: 144.2, // considerando a national dex
		tipo: ["Psíquico", " Voador"],
		massa: 50.9, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fa/F0144.png",
		estatistica: {
			ps: 90,
			atq: 85,
			def: 85,
			atq_esp: 125,
			def_esp: 100,
			vel: 95,
		},
		descricao:
			"Suas lâminas semelhantes a penas são compostas de energia psíquica e podem cortar grossas folhas de ferro como se fossem papel.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cruel",
		obtencao: "Vagando por Crown Tundra",
		estagio: 1,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/93/144Articuno_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Articuno_(Pok%C3%A9mon)",
	},
	{
		nome: "Zapdos de Kanto",
		numero: 145.1, // considerando a national dex
		tipo: ["Elétrico", " Voador"],
		massa: 52.6, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/36/F0145.png",
		estatistica: {
			ps: 90,
			atq: 90,
			def: 85,
			atq_esp: 125,
			def_esp: 90,
			vel: 100,
		},
		descricao:
			"Um pássaro lendário que supostamente surge das nuvens enquanto solta raios enormes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Elétrico",
		obtencao: "Usina Elétrica Abandonada",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/65/145Zapdos_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zapdos_(Pok%C3%A9mon)",
	},
	{
		nome: "Zapdos de Galar",
		numero: 145.2, // considerando a national dex
		tipo: ["Lutador", " Voador"],
		massa: 58.2, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/36/F0145.png",
		estatistica: {
			ps: 90,
			atq: 125,
			def: 90,
			atq_esp: 85,
			def_esp: 90,
			vel: 100,
		},
		descricao:
			"Um chute de suas pernas poderosas pulveriza um caminhão de lixo. Supostamente, corre pelas montanhas a mais de 300 km/h.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pernas Fortes",
		obtencao: "Vagando por Wild Area",
		estagio: 1,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/96/145Zapdos_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zapdos_(Pok%C3%A9mon)",
	},
	{
		nome: "Moltres de Kanto",
		numero: 146.1, // considerando a national dex
		tipo: ["Fogo", " Voador"],
		massa: 60.0, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d3/F0146.png",
		estatistica: {
			ps: 90,
			atq: 100,
			def: 90,
			atq_esp: 125,
			def_esp: 85,
			vel: 90,
		},
		descricao:
			"Conhecido como o pássaro lendário de fogo. Cada bater de suas asas cria um deslumbrante clarão de chamas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		obtencao: "Estrada da Vitória",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/10/146Moltres_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Moltres_(Pok%C3%A9mon)",
	},
	{
		nome: "Moltres de Galar",
		numero: 146.2, // considerando a national dex
		tipo: ["Noturno", " Voador"],
		massa: 66.0, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d3/F0146.png",
		estatistica: {
			ps: 90,
			atq: 85,
			def: 90,
			atq_esp: 100,
			def_esp: 125,
			vel: 90,
		},
		descricao:
			"A aura sinistra e flamejante deste Pokémon consumirá o espírito de qualquer criatura que atingir. As vítimas se tornam sombras queimadas de si mesmas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Malevolente",
		obtencao: "Vagando por Isle of Armor",
		estagio: 1,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/88/146Moltres_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Moltres_(Pok%C3%A9mon)",
	},
	{
		nome: "Dratini",
		numero: 147, // considerando a national dex
		tipo: ["Dragão"],
		massa: 3.3, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/bb/F0147.png",
		estatistica: {
			ps: 41,
			atq: 64,
			def: 45,
			atq_esp: 50,
			def_esp: 50,
			vel: 50,
		},
		descricao:
			"Há muito considerado um Pokémon mítico até que, recentemente, foi descoberta uma colônia vivendo debaixo da água.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		obtencao: "Zona Safari",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/67/147Dratini_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dratini_(Pok%C3%A9mon)",
	},
	{
		nome: "Dragonair",
		numero: 148, // considerando a national dex
		tipo: ["Dragão"],
		massa: 16.5, // em kg
		altura: 4.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9a/F0148.png",
		estatistica: {
			ps: 61,
			atq: 84,
			def: 65,
			atq_esp: 70,
			def_esp: 70,
			vel: 70,
		},
		descricao:
			"Um Pokémon místico que exala uma aura gentil. Possui a habilidade de mudar condições climáticas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		obtencao: "Zona Safari; e por evolução",
		estagio: 2,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/07/148Dragonair_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)",
	},
	{
		nome: "Dragonite",
		numero: 149, // considerando a national dex
		tipo: ["Dragão", " Voador"],
		massa: 210.0, // em kg
		altura: 2.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/68/F0149.png",
		estatistica: {
			ps: 91,
			atq: 134,
			def: 95,
			atq_esp: 100,
			def_esp: 100,
			vel: 80,
		},
		descricao:
			"Um Pokémon marinho raramente visto. É dito que sua inteligência é comparada a de seres humanos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0c/149Dragonite_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dragonite_(Pok%C3%A9mon)",
	},
	{
		nome: "Mewtwo",
		numero: 150, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 122.0, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/2f/F0150.png",
		estatistica: {
			ps: 106,
			atq: 110,
			def: 90,
			atq_esp: 154,
			def_esp: 90,
			vel: 130,
		},
		descricao:
			"Foi criado por um cientista depois anos de experimentos de engenharia genética.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Genético",
		obtencao: "Caverna de Cerulean",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/49/150Mewtwo_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mewtwo_(Pok%C3%A9mon)",
	},
	{
		nome: "Mew",
		numero: 151, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 4.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/ad/F0151.png",
		estatistica: {
			ps: 100,
			atq: 100,
			def: 100,
			atq_esp: 100,
			def_esp: 100,
			vel: 100,
		},
		descricao:
			"É tão raro que ainda é dito ser uma miragem por vários especialistas. Somente algumas pessoas o viram ao redor do mundo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Nova Espécie",
		obtencao: "Por evento",
		estagio: 1,
		geracao: 1, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/60/151Mew_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)",
	},
	{
		nome: "Chikorita",
		numero: 152, // considerando a national dex
		tipo: ["Planta"],
		massa: 6.4, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/bf/F0152.png",
		estatistica: {
			ps: 45,
			atq: 49,
			def: 65,
			atq_esp: 49,
			def_esp: 65,
			vel: 45,
		},
		descricao:
			"Adora aproveitar a luz do sol. Usa a folha na cabeça para procurar lugares quentes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Folha",
		obtencao: "Laboratório do Prof. Elm",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/52/152Chikorita_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Chikorita_(Pok%C3%A9mon)",
	},
	{
		nome: "Bayleef",
		numero: 153, // considerando a national dex
		tipo: ["Planta"],
		massa: 15.8, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5c/F0153.png",
		estatistica: {
			ps: 60,
			atq: 62,
			def: 80,
			atq_esp: 63,
			def_esp: 80,
			vel: 60,
		},
		descricao:
			"Um aroma picante emana de seu pescoço. O aroma age como um estimulante para restaurar saúde.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Folha",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/82/153Bayleef_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bayleef_(Pok%C3%A9mon)",
	},
	{
		nome: "Meganium",
		numero: 154, // considerando a national dex
		tipo: ["Planta"],
		massa: 100.5, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/37/F0154.png",
		estatistica: {
			ps: 80,
			atq: 82,
			def: 100,
			atq_esp: 83,
			def_esp: 100,
			vel: 80,
		},
		descricao:
			"O aroma que sobe de suas pétalas contém uma substância que acalma sentimentos agressivos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Erva",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e8/154Meganium_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Meganium_(Pok%C3%A9mon)",
	},
	{
		nome: "Cyndaquil",
		numero: 155, // considerando a national dex
		tipo: ["Fogo"],
		massa: 7.9, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f3/F0155.png",
		estatistica: {
			ps: 39,
			atq: 52,
			def: 43,
			atq_esp: 60,
			def_esp: 50,
			vel: 65,
		},
		descricao:
			"Geralmente fica curvado. Quando está com raiva ou surpreso, atira chamas de suas costas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato de Fogo",
		obtencao: "Laboratório do Prof. Elm",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f0/155Cyndaquil_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cyndaquil_(Pok%C3%A9mon)",
	},
	{
		nome: "Quilava",
		numero: 156, // considerando a national dex
		tipo: ["Fogo"],
		massa: 19.0, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/88/F0156.png",
		estatistica: {
			ps: 58,
			atq: 64,
			def: 58,
			atq_esp: 80,
			def_esp: 65,
			vel: 80,
		},
		descricao:
			"É coberto totalmente por pelo não inflamável. Consegue aguentar qualquer tipo de ataque de fogo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vulcão",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/31/156Quilava_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Quilava_(Pok%C3%A9mon)",
	},
	{
		nome: "Typhlosion de Johto",
		numero: 157.1, // considerando a national dex
		tipo: ["Fogo"],
		massa: 79.5, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/19/F0157.png",
		estatistica: {
			ps: 78,
			atq: 84,
			def: 78,
			atq_esp: 109,
			def_esp: 85,
			vel: 100,
		},
		descricao:
			"Quando sua raiva atinge seu ápice, fica tão quente que qualquer coisa que toque imediatamente pega fogo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vulcão",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/65/157Typhlosion_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Typhlosion_(Pok%C3%A9mon)",
	},
	{
		nome: "Typhlosion de Hisui",
		numero: 157.2, // considerando a national dex
		tipo: ["Fogo", " Fantasma"],
		massa: 69.8, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/19/F0157.png",
		estatistica: {
			ps: 73,
			atq: 84,
			def: 78,
			atq_esp: 119,
			def_esp: 85,
			vel: 95,
		},
		descricao:
			"Dizem que purifica almas perdidas e abandonadas com suas chamas e as guias para a vida após a morte. Acredito que sua forma foi influenciada pela energia da montanha sagrada que se eleva no centro da região.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fogo Fantasma",
		obtencao: "Crimson Mirelands: Space-time distortions; e por evolução",
		estagio: 3,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a2/157Typhlosion-Hisui_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Typhlosion_(Pok%C3%A9mon)",
	},
	{
		nome: "Totodile",
		numero: 158, // considerando a national dex
		tipo: ["Água"],
		massa: 9.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f5/F0158.png",
		estatistica: {
			ps: 50,
			atq: 65,
			def: 64,
			atq_esp: 44,
			def_esp: 48,
			vel: 43,
		},
		descricao:
			"Suas presas bem desenvolvidas são poderosas e capazes de esmagar qualquer coisa. Mesmo seu treinador deve ter cuidado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Presa Grande",
		obtencao: "Laboratório do Prof. Elm",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/47/158Totodile_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Totodile_(Pok%C3%A9mon)",
	},
	{
		nome: "Croconaw",
		numero: 159, // considerando a national dex
		tipo: ["Água"],
		massa: 25.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a6/F0160.png",
		estatistica: {
			ps: 65,
			atq: 80,
			def: 80,
			atq_esp: 59,
			def_esp: 63,
			vel: 58,
		},
		descricao:
			"Quando perde uma presa, uma nova cresce em seu lugar. Sempre há 48 presas revestindo na boca.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Presa Grande",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/22/159Croconaw_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Croconaw_(Pok%C3%A9mon)",
	},
	{
		nome: "Feraligatr",
		numero: 160, // considerando a national dex
		tipo: ["Água"],
		massa: 88.8, // em kg
		altura: 2.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a6/F0160.png",
		estatistica: {
			ps: 85,
			atq: 105,
			def: 100,
			atq_esp: 79,
			def_esp: 83,
			vel: 78,
		},
		descricao:
			"Quando morde com suas mandíbulas grandes e poderosas, balança sua cabeça e estraçalha sua vítima com selvageria.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Presa Grande",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/63/160Feraligatr_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Feraligatr_(Pok%C3%A9mon)",
	},
	{
		nome: "Sentret",
		numero: 161, // considerando a national dex
		tipo: ["Normal"],
		massa: 6.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c8/F0161.png",
		estatistica: {
			ps: 35,
			atq: 46,
			def: 34,
			atq_esp: 35,
			def_esp: 45,
			vel: 20,
		},
		descricao:
			"Um Pokémon muito precavido, se levanta usando sua cauda para conseguir uma melhor visão de seus arredores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escoteiro",
		obtencao: "Rotas 1, 29, e 43",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/55/161Sentret_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sentret_(Pok%C3%A9mon)",
	},
	{
		nome: "Furret",
		numero: 162, // considerando a national dex
		tipo: ["Normal"],
		massa: 32.5, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d5/F0162.png",
		estatistica: {
			ps: 85,
			atq: 76,
			def: 64,
			atq_esp: 45,
			def_esp: 55,
			vel: 90,
		},
		descricao:
			"Constrói um ninho para caber seu corpo longo e esguio. O ninho é impossível de se entrar para outros Pokémon entrarem.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Corpo-longo",
		obtencao: "Rotas 1, e 43; e por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/de/162Furret_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Furret_(Pok%C3%A9mon)",
	},
	{
		nome: "Hoothoot",
		numero: 163, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 21.2, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d7/F0163.png",
		estatistica: {
			ps: 60,
			atq: 30,
			def: 30,
			atq_esp: 36,
			def_esp: 56,
			vel: 50,
		},
		descricao:
			"Sempre fica em um pé só. Muda de pé tão rápido, o movimento raramente é visto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coruja",
		obtencao:
			"Rotas 1, 2, 5, e outras; Floresta de Ilex; Parque National; e Lago da Fúria",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/56/163Hoothoot_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hoothoot_(Pok%C3%A9mon)",
	},
	{
		nome: "Noctowl",
		numero: 164, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 40.8, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/6e/F0164.png",
		estatistica: {
			ps: 100,
			atq: 50,
			def: 50,
			atq_esp: 76,
			def_esp: 96,
			vel: 70,
		},
		descricao:
			"Seus olhos são especialmente adaptados. Concentram mesmo até mesmo a luz fraca e permitem que veja no escuro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coruja",
		obtencao: "Rotas 2, 8, 13, e outras; Floresta de Ilex; e por Evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/da/164Noctowl_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Noctowl_(Pok%C3%A9mon)",
	},
	{
		nome: "Ledyba",
		numero: 165, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 10.8, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/2b/F0165.png",
		estatistica: {
			ps: 40,
			atq: 20,
			def: 30,
			atq_esp: 40,
			def_esp: 80,
			vel: 55,
		},
		descricao:
			"É muito tímido. Tem medo de se mover caso esteja sozinho. Mas será ativo caso esteja em grupo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cinco Estrelas",
		obtencao: "Rotas 2, 29, 30, e outras; e Parque National",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e6/165Ledyba_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ledyba_(Pok%C3%A9mon)",
	},
	{
		nome: "Ledian",
		numero: 166, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 35.6, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/ec/F0166.png",
		estatistica: {
			ps: 55,
			atq: 35,
			def: 50,
			atq_esp: 55,
			def_esp: 110,
			vel: 85,
		},
		descricao:
			"Quando as estrelas piscam no céu noturno, esvoaça e espalha um pó brilhante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cinco Estrelas",
		obtencao: "Rotas 2, e 37; e por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/ad/166Ledian_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ledian_(Pok%C3%A9mon)",
	},
	{
		nome: "Spinarak",
		numero: 167, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 8.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/40/F0167.png",
		estatistica: {
			ps: 40,
			atq: 60,
			def: 40,
			atq_esp: 40,
			def_esp: 40,
			vel: 30,
		},
		descricao:
			"Permanece parado na mesma pose por dias em sua teia, esperando que sua presa desavisada se aproxime.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fio de Saliva",
		obtencao: "Rotas 2, 29, 30, e outras; e Parque National",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ed/167Spinarak_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Spinarak_(Pok%C3%A9mon)",
	},
	{
		nome: "Ariados",
		numero: 168, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 33.5, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e2/F0168.png",
		estatistica: {
			ps: 70,
			atq: 90,
			def: 70,
			atq_esp: 60,
			def_esp: 60,
			vel: 40,
		},
		descricao:
			"Tece seus fios não apenas por trás, mas também pela boca. É difícil dizer qual parte é qual.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Perna-longa",
		obtencao: "Rotas 2, e 37; e por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/db/168Ariados_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ariados_(Pok%C3%A9mon)",
	},
	{
		nome: "Crobat",
		numero: 169, // considerando a national dex
		tipo: ["Veneno", " Voador"],
		massa: 75.0, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/58/F0169.png",
		estatistica: {
			ps: 85,
			atq: 90,
			def: 80,
			atq_esp: 70,
			def_esp: 80,
			vel: 130,
		},
		descricao:
			"Seu vôo na escuridão é tão silencioso que pode não ser notado mesmo quando está próximo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Morcego",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/86/169Crobat_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Crobat_(Pok%C3%A9mon)",
	},
	{
		nome: "Chinchou",
		numero: 170, // considerando a national dex
		tipo: ["Água", " Elétrico"],
		massa: 12.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/3e/F0170.png",
		estatistica: {
			ps: 75,
			atq: 38,
			def: 38,
			atq_esp: 56,
			def_esp: 56,
			vel: 67,
		},
		descricao:
			"Na escuridão do chão oceânico, sua única maneira de comunicação é piscar suas luzes constantemente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pescador",
		obtencao: "Rotas 20, 21, 26, e outras",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e1/170Chinchou_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Chinchou_(Pok%C3%A9mon)",
	},
	{
		nome: "Lanturn",
		numero: 171, // considerando a national dex
		tipo: ["Água", " Elétrico"],
		massa: 22.5, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b0/F0171.png",
		estatistica: {
			ps: 125,
			atq: 58,
			def: 58,
			atq_esp: 76,
			def_esp: 76,
			vel: 67,
		},
		descricao:
			"A luz que emite é tão brilhante que consegue iluminar a superfície do mar de uma profundidade maior que cinco quilômetros.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Luz",
		obtencao: "Rotas 20, 21, 26, e outras; e por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0b/171Lanturn_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lanturn_(Pok%C3%A9mon)",
	},
	{
		nome: "Pichu",
		numero: 172, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 2.0, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fe/F0172.png",
		estatistica: {
			ps: 20,
			atq: 40,
			def: 15,
			atq_esp: 35,
			def_esp: 35,
			vel: 60,
		},
		descricao:
			"Ainda não é capaz de armazenar eletricidade. Consegue soltar uma faísca se for assustado ou divertido.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ratinho",
		obtencao: "Por ovo",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/79/172Pichu_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pichu_(Pok%C3%A9mon)",
	},
	{
		nome: "Cleffa",
		numero: 173, // considerando a national dex
		tipo: ["Fada"],
		massa: 3.0, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/15/F0173.png",
		estatistica: {
			ps: 50,
			atq: 25,
			def: 28,
			atq_esp: 45,
			def_esp: 55,
			vel: 15,
		},
		descricao:
			"Por sua silhueta incomum, semelhante a uma estrela, pessoas acreditam que veio de um meteoro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Forma Estrelada",
		obtencao: "Por ovo",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/91/173Cleffa_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cleffa_(Pok%C3%A9mon)",
	},
	{
		nome: "Igglybuff",
		numero: 174, // considerando a national dex
		tipo: ["Normal", " Fada"],
		massa: 1.0, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/46/F0174.png",
		estatistica: {
			ps: 90,
			atq: 30,
			def: 15,
			atq_esp: 40,
			def_esp: 20,
			vel: 15,
		},
		descricao:
			"Tem um corpo muito macio. Quando começa a rolar, irá saltar por toda parte e será impossível parar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Balão",
		obtencao: "Por ovo",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/df/174Igglybuff_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Igglybuff_(Pok%C3%A9mon)",
	},
	{
		nome: "Togepi",
		numero: 175, // considerando a national dex
		tipo: ["Fada"],
		massa: 1.5, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b1/F0175.png",
		estatistica: {
			ps: 35,
			atq: 20,
			def: 65,
			atq_esp: 40,
			def_esp: 65,
			vel: 20,
		},
		descricao:
			"A casca aparenta estar cheia de alegria. É dito que compartilhará boa sorte quando tratado com gentileza.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bola de Espinhos",
		obtencao: "Por ovo",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/87/175Togepi_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Togepi_(Pok%C3%A9mon)",
	},
	{
		nome: "Togetic",
		numero: 176, // considerando a national dex
		tipo: ["Fada", " Voador"],
		massa: 3.2, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b3/F0176.png",
		estatistica: {
			ps: 55,
			atq: 40,
			def: 85,
			atq_esp: 80,
			def_esp: 105,
			vel: 40,
		},
		descricao:
			"É dito que aparece diante de pessoas carinhosas, de bom coração e as cobrirá de felicidade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Felicidade",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f8/176Togetic_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Togetic_(Pok%C3%A9mon)",
	},
	{
		nome: "Natu",
		numero: 177, // considerando a national dex
		tipo: ["Psíquico", " Voador"],
		massa: 2.0, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/57/F0177.png",
		estatistica: {
			ps: 40,
			atq: 50,
			def: 45,
			atq_esp: 70,
			def_esp: 45,
			vel: 70,
		},
		descricao:
			"Por suas asas não estarem completamente crescidas, tem que pular para se locomover. Sempre está encarando algo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Passarinho",
		obtencao: "Ruínas de Alfa",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7e/177Natu_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Natu_(Pok%C3%A9mon)",
	},
	{
		nome: "Xatu",
		numero: 178, // considerando a national dex
		tipo: ["Psíquico", " Voador"],
		massa: 15.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/24/F0178.png",
		estatistica: {
			ps: 65,
			atq: 75,
			def: 70,
			atq_esp: 95,
			def_esp: 70,
			vel: 95,
		},
		descricao:
			"É dito que permanece parado e quieto por ver o passado e o futuro ao mesmo tempo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Místico",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c8/178Xatu_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Xatu_(Pok%C3%A9mon)",
	},
	{
		nome: "Mareep",
		numero: 179, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 7.8, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/1f/F0179.png",
		estatistica: {
			ps: 55,
			atq: 40,
			def: 40,
			atq_esp: 65,
			def_esp: 45,
			vel: 35,
		},
		descricao:
			"Caso a eletricidade estática acumule em seu corpo, seu velo dobra de volume. Tocá-lo causa um choque elétrico em quem tocou.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lã",
		obtencao: "Rotas 32, 42, e 43",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5f/179Mareep_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mareep_(Pok%C3%A9mon)",
	},
	{
		nome: "Flaaffy",
		numero: 180, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 13.3, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/96/F0180.png",
		estatistica: {
			ps: 70,
			atq: 55,
			def: 55,
			atq_esp: 80,
			def_esp: 60,
			vel: 45,
		},
		descricao:
			"Como resultado de armazenar muita eletricidade, desenvolveu manchas onde nem mesmo a lã felpuda cresce.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lã",
		obtencao: "Rotas 42, e 43; e por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1e/180Flaaffy_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Flaaffy_(Pok%C3%A9mon)",
	},
	{
		nome: "Ampharos",
		numero: 181, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 61.5, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/00/F0181.png",
		estatistica: {
			ps: 90,
			atq: 75,
			def: 75,
			atq_esp: 115,
			def_esp: 90,
			vel: 55,
		},
		descricao:
			"A ponta de sua cauda brilha intensamente e pode ser ser vista de longe. Atua como um farol para pessoas perdidas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Luz",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/61/181Ampharos_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ampharos_(Pok%C3%A9mon)",
	},
	{
		nome: "Bellossom",
		numero: 182, // considerando a national dex
		tipo: ["Planta"],
		massa: 5.8, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5b/F0182.png",
		estatistica: {
			ps: 75,
			atq: 80,
			def: 85,
			atq_esp: 90,
			def_esp: 100,
			vel: 50,
		},
		descricao:
			"Abundante nos trópicos. Quando dança, suas pétalas se esfregam e emitem um som agradável de toque.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Flor",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/ba/182Bellossom_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bellossom_(Pok%C3%A9mon)",
	},
	{
		nome: "Marill",
		numero: 183, // considerando a national dex
		tipo: ["Água", " Fada"],
		massa: 8.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/83/F0183.png",
		estatistica: {
			ps: 70,
			atq: 20,
			def: 50,
			atq_esp: 20,
			def_esp: 50,
			vel: 40,
		},
		descricao:
			"A ponta de sua cauda, que contém óleo mais leve que água, o permite nadar sem se afogar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato de Água",
		obtencao: "Rota 42; e Monte Mortar",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/dd/183Marill_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Marill_(Pok%C3%A9mon)",
	},
	{
		nome: "Azumarill",
		numero: 184, // considerando a national dex
		tipo: ["Água", " Fada"],
		massa: 28.5, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8e/F0184.png",
		estatistica: {
			ps: 100,
			atq: 50,
			def: 80,
			atq_esp: 50,
			def_esp: 80,
			vel: 50,
		},
		descricao:
			"Quando está quieto e ouvindo atentamente, consegue dizer o que está em rios turbulentos e rápidos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coelho de Água",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5d/184Azumarill_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Azumarill_(Pok%C3%A9mon)",
	},
	{
		nome: "Sudowoodo",
		numero: 185, // considerando a national dex
		tipo: ["Rocha"],
		massa: 38.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a0/F0185.png",
		estatistica: {
			ps: 70,
			atq: 100,
			def: 115,
			atq_esp: 30,
			def_esp: 65,
			vel: 30,
		},
		descricao:
			"Apesar de sempre fingir ser uma árvore, sua composição aparenta se aproximar mais a de uma rocha do que a de uma árvore.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Imitação",
		obtencao: "Rota 36",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0d/185Sudowoodo_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sudowoodo_(Pok%C3%A9mon)",
	},
	{
		nome: "Politoed",
		numero: 186, // considerando a national dex
		tipo: ["Água"],
		massa: 33.9, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9e/F0186.png",
		estatistica: {
			ps: 90,
			atq: 75,
			def: 75,
			atq_esp: 90,
			def_esp: 100,
			vel: 70,
		},
		descricao:
			"Sempre que três ou mais deles se reúnem, cantam em alto volume e acaba soando como um grito.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sapo",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3f/186Politoed_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Politoed_(Pok%C3%A9mon)",
	},
	{
		nome: "Hoppip",
		numero: 187, // considerando a national dex
		tipo: ["Planta", " Voador"],
		massa: 0.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/ec/F0187.png",
		estatistica: {
			ps: 35,
			atq: 35,
			def: 40,
			atq_esp: 35,
			def_esp: 55,
			vel: 50,
		},
		descricao:
			"Para evitar que seja levado pelo vento, se reúne em grupos. Gostam de brizas leves, no entanto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Algodão",
		obtencao: "Rotas 11, 13, 14, e outras",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f4/187Hoppip_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hoppip_(Pok%C3%A9mon)",
	},
	{
		nome: "Skiploom",
		numero: 188, // considerando a national dex
		tipo: ["Planta", " Voador"],
		massa: 1.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/77/F0188.png",
		estatistica: {
			ps: 55,
			atq: 45,
			def: 50,
			atq_esp: 45,
			def_esp: 65,
			vel: 80,
		},
		descricao:
			"A flor no topo de sua cabeça abre e fecha à medida que a temperatura aumenta ou diminui.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Algodão",
		obtencao: "Rota 14; e por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d4/188Skiploom_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Skiploom_(Pok%C3%A9mon)",
	},
	{
		nome: "Jumpluff",
		numero: 189, // considerando a national dex
		tipo: ["Planta", " Voador"],
		massa: 3.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/6f/F0189.png",
		estatistica: {
			ps: 75,
			atq: 55,
			def: 70,
			atq_esp: 55,
			def_esp: 85,
			vel: 110,
		},
		descricao:
			"Uma vez que pega o vento, habilmente controla seus esporos de algodão para flutuar, mesmo ao redor do mundo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Algodão",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/95/189Jumpluff_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Jumpluff_(Pok%C3%A9mon)",
	},
	{
		nome: "Aipom",
		numero: 190, // considerando a national dex
		tipo: ["Normal"],
		massa: 11.5, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/ba/F0190.png",
		estatistica: {
			ps: 55,
			atq: 70,
			def: 55,
			atq_esp: 40,
			def_esp: 55,
			vel: 85,
		},
		descricao:
			"Sua cauda é tão poderosa que consegue usá-la para agarrar um galho de árvore e se manter no ar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cauda Longa",
		obtencao: "Rotas 29, 30, 31, e outras",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/ca/190Aipom_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Aipom_(Pok%C3%A9mon)",
	},
	{
		nome: "Sunkern",
		numero: 191, // considerando a national dex
		tipo: ["Planta"],
		massa: 1.8, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a3/F0191.png",
		estatistica: {
			ps: 30,
			atq: 30,
			def: 30,
			atq_esp: 30,
			def_esp: 30,
			vel: 30,
		},
		descricao:
			"Vive bebendo apenas gotas de orvalho debaixo das plantas. Dizem que não come nada além disso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Semente",
		obtencao: "Rota 24; e Parque Nacional",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2f/191Sunkern_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sunkern_(Pok%C3%A9mon)",
	},
	{
		nome: "Sunflora",
		numero: 192, // considerando a national dex
		tipo: ["Planta"],
		massa: 8.5, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f8/F0192.png",
		estatistica: {
			ps: 75,
			atq: 75,
			def: 55,
			atq_esp: 105,
			def_esp: 85,
			vel: 30,
		},
		descricao:
			"Converte luz solar em energia. Na escuridão depois do por-do-sol, fecha suas pétalas e permanece parado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sol",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/71/192Sunflora_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sunflora_(Pok%C3%A9mon)",
	},
	{
		nome: "Yanma",
		numero: 193, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 38.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/cd/F0193.png",
		estatistica: {
			ps: 65,
			atq: 65,
			def: 45,
			atq_esp: 75,
			def_esp: 45,
			vel: 95,
		},
		descricao:
			"Quando bate suas asas muito rápido, consegue gerar ondas de choque que quebrarão janelas próximas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Asa Clara",
		obtencao: "Rota 35",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/70/193Yanma_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Yanma_(Pok%C3%A9mon)",
	},
	{
		nome: "Wooper de Johto",
		numero: 194.1, // considerando a national dex
		tipo: ["Água", " Terra"],
		massa: 8.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/81/F0194.png",
		estatistica: {
			ps: 55,
			atq: 45,
			def: 45,
			atq_esp: 25,
			def_esp: 25,
			vel: 15,
		},
		descricao:
			"Este Pokémon vive em água fria. Deixa a água para procurar comida quando fica frio do lado de fora.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe de Água",
		obtencao: "Rota 32; Ruínas de Alfa; e Caverna da União",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d9/194Wooper_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wooper_(Pok%C3%A9mon)",
	},
	{
		nome: "Wooper de Paldea",
		numero: 194.2, // considerando a national dex
		tipo: ["Veneno", " Terra"],
		massa: 11.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/81/F0194.png",
		estatistica: {
			ps: 55,
			atq: 45,
			def: 45,
			atq_esp: 25,
			def_esp: 25,
			vel: 15,
		},
		descricao:
			"Após perder uma disputa territorial, começou a viver em terra. O Pokémon mudou ao longo do tempo, desenvolvendo uma película venenosa para proteger seu corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe Venenoso",
		obtencao:
			"South Province: Area One, Area Four, Area Five, Area Six, e Alfornada Cavern; East Province: Area Three, e Tagtree Thicket; West Province: Area Three; e North Province: Area One, e Glaseado Mountain",
		estagio: 1,
		geracao: 9, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/70/194Wooper_Paldea_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wooper_(Pok%C3%A9mon)",
	},
	{
		nome: "Quagsire",
		numero: 195, // considerando a national dex
		tipo: ["Água", " Terra"],
		massa: 75.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/15/F0195.png",
		estatistica: {
			ps: 95,
			atq: 85,
			def: 85,
			atq_esp: 65,
			def_esp: 65,
			vel: 35,
		},
		descricao:
			"Este Pokémon despreocupado tem uma natureza descontraída. Enquanto nada, sempre esbarra nos cascos dos barcos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe de Água",
		obtencao:
			"Rota 10, 12, 13, e outras; Caverna do Monte Prata; Ruínas de Alfa; Caverna da União; e por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/80/195Quagsire_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Quagsire_(Pok%C3%A9mon)",
	},
	{
		nome: "Espeon",
		numero: 196, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 26.5, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5f/F0196.png",
		estatistica: {
			ps: 65,
			atq: 65,
			def: 60,
			atq_esp: 130,
			def_esp: 95,
			vel: 110,
		},
		descricao:
			"Usa o fino cabelo que cobre seu corpo para sentir correntes de ar e prever as ações de seu oponente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sol",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/53/196Espeon_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Espeon_(Pok%C3%A9mon)",
	},
	{
		nome: "Umbreon",
		numero: 197, // considerando a national dex
		tipo: ["Noturno"],
		massa: 27.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/40/F0197.png",
		estatistica: {
			ps: 95,
			atq: 65,
			def: 110,
			atq_esp: 60,
			def_esp: 130,
			vel: 65,
		},
		descricao:
			"Quando a escuridão cai, os anéis em seu corpo começam a brilhar, causando medo no coração de qualquer um próximo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Luar",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4b/197Umbreon_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Umbreon_(Pok%C3%A9mon)",
	},
	{
		nome: "Murkrow",
		numero: 198, // considerando a national dex
		tipo: ["Noturno", " Voador"],
		massa: 2.1, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/af/F0198.png",
		estatistica: {
			ps: 60,
			atq: 85,
			def: 42,
			atq_esp: 85,
			def_esp: 42,
			vel: 91,
		},
		descricao:
			"Temido e odiado por muitos, acredita-se que traga infortúnio a todos aqueles que o veem à noite.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escuridão",
		obtencao: "Rotas 7, e 16",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7e/198Murkrow_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Murkrow_(Pok%C3%A9mon)",
	},
	{
		nome: "Slowking de Johto",
		numero: 199.1, // considerando a national dex
		tipo: ["Água", " Psíquico"],
		massa: 79.5, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/28/F0199.png",
		estatistica: {
			ps: 95,
			atq: 75,
			def: 80,
			atq_esp: 100,
			def_esp: 110,
			vel: 30,
		},
		descricao:
			"Possui inteligência e intuição incríveis. Seja qual for a situação, permanece calmo e controlado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Real",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1e/199Slowking_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Slowking_(Pok%C3%A9mon)",
	},
	{
		nome: "Slowking de Galar",
		numero: 199.2, // considerando a national dex
		tipo: ["Veneno", " Psíquico"],
		massa: 79.5, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/28/F0199.png",
		estatistica: {
			ps: 95,
			atq: 65,
			def: 80,
			atq_esp: 110,
			def_esp: 110,
			vel: 30,
		},
		descricao:
			"Enquanto entoa feitiços estranhos, este Pokémon combina suas toxinas internas com o que come, criando poções estranhas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bruxão",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/72/199Slowking_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Slowking_(Pok%C3%A9mon)",
	},
	{
		nome: "Misdreavus",
		numero: 200, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 1.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/82/F0200.png",
		estatistica: {
			ps: 60,
			atq: 60,
			def: 60,
			atq_esp: 85,
			def_esp: 85,
			vel: 85,
		},
		descricao:
			"Gosta de aplicar trotes travessos, como gritar e lamentar para assustar as pessoas à noite.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pio",
		obtencao: "Caverna do Monte Prata",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/94/200Misdreavus_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Misdreavus_(Pok%C3%A9mon)",
	},
	{
		nome: "Unown",
		numero: 201, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 5.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/6f/F0201.png",
		estatistica: {
			ps: 48,
			atq: 72,
			def: 48,
			atq_esp: 72,
			def_esp: 48,
			vel: 48,
		},
		descricao:
			"Seu corpo plano e fino está sempre preso em paredes. Seu formato aparenta ter algum significado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Símbolo",
		obtencao: "Dentro das Ruínas de Alfa",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d8/201Unown_A_Dream.png",
			"https://archives.bulbagarden.net/media/upload/0/0d/201Unown_B_Dream.png",
			"https://archives.bulbagarden.net/media/upload/f/fc/201Unown_C_Dream.png",
			"https://archives.bulbagarden.net/media/upload/4/44/201Unown_D_Dream.png",
			"https://archives.bulbagarden.net/media/upload/c/ce/201Unown_E_Dream.png",
			"https://archives.bulbagarden.net/media/upload/3/3b/201Unown_F_Dream.png",
			"https://archives.bulbagarden.net/media/upload/7/76/201Unown_G_Dream.png",
			"https://archives.bulbagarden.net/media/upload/2/2e/201Unown_H_Dream.png",
			"https://archives.bulbagarden.net/media/upload/7/72/201Unown_I_Dream.png",
			"https://archives.bulbagarden.net/media/upload/a/ad/201Unown_J_Dream.png",
			"https://archives.bulbagarden.net/media/upload/2/28/201Unown_K_Dream.png",
			"https://archives.bulbagarden.net/media/upload/b/b3/201Unown_L_Dream.png",
			"https://archives.bulbagarden.net/media/upload/d/df/201Unown_M_Dream.png",
			"https://archives.bulbagarden.net/media/upload/0/0b/201Unown_N_Dream.png",
			"https://archives.bulbagarden.net/media/upload/3/3b/201Unown_O_Dream.png",
			"https://archives.bulbagarden.net/media/upload/9/9d/201Unown_P_Dream.png",
			"https://archives.bulbagarden.net/media/upload/d/de/201Unown_Q_Dream.png",
			"https://archives.bulbagarden.net/media/upload/2/2a/201Unown_R_Dream.png",
			"https://archives.bulbagarden.net/media/upload/7/7b/201Unown_S_Dream.png",
			"https://archives.bulbagarden.net/media/upload/0/08/201Unown_T_Dream.png",
			"https://archives.bulbagarden.net/media/upload/2/28/201Unown_U_Dream.png",
			"https://archives.bulbagarden.net/media/upload/3/3b/201Unown_V_Dream.png",
			"https://archives.bulbagarden.net/media/upload/0/05/201Unown_W_Dream.png",
			"https://archives.bulbagarden.net/media/upload/c/c6/201Unown_X_Dream.png",
			"https://archives.bulbagarden.net/media/upload/1/14/201Unown_Y_Dream.png",
			"https://archives.bulbagarden.net/media/upload/0/0e/201Unown_Z_Dream.png",
			"https://archives.bulbagarden.net/media/upload/a/a0/201Unown_Exclamation_Dream.png",
			"https://archives.bulbagarden.net/media/upload/0/0d/201Unown_Question_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Unown_(Pok%C3%A9mon)",
	},
	{
		nome: "Wobboffet",
		numero: 202, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 28.5, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/3e/F0202.png",
		estatistica: {
			ps: 190,
			atq: 33,
			def: 58,
			atq_esp: 33,
			def_esp: 58,
			vel: 33,
		},
		descricao:
			"Odeia luz e choque. Quando atacado, infla seu corpo para aumentar seu contra-ataque.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Paciente",
		obtencao: "Caverna Escura",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a9/202Wobbuffet_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wobbuffet_(Pok%C3%A9mon)",
	},
	{
		nome: "Girafarig",
		numero: 203, // considerando a national dex
		tipo: ["Normal", " Psíquico"],
		massa: 41.5, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e6/F0203.png",
		estatistica: {
			ps: 70,
			atq: 80,
			def: 65,
			atq_esp: 90,
			def_esp: 65,
			vel: 85,
		},
		descricao:
			"Sua cauda possui um pequeno cérebro próprio. Caso alguém se aproxime, pode reagir ao cheiro e morder.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pescoço Longo",
		obtencao: "Rota 43",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/91/203Girafarig_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Girafarig_(Pok%C3%A9mon)",
	},
	{
		nome: "Pineco",
		numero: 204, // considerando a national dex
		tipo: ["Inseto"],
		massa: 7.2, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/dd/F0204.png",
		estatistica: {
			ps: 50,
			atq: 65,
			def: 90,
			atq_esp: 35,
			def_esp: 35,
			vel: 15,
		},
		descricao:
			"Gosta de fazer sua casca mais espessa adicionando camadas de casca de árvores. O peso adicional não lhe incomoda.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bicho-de-cesto",
		obtencao: "Rotas 26, 27, 29, e outras; Floresta de Ilex; e Lago da Fúria",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9d/204Pineco_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pineco_(Pok%C3%A9mon)",
	},
	{
		nome: "Forretress",
		numero: 205, // considerando a national dex
		tipo: ["Inseto", " Metal"],
		massa: 125.8, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f1/F0205.png",
		estatistica: {
			ps: 75,
			atq: 90,
			def: 140,
			atq_esp: 60,
			def_esp: 60,
			vel: 40,
		},
		descricao:
			"Seu corpo inteiro é protegido por uma concha tão dura quanto aço. O que se esconde dentro da armadura é um total mistério.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bicho-de-cesto",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/8b/205Forretress_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Forretress_(Pok%C3%A9mon)",
	},
	{
		nome: "Dunsparce",
		numero: 206, // considerando a national dex
		tipo: ["Normal"],
		massa: 14.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/91/F0206.png",
		estatistica: {
			ps: 100,
			atq: 70,
			def: 70,
			atq_esp: 65,
			def_esp: 65,
			vel: 45,
		},
		descricao:
			"Quando avistado, este Pokémon escapa para trás perfurando furiosamente o chão com sua cauda.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Serpente de Terra",
		obtencao: "Caverna Escura",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/07/206Dunsparce_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dunsparce_(Pok%C3%A9mon)",
	},
	{
		nome: "Gligar",
		numero: 207, // considerando a national dex
		tipo: ["Terra", " Voador"],
		massa: 64.8, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/59/F0207.png",
		estatistica: {
			ps: 65,
			atq: 75,
			def: 105,
			atq_esp: 35,
			def_esp: 65,
			vel: 85,
		},
		descricao:
			"Voa direto ao rosto do alvo e depois agarra a vítima assustada para injetar veneno.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escorpião Voador",
		obtencao: "Rota 45",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f8/207Gligar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gligar_(Pok%C3%A9mon)",
	},
	{
		nome: "Steelix",
		numero: 208, // considerando a national dex
		tipo: ["Metal", " Terra"],
		massa: 400.0, // em kg
		altura: 9.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/60/F0208.png",
		estatistica: {
			ps: 75,
			atq: 85,
			def: 200,
			atq_esp: 55,
			def_esp: 65,
			vel: 30,
		},
		descricao:
			"Seu corpo tem sido comprimido profundamente sob o solo. Como resultado, é mais duro do que um diamante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Serpente de Ferro",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a5/208Steelix_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Steelix_(Pok%C3%A9mon)",
	},
	{
		nome: "Snubbull",
		numero: 209, // considerando a national dex
		tipo: ["Fada"],
		massa: 7.8, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/96/F0209.png",
		estatistica: {
			ps: 60,
			atq: 80,
			def: 50,
			atq_esp: 40,
			def_esp: 40,
			vel: 30,
		},
		descricao:
			"Apesar de parecer assustador, é, na verdade, bondoso e afetuoso. É muito popular entre mulheres.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fada",
		obtencao: "Rotas 5, 6, 7, e outras",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c2/209Snubbull_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Snubbull_(Pok%C3%A9mon)",
	},
	{
		nome: "Granbull",
		numero: 210, // considerando a national dex
		tipo: ["Fada"],
		massa: 48.7, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e3/F0210.png",
		estatistica: {
			ps: 90,
			atq: 120,
			def: 75,
			atq_esp: 60,
			def_esp: 60,
			vel: 45,
		},
		descricao:
			"Na verdade, é tímido e facilmente assustado. Quando atacado, se agita para afastar seu agressor.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fada",
		obtencao: "Rota 6; e por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ef/210Granbull_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Granbull_(Pok%C3%A9mon)",
	},
	{
		nome: "Qwilfish de Johto",
		numero: 211.1, // considerando a national dex
		tipo: ["Água", " Veneno"],
		massa: 3.9, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/56/F0211.png",
		estatistica: {
			ps: 65,
			atq: 95,
			def: 85,
			atq_esp: 55,
			def_esp: 55,
			vel: 85,
		},
		descricao:
			"Para disparar seus espinhos venenosos, deve inflar seu corpo bebendo mais de 10 litros de água de uma vez.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Balão",
		obtencao: "Rotas 12, 13, e 32",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b3/211Qwilfish_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Qwilfish_(Pok%C3%A9mon)",
	},
	{
		nome: "Qwilfish de Hisui",
		numero: 211.2, // considerando a national dex
		tipo: ["Noturno", " Veneno"],
		massa: 3.9, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/56/F0211.png",
		estatistica: {
			ps: 65,
			atq: 95,
			def: 85,
			atq_esp: 55,
			def_esp: 55,
			vel: 85,
		},
		descricao:
			"Pescadores detestam este Pokémon problemático por borrifar veneno de seus espinhos, pegando em todo lugar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Balão",
		obtencao:
			"Obsidian Fieldlands: próximo a Ramanas Island; e Cobalt Coastlands: próximo a Bather's Lagoon, próximo a Hideaway Bay, próximo a Tombolo Walk, próximo a Sand's Reach, Tranquility Cove, Islespy Shore e próximo, Lunker's Lair, próximo a Seagrass Haven, e próximo a Firespit Island",
		estagio: 1,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/19/211Qwilfish-Hisui_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Qwilfish_(Pok%C3%A9mon)",
	},
	{
		nome: "Scizor",
		numero: 212, // considerando a national dex
		tipo: ["Inseto", " Metal"],
		massa: 118.0, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/03/F0212.png",
		estatistica: {
			ps: 70,
			atq: 130,
			def: 100,
			atq_esp: 55,
			def_esp: 80,
			vel: 65,
		},
		descricao:
			"Balança suas pinças com padrão de olho para assustar seus inimigos. Isso faz com que pareça que tenha três cabeças.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pinça",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5e/212Scizor_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Scizor_(Pok%C3%A9mon)",
	},
	{
		nome: "Shuckle",
		numero: 213, // considerando a national dex
		tipo: ["Inseto", " Rocha"],
		massa: 20.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/55/F0213.png",
		estatistica: {
			ps: 20,
			atq: 10,
			def: 230,
			atq_esp: 10,
			def_esp: 230,
			vel: 5,
		},
		descricao:
			"As frutas que armazena em sua concha semelhante a um caso, se decompõem e se tornam um líquido pegajoso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mofo",
		obtencao: "Rota 40; Torre Queimada; e Caverna Escura",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/87/213Shuckle_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shuckle_(Pok%C3%A9mon)",
	},
	{
		nome: "Heracross",
		numero: 214, // considerando a national dex
		tipo: ["Inseto", " Lutador"],
		massa: 54.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b9/F0214.png",
		estatistica: {
			ps: 80,
			atq: 125,
			def: 75,
			atq_esp: 40,
			def_esp: 95,
			vel: 85,
		},
		descricao:
			"Este poderoso Pokémon empurra seu chifre premiado sob a barriga de seus inimigos, depois os levanta e os joga.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Unicórnio",
		obtencao: "Rotas 29, 30, 31, e outras",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/28/214Heracross_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Heracross_(Pok%C3%A9mon)",
	},
	{
		nome: "Sneasel de Johto",
		numero: 215.1, // considerando a national dex
		tipo: ["Noturno", " Gelo"],
		massa: 28.0, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/44/F0215.png",
		estatistica: {
			ps: 55,
			atq: 95,
			def: 55,
			atq_esp: 35,
			def_esp: 75,
			vel: 115,
		},
		descricao:
			"Suas patas escondem garras afiadas. Se atacado, de repente estende as garras e assusta seu inimigo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Garra Afiada",
		obtencao: "Rota 28; Monte Prata; e Caminho Gelado",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1e/215Sneasel_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sneasel_(Pok%C3%A9mon)",
	},
	{
		nome: "Sneasel de Hisui",
		numero: 215.2, // considerando a national dex
		tipo: ["Lutador", " Veneno"],
		massa: 27.0, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/44/F0215.png",
		estatistica: {
			ps: 55,
			atq: 95,
			def: 55,
			atq_esp: 35,
			def_esp: 75,
			vel: 115,
		},
		descricao:
			"Suas garras robustas e curvas são ideais para atravessar penhascos íngremes. Das pontas dessas garras escorre um veneno que se infiltra nos nervos de qualquer presa capturada nas garras deste Pokémon.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Garra Afiada",
		obtencao:
			"Coronet Highlands: próximo a Celestica Trail, e próximo a Primeval Grotto; e Alabaster Icelands: próximo a Avalugg's Legacy, Glacier Terrace, e próximo a Pearl Settlement",
		estagio: 1,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/30/215Sneasel-Hisui_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sneasel_(Pok%C3%A9mon)",
	},
	{
		nome: "Teddiursa",
		numero: 216, // considerando a national dex
		tipo: ["Normal"],
		massa: 8.8, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b5/F0216.png",
		estatistica: {
			ps: 60,
			atq: 80,
			def: 50,
			atq_esp: 50,
			def_esp: 50,
			vel: 40,
		},
		descricao:
			"Caso encontre mel, sua marca crescente brilha. Sempre lambe suas patas por sempre estarem encharcadas com mel.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ursinho",
		obtencao: "Rota 45; e Caverna Escura",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6c/216Teddiursa_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Teddiursa_(Pok%C3%A9mon)",
	},
	{
		nome: "Ursaring",
		numero: 217, // considerando a national dex
		tipo: ["Normal"],
		massa: 125.8, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e8/F0217.png",
		estatistica: {
			ps: 90,
			atq: 130,
			def: 75,
			atq_esp: 75,
			def_esp: 75,
			vel: 55,
		},
		descricao:
			"Apesar de ser um bom escalador, prefere quebrar árvores com suas patas dianteiras e comer Frutas caídas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Hibernador",
		obtencao:
			"Rota 28; Caverna Escura; Estrada da Vitória; Monte Prata; Caverna do Monte Prata; e por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/12/217Ursaring_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ursaring_(Pok%C3%A9mon)",
	},
	{
		nome: "Slugma",
		numero: 218, // considerando a national dex
		tipo: ["Fogo"],
		massa: 35.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e8/F0218.png",
		estatistica: {
			ps: 40,
			atq: 40,
			def: 40,
			atq_esp: 70,
			def_esp: 40,
			vel: 20,
		},
		descricao:
			"Nunca dorme. Tem que continuar em movimento porque, se parar, seu corpo de magma esfriaria e endureceria.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lava",
		obtencao: "Rotas 16, 17, e 18",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5c/218Slugma_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Slugma_(Pok%C3%A9mon)",
	},
	{
		nome: "Magcargo",
		numero: 219, // considerando a national dex
		tipo: ["Fogo", " Rocha"],
		massa: 55.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b6/F0219.png",
		estatistica: {
			ps: 50,
			atq: 50,
			def: 120,
			atq_esp: 80,
			def_esp: 80,
			vel: 30,
		},
		descricao:
			"A concha em suas costas é apenas pele que esfriou e endureceu. Quebra facilmente com um leve toque.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lava",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e3/219Magcargo_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Magcargo_(Pok%C3%A9mon)",
	},
	{
		nome: "Swinub",
		numero: 220, // considerando a national dex
		tipo: ["Gelo", " Terra"],
		massa: 6.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fd/F0220.png",
		estatistica: {
			ps: 50,
			atq: 50,
			def: 40,
			atq_esp: 30,
			def_esp: 30,
			vel: 50,
		},
		descricao:
			"Esfrega o focinho no chão para encontrar e desenterrar comida. Às vezes, descobre fonte termal.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Porco",
		obtencao: "Caminho Gelado",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2c/220Swinub_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Swinub_(Pok%C3%A9mon)",
	},
	{
		nome: "Piloswine",
		numero: 221, // considerando a national dex
		tipo: ["Gelo", " Terra"],
		massa: 55.8, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/15/F0221.png",
		estatistica: {
			ps: 100,
			atq: 100,
			def: 80,
			atq_esp: 60,
			def_esp: 60,
			vel: 50,
		},
		descricao:
			"Por causa de seu longo pelo por todo corpo obscurecer sua visão, continua investindo repetidamente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Suíno",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5d/221Piloswine_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Piloswine_(Pok%C3%A9mon)",
	},
	{
		nome: "Corsola de Johto",
		numero: 222.1, // considerando a national dex
		tipo: ["Água", " Rocha"],
		massa: 5.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/60/F0222.png",
		estatistica: {
			ps: 65,
			atq: 55,
			def: 95,
			atq_esp: 65,
			def_esp: 95,
			vel: 35,
		},
		descricao:
			"Em uma nação dos mares do sul, as pessoas vivem em comunidades construídas em grupos desses Pokémon.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coral",
		obtencao: "Rotas 19, 34, e 40; e Caverna da União",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c7/222Corsola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Corsola_(Pok%C3%A9mon)",
	},
	{
		nome: "Corsola de Galar",
		numero: 222.2, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 0.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/60/F0222.png",
		estatistica: {
			ps: 60,
			atq: 55,
			def: 100,
			atq_esp: 65,
			def_esp: 100,
			vel: 30,
		},
		descricao:
			"Cuidado onde pisa ao vagar por áreas que os oceanos antes cobriam. O que parece uma pedra pode ser este Pokémon, e vai te amaldiçoar se você chutá-lo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coral",
		obtencao: "Giant's Mirror",
		estagio: 1,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9f/222Corsola_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Corsola_(Pok%C3%A9mon)",
	},
	{
		nome: "Remoraid",
		numero: 223, // considerando a national dex
		tipo: ["Água"],
		massa: 12.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/dc/F0223.png",
		estatistica: {
			ps: 35,
			atq: 65,
			def: 35,
			atq_esp: 65,
			def_esp: 35,
			vel: 65,
		},
		descricao:
			"Possui uma precisão soberba. A água que atira pode atingir até mesmo presa em movimento a mais de cem metros.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Jato",
		obtencao: "Rota 44",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b7/223Remoraid_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Remoraid_(Pok%C3%A9mon)",
	},
	{
		nome: "Octillery",
		numero: 224, // considerando a national dex
		tipo: ["Água"],
		massa: 28.5, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b4/F0224.png",
		estatistica: {
			ps: 75,
			atq: 105,
			def: 75,
			atq_esp: 105,
			def_esp: 75,
			vel: 45,
		},
		descricao:
			"Prende seus inimigos com seus tentáculos com ventosas depois esmaga-os com sua cabeça dura como rocha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Jato",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6f/224Octillery_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Octillery_(Pok%C3%A9mon)",
	},
	{
		nome: "Delibird",
		numero: 225, // considerando a national dex
		tipo: ["Gelo", " Voador"],
		massa: 16.0, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/16/F0225.png",
		estatistica: {
			ps: 45,
			atq: 55,
			def: 45,
			atq_esp: 65,
			def_esp: 45,
			vel: 75,
		},
		descricao:
			"Carrega comida o dia todo. Há contos sobre pessoas perdidas que foram salvas pela comida que tinha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Entrega",
		obtencao: "Caminho Gelado",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/40/225Delibird_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Delibird_(Pok%C3%A9mon)",
	},
	{
		nome: "Mantine",
		numero: 226, // considerando a national dex
		tipo: ["Água", " Voador"],
		massa: 220.0, // em kg
		altura: 2.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/58/F0226.png",
		estatistica: {
			ps: 65,
			atq: 40,
			def: 70,
			atq_esp: 80,
			def_esp: 140,
			vel: 70,
		},
		descricao:
			"Enquanto nada livremente em mares abertos, pode voar fora da água e sobre as ondas se conseguir velocidade o suficiente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pipa",
		obtencao: "Rota 41",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2e/226Mantine_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mantine_(Pok%C3%A9mon)",
	},
	{
		nome: "Skarmory",
		numero: 227, // considerando a national dex
		tipo: ["Metal", " Voador"],
		massa: 50.5, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/ab/F0227.png",
		estatistica: {
			ps: 65,
			atq: 80,
			def: 140,
			atq_esp: 40,
			def_esp: 70,
			vel: 70,
		},
		descricao:
			"Suas asas resistentes parecem pesadas, mas são ocas e leves, permitindo que voe livremente no céu.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro com Armadura",
		obtencao: "Rota 45",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2b/227Skarmory_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Skarmory_(Pok%C3%A9mon)",
	},
	{
		nome: "Houndour",
		numero: 228, // considerando a national dex
		tipo: ["Noturno", " Fogo"],
		massa: 10.8, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/99/F0228.png",
		estatistica: {
			ps: 45,
			atq: 60,
			def: 30,
			atq_esp: 80,
			def_esp: 50,
			vel: 65,
		},
		descricao:
			"Usa diferentes tipos de sons para se comunicar com outros de sua espécie e perseguir sua presa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escuro",
		obtencao: "Rota 7",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4f/228Houndour_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Houndour_(Pok%C3%A9mon)",
	},
	{
		nome: "Houndoom",
		numero: 229, // considerando a national dex
		tipo: ["Noturno", " Fogo"],
		massa: 35.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/dd/F0229.png",
		estatistica: {
			ps: 75,
			atq: 90,
			def: 50,
			atq_esp: 110,
			def_esp: 80,
			vel: 95,
		},
		descricao:
			"Caso você seja queimado pelas chamas que este Pokémon lança pela boca, a dor nunca irá embora.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escuro",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9a/229Houndoom_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Houndoom_(Pok%C3%A9mon)",
	},
	{
		nome: "Kingdra",
		numero: 230, // considerando a national dex
		tipo: ["Água", " Dragão"],
		massa: 152.0, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/08/F0230.png",
		estatistica: {
			ps: 75,
			atq: 95,
			def: 95,
			atq_esp: 95,
			def_esp: 95,
			vel: 85,
		},
		descricao:
			"Dizem que este Pokémon se esconde em cavernas subaquáticas. Consegue criar redemoinhos ao bocejar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b1/230Kingdra_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kingdra_(Pok%C3%A9mon)",
	},
	{
		nome: "Phanpy",
		numero: 231, // considerando a national dex
		tipo: ["Terra"],
		massa: 33.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/27/F0231.png",
		estatistica: {
			ps: 90,
			atq: 60,
			def: 60,
			atq_esp: 40,
			def_esp: 40,
			vel: 40,
		},
		descricao:
			"Balança seu longo focinho alegremente por aí, mas, por ser muito forte, isso pode ser perigoso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Nariz Longo",
		obtencao: "Rotas 45, e 46",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/cd/231Phanpy_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Phanpy_(Pok%C3%A9mon)",
	},
	{
		nome: "Dophan",
		numero: 232, // considerando a national dex
		tipo: ["Terra"],
		massa: 120.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/ca/F0232.png",
		estatistica: {
			ps: 90,
			atq: 120,
			def: 120,
			atq_esp: 60,
			def_esp: 60,
			vel: 50,
		},
		descricao:
			"Possui presas duras, afiadas e um couro áspero. Sua Investida é forte o suficiente para derrubar uma casa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Armadura",
		obtencao:
			"Rotas 28, e 45; Monte Prata; Caverna do Monte Prata; Estrada da Vitória; e por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/fd/232Donphan_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Donphan_(Pok%C3%A9mon)",
	},
	{
		nome: "Porygon2",
		numero: 233, // considerando a national dex
		tipo: ["Normal"],
		massa: 32.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/6a/F0233.png",
		estatistica: {
			ps: 85,
			atq: 80,
			def: 90,
			atq_esp: 105,
			def_esp: 95,
			vel: 60,
		},
		descricao:
			"Pesquisas posteriores aperfeiçoaram suas habilidades. Algumas vezes, pode exibir movimentos que não foram programados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Virtual",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/31/233Porygon2_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Porygon2_(Pok%C3%A9mon)",
	},
	{
		nome: "Stantler",
		numero: 234, // considerando a national dex
		tipo: ["Normal"],
		massa: 71.2, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/24/F0234.png",
		estatistica: {
			ps: 73,
			atq: 95,
			def: 62,
			atq_esp: 85,
			def_esp: 65,
			vel: 85,
		},
		descricao:
			"Os chifres curvos mudam sutilmente o fluxo de ar para criar um espaço estranho onde a realidade é distorcida.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chifrudo",
		obtencao: "Rotas 36, e 37",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/05/234Stantler_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Stantler_(Pok%C3%A9mon)",
	},
	{
		nome: "Smeargle",
		numero: 235, // considerando a national dex
		tipo: ["Normal"],
		massa: 58.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/14/F0235.png",
		estatistica: {
			ps: 55,
			atq: 20,
			def: 35,
			atq_esp: 20,
			def_esp: 45,
			vel: 75,
		},
		descricao:
			"Uma vez que se torna adulto, tem a tendencia de deixar seus companheiros marcarem suas costas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pintor",
		obtencao: "Ruínas de Alfa",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d1/235Smeargle_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Smeargle_(Pok%C3%A9mon)",
	},
	{
		nome: "Tyrogue",
		numero: 236, // considerando a national dex
		tipo: ["Lutador"],
		massa: 21.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b9/F0236.png",
		estatistica: {
			ps: 35,
			atq: 35,
			def: 35,
			atq_esp: 35,
			def_esp: 35,
			vel: 35,
		},
		descricao:
			"Mesmo sendo pequeno, não pode ser ignorado, pois pode atingir qualquer alvo próximo sem aviso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Briga",
		obtencao: "Recebido no Monte Mortar",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7e/236Tyrogue_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tyrogue_(Pok%C3%A9mon)",
	},
	{
		nome: "Hitmontop",
		numero: 237, // considerando a national dex
		tipo: ["Lutador"],
		massa: 48.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/be/F0237.png",
		estatistica: {
			ps: 50,
			atq: 95,
			def: 95,
			atq_esp: 35,
			def_esp: 110,
			vel: 70,
		},
		descricao:
			"Lança seus chutes enquanto gira. Se girar em alta velocidade, pode perfurar o chão.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Parada de Mão",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/73/237Hitmontop_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hitmontop_(Pok%C3%A9mon)",
	},
	{
		nome: "Smoochum",
		numero: 238, // considerando a national dex
		tipo: ["Gelo", " Psíquico"],
		massa: 6.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/7c/F0238.png",
		estatistica: {
			ps: 45,
			atq: 30,
			def: 15,
			atq_esp: 85,
			def_esp: 65,
			vel: 65,
		},
		descricao:
			"Sempre balança a cabeça lentamente para frente e para trás como se estivesse tentando beijar alguém.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Beijo",
		obtencao: "Por ovo",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/76/238Smoochum_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Smoochum_(Pok%C3%A9mon)",
	},
	{
		nome: "Elekid",
		numero: 239, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 23.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8a/F0239.png",
		estatistica: {
			ps: 45,
			atq: 63,
			def: 37,
			atq_esp: 65,
			def_esp: 55,
			vel: 95,
		},
		descricao:
			"Gira seus braços para gerar eletricidade, mas se cansa rapidamente, então carrega apenas um pouco.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Elétrico",
		obtencao: "Por ovo",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/51/239Elekid_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Elekid_(Pok%C3%A9mon)",
	},
	{
		nome: "Magby",
		numero: 240, // considerando a national dex
		tipo: ["Fogo"],
		massa: 21.4, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/16/F0240.png",
		estatistica: {
			ps: 45,
			atq: 75,
			def: 37,
			atq_esp: 70,
			def_esp: 55,
			vel: 83,
		},
		descricao:
			"Cada e toda vez que inspira e expira, brasas quentes pingam de sua boca e narinas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Carvão Vivo",
		obtencao: "Por ovo",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9a/240Magby_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Magby_(Pok%C3%A9mon)",
	},
	{
		nome: "Miltank",
		numero: 241, // considerando a national dex
		tipo: ["Normal"],
		massa: 75.5, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/65/F0241.png",
		estatistica: {
			ps: 95,
			atq: 80,
			def: 105,
			atq_esp: 40,
			def_esp: 70,
			vel: 100,
		},
		descricao:
			"Seu leite é rico em nutrientes, tornando-o a bebida ideal para os doentes ou cansados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vaca Leiteira",
		obtencao: "Rotas 38, e 39",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/29/241Miltank_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Miltank_(Pok%C3%A9mon)",
	},
	{
		nome: "Blissey",
		numero: 242, // considerando a national dex
		tipo: ["Normal"],
		massa: 46.8, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/eb/F0242.png",
		estatistica: {
			ps: 255,
			atq: 10,
			def: 10,
			atq_esp: 75,
			def_esp: 135,
			vel: 55,
		},
		descricao:
			"Tem uma natureza compassiva. Caso veja um Pokémon doente, irá cuidar do indivíduo até que fique saudável.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Felicidade",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1d/242Blissey_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Blissey_(Pok%C3%A9mon)",
	},
	{
		nome: "Raikou",
		numero: 243, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 178.0, // em kg
		altura: 1.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f8/F0243.png",
		estatistica: {
			ps: 90,
			atq: 85,
			def: 75,
			atq_esp: 115,
			def_esp: 100,
			vel: 115,
		},
		descricao:
			"As nuvens de chuva que carrega permitem que dispare raios à vontade. É dito que descendeu com raio.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Trovão",
		obtencao: "Vagando por Johto",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/da/243Raikou_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Raikou_(Pok%C3%A9mon)",
	},
	{
		nome: "Entei",
		numero: 244, // considerando a national dex
		tipo: ["Fogo"],
		massa: 198.0, // em kg
		altura: 2.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8f/F0244.png",
		estatistica: {
			ps: 115,
			atq: 115,
			def: 85,
			atq_esp: 90,
			def_esp: 75,
			vel: 100,
		},
		descricao:
			"Vulcões entram em erupção quando late. Incapaz de restringir seu extremo poder, corre pela terra.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vulcão",
		obtencao: "Vagando por Johto",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/ca/244Entei_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Entei_(Pok%C3%A9mon)",
	},
	{
		nome: "Suicune",
		numero: 245, // considerando a national dex
		tipo: ["Água"],
		massa: 187.0, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/3f/F0245.png",
		estatistica: {
			ps: 100,
			atq: 75,
			def: 115,
			atq_esp: 90,
			def_esp: 115,
			vel: 85,
		},
		descricao:
			"Rumores dizem ser a reincarnação dos ventos do norte, consegue instantaneamente purificar águas sujas e turvas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Aurora",
		obtencao: "Torre dos Sinos; ou vagando por Johto",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6c/245Suicune_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Suicune_(Pok%C3%A9mon)",
	},
	{
		nome: "Larvitar",
		numero: 246, // considerando a national dex
		tipo: ["Rocha", " Terra"],
		massa: 72.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/53/F0246.png",
		estatistica: {
			ps: 50,
			atq: 64,
			def: 50,
			atq_esp: 45,
			def_esp: 50,
			vel: 41,
		},
		descricao:
			"Sua alimentação vem do solo. Depois de ter comido uma grande montanha, cairá em um sono para conseguir crescer.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pele de Rocha",
		obtencao: "Caverna do Monte Prata",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b5/246Larvitar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Larvitar_(Pok%C3%A9mon)",
	},
	{
		nome: "Pupitar",
		numero: 247, // considerando a national dex
		tipo: ["Rocha", " Terra"],
		massa: 152.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/80/F0247.png",
		estatistica: {
			ps: 70,
			atq: 84,
			def: 70,
			atq_esp: 65,
			def_esp: 70,
			vel: 51,
		},
		descricao:
			"Sua casca é tão dura quanto um pedaço de rocha, e também é muito forte. Consegue derrubar uma montanha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Casco Duro",
		obtencao: "Caverna do Monte Prata; e por evolução",
		estagio: 2,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/be/247Pupitar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pupitar_(Pok%C3%A9mon)",
	},
	{
		nome: "Tyranitar",
		numero: 248, // considerando a national dex
		tipo: ["Rocha", " Noturno"],
		massa: 202.0, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/90/F0248.png",
		estatistica: {
			ps: 100,
			atq: 134,
			def: 110,
			atq_esp: 95,
			def_esp: 100,
			vel: 61,
		},
		descricao:
			"Seu corpo não pode ser machucado por nenhum tipo de ataque, por isso é muito ansioso para fazer desafios contra inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Armadura",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4b/248Tyranitar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tyranitar_(Pok%C3%A9mon)",
	},
	{
		nome: "Lugia",
		numero: 249, // considerando a national dex
		tipo: ["Psíquico", " Voador"],
		massa: 216.0, // em kg
		altura: 5.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c1/F0249.png",
		estatistica: {
			ps: 106,
			atq: 90,
			def: 130,
			atq_esp: 90,
			def_esp: 154,
			vel: 110,
		},
		descricao:
			"Rumores dizem que passa seu tempo silenciosamente nas profundezas do mar por seus poderes sem muito fortes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mergulho",
		obtencao: "Ilhas Redemoinho",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/bd/249Lugia_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lugia_(Pok%C3%A9mon)",
	},
	{
		nome: "Ho-Oh",
		numero: 250, // considerando a national dex
		tipo: ["Fogo", " Voador"],
		massa: 199.0, // em kg
		altura: 3.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9f/F0250.png",
		estatistica: {
			ps: 106,
			atq: 130,
			def: 90,
			atq_esp: 110,
			def_esp: 154,
			vel: 90,
		},
		descricao:
			"Segundo as lendas, este Pokémon voa pelos céus do planeta continuamente em suas magnificas asas de sete cores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Arco-Íris",
		obtencao: "Torre dos Sinos",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5f/250Ho-Oh_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ho-Oh_(Pok%C3%A9mon)",
	},
	{
		nome: "Celebi",
		numero: 251, // considerando a national dex
		tipo: ["Psíquico", " Planta"],
		massa: 5.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9a/F0251.png",
		estatistica: {
			ps: 100,
			atq: 100,
			def: 100,
			atq_esp: 100,
			def_esp: 100,
			vel: 100,
		},
		descricao:
			"Este Pokémon vaga pelo tempo. A grama e as árvores floresce nas florestas em que apareceu.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Viagem no Tempo",
		obtencao: "Floresta de Ilex",
		estagio: 1,
		geracao: 2, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/af/251Celebi_Dream_3.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Celebi_(Pok%C3%A9mon)",
	},
	{
		nome: "Treecko",
		numero: 252, // considerando a national dex
		tipo: ["Planta"],
		massa: 5.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f2/F0252.png",
		estatistica: {
			ps: 40,
			atq: 45,
			def: 35,
			atq_esp: 65,
			def_esp: 55,
			vel: 70,
		},
		descricao:
			"Possui pequenos ganchos na sola de suas patas que o permite escalar paredes verticais. Este Pokémon ataca batendo nos inimigos com sua cauda grossa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lagartixa de Madeira",
		obtencao: "Rota 101",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/67/252Treecko_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Treecko_(Pok%C3%A9mon)",
	},
	{
		nome: "Grovyle",
		numero: 253, // considerando a national dex
		tipo: ["Planta"],
		massa: 21.6, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/69/F0253.png",
		estatistica: {
			ps: 50,
			atq: 65,
			def: 45,
			atq_esp: 85,
			def_esp: 65,
			vel: 95,
		},
		descricao:
			"As folhas que crescem em seu corpo são convenientes para camuflá-lo de seus inimigos em florestas. Este Pokémon é um mestre em escalar árvores em selvas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lagartixa de Madeira",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4e/253Grovyle_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Grovyle_(Pok%C3%A9mon)",
	},
	{
		nome: "Sceptile",
		numero: 254, // considerando a national dex
		tipo: ["Planta"],
		massa: 52.2, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/af/F0254.png",
		estatistica: {
			ps: 70,
			atq: 85,
			def: 65,
			atq_esp: 105,
			def_esp: 85,
			vel: 120,
		},
		descricao:
			"As folhas que crescem em seu corpo são muito afiadas nas pontas. Este Pokémon é muito ágil, salta sobre os galhos das árvores e ataca seus inimigos por cima ou por trás.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Floresta",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6d/254Sceptile_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sceptile_(Pok%C3%A9mon)",
	},
	{
		nome: "Torchic",
		numero: 255, // considerando a national dex
		tipo: ["Fogo"],
		massa: 2.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/0d/F0255.png",
		estatistica: {
			ps: 45,
			atq: 60,
			def: 40,
			atq_esp: 70,
			def_esp: 50,
			vel: 45,
		},
		descricao:
			"Este Pokémon possui um local dentro de seu corpo onde mantém sua chama. É todo coberto por uma pelagem fofa de plumas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pintinho",
		obtencao: "Rota 101",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/54/255Torchic_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Torchic_(Pok%C3%A9mon)",
	},
	{
		nome: "Combusken",
		numero: 256, // considerando a national dex
		tipo: ["Fogo", " Lutador"],
		massa: 19.5, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/ca/F0256.png",
		estatistica: {
			ps: 60,
			atq: 85,
			def: 60,
			atq_esp: 85,
			def_esp: 60,
			vel: 55,
		},
		descricao:
			"Batalha com as chamas intensamente quentes que cospe de seu bico e com chutes excepcionalmente destrutivos. O som deste Pokémon é muito alto e perturbador.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ave Jovem",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/ce/256Combusken_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Combusken_(Pok%C3%A9mon)",
	},
	{
		nome: "Blaziken",
		numero: 257, // considerando a national dex
		tipo: ["Fogo", " Lutador"],
		massa: 52.0, // em kg
		altura: 1.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a7/F0257.png",
		estatistica: {
			ps: 80,
			atq: 120,
			def: 70,
			atq_esp: 110,
			def_esp: 70,
			vel: 80,
		},
		descricao:
			"Possui pernas incrivelmente forte, pode facilmente passar por um prédio de trina andares em único salto. Os socos flamejantes deste Pokémon deixam seus inimigos queimados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Labareda",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1e/257Blaziken_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Blaziken_(Pok%C3%A9mon)",
	},
	{
		nome: "Mudkip",
		numero: 258, // considerando a national dex
		tipo: ["Água"],
		massa: 7.6, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/1e/F0258.png",
		estatistica: {
			ps: 50,
			atq: 70,
			def: 50,
			atq_esp: 50,
			def_esp: 50,
			vel: 40,
		},
		descricao:
			"A barbatana em sua cabeça age como um radar altamente sensível. Usando esta barbatana para sentir os movimentos da água e do ar, este Pokémon consegue determinar o que está acontecendo ao seu redor sem usar os olhos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe de Lama",
		obtencao: "Rota 101",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/70/258Mudkip_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mudkip_(Pok%C3%A9mon)",
	},
	{
		nome: "Marshtomp",
		numero: 259, // considerando a national dex
		tipo: ["Água", " Terra"],
		massa: 28.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/ee/F0259.png",
		estatistica: {
			ps: 70,
			atq: 85,
			def: 70,
			atq_esp: 60,
			def_esp: 70,
			vel: 50,
		},
		descricao:
			"É mais rápido viajando pela lama do que nadando. Os membros inferiores deste Pokémon exibem óbvio desenvolvimento, dando uma habilidade de andar com as patas traseiras.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe de Lama",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/61/259Marshtomp_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Marshtomp_(Pok%C3%A9mon)",
	},
	{
		nome: "Swampert",
		numero: 260, // considerando a national dex
		tipo: ["Água", " Terra"],
		massa: 81.9, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f4/F0260.png",
		estatistica: {
			ps: 100,
			atq: 110,
			def: 90,
			atq_esp: 85,
			def_esp: 90,
			vel: 60,
		},
		descricao:
			"Consegue prever tempestades sentindo mudanças sutis nas ondas sonoras e ventos de maré com suas barbatanas. Caso uma tempestade esteja se aproximando, empilha pedras para se proteger.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe de Lama",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/ff/260Swampert_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Swampert_(Pok%C3%A9mon)",
	},
	{
		nome: "Poochyena",
		numero: 261, // considerando a national dex
		tipo: ["Noturno"],
		massa: 13.6, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/55/F0261.png",
		estatistica: {
			ps: 35,
			atq: 55,
			def: 35,
			atq_esp: 30,
			def_esp: 30,
			vel: 35,
		},
		descricao:
			"Este Pokémon é onívoro, come qualquer coisa. Uma característica distinta é quão grande são suas presas comparadas a seu corpo. Este Pokémon tenta intimidar seus inimigos fazendo os pelos de sua cauda se arrepiarem.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mordida",
		obtencao: "Rotas 101, 102, 103, e outras; e Floresta de Petalburg",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/53/261Poochyena_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Poochyena_(Pok%C3%A9mon)",
	},
	{
		nome: "Mightyena",
		numero: 262, // considerando a national dex
		tipo: ["Noturno"],
		massa: 37.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e5/F0262.png",
		estatistica: {
			ps: 70,
			atq: 90,
			def: 70,
			atq_esp: 60,
			def_esp: 60,
			vel: 70,
		},
		descricao:
			"Dá sinais óbvios quando está se preparando para atacar. Começa a rosnar profundamente e então achata seu corpo. Este Pokémon morderá selvagemente com usas presas afiadas e pontudas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mordida",
		obtencao: "Rotas 120, 121, e 123; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/47/262Mightyena_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mightyena_(Pok%C3%A9mon)",
	},
	{
		nome: "Zigzagoon de Hoenn",
		numero: 263.1, // considerando a national dex
		tipo: ["Normal"],
		massa: 17.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/50/F0263.png",
		estatistica: {
			ps: 38,
			atq: 30,
			def: 41,
			atq_esp: 30,
			def_esp: 41,
			vel: 60,
		},
		descricao:
			"Vagueia incansavelmente por todos lugar o tempo todo. Este Pokémon faz isso por ser muito curioso. Ele se interessa por qualquer coisa que veja.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Guaxinim",
		obtencao: "Rotas 101, 102, 103, e outras; e Floresta de Petalburg",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/27/263Zigzagoon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zigzagoon_(Pok%C3%A9mon)",
	},
	{
		nome: "Zigzagoon de Galar",
		numero: 263.2, // considerando a national dex
		tipo: ["Noturno", " Normal"],
		massa: 17.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/50/F0263.png",
		estatistica: {
			ps: 38,
			atq: 30,
			def: 41,
			atq_esp: 30,
			def_esp: 41,
			vel: 60,
		},
		descricao:
			"Sua inquietação o faz correr constantemente por aí. Se ele vir outro Pokémon, irá propositalmente correr para cima dele para começar uma briga.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Guaxinim",
		obtencao: "Rotas 2, e 3; Bridge Field; Giant's Cap; e Stony Wilderness",
		estagio: 1,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/86/263Zigzagoon_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zigzagoon_(Pok%C3%A9mon)",
	},
	{
		nome: "Linoone de Hoenn",
		numero: 264.1, // considerando a national dex
		tipo: ["Normal"],
		massa: 32.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/2f/F0264.png",
		estatistica: {
			ps: 78,
			atq: 70,
			def: 61,
			atq_esp: 50,
			def_esp: 61,
			vel: 100,
		},
		descricao:
			"Sempre corre a toda velocidade e apenas em linhas retas. Quando estiver diante de um obstáculo, faz uma curva em ângulo reto para evitá-lo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Apressado",
		obtencao: "Rotas 118, 119, 120, e outras; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9e/264Linoone_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Linoone_(Pok%C3%A9mon)",
	},
	{
		nome: "Linoone de Galar",
		numero: 264.2, // considerando a national dex
		tipo: ["Noturno", " Normal"],
		massa: 32.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/2f/F0264.png",
		estatistica: {
			ps: 78,
			atq: 70,
			def: 61,
			atq_esp: 50,
			def_esp: 61,
			vel: 100,
		},
		descricao:
			"Usa sua longa língua para provocar oponentes. Uma vez que a oposição esteja enfurecida, este Pokémon se arremessa contra o oponente, derrubado-o com força.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Apressado",
		obtencao:
			"Giant's Cap; Giant's Bed; Bridge Field; Ballimere Lake; e por evolução",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3d/264Linoone_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Linoone_(Pok%C3%A9mon)",
	},
	{
		nome: "Wurmple",
		numero: 265, // considerando a national dex
		tipo: ["Inseto"],
		massa: 3.6, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/1c/F0265.png",
		estatistica: {
			ps: 45,
			atq: 45,
			def: 35,
			atq_esp: 20,
			def_esp: 30,
			vel: 20,
		},
		descricao:
			"Gruda em galhos de árvores e come folhas. O fio que cospe de sua boca, que fica pegajoso ao tocar o ar, retarda o movimento de seus inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Minhoca",
		obtencao: "Rotas 101, 102, e 104; e Floresta de Petalburg",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ef/265Wurmple_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wurmple_(Pok%C3%A9mon)",
	},
	{
		nome: "Silcoon",
		numero: 266, // considerando a national dex
		tipo: ["Inseto"],
		massa: 10.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/56/F0266.png",
		estatistica: {
			ps: 50,
			atq: 35,
			def: 55,
			atq_esp: 25,
			def_esp: 25,
			vel: 15,
		},
		descricao:
			"Acreditava-se que suportava a fome e não consumia nada. No tentando, agora acredita-se que este Pokémon sacia sede bebendo água da chuva que se acumula em sua seda.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Casulo",
		obtencao: "Floresta de Petalburg; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/bc/266Silcoon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Silcoon_(Pok%C3%A9mon)",
	},
	{
		nome: "Beautifly",
		numero: 267, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 28.4, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/21/F0267.png",
		estatistica: {
			ps: 60,
			atq: 70,
			def: 50,
			atq_esp: 90,
			def_esp: 50,
			vel: 65,
		},
		descricao:
			"Sua comida favorita é o doce pólen das flores. Caso queira ver este Pokémon, deixe uma flor em vaso perto de uma janela aberta.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Borboleta",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a7/267Beautifly_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Beautifly_(Pok%C3%A9mon)",
	},
	{
		nome: "Cascoon",
		numero: 268, // considerando a national dex
		tipo: ["Inseto"],
		massa: 11.5, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f9/F0268.png",
		estatistica: {
			ps: 50,
			atq: 35,
			def: 55,
			atq_esp: 25,
			def_esp: 25,
			vel: 15,
		},
		descricao:
			"Caso seja atacado, permanece imóvel, independente do quão grave esteja ferido. Não esquece a dor que suportou.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Casulo",
		obtencao: "Floresta de Petalburg; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5b/268Cascoon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cascoon_(Pok%C3%A9mon)",
	},
	{
		nome: "Dustox",
		numero: 269, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 31.6, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9e/F0269.png",
		estatistica: {
			ps: 60,
			atq: 50,
			def: 70,
			atq_esp: 50,
			def_esp: 90,
			vel: 65,
		},
		descricao:
			"Quando bate suas asas, um pó fino é espalhado. Esse pó é, na verdade, um poderoso veneno que fará até mesmo um lutador profissional doente. Este Pokémon procura por comida usando suas antenas como um radar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mariposa Venenosa",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6a/269Dustox_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dustox_(Pok%C3%A9mon)",
	},
	{
		nome: "Lotad",
		numero: 270, // considerando a national dex
		tipo: ["Água", " Planta"],
		massa: 2.6, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/6f/F0270.png",
		estatistica: {
			ps: 40,
			atq: 30,
			def: 30,
			atq_esp: 40,
			def_esp: 50,
			vel: 30,
		},
		descricao:
			"Este Pokémon vive em lagoas com água limpa. É conhecido por transportar pequenos Pokémon através de lagoas carregando-os na folha larga em sua cabeça.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Erva de Água",
		obtencao: "Rotas 102, e 114",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/86/270Lotad_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lotad_(Pok%C3%A9mon)",
	},
	{
		nome: "Lombre",
		numero: 271, // considerando a national dex
		tipo: ["Água", " Planta"],
		massa: 32.5, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5a/F0271.png",
		estatistica: {
			ps: 60,
			atq: 50,
			def: 50,
			atq_esp: 60,
			def_esp: 70,
			vel: 50,
		},
		descricao:
			"À noite, tem grande prazer em sair dos rios e assustar as pessoas. Se alimenta de musgo aquático que cresce nas pedras do leito do rio.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Contente",
		obtencao: "Rota 114; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e9/271Lombre_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lombre_(Pok%C3%A9mon)",
	},
	{
		nome: "Ludicolo",
		numero: 272, // considerando a national dex
		tipo: ["Água", " Planta"],
		massa: 55.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/52/F0272.png",
		estatistica: {
			ps: 80,
			atq: 70,
			def: 70,
			atq_esp: 90,
			def_esp: 100,
			vel: 70,
		},
		descricao:
			"Ao ouvir um ritmo alegre e otimista, as células de seu corpo se tornam muito energéticas e ativas. Mesmo em batalha, este Pokémon exibirá uma quantidade incrível de poder.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Descuidado",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/30/272Ludicolo_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ludicolo_(Pok%C3%A9mon)",
	},
	{
		nome: "Seedot",
		numero: 273, // considerando a national dex
		tipo: ["Planta"],
		massa: 4.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/22/F0273.png",
		estatistica: {
			ps: 40,
			atq: 40,
			def: 50,
			atq_esp: 30,
			def_esp: 30,
			vel: 30,
		},
		descricao:
			"Este Pokémon se pendura em galho e absorve nutrientes. Quando termina de comer, seu corpo fica tão pesado que ele cai no chão com um baque.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bolota",
		obtencao: "Rotas 102, 114, 117, e outra",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c0/273Seedot_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Seedot_(Pok%C3%A9mon)",
	},
	{
		nome: "Nuzleaf",
		numero: 274, // considerando a national dex
		tipo: ["Planta", " Noturno"],
		massa: 28.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d3/F0274.png",
		estatistica: {
			ps: 70,
			atq: 70,
			def: 40,
			atq_esp: 60,
			def_esp: 40,
			vel: 60,
		},
		descricao:
			"Vive em florestas densamente cobertas de vegetação. Ocasionalmente se aventuram para fora da floresta para assustar as pessoas. Este Pokémon não gosta que seu nariz logo seja beliscado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ardiloso",
		obtencao: "Rota 114; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/bb/274Nuzleaf_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nuzleaf_(Pok%C3%A9mon)",
	},
	{
		nome: "Shiftry",
		numero: 275, // considerando a national dex
		tipo: ["Planta", " Noturno"],
		massa: 59.6, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/db/F0275.png",
		estatistica: {
			ps: 90,
			atq: 100,
			def: 60,
			atq_esp: 90,
			def_esp: 60,
			vel: 80,
		},
		descricao:
			"Dizem que chega em ventos frios e invernais. Temido desde muito tempo como o guardião das florestas, este Pokémon vive em uma floresta profunda onde as pessoas não se aventuram.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Malvado",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/22/275Shiftry_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shiftry_(Pok%C3%A9mon)",
	},
	{
		nome: "Taillow",
		numero: 276, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 2.3, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/10/F0276.png",
		estatistica: {
			ps: 40,
			atq: 55,
			def: 30,
			atq_esp: 30,
			def_esp: 30,
			vel: 85,
		},
		descricao:
			"Apesar de ser pequeno, é muito corajoso. Encara Skarmory maiores em pé de igualdade. Contudo, enfraquece quando está com fome.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pequena Andorinha",
		obtencao: "Rotas 104, 115, e 116; e Floresta de Petalburg",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2c/276Taillow_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Taillow_(Pok%C3%A9mon)",
	},
	{
		nome: "Swellow",
		numero: 277, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 19.8, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/81/F0277.png",
		estatistica: {
			ps: 60,
			atq: 85,
			def: 60,
			atq_esp: 50,
			def_esp: 50,
			vel: 125,
		},
		descricao:
			"Mergulha em cima de uma presa de muito alto. Nunca erra seus alvos. Sobe aos céus em busca de terras com clima quente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gaivota",
		obtencao: "Rota 115; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/50/277Swellow_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Swellow_(Pok%C3%A9mon)",
	},
	{
		nome: "Wingull",
		numero: 278, // considerando a national dex
		tipo: ["Água", " Voador"],
		massa: 9.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/81/F0278.png",
		estatistica: {
			ps: 40,
			atq: 30,
			def: 30,
			atq_esp: 55,
			def_esp: 30,
			vel: 85,
		},
		descricao:
			"Constrói seu ninho em penhasco íngreme na beira do mar. Tem dificuldade em manter suas asas batendo durante o voo. Em vez disso, ele plana em correntes de ar ascendentes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gaivota",
		obtencao: "Rotas 103, 104, 105, e outras; e lado de fora do Monte da Pira",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/10/278Wingull_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wingull_(Pok%C3%A9mon)",
	},
	{
		nome: "Pelipper",
		numero: 279, // considerando a national dex
		tipo: ["Água", " Voador"],
		massa: 28.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/06/F0279.png",
		estatistica: {
			ps: 60,
			atq: 50,
			def: 100,
			atq_esp: 85,
			def_esp: 70,
			vel: 65,
		},
		descricao:
			"Desliza sobre o topo das ondas enquanto voa. Quando avista uma presa, usa seu bico grande paa pegar a vítima com água. Protege seus ovos em seu bico.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro de Água",
		obtencao: "Rotas 103, 104, 105, e outras; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/ff/279Pelipper_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pelipper_(Pok%C3%A9mon)",
	},
	{
		nome: "Ralts",
		numero: 280, // considerando a national dex
		tipo: ["Psíquico", " Fada"],
		massa: 6.6, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e0/F0280.png",
		estatistica: {
			ps: 28,
			atq: 25,
			def: 25,
			atq_esp: 45,
			def_esp: 35,
			vel: 40,
		},
		descricao:
			"Sente as emoções das pessoas usando os chifres em sua cabeça. Este Pokémon raramente aparece para pessoas. Mas quando aparece, se aproxima caso sinta que a pessoa tem uma energia positiva.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sentimento",
		obtencao: "Rota 102",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/53/280Ralts_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ralts_(Pok%C3%A9mon)",
	},
	{
		nome: "Kirlia",
		numero: 281, // considerando a national dex
		tipo: ["Psíquico", " Fada"],
		massa: 20.2, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c1/F0281.png",
		estatistica: {
			ps: 38,
			atq: 35,
			def: 35,
			atq_esp: 65,
			def_esp: 55,
			vel: 50,
		},
		descricao:
			"Usa os chifres em sua cabeça para amplificar seu poder psicocinético. Quando usa seu poder, o ar em sua volta se torna distorcido, criando miragens de cenários não existentes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Emoção",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/51/281Kirlia_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kirlia_(Pok%C3%A9mon)",
	},
	{
		nome: "Gardevoir",
		numero: 282, // considerando a national dex
		tipo: ["Psíquico", " Fada"],
		massa: 48.4, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a0/F0282.png",
		estatistica: {
			ps: 68,
			atq: 65,
			def: 65,
			atq_esp: 125,
			def_esp: 115,
			vel: 80,
		},
		descricao:
			"Possui a habilidade de ver o futuro. Caso sinta perigo iminente ao seu treinador, diz-se que este Pokémon libera sua energia psicocinética com força total.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abraço",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b6/282Gardevoir_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gardevoir_(Pok%C3%A9mon)",
	},
	{
		nome: "Surskit",
		numero: 283, // considerando a national dex
		tipo: ["Inseto", " Água"],
		massa: 1.7, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e7/F0283.png",
		estatistica: {
			ps: 40,
			atq: 30,
			def: 32,
			atq_esp: 50,
			def_esp: 52,
			vel: 65,
		},
		descricao:
			"Das pontas de suas patas, secreta um óleo que o permite andar sobre água como se estivesse patinando. Este Pokémon se alimenta de organismos microscópicos em lagoas e lagos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Patinador",
		obtencao: "Rotas 102, 111, 114, e outras",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b8/283Surskit_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Surskit_(Pok%C3%A9mon)",
	},
	{
		nome: "Masquerain",
		numero: 284, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 3.6, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/be/F0284.png",
		estatistica: {
			ps: 70,
			atq: 60,
			def: 62,
			atq_esp: 80,
			def_esp: 82,
			vel: 60,
		},
		descricao:
			"Intimida inimigos com os padrões semelhantes a olhos em suas antenas. Este Pokémon bate suas quatro asas para voar livremente em qualquer direção, até mesmo para os lados e para trás, como se fosse um helicóptero.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Globo Ocular",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/56/284Masquerain_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Masquerain_(Pok%C3%A9mon)",
	},
	{
		nome: "Shroomish",
		numero: 285, // considerando a national dex
		tipo: ["Planta"],
		massa: 4.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a5/F0285.png",
		estatistica: {
			ps: 60,
			atq: 40,
			def: 60,
			atq_esp: 40,
			def_esp: 60,
			vel: 35,
		},
		descricao:
			"Vive em solo úmido nas profundezas escuras de florestas. São frequentemente encontrados parados sob folhas caídas. Este Pokémon se alimenta de composto feito de folhas caídas e podres.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cogumelo",
		obtencao: "Floresta de Petalburg",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/02/285Shroomish_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shroomish_(Pok%C3%A9mon)",
	},
	{
		nome: "Breloom",
		numero: 286, // considerando a national dex
		tipo: ["Planta", " Lutador"],
		massa: 39.2, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d6/F0286.png",
		estatistica: {
			ps: 60,
			atq: 130,
			def: 80,
			atq_esp: 60,
			def_esp: 60,
			vel: 70,
		},
		descricao:
			"Espalha esporos de buracos no chapéu em sua cabeça. Ama climas quentes e úmidos. Se alimenta de árvores e plantas em campos e florestas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cogumelo",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/70/286Breloom_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Breloom_(Pok%C3%A9mon)",
	},
	{
		nome: "Slakoth",
		numero: 287, // considerando a national dex
		tipo: ["Normal"],
		massa: 24.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/07/F0287.png",
		estatistica: {
			ps: 60,
			atq: 60,
			def: 60,
			atq_esp: 35,
			def_esp: 35,
			vel: 30,
		},
		descricao:
			"Dorme praticamente o dia todo e a noite toda. Não muda seu ninho sua vida inteira, mas algumas vezes viaja grandes distâncias nadando em rios.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mandrião",
		obtencao: "Floresta de Petalburg",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c8/287Slakoth_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Slakoth_(Pok%C3%A9mon)",
	},
	{
		nome: "Vigoroth",
		numero: 288, // considerando a national dex
		tipo: ["Normal"],
		massa: 46.5, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/ce/F0288.png",
		estatistica: {
			ps: 80,
			atq: 80,
			def: 80,
			atq_esp: 55,
			def_esp: 55,
			vel: 90,
		},
		descricao:
			"É simplesmente incapaz de permanecer parado. Mesmo quando tenta dormir, o sangue suas veias se agita, obrigando este Pokémon a correr solto pela selva antes que possa se acalmar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Macaco Selvagem",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9a/288Vigoroth_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vigoroth_(Pok%C3%A9mon)",
	},
	{
		nome: "Slaking",
		numero: 289, // considerando a national dex
		tipo: ["Normal"],
		massa: 130.5, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/2b/F0289.png",
		estatistica: {
			ps: 150,
			atq: 160,
			def: 100,
			atq_esp: 95,
			def_esp: 65,
			vel: 100,
		},
		descricao:
			"Passa todo o dia deitado e relaxando. Come a grama que cresce ao seu alcance. Caso coma toda a grama que puder alcançar, relutantemente se move para outro lugar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Preguiçoso",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4e/289Slaking_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Slaking_(Pok%C3%A9mon)",
	},
	{
		nome: "Nincada",
		numero: 290, // considerando a national dex
		tipo: ["Inseto", " Terra"],
		massa: 5.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/6f/F0290.png",
		estatistica: {
			ps: 31,
			atq: 45,
			def: 90,
			atq_esp: 30,
			def_esp: 30,
			vel: 40,
		},
		descricao:
			"Vive no subsolo por muitos anos em completa escuridão. Este Pokémon absorbe nutrientes das raízes de árvores. Permanece parado como se esperasse por algo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Estagiário",
		obtencao: "Rota 116",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c4/290Nincada_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nincada_(Pok%C3%A9mon)",
	},
	{
		nome: "Ninjask",
		numero: 291, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 12.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/ac/F0291.png",
		estatistica: {
			ps: 61,
			atq: 90,
			def: 45,
			atq_esp: 50,
			def_esp: 50,
			vel: 160,
		},
		descricao:
			"Caso não seja treinado adequadamente, recusará obedecer o treinado e chora continuamente. Por causa disso, é dito que este Pokémon coloca as habilidades do treinador a teste.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ninja",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ee/291Ninjask_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ninjask_(Pok%C3%A9mon)",
	},
	{
		nome: "Shedinja",
		numero: 292, // considerando a national dex
		tipo: ["Inseto", " Fantasma"],
		massa: 1.2, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/16/F0292.png",
		estatistica: {
			ps: 1,
			atq: 90,
			def: 45,
			atq_esp: 30,
			def_esp: 30,
			vel: 40,
		},
		descricao:
			"Seu corpo duro não move, nem mesmo um tique. Na verdade, seu corpo aparenta ser meramente uma casca vazia. Acredita-se que este Pokémon roubará o espírito de qualquer um que espie seu corpo oco pelas costas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Tosado",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a7/292Shedinja_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shedinja_(Pok%C3%A9mon)",
	},
	{
		nome: "Whismur",
		numero: 293, // considerando a national dex
		tipo: ["Normal"],
		massa: 16.3, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/60/F0293.png",
		estatistica: {
			ps: 64,
			atq: 51,
			def: 23,
			atq_esp: 51,
			def_esp: 23,
			vel: 28,
		},
		descricao:
			"Normalmente, sua voz é muito baixa, é quase inaudível mesmo se estiver prestando bastante atenção. Contudo, caso pressinta perigo, começa a chorar em um volume ensurdecedor.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sussurro",
		obtencao: "Rota 116; Gruta do Deserto; Túnel Rusturf; e Estrada da Vitória",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/df/293Whismur_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Whismur_(Pok%C3%A9mon)",
	},
	{
		nome: "Loudred",
		numero: 294, // considerando a national dex
		tipo: ["Normal"],
		massa: 40.5, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f9/F0294.png",
		estatistica: {
			ps: 84,
			atq: 71,
			def: 43,
			atq_esp: 71,
			def_esp: 43,
			vel: 48,
		},
		descricao:
			"Seu berro pode dizimar completamente uma casa de madeira. Ele usa sua voz para punir seus inimigos. As orelhas redondas deste Pokémon servem como alto-falantes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vozeirão",
		obtencao: "Estrada da Vitória; Gruta do Deserto; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/78/294Loudred_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Loudred_(Pok%C3%A9mon)",
	},
	{
		nome: "Exploud",
		numero: 295, // considerando a national dex
		tipo: ["Normal"],
		massa: 84.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/73/F0295.png",
		estatistica: {
			ps: 104,
			atq: 91,
			def: 63,
			atq_esp: 91,
			def_esp: 63,
			vel: 68,
		},
		descricao:
			"Desencadeia terremotos com os tremores que cria ao berrar. Caso este Pokémon inalar violentamente pelas aberturas em seu corpo, é um sinal de que está se preparando para soltar um enorme berro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Barulhão",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/19/295Exploud_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Exploud_(Pok%C3%A9mon)",
	},
	{
		nome: "Makuhita",
		numero: 296, // considerando a national dex
		tipo: ["Lutador"],
		massa: 86.4, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/97/F0296.png",
		estatistica: {
			ps: 72,
			atq: 60,
			def: 30,
			atq_esp: 20,
			def_esp: 30,
			vel: 25,
		},
		descricao:
			"Continuará se levantando e atacando seu inimigo, não importa quantas vezes seja derrubado. Toda vez que se levanta, este Pokémon armazena mais energia em seu corpo para evoluir.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bravura",
		obtencao: "Caverna de Granito; e Estrada da Vitória",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e4/296Makuhita_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Makuhita_(Pok%C3%A9mon)",
	},
	{
		nome: "Hariyama",
		numero: 297, // considerando a national dex
		tipo: ["Lutador"],
		massa: 253.8, // em kg
		altura: 2.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/ed/F0297.png",
		estatistica: {
			ps: 144,
			atq: 120,
			def: 60,
			atq_esp: 40,
			def_esp: 60,
			vel: 50,
		},
		descricao:
			"Seu corpo grosso pode parecer gordo, mas na verdade é um pedaço de músculo sólido. Caso se esforce para contrais todos os seus músculos, seu corpo se torna duro como uma rocha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Propulsão de Braço",
		obtencao: "Estrada da Vitória; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/63/297Hariyama_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hariyama_(Pok%C3%A9mon)",
	},
	{
		nome: "Azurill",
		numero: 298, // considerando a national dex
		tipo: ["Normal", " Fada"],
		massa: 2.0, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/40/F0298.png",
		estatistica: {
			ps: 50,
			atq: 20,
			def: 40,
			atq_esp: 20,
			def_esp: 40,
			vel: 20,
		},
		descricao:
			"Gira sua cauda como se fosse um laço, então a arremessa para longe. O impulso do arremesso também faz seu corpo voar. Usando essa única ação, um desses Pokémon conseguiu se arremessar a uma distância recorde de 10 metros.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Poá",
		obtencao: "Por ovo",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/31/298Azurill_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Azurill_(Pok%C3%A9mon)",
	},
	{
		nome: "Nosepass",
		numero: 299, // considerando a national dex
		tipo: ["Rocha"],
		massa: 97.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f0/F0299.png",
		estatistica: {
			ps: 30,
			atq: 45,
			def: 135,
			atq_esp: 45,
			def_esp: 90,
			vel: 30,
		},
		descricao:
			"Seu nariz magnético está sempre apontando para o norte. Caso dois desses Pokémon se encontrem, não poderão virar o rostos para o outro quando estiverem próximos porque seus narizes magnéticos se repelem.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bússola",
		obtencao: "Caverna de Granito",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5c/299Nosepass_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nosepass_(Pok%C3%A9mon)",
	},
	{
		nome: "Skitty",
		numero: 300, // considerando a national dex
		tipo: ["Normal"],
		massa: 11.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5e/F0300.png",
		estatistica: {
			ps: 50,
			atq: 45,
			def: 45,
			atq_esp: 35,
			def_esp: 35,
			vel: 50,
		},
		descricao:
			"Possui o hábito de se fascinar por objetos em movimento e persegui-los. Este Pokémon é conhecido por perseguir sua própria cauda e ficar tonto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bichano",
		obtencao: "Rota 116",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/37/300Skitty_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Skitty_(Pok%C3%A9mon)",
	},
	{
		nome: "Decaltty",
		numero: 301, // considerando a national dex
		tipo: ["Normal"],
		massa: 32.6, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5b/F0301.png",
		estatistica: {
			ps: 70,
			atq: 65,
			def: 65,
			atq_esp: 55,
			def_esp: 55,
			vel: 70,
		},
		descricao:
			"Prefere viver uma existência irrestrita por conseguir fazer o lhe agrada no seu próprio tempo. Por comer e dormir quando decide, suas rotinas diárias são completamente randômicas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Prim",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2a/301Delcatty_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Delcatty_(Pok%C3%A9mon)",
	},
	{
		nome: "Sableye",
		numero: 302, // considerando a national dex
		tipo: ["Noturno", " Fantasma"],
		massa: 11.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/2d/F0302.png",
		estatistica: {
			ps: 50,
			atq: 75,
			def: 75,
			atq_esp: 65,
			def_esp: 65,
			vel: 50,
		},
		descricao:
			"Levam suas vidas tranquilas nas profundezas das cavernas. São temidos, no entanto, porque acredita-se que roubam os espíritos das pessoas quando seus olhos queimam com um brilho sinistro na escuridão.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escuridão",
		obtencao:
			"Caverna de Granito; Caverna da Origem; Pilar Celeste; e Estrada da Vitória",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ed/302Sableye_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sableye_(Pok%C3%A9mon)",
	},
	{
		nome: "Mawile",
		numero: 303, // considerando a national dex
		tipo: ["Metal", " Fada"],
		massa: 11.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/3f/F0303.png",
		estatistica: {
			ps: 50,
			atq: 85,
			def: 85,
			atq_esp: 55,
			def_esp: 55,
			vel: 50,
		},
		descricao:
			"Não se engane pelo rosto fofo deste Pokémon, é muito perigoso. Este Pokémon engana o adversário para que baixe a guarda e então o morde com suas grandes presas. As presas metálicas são, na verdade, chifres que tem sido transformados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Enganador",
		obtencao:
			"Caverna de Granito; Caverna da Origem; Estrada da Vitória; e Pilar Celeste",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3f/303Mawile_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mawile_(Pok%C3%A9mon)",
	},
	{
		nome: "Aron",
		numero: 304, // considerando a national dex
		tipo: ["Metal", " Rocha"],
		massa: 60.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/59/F0304.png",
		estatistica: {
			ps: 50,
			atq: 70,
			def: 100,
			atq_esp: 40,
			def_esp: 40,
			vel: 30,
		},
		descricao:
			"Este Pokémon possui um corpo de metal. Para construir seu corpo, se alimenta de minério de ferro que escava das montanhas. Ocasionalmente, causa problemas por comer pontes e trilhos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Armadura de Ferro",
		obtencao: "Caverna de Granito; e Estrada da Vitória",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/13/304Aron_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Aron_(Pok%C3%A9mon)",
	},
	{
		nome: "Lairon",
		numero: 305, // considerando a national dex
		tipo: ["Metal", " Rocha"],
		massa: 120.0, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/39/F0305.png",
		estatistica: {
			ps: 60,
			atq: 90,
			def: 140,
			atq_esp: 50,
			def_esp: 50,
			vel: 40,
		},
		descricao:
			"Tempera seu corpo metálico bebendo água mineral altamente nutritiva de nascente até ficar inchado. Este Pokémon faz seu ninho perto de fontes de água deliciosa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Armadura de Ferro",
		obtencao: "Estrada da Vitória; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/09/305Lairon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lairon_(Pok%C3%A9mon)",
	},
	{
		nome: "Aggron",
		numero: 306, // considerando a national dex
		tipo: ["Metal", " Rocha"],
		massa: 360.0, // em kg
		altura: 2.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/0d/F0306.png",
		estatistica: {
			ps: 70,
			atq: 110,
			def: 180,
			atq_esp: 60,
			def_esp: 60,
			vel: 50,
		},
		descricao:
			"Reivindica uma montanha inteira como seu território. Bate impiedosamente em qualquer coisa que viole seu ambiente. Este Pokémon patrulha seu território todo o tempo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Armadura de Ferro",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/69/306Aggron_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Aggron_(Pok%C3%A9mon)",
	},
	{
		nome: "Meditite",
		numero: 307, // considerando a national dex
		tipo: ["Lutador", " Psíquico"],
		massa: 11.2, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/6f/F0307.png",
		estatistica: {
			ps: 30,
			atq: 40,
			def: 55,
			atq_esp: 40,
			def_esp: 55,
			vel: 60,
		},
		descricao:
			"Realiza um treinamento mental rigoroso nas profundezas das montanhas. No entanto, sempre que medita, sempre perde sua concentração e foco. Como resultado, seu treinamento nunca termina.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Meditação",
		obtencao: "Monte da Pira; e Estrada da Vitória",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a2/307Meditite_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Meditite_(Pok%C3%A9mon)",
	},
	{
		nome: "Medicham",
		numero: 308, // considerando a national dex
		tipo: ["Lutador", " Psíquico"],
		massa: 31.5, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a9/F0308.png",
		estatistica: {
			ps: 60,
			atq: 60,
			def: 75,
			atq_esp: 60,
			def_esp: 75,
			vel: 80,
		},
		descricao:
			"Dizem que, por meio de meditação, este Pokémon aumenta a energia dentro de seu corpo e afia seu sexto sentido. Esconde sua presença unindo a si próprio com campos e montanhas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Meditação",
		obtencao: "Estrada da Vitória",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e9/308Medicham_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Medicham_(Pok%C3%A9mon)",
	},
	{
		nome: "Electrike",
		numero: 309, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 15.2, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/85/F0309.png",
		estatistica: {
			ps: 40,
			atq: 45,
			def: 40,
			atq_esp: 65,
			def_esp: 40,
			vel: 65,
		},
		descricao:
			"Armazena eletricidade em seu longo pelo corporal. Este Pokémon estimula seu músculo das pernas com cargas elétricas. Esses choques dão às suas pernas um desempenho de aceleração explosivo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raios",
		obtencao: "Rotas 110, e 118",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a7/309Electrike_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Electrike_(Pok%C3%A9mon)",
	},
	{
		nome: "Manectric",
		numero: 310, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 40.2, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/4f/F0310.png",
		estatistica: {
			ps: 70,
			atq: 75,
			def: 60,
			atq_esp: 105,
			def_esp: 60,
			vel: 105,
		},
		descricao:
			"Descarrega eletricidade constantemente de sua juba. Algumas vezes, as faíscas iniciam incêndios florestais. Quando entra em uma batalha, cria nuvens de tempestade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Descarga",
		obtencao: "Rota 118; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/bb/310Manectric_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Manectric_(Pok%C3%A9mon)",
	},
	{
		nome: "Plusle",
		numero: 311, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 4.2, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/00/F0311.png",
		estatistica: {
			ps: 60,
			atq: 50,
			def: 40,
			atq_esp: 85,
			def_esp: 75,
			vel: 95,
		},
		descricao:
			"Sempre age como um torcedor para seus companheiros. Toda vez que um companheiro de equipe faz um bom esforço na batalha, este Pokémon dá um curto-circuito em seu corpo para criar ruídos de faíscas para mostrar sua alegria.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Aplausos",
		obtencao: "Rota 110",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4a/311Plusle_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Plusle_(Pok%C3%A9mon)",
	},
	{
		nome: "Minun",
		numero: 312, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 4.2, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f5/F0312.png",
		estatistica: {
			ps: 60,
			atq: 40,
			def: 50,
			atq_esp: 75,
			def_esp: 85,
			vel: 95,
		},
		descricao:
			"Está mais preocupado em torcer para seus companheiros do que em sua própria segurança. Este Pokémon dá um curto-circuito em seu corpo para criar faíscas brilhantes torcer por seu companheiros.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Aplausos",
		obtencao: "Rota 110",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/be/312Minun_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Minun_(Pok%C3%A9mon)",
	},
	{
		nome: "Volbeat",
		numero: 313, // considerando a national dex
		tipo: ["Inseto"],
		massa: 17.7, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a4/F0313.png",
		estatistica: {
			ps: 65,
			atq: 73,
			def: 55,
			atq_esp: 47,
			def_esp: 75,
			vel: 85,
		},
		descricao:
			"Com a chegada da noite, emite luz de sua cauda. Sua comunicação com outros se baseia em ajustar a intensidade e o piscar de sua luz.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vaga-lume",
		obtencao: "Rota 117",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0c/313Volbeat_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Volbeat_(Pok%C3%A9mon)",
	},
	{
		nome: "Illumise",
		numero: 314, // considerando a national dex
		tipo: ["Inseto"],
		massa: 17.7, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/31/F0314.png",
		estatistica: {
			ps: 65,
			atq: 47,
			def: 55,
			atq_esp: 73,
			def_esp: 75,
			vel: 85,
		},
		descricao:
			"Um Pokémon noturno que se torna ativo ao cair da noite. Lidera um enxame que desenha padrões no céu escuro. Mais de 200 padrões escuros foram confirmados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vaga-lume",
		obtencao: "Rota 117",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/71/314Illumise_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Illumise_(Pok%C3%A9mon)",
	},
	{
		nome: "Roselia",
		numero: 315, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 2.0, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/be/F0315.png",
		estatistica: {
			ps: 50,
			atq: 60,
			def: 45,
			atq_esp: 100,
			def_esp: 80,
			vel: 65,
		},
		descricao:
			"Atira espinhos afiados como projéteis em qualquer oponente que tente roubar as flores em seus braços. O aroma deste Pokémon traz serenidade aos vivos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espinho",
		obtencao: "Rota 117",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/87/315Roselia_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Roselia_(Pok%C3%A9mon)",
	},
	{
		nome: "Gulpin",
		numero: 316, // considerando a national dex
		tipo: ["Veneno"],
		massa: 10.3, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/07/F0316.png",
		estatistica: {
			ps: 70,
			atq: 43,
			def: 53,
			atq_esp: 43,
			def_esp: 53,
			vel: 40,
		},
		descricao:
			"Teoricamente, todo seu corpo é seu estomago. Como resultado, consegue engolir algo de seu próprio tamanho. O estomago deste Pokémon contém um fluido especial que digere qualquer coisa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Estômago",
		obtencao: "Rota 110",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/8e/316Gulpin_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gulpin_(Pok%C3%A9mon)",
	},
	{
		nome: "Swalot",
		numero: 317, // considerando a national dex
		tipo: ["Veneno"],
		massa: 80.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/83/F0317.png",
		estatistica: {
			ps: 100,
			atq: 73,
			def: 83,
			atq_esp: 73,
			def_esp: 83,
			vel: 55,
		},
		descricao:
			"Quando localiza uma presa, expele um fluido terrivelmente tóxico de seus poros e pulveriza o alvo. Uma vez que a presa tenha enfraquecido, este Pokémon a engole inteira com sua boca cavernosa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Saco de Veneno",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6c/317Swalot_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Swalot_(Pok%C3%A9mon)",
	},
	{
		nome: "Carvanha",
		numero: 318, // considerando a national dex
		tipo: ["Água", " Noturno"],
		massa: 20.8, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/2a/F0318.png",
		estatistica: {
			ps: 45,
			atq: 90,
			def: 20,
			atq_esp: 65,
			def_esp: 20,
			vel: 65,
		},
		descricao:
			"Suas mandíbulas fortemente desenvolvidas e suas pontiagudas e afiadas têm o poder destrutivo de arrancar cascos de barcos. Muitos barcos foram atacados e afundados por este Pokémon.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Selvagem",
		obtencao: "Rotas 118, e 119",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/50/318Carvanha_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Carvanha_(Pok%C3%A9mon)",
	},
	{
		nome: "Sharpedo",
		numero: 319, // considerando a national dex
		tipo: ["Água", " Noturno"],
		massa: 88.8, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d8/F0319.png",
		estatistica: {
			ps: 70,
			atq: 120,
			def: 40,
			atq_esp: 95,
			def_esp: 40,
			vel: 95,
		},
		descricao:
			"Apelidado de 'o valentão dos mares', este Pokémon é amplamente temido. Suas cruéis presas crescem de volta imediatamente após quebrarem. Apenas um desses Pokémon pode destruir completamente um superpetroleiro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Brutal",
		obtencao: "Rotas 103, 118, 122, e outras",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2f/319Sharpedo_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sharpedo_(Pok%C3%A9mon)",
	},
	{
		nome: "Wailmer",
		numero: 320, // considerando a national dex
		tipo: ["Água"],
		massa: 130.0, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/6c/F0320.png",
		estatistica: {
			ps: 130,
			atq: 70,
			def: 35,
			atq_esp: 70,
			def_esp: 35,
			vel: 60,
		},
		descricao:
			"Suas narinas são localizadas acima de seus olhos. Este Pokémon brincalhão gosta de assustar as pessoas expelindo com força a água do mar que armazena dentro do corpo pelas narinas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Baleia Esférica",
		obtencao:
			"Rotas 103, 105, 106, e outras; Caverna do Fundo do Mar; e Gruta Cardume",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/85/320Wailmer_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wailmer_(Pok%C3%A9mon)",
	},
	{
		nome: "Wailord",
		numero: 321, // considerando a national dex
		tipo: ["Água"],
		massa: 398.0, // em kg
		altura: 14.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/81/F0321.png",
		estatistica: {
			ps: 170,
			atq: 90,
			def: 45,
			atq_esp: 90,
			def_esp: 45,
			vel: 60,
		},
		descricao:
			"É o maior de todos Pokémon identificados até agora. Este Pokémon gigante nada languidamente no vasto mar aberto, comendo quantidades gigantescas de comida de uma vez com sua boca enorme.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Baleia Flutuante",
		obtencao: "Rota 129; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/66/321Wailord_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wailord_(Pok%C3%A9mon)",
	},
	{
		nome: "Numel",
		numero: 322, // considerando a national dex
		tipo: ["Fogo", " Terra"],
		massa: 24.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/2c/F0322.png",
		estatistica: {
			ps: 60,
			atq: 60,
			def: 40,
			atq_esp: 65,
			def_esp: 45,
			vel: 35,
		},
		descricao:
			"Armazena magma de quase 1'200° Celsius dentro de seu corpo. Caso se molhe, o magma esfria e endurece. Nesse caso, o corpo do Pokémon aumenta de peso e seus movimentos se tornam lentos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dormente",
		obtencao: "Rota 112; Caminho Ardente; e Passo Pontudo",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4a/322Numel_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Numel_(Pok%C3%A9mon)",
	},
	{
		nome: "Camerupt",
		numero: 323, // considerando a national dex
		tipo: ["Fogo", " Terra"],
		massa: 220.0, // em kg
		altura: 1.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/44/F0323.png",
		estatistica: {
			ps: 70,
			atq: 100,
			def: 70,
			atq_esp: 105,
			def_esp: 75,
			vel: 40,
		},
		descricao:
			"Possui um vulcão dentro de seu corpo. Magma de 10'000° Celsius percorre seu corpo. Ocasionalmente, as saliências em suas costas entram em erupção, expelindo magma superaquecido.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Erupção",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0e/323Camerupt_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Camerupt_(Pok%C3%A9mon)",
	},
	{
		nome: "Torkoal",
		numero: 324, // considerando a national dex
		tipo: ["Fogo"],
		massa: 80.4, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/1e/F0324.png",
		estatistica: {
			ps: 70,
			atq: 85,
			def: 140,
			atq_esp: 85,
			def_esp: 70,
			vel: 20,
		},
		descricao:
			"Cava pelas montanhas em procura de carvão. Caso encontre algum, preenche o espaço oco em seu casco com carvão e o queima. Caso seja atacado, este Pokémon solta uma fumaça preta e espessa para bater em retirada.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Carvão",
		obtencao: "Caminho Ardente; e Esconderijo Magma",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/15/324Torkoal_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Torkoal_(Pok%C3%A9mon)",
	},
	{
		nome: "Spoink",
		numero: 325, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 30.6, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d5/F0325.png",
		estatistica: {
			ps: 60,
			atq: 25,
			def: 35,
			atq_esp: 70,
			def_esp: 80,
			vel: 60,
		},
		descricao:
			"Mantém uma pérola no topo de sua cabeça. A pérola tem o propósito de amplificar os poderes psicocinéticos deste Pokémon. Portanto, está em procura constante por uma pérola maior.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ricochete",
		obtencao: "Passo Pontudo",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/81/325Spoink_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Spoink_(Pok%C3%A9mon)",
	},
	{
		nome: "Grumpig",
		numero: 326, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 71.5, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/ec/F0326.png",
		estatistica: {
			ps: 80,
			atq: 45,
			def: 65,
			atq_esp: 90,
			def_esp: 110,
			vel: 80,
		},
		descricao:
			"Usa as pérolas negras em seu corpo para amplificar suas ondas psíquicas e obter controle total sobre seu inimigo. Quando usa seu poder especial, sua respiração ofegante torna-se difícil.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Manipulação",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/8a/326Grumpig_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Grumpig_(Pok%C3%A9mon)",
	},
	{
		nome: "Spinda",
		numero: 327, // considerando a national dex
		tipo: ["Normal"],
		massa: 5.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/67/F0327.png",
		estatistica: {
			ps: 60,
			atq: 60,
			def: 60,
			atq_esp: 60,
			def_esp: 60,
			vel: 60,
		},
		descricao:
			"É dito que cada indivíduo de sua espécie possui padrões de manchas totalmente únicos. Os passos trêmulos e cambaleantes deste Pokémon dão a ele aparência de uma dança.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Panda Manchado",
		obtencao: "Rota 113",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6b/327Spinda_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Spinda_(Pok%C3%A9mon)",
	},
	{
		nome: "Trapinch",
		numero: 328, // considerando a national dex
		tipo: ["Terra"],
		massa: 15.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/3f/F0328.png",
		estatistica: {
			ps: 45,
			atq: 100,
			def: 45,
			atq_esp: 45,
			def_esp: 45,
			vel: 10,
		},
		descricao:
			"É um caçador paciente. Cava um buraco inescapável em um deserto e espera que sua presa caia. Pode passar uma semana inteira sem acesso a água.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Formigueiro",
		obtencao: "Rota 111; e Torre Miragem",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/ae/328Trapinch_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Trapinch_(Pok%C3%A9mon)",
	},
	{
		nome: "Vibrava",
		numero: 329, // considerando a national dex
		tipo: ["Terra", " Dragão"],
		massa: 15.3, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/38/F0329.png",
		estatistica: {
			ps: 50,
			atq: 70,
			def: 50,
			atq_esp: 50,
			def_esp: 50,
			vel: 70,
		},
		descricao:
			"Suas asas ainda não completaram o processo de crescimento. Ao invés de voar longas distâncias, são mais úteis criando ondas ultrassônicas pela vibração.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vibração",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/51/329Vibrava_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vibrava_(Pok%C3%A9mon)",
	},
	{
		nome: "Flygon",
		numero: 330, // considerando a national dex
		tipo: ["Terra", " Dragão"],
		massa: 82.0, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f4/F0330.png",
		estatistica: {
			ps: 80,
			atq: 100,
			def: 80,
			atq_esp: 80,
			def_esp: 80,
			vel: 100,
		},
		descricao:
			"É apelidado de 'o espírito elemental do deserto'. Como suas asas batendo levantam uma nuvem de areia, este Pokémon está sempre envolto em uma tempestade areia enquanto voa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Místico",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a8/330Flygon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Flygon_(Pok%C3%A9mon)",
	},
	{
		nome: "Cacnea",
		numero: 331, // considerando a national dex
		tipo: ["Planta"],
		massa: 51.3, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fa/F0331.png",
		estatistica: {
			ps: 50,
			atq: 85,
			def: 40,
			atq_esp: 85,
			def_esp: 40,
			vel: 35,
		},
		descricao:
			"Vive em locais áridos como desertos. Libera um forte aroma de sua flor para atrair presa. Quando a presa se aproxima, este Pokémon atira espinhos afiados de seu corpo para abater a vítima.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cacto",
		obtencao: "Rota 111",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/ff/331Cacnea_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cacnea_(Pok%C3%A9mon)",
	},
	{
		nome: "Cacturne",
		numero: 332, // considerando a national dex
		tipo: ["Planta", " Noturno"],
		massa: 77.4, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/1b/F0332.png",
		estatistica: {
			ps: 70,
			atq: 115,
			def: 60,
			atq_esp: 115,
			def_esp: 60,
			vel: 55,
		},
		descricao:
			"Durante o dia, este Pokémon permanece imóvel para que não perca umidade para o forte sol do deserto. Este Pokémon se torna ativo durante a noite quando a temperatura cai.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espantalho",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/26/332Cacturne_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cacturne_(Pok%C3%A9mon)",
	},
	{
		nome: "Swablu",
		numero: 333, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 1.2, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/21/F0333.png",
		estatistica: {
			ps: 45,
			atq: 40,
			def: 60,
			atq_esp: 40,
			def_esp: 75,
			vel: 50,
		},
		descricao:
			"Possui asas leves e fofas que são como nuvens de algodão. Este Pokémon não se assusta com pessoas. Aterrissa em cabeças de pessoas e senta como um chapéu de algodão fofo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro de Algodão",
		obtencao: "Rotas 114, e 115",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a1/333Swablu_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Swablu_(Pok%C3%A9mon)",
	},
	{
		nome: "Altaria",
		numero: 334, // considerando a national dex
		tipo: ["Dragão", " Voador"],
		massa: 20.6, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/89/F0334.png",
		estatistica: {
			ps: 75,
			atq: 70,
			def: 90,
			atq_esp: 70,
			def_esp: 105,
			vel: 80,
		},
		descricao:
			"Dança e gira pelo céu entre nuvens ondulantes, como algodão. Ao cantar melodias com sua voz cristalina, este Pokémon faz seus ouvintes experimentarem maravilhas oníricas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Canto",
		obtencao: "Pilar Celeste; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e1/334Altaria_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Altaria_(Pok%C3%A9mon)",
	},
	{
		nome: "Zangoose",
		numero: 335, // considerando a national dex
		tipo: ["Normal"],
		massa: 40.3, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/00/F0335.png",
		estatistica: {
			ps: 73,
			atq: 115,
			def: 60,
			atq_esp: 60,
			def_esp: 60,
			vel: 90,
		},
		descricao:
			"Quando batalha, fica em pé sobre as patas traseiras e ataca com as patas dianteiras com garras afiadas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Furão",
		obtencao: "Rota 114",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/03/335Zangoose_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zangoose_(Pok%C3%A9mon)",
	},
	{
		nome: "Seviper",
		numero: 336, // considerando a national dex
		tipo: ["Veneno"],
		massa: 52.5, // em kg
		altura: 2.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/cf/F0336.png",
		estatistica: {
			ps: 73,
			atq: 100,
			def: 60,
			atq_esp: 100,
			def_esp: 60,
			vel: 65,
		},
		descricao:
			"Sua cauda em forma de espada serve a dois propósitos, corta os inimigos e os encharca com veneno secretado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Serpente com Presas",
		obtencao: "Rota 114",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/03/336Seviper_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Seviper_(Pok%C3%A9mon)",
	},
	{
		nome: "Lunatone",
		numero: 337, // considerando a national dex
		tipo: ["Rocha", " Psíquico"],
		massa: 168.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c1/F0337.png",
		estatistica: {
			ps: 70,
			atq: 55,
			def: 65,
			atq_esp: 95,
			def_esp: 85,
			vel: 70,
		},
		descricao:
			"Foi descoberto em um local onde um meteorito caiu. Como resultado, algumas pessoas teorizam que esse Pokémon veio do espaço. Contudo, ninguém conseguiu provar essa teoria.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Meteorito",
		obtencao: "Cachoeira do Meteoro",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/10/337Lunatone_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lunatone_(Pok%C3%A9mon)",
	},
	{
		nome: "Solrock",
		numero: 338, // considerando a national dex
		tipo: ["Rocha", " Psíquico"],
		massa: 154.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/7b/F0338.png",
		estatistica: {
			ps: 70,
			atq: 95,
			def: 85,
			atq_esp: 55,
			def_esp: 65,
			vel: 70,
		},
		descricao:
			"É uma nova espécie de Pokémon que dizem ter caído do espaço. Flutua no ar e se move silenciosamente. Em batalha, este Pokémon libera luz que brilha intensamente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Meteorito",
		obtencao: "Cachoeira do Meteoro",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7f/338Solrock_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Solrock_(Pok%C3%A9mon)",
	},
	{
		nome: "Barboach",
		numero: 339, // considerando a national dex
		tipo: ["Água", " Terra"],
		massa: 1.9, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/da/F0339.png",
		estatistica: {
			ps: 50,
			atq: 48,
			def: 43,
			atq_esp: 46,
			def_esp: 41,
			vel: 60,
		},
		descricao:
			"Seus bigodes sensíveis servem como um excelente sistema de radar. Esse Pokémon se esconde em lama, deixando somente seus dois bigodes expostos enquanto espera pela presa chegar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bigodudo",
		obtencao:
			"Rotas 111, 114, e 120; Cachoeira do Meteoro; e Estrada da Vitória",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/00/339Barboach_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Barboach_(Pok%C3%A9mon)",
	},
	{
		nome: "Whishcash",
		numero: 340, // considerando a national dex
		tipo: ["Água", " Terra"],
		massa: 23.6, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/6b/F0340.png",
		estatistica: {
			ps: 110,
			atq: 78,
			def: 73,
			atq_esp: 76,
			def_esp: 71,
			vel: 60,
		},
		descricao:
			"É extremamente territorialista. Só um destes Pokémon reivindicará um grande lago como seu território exclusivo. Se um inimigo se aproxima, se debate e desencadeia um grade terremoto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bigodudo",
		obtencao: "Cachoeira do Meteoro; Estrada da Vitória; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/af/340Whiscash_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Whiscash_(Pok%C3%A9mon)",
	},
	{
		nome: "Corphish",
		numero: 341, // considerando a national dex
		tipo: ["Água"],
		massa: 11.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/65/F0341.png",
		estatistica: {
			ps: 43,
			atq: 80,
			def: 65,
			atq_esp: 50,
			def_esp: 35,
			vel: 35,
		},
		descricao:
			"Era originalmente um Pokémon estrangeiro que foi importado como animal doméstico. Acabaram aparecendo na natureza. Este Pokémon é muito resistente e aumentou muito sua população.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Baderneiro",
		obtencao: "Rotas 102, e 117",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/43/341Corphish_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Corphish_(Pok%C3%A9mon)",
	},
	{
		nome: "Crawdaunt",
		numero: 342, // considerando a national dex
		tipo: ["Água", " Noturno"],
		massa: 32.8, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f5/F0342.png",
		estatistica: {
			ps: 63,
			atq: 120,
			def: 85,
			atq_esp: 90,
			def_esp: 55,
			vel: 55,
		},
		descricao:
			"Possui uma natureza extremamente violenta que o obriga a desafiar outros seres vivos para batalha. Outras formas de vida se recusam a viver em lagoas habitadas por este Pokémon, tornando-as lugares desolados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Patife",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/92/342Crawdaunt_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Crawdaunt_(Pok%C3%A9mon)",
	},
	{
		nome: "Baltoy",
		numero: 343, // considerando a national dex
		tipo: ["Terra", " Psíquico"],
		massa: 21.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/bf/F0343.png",
		estatistica: {
			ps: 40,
			atq: 40,
			def: 55,
			atq_esp: 40,
			def_esp: 70,
			vel: 55,
		},
		descricao:
			"Este Pokémon se move enquanto gira em seu único pé. Pinturas de parede primitivas retratando este Pokémon vivendo entre as pessoas foram descobertas em algumas ruínas antigas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Boneco de Argila",
		obtencao: "Rota 111",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/28/343Baltoy_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Baltoy_(Pok%C3%A9mon)",
	},
	{
		nome: "Claydol",
		numero: 344, // considerando a national dex
		tipo: ["Terra", " Psíquico"],
		massa: 108.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e9/F0344.png",
		estatistica: {
			ps: 60,
			atq: 70,
			def: 105,
			atq_esp: 70,
			def_esp: 120,
			vel: 75,
		},
		descricao:
			"Rumores dizem que são bonecas de lama feitas por humanos primitivos e trazidos a vida pela exposição a um raio misterioso. Este Pokémon se move enquanto levita.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Boneco de Argila",
		obtencao: "Pilar Celeste; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/81/344Claydol_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Claydol_(Pok%C3%A9mon)",
	},
	{
		nome: "Lileep",
		numero: 345, // considerando a national dex
		tipo: ["Rocha", " Planta"],
		massa: 23.8, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/46/F0345.png",
		estatistica: {
			ps: 66,
			atq: 41,
			def: 77,
			atq_esp: 61,
			def_esp: 87,
			vel: 23,
		},
		descricao:
			"É um Pokémon antigo que foi regenerado a partir de um fóssil. Permanece permanentemente ancorado a uma rocha. De seu poleira imóvel, este Pokémon procura atentamente por presas com seus dois olhos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lírio-do-Mar",
		obtencao: "Revivido a partir de fóssil",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f6/345Lileep_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lileep_(Pok%C3%A9mon)",
	},
	{
		nome: "Cradily",
		numero: 346, // considerando a national dex
		tipo: ["Rocha", " Planta"],
		massa: 60.4, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b3/F0346.png",
		estatistica: {
			ps: 86,
			atq: 81,
			def: 97,
			atq_esp: 81,
			def_esp: 107,
			vel: 43,
		},
		descricao:
			"Vagueia pelo fundo do oceano a procura de comida. Este Pokémon estende livremente seu pescoço semelhante a um tronco de árvore e captura presas incautos usando seus oito tentáculos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Percevejo",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/84/346Cradily_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cradily_(Pok%C3%A9mon)",
	},
	{
		nome: "Anorith",
		numero: 347, // considerando a national dex
		tipo: ["Rocha", " Inseto"],
		massa: 12.5, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/7a/F0347.png",
		estatistica: {
			ps: 45,
			atq: 95,
			def: 50,
			atq_esp: 40,
			def_esp: 50,
			vel: 75,
		},
		descricao:
			"É dito ser que é um tipo de predecessor de Pokémon, com oito asas nas laterais do corpo. Este Pokémon nadou no mar primordial ondulando essas oito asas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Camarão",
		obtencao: "Revivido a partir de fóssil",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3c/347Anorith_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Anorith_(Pok%C3%A9mon)",
	},
	{
		nome: "Armaldo",
		numero: 348, // considerando a national dex
		tipo: ["Rocha", " Inseto"],
		massa: 68.2, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/29/F0348.png",
		estatistica: {
			ps: 75,
			atq: 125,
			def: 100,
			atq_esp: 70,
			def_esp: 80,
			vel: 45,
		},
		descricao:
			"Sua armadura dura faz todos os ataques ricochetearem. As duas enormes garras deste Pokémon podem ser estendidas ou contraídas livremente. Tem o poder de perfurar uma laje de aço.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Carapaça",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e3/348Armaldo_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Armaldo_(Pok%C3%A9mon)",
	},
	{
		nome: "Feebas",
		numero: 349, // considerando a national dex
		tipo: ["Água"],
		massa: 7.4, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/3f/F0349.png",
		estatistica: {
			ps: 20,
			atq: 15,
			def: 20,
			atq_esp: 10,
			def_esp: 55,
			vel: 80,
		},
		descricao:
			"Suas barbatanas são esfarrapadas desde o início de sua vida. Por causa de sua aparência de má qualidade, este Pokémon é amplamente ignorado. É capaz de viver tanto em mar quanto em rios.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe",
		obtencao: "Rota 119",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/23/349Feebas_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Feebas_(Pok%C3%A9mon)",
	},
	{
		nome: "Milotic",
		numero: 350, // considerando a national dex
		tipo: ["Água"],
		massa: 162.0, // em kg
		altura: 6.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/ed/F0350.png",
		estatistica: {
			ps: 95,
			atq: 60,
			def: 79,
			atq_esp: 100,
			def_esp: 125,
			vel: 81,
		},
		descricao:
			"Dizem ser um dos Pokémon mais bonitos que existe. Possui o poder de acalmar emoções como raiva e hostilidade para reprimir rixas amargas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Meigo",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f8/350Milotic_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Milotic_(Pok%C3%A9mon)",
	},
	{
		nome: "Castform (Forma Normal)",
		numero: 351.1, // considerando a national dex
		tipo: ["Normal"],
		massa: 0.8, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5a/F0351.png",
		estatistica: {
			ps: 70,
			atq: 70,
			def: 70,
			atq_esp: 70,
			def_esp: 70,
			vel: 70,
		},
		descricao:
			"Sua aparência muda com o clima. Este Pokémon ganhou a habilidade de usar o vasto poder da natureza para proteger minúsculo corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Clima",
		obtencao:
			"Laboratório de Meteorologia; e, durante a batalha, o tempo estar limpo, com neblina, com tempestade de areia, ou com shadowy aura",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/14/351Castform_Normal_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Castform_(Pok%C3%A9mon)",
	},
	{
		nome: "Castform (Forma Ensolarada)",
		numero: 351.2, // considerando a national dex
		tipo: ["Fogo"],
		massa: 0.8, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5a/F0351.png",
		estatistica: {
			ps: 70,
			atq: 70,
			def: 70,
			atq_esp: 70,
			def_esp: 70,
			vel: 70,
		},
		descricao:
			"Sua aparência muda com o clima. Este Pokémon ganhou a habilidade de usar o vasto poder da natureza para proteger minúsculo corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Clima",
		obtencao:
			"Laboratório de Meteorologia; e, durante a batalha, o clima ser de sol forte",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7a/351Castform_Sunny_Form_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Castform_(Pok%C3%A9mon)",
	},
	{
		nome: "Castform (Forma Chuvosa)",
		numero: 351.3, // considerando a national dex
		tipo: ["Água"],
		massa: 0.8, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5a/F0351.png",
		estatistica: {
			ps: 70,
			atq: 70,
			def: 70,
			atq_esp: 70,
			def_esp: 70,
			vel: 70,
		},
		descricao:
			"Sua aparência muda com o clima. Este Pokémon ganhou a habilidade de usar o vasto poder da natureza para proteger minúsculo corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Clima",
		obtencao:
			"Laboratório de Meteorologia; e, durante a batalha, estar chovendo",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b2/351Castform_Rainy_Form_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Castform_(Pok%C3%A9mon)",
	},
	{
		nome: "Castform (Forma Nevada)",
		numero: 351.4, // considerando a national dex
		tipo: ["Gelo"],
		massa: 0.8, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5a/F0351.png",
		estatistica: {
			ps: 70,
			atq: 70,
			def: 70,
			atq_esp: 70,
			def_esp: 70,
			vel: 70,
		},
		descricao:
			"Sua aparência muda com o clima. Este Pokémon ganhou a habilidade de usar o vasto poder da natureza para proteger minúsculo corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Clima",
		obtencao:
			"Laboratório de Meteorologia; e, durante a batalha; estar chovendo granizo",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3d/351Castform_Snowy_Form_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Castform_(Pok%C3%A9mon)",
	},
	{
		nome: "Kecleon",
		numero: 352, // considerando a national dex
		tipo: ["Normal"],
		massa: 22.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/6f/F0352.png",
		estatistica: {
			ps: 60,
			atq: 90,
			def: 70,
			atq_esp: 60,
			def_esp: 120,
			vel: 40,
		},
		descricao:
			"Este Pokémon é capaz de alterar a coloração de seu corpo à vontade para se misturar com os ambiente. Existe uma exceção, não consegue alterar o padrão zigue-zague em sua barriga.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Troca-cor",
		obtencao: "Rotas 118, 119, 120, e outras",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/80/352Kecleon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kecleon_(Pok%C3%A9mon)",
	},
	{
		nome: "Shuppet",
		numero: 353, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 2.3, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/51/F0353.png",
		estatistica: {
			ps: 44,
			atq: 75,
			def: 35,
			atq_esp: 63,
			def_esp: 33,
			vel: 45,
		},
		descricao:
			"Cresce se alimentando de emoções negativas, como vingança e inveja, nos corações das pessoas. Vagueia pelas cidades a procura de rancores que mancham as pessoas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fantoche",
		obtencao: "Rotas 121, e 123; e Monte da Pira",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/74/353Shuppet_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shuppet_(Pok%C3%A9mon)",
	},
	{
		nome: "Banette",
		numero: 354, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 12.5, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8b/F0354.png",
		estatistica: {
			ps: 64,
			atq: 115,
			def: 65,
			atq_esp: 83,
			def_esp: 63,
			vel: 65,
		},
		descricao:
			"Uma energia amaldiçoada permeou o enchimento de uma boneca de pelúcia descartada e esquecida, dando-lhe uma nova vida como este Pokémon. A energia do Pokémon escaparia caso abrisse a boca.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Marionete",
		obtencao: "Pilar Celeste; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/53/354Banette_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Banette_(Pok%C3%A9mon)",
	},
	{
		nome: "Duskull",
		numero: 355, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 15.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d7/F0355.png",
		estatistica: {
			ps: 20,
			atq: 40,
			def: 90,
			atq_esp: 30,
			def_esp: 90,
			vel: 25,
		},
		descricao:
			"Consegue atravessar qualquer parede não importando quão grossa possa ser. Uma vez que escolhe um alvo, persegue obstinadamente a vítima até o amanhecer.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Réquiem",
		obtencao: "Rotas 121, e 123; e Monte da Pira",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/37/355Duskull_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Duskull_(Pok%C3%A9mon)",
	},
	{
		nome: "Dusclops",
		numero: 356, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 30.6, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b0/F0356.png",
		estatistica: {
			ps: 40,
			atq: 70,
			def: 130,
			atq_esp: 60,
			def_esp: 130,
			vel: 25,
		},
		descricao:
			"Seu corpo é completamente oco, não há nada dentro. Dizem que seu corpo é como um buraco negro. Este Pokémon absorverá qualquer coisa em seu corpo, mas jamais retornará.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Aceno",
		obtencao: "Pilar Celeste; e por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c2/356Dusclops_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dusclops_(Pok%C3%A9mon)",
	},
	{
		nome: "Tropius",
		numero: 357, // considerando a national dex
		tipo: ["Planta", " Voador"],
		massa: 100.0, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/6e/F0357.png",
		estatistica: {
			ps: 99,
			atq: 68,
			def: 83,
			atq_esp: 72,
			def_esp: 87,
			vel: 51,
		},
		descricao:
			"Os cachos de frutas ao redor de seu pescoço são muito populares entre as crianças. Este Pokémon gosta de frutas, e come continuamente. Aparentemente, seu gosto por frutas resultou em seu próprio crescimento de frutas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fruta",
		obtencao: "Rota 119",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/fe/357Tropius_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tropius_(Pok%C3%A9mon)",
	},
	{
		nome: "Chimecho",
		numero: 358, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 1.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d3/F0358.png",
		estatistica: {
			ps: 65,
			atq: 50,
			def: 70,
			atq_esp: 95,
			def_esp: 80,
			vel: 65,
		},
		descricao:
			"Faz seus sons ecoarem dentro de seu corpo oco. Quando este Pokémon fica enfurecido, seus sons resultam em ondas ultrassônicas que têm o poder de derrubar os inimigos voando.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mensageiro dos Ventos",
		obtencao: "Monte da Pira",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f0/358Chimecho_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Chimecho_(Pok%C3%A9mon)",
	},
	{
		nome: "Absol",
		numero: 359, // considerando a national dex
		tipo: ["Noturno"],
		massa: 47.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a5/F0359.png",
		estatistica: {
			ps: 65,
			atq: 130,
			def: 60,
			atq_esp: 75,
			def_esp: 60,
			vel: 75,
		},
		descricao:
			"Toda vez que aparece diante das pessoas, é seguido por desastre como um terremoto ou um maremoto. Como resultado, veio a ser conhecido como o Pokémon desastre.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Desastre",
		obtencao: "Rota 120",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/aa/359Absol_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Absol_(Pok%C3%A9mon)",
	},
	{
		nome: "Wynaut",
		numero: 360, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 14.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f5/F0360.png",
		estatistica: {
			ps: 95,
			atq: 23,
			def: 48,
			atq_esp: 23,
			def_esp: 48,
			vel: 23,
		},
		descricao:
			"Sempre pode visto com um grande sorriso feliz no rosto. Olhe para a cauda determinar se está bravo. Quando bravo, este Pokémon baterá no chão com sua cauda.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Brilhante",
		obtencao: "Por ovo; e Ilha Miragem",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/42/360Wynaut_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wynaut_(Pok%C3%A9mon)",
	},
	{
		nome: "Snorunt",
		numero: 361, // considerando a national dex
		tipo: ["Gelo"],
		massa: 16.8, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c3/F0361.png",
		estatistica: {
			ps: 50,
			atq: 50,
			def: 50,
			atq_esp: 50,
			def_esp: 50,
			vel: 50,
		},
		descricao:
			"Vive em regiões com muita neve. Em estações sem neve, como primavera e verão, este Pokémon foge para viver silenciosamente entre estalactites e estalagmites nas profundezas de cavernas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gorro de Neve",
		obtencao: "Gruta Cardume",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/88/361Snorunt_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Snorunt_(Pok%C3%A9mon)",
	},
	{
		nome: "Glalie",
		numero: 362, // considerando a national dex
		tipo: ["Gelo"],
		massa: 256.5, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f4/F0362.png",
		estatistica: {
			ps: 80,
			atq: 80,
			def: 80,
			atq_esp: 80,
			def_esp: 80,
			vel: 80,
		},
		descricao:
			"Possui um corpo feito de rocha, o qual endurece com uma armadura de gelo. Este Pokémon tem a habilidade de congelar umidade na atmosfera em qualquer formato que desejar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rosto",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/dc/362Glalie_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Glalie_(Pok%C3%A9mon)",
	},
	{
		nome: "Spheal",
		numero: 363, // considerando a national dex
		tipo: ["Gelo", " Água"],
		massa: 39.5, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/4e/F0363.png",
		estatistica: {
			ps: 70,
			atq: 40,
			def: 50,
			atq_esp: 55,
			def_esp: 50,
			vel: 25,
		},
		descricao:
			"É muito mais rápido rolando do que caminhando para se locomover. Quando grupos deste Pokémon comem, todos batem palma ao mesmo tempo para mostrar seu prazer. Por causa disso, suas refeições são barulhentas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bater Palmas",
		obtencao: "Gruta Cardume",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/94/363Spheal_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Spheal_(Pok%C3%A9mon)",
	},
	{
		nome: "Sealeo",
		numero: 364, // considerando a national dex
		tipo: ["Gelo", " Água"],
		massa: 87.6, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/08/F0364.png",
		estatistica: {
			ps: 90,
			atq: 60,
			def: 70,
			atq_esp: 75,
			def_esp: 70,
			vel: 45,
		},
		descricao:
			"Tem o hábito de sempre fazer malabarismos na ponta do nariz com qualquer coisa que vê pela primeira vez. Este Pokémon ocasionalmente se diverte equilibrando e rolando um Spheal no nariz.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rolo Bola",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7d/364Sealeo_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sealeo_(Pok%C3%A9mon)",
	},
	{
		nome: "Walrein",
		numero: 365, // considerando a national dex
		tipo: ["Gelo", " Água"],
		massa: 150.6, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/3c/F0365.png",
		estatistica: {
			ps: 110,
			atq: 80,
			def: 90,
			atq_esp: 95,
			def_esp: 90,
			vel: 65,
		},
		descricao:
			"Suas duas presas massivamente desenvolvidas podem destruir totalmente blocos de gelo pesando dez toneladas com um golpe. A espessa camada de gordura deste Pokémon o isola de temperaturas abaixo de zero.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Quebra-gelo",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/83/365Walrein_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Walrein_(Pok%C3%A9mon)",
	},
	{
		nome: "Clamperl",
		numero: 366, // considerando a national dex
		tipo: ["Água"],
		massa: 52.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fc/F0366.png",
		estatistica: {
			ps: 35,
			atq: 64,
			def: 85,
			atq_esp: 74,
			def_esp: 55,
			vel: 32,
		},
		descricao:
			"Sua concha resistente não é boa apenas para proteção, é usada também para prender e capturar presas. A concha deste Pokémon totalmente crescido será marcada com cortes e arranhões por todo o corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bivalve",
		obtencao: "Rotas submersas 124, e 126",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d6/366Clamperl_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Clamperl_(Pok%C3%A9mon)",
	},
	{
		nome: "Huntail",
		numero: 367, // considerando a national dex
		tipo: ["Água"],
		massa: 27.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d5/F0367.png",
		estatistica: {
			ps: 55,
			atq: 104,
			def: 105,
			atq_esp: 94,
			def_esp: 75,
			vel: 52,
		},
		descricao:
			"Sua presença passou despercebida pelas pessoas por um longo tempo por viver em profundidades extremas do mar. Os olhos deste Pokémon podem ver claramente até mesmo nas profundezas escuras e turvas do oceano.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fundo do Mar",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/05/367Huntail_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Huntail_(Pok%C3%A9mon)",
	},
	{
		nome: "Gorebyss",
		numero: 368, // considerando a national dex
		tipo: ["Água"],
		massa: 22.6, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/90/F0368.png",
		estatistica: {
			ps: 55,
			atq: 84,
			def: 105,
			atq_esp: 114,
			def_esp: 75,
			vel: 52,
		},
		descricao:
			"Vive nos mares do sul em profundezas extremas. Seu corpo é construído para suportar a enorme pressão exercida pela água em incríveis profundezas. Por isso, o corpo deste Pokémon não é afetado por ataques comuns.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mar do Sul",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6f/368Gorebyss_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gorebyss_(Pok%C3%A9mon)",
	},
	{
		nome: "Relicanth",
		numero: 369, // considerando a national dex
		tipo: ["Água", " Rocha"],
		massa: 23.4, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/82/F0369.png",
		estatistica: {
			ps: 100,
			atq: 90,
			def: 130,
			atq_esp: 45,
			def_esp: 65,
			vel: 55,
		},
		descricao:
			"Sua espécie viveu por cem milhões de anos sem mudar sua forma. Este antigo Pokémon se alimenta de organismos microscópico com sua boca sem dentes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Longevidade",
		obtencao: "Rotas submersas 124, e 126",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f2/369Relicanth_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Relicanth_(Pok%C3%A9mon)",
	},
	{
		nome: "Luvdisc",
		numero: 370, // considerando a national dex
		tipo: ["Água"],
		massa: 8.7, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8e/F0370.png",
		estatistica: {
			ps: 43,
			atq: 30,
			def: 55,
			atq_esp: 40,
			def_esp: 65,
			vel: 97,
		},
		descricao:
			"Seu corpo do formato de um coração é um símbolo de amor e romance. Dizem que qualquer casal que encontre este Pokémon terá a promessa de um relacionamento amoroso que nunca termina.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Encontro",
		obtencao: "Rota 128",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c5/370Luvdisc_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Luvdisc_(Pok%C3%A9mon)",
	},
	{
		nome: "Bagon",
		numero: 371, // considerando a national dex
		tipo: ["Dragão"],
		massa: 42.1, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/12/F0371.png",
		estatistica: {
			ps: 45,
			atq: 75,
			def: 60,
			atq_esp: 40,
			def_esp: 30,
			vel: 50,
		},
		descricao:
			"Tem um sonho de algum dia voar alto no céu. Em seus esforços condenados de voo, este Pokémon se atira de penhascos. Como resultado de seus mergulhos sua cabeça ficou e tão resistente quanto aço temperado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cabeça de Pedra",
		obtencao: "Cachoeira do Meteoro",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/49/371Bagon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bagon_(Pok%C3%A9mon)",
	},
	{
		nome: "Shelgon",
		numero: 372, // considerando a national dex
		tipo: ["Dragão"],
		massa: 110.5, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/70/F0372.png",
		estatistica: {
			ps: 65,
			atq: 95,
			def: 100,
			atq_esp: 60,
			def_esp: 50,
			vel: 50,
		},
		descricao:
			"Dentro de seu casco, que se assemelha a uma armadura, células estão em meio à transformação ara criar um corpo inteiramente novo. O casco deste Pokémon é extremamente pesado, tornando seus movimentos lentos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Resistência",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/40/372Shelgon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shelgon_(Pok%C3%A9mon)",
	},
	{
		nome: "Salamance",
		numero: 373, // considerando a national dex
		tipo: ["Dragão", " Voador"],
		massa: 102.6, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/cf/F0373.png",
		estatistica: {
			ps: 95,
			atq: 135,
			def: 80,
			atq_esp: 110,
			def_esp: 80,
			vel: 100,
		},
		descricao:
			"Depois de vários anos, sua estrutura celular sofreu uma mutação repentina de crescimento de asas. Quando irritado, perde todo o raciocínio e o controle.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/fb/373Salamence_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Salamence_(Pok%C3%A9mon)",
	},
	{
		nome: "Beldum",
		numero: 374, // considerando a national dex
		tipo: ["Metal", " Psíquico"],
		massa: 95.2, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/81/F0374.png",
		estatistica: {
			ps: 40,
			atq: 55,
			def: 80,
			atq_esp: 35,
			def_esp: 60,
			vel: 30,
		},
		descricao:
			"Ao invés de sangue, uma poderosa força magnética corre pelo seu corpo. Este Pokémon se comunica com outros enviando pulsos controlados de magnetismo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bola de Ferro",
		obtencao: "Recebido na Cidade de Mossdeep",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4e/374Beldum_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Beldum_(Pok%C3%A9mon)",
	},
	{
		nome: "Metang",
		numero: 375, // considerando a national dex
		tipo: ["Metal", " Psíquico"],
		massa: 202.5, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/4f/F0375.png",
		estatistica: {
			ps: 60,
			atq: 75,
			def: 100,
			atq_esp: 55,
			def_esp: 80,
			vel: 50,
		},
		descricao:
			"As garras que inclinam seus braços têm o poder destrutivo de rasgar grossas folhas de ferro como se fossem seda. Voa a mais de 100 quilômetros por hora.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Garra de Ferro",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3a/375Metang_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Metang_(Pok%C3%A9mon)",
	},
	{
		nome: "Metagross",
		numero: 376, // considerando a national dex
		tipo: ["Metal", " Psíquico"],
		massa: 550.0, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fb/F0376.png",
		estatistica: {
			ps: 80,
			atq: 135,
			def: 130,
			atq_esp: 95,
			def_esp: 90,
			vel: 70,
		},
		descricao:
			"Possui quatro cérebros no total. Cominados, os quatro cérebros conseguem passar por cálculos difíceis mais rápido que um supercomputador. Este Pokémon consegue flutuar no ar dobrando suas quatro pernas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Perna de Ferro",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5c/376Metagross_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Metagross_(Pok%C3%A9mon)",
	},
	{
		nome: "Regirock",
		numero: 377, // considerando a national dex
		tipo: ["Rocha"],
		massa: 230.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/64/F0377.png",
		estatistica: {
			ps: 80,
			atq: 100,
			def: 200,
			atq_esp: 50,
			def_esp: 100,
			vel: 50,
		},
		descricao:
			"Foi selado por pessoas há muito tempo. É dito que, caso o corpo deste Pokémon seja danificado em batalha, buscará por rochas adequadas para se reparar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pico de Rocha",
		obtencao: "Ruínas do Deserto",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b2/377Regirock_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Regirock_(Pok%C3%A9mon)",
	},
	{
		nome: "Regice",
		numero: 378, // considerando a national dex
		tipo: ["Gelo"],
		massa: 175.0, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/1a/F0378.png",
		estatistica: {
			ps: 80,
			atq: 50,
			def: 100,
			atq_esp: 100,
			def_esp: 200,
			vel: 50,
		},
		descricao:
			"Seu corpo foi feito durante uma era glacial. O corpo profundamente congelado não pode ser derretido, nem mesmo por fogo. Este Pokémon controla ar gelado de -200° Celsius.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Iceberg",
		obtencao: "Gruta Insular",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/58/378Regice_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Regice_(Pok%C3%A9mon)",
	},
	{
		nome: "Registeel",
		numero: 379, // considerando a national dex
		tipo: ["Metal"],
		massa: 205.0, // em kg
		altura: 1.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a5/F0379.png",
		estatistica: {
			ps: 80,
			atq: 75,
			def: 150,
			atq_esp: 75,
			def_esp: 150,
			vel: 50,
		},
		descricao:
			"Possui um corpo mais duro que qualquer tipo de metal. Seu corpo é aparentemente oco. Ninguém tem ideia do que este Pokémon come.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ferro",
		obtencao: "Tumba Antiga",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/51/379Registeel_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Registeel_(Pok%C3%A9mon)",
	},
	{
		nome: "Latias",
		numero: 380, // considerando a national dex
		tipo: ["Dragão", " Psíquico"],
		massa: 40.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9c/F0380.png",
		estatistica: {
			ps: 80,
			atq: 80,
			def: 90,
			atq_esp: 110,
			def_esp: 130,
			vel: 110,
		},
		descricao:
			"É altamente sensível às emoções de pessoas. Caso sinta qualquer hostilidade, este Pokémon eriça as penas de todo o corpo e grita estridentemente para intimidar o inimigo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Eternidade",
		obtencao: "Ilha Sul; ou Vagando por Hoenn",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9f/380Latias_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Latias_(Pok%C3%A9mon)",
	},
	{
		nome: "Latios",
		numero: 381, // considerando a national dex
		tipo: ["Dragão", " Psíquico"],
		massa: 60.0, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/4f/F0381.png",
		estatistica: {
			ps: 80,
			atq: 90,
			def: 80,
			atq_esp: 130,
			def_esp: 110,
			vel: 110,
		},
		descricao:
			"Possui a habilidade de fazer seu oponente ver uma imagem do que tem visto ou imagina em sua cabeça. Este Pokémon é inteligente e entende a fala humana.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Eternidade",
		obtencao: "Ilha Sul; ou Vagando por Hoenn",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/86/381Latios_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Latios_(Pok%C3%A9mon)",
	},
	{
		nome: "Kyogre",
		numero: 382, // considerando a national dex
		tipo: ["Água"],
		massa: 352.0, // em kg
		altura: 4.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/39/F0382.png",
		estatistica: {
			ps: 100,
			atq: 100,
			def: 90,
			atq_esp: 150,
			def_esp: 140,
			vel: 90,
		},
		descricao:
			"Tem o poder de criar enormes nuvens de chuva que cobrem inteiramente o céu e provocam precipitações torrenciais. Este Pokémon salvou pessoas que sofriam de secas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bacia Marinha",
		obtencao: "Caverna da Origem; ou Caverna Marinha",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/dc/382Kyogre_Dream_5.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kyogre_(Pok%C3%A9mon)",
	},
	{
		nome: "Groudon",
		numero: 383, // considerando a national dex
		tipo: ["Terra"],
		massa: 950.0, // em kg
		altura: 3.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a8/F0383.png",
		estatistica: {
			ps: 100,
			atq: 150,
			def: 140,
			atq_esp: 100,
			def_esp: 90,
			vel: 90,
		},
		descricao:
			"Tem o poder de dispersar nuvens de chuva e fazer água evaporar com luz e calor. Veio como um salvador para as pessoas que estavam sofrendo de enchentes terríveis.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Continente",
		obtencao: "Caverna da Origem; ou Caverna Terrena",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/15/383Groudon_Dream_5.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Groudon_(Pok%C3%A9mon)",
	},
	{
		nome: "Rayquaza",
		numero: 384, // considerando a national dex
		tipo: ["Dragão", " Voador"],
		massa: 206.5, // em kg
		altura: 7.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/01/F0384.png",
		estatistica: {
			ps: 105,
			atq: 150,
			def: 90,
			atq_esp: 150,
			def_esp: 90,
			vel: 95,
		},
		descricao:
			"Viveu por centenas de milhões de anos na camada de ozônio da Terra, nunca descendo para o chão. Sua existência tem sido completamente desconhecida por viver tão alto no céu.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Celeste",
		obtencao: "Pilar Celeste",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b3/384Rayquaza_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rayquaza_(Pok%C3%A9mon)",
	},
	{
		nome: "Jirachi",
		numero: 385, // considerando a national dex
		tipo: ["Metal", " Psíquico"],
		massa: 1.1, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fd/F0385.png",
		estatistica: {
			ps: 100,
			atq: 100,
			def: 100,
			atq_esp: 100,
			def_esp: 100,
			vel: 100,
		},
		descricao:
			"Uma lenda afirma que este Pokémon realizará qualquer desejo escrito em notas presas à sua cabeça quando acordar. Caso este Pokémon sinta perigo, lutará sem acordar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Desejo",
		obtencao: "Por evento",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/fc/385Jirachi_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Jirachi_(Pok%C3%A9mon)",
	},
	{
		nome: "Deoxys (Forma Normal)",
		numero: 386.1, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 60.8, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/29/F0386.png",
		estatistica: {
			ps: 50,
			atq: 150,
			def: 50,
			atq_esp: 150,
			def_esp: 50,
			vel: 150,
		},
		descricao:
			"O DNA de um vírus espacial sofreu uma mutação repentina ao ser exposto a um raio laser e resultou neste Pokémon. O órgão cristalino no peito deste Pokémon aparenta ser seu cérebro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon DNA",
		obtencao: "Ilha da Origem",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/8b/386Deoxys_Normal_Forme_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pok%C3%A9mon)",
	},
	{
		nome: "Deoxys (Forma Ataque)",
		numero: 386.2, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 60.8, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/29/F0386.png",
		estatistica: {
			ps: 50,
			atq: 180,
			def: 20,
			atq_esp: 180,
			def_esp: 20,
			vel: 150,
		},
		descricao:
			"Este Pokémon se transformou em seu disfarce agressivo. Pode enganar inimigos alterado sua aparência.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon DNA",
		obtencao: "Ilha da Origem",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1f/386Deoxys_Attack_Forme_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pok%C3%A9mon)",
	},
	{
		nome: "Deoxys (Forma Defesa)",
		numero: 386.3, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 60.8, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/29/F0386.png",
		estatistica: {
			ps: 50,
			atq: 70,
			def: 160,
			atq_esp: 70,
			def_esp: 160,
			vel: 90,
		},
		descricao:
			"Quando muda de forma, uma aurora aparece. Absorve ataque alterando sua estrutura molecular.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon DNA",
		obtencao: "Ilha da Origem",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b9/386Deoxys_Defense_Forme_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pok%C3%A9mon)",
	},
	{
		nome: "Deoxys (Forma Velocidade)",
		numero: 386.4, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 60.8, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/29/F0386.png",
		estatistica: {
			ps: 50,
			atq: 95,
			def: 90,
			atq_esp: 95,
			def_esp: 90,
			vel: 180,
		},
		descricao:
			"Um Pokémon que sofreu mutação de um vírus extraterrestre exposto a um raio lase. Seu corpo é configurado para agilidade e velocidade superiores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon DNA",
		obtencao: "Ilha da Origem",
		estagio: 1,
		geracao: 3, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/28/386Deoxys_Speed_Forme_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pok%C3%A9mon)",
	},
	{
		nome: "Turtwig",
		numero: 387, // considerando a national dex
		tipo: ["Planta"],
		massa: 10.2, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/47/F0387.png",
		estatistica: {
			ps: 55,
			atq: 68,
			def: 64,
			atq_esp: 45,
			def_esp: 55,
			vel: 31,
		},
		descricao:
			"Feito de solo, o casco em suas costas endurece quando bebe água. Vive próximo a lagos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Folhinha",
		obtencao: "Rota 201; ou Lago Verdade",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d5/387Turtwig_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Turtwig_(Pok%C3%A9mon)",
	},
	{
		nome: "Grotle",
		numero: 388, // considerando a national dex
		tipo: ["Planta"],
		massa: 97.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b4/F0388.png",
		estatistica: {
			ps: 75,
			atq: 89,
			def: 85,
			atq_esp: 55,
			def_esp: 65,
			vel: 36,
		},
		descricao:
			"Vive próximo a fontes de água em florestas. Durante o dia, deixa a floresta para dar banho de sol em seu casco arborizado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bosque",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/40/388Grotle_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Grotle_(Pok%C3%A9mon)",
	},
	{
		nome: "Torterra",
		numero: 389, // considerando a national dex
		tipo: ["Planta", " Terra"],
		massa: 310.0, // em kg
		altura: 2.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d6/F0389.png",
		estatistica: {
			ps: 95,
			atq: 109,
			def: 105,
			atq_esp: 75,
			def_esp: 85,
			vel: 56,
		},
		descricao:
			"Ocasionalmente, pequenos Pokémon se reúnem em suas costas para começar a construir seus ninhos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Continente",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/cb/389Torterra_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Torterra_(Pok%C3%A9mon)",
	},
	{
		nome: "Chimchar",
		numero: 390, // considerando a national dex
		tipo: ["Fogo"],
		massa: 6.2, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/32/F0390.png",
		estatistica: {
			ps: 44,
			atq: 58,
			def: 44,
			atq_esp: 58,
			def_esp: 44,
			vel: 61,
		},
		descricao:
			"Sua traseira flamejante é alimentada por gás produzido em sua barriga. Nem chuva pode apagar o fogo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chimpanzé",
		obtencao: "Rota 201; ou Lago Verdade",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6c/390Chimchar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Chimchar_(Pok%C3%A9mon)",
	},
	{
		nome: "Monferno",
		numero: 391, // considerando a national dex
		tipo: ["Fogo", " Lutador"],
		massa: 22.0, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/41/F0391.png",
		estatistica: {
			ps: 64,
			atq: 78,
			def: 52,
			atq_esp: 78,
			def_esp: 52,
			vel: 81,
		},
		descricao:
			"Para intimidar agressores, estica o fogo em sua cauda para parecer maior.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Brincalhão",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c4/391Monferno_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Monferno_(Pok%C3%A9mon)",
	},
	{
		nome: "Infernape",
		numero: 392, // considerando a national dex
		tipo: ["Fogo", " Lutador"],
		massa: 55.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/bd/F0392.png",
		estatistica: {
			ps: 76,
			atq: 104,
			def: 71,
			atq_esp: 104,
			def_esp: 71,
			vel: 108,
		},
		descricao:
			"Usa um tipo diferente de arte marcial envolvendo todo os seus membros. Seu fogo nunca se apaga.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3f/392Infernape_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Infernape_(Pok%C3%A9mon)",
	},
	{
		nome: "Piplup",
		numero: 393, // considerando a national dex
		tipo: ["Água"],
		massa: 5.2, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9b/F0393.png",
		estatistica: {
			ps: 53,
			atq: 51,
			def: 53,
			atq_esp: 61,
			def_esp: 56,
			vel: 40,
		},
		descricao:
			"Por ser muito orgulhoso, odeia aceitar comida de pessoas. Sua penugem espessa protege do frio.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pinguim",
		obtencao: "Rota 201; ou Lago Verdade",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3b/393Piplup_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Piplup_(Pok%C3%A9mon)",
	},
	{
		nome: "Prinplup",
		numero: 394, // considerando a national dex
		tipo: ["Água"],
		massa: 23.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f3/F0394.png",
		estatistica: {
			ps: 64,
			atq: 66,
			def: 68,
			atq_esp: 81,
			def_esp: 76,
			vel: 50,
		},
		descricao:
			"Vive sozinho, longe de outros. Aparentemente, cada um de sua espécie acredita ser o mais importante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pinguim",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9e/394Prinplup_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Prinplup_(Pok%C3%A9mon)",
	},
	{
		nome: "Empoleon",
		numero: 395, // considerando a national dex
		tipo: ["Água", " Metal"],
		massa: 84.5, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/30/F0395.png",
		estatistica: {
			ps: 84,
			atq: 86,
			def: 88,
			atq_esp: 111,
			def_esp: 101,
			vel: 60,
		},
		descricao:
			"Os três chifres que se estendem de seu bico atestam seu poder. O líder possui os maiores chifres.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Imperador",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a0/395Empoleon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Empoleon_(Pok%C3%A9mon)",
	},
	{
		nome: "Starly",
		numero: 396, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 2.0, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a5/F0396.png",
		estatistica: {
			ps: 40,
			atq: 55,
			def: 30,
			atq_esp: 30,
			def_esp: 30,
			vel: 60,
		},
		descricao:
			"Seus grupos são em grandes números. Embora pequenos, eles batem suas asas com grande poder.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Estorninho",
		obtencao: "Rotas 201, 202, 203, e outras; Lago Verdade; e Grande Pântano",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e1/396Starly_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Starly_(Pok%C3%A9mon)",
	},
	{
		nome: "Staravia",
		numero: 397, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 15.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/db/F0397.png",
		estatistica: {
			ps: 55,
			atq: 75,
			def: 50,
			atq_esp: 40,
			def_esp: 40,
			vel: 80,
		},
		descricao:
			"Voa por a florestas e campos em procura de Pokémon insetos. Fica dentro de um bando enorme.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Estorninho",
		obtencao:
			"Rotas 209, 210, 212, e outra; Jardim Troféu; Lago Valor; Fonte da Despedida; Grande Pântano; Arredores do Lago Valor; e por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/18/397Staravia_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Staravia_(Pok%C3%A9mon)",
	},
	{
		nome: "Staraptor",
		numero: 398, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 24.9, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b9/F0398.png",
		estatistica: {
			ps: 85,
			atq: 120,
			def: 70,
			atq_esp: 50,
			def_esp: 50,
			vel: 100,
		},
		descricao:
			"Possui uma natureza selvagem. Desafia corajosamente adversários muito maiores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Predador",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e7/398Staraptor_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Staraptor_(Pok%C3%A9mon)",
	},
	{
		nome: "Bidoof",
		numero: 399, // considerando a national dex
		tipo: ["Normal"],
		massa: 20.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/ce/F0399.png",
		estatistica: {
			ps: 59,
			atq: 45,
			def: 40,
			atq_esp: 35,
			def_esp: 40,
			vel: 31,
		},
		descricao:
			"Com nervos de aço, nada consegue perturbá-lo. Mais ágil e ativo do que parece.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato Gorducho",
		obtencao:
			"Rotas 201, 202, 203, e outras; Lago Verdade; Floresta de Eterna; Grande Pântano; e Usina do Vale.",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/8d/399Bidoof_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bidoof_(Pok%C3%A9mon)",
	},
	{
		nome: "Bibarel",
		numero: 400, // considerando a national dex
		tipo: ["Normal", " Água"],
		massa: 31.5, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/66/F0400.png",
		estatistica: {
			ps: 79,
			atq: 85,
			def: 60,
			atq_esp: 55,
			def_esp: 60,
			vel: 71,
		},
		descricao:
			"Constrói seu ninho represando riachos com casca e lama. É conhecido como um trabalhador industrial.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Castor",
		obtencao:
			"Rotas 208, 209, 210, e outra; Lago Valor; Fonte da Despedida; Grande Pântano; Lago Perspicácia; Arredores do Lago Valor; e por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/df/400Bibarel_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bibarel_(Pok%C3%A9mon)",
	},
	{
		nome: "Kricketot",
		numero: 401, // considerando a national dex
		tipo: ["Inseto"],
		massa: 2.2, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/67/F0401.png",
		estatistica: {
			ps: 37,
			atq: 25,
			def: 41,
			atq_esp: 25,
			def_esp: 41,
			vel: 25,
		},
		descricao:
			"Balança a cabeça de trás para frente, fazendo com que suas antenas batam uma na outra e soem como um xilofone.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Grilo",
		obtencao: "Rotas 202, 203, 204, e outras; e Floresta de Eterna",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4a/401Kricketot_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kricketot_(Pok%C3%A9mon)",
	},
	{
		nome: "Kricketune",
		numero: 402, // considerando a national dex
		tipo: ["Inseto"],
		massa: 25.5, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/58/F0402.png",
		estatistica: {
			ps: 77,
			atq: 85,
			def: 51,
			atq_esp: 55,
			def_esp: 51,
			vel: 65,
		},
		descricao:
			"Cruza seu braços semelhantes a uma faca na frente de seu peito quando emite sons. Consegue compor melodias no improviso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Grilo",
		obtencao:
			"Rotas 206, 210, 212, e outras; Jardim Troféu; Arredores do Lago Valor; e por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/df/402Kricketune_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kricketune_(Pok%C3%A9mon)",
	},
	{
		nome: "Shinx",
		numero: 403, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 9.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/cd/F0403.png",
		estatistica: {
			ps: 45,
			atq: 65,
			def: 34,
			atq_esp: 40,
			def_esp: 34,
			vel: 45,
		},
		descricao:
			"Todo seu pelo deslumbra quando sente perigo. Foge enquanto o oponente está momentaneamente cego.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lampejante",
		obtencao: "Rotas 202, 203, e 204; Usina do Vale; e Fuego de Ferro",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/58/403Shinx_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shinx_(Pok%C3%A9mon)",
	},
	{
		nome: "Luxio",
		numero: 404, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 30.5, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/eb/F0404.png",
		estatistica: {
			ps: 60,
			atq: 85,
			def: 49,
			atq_esp: 60,
			def_esp: 49,
			vel: 60,
		},
		descricao:
			"Suas garras liberam eletricidade com amperagem o suficiente para causar desmaio. Vivem em pequenos grupos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fagulha",
		obtencao: "Rota 222; Fuego de Ferro; e por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/66/404Luxio_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Luxio_(Pok%C3%A9mon)",
	},
	{
		nome: "Luxray",
		numero: 405, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 42.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/85/F0405.png",
		estatistica: {
			ps: 80,
			atq: 120,
			def: 79,
			atq_esp: 95,
			def_esp: 79,
			vel: 70,
		},
		descricao:
			"Quando seus olhos brilham dourados, consegue localizar presas escondidas, mesmo aquelas abrigadas atrás de uma parede.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Olhos Fulgurantes",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1c/405Luxray_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Luxray_(Pok%C3%A9mon)",
	},
	{
		nome: "Budew",
		numero: 406, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 1.2, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/16/F0406.png",
		estatistica: {
			ps: 40,
			atq: 30,
			def: 35,
			atq_esp: 50,
			def_esp: 70,
			vel: 55,
		},
		descricao:
			"Durante o inverno, fecha o botão e perdura o frio. Na primavera, o botão se abre e libera pólen.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Broto",
		obtencao:
			"Rotas 204, 205, 208, e outra; Floresta de Eterna; e Grande Pântano",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3f/406Budew_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Budew_(Pok%C3%A9mon)",
	},
	{
		nome: "Roserade",
		numero: 407, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 14.5, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/4a/F0407.png",
		estatistica: {
			ps: 60,
			atq: 70,
			def: 55,
			atq_esp: 125,
			def_esp: 105,
			vel: 90,
		},
		descricao:
			"Atrai a presa com um aroma adocicado para derruba-la com chicotes espinhosos escondidos em seus braços.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Buquê",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/52/407Roserade_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Roserade_(Pok%C3%A9mon)",
	},
	{
		nome: "Cranidos",
		numero: 408, // considerando a national dex
		tipo: ["Rocha"],
		massa: 31.5, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/68/F0408.png",
		estatistica: {
			ps: 67,
			atq: 125,
			def: 40,
			atq_esp: 30,
			def_esp: 30,
			vel: 58,
		},
		descricao:
			"Viveu em selvas por volta de cem milhões de anos atrás. Seu crânio é tão duro quanto ferro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cabeçada",
		obtencao: "Revivido a partir de um fóssil",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e3/408Cranidos_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cranidos_(Pok%C3%A9mon)",
	},
	{
		nome: "Rampardos",
		numero: 409, // considerando a national dex
		tipo: ["Rocha"],
		massa: 102.5, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b9/F0409.png",
		estatistica: {
			ps: 97,
			atq: 165,
			def: 60,
			atq_esp: 65,
			def_esp: 50,
			vel: 58,
		},
		descricao:
			"Sua poderosa cabeçada possui poder suficiente para quebrar até mesmo as coisas mais duráveis com o impacto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cabeçada",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/39/409Rampardos_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rampardos_(Pok%C3%A9mon)",
	},
	{
		nome: "Shieldon",
		numero: 410, // considerando a national dex
		tipo: ["Rocha", " Metal"],
		massa: 57.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/7b/F0410.png",
		estatistica: {
			ps: 30,
			atq: 42,
			def: 118,
			atq_esp: 42,
			def_esp: 88,
			vel: 30,
		},
		descricao:
			"Um Pokémon que viveu nas selvas por volta de cem milhões de anos atrás. Seu couro facial é extremamente duro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escudo",
		obtencao: "Revivido a partir de um fóssil",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/52/410Shieldon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shieldon_(Pok%C3%A9mon)",
	},
	{
		nome: "Bastiodon",
		numero: 411, // considerando a national dex
		tipo: ["Rocha", " Metal"],
		massa: 149.5, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d5/F0411.png",
		estatistica: {
			ps: 60,
			atq: 52,
			def: 168,
			atq_esp: 47,
			def_esp: 138,
			vel: 30,
		},
		descricao:
			"Qualquer ataque frontal é repelido. É um Pokémon dócil que se alimenta de grama e frutas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escudo",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a8/411Bastiodon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bastiodon_(Pok%C3%A9mon)",
	},
	{
		nome: "Burmy",
		numero: 412, // considerando a national dex
		tipo: ["Inseto"],
		massa: 3.4, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b8/F0412.png",
		estatistica: {
			ps: 40,
			atq: 29,
			def: 45,
			atq_esp: 29,
			def_esp: 45,
			vel: 36,
		},
		descricao:
			"Para se proteger dos ventos frios do inverno, se cobre com uma capa feita de materiais como folhas, galhos, areia, e restos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bicho-de-cesto",
		obtencao:
			"Rotas 205, 206, 207, e outras; Floresta de Eterna; Prado de Floaroma; Fuego de Ferro; e Usina do Vale",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3a/412Burmy_Plant_Cloak_Dream.png",
			"https://archives.bulbagarden.net/media/upload/6/60/412Burmy_Sandy_Cloak_Dream.png",
			"https://archives.bulbagarden.net/media/upload/5/51/412Burmy_Trash_Cloak_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Burmy_(Pok%C3%A9mon)",
	},
	{
		nome: "Wormadam (Manto Vegetal)",
		numero: 413.1, // considerando a national dex
		tipo: ["Inseto", " Planta"],
		massa: 6.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/98/F0413.png",
		estatistica: {
			ps: 60,
			atq: 59,
			def: 85,
			atq_esp: 79,
			def_esp: 105,
			vel: 36,
		},
		descricao:
			"Sua aparência muda dependendo de onde tenha evoluído. Os materiais disponíveis se tornam parte de seu corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bicho-de-cesto",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/bb/413Wormadam_Plant_Cloak_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wormadam_(Pok%C3%A9mon)",
	},
	{
		nome: "Wormadam (Manto Arenoso)",
		numero: 413.2, // considerando a national dex
		tipo: ["Inseto", " Terra"],
		massa: 6.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/98/F0413.png",
		estatistica: {
			ps: 60,
			atq: 79,
			def: 105,
			atq_esp: 59,
			def_esp: 85,
			vel: 36,
		},
		descricao:
			"Sua aparência muda dependendo de onde tenha evoluído. Os materiais disponíveis se tornam parte de seu corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bicho-de-cesto",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/bd/413Wormadam_Sandy_Cloak_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wormadam_(Pok%C3%A9mon)",
	},
	{
		nome: "Wormadam (Manto de Lixo)",
		numero: 413.3, // considerando a national dex
		tipo: ["Inseto", " Metal"],
		massa: 6.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/98/F0413.png",
		estatistica: {
			ps: 60,
			atq: 69,
			def: 95,
			atq_esp: 69,
			def_esp: 95,
			vel: 36,
		},
		descricao:
			"Sua aparência muda dependendo de onde tenha evoluído. Os materiais disponíveis se tornam parte de seu corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bicho-de-cesto",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/30/413Wormadam_Trash_Cloak_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wormadam_(Pok%C3%A9mon)",
	},
	{
		nome: "Mothim",
		numero: 414, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 23.3, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/48/F0414.png",
		estatistica: {
			ps: 70,
			atq: 94,
			def: 50,
			atq_esp: 94,
			def_esp: 50,
			vel: 66,
		},
		descricao:
			"Não mantém um ninho. Voa sobre campos e montanhas em procura constante de mel floral.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mariposa",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6d/414Mothim_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mothim_(Pok%C3%A9mon)",
	},
	{
		nome: "Combee",
		numero: 415, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 5.5, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/95/F0415.png",
		estatistica: {
			ps: 30,
			atq: 30,
			def: 42,
			atq_esp: 30,
			def_esp: 42,
			vel: 70,
		},
		descricao:
			"Coleta e entrega mel para sua colônia. À noite, se agrupam para formar uma colmeia e dormem.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abelhinha",
		obtencao:
			"Rotas 205, 206, 207, e outras; Floresta de Eterna; Prado de Floaroma; Fuego de Ferro; e Usina do Vale",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/8c/415Combee_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Combee_(Pok%C3%A9mon)",
	},
	{
		nome: "Vespiquen",
		numero: 416, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 38.5, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f2/F0416.png",
		estatistica: {
			ps: 70,
			atq: 80,
			def: 102,
			atq_esp: 80,
			def_esp: 102,
			vel: 40,
		},
		descricao:
			"Quando ameaçadas, larvas de seu favo de mel de seis células revidam. Há apenas uma em uma colônia.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Colmeia",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1d/416Vespiquen_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vespiquen_(Pok%C3%A9mon)",
	},
	{
		nome: "Pachirisu",
		numero: 417, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 3.9, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/ab/F0417.png",
		estatistica: {
			ps: 60,
			atq: 45,
			def: 70,
			atq_esp: 45,
			def_esp: 90,
			vel: 95,
		},
		descricao:
			"Faz bolas de pelo que estalam com eletricidade estática. As armazena com frutas em buracos de árvores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Esquilo Elétrico",
		obtencao: "Rota 205; Fuego de Ferro; e Usina do Vale",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7a/417Pachirisu_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pachirisu_(Pok%C3%A9mon)",
	},
	{
		nome: "Buizel",
		numero: 418, // considerando a national dex
		tipo: ["Água"],
		massa: 29.5, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/61/F0418.png",
		estatistica: {
			ps: 55,
			atq: 65,
			def: 35,
			atq_esp: 60,
			def_esp: 30,
			vel: 85,
		},
		descricao:
			"Possui um saco de flutuação que se assemelha a uma coleira inflável. Flutua na água com a cabeça para fora.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Doninha do Mar",
		obtencao: "Rotas 205, 212, 213, e outra; e Usina do Vale",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/28/418Buizel_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Buizel_(Pok%C3%A9mon)",
	},
	{
		nome: "Floatzel",
		numero: 419, // considerando a national dex
		tipo: ["Água"],
		massa: 33.5, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/bb/F0419.png",
		estatistica: {
			ps: 85,
			atq: 105,
			def: 55,
			atq_esp: 85,
			def_esp: 50,
			vel: 115,
		},
		descricao:
			"Flutua usando seus saco de flutuação bem desenvolvido. Auxilia no resgate de pessoas que estão se afogando.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Doninha do Mar",
		obtencao:
			"Rotas 213, 218, 221, e outras; Fuego de Ferro; Estrada da Vitória; e por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/56/419Floatzel_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Floatzel_(Pok%C3%A9mon)",
	},
	{
		nome: "Cherubi",
		numero: 420, // considerando a national dex
		tipo: ["Planta"],
		massa: 3.3, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/27/F0420.png",
		estatistica: {
			ps: 45,
			atq: 35,
			def: 45,
			atq_esp: 62,
			def_esp: 53,
			vel: 35,
		},
		descricao:
			"A bola pequena não é só cheia de nutrientes, também é saborosa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cereja",
		obtencao:
			"Rotas 205, 206, 207, e outras; Floresta de Eterna; Prado de Floaroma; Fuego de Ferro; Usina do Vale",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/bb/420Cherubi_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cherubi_(Pok%C3%A9mon)",
	},
	{
		nome: "Cherrim",
		numero: 421, // considerando a national dex
		tipo: ["Planta"],
		massa: 9.3, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e9/F0421.png",
		estatistica: {
			ps: 70,
			atq: 60,
			def: 70,
			atq_esp: 87,
			def_esp: 78,
			vel: 85,
		},
		descricao:
			"Floresce em épocas de forte luz solar. Tenta compensar tudo o que suportou como broto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Floreado",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1a/421Cherrim_Overcast_Form_Dream.png",
			"https://archives.bulbagarden.net/media/upload/5/5f/421Cherrim_Sunshine_Form_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cherrim_(Pok%C3%A9mon)",
	},
	{
		nome: "Shellos",
		numero: 422, // considerando a national dex
		tipo: ["Água"],
		massa: 6.3, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/29/F0422.png",
		estatistica: {
			ps: 76,
			atq: 48,
			def: 48,
			atq_esp: 57,
			def_esp: 62,
			vel: 34,
		},
		descricao:
			"Suas cores e formas diferem de região para região. Na região de Sinnoh, estão confirmados dois tipos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lesma do Mar",
		obtencao: "Rotas 205, 212, 213, e outras; Fuego de Ferro; e Usina do Vale",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d7/422Shellos_East_Sea_Dream.png",
			"https://archives.bulbagarden.net/media/upload/0/07/422Shellos_West_Sea_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shellos_(Pok%C3%A9mon)",
	},
	{
		nome: "Gastrodon",
		numero: 423, // considerando a national dex
		tipo: ["Água", " Terra"],
		massa: 29.9, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a0/F0423.png",
		estatistica: {
			ps: 111,
			atq: 83,
			def: 68,
			atq_esp: 92,
			def_esp: 82,
			vel: 39,
		},
		descricao:
			"Possui um corpo flexível sem ossos. Caso qualquer parte de seu corpo for arrancada, ela cresce de volta.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lesma do Mar",
		obtencao: "Rotas 205, 213, 218, e outras; Fuego de Ferro; e Usina do Vale",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d2/423Gastrodon_East_Sea_Dream.png",
			"https://archives.bulbagarden.net/media/upload/a/a2/423Gastrodon_West_Sea_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gastrodon_(Pok%C3%A9mon)",
	},
	{
		nome: "Ambipom",
		numero: 424, // considerando a national dex
		tipo: ["Normal"],
		massa: 20.3, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c6/F0424.png",
		estatistica: {
			ps: 75,
			atq: 100,
			def: 66,
			atq_esp: 60,
			def_esp: 66,
			vel: 115,
		},
		descricao:
			"Para comer, habilmente descasca nozes com suas duas caudas. Raramente usa seus braços.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cauda Longa",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/02/424Ambipom_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ambipom_(Pok%C3%A9mon)",
	},
	{
		nome: "Drifloon",
		numero: 425, // considerando a national dex
		tipo: ["Fantasma", " Voador"],
		massa: 1.2, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e4/F0425.png",
		estatistica: {
			ps: 90,
			atq: 50,
			def: 34,
			atq_esp: 60,
			def_esp: 44,
			vel: 70,
		},
		descricao:
			"Um Pokémon formado por espíritos de pessoas e Pokémon. Gosta de estações úmidas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Balão",
		obtencao: "Usina do Vale",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/45/425Drifloon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Drifloon_(Pok%C3%A9mon)",
	},
	{
		nome: "Drifblim",
		numero: 426, // considerando a national dex
		tipo: ["Fantasma", " Voador"],
		massa: 15.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/7e/F0426.png",
		estatistica: {
			ps: 150,
			atq: 80,
			def: 44,
			atq_esp: 90,
			def_esp: 54,
			vel: 80,
		},
		descricao:
			"É sonolento durante o dia, voa à noite em grandes grupos. Ninguém sabe para onde vão.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dirigível",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0c/426Drifblim_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Drifblim_(Pok%C3%A9mon)",
	},
	{
		nome: "Buneary",
		numero: 427, // considerando a national dex
		tipo: ["Normal"],
		massa: 5.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/82/F0427.png",
		estatistica: {
			ps: 55,
			atq: 66,
			def: 44,
			atq_esp: 44,
			def_esp: 56,
			vel: 85,
		},
		descricao:
			"Bate em seus inimigos desenrolando bruscamente suas orelhas enroladas. Pica o suficiente para fazer um adulto chorar de dor.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coelho",
		obtencao: "Floresta de Eterna",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/ab/427Buneary_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Buneary_(Pok%C3%A9mon)",
	},
	{
		nome: "Luponny",
		numero: 428, // considerando a national dex
		tipo: ["Normal"],
		massa: 33.3, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/37/F0428.png",
		estatistica: {
			ps: 65,
			atq: 76,
			def: 84,
			atq_esp: 54,
			def_esp: 96,
			vel: 105,
		},
		descricao:
			"Um Pokémon extremamente cauteloso. Cobre seu corpo com sua orelha fofa quando sente perigo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coelho",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0a/428Lopunny_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lopunny_(Pok%C3%A9mon)",
	},
	{
		nome: "Mismagius",
		numero: 429, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 4.4, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/4a/F0429.png",
		estatistica: {
			ps: 60,
			atq: 60,
			def: 60,
			atq_esp: 105,
			def_esp: 105,
			vel: 105,
		},
		descricao:
			"Os sons que emite soam como encantações. Quem ouve são atormentados por dores de cabeça e alucinações.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mágico",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f9/429Mismagius_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mismagius_(Pok%C3%A9mon)",
	},
	{
		nome: "Honchkrow",
		numero: 430, // considerando a national dex
		tipo: ["Noturno", " Voador"],
		massa: 27.3, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/ab/F0430.png",
		estatistica: {
			ps: 100,
			atq: 125,
			def: 52,
			atq_esp: 105,
			def_esp: 52,
			vel: 71,
		},
		descricao:
			"Caso algum soltar um grito profundo, vários subordinados reúnem-se rapidamente. Por isso, é chamado de 'Invocador da Noite'.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chefão",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4a/430Honchkrow_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Honchkrow_(Pok%C3%A9mon)",
	},
	{
		nome: "Glameow",
		numero: 431, // considerando a national dex
		tipo: ["Normal"],
		massa: 3.9, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/3d/F0431.png",
		estatistica: {
			ps: 49,
			atq: 55,
			def: 42,
			atq_esp: 42,
			def_esp: 37,
			vel: 85,
		},
		descricao:
			"Arranha quando está insatisfeito e ronrona quando afetuoso. Sua inconstância é muito popular entre alguns.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vingativo",
		obtencao: "Rotas 218, e 222",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/ae/431Glameow_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Glameow_(Pok%C3%A9mon)",
	},
	{
		nome: "Purugly",
		numero: 432, // considerando a national dex
		tipo: ["Noturno", " Voador"],
		massa: 43.8, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/0d/F0432.png",
		estatistica: {
			ps: 71,
			atq: 82,
			def: 64,
			atq_esp: 64,
			def_esp: 59,
			vel: 112,
		},
		descricao:
			"É um bruto descarado que invade o ninho de outro Pokémon e o reivindica como seu.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gato-tigre",
		obtencao: "Rotas 222, e 229; e por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c5/432Purugly_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Purugly_(Pok%C3%A9mon)",
	},
	{
		nome: "Chingling",
		numero: 433, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 0.6, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/57/F0433.png",
		estatistica: {
			ps: 45,
			atq: 30,
			def: 50,
			atq_esp: 65,
			def_esp: 50,
			vel: 45,
		},
		descricao:
			"Emite sons ao agitar uma orbe no fundo da gargante. Se move com pulos agitados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sino",
		obtencao:
			"Rota 211; Lago Valor; Monte Coronet; Lago da Perspicácia; Fonte da Despedida; e Caverna do Retorno",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/dc/433Chingling_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Chingling_(Pok%C3%A9mon)",
	},
	{
		nome: "Stunky",
		numero: 434, // considerando a national dex
		tipo: ["Veneno", " Noturno"],
		massa: 19.2, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c6/F0434.png",
		estatistica: {
			ps: 63,
			atq: 63,
			def: 47,
			atq_esp: 41,
			def_esp: 41,
			vel: 74,
		},
		descricao:
			"Protege a si mesmo borrifando um fluido nocivo de sua parte traseira. O fedor permanece por 24 horas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gambá",
		obtencao: "Rotas 206, 214, e 221",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/27/434Stunky_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Stunky_(Pok%C3%A9mon)",
	},
	{
		nome: "Skuntank",
		numero: 435, // considerando a national dex
		tipo: ["Veneno", " Noturno"],
		massa: 38.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/90/F0435.png",
		estatistica: {
			ps: 103,
			atq: 93,
			def: 67,
			atq_esp: 71,
			def_esp: 61,
			vel: 84,
		},
		descricao:
			"Borrifa um fluido de cheiro horrível da ponta da cauda para atacar. Seu alcance é de 50 metros.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gato-tigre",
		obtencao: "Rotas 221, e 225; e por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/fb/435Skuntank_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Skuntank_(Pok%C3%A9mon)",
	},
	{
		nome: "Bronzor",
		numero: 436, // considerando a national dex
		tipo: ["Metal", " Psíquico"],
		massa: 60.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a0/F0436.png",
		estatistica: {
			ps: 57,
			atq: 24,
			def: 86,
			atq_esp: 24,
			def_esp: 86,
			vel: 23,
		},
		descricao:
			"Fotos de raio-X foram tiradas para verificar a estrutura de seu corpo. Contudo, nada apareceu.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bronze",
		obtencao:
			"Rotas 206, e 211; Caverna Extravio; Caverna do Retorno; e Monte Coronet",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/af/436Bronzor_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bronzor_(Pok%C3%A9mon)",
	},
	{
		nome: "Bronzong",
		numero: 437, // considerando a national dex
		tipo: ["Metal", " Psíquico"],
		massa: 187.0, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c2/F0437.png",
		estatistica: {
			ps: 67,
			atq: 89,
			def: 116,
			atq_esp: 79,
			def_esp: 116,
			vel: 33,
		},
		descricao:
			"Consegue invocar nuvens de chuva. Pessoas há muito tempo o reverenciavam como o portado de colheitas abundantes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sino de Bronze",
		obtencao: "Caverna do Retorno; Monte Coronet; e por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a5/437Bronzong_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bronzong_(Pok%C3%A9mon)",
	},
	{
		nome: "Bonsly",
		numero: 438, // considerando a national dex
		tipo: ["Rocha"],
		massa: 15.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8e/F0438.png",
		estatistica: {
			ps: 50,
			atq: 80,
			def: 95,
			atq_esp: 10,
			def_esp: 45,
			vel: 10,
		},
		descricao:
			"Aparenta sempre estar chorando. Na verdade, está ajustando os níveis de fluidos corporais eliminando o excesso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bonsai",
		obtencao: "Rotas 209, e 210; e Jardim Troféu",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/47/0438Bonsly.png/375px-0438Bonsly.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bonsly_(Pok%C3%A9mon)",
	},
	{
		nome: "Mime Jr.",
		numero: 439, // considerando a national dex
		tipo: ["Psíquico", " Fada"],
		massa: 13.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/01/F0439.png",
		estatistica: {
			ps: 20,
			atq: 25,
			def: 45,
			atq_esp: 70,
			def_esp: 90,
			vel: 60,
		},
		descricao:
			"Habitualmente imita os inimigos. Uma vez imitado, o inimigo não consegue tirar os olhos deste Pokémon.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mímico",
		obtencao: "Rotas 209, e 210; e Jardim Troféu",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/80/439Mime_Jr._Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mime_Jr._(Pok%C3%A9mon)",
	},
	{
		nome: "Happiny",
		numero: 440, // considerando a national dex
		tipo: ["Normal"],
		massa: 24.4, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/68/F0440.png",
		estatistica: {
			ps: 100,
			atq: 5,
			def: 5,
			atq_esp: 75,
			def_esp: 65,
			vel: 30,
		},
		descricao:
			"Gosta de carregar uma rocha pequena. Pode vagar pelos pés dos outros e fazê-los tropeçar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Brincar de Casinha",
		obtencao: "Jardim Troféu",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/50/440Happiny_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Happiny_(Pok%C3%A9mon)",
	},
	{
		nome: "Chatot",
		numero: 441, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 1.9, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/79/F0441.png",
		estatistica: {
			ps: 76,
			atq: 65,
			def: 45,
			atq_esp: 92,
			def_esp: 42,
			vel: 91,
		},
		descricao:
			"Consegue aprender e falar palavras humanas. Quando se juntam, todos aprenderão o mesmo ditado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Nota Musical",
		obtencao: "Rotas 213, 218, 222, e outra",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/11/441Chatot_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Chatot_(Pok%C3%A9mon)",
	},
	{
		nome: "Spiritomb",
		numero: 442, // considerando a national dex
		tipo: ["Fantasma", " Noturno"],
		massa: 108.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/27/F0442.png",
		estatistica: {
			ps: 50,
			atq: 92,
			def: 108,
			atq_esp: 92,
			def_esp: 108,
			vel: 35,
		},
		descricao:
			"Foi preso a uma fissura em uma pedra sagrada como punição por delitos cometidos há 500 anos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Proibido",
		obtencao: "Torre Sagrada",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/84/442Spiritomb_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Spiritomb_(Pok%C3%A9mon)",
	},
	{
		nome: "Gible",
		numero: 443, // considerando a national dex
		tipo: ["Dragão", " Terra"],
		massa: 20.5, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/1a/F0443.png",
		estatistica: {
			ps: 58,
			atq: 70,
			def: 45,
			atq_esp: 40,
			def_esp: 45,
			vel: 42,
		},
		descricao:
			"Nidifica em pequenos buracos horizontais nas paredes de cavernas. Ataca para capturar presas que se aproximam demais.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Tubarão Terrestre",
		obtencao: "Caverna Extravio",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0d/443Gible_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gible_(Pok%C3%A9mon)",
	},
	{
		nome: "Gabite",
		numero: 444, // considerando a national dex
		tipo: ["Dragão", " Terra"],
		massa: 56.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/10/F0444.png",
		estatistica: {
			ps: 68,
			atq: 90,
			def: 65,
			atq_esp: 50,
			def_esp: 55,
			vel: 82,
		},
		descricao:
			"Há uma crença antiga que remédios feitos com suas escamas curam até doenças incuráveis.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gruta",
		obtencao: "Estrada da Vitória; e por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a0/444Gabite_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gabite_(Pok%C3%A9mon)",
	},
	{
		nome: "Garchomp",
		numero: 445, // considerando a national dex
		tipo: ["Dragão", " Terra"],
		massa: 95.0, // em kg
		altura: 1.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/25/F0445.png",
		estatistica: {
			ps: 108,
			atq: 130,
			def: 95,
			atq_esp: 80,
			def_esp: 85,
			vel: 102,
		},
		descricao:
			"Quando curva seu corpo e estende suas asas, se assemelha a um jato. Voa em velocidade sônica.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Supersônico",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/58/445Garchomp_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Garchomp_(Pok%C3%A9mon)",
	},
	{
		nome: "Munchlax",
		numero: 446, // considerando a national dex
		tipo: ["Normal"],
		massa: 105.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/ce/F0446.png",
		estatistica: {
			ps: 135,
			atq: 85,
			def: 40,
			atq_esp: 40,
			def_esp: 85,
			vel: 5,
		},
		descricao:
			"Devora seu peso em comida uma vez por dia, engolindo a comida inteira quase sem mastigar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Comilão",
		obtencao:
			"Rotas 205, 206, 207, e outras; Floresta de Eterna; Prado de Floaroma; Fuego de Ferro; e Usina do Vale",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/53/446Munchlax_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Munchlax_(Pok%C3%A9mon)",
	},
	{
		nome: "Riolu",
		numero: 447, // considerando a national dex
		tipo: ["Lutador"],
		massa: 20.2, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/39/F0447.png",
		estatistica: {
			ps: 40,
			atq: 70,
			def: 40,
			atq_esp: 35,
			def_esp: 40,
			vel: 60,
		},
		descricao:
			"A aura que emana de seu corpo intensifica para alertar outros caso esteja assustado ou triste.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Emanação",
		obtencao: "Por ovo",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d1/447Riolu_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Riolu_(Pok%C3%A9mon)",
	},
	{
		nome: "Lucario",
		numero: 448, // considerando a national dex
		tipo: ["Lutador", " Metal"],
		massa: 54.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fd/F0448.png",
		estatistica: {
			ps: 70,
			atq: 110,
			def: 70,
			atq_esp: 115,
			def_esp: 70,
			vel: 90,
		},
		descricao:
			"Possui a habilidade de sentir as auras de todas as coisas. Compreende a fala humana.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Aura",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/44/448Lucario_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lucario_(Pok%C3%A9mon)",
	},
	{
		nome: "Hippopotas",
		numero: 449, // considerando a national dex
		tipo: ["Terra"],
		massa: 49.5, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/be/F0449.png",
		estatistica: {
			ps: 68,
			atq: 72,
			def: 78,
			atq_esp: 38,
			def_esp: 42,
			vel: 32,
		},
		descricao:
			"Vive em lugares áridos. Em vez de transpirar, expele areia granulada do corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Hipopótamo",
		obtencao: "Túnel do Maníaco",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/28/449Hippopotas_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hippopotas_(Pok%C3%A9mon)",
	},
	{
		nome: "Hippowdon",
		numero: 450, // considerando a national dex
		tipo: ["Terra"],
		massa: 300.0, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f5/F0450.png",
		estatistica: {
			ps: 108,
			atq: 112,
			def: 118,
			atq_esp: 68,
			def_esp: 72,
			vel: 47,
		},
		descricao:
			"Expele areia que armazena internamente através de aberturas em seu corpo para criar um tornado gigante para ataque.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peso Pesado",
		obtencao: "Rota 228; e por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c8/450Hippowdon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hippowdon_(Pok%C3%A9mon)",
	},
	{
		nome: "Skorupi",
		numero: 451, // considerando a national dex
		tipo: ["Veneno", " Inseto"],
		massa: 12.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/99/F0451.png",
		estatistica: {
			ps: 40,
			atq: 50,
			def: 90,
			atq_esp: 30,
			def_esp: 55,
			vel: 65,
		},
		descricao:
			"Agarra a presa com suas garras da cauda e injeta veneno. Tenazmente se agarra até o veneno fazer efeito.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escorpião",
		obtencao: "Grande Pântano",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0b/451Skorupi_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Skorupi_(Pok%C3%A9mon)",
	},
	{
		nome: "Drapion",
		numero: 452, // considerando a national dex
		tipo: ["Veneno", " Noturno"],
		massa: 61.5, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8f/F0452.png",
		estatistica: {
			ps: 70,
			atq: 90,
			def: 110,
			atq_esp: 60,
			def_esp: 75,
			vel: 95,
		},
		descricao:
			"Possui força em suas garras para fazer sucata de um carro. As pontas de suas garras liberam veneno.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escorpião Ogro",
		obtencao: "Grande Pântano; e por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/78/452Drapion_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Drapion_(Pok%C3%A9mon)",
	},
	{
		nome: "Croagunk",
		numero: 453, // considerando a national dex
		tipo: ["Veneno", " Lutador"],
		massa: 23.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b8/F0453.png",
		estatistica: {
			ps: 48,
			atq: 61,
			def: 40,
			atq_esp: 61,
			def_esp: 40,
			vel: 50,
		},
		descricao:
			"Suas bochechas contêm sacos de veneno. Tenta pegar os inimigos desprevenidos para acertá-los com dedos tóxicos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Boca Tóxica",
		obtencao: "Rota 212; e Grande Pântano",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/75/453Croagunk_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Croagunk_(Pok%C3%A9mon)",
	},
	{
		nome: "Toxicroak",
		numero: 454, // considerando a national dex
		tipo: ["Veneno", " Lutador"],
		massa: 44.4, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/38/F0454.png",
		estatistica: {
			ps: 83,
			atq: 106,
			def: 65,
			atq_esp: 86,
			def_esp: 65,
			vel: 85,
		},
		descricao:
			"Suas garras secretam uma toxina tão vil que até mesmo um arranhão pode ser fatal.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Boca Tóxica",
		obtencao: "Grande Pântano; e por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c4/454Toxicroak_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Toxicroak_(Pok%C3%A9mon)",
	},
	{
		nome: "Carnivine",
		numero: 455, // considerando a national dex
		tipo: ["Planta"],
		massa: 27.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5b/F0455.png",
		estatistica: {
			ps: 74,
			atq: 100,
			def: 72,
			atq_esp: 90,
			def_esp: 72,
			vel: 46,
		},
		descricao:
			"Atrai a presa com sua saliva de cheiro doce, então a mastiga. Demora um dia inteiro para comer a presa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pegador de Insetos",
		obtencao: "Grande Pântano",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5b/455Carnivine_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Carnivine_(Pok%C3%A9mon)",
	},
	{
		nome: "Finneon",
		numero: 456, // considerando a national dex
		tipo: ["Água"],
		massa: 7.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/82/F0456.png",
		estatistica: {
			ps: 49,
			atq: 49,
			def: 56,
			atq_esp: 49,
			def_esp: 61,
			vel: 66,
		},
		descricao:
			"Depois de uma longa exposição a luz solar, os padrões em sua barbatana caudal brilha vividamente quando chega a escuridão.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe Alado",
		obtencao:
			"Rotas 205, 218, 219, e outras; Fuego de Ferro; Ilha Iron; e Usina do Vale",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/dc/456Finneon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Finneon_(Pok%C3%A9mon)",
	},
	{
		nome: "Lumineon",
		numero: 457, // considerando a national dex
		tipo: ["Água"],
		massa: 24.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d8/F0457.png",
		estatistica: {
			ps: 69,
			atq: 69,
			def: 76,
			atq_esp: 69,
			def_esp: 86,
			vel: 91,
		},
		descricao:
			"Vive no fundo do mar profundo. Atrai presas exibindo os padrões em suas quatro nadadeiras caudais.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Neon",
		obtencao:
			"Rotas 205, 218, 219, e outras; Fuego de Ferro; Ilha Iron; Usina do Vale; e por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/94/457Lumineon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lumineon_(Pok%C3%A9mon)",
	},
	{
		nome: "Mantyke",
		numero: 458, // considerando a national dex
		tipo: ["Água", " Voador"],
		massa: 65.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/43/F0458.png",
		estatistica: {
			ps: 45,
			atq: 20,
			def: 50,
			atq_esp: 60,
			def_esp: 120,
			vel: 50,
		},
		descricao:
			"Um Pokémon amigável que captura fluxos sutis da água do mar usando suas duas antenas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pipa",
		obtencao: "Rota 223",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0d/458Mantyke_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mantyke_(Pok%C3%A9mon)",
	},
	{
		nome: "Snover",
		numero: 459, // considerando a national dex
		tipo: ["Planta", " Gelo"],
		massa: 50.5, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/33/F0459.png",
		estatistica: {
			ps: 60,
			atq: 62,
			def: 50,
			atq_esp: 62,
			def_esp: 60,
			vel: 40,
		},
		descricao:
			"Vive em montanhas nevadas. Tendo tipo pouco contato com humanos, é ousadamente curioso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Árvore Congelante",
		obtencao:
			"Rotas 216, e 217; Arredores do Lago Perspicácia; Lago Perspicácia; e Monte Coronet",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/85/459Snover_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Snover_(Pok%C3%A9mon)",
	},
	{
		nome: "Abomasnow",
		numero: 460, // considerando a national dex
		tipo: ["Planta", " Gelo"],
		massa: 135.5, // em kg
		altura: 2.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/01/F0460.png",
		estatistica: {
			ps: 90,
			atq: 92,
			def: 75,
			atq_esp: 92,
			def_esp: 85,
			vel: 60,
		},
		descricao:
			"Provoca nevascas em montanhas que estão sempre enterradas na neve. É o abominável homem das neves.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Árvore Congelante",
		obtencao: "Monte Coronet; e por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/77/460Abomasnow_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Abomasnow_(Pok%C3%A9mon)",
	},
	{
		nome: "Weavile",
		numero: 461, // considerando a national dex
		tipo: ["Noturno", " Gelo"],
		massa: 34.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/33/F0461.png",
		estatistica: {
			ps: 70,
			atq: 120,
			def: 65,
			atq_esp: 45,
			def_esp: 85,
			vel: 125,
		},
		descricao:
			"Vivem em regiões frias, formando grupos de quatro ou cinco que caçam presas com coordenação impressionante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Garra Afiada",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c6/461Weavile_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Weavile_(Pok%C3%A9mon)",
	},
	{
		nome: "Magnezone",
		numero: 462, // considerando a national dex
		tipo: ["Elétrico", " Metal"],
		massa: 180.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8f/F0462.png",
		estatistica: {
			ps: 70,
			atq: 70,
			def: 115,
			atq_esp: 130,
			def_esp: 90,
			vel: 60,
		},
		descricao:
			"Um grupo tentou usar meios científicos para fazê-lo evoluir, mas seus esforços fracassaram.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Área Magnética",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/63/462Magnezone_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Magnezone_(Pok%C3%A9mon)",
	},
	{
		nome: "Lickilicky",
		numero: 463, // considerando a national dex
		tipo: ["Normal"],
		massa: 140.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/82/F0463.png",
		estatistica: {
			ps: 110,
			atq: 85,
			def: 95,
			atq_esp: 80,
			def_esp: 95,
			vel: 50,
		},
		descricao:
			"Envolve coisas com sua língua extensível. Chegar muito perto dele deixará você encharcado de baba.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lambedor",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b8/463Lickilicky_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lickilicky_(Pok%C3%A9mon)",
	},
	{
		nome: "Rhyperior",
		numero: 464, // considerando a national dex
		tipo: ["Terra", " Rocha"],
		massa: 282.8, // em kg
		altura: 2.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/03/F0464.png",
		estatistica: {
			ps: 115,
			atq: 140,
			def: 130,
			atq_esp: 55,
			def_esp: 55,
			vel: 40,
		},
		descricao:
			"Consegue lançar uma rocha segurada na mão como um míssil, contraindo e expandido os músculos instantaneamente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Perfurador",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/02/464Rhyperior_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rhyperior_(Pok%C3%A9mon)",
	},
	{
		nome: "Tangrowth",
		numero: 465, // considerando a national dex
		tipo: ["Planta"],
		massa: 128.6, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/85/F0465.png",
		estatistica: {
			ps: 100,
			atq: 100,
			def: 125,
			atq_esp: 110,
			def_esp: 50,
			vel: 50,
		},
		descricao:
			"Seus braços são feitos de plantas que se prendem a coisas. Crescem de volta imediatamente se cortados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Trepadeira",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/42/465Tangrowth_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tangrowth_(Pok%C3%A9mon)",
	},
	{
		nome: "Electivire",
		numero: 466, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 138.6, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/ae/F0466.png",
		estatistica: {
			ps: 75,
			atq: 123,
			def: 67,
			atq_esp: 95,
			def_esp: 85,
			vel: 95,
		},
		descricao:
			"Empurra a ponta de suas duas caudas contra o oponente, então libera mais de 20'000 volts de energia.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Relâmpago",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/35/466Electivire_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Electivire_(Pok%C3%A9mon)",
	},
	{
		nome: "Magmortar",
		numero: 467, // considerando a national dex
		tipo: ["Fogo"],
		massa: 68.0, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/70/F0467.png",
		estatistica: {
			ps: 75,
			atq: 95,
			def: 67,
			atq_esp: 125,
			def_esp: 95,
			vel: 83,
		},
		descricao:
			"Atira bolas de fogo de mais de 2'000° Celsius das pontas dos braços. Vive em crateras vulcânicas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Explosão",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/8e/467Magmortar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Magmortar_(Pok%C3%A9mon)",
	},
	{
		nome: "Togekiss",
		numero: 468, // considerando a national dex
		tipo: ["Fada", " Voador"],
		massa: 38.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c9/F0468.png",
		estatistica: {
			ps: 85,
			atq: 50,
			def: 95,
			atq_esp: 125,
			def_esp: 115,
			vel: 80,
		},
		descricao:
			"Nunca aparece onde há conflito. Seus avistamentos se tornaram raros recentemente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Jubileu",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4b/468Togekiss_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Togekiss_(Pok%C3%A9mon)",
	},
	{
		nome: "Yanmega",
		numero: 469, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 51.5, // em kg
		altura: 1.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9d/F0469.png",
		estatistica: {
			ps: 86,
			atq: 76,
			def: 86,
			atq_esp: 116,
			def_esp: 56,
			vel: 95,
		},
		descricao:
			"Ao bater suas asas, cria ondas de choque que causam ferimentos internos críticos aos inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Libélula Ogro",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7a/469Yanmega_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Yanmega_(Pok%C3%A9mon)",
	},
	{
		nome: "Leafeon",
		numero: 470, // considerando a national dex
		tipo: ["Planta"],
		massa: 25.5, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/93/F0470.png",
		estatistica: {
			ps: 65,
			atq: 110,
			def: 130,
			atq_esp: 60,
			def_esp: 65,
			vel: 95,
		},
		descricao:
			"Assim como uma planta, realiza fotossíntese. Como resultado, está sempre envolta em ar limpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Verdejante",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/41/470Leafeon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Leafeon_(Pok%C3%A9mon)",
	},
	{
		nome: "Glaceon",
		numero: 471, // considerando a national dex
		tipo: ["Gelo"],
		massa: 25.9, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/45/F0471.png",
		estatistica: {
			ps: 65,
			atq: 60,
			def: 110,
			atq_esp: 130,
			def_esp: 95,
			vel: 65,
		},
		descricao:
			"Como técnica protetiva, consegue congelar completamente seu pelo, fazendo com que seus pelos fiquem eriçados como agulhas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Neve Fresca",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/24/471Glaceon_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Glaceon_(Pok%C3%A9mon)",
	},
	{
		nome: "Gliscor",
		numero: 472, // considerando a national dex
		tipo: ["Terra", " Voador"],
		massa: 42.5, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/4e/F0472.png",
		estatistica: {
			ps: 75,
			atq: 95,
			def: 125,
			atq_esp: 45,
			def_esp: 75,
			vel: 95,
		},
		descricao:
			"Observa presa enquanto está de cabeça para baixo em galhos. Quando a chance se apresenta, ataca!.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escorpião com Presas",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2f/472Gliscor_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gliscor_(Pok%C3%A9mon)",
	},
	{
		nome: "Mamoswine",
		numero: 473, // considerando a national dex
		tipo: ["Gelo", " Terra"],
		massa: 291.0, // em kg
		altura: 2.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/04/F0473.png",
		estatistica: {
			ps: 110,
			atq: 130,
			def: 80,
			atq_esp: 70,
			def_esp: 60,
			vel: 80,
		},
		descricao:
			"Suas presas impressionantes são feitas de gelo. A população diminuiu quando o clima esquentou após a era glacial.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Presa Gêmea",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/51/473Mamoswine_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mamoswine_(Pok%C3%A9mon)",
	},
	{
		nome: "Porygon-Z",
		numero: 474, // considerando a national dex
		tipo: ["Normal"],
		massa: 34.0, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/55/F0474.png",
		estatistica: {
			ps: 85,
			atq: 80,
			def: 70,
			atq_esp: 135,
			def_esp: 75,
			vel: 90,
		},
		descricao:
			"Software adicional foi instalado para torna-lo um Pokémon melhor. No entanto, começou a agir de forma estranha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Virtual",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/8a/474Porygon-Z_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Porygon-Z_(Pok%C3%A9mon)",
	},
	{
		nome: "Gallade",
		numero: 475, // considerando a national dex
		tipo: ["Psíquico", " Lutador"],
		massa: 52.0, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/52/F0475.png",
		estatistica: {
			ps: 68,
			atq: 125,
			def: 65,
			atq_esp: 65,
			def_esp: 115,
			vel: 80,
		},
		descricao:
			"Um mestre da cortesia e da esgrima, luta usando espadas extensíveis nos cotovelos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lâmina",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e1/475Gallade_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gallade_(Pok%C3%A9mon)",
	},
	{
		nome: "Probopass",
		numero: 476, // considerando a national dex
		tipo: ["Rocha", " Metal"],
		massa: 340.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d3/F0476.png",
		estatistica: {
			ps: 60,
			atq: 55,
			def: 145,
			atq_esp: 75,
			def_esp: 150,
			vel: 40,
		},
		descricao:
			"Exala magnetismo forte de todo lugar. Controla três pequenas unidades chamadas 'Mini-Narizes'.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bússola",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a5/476Probopass_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Probopass_(Pok%C3%A9mon)",
	},
	{
		nome: "Dusknoir",
		numero: 477, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 106.6, // em kg
		altura: 2.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/16/F0477.png",
		estatistica: {
			ps: 45,
			atq: 100,
			def: 135,
			atq_esp: 65,
			def_esp: 135,
			vel: 45,
		},
		descricao:
			"A antena em sua cabeça captura ondas de rádio do mundo dos espíritos que lhe ordena levar pessoas até lá.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Agarrador",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1a/477Dusknoir_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dusknoir_(Pok%C3%A9mon)",
	},
	{
		nome: "Froslass",
		numero: 478, // considerando a national dex
		tipo: ["Gelo", " Fantasma"],
		massa: 26.6, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/67/F0478.png",
		estatistica: {
			ps: 70,
			atq: 80,
			def: 70,
			atq_esp: 80,
			def_esp: 70,
			vel: 110,
		},
		descricao:
			"Congela os inimigos com um sopro gelado de quase -50° Celsius. O que parece ser ser corpo é, na verdade, oco.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Terra Gelada",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/78/478Froslass_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Froslass_(Pok%C3%A9mon)",
	},
	{
		nome: "Rotom",
		numero: 479.1, // considerando a national dex
		tipo: ["Elétrico", " Fantasma"],
		massa: 0.3, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/66/F0479.png",
		estatistica: {
			ps: 50,
			atq: 50,
			def: 77,
			atq_esp: 95,
			def_esp: 77,
			vel: 91,
		},
		descricao:
			"Seu corpo é composto de plasma. É conhecido por infiltrar dispositivos eletrônicos e causar estragos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Plasma",
		obtencao: "Mansão da Floresta e possuir nada, ou uma lâmpada",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/01/479Rotom_Normal_Forme_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pok%C3%A9mon)",
	},
	{
		nome: "Rotom Calor",
		numero: 479.2, // considerando a national dex
		tipo: ["Elétrico", " Fogo"],
		massa: 0.3, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/66/F0479.png",
		estatistica: {
			ps: 50,
			atq: 65,
			def: 107,
			atq_esp: 105,
			def_esp: 107,
			vel: 86,
		},
		descricao:
			"Seu corpo é composto de plasma. É conhecido por infiltrar dispositivos eletrônicos e causar estragos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Plasma",
		obtencao: "Mansão da Floresta e possuir um forno de micro-ondas",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4a/479Rotom_Heat_Rotom_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pok%C3%A9mon)",
	},
	{
		nome: "Rotom Lavagem",
		numero: 479.3, // considerando a national dex
		tipo: ["Elétrico", " Água"],
		massa: 0.3, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/66/F0479.png",
		estatistica: {
			ps: 50,
			atq: 65,
			def: 107,
			atq_esp: 105,
			def_esp: 107,
			vel: 86,
		},
		descricao:
			"Seu corpo é composto de plasma. É conhecido por infiltrar dispositivos eletrônicos e causar estragos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Plasma",
		obtencao: "Mansão da Floresta e possuir uma máquina-de-lavar",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/52/479Rotom_Wash_Rotom_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pok%C3%A9mon)",
	},
	{
		nome: "Rotom Congelante",
		numero: 479.4, // considerando a national dex
		tipo: ["Elétrico", " Gelo"],
		massa: 0.3, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/66/F0479.png",
		estatistica: {
			ps: 50,
			atq: 65,
			def: 107,
			atq_esp: 105,
			def_esp: 107,
			vel: 86,
		},
		descricao:
			"Seu corpo é composto de plasma. É conhecido por infiltrar dispositivos eletrônicos e causar estragos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Plasma",
		obtencao: "Mansão da Floresta e possuir um refrigerador",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a9/479Rotom_Frost_Rotom_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pok%C3%A9mon)",
	},
	{
		nome: "Rotom Ventilador",
		numero: 479.5, // considerando a national dex
		tipo: ["Elétrico", " Voador"],
		massa: 0.3, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/66/F0479.png",
		estatistica: {
			ps: 50,
			atq: 65,
			def: 107,
			atq_esp: 105,
			def_esp: 107,
			vel: 86,
		},
		descricao:
			"Seu corpo é composto de plasma. É conhecido por infiltrar dispositivos eletrônicos e causar estragos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Plasma",
		obtencao: "Mansão da Floresta e possuir um ventilador",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9e/479Rotom_Fan_Rotom_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pok%C3%A9mon)",
	},
	{
		nome: "Rotom Corte",
		numero: 479.6, // considerando a national dex
		tipo: ["Elétrico", " Planta"],
		massa: 0.3, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/66/F0479.png",
		estatistica: {
			ps: 50,
			atq: 65,
			def: 107,
			atq_esp: 105,
			def_esp: 107,
			vel: 86,
		},
		descricao:
			"Seu corpo é composto de plasma. É conhecido por infiltrar dispositivos eletrônicos e causar estragos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Plasma",
		obtencao: "Mansão da Floresta e possuir um cortador de grama",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/06/479Rotom_Mow_Rotom_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pok%C3%A9mon)",
	},
	{
		nome: "Uxie",
		numero: 480, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 0.3, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5a/F0480.png",
		estatistica: {
			ps: 75,
			atq: 75,
			def: 130,
			atq_esp: 75,
			def_esp: 130,
			vel: 95,
		},
		descricao:
			"Rumores dizem que seu surgimento deu aos humanos a inteligência para melhorar sua qualidade de vida.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Conhecimento",
		obtencao: "Lago da Perspicácia",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b2/480Uxie_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Uxie_(Pok%C3%A9mon)",
	},
	{
		nome: "Mesprit",
		numero: 481, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 0.3, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/02/F0481.png",
		estatistica: {
			ps: 80,
			atq: 105,
			def: 105,
			atq_esp: 105,
			def_esp: 105,
			vel: 80,
		},
		descricao:
			"Dorme no fundo de um lago. É dito que seu espírito deixa seu corpo para voar na superfície do lago.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Emoção",
		obtencao: "Vagando por Sinnoh",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/04/481Mesprit_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mesprit_(Pok%C3%A9mon)",
	},
	{
		nome: "Azelf",
		numero: 482, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 0.3, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/59/F0482.png",
		estatistica: {
			ps: 75,
			atq: 125,
			def: 70,
			atq_esp: 125,
			def_esp: 70,
			vel: 115,
		},
		descricao:
			"Quando voou, as pessoas ganharam determinação para fazer as coisas. Foi o nascimento da força de vontade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Força de Vontade",
		obtencao: "Lago Valor",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d5/482Azelf_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Azelf_(Pok%C3%A9mon)",
	},
	{
		nome: "Dialga",
		numero: 483, // considerando a national dex
		tipo: ["Metal", " Dragão"],
		massa: 683.0, // em kg
		altura: 5.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/06/F0483.png",
		estatistica: {
			ps: 100,
			atq: 120,
			def: 120,
			atq_esp: 150,
			def_esp: 100,
			vel: 90,
		},
		descricao:
			"Possui o poder de controlar o tempo. Aparece nos mitos da região de Sinnoh como uma deidade antiga.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Temporal",
		obtencao: "Pilar da Lança",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c9/483Dialga_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dialga_(Pok%C3%A9mon)",
	},
	{
		nome: "Palkia",
		numero: 484, // considerando a national dex
		tipo: ["Água", " Dragão"],
		massa: 336.0, // em kg
		altura: 4.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/70/F0484.png",
		estatistica: {
			ps: 90,
			atq: 120,
			def: 100,
			atq_esp: 150,
			def_esp: 120,
			vel: 100,
		},
		descricao:
			"Possui a habilidade de distorcer o espaço. É descrito como uma deidade na mitologia da região de Sinnoh.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espacial",
		obtencao: "Pilar da Lança",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/43/484Palkia_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Palkia_(Pok%C3%A9mon)",
	},
	{
		nome: "Heatran",
		numero: 485, // considerando a national dex
		tipo: ["Fogo", " Metal"],
		massa: 430.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d6/F0485.png",
		estatistica: {
			ps: 91,
			atq: 90,
			def: 106,
			atq_esp: 130,
			def_esp: 106,
			vel: 77,
		},
		descricao:
			"Habita cavernas vulcânicas. Cava com seus pés em forma de cruz para rastejar em tetos e paredes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Casco de Lava",
		obtencao: "Montanha Dura",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/41/485Heatran_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Heatran_(Pok%C3%A9mon)",
	},
	{
		nome: "Regigigas",
		numero: 486, // considerando a national dex
		tipo: ["Normal"],
		massa: 420.0, // em kg
		altura: 3.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/3d/F0486.png",
		estatistica: {
			ps: 110,
			atq: 160,
			def: 110,
			atq_esp: 80,
			def_esp: 110,
			vel: 100,
		},
		descricao:
			"Uma lenda antiga afirma que esse Pokémon rebocou continentes com cordas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Colossal",
		obtencao: "Templo de Snowpoint",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/eb/486Regigigas_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Regigigas_(Pok%C3%A9mon)",
	},
	{
		nome: "Giratina (Forma Alterada)",
		numero: 487.1, // considerando a national dex
		tipo: ["Fantasma", " Dragão"],
		massa: 750.0, // em kg
		altura: 4.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/25/F0487.png",
		estatistica: {
			ps: 150,
			atq: 100,
			def: 120,
			atq_esp: 100,
			def_esp: 120,
			vel: 90,
		},
		descricao:
			"É dito que este Pokémon vive em um mundo reverso ao nosso. Aparece em um cemitério antigo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Renegado",
		obtencao: "Mundo Distorcido",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e9/487Giratina_Altered_Forme_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Giratina_(Pok%C3%A9mon)",
	},
	{
		nome: "Giratina (Forma Origem)",
		numero: 487.2, // considerando a national dex
		tipo: ["Fantasma", " Dragão"],
		massa: 650.0, // em kg
		altura: 6.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/40/F0487O.png",
		estatistica: {
			ps: 150,
			atq: 120,
			def: 100,
			atq_esp: 120,
			def_esp: 100,
			vel: 90,
		},
		descricao:
			"É dito que este Pokémon vive em um mundo reverso ao nosso. Aparece em um cemitério antigo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Renegado",
		obtencao: "Mundo Distorcido e segurar Griseous Orb",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9c/487Giratina_Origin_Forme_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Giratina_(Pok%C3%A9mon)",
	},
	{
		nome: "Cresselia",
		numero: 488, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 85.6, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5e/F0488.png",
		estatistica: {
			ps: 120,
			atq: 70,
			def: 120,
			atq_esp: 75,
			def_esp: 130,
			vel: 85,
		},
		descricao:
			"Partículas brilhantes são liberadas de suas asas como um véu. Dizem que representa a lua crescente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lua",
		obtencao: "Vagando por Sinnoh",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/12/488Cresselia_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cresselia_(Pok%C3%A9mon)",
	},
	{
		nome: "Phione",
		numero: 489, // considerando a national dex
		tipo: ["Água"],
		massa: 3.1, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/0d/F0489.png",
		estatistica: {
			ps: 80,
			atq: 80,
			def: 80,
			atq_esp: 80,
			def_esp: 80,
			vel: 80,
		},
		descricao:
			"Um Pokémon que vive em mares quentes. Infla o saco de flutuação em sua cabeça para flutuar e procurar comida.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon À Deriva",
		obtencao: "Por ovo",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3c/489Phione_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Phione_(Pok%C3%A9mon)",
	},
	{
		nome: "Manaphy",
		numero: 490, // considerando a national dex
		tipo: ["Água"],
		massa: 1.4, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fa/F0490.png",
		estatistica: {
			ps: 100,
			atq: 100,
			def: 100,
			atq_esp: 100,
			def_esp: 100,
			vel: 100,
		},
		descricao:
			"Nascido no frio chão marítimo, nadará grandes distâncias para retornar ao local de nascimento.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Viagem Marítima",
		obtencao: "Por ovo",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/95/490Manaphy_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Manaphy_(Pok%C3%A9mon)",
	},
	{
		nome: "Darkrai",
		numero: 491, // considerando a national dex
		tipo: ["Noturno"],
		massa: 50.5, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/97/F0491.png",
		estatistica: {
			ps: 70,
			atq: 90,
			def: 90,
			atq_esp: 135,
			def_esp: 90,
			vel: 125,
		},
		descricao:
			"Consegue por pessoas a dormir e fazê-las sonhar. É ativo durante noites de lua cheia.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escuridão Total",
		obtencao: "Ilha Lua Nova",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e5/491Darkrai_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Darkrai_(Pok%C3%A9mon)",
	},
	{
		nome: "Shaymin (Forma Terrestre)",
		numero: 492.1, // considerando a national dex
		tipo: ["Planta"],
		massa: 2.1, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/0c/F0492.png",
		estatistica: {
			ps: 100,
			atq: 100,
			def: 100,
			atq_esp: 100,
			def_esp: 100,
			vel: 100,
		},
		descricao:
			"Vive em canteiros de flores e evita ser detectada, enrolando-se para parecer uma planta com flores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gratidão",
		obtencao: "Paraíso das Flores",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6d/492Shaymin_Land_Forme_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shaymin_(Pok%C3%A9mon)",
	},
	{
		nome: "Shaymin (Forma Céu)",
		numero: 492.2, // considerando a national dex
		tipo: ["Planta", " Voador"],
		massa: 5.2, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/0c/F0492.png",
		estatistica: {
			ps: 100,
			atq: 103,
			def: 75,
			atq_esp: 120,
			def_esp: 75,
			vel: 127,
		},
		descricao:
			"Vive em canteiros de flores e evita ser detectada, enrolando-se para parecer uma planta com flores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gratidão",
		obtencao: "Paraíso das Flores",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/bc/492Shaymin_Sky_Forme_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shaymin_(Pok%C3%A9mon)",
	},
	{
		nome: "Arceus",
		numero: 493, // considerando a national dex
		tipo: ["Normal"],
		massa: 320.0, // em kg
		altura: 3.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/0d/F0493.png",
		estatistica: {
			ps: 120,
			atq: 120,
			def: 120,
			atq_esp: 120,
			def_esp: 120,
			vel: 120,
		},
		descricao:
			"É descrito na mitologia como o Pokémon que moldou o universo com seus 1'000 braços.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gratidão",
		obtencao: "Salão da Origem",
		estagio: 1,
		geracao: 4, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/40/493Arceus_Normal_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Arceus_(Pok%C3%A9mon)",
	},
	{
		nome: "Victini",
		numero: 494, // considerando a national dex
		tipo: ["Psíquico", " Fogo"],
		massa: 4.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c2/F0494.png",
		estatistica: {
			ps: 100,
			atq: 100,
			def: 100,
			atq_esp: 100,
			def_esp: 100,
			vel: 100,
		},
		descricao:
			"Cria um suprimento ilimitado de energia dentro de seu corpo, o qual é compartilhado com àqueles que o tocam.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vitória",
		obtencao: "Jardim da Liberdade",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/be/494Victini_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Victini_(Pok%C3%A9mon)",
	},
	{
		nome: "Snivy",
		numero: 495, // considerando a national dex
		tipo: ["Planta"],
		massa: 8.1, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9b/F0495.png",
		estatistica: {
			ps: 45,
			atq: 45,
			def: 55,
			atq_esp: 45,
			def_esp: 55,
			vel: 63,
		},
		descricao:
			"É muito inteligente e calmo. Ficar exposto a muita luz solar torna seus movimentos mais rápidos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Serpente de Grama",
		obtencao: "Laboratório da Professora Juniper",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ee/495Snivy_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Snivy_(Pok%C3%A9mon)",
	},
	{
		nome: "Servine",
		numero: 496, // considerando a national dex
		tipo: ["Planta"],
		massa: 16.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/47/F0496.png",
		estatistica: {
			ps: 60,
			atq: 60,
			def: 75,
			atq_esp: 60,
			def_esp: 75,
			vel: 83,
		},
		descricao:
			"Evitam ataques afundando-se nas sombras de folhagem espessa. Retaliam com técnicas magistrais de chicotadas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Serpente de Grama",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/56/496Servine_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Servine_(Pok%C3%A9mon)",
	},
	{
		nome: "Serperior",
		numero: 497, // considerando a national dex
		tipo: ["Planta"],
		massa: 63.0, // em kg
		altura: 3.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/38/F0497.png",
		estatistica: {
			ps: 75,
			atq: 75,
			def: 95,
			atq_esp: 75,
			def_esp: 95,
			vel: 113,
		},
		descricao:
			"Consegue parar os movimentos de seus oponentes com apenas um olhar. Absorve energia solar e se impulsiona internamente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Real",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a0/497Serperior_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Serperior_(Pok%C3%A9mon)",
	},
	{
		nome: "Tepig",
		numero: 498, // considerando a national dex
		tipo: ["Fogo"],
		massa: 9.9, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/1d/F0498.png",
		estatistica: {
			ps: 65,
			atq: 63,
			def: 45,
			atq_esp: 45,
			def_esp: 45,
			vel: 45,
		},
		descricao:
			"Consegue desviar agilmente dos ataques de seu oponente enquanto dispara bolas de fogo de seu nariz. Tosta frutas antes de comê-las.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Porco de Fogo",
		obtencao: "Laboratório da Professora Juniper",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/10/498Tepig_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tepig_(Pok%C3%A9mon)",
	},
	{
		nome: "Pignite",
		numero: 499, // considerando a national dex
		tipo: ["Fogo", " Lutador"],
		massa: 55.5, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fd/F0499.png",
		estatistica: {
			ps: 90,
			atq: 93,
			def: 55,
			atq_esp: 70,
			def_esp: 55,
			vel: 55,
		},
		descricao:
			"Quando sua chama interna acende, seus movimentos ficam mais rápidos e precisos. Quando está em apuros, emite fumaça.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Porco de Fogo",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/72/499Pignite_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pignite_(Pok%C3%A9mon)",
	},
	{
		nome: "Emboar",
		numero: 500, // considerando a national dex
		tipo: ["Fogo", " Lutador"],
		massa: 150.0, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/ac/F0500.png",
		estatistica: {
			ps: 110,
			atq: 123,
			def: 65,
			atq_esp: 100,
			def_esp: 65,
			vel: 65,
		},
		descricao:
			"Consegue dar socos de fogo incendiando seus punhos com seu queixo em chamas. Se preocupa profundamente com seus amigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mega Porco de Fogo",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/12/500Emboar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Emboar_(Pokémon)",
	},
	{
		nome: "Oshawott",
		numero: 501, // considerando a national dex
		tipo: ["Água"],
		massa: 5.9, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d7/F0501.png",
		estatistica: {
			ps: 55,
			atq: 55,
			def: 45,
			atq_esp: 63,
			def_esp: 45,
			vel: 45,
		},
		descricao:
			"Luta usando a concha em seu estomago. Em resposta a um ataque, retalia imediatamente cortando.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lontra Marinha",
		obtencao: "Laboratório da Professora Juniper",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e3/501Oshawott_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Oshawott_(Pok%C3%A9mon)",
	},
	{
		nome: "Dewott",
		numero: 502, // considerando a national dex
		tipo: ["Água"],
		massa: 24.5, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a0/F0502.png",
		estatistica: {
			ps: 75,
			atq: 75,
			def: 60,
			atq_esp: 83,
			def_esp: 60,
			vel: 60,
		},
		descricao:
			"O treinamento rigoroso é como aprende suas técnicas com concha dupla.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Disciplina",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9f/502Dewott_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dewott_(Pok%C3%A9mon)",
	},
	{
		nome: "Samurott de Unova",
		numero: 503.1, // considerando a national dex
		tipo: ["Água"],
		massa: 94.6, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b9/F0503.png",
		estatistica: {
			ps: 95,
			atq: 100,
			def: 85,
			atq_esp: 108,
			def_esp: 70,
			vel: 70,
		},
		descricao:
			"Parte da armadura em suas patas anteriores se torna uma espada gigante. O som que emite sozinho é suficiente para intimidar a maior parte de seus inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Formidável",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7a/503Samurott_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Samurott_(Pok%C3%A9mon)",
	},
	{
		nome: "Samurott de Hisui",
		numero: 503.2, // considerando a national dex
		tipo: ["Água", " Noturno"],
		massa: 58.2, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b9/F0503.png",
		estatistica: {
			ps: 90,
			atq: 108,
			def: 80,
			atq_esp: 100,
			def_esp: 65,
			vel: 85,
		},
		descricao:
			"Duro de coração e hábil com a lâmina, este raro Pokémon é um produto de sua região. Seus golpes turbulentos atingem os inimigos como ondas incessantes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Formidável",
		obtencao: "Alabaster Icelands: Space-time distortions",
		estagio: 3,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c5/503Samurott_Hisui_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Samurott_(Pok%C3%A9mon)",
	},
	{
		nome: "Patrat",
		numero: 504, // considerando a national dex
		tipo: ["Normal"],
		massa: 11.6, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/70/F0504.png",
		estatistica: {
			ps: 45,
			atq: 55,
			def: 39,
			atq_esp: 35,
			def_esp: 39,
			vel: 42,
		},
		descricao:
			"Usando comida armazenada nas bolsas das bochechas, consegue ficar de guarda por dias. Usa sua cauda para se comunicar com outros.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escoteiro",
		obtencao:
			"Rotas 1, 2, 3, e outras; Jardim dos Sonhos; Rancho Floccesy; e Complexo de Virbank",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/24/504Patrat_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Patrat_(Pok%C3%A9mon)",
	},
	{
		nome: "Watchog",
		numero: 505, // considerando a national dex
		tipo: ["Normal"],
		massa: 27.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9e/F0505.png",
		estatistica: {
			ps: 60,
			atq: 85,
			def: 69,
			atq_esp: 60,
			def_esp: 69,
			vel: 77,
		},
		descricao:
			"Quando avistam um inimigo, suas caudas ficam de erguidas, e cospem as sementes das frutas armazenadas nas bolsas de suas bochechas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vigia",
		obtencao:
			"Rotas 1, 2, 3, e outras; Jardim dos Sonhos; Laboratório P2; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/33/505Watchog_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Watchog_(Pok%C3%A9mon)",
	},
	{
		nome: "Lillipup",
		numero: 506, // considerando a national dex
		tipo: ["Normal"],
		massa: 4.1, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/76/F0506.png",
		estatistica: {
			ps: 45,
			atq: 60,
			def: 45,
			atq_esp: 25,
			def_esp: 45,
			vel: 55,
		},
		descricao:
			"Encara fortes oponentes com grande coragem. Mas, quando em desvantagem em uma luta, este inteligente Pokémon foge.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Filhote",
		obtencao: "Rotas 1, 2, e 3; e Rancho Floccesy",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/58/506Lillipup_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lillipup_(Pok%C3%A9mon)",
	},
	{
		nome: "Herdier",
		numero: 507, // considerando a national dex
		tipo: ["Normal"],
		massa: 14.7, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/08/F0507.png",
		estatistica: {
			ps: 65,
			atq: 80,
			def: 65,
			atq_esp: 35,
			def_esp: 65,
			vel: 60,
		},
		descricao:
			"Possui um pelo preto, semelhante a uma capa que é muito duro e diminui a quantidade de dano que recebe.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cão Leal",
		obtencao:
			"Rotas 1, 2, 3, e outra; Câmara Frigorífica; Laboratório P2; Rancho Floccesy; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/49/507Herdier_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Herdier_(Pok%C3%A9mon)",
	},
	{
		nome: "Stoutland",
		numero: 508, // considerando a national dex
		tipo: ["Normal"],
		massa: 61.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fd/F0508.png",
		estatistica: {
			ps: 85,
			atq: 110,
			def: 90,
			atq_esp: 45,
			def_esp: 90,
			vel: 80,
		},
		descricao:
			"Resgata pessoas presas por nevascas nas montanhas. Sua pelagem peluda o protege do frio.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bom Coração",
		obtencao:
			"Rotas 1, 2, 3, e outra; Câmara Frigorífica; Laboratório P2; e por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e0/508Stoutland_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Stoutland_(Pok%C3%A9mon)",
	},
	{
		nome: "Purrloin",
		numero: 509, // considerando a national dex
		tipo: ["Noturno"],
		massa: 10.1, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/01/F0509.png",
		estatistica: {
			ps: 41,
			atq: 50,
			def: 37,
			atq_esp: 50,
			def_esp: 37,
			vel: 66,
		},
		descricao:
			"Roubam de pessoas por diversão, mas suas vítimas não podem deixar de perdoá-los. Seu jeito fofo engana perfeitamente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Malandro",
		obtencao: "Rotas 2, 3, 19, e outra; e Jardim dos Sonhos",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4b/509Purrloin_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Purrloin_(Pok%C3%A9mon)",
	},
	{
		nome: "Liepard",
		numero: 510, // considerando a national dex
		tipo: ["Noturno"],
		massa: 37.5, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f2/F0510.png",
		estatistica: {
			ps: 64,
			atq: 88,
			def: 50,
			atq_esp: 88,
			def_esp: 50,
			vel: 106,
		},
		descricao:
			"Estes Pokémon desaparecem e aparecem inesperadamente. Muitos treinadores são atraídos por sua bela forma e pelo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cruel",
		obtencao: "Rotas 2, 5, 9, e outra; Jardim dos Sonhos; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f8/510Liepard_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Liepard_(Pok%C3%A9mon)",
	},
	{
		nome: "Pansage",
		numero: 511, // considerando a national dex
		tipo: ["Planta"],
		massa: 10.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f1/F0511.png",
		estatistica: {
			ps: 50,
			atq: 53,
			def: 48,
			atq_esp: 53,
			def_esp: 48,
			vel: 64,
		},
		descricao:
			"Este Pokémon mora nas profundezas da floresta. Comer uma folha de sua cabeça afasta o cansaço como que por mágica.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Macaco de Grama",
		obtencao:
			"Floresta Pinwheel; Lostlorn Forest; e recebido em Jardim dos Sonhos",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2f/511Pansage_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pansage_(Pok%C3%A9mon)",
	},
	{
		nome: "Simisage",
		numero: 512, // considerando a national dex
		tipo: ["Planta"],
		massa: 30.5, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/da/F0512.png",
		estatistica: {
			ps: 75,
			atq: 98,
			def: 63,
			atq_esp: 98,
			def_esp: 63,
			vel: 101,
		},
		descricao:
			"Mal-humorado, luta balançando sua cauda farpada descontroladamente. A folha que cresce em sua cabeça é muito amarga.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Macaco de Espinhos",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/18/512Simisage_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Simisage_(Pok%C3%A9mon)",
	},
	{
		nome: "Pansear",
		numero: 513, // considerando a national dex
		tipo: ["Fogo"],
		massa: 11.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/db/F0513.png",
		estatistica: {
			ps: 50,
			atq: 53,
			def: 48,
			atq_esp: 53,
			def_esp: 48,
			vel: 64,
		},
		descricao:
			"Quando fica irritado, a temperatura do tufo da cabeça chega a 300° C. Usa seu tufo para assar frutas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Alta Temperatura",
		obtencao:
			"Floresta Pinwheel; Lostlorn Forest; e recebido em Jardim dos Sonhos",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a0/513Pansear_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pansear_(Pok%C3%A9mon)",
	},
	{
		nome: "Simisear",
		numero: 514, // considerando a national dex
		tipo: ["Fogo"],
		massa: 28.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9f/F0514.png",
		estatistica: {
			ps: 75,
			atq: 98,
			def: 63,
			atq_esp: 98,
			def_esp: 63,
			vel: 101,
		},
		descricao:
			"Gosta de doces por se transformarem em energia para o fogo que queima dentro de seu corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Brasa",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3c/514Simisear_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Simisear_(Pok%C3%A9mon)",
	},
	{
		nome: "Panpour",
		numero: 515, // considerando a national dex
		tipo: ["Água"],
		massa: 13.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/22/F0515.png",
		estatistica: {
			ps: 50,
			atq: 53,
			def: 48,
			atq_esp: 53,
			def_esp: 48,
			vel: 64,
		},
		descricao:
			"A água armazenada dentro do tufo em sua cabeça é cheia de nutrientes. Plantas que recebem sua água crescem muito.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Spray",
		obtencao:
			"Floresta Pinwheel; Lostlorn Forest; e recebido em Jardim dos Sonhos",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d0/515Panpour_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Panpour_(Pok%C3%A9mon)",
	},
	{
		nome: "Simipour",
		numero: 516, // considerando a national dex
		tipo: ["Água"],
		massa: 29.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/06/F0516.png",
		estatistica: {
			ps: 75,
			atq: 98,
			def: 63,
			atq_esp: 98,
			def_esp: 63,
			vel: 101,
		},
		descricao:
			"O tufo em sua cabeça retém água. Quando o nível está baixo, repõe o tufo sifonando água com sua cauda.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gêiser",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/10/516Simipour_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Simipour_(Pok%C3%A9mon)",
	},
	{
		nome: "Munna",
		numero: 517, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 23.3, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/de/F0517.png",
		estatistica: {
			ps: 76,
			atq: 25,
			def: 45,
			atq_esp: 67,
			def_esp: 55,
			vel: 24,
		},
		descricao:
			"Este Pokémon sempre flutua no ar. Pessoas cujos sonhos foram devorados por este Pokémon esquecem sobre o que o sonho era.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Devorador de Sonhos",
		obtencao: "Jardim dos Sonhos",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f2/517Munna_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Munna_(Pok%C3%A9mon)",
	},
	{
		nome: "Musharna",
		numero: 518, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 60.5, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/63/F0518.png",
		estatistica: {
			ps: 116,
			atq: 55,
			def: 85,
			atq_esp: 107,
			def_esp: 95,
			vel: 29,
		},
		descricao:
			"A névoa que emana de sua testa está repleta de sonhos de pessoas e Pokémon.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cochilando",
		obtencao: "Jardim dos Sonhos; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/8e/518Musharna_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Musharna_(Pok%C3%A9mon)",
	},
	{
		nome: "Pidove",
		numero: 519, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 2.1, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/87/F0519.png",
		estatistica: {
			ps: 50,
			atq: 55,
			def: 50,
			atq_esp: 36,
			def_esp: 30,
			vel: 43,
		},
		descricao:
			"Vivem em cidades. Estão acostumados com pessoas. Os bandos geralmente se reúnem em parques e praças.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pombinho",
		obtencao:
			"Rotas 3, e 20; Floresta Pinwheel; Rancho Floccesy; e Complexo de Virbank",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9c/519Pidove_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pidove_(Pok%C3%A9mon)",
	},
	{
		nome: "Tranquill",
		numero: 520, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 15.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/2f/F0520.png",
		estatistica: {
			ps: 62,
			atq: 77,
			def: 62,
			atq_esp: 50,
			def_esp: 42,
			vel: 65,
		},
		descricao:
			"Consegue retornar à localização de seu treinador independente da distância que os separa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pombo Selvagem",
		obtencao:
			"Rotas 3, 6, 7, e outra; Floresta Pinwheel; Lostlorn Forest; Estrada da Vitória; Dragonspiral Tower; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/96/520Tranquill_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tranquill_(Pok%C3%A9mon)",
	},
	{
		nome: "Unfezant",
		numero: 521, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 29.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fa/F0521.png",
		estatistica: {
			ps: 80,
			atq: 115,
			def: 80,
			atq_esp: 65,
			def_esp: 55,
			vel: 93,
		},
		descricao:
			"Os machos balançam a plumagem da cabeça para ameaçar os oponentes. As habilidades de voo das fêmeas superam as dos machos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Orgulhoso",
		obtencao:
			"Rotas 3, 6, 7, e outra; Floresta Longlorn; Dragonspiral Tower; Estrada da Vitória; e por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2e/0521Unfezant-Male.png",
			"https://archives.bulbagarden.net/media/upload/d/d9/0521Unfezant-Female.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Unfezant_(Pok%C3%A9mon)",
	},
	{
		nome: "Blitzle",
		numero: 522, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 29.8, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/cf/F0522.png",
		estatistica: {
			ps: 45,
			atq: 60,
			def: 32,
			atq_esp: 50,
			def_esp: 32,
			vel: 76,
		},
		descricao:
			"Sua crina brilha quando descarrega eletricidade. Usa sua crina brilhante para se comunicar outros de sua espécie.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Eletrificado",
		obtencao: "Rota 3",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1c/522Blitzle_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Blitzle_(Pok%C3%A9mon)",
	},
	{
		nome: "Zebstrika",
		numero: 523, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 79.5, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/77/F0523.png",
		estatistica: {
			ps: 75,
			atq: 100,
			def: 63,
			atq_esp: 80,
			def_esp: 63,
			vel: 116,
		},
		descricao:
			"Este Pokémon mal-humorado é perigoso por atirar raios de sua crina em todas as direções quando está irritado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Relâmpago",
		obtencao: "Rotas 3, e 7; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/67/523Zebstrika_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zebstrika_(Pok%C3%A9mon)",
	},
	{
		nome: "Roggenrola",
		numero: 524, // considerando a national dex
		tipo: ["Rocha"],
		massa: 18.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a2/F0524.png",
		estatistica: {
			ps: 55,
			atq: 75,
			def: 85,
			atq_esp: 25,
			def_esp: 25,
			vel: 15,
		},
		descricao:
			"Foram descobertos cem anos atrás em uma fissura de terremoto. Dentro de cada um está um núcleo de energia.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Manto",
		obtencao: "Wellspring Cave; e Relic Passage",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/92/524Roggenrola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Roggenrola_(Pok%C3%A9mon)",
	},
	{
		nome: "Boldore",
		numero: 525, // considerando a national dex
		tipo: ["Rocha"],
		massa: 102.0, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e6/F0525.png",
		estatistica: {
			ps: 70,
			atq: 105,
			def: 105,
			atq_esp: 50,
			def_esp: 40,
			vel: 20,
		},
		descricao:
			"Sua energia era muito grande para ser contida, a energia vazou e formou cristais alaranjados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Minério",
		obtencao:
			"Relic Passage; Wellspring Cave; Caverna da Rocha Elétrica; Caverna de Mistralton; Clay Tunnel; Montanha Trançada; Reversal Mountain; Seaside Cave; Challenger's Cave; Estrada da Vitória; Underground Ruins; Giant Chasm; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9d/525Boldore_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Boldore_(Pok%C3%A9mon)",
	},
	{
		nome: "Gigalith",
		numero: 526, // considerando a national dex
		tipo: ["Rocha"],
		massa: 260.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/38/F0526.png",
		estatistica: {
			ps: 85,
			atq: 135,
			def: 130,
			atq_esp: 60,
			def_esp: 80,
			vel: 25,
		},
		descricao:
			"A energia solar absorvida pelos cristais alaranjados de seu corpo é aumentada internamente e disparada por sua boca.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Comprimido",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5c/526Gigalith_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gigalith_(Pok%C3%A9mon)",
	},
	{
		nome: "Woobat",
		numero: 527, // considerando a national dex
		tipo: ["Psíquico", " Voador"],
		massa: 2.1, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/67/F0527.png",
		estatistica: {
			ps: 65,
			atq: 45,
			def: 43,
			atq_esp: 55,
			def_esp: 43,
			vel: 72,
		},
		descricao:
			"Seu habitat são florestas escuras e cavernas. Emite ondas ultrassônicas do nariz para aprender sobre os arredores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Morcego",
		obtencao:
			"Rota 6; Wellspring Cave; Caverna de Mistralton; Montanha Trançada; Challenger's Cave; Estrada da Vitória; Reversal Mountain; Clay Tunnerl; Relic Passage; Underground Ruins; Seaside Cave",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/35/527Woobat_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Woobat_(Pok%C3%A9mon)",
	},
	{
		nome: "Swoobat",
		numero: 528, // considerando a national dex
		tipo: ["Psíquico", " Voador"],
		massa: 10.5, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c9/F0528.png",
		estatistica: {
			ps: 67,
			atq: 57,
			def: 55,
			atq_esp: 77,
			def_esp: 55,
			vel: 114,
		},
		descricao:
			"Emite ondas sonoras de várias frequências do seu nariz, incluindo algumas poderosas o suficiente para destruir rochas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Galanteador",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/36/528Swoobat_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Swoobat_(Pok%C3%A9mon)",
	},
	{
		nome: "Drilbur",
		numero: 529, // considerando a national dex
		tipo: ["Terra"],
		massa: 8.5, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/0b/F0529.png",
		estatistica: {
			ps: 60,
			atq: 85,
			def: 40,
			atq_esp: 30,
			def_esp: 45,
			vel: 68,
		},
		descricao:
			"Consegue cavar o chão a uma velocidade de 50 km/h. Poderia dar a um carro na superfície uma boa corrida.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Toupeira",
		obtencao:
			"Wellspring Cave; Relic Passage; Caverna da Rocha Elétrica; Caverna de Mistralton; Montanha Trançada",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/63/529Drilbur_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Drilbur_(Pok%C3%A9mon)",
	},
	{
		nome: "Excadrill",
		numero: 530, // considerando a national dex
		tipo: ["Terra", " Metal"],
		massa: 40.4, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/3a/F0530.png",
		estatistica: {
			ps: 110,
			atq: 135,
			def: 60,
			atq_esp: 50,
			def_esp: 65,
			vel: 88,
		},
		descricao:
			"Pode ajudar em construção de túneis. Sua broca evoluiu para aço forte o suficiente para perfurar placas de ferro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Subterrâneo",
		obtencao:
			"Challenger's Cave; Clay Tunnel; Montanha Trançada; Estrada da Vitória; Reversal Mountain; Wellspring Cave; Seaside Cave; Giant Chasm; Underground Ruins; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/78/530Excadrill_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Excadrill_(Pok%C3%A9mon)",
	},
	{
		nome: "Audino",
		numero: 531, // considerando a national dex
		tipo: ["Normal"],
		massa: 31.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/83/F0531.png",
		estatistica: {
			ps: 103,
			atq: 60,
			def: 86,
			atq_esp: 60,
			def_esp: 86,
			vel: 50,
		},
		descricao:
			"Toca os outros com os sensores em suas orelhas, usando o som dos batimentos cardíacos para dizer como estão se sentindo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Atencioso",
		obtencao:
			"Rotas 1, 2, 3, e outras; Rancho Floccesy; Complexo de Virbank; Laboratório P2; Jardim dos Sonhos; Floresta Pinwheel; Lostlorn Forest; Dragonspiral Tower; Vila da Ponte; Giant Chasm; Abundant Shrine; Câmara Frigorífica; Estrada da Vitória; Reversal Mountain; e Nature Preserve",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/98/531Audino_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Audino_(Pok%C3%A9mon)",
	},
	{
		nome: "Timburr",
		numero: 532, // considerando a national dex
		tipo: ["Lutador"],
		massa: 12.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/52/F0532.png",
		estatistica: {
			ps: 75,
			atq: 80,
			def: 55,
			atq_esp: 25,
			def_esp: 35,
			vel: 35,
		},
		descricao:
			"Esses Pokémon aparecem em canteiros de obras e ajudam na construção. Sempre carregam toras quadradas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Muscular",
		obtencao: "Floresta Pinwheel; Câmara Frigorífica; e Relic Passage",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1a/532Timburr_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Timburr_(Pok%C3%A9mon)",
	},
	{
		nome: "Gurdurr",
		numero: 533, // considerando a national dex
		tipo: ["Lutador"],
		massa: 40.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d3/F0533.png",
		estatistica: {
			ps: 85,
			atq: 105,
			def: 85,
			atq_esp: 40,
			def_esp: 50,
			vel: 40,
		},
		descricao:
			"Fortalecem seus corpos carregando vigas de aço. Exibem seus grandes músculos para os amigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Muscular",
		obtencao:
			"Relic Passage; Montanha Trançada; Floresta Pinwheel; Estrada da Vitória; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/46/533Gurdurr_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gurdurr_(Pok%C3%A9mon)",
	},
	{
		nome: "Conkeldurr",
		numero: 534, // considerando a national dex
		tipo: ["Lutador"],
		massa: 87.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8f/F0534.png",
		estatistica: {
			ps: 105,
			atq: 140,
			def: 95,
			atq_esp: 55,
			def_esp: 65,
			vel: 45,
		},
		descricao:
			"Usam pilares de concreto como bengalas. Conhecem movimentos que os permite balançar os pilares livremente em batalha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Muscular",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/89/534Conkeldurr_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Conkeldurr_(Pok%C3%A9mon)",
	},
	{
		nome: "Tympole",
		numero: 535, // considerando a national dex
		tipo: ["Água"],
		massa: 4.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/0b/F0535.png",
		estatistica: {
			ps: 50,
			atq: 50,
			def: 40,
			atq_esp: 50,
			def_esp: 40,
			vel: 64,
		},
		descricao:
			"Alertam outros do perigo vibrando suas bochechas para criar um som de alta frequência.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Girino",
		obtencao: "Floresta Pinwheel",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/22/535Tympole_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tympole_(Pok%C3%A9mon)",
	},
	{
		nome: "Palpitoad",
		numero: 536, // considerando a national dex
		tipo: ["Água", " Terra"],
		massa: 17.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/26/F0536.png",
		estatistica: {
			ps: 75,
			atq: 65,
			def: 55,
			atq_esp: 65,
			def_esp: 55,
			vel: 69,
		},
		descricao:
			"Quando vibram as saliências em suas cabeças, podem fazer ondas na água ou vibrações semelhantes a terremotos na terra.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vibração",
		obtencao: "Rota 8; Floresta Pinwheel; Moor of Icirrus; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/47/536Palpitoad_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Palpitoad_(Pok%C3%A9mon)",
	},
	{
		nome: "Seismitoad",
		numero: 537, // considerando a national dex
		tipo: ["Água", " Terra"],
		massa: 62.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/7a/F0537.png",
		estatistica: {
			ps: 105,
			atq: 95,
			def: 75,
			atq_esp: 85,
			def_esp: 75,
			vel: 74,
		},
		descricao:
			"Atiram líquido paralisante das saliências de suas cabeças. Usam para machucar seus oponentes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vibração",
		obtencao: "Rota 8; Moor of Icirrus; Floresta de Pinwheel; e por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/af/537Seismitoad_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Seismitoad_(Pok%C3%A9mon)",
	},
	{
		nome: "Throh",
		numero: 538, // considerando a national dex
		tipo: ["Lutador"],
		massa: 55.5, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/3d/F0538.png",
		estatistica: {
			ps: 120,
			atq: 100,
			def: 85,
			atq_esp: 30,
			def_esp: 85,
			vel: 45,
		},
		descricao:
			"Quando aperta seu cinto, se torna mais forte. Espécimes selvagens deste Pokémon usam videiras para tecer os próprios cintos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Judô",
		obtencao:
			"Rotas 10, 15, 18, e outra; Floresta Pinwheel; e Estrada da Vitória",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6d/538Throh_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Throh_(Pok%C3%A9mon)",
	},
	{
		nome: "Sawk",
		numero: 539, // considerando a national dex
		tipo: ["Lutador"],
		massa: 51.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/15/F0539.png",
		estatistica: {
			ps: 75,
			atq: 125,
			def: 75,
			atq_esp: 30,
			def_esp: 75,
			vel: 85,
		},
		descricao:
			"O som deste Pokémon socando rochas e árvores pode ser ouvido desde as montanhas onde treinam.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Caratê",
		obtencao:
			"Rotas 10, 15, 18, e outra; Floresta Pinwheel; e Estrada da Vitória",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/93/539Sawk_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sawk_(Pok%C3%A9mon)",
	},
	{
		nome: "Sewaddle",
		numero: 540, // considerando a national dex
		tipo: ["Inseto", " Planta"],
		massa: 2.5, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8d/F0540.png",
		estatistica: {
			ps: 45,
			atq: 53,
			def: 70,
			atq_esp: 40,
			def_esp: 60,
			vel: 42,
		},
		descricao:
			"Este Pokémon faz roupas para si mesmo. Mastiga folhas e as costura com linha pegajosa expelida de sua boca.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Costura",
		obtencao: "Rotas 12, e 20; e Floresta de Pinwheel",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b5/540Sewaddle_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sewaddle_(Pok%C3%A9mon)",
	},
	{
		nome: "Swadloon",
		numero: 541, // considerando a national dex
		tipo: ["Inseto", " Planta"],
		massa: 7.3, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b2/F0541.png",
		estatistica: {
			ps: 55,
			atq: 63,
			def: 90,
			atq_esp: 50,
			def_esp: 80,
			vel: 42,
		},
		descricao:
			"Protege a si mesmo do frio se enrolando em folhas. Fica em movimento, comendo folhas em florestas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Embrulho de Folhas",
		obtencao: "Rota 6; Lostlorn Forest; Floresta Pinwheel; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a3/541Swadloon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Swadloon_(Pok%C3%A9mon)",
	},
	{
		nome: "Leavanny",
		numero: 542, // considerando a national dex
		tipo: ["Inseto", " Planta"],
		massa: 20.5, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c7/F0542.png",
		estatistica: {
			ps: 75,
			atq: 103,
			def: 80,
			atq_esp: 70,
			def_esp: 80,
			vel: 92,
		},
		descricao:
			"Ao encontrar um pequeno Pokémon, ece roupas para ele com folhas, usando os cortadores em seus braços e seda pegajosa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Alimentador",
		obtencao: "Rotas 6, e 12; Lostlorn Forest; e por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5a/542Leavanny_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Leavanny_(Pok%C3%A9mon)",
	},
	{
		nome: "Venipede",
		numero: 543, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 5.3, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b2/F0543.png",
		estatistica: {
			ps: 30,
			atq: 45,
			def: 59,
			atq_esp: 30,
			def_esp: 39,
			vel: 57,
		},
		descricao:
			"Sua mordida injeta um veneno potente, suficiente para paralisar grandes pássaros que tentem fazê-lo de presa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Centípede",
		obtencao: "Rota 20; Floresta de Pinwheel; e Lostlorn Forest",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/25/543Venipede_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Venipede_(Pok%C3%A9mon)",
	},
	{
		nome: "Whirlpede",
		numero: 544, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 58.5, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/58/F0544.png",
		estatistica: {
			ps: 40,
			atq: 55,
			def: 99,
			atq_esp: 40,
			def_esp: 79,
			vel: 47,
		},
		descricao:
			"Protegido por uma carapaça dura, gira seu corpo como uma roda e colide furiosamente com seus inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Curlipede",
		obtencao: "Lostlorn Forest; Floresta Pinwheel; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c2/544Whirlipede_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Whirlipede_(Pok%C3%A9mon)",
	},
	{
		nome: "Scolipede",
		numero: 545, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 200.5, // em kg
		altura: 2.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/61/F0545.png",
		estatistica: {
			ps: 60,
			atq: 100,
			def: 89,
			atq_esp: 55,
			def_esp: 69,
			vel: 112,
		},
		descricao:
			"Com movimentos rápidos, persegue seus adversários, atacando implacavelmente com seus chifres até que prevaleça.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Megapede",
		obtencao: "Floresta Pinwheel; e por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/09/545Scolipede_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Scolipede_(Pok%C3%A9mon)",
	},
	{
		nome: "Cottonee",
		numero: 546, // considerando a national dex
		tipo: ["Planta", " Fada"],
		massa: 0.6, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/ee/F0546.png",
		estatistica: {
			ps: 40,
			atq: 27,
			def: 60,
			atq_esp: 37,
			def_esp: 50,
			vel: 66,
		},
		descricao:
			"Quando atacado, escapa atirando algodão de seu corpo. O algodão serve como uma distração para o atacante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Almofada de Algodão",
		obtencao:
			"Lostlorn Forest; Floresta Pinwheel; Abundant Shrine; e Estrada da Vitória",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/dc/546Cottonee_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cottonee_(Pok%C3%A9mon)",
	},
	{
		nome: "Whimsicott",
		numero: 547, // considerando a national dex
		tipo: ["Planta", " Fada"],
		massa: 6.6, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/21/F0547.png",
		estatistica: {
			ps: 60,
			atq: 67,
			def: 85,
			atq_esp: 77,
			def_esp: 75,
			vel: 116,
		},
		descricao:
			"Assim como o vento, consegue passar por qualquer brecha, não importa quão pequena. Deixa bolas de penugem branca para trás.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Véu de Vento",
		obtencao:
			"Floresta Pinwheel; Lostlorn Forest; Abundant Shrine; e por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e1/547Whimsicott_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Whimsicott_(Pok%C3%A9mon)",
	},
	{
		nome: "Petilil",
		numero: 548, // considerando a national dex
		tipo: ["Planta"],
		massa: 6.6, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5e/F0548.png",
		estatistica: {
			ps: 45,
			atq: 35,
			def: 50,
			atq_esp: 70,
			def_esp: 50,
			vel: 30,
		},
		descricao:
			"As folhas em sua cabeça são muito amargas. É conhecido que comer uma dessas folhas por refrescar um corpo cansado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bulbo",
		obtencao:
			"Floresta Pinwheel; Lostlorn Forest; Abundant Shrine; e Estrada da Vitória",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b2/548Petilil_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Petilil_(Pok%C3%A9mon)",
	},
	{
		nome: "Lilligant de Unova",
		numero: 549.1, // considerando a national dex
		tipo: ["Planta"],
		massa: 1.1, // em kg
		altura: 16.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/4e/F0549.png",
		estatistica: {
			ps: 70,
			atq: 60,
			def: 75,
			atq_esp: 110,
			def_esp: 75,
			vel: 90,
		},
		descricao:
			"Até mesmo treinadores veteranos enfrentam o desafio de fazer sua linda flor florescer. Este Pokémon é popular com celebridades.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Florescer",
		obtencao:
			"Floresta Pinwheel; Lostlorn Forest; Abundant Shrine; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/41/549Lilligant_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lilligant_(Pok%C3%A9mon)",
	},
	{
		nome: "Lilligant de Hisui",
		numero: 549.2, // considerando a national dex
		tipo: ["Planta", " Lutador"],
		massa: 19.2, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/4e/F0549.png",
		estatistica: {
			ps: 70,
			atq: 105,
			def: 75,
			atq_esp: 50,
			def_esp: 75,
			vel: 105,
		},
		descricao:
			"Suspeito que suas pernas bem desenvolvidas são o resultado de uma vida passada em montanhas cobertas de neve profunda. O perfume que exala de sua coroa de flores anima aqueles que estão por perto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pirueta",
		obtencao: "Crimson Mirelands; e por evolução",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1b/549Lilligant-Hisui_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lilligant_(Pok%C3%A9mon)",
	},
	{
		nome: "Basculin",
		numero: 550, // considerando a national dex
		tipo: ["Água"],
		massa: 18.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/48/F0550.png",
		estatistica: {
			ps: 70,
			atq: 92,
			def: 65,
			atq_esp: 80,
			def_esp: 55,
			vel: 98,
		},
		descricao:
			"Suas variações vermelha e azul se dão tão mal que começam a brigar imediatamente. Esses Pokemon são muito hostis.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Hostil ou Pokémon Manso (depende da variação)",
		obtencao:
			"Rotas 1, 3, 6, e outras; Wellspring Cave; Floresta Pinwheel; Dragonspiral Tower; Challenger's Cave; Rancho Floccesy; Relic Passage; Clay Tunnel; Estrada da Vitória; Vila da Ponte; Giant Chasm; Abundant Shrine; Nature Preserve; e Lostlorn Forest",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9c/550Basculin_Blue_Stripe_Form_Dream.png",
			"https://archives.bulbagarden.net/media/upload/6/67/550Basculin_Red_Stripe_Form_Dream.png",
			"https://archives.bulbagarden.net/media/upload/2/2c/550Basculin-White_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Basculin_(Pok%C3%A9mon)",
	},
	{
		nome: "Sandile",
		numero: 551, // considerando a national dex
		tipo: ["Terra", " Noturno"],
		massa: 15.2, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e2/F0551.png",
		estatistica: {
			ps: 50,
			atq: 72,
			def: 35,
			atq_esp: 35,
			def_esp: 35,
			vel: 65,
		},
		descricao:
			"Vivem enterrados em areias do deserto. As areias aquecidas pelo sol evitam que a temperatura de seus corpos de caia.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Crocodilo do Deserto",
		obtencao: "Rota 4; Resort do Deserto; e Castelo Relíquia",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5f/551Sandile_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sandile_(Pok%C3%A9mon)",
	},
	{
		nome: "Krokorok",
		numero: 552, // considerando a national dex
		tipo: ["Terra", " Noturno"],
		massa: 33.4, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b4/F0552.png",
		estatistica: {
			ps: 60,
			atq: 82,
			def: 45,
			atq_esp: 45,
			def_esp: 45,
			vel: 74,
		},
		descricao:
			"Vivem em grupos de alguns indivíduos. Membranas protetoras protegem seus olhos de tempestades de areia.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Crocodilo do Deserto",
		obtencao: "Castelo Relíquia; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e5/552Krokorok_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Krokorok_(Pok%C3%A9mon)",
	},
	{
		nome: "Krookodile",
		numero: 553, // considerando a national dex
		tipo: ["Terra", " Noturno"],
		massa: 96.3, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/06/F0553.png",
		estatistica: {
			ps: 95,
			atq: 117,
			def: 80,
			atq_esp: 65,
			def_esp: 70,
			vel: 92,
		},
		descricao:
			"Nunca permitem a presa que escape. Suas mandíbulas são tão poderosas que conseguem esmagar a carroceria de um automóvel.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Intimidação",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d2/553Krookodile_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Krookodile_(Pok%C3%A9mon)",
	},
	{
		nome: "Darumaka de Unova",
		numero: 554.1, // considerando a national dex
		tipo: ["Fogo"],
		massa: 37.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f6/F0554.png",
		estatistica: {
			ps: 70,
			atq: 90,
			def: 45,
			atq_esp: 15,
			def_esp: 45,
			vel: 50,
		},
		descricao:
			"Quando seu fogo interno está queimando, não consegue se acalmar e corre por aí. Quando o fogo diminui, adormece.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Charme Zen",
		obtencao: "Rota 4; e Resort do Deserto",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e1/554Darumaka_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Darumaka_(Pok%C3%A9mon)",
	},
	{
		nome: "Darumaka de Galar",
		numero: 554.2, // considerando a national dex
		tipo: ["Gelo"],
		massa: 40.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f6/F0554.png",
		estatistica: {
			ps: 70,
			atq: 90,
			def: 45,
			atq_esp: 15,
			def_esp: 45,
			vel: 50,
		},
		descricao:
			"Viveu em áreas nevadas por tanto tempo que seu saco de fogo esfriou e atrofiou. Agora possui um órgão que gera frio no lugar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Charme Zen",
		obtencao: "Rotas 8, e 10; e Snowslide Slope",
		estagio: 1,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/bb/554Darumaka_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Darumaka_(Pok%C3%A9mon)",
	},
	{
		nome: "Darmanitan de Unova (Modo Padrão)",
		numero: 555.11, // considerando a national dex
		tipo: ["Fogo"],
		massa: 92.9, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/ab/F0555.png",
		estatistica: {
			ps: 105,
			atq: 140,
			def: 55,
			atq_esp: 30,
			def_esp: 55,
			vel: 95,
		},
		descricao:
			"Seu fogo interno queima a 1'400° Celsius, gerando energia suficiente para destruir um caminhão de lixo com um só soco.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Flamejante",
		obtencao: "Resort do Deserto; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/07/555Darmanitan_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Darmanitan_(Pok%C3%A9mon)",
	},
	{
		nome: "Darmanitan de Unova (Modo Zen)",
		numero: 555.12, // considerando a national dex
		tipo: ["Fogo", " Psíquico"],
		massa: 92.9, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/ab/F0555.png",
		estatistica: {
			ps: 105,
			atq: 30,
			def: 105,
			atq_esp: 140,
			def_esp: 105,
			vel: 55,
		},
		descricao:
			"Seu fogo interno queima a 1'400° Celsius, gerando energia suficiente para destruir um caminhão de lixo com um só soco.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Flamejante",
		obtencao: "Resort do Deserto; por evolução; e estar abaixo dos 50% de PS",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6b/555Darmanitan_Zen_Mode_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Darmanitan_(Pok%C3%A9mon)",
	},
	{
		nome: "Darmanitan de Galar (Modo Padrão)",
		numero: 555.21, // considerando a national dex
		tipo: ["Gelo"],
		massa: 120.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/ab/F0555.png",
		estatistica: {
			ps: 105,
			atq: 140,
			def: 55,
			atq_esp: 30,
			def_esp: 55,
			vel: 95,
		},
		descricao:
			"Em dias quando nevascas passam, tudo se resume a onde as pessoas vivem. Este Pokémon guarda comida na bola de neve em sua cabeça, levando-a para casa mais tarde.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Charme Zen",
		obtencao: "Snowslide Slope; e por evolução",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/32/555Darmanitan_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Darmanitan_(Pok%C3%A9mon)",
	},
	{
		nome: "Darmanitan de Galar (Modo Zen)",
		numero: 555.22, // considerando a national dex
		tipo: ["Gelo", " Fogo"],
		massa: 120.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/ab/F0555.png",
		estatistica: {
			ps: 105,
			atq: 160,
			def: 55,
			atq_esp: 30,
			def_esp: 55,
			vel: 135,
		},
		descricao:
			"Raiva reacendeu seu saco de fogo atrofiado. Este Pokémon cospe fogo em todos os lugares enquanto ataca indiscriminadamente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Flamejante",
		obtencao: "Snowslide Slope; por evolução; e estar abaixo dos 50% de PS",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/88/555Darmanitan-Galar-Zen_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Darmanitan_(Pok%C3%A9mon)",
	},
	{
		nome: "Maractus",
		numero: 556, // considerando a national dex
		tipo: ["Planta"],
		massa: 28.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d1/F0556.png",
		estatistica: {
			ps: 75,
			atq: 86,
			def: 67,
			atq_esp: 106,
			def_esp: 67,
			vel: 60,
		},
		descricao:
			"Usa uma música acelerada e dança para afastar os Pokémon pássaros que atacam suas sementes de flores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cacto",
		obtencao: "Resort de Deserto",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/87/556Maractus_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Maractus_(Pok%C3%A9mon)",
	},
	{
		nome: "Dwebble",
		numero: 557, // considerando a national dex
		tipo: ["Inseto", " Rocha"],
		massa: 14.5, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/78/F0557.png",
		estatistica: {
			ps: 50,
			atq: 65,
			def: 85,
			atq_esp: 35,
			def_esp: 35,
			vel: 55,
		},
		descricao:
			"Este Pokémon consegue facilmente derreter buracos em rochas duras com um líquido secretado de sua boca.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rochoso",
		obtencao: "Rota 18; e Resort do Deserto",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/61/557Dwebble_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dwebble_(Pok%C3%A9mon)",
	},
	{
		nome: "Crustle",
		numero: 558, // considerando a national dex
		tipo: ["Inseto", " Rocha"],
		massa: 200.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5a/F0558.png",
		estatistica: {
			ps: 70,
			atq: 105,
			def: 125,
			atq_esp: 65,
			def_esp: 75,
			vel: 45,
		},
		descricao:
			"Quando compete por território, este Pokémon luta ferozmente. Aquele cuja pedra é quebrada é o perdedor da batalha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Casa de Pedra",
		obtencao: "Rota 18; Seaside Cave; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1b/558Crustle_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Crustle_(Pok%C3%A9mon)",
	},
	{
		nome: "Scraggy",
		numero: 559, // considerando a national dex
		tipo: ["Noturno", " Lutador"],
		massa: 11.8, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/05/F0559.png",
		estatistica: {
			ps: 50,
			atq: 75,
			def: 70,
			atq_esp: 35,
			def_esp: 70,
			vel: 48,
		},
		descricao:
			"Sua pele tem uma elasticidade emborrachada, por isso consegue reduzir os danos puxando defensivamente a pele até o pescoço.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Perda",
		obtencao: "Rotas 1, 4, e 18; Resort do Deserto; e Laboratório P2",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/56/559Scraggy_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Scraggy_(Pok%C3%A9mon)",
	},
	{
		nome: "Scrafty",
		numero: 560, // considerando a national dex
		tipo: ["Noturno", " Lutador"],
		massa: 30.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a7/F0560.png",
		estatistica: {
			ps: 65,
			atq: 90,
			def: 115,
			atq_esp: 45,
			def_esp: 115,
			vel: 58,
		},
		descricao:
			"Grupos deste Pokémon batem em qualquer coisa que entre em seu território. Cada um consegue cuspir líquido ácido de sua boca.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bandido",
		obtencao: "Rotas 1, 15, e 18; Laboratório P2; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3c/560Scrafty_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Scrafty_(Pok%C3%A9mon)",
	},
	{
		nome: "Sigilyph",
		numero: 561, // considerando a national dex
		tipo: ["Psíquico", " Voador"],
		massa: 14.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9f/F0561.png",
		estatistica: {
			ps: 72,
			atq: 58,
			def: 80,
			atq_esp: 103,
			def_esp: 80,
			vel: 97,
		},
		descricao:
			"Nunca variam a rota que voam, porque suas memórias de guardar uma cidade antiga permanecem firmes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Avianóide",
		obtencao: "Resort do Deserto",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/61/561Sigilyph_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sigilyph_(Pok%C3%A9mon)",
	},
	{
		nome: "Yamask de Unova",
		numero: 562.1, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 1.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c6/F0562.png",
		estatistica: {
			ps: 38,
			atq: 30,
			def: 85,
			atq_esp: 55,
			def_esp: 65,
			vel: 30,
		},
		descricao:
			"Carrega uma máscara que costumava ser sua face quando era humano. Algumas vezes olham para ela e choram.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espírito",
		obtencao: "Castelo Relíquia",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6c/562Yamask_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Yamask_(Pok%C3%A9mon)",
	},
	{
		nome: "Yamask de Galar",
		numero: 562.2, // considerando a national dex
		tipo: ["Terra", " Fantasma"],
		massa: 1.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c6/F0562.png",
		estatistica: {
			ps: 38,
			atq: 55,
			def: 85,
			atq_esp: 30,
			def_esp: 65,
			vel: 30,
		},
		descricao:
			"Dizem que este Pokémon foi formado quando uma antiga tábua de argila foi atraída por um espírito vingativo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espírito",
		obtencao: "Rota 6",
		estagio: 1,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/cb/562Yamask_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Yamask_(Pok%C3%A9mon)",
	},
	{
		nome: "Cofagrigus",
		numero: 563, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 76.5, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/83/F0563.png",
		estatistica: {
			ps: 58,
			atq: 50,
			def: 145,
			atq_esp: 95,
			def_esp: 105,
			vel: 30,
		},
		descricao:
			"Dizem que engolem aqueles que chegam perto demais e os transforma em múmias. Gostam de comer pepitas de ouro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Caixão",
		obtencao: "Castelo Relíquia; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b1/563Cofagrigus_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cofagrigus_(Pok%C3%A9mon)",
	},
	{
		nome: "Tirtouga",
		numero: 564, // considerando a national dex
		tipo: ["Água", " Rocha"],
		massa: 16.5, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e2/F0564.png",
		estatistica: {
			ps: 54,
			atq: 78,
			def: 103,
			atq_esp: 53,
			def_esp: 45,
			vel: 22,
		},
		descricao:
			"Restaurado de um fóssil, este Pokémon consegue mergulhar profundidades maiores que meio quilômetro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Prototartaruga",
		obtencao: "Revivido a partir de um fóssil",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/28/564Tirtouga_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tirtouga_(Pok%C3%A9mon)",
	},
	{
		nome: "Carracosta",
		numero: 565, // considerando a national dex
		tipo: ["Água", " Rocha"],
		massa: 81.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/6c/F0565.png",
		estatistica: {
			ps: 74,
			atq: 108,
			def: 133,
			atq_esp: 83,
			def_esp: 65,
			vel: 32,
		},
		descricao:
			"Conseguem viver tanto no oceano quanto em terra. Um tapa seu é suficiente para abrir um buraco no fundo de um navio-tanque.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Prototartaruga",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1b/565Carracosta_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Carracosta_(Pok%C3%A9mon)",
	},
	{
		nome: "Archen",
		numero: 566, // considerando a national dex
		tipo: ["Rocha", " Voador"],
		massa: 9.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/34/F0566.png",
		estatistica: {
			ps: 55,
			atq: 112,
			def: 45,
			atq_esp: 74,
			def_esp: 45,
			vel: 70,
		},
		descricao:
			"Revivido de um fóssil, acredita-se que este Pokémon seja o ancestral de todos Pokémon pássaros.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Primeiro Pássaro",
		obtencao: "Revivido a partir de um fóssil",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/12/566Archen_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Archen_(Pok%C3%A9mon)",
	},
	{
		nome: "Archeops",
		numero: 567, // considerando a national dex
		tipo: ["Rocha", " Voador"],
		massa: 32.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/ac/F0567.png",
		estatistica: {
			ps: 75,
			atq: 140,
			def: 65,
			atq_esp: 112,
			def_esp: 65,
			vel: 110,
		},
		descricao:
			"São inteligentes e cooperam para capturar presas. Do chão, usam uma corrida inicial para alçar voo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Primeiro Pássaro",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9f/567Archeops_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Archeops_(Pok%C3%A9mon)",
	},
	{
		nome: "Trubbish",
		numero: 568, // considerando a national dex
		tipo: ["Veneno"],
		massa: 31.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/1d/F0568.png",
		estatistica: {
			ps: 50,
			atq: 50,
			def: 62,
			atq_esp: 40,
			def_esp: 62,
			vel: 65,
		},
		descricao:
			"Inalar o gás que arrotam fará você dormir por uma semana. Preferem lugares insalubres.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Saco de Lixo",
		obtencao: "Rotas 4, 5, e 16",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e5/568Trubbish_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Trubbish_(Pok%C3%A9mon)",
	},
	{
		nome: "Garbodor",
		numero: 569, // considerando a national dex
		tipo: ["Veneno"],
		massa: 107.3, // em kg
		altura: 1.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/47/F0569.png",
		estatistica: {
			ps: 80,
			atq: 95,
			def: 82,
			atq_esp: 60,
			def_esp: 82,
			vel: 75,
		},
		descricao:
			"Agarra os oponentes com o braço esquerdo e os finaliza com um gás venenoso de odor fétido expelido pela boca.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Monte de Lixo",
		obtencao: "Rota 9; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/85/569Garbodor_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Garbodor_(Pok%C3%A9mon)",
	},
	{
		nome: "Zorua de Unova",
		numero: 570.1, // considerando a national dex
		tipo: ["Noturno"],
		massa: 12.5, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/53/F0570.png",
		estatistica: {
			ps: 40,
			atq: 65,
			def: 40,
			atq_esp: 80,
			def_esp: 40,
			vel: 65,
		},
		descricao:
			"Este Pokémon se transforma nas formas dos outros para surpreende-los. Aparentemente, frequentemente se transforma em uma criança silenciosa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raposa Ardilosa",
		obtencao: "Cidade de Castelia; ou recebido em Cidade de Driftveil",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ee/570Zorua_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zorua_(Pok%C3%A9mon)",
	},
	{
		nome: "Zorua de Hisui",
		numero: 570.2, // considerando a national dex
		tipo: ["Normal", " Fantasma"],
		massa: 12.5, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/53/F0570.png",
		estatistica: {
			ps: 35,
			atq: 60,
			def: 40,
			atq_esp: 85,
			def_esp: 40,
			vel: 70,
		},
		descricao:
			"Uma alma que já partiu, retornou à vida. Deriva poder do ressentimento, que sobe como energia no topo de sua cabeça e assume as formas de inimigos. Dessa forma, este Pokémon desabafa malícia persistente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raposa Vingativa",
		obtencao:
			"Alabaster Icelands: próximo a Avalugg's Legacy, próximo a Glacier Terrace, e Icepeak Cavern",
		estagio: 1,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2c/570Zorua_Hisui_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zorua_(Pok%C3%A9mon)",
	},
	{
		nome: "Zoroark de Unova",
		numero: 571.1, // considerando a national dex
		tipo: ["Noturno"],
		massa: 81.1, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/ea/F0571.png",
		estatistica: {
			ps: 60,
			atq: 105,
			def: 60,
			atq_esp: 120,
			def_esp: 60,
			vel: 105,
		},
		descricao:
			"Os laços entre esses Pokémon são muito fortes. Protege a segurança de sua matilha enganando seus oponentes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raposa Ilusionista",
		obtencao: "Lostlorn Forest; ou por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2c/571Zoroark_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zoroark_(Pok%C3%A9mon)",
	},
	{
		nome: "Zoroark de Hisui",
		numero: 571.2, // considerando a national dex
		tipo: ["Normal", " Fantasma"],
		massa: 73.0, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/ea/F0571.png",
		estatistica: {
			ps: 55,
			atq: 100,
			def: 60,
			atq_esp: 125,
			def_esp: 60,
			vel: 110,
		},
		descricao:
			"Com seu pelo branco desgrenhado, parece uma personificação da morte. Descuidado com sua própria segurança. este Pokémon ataca seus inimigos com uma energia amarga tão intensa que dilacera o próprio corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raposa Nefasta",
		obtencao:
			"Alabaster Icelands: próximo a Avalugg's Legacy, próximo a Glacier Terrace, Icepeak Cavern, e Lake Acuity",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/75/571Zoroark-Hisui_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zoroark_(Pok%C3%A9mon)",
	},
	{
		nome: "Minccino",
		numero: 572, // considerando a national dex
		tipo: ["Normal"],
		massa: 5.8, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/7a/F0572.png",
		estatistica: {
			ps: 55,
			atq: 50,
			def: 40,
			atq_esp: 40,
			def_esp: 40,
			vel: 75,
		},
		descricao:
			"Cumprimentam-se esfregando-se com suas caudas, que estão sempre bem cuidadas e limpas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chinchila",
		obtencao: "Rotas 4, 5, 9 e outra; e Câmara Frigorífica",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d2/572Minccino_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Minccino_(Pok%C3%A9mon)",
	},
	{
		nome: "Cinccino",
		numero: 573, // considerando a national dex
		tipo: ["Normal"],
		massa: 7.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/df/F0573.png",
		estatistica: {
			ps: 75,
			atq: 95,
			def: 60,
			atq_esp: 65,
			def_esp: 60,
			vel: 115,
		},
		descricao:
			"Seu pelo branco é revestido por um óleo especial que facilida a defesa contra ataques.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cachecol",
		obtencao: "Rotas 5, 9, e 16; Câmara Frigorífica; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d8/573Cinccino_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cinccino_(Pok%C3%A9mon)",
	},
	{
		nome: "Gothita",
		numero: 574, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 5.8, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/44/F0574.png",
		estatistica: {
			ps: 45,
			atq: 30,
			def: 50,
			atq_esp: 55,
			def_esp: 65,
			vel: 45,
		},
		descricao:
			"Suas antenas em forma de fitas aumentam seu poder psíquico. Estão sempre encarando alguma coisa ou alguém.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fixação",
		obtencao: "Rotas 5, e 16; e Strange House",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4f/574Gothita_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gothita_(Pok%C3%A9mon)",
	},
	{
		nome: "Gothorita",
		numero: 575, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 18.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/6f/F0575.png",
		estatistica: {
			ps: 60,
			atq: 45,
			def: 70,
			atq_esp: 75,
			def_esp: 85,
			vel: 55,
		},
		descricao:
			"Usam a hipnose para controlar pessoas e Pokémon. Contos sobre este Pokémon levando pessoas ao erro são contadas em todos os cantos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Manipulação",
		obtencao: "Rota 9; Strange House; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/27/575Gothorita_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gothorita_(Pok%C3%A9mon)",
	},
	{
		nome: "Gothitelle",
		numero: 576, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 44.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/aa/F0576.png",
		estatistica: {
			ps: 70,
			atq: 55,
			def: 95,
			atq_esp: 95,
			def_esp: 110,
			vel: 65,
		},
		descricao:
			"Céus estrelados a milhares de anos-luz de distância são visíveis no espaço distorcido por seu intenso poder psíquico.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Corpo Atral",
		obtencao: "Rota 9; e por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/72/576Gothitelle_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gothitelle_(Pok%C3%A9mon)",
	},
	{
		nome: "Solosis",
		numero: 577, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 1.0, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/d2/F0577.png",
		estatistica: {
			ps: 45,
			atq: 30,
			def: 40,
			atq_esp: 105,
			def_esp: 50,
			vel: 20,
		},
		descricao:
			"Por seu corpo ser envelopado por um líquido especial, consegue sobreviver em qualquer ambiente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Célula",
		obtencao: "Rotas 5, e 16; e Strange House",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0f/577Solosis_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Solosis_(Pok%C3%A9mon)",
	},
	{
		nome: "Duosion",
		numero: 578, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 8.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/4e/F0578.png",
		estatistica: {
			ps: 65,
			atq: 40,
			def: 50,
			atq_esp: 125,
			def_esp: 60,
			vel: 30,
		},
		descricao:
			"Por ter dois cérebros divididos, as vezes tentam, de repente, relizar duas ações diferentes ao mesmo tempo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mitose",
		obtencao: "Rota 9; Strange House; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c6/578Duosion_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Duosion_(Pok%C3%A9mon)",
	},
	{
		nome: "Reuniclus",
		numero: 579, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 20.1, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/94/F0579.png",
		estatistica: {
			ps: 110,
			atq: 65,
			def: 75,
			atq_esp: 125,
			def_esp: 85,
			vel: 30,
		},
		descricao:
			"Esses Pokémon notavelmente inteligentes lutam controlando braços que podem agarrar com força suficiente para esmagar rochas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Multiplicação",
		obtencao: "Rota 9; e por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5a/579Reuniclus_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Reuniclus_(Pok%C3%A9mon)",
	},
	{
		nome: "Ducklett",
		numero: 580, // considerando a national dex
		tipo: ["Água", " Voador"],
		massa: 5.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e3/F0580.png",
		estatistica: {
			ps: 62,
			atq: 44,
			def: 50,
			atq_esp: 44,
			def_esp: 50,
			vel: 55,
		},
		descricao:
			"Esse Pokémon é um excelente mergulhador. Nadam na água comendo sua comida favorita: turfa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro de Água",
		obtencao: "Ponte Levadiça de Driftveil",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c7/580Ducklett_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ducklett_(Pok%C3%A9mon)",
	},
	{
		nome: "Swanna",
		numero: 581, // considerando a national dex
		tipo: ["Água", " Voador"],
		massa: 24.2, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/1a/F0581.png",
		estatistica: {
			ps: 75,
			atq: 87,
			def: 63,
			atq_esp: 87,
			def_esp: 63,
			vel: 98,
		},
		descricao:
			"Este Pokémon começa a dançar ao anoitecer. O que dança no meio é o líder do grupo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro Branco",
		obtencao: "Ponte Marvelous; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/70/581Swanna_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Swanna_(Pok%C3%A9mon)",
	},
	{
		nome: "Vanillite",
		numero: 582, // considerando a national dex
		tipo: ["Gelo"],
		massa: 5.7, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c0/F0582.png",
		estatistica: {
			ps: 36,
			atq: 50,
			def: 50,
			atq_esp: 65,
			def_esp: 60,
			vel: 44,
		},
		descricao:
			"A temperatura da respiração deles é de -50° Celsius. Criam cristais de neve e fazem neve cair nas áreas ao redor deles.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Neve Fresca",
		obtencao: "Rota 6; Câmara Frigorífica; e Dragonspiral Tower",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/67/582Vanillite_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vanillite_(Pok%C3%A9mon)",
	},
	{
		nome: "Vanillish",
		numero: 583, // considerando a national dex
		tipo: ["Gelo"],
		massa: 41.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b0/F0583.png",
		estatistica: {
			ps: 51,
			atq: 65,
			def: 65,
			atq_esp: 80,
			def_esp: 75,
			vel: 59,
		},
		descricao:
			"Montanhas nevadas são o habitat deste Pokémon. Durante uma antiga era glacial, se deslocaram para áreas ao sul.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Neve Congelada",
		obtencao: "Giant Chasm; Dragonspiral Tower; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/47/583Vanillish_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vanillish_(Pok%C3%A9mon)",
	},
	{
		nome: "Vanilluxe",
		numero: 584, // considerando a national dex
		tipo: ["Gelo"],
		massa: 57.5, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/16/F0584.png",
		estatistica: {
			ps: 71,
			atq: 95,
			def: 85,
			atq_esp: 110,
			def_esp: 95,
			vel: 79,
		},
		descricao:
			"Ao engolir grandes quantidades de água, formam nuvens de neve dentro de seus corpos e atacam seus inimigos com nevascas violentas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Nevasca",
		obtencao: "Giant Chasm; Dragonspiral Tower; e por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d4/584Vanilluxe_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vanilluxe_(Pok%C3%A9mon)",
	},
	{
		nome: "Deerling",
		numero: 585, // considerando a national dex
		tipo: ["Normal", " Planta"],
		massa: 19.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b8/F0585.png",
		estatistica: {
			ps: 60,
			atq: 60,
			def: 50,
			atq_esp: 40,
			def_esp: 50,
			vel: 75,
		},
		descricao:
			"A cor e o cheiro de seus pelos mudam para combinar com a grama da montanha. Quando sentem hostilidade, escondem-se na grama.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Estação",
		obtencao: "Rotas 6, e 7; Dragonspiral Tower",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/fb/585Deerling_Autumn_Form_Dream.png",
			"https://archives.bulbagarden.net/media/upload/b/be/585Deerling_Spring_Form_Dream.png",
			"https://archives.bulbagarden.net/media/upload/0/05/585Deerling_Summer_Form_Dream.png",
			"https://archives.bulbagarden.net/media/upload/a/a7/585Deerling_Winter_Form_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Deerling_(Pok%C3%A9mon)",
	},
	{
		nome: "Sawsbuck",
		numero: 586, // considerando a national dex
		tipo: ["Normal", " Planta"],
		massa: 92.5, // em kg
		altura: 1.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/30/F0586.png",
		estatistica: {
			ps: 80,
			atq: 100,
			def: 70,
			atq_esp: 60,
			def_esp: 70,
			vel: 95,
		},
		descricao:
			"Migram de acordo com as estações do ano. Pessoas conseguem dizer a estação só olhando para os chifres deste Pokémon.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Estação",
		obtencao: "Dragonspiral Tower; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d5/586Sawsbuck_Autumn_Form_Dream.png",
			"https://archives.bulbagarden.net/media/upload/a/a6/586Sawsbuck_Spring_Form_Dream.png",
			"https://archives.bulbagarden.net/media/upload/4/4d/586Sawsbuck_Summer_Form_Dream.png",
			"https://archives.bulbagarden.net/media/upload/b/b9/586Sawsbuck_Winter_Form_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sawsbuck_(Pok%C3%A9mon)",
	},
	{
		nome: "Emolga",
		numero: 587, // considerando a national dex
		tipo: ["Elétrico", " Voador"],
		massa: 5.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/98/F0587.png",
		estatistica: {
			ps: 55,
			atq: 75,
			def: 60,
			atq_esp: 75,
			def_esp: 60,
			vel: 103,
		},
		descricao:
			"A energia gerada nas elétricas de suas bochechas é armazenada dentro de sua membrana e liberada enquanto está planando.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Esquilo do Céu",
		obtencao:
			"Rotas 5, 6, 7, e outras; Dragonspiral Tower; Vila da Ponte; Giant Chasm; Abundant Shrine; Lostlorn Forest",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/87/587Emolga_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Emolga_(Pok%C3%A9mon)",
	},
	{
		nome: "Karrablast",
		numero: 588, // considerando a national dex
		tipo: ["Inseto"],
		massa: 5.9, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/34/F0588.png",
		estatistica: {
			ps: 50,
			atq: 75,
			def: 45,
			atq_esp: 40,
			def_esp: 45,
			vel: 60,
		},
		descricao:
			"Quando se sentem ameaçados, cospem um líquido ácido para afastar os agressores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pregador",
		obtencao: "Rotas 6, 8, e 11; e Moor of Icirrus",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1b/588Karrablast_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Karrablast_(Pok%C3%A9mon)",
	},
	{
		nome: "Escavalier",
		numero: 589, // considerando a national dex
		tipo: ["Inseto", " Metal"],
		massa: 33.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/aa/F0589.png",
		estatistica: {
			ps: 70,
			atq: 135,
			def: 105,
			atq_esp: 60,
			def_esp: 105,
			vel: 20,
		},
		descricao:
			"Voam em alta velocidade, atacando com suas lanças pontudas. Mesmo quando está em perigo, enfrentam os oponentes bravamente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cavalaria",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c0/589Escavalier_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Escavalier_(Pok%C3%A9mon)",
	},
	{
		nome: "Foongus",
		numero: 590, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 1.0, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/23/F0590.png",
		estatistica: {
			ps: 69,
			atq: 55,
			def: 45,
			atq_esp: 55,
			def_esp: 55,
			vel: 15,
		},
		descricao:
			"Atrai pessoas com seu padrão de Pokébola, depois libera esporos venenosos. O motivo de parecer uma Pokébola é desconhecido.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cogumelo",
		obtencao: "Rotas 5, 6, 7, e outras",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ea/590Foongus_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Foongus_(Pok%C3%A9mon)",
	},
	{
		nome: "Amoonguss",
		numero: 591, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 10.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/54/F0591.png",
		estatistica: {
			ps: 114,
			atq: 85,
			def: 70,
			atq_esp: 85,
			def_esp: 80,
			vel: 30,
		},
		descricao:
			"Atrai presas para perto dançando e balançando suas capas de braços, que lembram Pokébolas, em um movimento oscilante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cogumelo",
		obtencao:
			"Rotas 10, 11, 22, e outra; Abundant Shrine; Floresta Pinwheel; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6d/591Amoonguss_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Amoonguss_(Pok%C3%A9mon)",
	},
	{
		nome: "Frillish",
		numero: 592, // considerando a national dex
		tipo: ["Água", " Fantasma"],
		massa: 33.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/06/F0592.png",
		estatistica: {
			ps: 55,
			atq: 40,
			def: 50,
			atq_esp: 65,
			def_esp: 85,
			vel: 40,
		},
		descricao:
			"Com seus braços finos, semelhantes a véus, envolvendo o corpo do oponente, afunda no fundo do oceano.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Flutuante",
		obtencao:
			"Rotas 4, 13, 17, e outras; Laboratório P2; Complexo de Virbank; Undella Bay; e Seaside Cave",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/aa/592Frillish_Female_Dream.png",
			"https://archives.bulbagarden.net/media/upload/9/99/592Frillish_Male_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Frillish_(Pok%C3%A9mon)",
	},
	{
		nome: "Jellicent",
		numero: 593, // considerando a national dex
		tipo: ["Água", " Fantasma"],
		massa: 135.0, // em kg
		altura: 2.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/38/F0593.png",
		estatistica: {
			ps: 100,
			atq: 60,
			def: 70,
			atq_esp: 85,
			def_esp: 105,
			vel: 60,
		},
		descricao:
			"O destino dos navios e da tribulação que vagam pelo habitat deste Pokémon: todos afundados, todos perdidos, todos desaparecidos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Flutuante",
		obtencao:
			"Rotas 4, 13, 17, e outras; Laboratório P2; Complexo de Virbank; Seaside Cave; Undella Bay; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/74/593Jellicent_Female_Dream.png",
			"https://archives.bulbagarden.net/media/upload/0/0c/593Jellicent_Male_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Jellicent_(Pok%C3%A9mon)",
	},
	{
		nome: "Alomomola",
		numero: 594, // considerando a national dex
		tipo: ["Água"],
		massa: 31.6, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/60/F0594.png",
		estatistica: {
			ps: 165,
			atq: 75,
			def: 80,
			atq_esp: 40,
			def_esp: 45,
			vel: 65,
		},
		descricao:
			"A membrana especial envolvendo este Pokémon tem a habilidade de curar feridas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Afetuoso",
		obtencao: "Rotas 4, 17, 18, e outra; Complexo de Virbank; e Laboratório P2",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5b/594Alomomola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Alomomola_(Pok%C3%A9mon)",
	},
	{
		nome: "Joltik",
		numero: 595, // considerando a national dex
		tipo: ["Inseto", " Elétrico"],
		massa: 0.6, // em kg
		altura: 0.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/59/F0595.png",
		estatistica: {
			ps: 50,
			atq: 47,
			def: 50,
			atq_esp: 57,
			def_esp: 50,
			vel: 65,
		},
		descricao:
			"Espécimes deste Pokémon que vivem em cidades, aprenderam uma técnica para sugar eletricidade das tomadas das casas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Conector",
		obtencao: "Caverna da Rocha Elétrica",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/de/595Joltik_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Joltik_(Pok%C3%A9mon)",
	},
	{
		nome: "Galvantula",
		numero: 596, // considerando a national dex
		tipo: ["Inseto", " Elétrico"],
		massa: 14.3, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/42/F0596.png",
		estatistica: {
			ps: 70,
			atq: 77,
			def: 60,
			atq_esp: 97,
			def_esp: 60,
			vel: 108,
		},
		descricao:
			"Quando atacados, criam uma barreira elétrica ao cuspir vários fios carregados eletricamente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon EletroAranha",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d5/596Galvantula_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Galvantula_(Pok%C3%A9mon)",
	},
	{
		nome: "Ferroseed",
		numero: 597, // considerando a national dex
		tipo: ["Planta", " Metal"],
		massa: 18.8, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/61/F0597.png",
		estatistica: {
			ps: 44,
			atq: 50,
			def: 91,
			atq_esp: 24,
			def_esp: 86,
			vel: 10,
		},
		descricao:
			"Quando ameaçados, ataca atirando uma barragem de espinhos, o que lhe dá uma chance de escapar rolando.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Semente Espinhosa",
		obtencao: "Caverna da Rocha Elétrica",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9f/597Ferroseed_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ferroseed_(Pok%C3%A9mon)",
	},
	{
		nome: "Ferrothorn",
		numero: 598, // considerando a national dex
		tipo: ["Planta", " Metal"],
		massa: 110.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e4/F0598.png",
		estatistica: {
			ps: 74,
			atq: 94,
			def: 131,
			atq_esp: 54,
			def_esp: 116,
			vel: 20,
		},
		descricao:
			"Luta balançando em torno de seus três tentáculos pontiagudos. Um golpe desses espinhos de aço pode reduzir uma rocha a escombros.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vagem Espinhosa",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/dc/598Ferrothorn_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ferrothorn_(Pok%C3%A9mon)",
	},
	{
		nome: "Klink",
		numero: 599, // considerando a national dex
		tipo: ["Metal"],
		massa: 21.0, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fd/F0599.png",
		estatistica: {
			ps: 40,
			atq: 55,
			def: 70,
			atq_esp: 45,
			def_esp: 60,
			vel: 30,
		},
		descricao:
			"Entrelaçar dois corpos e girar gera a energia de que precisam para viver.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Engrenagem",
		obtencao: "Caverna da Rocha Elétrica; e Laboratório P2",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/23/599Klink_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Klink_(Pok%C3%A9mon)",
	},
	{
		nome: "Klang",
		numero: 600, // considerando a national dex
		tipo: ["Metal"],
		massa: 51.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/3/35/F0600.png",
		estatistica: {
			ps: 60,
			atq: 80,
			def: 95,
			atq_esp: 70,
			def_esp: 85,
			vel: 50,
		},
		descricao:
			"Ao mudar a direção em que gira, comunica seus sentidmentos aos outros. Quando está com raiva, gira mais rápido.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Engrenagem",
		obtencao: "Laboratório P2; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a2/600Klang_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Klang_(Pok%C3%A9mon)",
	},
	{
		nome: "Klingklang",
		numero: 601, // considerando a national dex
		tipo: ["Metal"],
		massa: 81.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/af/F0601.png",
		estatistica: {
			ps: 60,
			atq: 100,
			def: 115,
			atq_esp: 70,
			def_esp: 85,
			vel: 90,
		},
		descricao:
			"Seu núcleo vermelho funciona como um tanque de energia. Dispara a energia carregada através de seus espinhos em uma área.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Engrenagem",
		obtencao: "Laboratório P2; e por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ed/601Klinklang_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Klinklang_(Pok%C3%A9mon)",
	},
	{
		nome: "Tynamo",
		numero: 602, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 0.3, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c3/F0602.png",
		estatistica: {
			ps: 35,
			atq: 55,
			def: 40,
			atq_esp: 45,
			def_esp: 40,
			vel: 60,
		},
		descricao:
			"Enquanto um sozinho não tem muito poder, vários espécimes em corrente pode ser tão poderosa quanto um raio.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Elepeixe",
		obtencao: "Caverna da Rocha Elétrica; e Seaside Cave",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c5/602Tynamo_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tynamo_(Pok%C3%A9mon)",
	},
	{
		nome: "Eelektrik",
		numero: 603, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 22.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b5/F0603.png",
		estatistica: {
			ps: 65,
			atq: 85,
			def: 70,
			atq_esp: 75,
			def_esp: 70,
			vel: 40,
		},
		descricao:
			"Possuem grande apetite. Quando avistam sua presa, atacam e paralizam o alvo com eletricidade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Elepeixe",
		obtencao: "Seaside Cave; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/94/603Eelektrik_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Eelektrik_(Pok%C3%A9mon)",
	},
	{
		nome: "Eelektross",
		numero: 604, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 80.5, // em kg
		altura: 2.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/86/F0604.png",
		estatistica: {
			ps: 85,
			atq: 115,
			def: 80,
			atq_esp: 105,
			def_esp: 80,
			vel: 50,
		},
		descricao:
			"Rastejam para fora do oceano usando seus braços. Atacarão sua presa na costa e imediatamente a arrastarão para o oceano.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Elepeixe",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6a/604Eelektross_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Eelektross_(Pok%C3%A9mon)",
	},
	{
		nome: "Elgyem",
		numero: 605, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 9.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/25/F0605.png",
		estatistica: {
			ps: 55,
			atq: 55,
			def: 55,
			atq_esp: 85,
			def_esp: 55,
			vel: 30,
		},
		descricao:
			"Usa seu forte poder psíquico para apertar o cérebro de seu oponente, causando dores de cabeças insuportáveis.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cerebral",
		obtencao: "Torre Celestial",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6c/605Elgyem_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Elgyem_(Pok%C3%A9mon)",
	},
	{
		nome: "Beheeyem",
		numero: 606, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 34.5, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5f/F0606.png",
		estatistica: {
			ps: 75,
			atq: 75,
			def: 75,
			atq_esp: 125,
			def_esp: 95,
			vel: 40,
		},
		descricao:
			"Consegue manipular uma memória do oponente. Aparentemente, se comunica piscando seus três dedos de cores diferentes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cerebral",
		obtencao: "Rota 14; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1d/606Beheeyem_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Beheeyem_(Pok%C3%A9mon)",
	},
	{
		nome: "Litwick",
		numero: 607, // considerando a national dex
		tipo: ["Fantasma", " Fogo"],
		massa: 3.1, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/89/F0607.png",
		estatistica: {
			ps: 50,
			atq: 30,
			def: 55,
			atq_esp: 65,
			def_esp: 55,
			vel: 20,
		},
		descricao:
			"Emite uma luz que a energia vital de pessoas e Pokémon, que se torna o combustível que queima.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vela",
		obtencao: "Torre Celestial; e Strange House",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/73/607Litwick_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Litwick_(Pok%C3%A9mon)",
	},
	{
		nome: "Lampent",
		numero: 608, // considerando a national dex
		tipo: ["Fantasma", " Fogo"],
		massa: 13.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/0c/F0608.png",
		estatistica: {
			ps: 60,
			atq: 40,
			def: 60,
			atq_esp: 95,
			def_esp: 60,
			vel: 55,
		},
		descricao:
			"Este Pokémon sinistro é temido. Pelas cidades, vagueia, procurando os espíritos dos caídos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lâmpada",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/56/608Lampent_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lampent_(Pok%C3%A9mon)",
	},
	{
		nome: "Chandelure",
		numero: 609, // considerando a national dex
		tipo: ["Fantasma", " Fogo"],
		massa: 34.3, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/92/F0609.png",
		estatistica: {
			ps: 60,
			atq: 55,
			def: 90,
			atq_esp: 145,
			def_esp: 90,
			vel: 80,
		},
		descricao:
			"Absorve um espírito, que então queima. Ao agitar as chamas em seu braços, coloca seus inimigos em um transe hipnótico.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ilusão",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/df/609Chandelure_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Chandelure_(Pok%C3%A9mon)",
	},
	{
		nome: "Axew",
		numero: 610, // considerando a national dex
		tipo: ["Dragão"],
		massa: 18.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8a/F0610.png",
		estatistica: {
			ps: 46,
			atq: 87,
			def: 60,
			atq_esp: 30,
			def_esp: 40,
			vel: 57,
		},
		descricao:
			"Usam suas presas para esmagar as frutas que comem. O crescimento repetido torna suas presas fortes e afiadas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Presa",
		obtencao: "Caverna de Mistralton",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a1/610Axew_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Axew_(Pok%C3%A9mon)",
	},
	{
		nome: "Fraxure",
		numero: 611, // considerando a national dex
		tipo: ["Dragão"],
		massa: 36.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/e8/F0611.png",
		estatistica: {
			ps: 66,
			atq: 117,
			def: 70,
			atq_esp: 40,
			def_esp: 50,
			vel: 67,
		},
		descricao:
			"Como uma presa quebrada não volta a crescer, afia diligentemente suas presas nas rochas do rio depois de lutarem.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mandíbula de Machado",
		obtencao: "Estrada da Vitória; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b0/611Fraxure_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Fraxure_(Pok%C3%A9mon)",
	},
	{
		nome: "Haxorus",
		numero: 612, // considerando a national dex
		tipo: ["Dragão"],
		massa: 105.5, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fc/F0612.png",
		estatistica: {
			ps: 76,
			atq: 147,
			def: 90,
			atq_esp: 60,
			def_esp: 70,
			vel: 97,
		},
		descricao:
			"São gentis, mas podem ser implacáveis ao defender seu território. Desafiam os inimigos com presas que conseguem cortar aço.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mandíbula de Machado",
		obtencao: "Nature Preserve; e por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/ac/612Haxorus_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Haxorus_(Pok%C3%A9mon)",
	},
	{
		nome: "Cubchoo",
		numero: 613, // considerando a national dex
		tipo: ["Gelo"],
		massa: 8.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c3/F0613.png",
		estatistica: {
			ps: 55,
			atq: 70,
			def: 40,
			atq_esp: 60,
			def_esp: 40,
			vel: 40,
		},
		descricao:
			"Quando não está se sentindo bem, seu muco fica aquoso e o poder de seus movimentos do tipo gelo diminui.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Frio",
		obtencao: "Rota 7; Montanhar Trançada; e Dragonspiral Tower",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b3/613Cubchoo_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cubchoo_(Pok%C3%A9mon)",
	},
	{
		nome: "Beartic",
		numero: 614, // considerando a national dex
		tipo: ["Gelo"],
		massa: 260.0, // em kg
		altura: 2.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/82/F0614.png",
		estatistica: {
			ps: 95,
			atq: 130,
			def: 80,
			atq_esp: 70,
			def_esp: 80,
			vel: 50,
		},
		descricao:
			"Consegue congelar sua respiração à vontade. Muito hávil na água, nada em mores do norte e captura presas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Congelante",
		obtencao: "Montanha Trançada; Dragonspiral Tower; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/eb/614Beartic_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Beartic_(Pok%C3%A9mon)",
	},
	{
		nome: "Cryogonal",
		numero: 615, // considerando a national dex
		tipo: ["Gelo"],
		massa: 148.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b7/F0615.png",
		estatistica: {
			ps: 80,
			atq: 50,
			def: 50,
			atq_esp: 95,
			def_esp: 135,
			vel: 105,
		},
		descricao:
			"Quando a temperatura de seu corpo sobe, se transforma em vapor e some. Quando sua temperatura diminui, retorna ao gelo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cristalização",
		obtencao: "Montanha Trançada",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5d/615Cryogonal_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cryogonal_(Pok%C3%A9mon)",
	},
	{
		nome: "Shelmet",
		numero: 616, // considerando a national dex
		tipo: ["Inseto"],
		massa: 7.7, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f3/F0616.png",
		estatistica: {
			ps: 50,
			atq: 40,
			def: 85,
			atq_esp: 40,
			def_esp: 65,
			vel: 25,
		},
		descricao:
			"Quando atacado, se defende fechando a tampa de sua concha. Pode cuspir um líquido pegajoso e venenoso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lesma",
		obtencao: "Rota 6, 8, e 11; e Moor of Icirrus",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/af/616Shelmet_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shelmet_(Pok%C3%A9mon)",
	},
	{
		nome: "Accelgor",
		numero: 617, // considerando a national dex
		tipo: ["Inseto"],
		massa: 25.3, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/55/F0617.png",
		estatistica: {
			ps: 80,
			atq: 70,
			def: 40,
			atq_esp: 100,
			def_esp: 60,
			vel: 145,
		},
		descricao:
			"Quando seu corpo seca, enfraquece. Para prevenir a desidratação, se enrolaem várias camadas de membrana fina.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Concha Fora",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0a/617Accelgor_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Accelgor_(Pok%C3%A9mon)",
	},
	{
		nome: "Stunfisk de Unova",
		numero: 618.1, // considerando a national dex
		tipo: ["Terra", " Elétrico"],
		massa: 11.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b6/F0618.png",
		estatistica: {
			ps: 109,
			atq: 66,
			def: 84,
			atq_esp: 81,
			def_esp: 99,
			vel: 32,
		},
		descricao:
			"Sua pele é muito dura, não se machuca mesmo quando pisado por lutadores de sumo. Sorri quando está transmitindo eletricidade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Armadilha",
		obtencao: "Rota 8; e Moor of Icirrus",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1c/618Stunfisk_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Stunfisk_(Pok%C3%A9mon)",
	},
	{
		nome: "Stunfisk de Galar",
		numero: 618.2, // considerando a national dex
		tipo: ["Terra", " Metal"],
		massa: 20.5, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b6/F0618.png",
		estatistica: {
			ps: 109,
			atq: 81,
			def: 99,
			atq_esp: 66,
			def_esp: 84,
			vel: 32,
		},
		descricao:
			"Viver na lama com um alto conteúdo de ferro deu a este Pokémon um corpo de metal forte.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Armadilha",
		obtencao:
			"Arvoredo Adormecido; Galar Mine No. 2; Dusty Bowl; e Lake of Outrage",
		estagio: 1,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/56/618Stunfisk_Galar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Stunfisk_(Pok%C3%A9mon)",
	},
	{
		nome: "Mienfoo",
		numero: 619, // considerando a national dex
		tipo: ["Lutador"],
		massa: 20.0, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/d/dc/F0619.png",
		estatistica: {
			ps: 45,
			atq: 85,
			def: 50,
			atq_esp: 55,
			def_esp: 50,
			vel: 65,
		},
		descricao:
			"Em lutas, dominam com investidas de ataques contínuos e fluidos. Com suas garras afiadas, cortam os inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Artes Marciais",
		obtencao: "Rotas 14, 22, e 23; Dragonspiral Tower; e Estrada da Vitória",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/96/619Mienfoo_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mienfoo_(Pok%C3%A9mon)",
	},
	{
		nome: "Mienshao",
		numero: 620, // considerando a national dex
		tipo: ["Lutador"],
		massa: 35.5, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/f1/F0620.png",
		estatistica: {
			ps: 65,
			atq: 125,
			def: 60,
			atq_esp: 95,
			def_esp: 60,
			vel: 105,
		},
		descricao:
			"Empunha a pele dos braços como um chicote. Seus ataques de braço vêm com tanta rapidez que nem podem ser vistos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Artes Marciais",
		obtencao: "Rotas 14, e 23; Dragonspiral Tower; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/48/620Mienshao_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mienshao_(Pok%C3%A9mon)",
	},
	{
		nome: "Druddigon",
		numero: 621, // considerando a national dex
		tipo: ["Dragão"],
		massa: 139.0, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/5/5c/F0621.png",
		estatistica: {
			ps: 77,
			atq: 120,
			def: 90,
			atq_esp: 60,
			def_esp: 90,
			vel: 48,
		},
		descricao:
			"Aquece seu corpo absorvendo luz solar com suas asas. Quando a temperatura de seu corpo cai, não consegue se mover.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gruta",
		obtencao: "Dragonspiral Tower; e Estrada da Vitória",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9a/621Druddigon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Druddigon_(Pok%C3%A9mon)",
	},
	{
		nome: "Golett",
		numero: 622, // considerando a national dex
		tipo: ["Terra", " Fantasma"],
		massa: 92.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/82/F0622.png",
		estatistica: {
			ps: 59,
			atq: 74,
			def: 50,
			atq_esp: 35,
			def_esp: 50,
			vel: 35,
		},
		descricao:
			"A energia que queima dentro o permite se locomover, mas ninguém foi capaz de identificar essa energia.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Autômato",
		obtencao: "Dragonspiral Tower",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5b/622Golett_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Golett_(Pok%C3%A9mon)",
	},
	{
		nome: "Golurk",
		numero: 623, // considerando a national dex
		tipo: ["Terra", " Fantasma"],
		massa: 330.0, // em kg
		altura: 2.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/1/17/F0623.png",
		estatistica: {
			ps: 89,
			atq: 124,
			def: 80,
			atq_esp: 55,
			def_esp: 80,
			vel: 55,
		},
		descricao:
			"Voa pelo céu em velocidades Mach. Remover o selo em seu peito faz sua energia interna sair do controle.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Autômato",
		obtencao: "Dragonspiral Tower; Estrada da Vitória; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/cd/623Golurk_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Golurk_(Pok%C3%A9mon)",
	},
	{
		nome: "Pawniard",
		numero: 624, // considerando a national dex
		tipo: ["Noturno", " Metal"],
		massa: 10.2, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c5/F0624.png",
		estatistica: {
			ps: 45,
			atq: 85,
			def: 70,
			atq_esp: 40,
			def_esp: 40,
			vel: 60,
		},
		descricao:
			"Lâminas compõe o corpo inteiro deste Pokémon. Se batalhas deixam as lâminas cegas, são afiadas em pedras perto do rio.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lâmina Afiada",
		obtencao: "Rotas 9, e 11",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/20/624Pawniard_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pawniard_(Pok%C3%A9mon)",
	},
	{
		nome: "Bisharp",
		numero: 625, // considerando a national dex
		tipo: ["Noturno", " Metal"],
		massa: 70.0, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/94/F0625.png",
		estatistica: {
			ps: 65,
			atq: 125,
			def: 100,
			atq_esp: 60,
			def_esp: 70,
			vel: 70,
		},
		descricao:
			"Batalha para se tornar o chefe do grupo, mas será expulso do grupo se perder.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lâmina de Espada",
		obtencao: "Rota 11; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6e/625Bisharp_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bisharp_(Pok%C3%A9mon)",
	},
	{
		nome: "Bouffalant",
		numero: 626, // considerando a national dex
		tipo: ["Normal"],
		massa: 94.6, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/88/F0626.png",
		estatistica: {
			ps: 95,
			atq: 110,
			def: 95,
			atq_esp: 40,
			def_esp: 95,
			vel: 55,
		},
		descricao:
			"Seu pelo fofo absorve dano, mesmo quando acertam os inimigos com uma cabeçada feroz.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pancada Búfalo",
		obtencao: "Rotas 9, 10, e 23",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/50/626Bouffalant_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bouffalant_(Pok%C3%A9mon)",
	},
	{
		nome: "Rufflet",
		numero: 627, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 10.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/97/F0627.png",
		estatistica: {
			ps: 70,
			atq: 83,
			def: 50,
			atq_esp: 37,
			def_esp: 50,
			vel: 60,
		},
		descricao:
			"Esmagam frutas com suas garra. Corajosamente enfrentam qualquer oponente, não importa quão forte seja.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ave de Rapina",
		obtencao: "Rotas 10, 11, e 23; Estrada da Vitória; e Vila da Ponte",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/62/627Rufflet_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rufflet_(Pok%C3%A9mon)",
	},
	{
		nome: "Braviary de Unova",
		numero: 628.1, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 41.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9a/F0628.png",
		estatistica: {
			ps: 100,
			atq: 123,
			def: 75,
			atq_esp: 57,
			def_esp: 75,
			vel: 80,
		},
		descricao:
			"Lutam por seus amigos sem pensar em perigo para si mesmos. Um indivíduo consegue carregar um carro enquanto está voando.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Valente",
		obtencao: "Rotas 4, e 11; Vila da Ponte; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/21/628Braviary_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Braviary_(Pok%C3%A9mon)",
	},
	{
		nome: "Braviary de Hisui",
		numero: 628.2, // considerando a national dex
		tipo: ["Psíquico", " Voador"],
		massa: 43.4, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/9a/F0628.png",
		estatistica: {
			ps: 110,
			atq: 83,
			def: 70,
			atq_esp: 112,
			def_esp: 70,
			vel: 65,
		},
		descricao:
			"Emitindo um grito de guerra de gelar o sangue, este enorme e feroz Pokémon pássaro sai para caçar. Explode lagos com ondas de choque e, em seguida, pega qualquer presa que fuluta na superfície da água.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Grito de Guerra",
		obtencao: "Alabaster Icelands: próximo ao Lago Perspicácia; e por evolução",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a4/628Braviary-Hisui_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Braviary_(Pok%C3%A9mon)",
	},
	{
		nome: "Vullaby",
		numero: 629, // considerando a national dex
		tipo: ["Noturno", " Voador"],
		massa: 9.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/80/F0629.png",
		estatistica: {
			ps: 70,
			atq: 55,
			def: 75,
			atq_esp: 45,
			def_esp: 65,
			vel: 60,
		},
		descricao:
			"Tendem proteger seus membros posteriores com ossos adequados que encontram. Perseguem Pokémon fracos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fraldado",
		obtencao: "Rotas 10, 11, e 23; Estrada da Vitória; e Via da Ponte",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6c/629Vullaby_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vullaby_(Pok%C3%A9mon)",
	},
	{
		nome: "Mandibuzz",
		numero: 630, // considerando a national dex
		tipo: ["Noturno", " Voador"],
		massa: 39.5, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c4/F0630.png",
		estatistica: {
			ps: 110,
			atq: 65,
			def: 105,
			atq_esp: 55,
			def_esp: 95,
			vel: 80,
		},
		descricao:
			"Faz um ninho com os ossos que encontra. Agarra presas enfraquecidas em suas garras e as arrasta para seu ninho de ossos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abutre de Ossos",
		obtencao: "Rotas 4, e 11; Vila da Ponte; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d1/630Mandibuzz_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mandibuzz_(Pok%C3%A9mon)",
	},
	{
		nome: "Heatmor",
		numero: 631, // considerando a national dex
		tipo: ["Fogo"],
		massa: 58.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b8/F0631.png",
		estatistica: {
			ps: 85,
			atq: 97,
			def: 66,
			atq_esp: 105,
			def_esp: 66,
			vel: 65,
		},
		descricao:
			"Respira por um buraco na cauda enquanto queima com um fogo interno.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Tamanduá",
		obtencao: "Estrada da Vitória; e Montanha Trançada",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c8/631Heatmor_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Heatmor_(Pok%C3%A9mon)",
	},
	{
		nome: "Durant",
		numero: 632, // considerando a national dex
		tipo: ["Inseto", " Metal"],
		massa: 33.0, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/7b/F0632.png",
		estatistica: {
			ps: 58,
			atq: 109,
			def: 112,
			atq_esp: 48,
			def_esp: 48,
			vel: 109,
		},
		descricao:
			"Escava ninhos em montanhas. Constroem seus túneis complicados e interconectados em labirintos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Formiga de Ferro",
		obtencao:
			"Estrada da Vitória; Montanha Trançada; Clay Tunnel; e Underground Tunnel",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ed/632Durant_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Durant_(Pok%C3%A9mon)",
	},
	{
		nome: "Deino",
		numero: 633, // considerando a national dex
		tipo: ["Noturno", " Dragão"],
		massa: 17.3, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b0/F0633.png",
		estatistica: {
			ps: 52,
			atq: 65,
			def: 50,
			atq_esp: 45,
			def_esp: 50,
			vel: 38,
		},
		descricao:
			"Tende a morder tudo e não é um comedor exigente. Aproximar-se deste Pokémon descuidadamente é perigoso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Irado",
		obtencao: "Estrada da Vitória",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/57/633Deino_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Deino_(Pok%C3%A9mon)",
	},
	{
		nome: "Zweilous",
		numero: 634, // considerando a national dex
		tipo: ["Noturno", " Dragão"],
		massa: 50.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/bc/F0634.png",
		estatistica: {
			ps: 72,
			atq: 85,
			def: 70,
			atq_esp: 65,
			def_esp: 70,
			vel: 58,
		},
		descricao:
			"Depois de ter comido toda a comida em seu território, se muda para outra área. Suas duas cabeças não se dão bem.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Hostil",
		obtencao: "Estrada da Vitória; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6d/634Zweilous_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zweilous_(Pok%C3%A9mon)",
	},
	{
		nome: "Hydreigon",
		numero: 635, // considerando a national dex
		tipo: ["Noturno", " Dragão"],
		massa: 160.0, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/0/03/F0635.png",
		estatistica: {
			ps: 92,
			atq: 105,
			def: 90,
			atq_esp: 125,
			def_esp: 90,
			vel: 98,
		},
		descricao:
			"Este Pokémon brutal viaja pelos céus em suas seis asas. Qualquer coisa que se mova parece um inimigo para este Pokémon, desencadeando seu ataque.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Brutal",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2d/635Hydreigon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hydreigon_(Pok%C3%A9mon)",
	},
	{
		nome: "Larvesta",
		numero: 636, // considerando a national dex
		tipo: ["Inseto", " Fogo"],
		massa: 28.8, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/2/2d/F0636.png",
		estatistica: {
			ps: 55,
			atq: 85,
			def: 55,
			atq_esp: 50,
			def_esp: 55,
			vel: 60,
		},
		descricao:
			"A base de vulcões é onde fazem seus lares. Atiram fogo de seus cinco chifres para repelir ataques inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Torcha",
		obtencao: "Por ovo",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e4/636Larvesta_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Larvesta_(Pok%C3%A9mon)",
	},
	{
		nome: "Volcarona",
		numero: 637, // considerando a national dex
		tipo: ["Inseto", " Fogo"],
		massa: 46.0, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/49/F0637.png",
		estatistica: {
			ps: 85,
			atq: 60,
			def: 65,
			atq_esp: 135,
			def_esp: 105,
			vel: 100,
		},
		descricao:
			"Dizem que quando cinzas vulcânicas escureceram a atmosfera, o fogo deste Pokémon substituiu o sol.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sol",
		obtencao: "Castelo Relíquia; e por evolução",
		estagio: 2,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/62/637Volcarona_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Volcarona_(Pok%C3%A9mon)",
	},
	{
		nome: "Cobalion",
		numero: 638, // considerando a national dex
		tipo: ["Metal", " Lutador"],
		massa: 250.0, // em kg
		altura: 2.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/4/47/F0638.png",
		estatistica: {
			ps: 91,
			atq: 90,
			def: 129,
			atq_esp: 90,
			def_esp: 72,
			vel: 108,
		},
		descricao:
			"Este lendário Pokémon batalhou contra humanos para proteger Pokémon. Sua personalidade é calma e composta.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vontade de Ferro",
		obtencao: "Rota 13; ou Caverna de Mistralton",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a9/638Cobalion_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cobalion_(Pok%C3%A9mon)",
	},
	{
		nome: "Terrakion",
		numero: 639, // considerando a national dex
		tipo: ["Rocha", " Lutador"],
		massa: 260.0, // em kg
		altura: 1.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/c/c8/F0639.png",
		estatistica: {
			ps: 91,
			atq: 129,
			def: 90,
			atq_esp: 72,
			def_esp: 90,
			vel: 108,
		},
		descricao:
			"Este Pokémon veio em defesa dos Pokémon que perderam seus lares em uma guerra entre humanos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Caverna",
		obtencao: "Rota 22; ou Estrada da Vitória",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d2/639Terrakion_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Terrakion_(Pok%C3%A9mon)",
	},
	{
		nome: "Virizion",
		numero: 640, // considerando a national dex
		tipo: ["Planta", " Lutador"],
		massa: 200.0, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/7d/F0640.png",
		estatistica: {
			ps: 91,
			atq: 90,
			def: 72,
			atq_esp: 90,
			def_esp: 129,
			vel: 108,
		},
		descricao:
			"Este Pokémon lutou contra humanos para proteger seus amigos. Lendas sobre isso continuam a ser contadas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pradaria",
		obtencao: "Rota 11; ou Floresta Pinwheel",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/04/640Virizion_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Virizion_(Pok%C3%A9mon)",
	},
	{
		nome: "Tornadus (Forma Materializada)",
		numero: 641.1, // considerando a national dex
		tipo: ["Voador"],
		massa: 63.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/75/F0641.png",
		estatistica: {
			ps: 79,
			atq: 115,
			def: 70,
			atq_esp: 125,
			def_esp: 80,
			vel: 111,
		},
		descricao:
			"Voa em todas as direções, criando ventos tão poderosos que levam tudo para longe.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ciclone",
		obtencao: "Vagando por Unova",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/94/641Tornadus_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tornadus_(Pok%C3%A9mon)",
	},
	{
		nome: "Tornadus (Forma Therian)",
		numero: 641.2, // considerando a national dex
		tipo: ["Voador"],
		massa: 63.0, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/7/75/F0641.png",
		estatistica: {
			ps: 79,
			atq: 100,
			def: 80,
			atq_esp: 110,
			def_esp: 90,
			vel: 121,
		},
		descricao:
			"Voa em todas as direções, criando ventos tão poderosos que levam tudo para longe.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ciclone",
		obtencao: "Vagando por Unova e ativar o Espelho Revelador",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/30/641Tornadus_Therian_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tornadus_(Pok%C3%A9mon)",
	},
	{
		nome: "Thundurus (Forma Materializada)",
		numero: 642.1, // considerando a national dex
		tipo: ["Elétrico", " Voador"],
		massa: 61.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fe/F0642.png",
		estatistica: {
			ps: 79,
			atq: 115,
			def: 70,
			atq_esp: 125,
			def_esp: 80,
			vel: 111,
		},
		descricao:
			"Incontáveis restos carbonizados marcam a paisagem dos lugares por onde passou.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ataque de Raio",
		obtencao: "Vagando por Unova",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/8d/642Thundurus_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Thundurus_(Pok%C3%A9mon)",
	},
	{
		nome: "Thundurus (Forma Therian)",
		numero: 642.2, // considerando a national dex
		tipo: ["Elétrico", " Voador"],
		massa: 61.0, // em kg
		altura: 3.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/f/fe/F0642.png",
		estatistica: {
			ps: 79,
			atq: 105,
			def: 70,
			atq_esp: 145,
			def_esp: 80,
			vel: 101,
		},
		descricao:
			"Incontáveis restos carbonizados marcam a paisagem dos lugares por onde passou.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ataque de Raio e ativar o Espelho Revelador",
		obtencao: "Vagando por Unova",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c2/642Thundurus_Therian_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tornadus_(Pok%C3%A9mon)",
	},
	{
		nome: "Reshiram",
		numero: 643, // considerando a national dex
		tipo: ["Dragão", " Fogo"],
		massa: 330.0, // em kg
		altura: 3.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/a/a3/F0643.png",
		estatistica: {
			ps: 100,
			atq: 120,
			def: 100,
			atq_esp: 150,
			def_esp: 120,
			vel: 90,
		},
		descricao:
			"Este Pokémon aparece em lendas. Lança chamas no ar de sua cauda, queimando tudo ao redor.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vastidão Branca",
		obtencao: "O Castelo de N; ou Dragonspiral Tower",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4c/643Reshiram_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Reshiram_(Pok%C3%A9mon)",
	},
	{
		nome: "Zekrom",
		numero: 644, // considerando a national dex
		tipo: ["Dragão", " Elétrico"],
		massa: 345.0, // em kg
		altura: 2.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/e/ee/F0644.png",
		estatistica: {
			ps: 100,
			atq: 150,
			def: 120,
			atq_esp: 120,
			def_esp: 100,
			vel: 90,
		},
		descricao:
			"Este Pokémon aparece em lendas. Em sua cauda, possui um gerador gigante que cria eletricidade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Preto Intenso",
		obtencao: "O Castelo de N; ou Dragonspiral Tower",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/18/644Zekrom_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zekrom_(Pok%C3%A9mon)",
	},
	{
		nome: "Landorus (Forma Materializada)",
		numero: 645.1, // considerando a national dex
		tipo: ["Terra", " Voador"],
		massa: 68.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/64/F0645.png",
		estatistica: {
			ps: 89,
			atq: 125,
			def: 90,
			atq_esp: 115,
			def_esp: 80,
			vel: 101,
		},
		descricao:
			"Terras visitadas por este Pokémon proporcionam colheitas tão abundantes que foi aclamado como 'O Guadião dos Campos'.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abundância",
		obtencao: "Abundant Shrine",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/77/645Landorus_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Landorus_(Pok%C3%A9mon)",
	},
	{
		nome: "Landorus (Forma Therian)",
		numero: 645.2, // considerando a national dex
		tipo: ["Terra", " Voador"],
		massa: 68.0, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/6/64/F0645.png",
		estatistica: {
			ps: 89,
			atq: 145,
			def: 90,
			atq_esp: 105,
			def_esp: 80,
			vel: 91,
		},
		descricao:
			"Terras visitadas por este Pokémon proporcionam colheitas tão abundantes que foi aclamado como 'O Guadião dos Campos'.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abundância",
		obtencao: "Abundant Shrine e ativar o Espelho Revelador",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b8/645Landorus_Therian_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Landorus_(Pok%C3%A9mon)",
	},
	{
		nome: "Kyurem",
		numero: 646.1, // considerando a national dex
		tipo: ["Dragão", " Gelo"],
		massa: 325.0, // em kg
		altura: 3.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b1/F0646.png",
		estatistica: {
			ps: 125,
			atq: 130,
			def: 90,
			atq_esp: 130,
			def_esp: 90,
			vel: 95,
		},
		descricao:
			"Gera uma poderosa energia congelante dentro de si, mas seu corpo se torna congelado quando essa energia vaza.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fronteira",
		obtencao: "Giant Chasm",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1a/646Kyurem_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kyurem_(Pok%C3%A9mon)",
	},
	{
		nome: "Kyurem Branco",
		numero: 646.2, // considerando a national dex
		tipo: ["Dragão", " Gelo"],
		massa: 325.0, // em kg
		altura: 3.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b1/F0646.png",
		estatistica: {
			ps: 125,
			atq: 120,
			def: 90,
			atq_esp: 170,
			def_esp: 100,
			vel: 95,
		},
		descricao:
			"Gera uma poderosa energia congelante dentro de si, mas seu corpo se torna congelado quando essa energia vaza.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fronteira",
		obtencao: "Giant Chasm e ativar Ponta de DNA com Reshiram",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e1/646Kyurem_White_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kyurem_(Pok%C3%A9mon)",
	},
	{
		nome: "Kyurem Preto",
		numero: 646.3, // considerando a national dex
		tipo: ["Dragão", " Gelo"],
		massa: 325.0, // em kg
		altura: 3.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/b/b1/F0646.png",
		estatistica: {
			ps: 125,
			atq: 170,
			def: 100,
			atq_esp: 120,
			def_esp: 90,
			vel: 95,
		},
		descricao:
			"Gera uma poderosa energia congelante dentro de si, mas seu corpo se torna congelado quando essa energia vaza.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fronteira",
		obtencao: "Giant Chasm e ativar Ponta de DNA com Zekrom",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/dc/646Kyurem_Black_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kyurem_(Pok%C3%A9mon)",
	},
	{
		nome: "Keldeo",
		numero: 647, // considerando a national dex
		tipo: ["Água", " Lutador"],
		massa: 48.5, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/8e/F0647.png",
		estatistica: {
			ps: 91,
			atq: 72,
			def: 90,
			atq_esp: 129,
			def_esp: 90,
			vel: 108,
		},
		descricao:
			"Ao lançar água de seus cascos, consegue deslizar pela água. Se destaca em usar movimentos de pernas enquanto luta.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Potro",
		obtencao: "Por evento",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6f/647Keldeo_Dream.png",
			"https://archives.bulbagarden.net/media/upload/0/0f/647Keldeo_Resolute_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Keldeo_(Pok%C3%A9mon)",
	},
	{
		nome: "Meloetta (Forma Ária)",
		numero: 648.1, // considerando a national dex
		tipo: ["Normal", " Psíquico"],
		massa: 6.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/90/F0648.png",
		estatistica: {
			ps: 100,
			atq: 77,
			def: 77,
			atq_esp: 128,
			def_esp: 128,
			vel: 90,
		},
		descricao:
			"Suas melodias são cantadas com um método de vocalização especial que consegue controlar os sentimentos daqueles que o escuta.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Melodia",
		obtencao: "Por evento",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4e/648Meloetta_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Meloetta_(Pok%C3%A9mon)",
	},
	{
		nome: "Meloetta (Forma Pirueta)",
		numero: 648.2, // considerando a national dex
		tipo: ["Normal", " Lutador"],
		massa: 6.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/90/F0648.png",
		estatistica: {
			ps: 100,
			atq: 128,
			def: 90,
			atq_esp: 77,
			def_esp: 77,
			vel: 128,
		},
		descricao:
			"Suas melodias são cantadas com um método de vocalização especial que conseuge controlar os sentimentos daqueles que o escuta.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Melodia",
		obtencao:
			"Por evento e, quando em batalha, usa o movimento Canção da Relíquia",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/ff/648Meloetta_P_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Meloetta_(Pok%C3%A9mon)",
	},
	{
		nome: "Genesect",
		numero: 649, // considerando a national dex
		tipo: ["Inseto", " Metal"],
		massa: 82.5, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/9/98/F0649.png",
		estatistica: {
			ps: 71,
			atq: 120,
			def: 95,
			atq_esp: 120,
			def_esp: 95,
			vel: 99,
		},
		descricao:
			"Mais de trezentos milhões de anos atrás, era temido como o mais forte dos caçadores. Foi modificado pela Equipe Plasma.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Era Paleozoica",
		obtencao: "Por evento",
		estagio: 1,
		geracao: 5, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f3/649Genesect_Dream.png",
			"https://archives.bulbagarden.net/media/upload/6/63/649Genesect_Shock_Dream.png",
			"https://archives.bulbagarden.net/media/upload/b/b8/649Genesect_Burn_Dream.png",
			"https://archives.bulbagarden.net/media/upload/b/b9/649Genesect_Chill_Dream.png",
			"https://archives.bulbagarden.net/media/upload/5/50/649Genesect_Douse_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Genesect_(Pok%C3%A9mon)",
	},
	{
		nome: "Chespin",
		numero: 650, // considerando a national dex
		tipo: ["Planta"],
		massa: 9.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 56,
			atq: 61,
			def: 65,
			atq_esp: 48,
			def_esp: 45,
			vel: 38,
		},
		descricao:
			"As penas em sua cabeça são geralmente macias. Quando as flexiona, as pontas se tornam tão duras e afiadas que podem perfurar uma rocha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Noz Espinhosa",
		obtencao: "Aquacorde Town",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c5/650Chespin_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Chespin_(Pok%C3%A9mon)",
	},
	{
		nome: "Quilladin",
		numero: 651, // considerando a national dex
		tipo: ["Planta"],
		massa: 29.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 61,
			atq: 78,
			def: 95,
			atq_esp: 56,
			def_esp: 58,
			vel: 57,
		},
		descricao:
			"Depende de seu casco robusto para desviar os ataques de predadores. Contra-ataca com seus penas afiadas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Armadura Espinhosa",
		obtencao: "Friend Safari; e por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/79/651Quilladin_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Quilladin_(Pok%C3%A9mon)",
	},
	{
		nome: "Chesnaught",
		numero: 652, // considerando a national dex
		tipo: ["Planta", " Lutador"],
		massa: 90.0, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 88,
			atq: 107,
			def: 122,
			atq_esp: 74,
			def_esp: 75,
			vel: 64,
		},
		descricao:
			"Sua Investida é potente o suficiente para virar um tanque de cinquenta toneladas. Protege seus aliados do perigo com seu próprio corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Armadura Espinhosa",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d3/652Chesnaught_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Chesnaught_(Pok%C3%A9mon)",
	},
	{
		nome: "Fennekin",
		numero: 653, // considerando a national dex
		tipo: ["Fogo"],
		massa: 9.4, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 40,
			atq: 45,
			def: 40,
			atq_esp: 62,
			def_esp: 60,
			vel: 60,
		},
		descricao:
			"Comer um galho enche este Pokémon de energia, e suas orelhas espaçosas liberam ar com temperatura superior a 200° Celsius.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raposa",
		obtencao: "Aquacorde Town",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1f/653Fennekin_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Fennekin_(Pok%C3%A9mon)",
	},
	{
		nome: "Braixen",
		numero: 654, // considerando a national dex
		tipo: ["Fogo"],
		massa: 14.5, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 59,
			atq: 59,
			def: 58,
			atq_esp: 90,
			def_esp: 70,
			vel: 73,
		},
		descricao:
			"Tem um galho preso na cauda. Com o atrito do pelo da cauda, incendeia o galho e se lança na batalha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raposa",
		obtencao: "Friend Safari; e por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/ab/654Braixen_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Braixen_(Pok%C3%A9mon)",
	},
	{
		nome: "Delphox",
		numero: 655, // considerando a national dex
		tipo: ["Fogo", " Psíquico"],
		massa: 39.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 75,
			atq: 69,
			def: 72,
			atq_esp: 114,
			def_esp: 100,
			vel: 104,
		},
		descricao:
			"Olha fixamente a chama na ponta de seu galho para alcançar um estado de foco, o que lhe permite enxergar o futuro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raposa",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/94/655Delphox_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Delphox_(Pok%C3%A9mon)",
	},
	{
		nome: "Froakie",
		numero: 656, // considerando a national dex
		tipo: ["Água"],
		massa: 7.0, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 41,
			atq: 56,
			def: 40,
			atq_esp: 62,
			def_esp: 44,
			vel: 71,
		},
		descricao:
			"Secreta bolha flexíveis de seu peito e das costas. As bolhas reduzem o dano que receberia quando atacado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sapo Bolha",
		obtencao: "Aquacorde Town",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/27/656Froakie_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Froakie_(Pok%C3%A9mon)",
	},
	{
		nome: "Frogadier",
		numero: 657, // considerando a national dex
		tipo: ["Água"],
		massa: 10.9, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 54,
			atq: 63,
			def: 52,
			atq_esp: 83,
			def_esp: 56,
			vel: 97,
		},
		descricao:
			"Consegue lançar pedras cobertas por bolhas com controle preciso, acertando latas vazias a até trinta metros de distância.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sapo Bolha",
		obtencao: "Friend Safari; e por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/8f/657Frogadier_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Frogadier_(Pok%C3%A9mon)",
	},
	{
		nome: "Greninja",
		numero: 658, // considerando a national dex
		tipo: ["Água", " Noturno"],
		massa: 40.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 72,
			atq: 95,
			def: 67,
			atq_esp: 103,
			def_esp: 71,
			vel: 122,
		},
		descricao:
			"Cria estrelas de arremesso a partir de água comprimida. Quando as gira e as arremessa em alta velocidade, essas estrelas podem dividir metal em dois.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ninja",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e0/658Greninja_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Greninja_(Pok%C3%A9mon)",
	},
	{
		nome: "Bunnelby",
		numero: 659, // considerando a national dex
		tipo: ["Normal"],
		massa: 5.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 38,
			atq: 36,
			def: 38,
			atq_esp: 32,
			def_esp: 36,
			vel: 57,
		},
		descricao:
			"Usam suas grandes orelhas para cavar tocas. Cavarão a noite toda.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escavador",
		obtencao: "Rotas 2, 3, 5, e outra",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f3/659Bunnelby_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bunnelby_(Pok%C3%A9mon)",
	},
	{
		nome: "Diggersby",
		numero: 660, // considerando a national dex
		tipo: ["Normal", " Terra"],
		massa: 42.4, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 85,
			atq: 56,
			def: 77,
			atq_esp: 50,
			def_esp: 77,
			vel: 78,
		},
		descricao:
			"Com suas poderosas orelhas, conseguem levantar rochas de uma tonelada ou mais pesadas com facilidade. Podem ser de grande ajuda em canteiros de obras.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escavador",
		obtencao: "Rota 22; Friend Safari; e por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d9/660Diggersby_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Diggersby_(Pok%C3%A9mon)",
	},
	{
		nome: "Fletchling",
		numero: 661, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 1.7, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 45,
			atq: 50,
			def: 43,
			atq_esp: 40,
			def_esp: 38,
			vel: 62,
		},
		descricao:
			"Apesar da beleza de sua voz cadenciada, é implacável com intrusos que entram em seu território.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pintarroxinho",
		obtencao: "Rotas 2, e 3; Santalune Forest",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e4/661Fletchling_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Fletchling_(Pok%C3%A9mon)",
	},
	{
		nome: "Fletchinder",
		numero: 662, // considerando a national dex
		tipo: ["Fogo", " Voador"],
		massa: 16.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 62,
			atq: 73,
			def: 55,
			atq_esp: 56,
			def_esp: 52,
			vel: 84,
		},
		descricao:
			"Quanto mais quente a bolsa de chamas em sua barriga, mais rápido consegue voar, mas leva algum tempo para acender o fogo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Brasa",
		obtencao: "Friend Safari; e por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/20/662Fletchinder_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Fletchinder_(Pok%C3%A9mon)",
	},
	{
		nome: "Talonflame",
		numero: 663, // considerando a national dex
		tipo: ["Fogo", " Voador"],
		massa: 24.5, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 78,
			atq: 81,
			def: 71,
			atq_esp: 74,
			def_esp: 69,
			vel: 126,
		},
		descricao:
			"Quando ataca presas, pode alcançar velocidades de até 500 km/h. Finaliza sua presa com um poderoso chute.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ardente",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f6/663Talonflame_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Talonflame_(Pok%C3%A9mon)",
	},
	{
		nome: "Scatterbug",
		numero: 664, // considerando a national dex
		tipo: ["Inseto"],
		massa: 2.5, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 38,
			atq: 35,
			def: 40,
			atq_esp: 27,
			def_esp: 25,
			vel: 35,
		},
		descricao:
			"Quando está sob ataque de algum Pokémon pássaro, cospe um pó preto venenoso que causa paralisia no contato.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Poeira Dispersa",
		obtencao: "Rota 2; e Santalune Forest",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b3/664Scatterbug_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Scatterbug_(Pok%C3%A9mon)",
	},
	{
		nome: "Spewpa",
		numero: 665, // considerando a national dex
		tipo: ["Inseto"],
		massa: 8.4, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 45,
			atq: 22,
			def: 60,
			atq_esp: 27,
			def_esp: 30,
			vel: 29,
		},
		descricao:
			"Vive escondido em sombras de arbustos. Quando predadores atacam, rapidamente eriça o pelo que cobre seu corpo em um esforço para ameaçá-los.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Poeira Dispersa",
		obtencao: "Berry Fields; e por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/20/665Spewpa_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Spewpa_(Pok%C3%A9mon)",
	},
	{
		nome: "Vivillon",
		numero: 666, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 17.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 80,
			atq: 52,
			def: 50,
			atq_esp: 90,
			def_esp: 50,
			vel: 89,
		},
		descricao:
			"Os padrões nas asas deste Pokémon dependem do clima e da topografia de seu habitat. Espalha escamas coloridas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escama",
		obtencao: "Friend Safari; e por evolução",
		estagio: 3,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/02/666Vivillon_Archipelago_Dream.png",
			"https://archives.bulbagarden.net/media/upload/7/7d/666Vivillon_Continental_Dream.png",
			"https://archives.bulbagarden.net/media/upload/2/21/666Vivillon_Elegant_Dream.png",
			"https://archives.bulbagarden.net/media/upload/8/83/666Vivillon_Fancy_Dream.png",
			"https://archives.bulbagarden.net/media/upload/5/54/666Vivillon_Garden_Dream.png",
			"https://archives.bulbagarden.net/media/upload/e/e2/666Vivillon_High_Plains_Dream.png",
			"https://archives.bulbagarden.net/media/upload/6/6e/666Vivillon_Icy_Snow_Dream.png",
			"https://archives.bulbagarden.net/media/upload/2/2b/666Vivillon_Jungle_Dream.png",
			"https://archives.bulbagarden.net/media/upload/6/69/666Vivillon_Marine_Dream.png",
			"https://archives.bulbagarden.net/media/upload/3/37/666Vivillon_Meadow_Dream.png",
			"https://archives.bulbagarden.net/media/upload/2/2a/666Vivillon_Modern_Dream.png",
			"https://archives.bulbagarden.net/media/upload/0/02/666Vivillon_Monsoon_Dream.png",
			"https://archives.bulbagarden.net/media/upload/8/8e/666Vivillon_Ocean_Dream.png",
			"https://archives.bulbagarden.net/media/upload/1/13/666Vivillon_Pok%C3%A9_Ball_Dream.png",
			"https://archives.bulbagarden.net/media/upload/1/11/666Vivillon_Polar_Dream.png",
			"https://archives.bulbagarden.net/media/upload/f/fa/666Vivillon_River_Dream.png",
			"https://archives.bulbagarden.net/media/upload/1/1e/666Vivillon_Sandstorm_Dream.png",
			"https://archives.bulbagarden.net/media/upload/b/b6/666Vivillon_Savannah_Dream.png",
			"https://archives.bulbagarden.net/media/upload/1/19/666Vivillon_Sun_Dream.png",
			"https://archives.bulbagarden.net/media/upload/f/f9/666Vivillon_Tundra_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vivillon_(Pok%C3%A9mon)",
	},
	{
		nome: "Litleo",
		numero: 667, // considerando a national dex
		tipo: ["Fogo", " Normal"],
		massa: 13.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 62,
			atq: 50,
			def: 58,
			atq_esp: 73,
			def_esp: 54,
			vel: 72,
		},
		descricao:
			"Quanto mais forte o oponente que enfrenta, mais calor surge de sua crina e mais poder fluirá por seu corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Filhote de Leão",
		obtencao: "Rota 22",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a8/667Litleo_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Litleo_(Pok%C3%A9mon)",
	},
	{
		nome: "Pyroar",
		numero: 668, // considerando a national dex
		tipo: ["Fogo", " Normal"],
		massa: 81.5, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 86,
			atq: 68,
			def: 72,
			atq_esp: 109,
			def_esp: 66,
			vel: 106,
		},
		descricao:
			"Com um hálito ardente de mais de 6'000° Celsius, ameaçam ferozmente qualquer desafiante. As fêmeas protegem os filhotes do bando.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Real",
		obtencao: "Friend Safari; e por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/04/668Pyroar_Female_WF.png",
			"https://archives.bulbagarden.net/media/upload/9/9d/668Pyroar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pyroar_(Pok%C3%A9mon)",
	},
	{
		nome: "Flabébé",
		numero: 669, // considerando a national dex
		tipo: ["Fada"],
		massa: 0.1, // em kg
		altura: 0.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 44,
			atq: 38,
			def: 39,
			atq_esp: 61,
			def_esp: 79,
			vel: 42,
		},
		descricao:
			"Extrai e controla o poder oculto das flores. A flor que segura é provavelmente parte de seu corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Florescimento Simples",
		obtencao: "Rotas 4, e 7",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/39/669Flab%C3%A9b%C3%A9_Blue_Flower_Dream.png",
			"https://archives.bulbagarden.net/media/upload/b/b9/669Flab%C3%A9b%C3%A9_Orange_Flower_Dream.png",
			"https://archives.bulbagarden.net/media/upload/9/9a/669Flab%C3%A9b%C3%A9_Red_Flower_Dream.png",
			"https://archives.bulbagarden.net/media/upload/7/78/669Flab%C3%A9b%C3%A9_White_Flower_Dream.png",
			"https://archives.bulbagarden.net/media/upload/0/0c/669Flab%C3%A9b%C3%A9_Yellow_Flower_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Flab%C3%A9b%C3%A9_(Pok%C3%A9mon)",
	},
	{
		nome: "Floette",
		numero: 670, // considerando a national dex
		tipo: ["Fada"],
		massa: 0.9, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 54,
			atq: 45,
			def: 47,
			atq_esp: 75,
			def_esp: 98,
			vel: 52,
		},
		descricao:
			"Voa em torno de campos de flores e cuida das flores que estão começando a murchar. Extrai o poder oculto das flores para a batalha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Florescimento Simples",
		obtencao: "Friend Safari; e por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/70/670Floette_Blue_Flower_Dream.png",
			"https://archives.bulbagarden.net/media/upload/0/06/670Floette_Orange_Flower_Dream.png",
			"https://archives.bulbagarden.net/media/upload/a/a3/670Floette_Red_Flower_Dream.png",
			"https://archives.bulbagarden.net/media/upload/a/a0/670Floette_White_Flower_Dream.png",
			"https://archives.bulbagarden.net/media/upload/1/1f/670Floette_Yellow_Flower_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Floette_(Pok%C3%A9mon)",
	},
	{
		nome: "Florges",
		numero: 671, // considerando a national dex
		tipo: ["Fada"],
		massa: 10.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 78,
			atq: 65,
			def: 68,
			atq_esp: 112,
			def_esp: 154,
			vel: 75,
		},
		descricao:
			"Reivindica jardins floridos requintados como seu território e obtém poder ao se aquecer na energia emitida pelas plantas floridas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Jardim",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/bc/671Florges_Blue_Flower_Dream.png",
			"https://archives.bulbagarden.net/media/upload/6/6f/671Florges_Orange_Flower_Dream.png",
			"https://archives.bulbagarden.net/media/upload/b/b9/671Florges_Red_Flower_Dream.png",
			"https://archives.bulbagarden.net/media/upload/e/ea/671Florges_White_Flower_Dream.png",
			"https://archives.bulbagarden.net/media/upload/5/5d/671Florges_Yellow_Flower_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Florges_(Pok%C3%A9mon)",
	},
	{
		nome: "Skiddo",
		numero: 672, // considerando a national dex
		tipo: ["Planta"],
		massa: 31.0, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 66,
			atq: 65,
			def: 48,
			atq_esp: 62,
			def_esp: 57,
			vel: 52,
		},
		descricao:
			"Considerado um dos primeiros Pokémon a viver em harmonia com os humanos, tem uma disposição plácida.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Monte",
		obtencao: "Rota 5",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/89/672Skiddo_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Skiddo_(Pok%C3%A9mon)",
	},
	{
		nome: "Gogoat",
		numero: 673, // considerando a national dex
		tipo: ["Planta"],
		massa: 91.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 123,
			atq: 100,
			def: 62,
			atq_esp: 97,
			def_esp: 81,
			vel: 68,
		},
		descricao:
			"Consegue diferenciar os sentimentos de seu Treinador pelas mudanças sutis na pegada de seus chifres. Esse senso empático permite que corram como se fossem um ser.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Monte",
		obtencao: "Friend Safari; e por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/07/673Gogoat_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gogoat_(Pok%C3%A9mon)",
	},
	{
		nome: "Pancham",
		numero: 674, // considerando a national dex
		tipo: ["Lutador"],
		massa: 8.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 67,
			atq: 82,
			def: 62,
			atq_esp: 46,
			def_esp: 48,
			vel: 43,
		},
		descricao:
			"Faz seu melhor para ser levado a sério por seus inimigos, mas seu olhar não é suficientemente intimidante. Mastigar uma folha é sua marca registrada.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Brincalhão",
		obtencao: "Rota 5; e Friend Safari",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4f/674Pancham_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pancham_(Pok%C3%A9mon)",
	},
	{
		nome: "Pangoro",
		numero: 675, // considerando a national dex
		tipo: ["Lutador", " Noturno"],
		massa: 136.0, // em kg
		altura: 2.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 95,
			atq: 124,
			def: 78,
			atq_esp: 69,
			def_esp: 71,
			vel: 58,
		},
		descricao:
			"Apesar de possuir um temperamento violento, não tolera o bullying. Usa a folha em sua boca para sentir os movimentos de seus inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Atemorizante",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/fb/675Pangoro_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pangoro_(Pok%C3%A9mon)",
	},
	{
		nome: "Furfrou",
		numero: 676, // considerando a national dex
		tipo: ["Normal"],
		massa: 28.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 75,
			atq: 80,
			def: 60,
			atq_esp: 65,
			def_esp: 90,
			vel: 102,
		},
		descricao:
			"Aparar seu pelo fofo não apenas o torna mais elegante, mas também aumenta a rapidez de seus movimentos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Poodle",
		obtencao: "Rota 5",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1b/676Furfrou_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Furfrou_(Pok%C3%A9mon)",
	},
	{
		nome: "Espurr",
		numero: 677, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 3.5, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 62,
			atq: 48,
			def: 54,
			atq_esp: 63,
			def_esp: 60,
			vel: 68,
		},
		descricao:
			"O órgão que emite seu intenso poder psíquico é protegido por seus ouvidos para evitar que o poder vaze.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Retenção",
		obtencao: "Rota 6; e Friend Safari",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/33/677Espurr_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Espurr_(Pok%C3%A9mon)",
	},
	{
		nome: "Meowstic",
		numero: 678, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 8.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 74,
			atq: 48,
			def: 76,
			atq_esp: 83,
			def_esp: 81,
			vel: 104,
		},
		descricao:
			"Quando está em perigo, ergue suas orelhas e libera poder psíquico suficiente para transformar um caminhão de dez toneladas em pó.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Restrição",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6a/678Meowstic_Female_Dream.png",
			"https://archives.bulbagarden.net/media/upload/6/69/678Meowstic_Male_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Meowstic_(Pok%C3%A9mon)",
	},
	{
		nome: "Honedge",
		numero: 679, // considerando a national dex
		tipo: ["Metal", " Fantasma"],
		massa: 2.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 45,
			atq: 80,
			def: 100,
			atq_esp: 35,
			def_esp: 37,
			vel: 28,
		},
		descricao:
			"Aparentemente, este Pokémon nasce quando um espírito que partiu habita uma espada. Este Pokémon se liga às pessoas e bebe sua força vital.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espada",
		obtencao: "Rota 6",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/78/679Honedge_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Honedge_(Pok%C3%A9mon)",
	},
	{
		nome: "Doublade",
		numero: 680, // considerando a national dex
		tipo: ["Metal", " Fantasma"],
		massa: 4.5, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 59,
			atq: 110,
			def: 150,
			atq_esp: 45,
			def_esp: 49,
			vel: 35,
		},
		descricao:
			"Os complexos padrões de ataque dessas duas espadas são imparáveis, mesmo para um oponente altamente versado em esgrima.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espada",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/32/680Doublade_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Doublade_(Pok%C3%A9mon)",
	},
	{
		nome: "Aegislash (Forma Escudo)",
		numero: 681.1, // considerando a national dex
		tipo: ["Metal", " Fantasma"],
		massa: 53.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 60,
			atq: 50,
			def: 140,
			atq_esp: 50,
			def_esp: 140,
			vel: 60,
		},
		descricao:
			"Aparentemente, consegue detectar as qualidades inatas da liderança. De acordo com lendas, quer quer que reconheça está destinado a se tornar rei.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espada Real",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5b/681Aegislash_Shield_Forme_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Aegislash_(Pok%C3%A9mon)",
	},
	{
		nome: "Aegislash (Forma Lâmina)",
		numero: 681.2, // considerando a national dex
		tipo: ["Metal", " Fantasma"],
		massa: 53.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 60,
			atq: 140,
			def: 50,
			atq_esp: 140,
			def_esp: 50,
			vel: 60,
		},
		descricao:
			"Aparentemente, consegue detectar as qualidades inatas da liderança. De acordo com lendas, quer quer que reconheça está destinado a se tornar rei.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espada Real",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4e/681Aegislash_Blade_Forme_Dream.png",
			"https://archives.bulbagarden.net/media/upload/f/f7/681Aegislash_Blade_Forme_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Aegislash_(Pok%C3%A9mon)",
	},
	{
		nome: "Spritzee",
		numero: 682, // considerando a national dex
		tipo: ["Fada"],
		massa: 0.5, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 78,
			atq: 52,
			def: 60,
			atq_esp: 63,
			def_esp: 65,
			vel: 23,
		},
		descricao:
			"Emite um cheiro que arrebata aqueles que o cheiram. Esta fragrância muda dependendo do que comeu.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Perfume",
		obtencao: "Rota 7; e Friend Safari",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5c/682Spritzee_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Spritzee_(Pok%C3%A9mon)",
	},
	{
		nome: "Aromatisse",
		numero: 683, // considerando a national dex
		tipo: ["Fada"],
		massa: 15.5, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 101,
			atq: 72,
			def: 72,
			atq_esp: 99,
			def_esp: 89,
			vel: 29,
		},
		descricao:
			"Inventa vários aromas, agradáveis e desagradáveis, e emite aromas que seus inimigos não gostam para ganhar vantagem na batalha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fragrância",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/81/683Aromatisse_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Aromatisse_(Pok%C3%A9mon)",
	},
	{
		nome: "Swirlix",
		numero: 684, // considerando a national dex
		tipo: ["Fada"],
		massa: 3.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 62,
			atq: 48,
			def: 66,
			atq_esp: 59,
			def_esp: 57,
			vel: 49,
		},
		descricao:
			"Para enredar seus oponentes na batalha, extruda fios brancos tão doces e pegajosos quanto algodão doce.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Algodão-doce",
		obtencao: "Rota 7; e Friend Safari",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f5/684Swirlix_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Swirlix_(Pok%C3%A9mon)",
	},
	{
		nome: "Slurpuff",
		numero: 685, // considerando a national dex
		tipo: ["Fada"],
		massa: 5.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 82,
			atq: 80,
			def: 86,
			atq_esp: 85,
			def_esp: 75,
			vel: 72,
		},
		descricao:
			"Consegue distinguir o mais fraco dos cheiros. Coloca seu olfato sensível em uso, ajudando os confeiteiros em seu trabalho.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Suspiro",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a1/685Slurpuff_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Slurpuff_(Pok%C3%A9mon)",
	},
	{
		nome: "Inkay",
		numero: 686, // considerando a national dex
		tipo: ["Noturno", " Psíquico"],
		massa: 3.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 53,
			atq: 54,
			def: 53,
			atq_esp: 37,
			def_esp: 46,
			vel: 45,
		},
		descricao:
			"Os oponentes que olham fixamente para o brilho dos pontos emissores de luz em seu corpo ficam atordoados e perdem a vontade de lutar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Orbitante",
		obtencao: "Rota 8; Azure Bay; e Friend Safari",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d1/686Inkay_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Inkay_(Pok%C3%A9mon)",
	},
	{
		nome: "Malamar",
		numero: 687, // considerando a national dex
		tipo: ["Noturno", " Psíquico"],
		massa: 47.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 86,
			atq: 92,
			def: 88,
			atq_esp: 68,
			def_esp: 75,
			vel: 73,
		},
		descricao:
			"Atrai suas presas para perto com movimentos hipnóticos, depois envolve seus tentáculos ao redor dela antes de finalizá-la com fluidos digestivos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Capotador",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2b/687Malamar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Malamar_(Pok%C3%A9mon)",
	},
	{
		nome: "Binacle",
		numero: 688, // considerando a national dex
		tipo: ["Rocha", " Água"],
		massa: 31.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 42,
			atq: 52,
			def: 67,
			atq_esp: 39,
			def_esp: 56,
			vel: 50,
		},
		descricao:
			"Esticam e depois contraem, puxando suas rochas junto em saltos ousados. Comem algas marinhas que aparecem na costa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Duas Mãos",
		obtencao: "Rotas 8, e 12; e Azure Bay",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/51/688Binacle_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Binacle_(Pok%C3%A9mon)",
	},
	{
		nome: "Barbaracle",
		numero: 689, // considerando a national dex
		tipo: ["Rocha", " Água"],
		massa: 96.0, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 72,
			atq: 105,
			def: 115,
			atq_esp: 54,
			def_esp: 86,
			vel: 68,
		},
		descricao:
			"As pernas e mãos deste Pokémon possuem mentes próprias, e se movem independentemente. Mas normalmente seguem as ordens da cabeça.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coletivo",
		obtencao: "Friend Safari; e por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/52/689Barbaracle_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Barbaracle_(Pok%C3%A9mon)",
	},
	{
		nome: "Skrelp",
		numero: 690, // considerando a national dex
		tipo: ["Veneno", " Água"],
		massa: 7.3, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 50,
			atq: 60,
			def: 60,
			atq_esp: 60,
			def_esp: 60,
			vel: 30,
		},
		descricao:
			"Camuflado como alga podre, este Pokémon borrifa veneno líquido na presa que se aproxima desprevenida e depois acabam com ela.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Alga Falsa",
		obtencao: "Rota 8",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/02/690Skrelp_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Skrelp_(Pok%C3%A9mon)",
	},
	{
		nome: "Dragalge",
		numero: 691, // considerando a national dex
		tipo: ["Veneno", " Dragão"],
		massa: 81.5, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 65,
			atq: 75,
			def: 90,
			atq_esp: 97,
			def_esp: 123,
			vel: 44,
		},
		descricao:
			"Seu veneno é forte o suficiente para comer o casco de um navio-tanque, e eles cospem indiscriminadamente em qualquer coisa que entre em seu território.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Alga Falsa",
		obtencao: "Rota 8; e por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/39/691Dragalge_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dragalge_(Pok%C3%A9mon)",
	},
	{
		nome: "Clauncher",
		numero: 692, // considerando a national dex
		tipo: ["Água"],
		massa: 8.3, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 50,
			atq: 53,
			def: 62,
			atq_esp: 58,
			def_esp: 63,
			vel: 44,
		},
		descricao:
			"Abatem presas voadoras atirando água comprimida de suas grandes garras.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Revólver d'Água",
		obtencao: "Rota 8",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/30/692Clauncher_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Clauncher_(Pok%C3%A9mon)",
	},
	{
		nome: "Clawitzer",
		numero: 693, // considerando a national dex
		tipo: ["Água"],
		massa: 35.3, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 71,
			atq: 73,
			def: 88,
			atq_esp: 120,
			def_esp: 89,
			vel: 59,
		},
		descricao:
			"Suas enormes garras lançam balas de canhão de água poderosas o suficiente para perfurar cascos de navio-tanque.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Obuseiro",
		obtencao: "Rota 8; e por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ec/693Clawitzer_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Clawitzer_(Pok%C3%A9mon)",
	},
	{
		nome: "Helioptile",
		numero: 694, // considerando a national dex
		tipo: ["Elétrico", " Normal"],
		massa: 6.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 44,
			atq: 38,
			def: 33,
			atq_esp: 61,
			def_esp: 43,
			vel: 70,
		},
		descricao:
			"Fazem seus lares em desertos. Conseguem gerar sua energia ao se aquecer ao sol, portanto, comer alimentos não é um requisito.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gerador",
		obtencao: "Rota 9; e Friend Safari",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/20/694Helioptile_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Helioptile_(Pok%C3%A9mon)",
	},
	{
		nome: "Heliolisk",
		numero: 695, // considerando a national dex
		tipo: ["Elétrico", " Normal"],
		massa: 21.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 62,
			atq: 55,
			def: 52,
			atq_esp: 109,
			def_esp: 94,
			vel: 109,
		},
		descricao:
			"Estimula seus músculos com eletricidade, aumentando a força em suas pernas e permitindo correr 90 metros em cinco segundos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gerador",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/cf/695Heliolisk_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Heliolisk_(Pok%C3%A9mon)",
	},
	{
		nome: "Tyrunt",
		numero: 696, // considerando a national dex
		tipo: ["Rocha", " Dragão"],
		massa: 26.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 58,
			atq: 89,
			def: 77,
			atq_esp: 45,
			def_esp: 45,
			vel: 48,
		},
		descricao:
			"Este Pokémon foi restaurado a partir de um fóssil. Caso algo aconteça que não goste, faz birra e corre solto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Herdeiro Real",
		obtencao: "Revivido a partir de um fóssil",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/02/696Tyrunt_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tyrunt_(Pok%C3%A9mon)",
	},
	{
		nome: "Tyrantrum",
		numero: 697, // considerando a national dex
		tipo: ["Rocha", " Dragão"],
		massa: 270.0, // em kg
		altura: 2.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 82,
			atq: 121,
			def: 119,
			atq_esp: 69,
			def_esp: 59,
			vel: 71,
		},
		descricao:
			"Nada poderia parar este Pokémon cem milhões de anos atrás, portanto, se comportava como um rei.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Déspota",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e0/697Tyrantrum_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tyrantrum_(Pok%C3%A9mon)",
	},
	{
		nome: "Amaura",
		numero: 698, // considerando a national dex
		tipo: ["Rocha", " Gelo"],
		massa: 25.2, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 77,
			atq: 59,
			def: 50,
			atq_esp: 67,
			def_esp: 63,
			vel: 46,
		},
		descricao:
			"Este antigo Pokémon foi restaurado de parte de seu corpo que havia sido congelada no gelo por mais de cem milhões de anos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Tundra",
		obtencao: "Revivido a partir de um fóssil",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ef/698Amaura_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Amaura_(Pok%C3%A9mon)",
	},
	{
		nome: "Aurorus",
		numero: 699, // considerando a national dex
		tipo: ["Rocha", " Gelo"],
		massa: 225.0, // em kg
		altura: 2.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 123,
			atq: 77,
			def: 72,
			atq_esp: 99,
			def_esp: 92,
			vel: 58,
		},
		descricao:
			"Usando seus cristais do formato de diamante, consegue instantaneamente criar uma parede de gelo para bloquear um ataque do oponente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Tundra",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d8/699Aurorus_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Aurorus_(Pok%C3%A9mon)",
	},
	{
		nome: "Sylveon",
		numero: 700, // considerando a national dex
		tipo: ["Fada"],
		massa: 23.5, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 95,
			atq: 65,
			def: 65,
			atq_esp: 110,
			def_esp: 130,
			vel: 60,
		},
		descricao:
			"Envia uma aura calmante de suas antenas semelhantes a fita para acalmar lutas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Entrelaçamento",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/42/700Sylveon_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sylveon_(Pok%C3%A9mon)",
	},
	{
		nome: "Hawlucha",
		numero: 701, // considerando a national dex
		tipo: ["Lutador", " Voador"],
		massa: 21.5, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 78,
			atq: 92,
			def: 75,
			atq_esp: 74,
			def_esp: 63,
			vel: 118,
		},
		descricao:
			"Com suas asas, controla sua posição no ar. Gosta de ataca de cima, uma manobra difícil de ser defendida.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Luta Livre",
		obtencao: "Rota 10; e Friend Safari",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/95/701Hawlucha_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hawlucha_(Pok%C3%A9mon)",
	},
	{
		nome: "Dedenne",
		numero: 702, // considerando a national dex
		tipo: ["Elétrico", " Fada"],
		massa: 2.2, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 67,
			atq: 58,
			def: 57,
			atq_esp: 81,
			def_esp: 67,
			vel: 101,
		},
		descricao:
			"Seus bigodes servem como antenas. Ao enviar e receber ondas elétricas, consegue se comunicar com outros a grandes distâncias.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Antena",
		obtencao: "Rota 11; e Friend Safari",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1b/702Dedenne_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dedenne_(Pok%C3%A9mon)",
	},
	{
		nome: "Carbink",
		numero: 703, // considerando a national dex
		tipo: ["Rocha", " Fada"],
		massa: 5.7, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 50,
			atq: 50,
			def: 150,
			atq_esp: 50,
			def_esp: 150,
			vel: 50,
		},
		descricao:
			"Nascido das temperaturas e pressões do subsolo, dispara raios da rocha em sua cabeça.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Joia",
		obtencao: "Caverna dos Reflexos",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ee/703Carbink_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Carbink_(Pok%C3%A9mon)",
	},
	{
		nome: "Goomy",
		numero: 704, // considerando a national dex
		tipo: ["Dragão"],
		massa: 2.8, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 45,
			atq: 50,
			def: 35,
			atq_esp: 55,
			def_esp: 75,
			vel: 40,
		},
		descricao:
			"É coberto por uma membrana viscosa que faz com que qualquer soco ou chute deslize sem causar danos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Tecido Mole",
		obtencao: "Rota 14",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/17/704Goomy_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Goomy_(Pok%C3%A9mon)",
	},
	{
		nome: "Sliggoo de Kalos",
		numero: 705.1, // considerando a national dex
		tipo: ["Dragão"],
		massa: 17.5, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 68,
			atq: 75,
			def: 53,
			atq_esp: 83,
			def_esp: 113,
			vel: 60,
		},
		descricao:
			"Foge dos oponentes excretando um líquido pegajoso que pode dissolver qualquer coisa. Seus olhos retrocederam, então não consegue ver nada.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Tecido Mole",
		obtencao: "Rota 19; Friend Safari; e por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/34/705Sliggoo_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sliggoo_(Pok%C3%A9mon)",
	},
	{
		nome: "Sliggoo de Hisui",
		numero: 705.2, // considerando a national dex
		tipo: ["Metal", " Dragão"],
		massa: 68.5, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 58,
			atq: 75,
			def: 83,
			atq_esp: 83,
			def_esp: 113,
			vel: 40,
		},
		descricao:
			"Uma criatura dada à melancolia. Suspeito que sua concha metálica desenvolveu como resultado do muco em sua pele reagindo com o ferro na água da região.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lesma",
		obtencao:
			"Crimson Mirelands: Holm of Trials, Ursa's Ring; Coronet Highlands: próximo a Ancient Quarry; e por evolução",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/97/705Sliggoo-Hisui_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sliggoo_(Pok%C3%A9mon)",
	},
	{
		nome: "Goodra de Kalos",
		numero: 706.1, // considerando a national dex
		tipo: ["Dragão"],
		massa: 150.5, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 90,
			atq: 100,
			def: 70,
			atq_esp: 110,
			def_esp: 150,
			vel: 80,
		},
		descricao:
			"Ataca com chifres retráteis. Lança um soco que é o equivalente à força de uma centena de boxeadores profissionais.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a5/706Goodra_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Goodra_(Pok%C3%A9mon)",
	},
	{
		nome: "Goodra de Hisui",
		numero: 706.2, // considerando a national dex
		tipo: ["Metal", " Dragão"],
		massa: 334.1, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 80,
			atq: 100,
			def: 100,
			atq_esp: 110,
			def_esp: 150,
			vel: 60,
		},
		descricao:
			"Capaz de controlar livremente a dureza de sua concha metálica. Detesta a solidão e é extremamente pegajoso, vai fumegar e correr solto se aqueles mais queridos a ele um dia saírem do seu lado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abrigo de Concha",
		obtencao:
			"Obsidian Fieldlands: Lake Verity; Crimson Mirelands; Coronet Highlands: próximo a Ancient Quarry; e por evolução",
		estagio: 3,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/65/706Goodra_Hisui_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Goodra_(Pok%C3%A9mon)",
	},
	{
		nome: "Klefki",
		numero: 707, // considerando a national dex
		tipo: ["Metal", " Fada"],
		massa: 3.0, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 57,
			atq: 80,
			def: 91,
			atq_esp: 80,
			def_esp: 87,
			vel: 75,
		},
		descricao:
			"Esses colecionadores de chave ameaçam qualquer invasor balançando suas chaves ferozmente para eles.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chaveiro",
		obtencao: "Rotas 15, e 16; Lost Hotel; e Friend Safari",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5c/707Klefki_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Klefki_(Pok%C3%A9mon)",
	},
	{
		nome: "Phantump",
		numero: 708, // considerando a national dex
		tipo: ["Fantasma", " Planta"],
		massa: 7.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 43,
			atq: 70,
			def: 48,
			atq_esp: 50,
			def_esp: 60,
			vel: 38,
		},
		descricao:
			"São criados quando espíritos possuem tocos de árvores podres. Preferem viver em florestas abandonadas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Toco",
		obtencao: "Rota 16; e Friend Safari",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b5/708Phantump_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Phantump_(Pok%C3%A9mon)",
	},
	{
		nome: "Trevenant",
		numero: 709, // considerando a national dex
		tipo: ["Fantasma", " Planta"],
		massa: 71.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 85,
			atq: 110,
			def: 76,
			atq_esp: 65,
			def_esp: 82,
			vel: 56,
		},
		descricao:
			"Pode controlar árvores à vontade. Irá capturar pessoas que danificam a floresta, para que nunca possam sair.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Árvore Anciã",
		obtencao: "Rota 20; e por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d8/709Trevenant_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Trevenant_(Pok%C3%A9mon)",
	},
	{
		nome: "Pumpkaboo (Tamanho Pequeno)",
		numero: 710.1, // considerando a national dex
		tipo: ["Fantasma", " Planta"],
		massa: 3.5, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 44,
			atq: 66,
			def: 70,
			atq_esp: 44,
			def_esp: 55,
			vel: 56,
		},
		descricao:
			"O corpo da abóbora é habitado por um espírito preso neste mundo. Conforme o sol se põe, se torna inquieto e ativo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abóbora",
		obtencao: "Rota 16",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3b/Menu_HOME_0710-Small.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pumpkaboo_(Pok%C3%A9mon)",
	},
	{
		nome: "Pumpkaboo (Tamanho Normal)",
		numero: 710.2, // considerando a national dex
		tipo: ["Fantasma", " Planta"],
		massa: 5.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 49,
			atq: 66,
			def: 70,
			atq_esp: 44,
			def_esp: 55,
			vel: 51,
		},
		descricao:
			"O corpo da abóbora é habitado por um espírito preso neste mundo. Conforme o sol se põe, se torna inquieto e ativo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abóbora",
		obtencao: "Rota 16; e Friend Safari",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b7/Menu_HOME_0710.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pumpkaboo_(Pok%C3%A9mon)",
	},
	{
		nome: "Pumpkaboo (Tamanho Grande)",
		numero: 710.3, // considerando a national dex
		tipo: ["Fantasma", " Planta"],
		massa: 7.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 54,
			atq: 66,
			def: 70,
			atq_esp: 44,
			def_esp: 55,
			vel: 46,
		},
		descricao:
			"O corpo da abóbora é habitado por um espírito preso neste mundo. Conforme o sol se põe, se torna inquieto e ativo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abóbora",
		obtencao: "Rota 16",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e8/Menu_HOME_0710-Large.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pumpkaboo_(Pok%C3%A9mon)",
	},
	{
		nome: "Pumpkaboo (Tamanho Extra Grande)",
		numero: 710.4, // considerando a national dex
		tipo: ["Fantasma", " Planta"],
		massa: 15.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 59,
			atq: 66,
			def: 70,
			atq_esp: 44,
			def_esp: 55,
			vel: 41,
		},
		descricao:
			"O corpo da abóbora é habitado por um espírito preso neste mundo. Conforme o sol se põe, se torna inquieto e ativo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abóbora",
		obtencao: "Rota 16",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4d/Menu_HOME_0710-Super.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pumpkaboo_(Pok%C3%A9mon)",
	},
	{
		nome: "Gourgeist (Tamanho Pequeno)",
		numero: 711.1, // considerando a national dex
		tipo: ["Fantasma", " Planta"],
		massa: 9.5, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 55,
			atq: 85,
			def: 122,
			atq_esp: 58,
			def_esp: 75,
			vel: 99,
		},
		descricao:
			"Cantando com vozes assustadoras, vagam pelas ruas da cidade na noite da lua nova. Qualquer um que ouça sua canção é amaldiçoado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abóbora",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9e/Menu_HOME_0711-Small.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gourgeist_(Pok%C3%A9mon)",
	},
	{
		nome: "Gourgeist (Tamanho Normal)",
		numero: 711.2, // considerando a national dex
		tipo: ["Fantasma", " Planta"],
		massa: 12.5, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 65,
			atq: 90,
			def: 122,
			atq_esp: 58,
			def_esp: 75,
			vel: 84,
		},
		descricao:
			"Cantando com vozes assustadoras, vagam pelas ruas da cidade na noite da lua nova. Qualquer um que ouça sua canção é amaldiçoado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abóbora",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/db/Menu_HOME_0711.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gourgeist_(Pok%C3%A9mon)",
	},
	{
		nome: "Gourgeist (Tamanho Grande)",
		numero: 711.3, // considerando a national dex
		tipo: ["Fantasma", " Planta"],
		massa: 14.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 75,
			atq: 95,
			def: 122,
			atq_esp: 58,
			def_esp: 75,
			vel: 69,
		},
		descricao:
			"Cantando com vozes assustadoras, vagam pelas ruas da cidade na noite da lua nova. Qualquer um que ouça sua canção é amaldiçoado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abóbora",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/67/Menu_HOME_0711-Large.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gourgeist_(Pok%C3%A9mon)",
	},
	{
		nome: "Gourgeist (Tamanho Extra Grande)",
		numero: 711.4, // considerando a national dex
		tipo: ["Fantasma", " Planta"],
		massa: 39.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 85,
			atq: 100,
			def: 122,
			atq_esp: 58,
			def_esp: 75,
			vel: 54,
		},
		descricao:
			"Cantando com vozes assustadoras, vagam pelas ruas da cidade na noite da lua nova. Qualquer um que ouça sua canção é amaldiçoado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abóbora",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f3/Menu_HOME_0711-Super.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gourgeist_(Pok%C3%A9mon)",
	},
	{
		nome: "Bergmite",
		numero: 712, // considerando a national dex
		tipo: ["Gelo"],
		massa: 99.5, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 55,
			atq: 69,
			def: 85,
			atq_esp: 32,
			def_esp: 35,
			vel: 28,
		},
		descricao:
			"Bloqueia ataques do oponente com o gelo que protege seu corpo. Usa ar frio para consertar quaisquer rachaduras com novo gelo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pedaço de Gelo",
		obtencao: "Caverna Congelada; e Friend Safari",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/27/712Bergmite_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bergmite_(Pok%C3%A9mon)",
	},
	{
		nome: "Avalugg de Kalos",
		numero: 713.1, // considerando a national dex
		tipo: ["Gelo"],
		massa: 505.0, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 95,
			atq: 117,
			def: 184,
			atq_esp: 44,
			def_esp: 46,
			vel: 28,
		},
		descricao:
			"Seu corpo coberto de gelo é tão duro quanto aço. Sua estrutura pesada esmaga qualquer coisa que fique em seu caminho.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Iceberg",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/ff/713Avalugg_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Avalugg_(Pok%C3%A9mon)",
	},
	{
		nome: "Avalugg de Hisui",
		numero: 713.2, // considerando a national dex
		tipo: ["Gelo", " Rocha"],
		massa: 262.4, // em kg
		altura: 1.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 95,
			atq: 127,
			def: 184,
			atq_esp: 34,
			def_esp: 36,
			vel: 38,
		},
		descricao:
			"A armadura de gelo que cobre sua mandíbula inferior envergonha o aço e pode quebrar pedras com facilidade. Este Pokémon corre por trilhas íngremes nas montanhas, cortando a neve profunda.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Iceberg",
		obtencao: "Alabaster Icelands: Avalugg's Legacy; e por evolução",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/00/713Avalugg_Hisui_Dream.png",
			"https://archives.bulbagarden.net/media/upload/4/41/713Avalugg_Hisui_Dream_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Avalugg_(Pok%C3%A9mon)",
	},
	{
		nome: "Noibat",
		numero: 714, // considerando a national dex
		tipo: ["Voador", " Dragão"],
		massa: 8.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 40,
			atq: 30,
			def: 35,
			atq_esp: 45,
			def_esp: 40,
			vel: 55,
		},
		descricao:
			"Vivem em caverna escuras como breu. Seus ouvidos enormes podem emitir ondas ultrassônicas de 200'000 hertz.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Onda Sonora",
		obtencao: "Caverna Terminus; Estrada da Vitória; e Friend Safari",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c2/714Noibat_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Noibat_(Pok%C3%A9mon)",
	},
	{
		nome: "Noivern",
		numero: 715, // considerando a national dex
		tipo: ["Voador", " Dragão"],
		massa: 85.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 85,
			atq: 70,
			def: 80,
			atq_esp: 97,
			def_esp: 80,
			vel: 123,
		},
		descricao:
			"Voam por aí em noites sem lua e atacam presas descuidadas. Nada pode vencê-los em uma batalha no escuro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Onda Sonora",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/98/715Noivern_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Noivern_(Pok%C3%A9mon)",
	},
	{
		nome: "Xerneas",
		numero: 716, // considerando a national dex
		tipo: ["Fada"],
		massa: 215.0, // em kg
		altura: 3.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 126,
			atq: 131,
			def: 95,
			atq_esp: 131,
			def_esp: 98,
			vel: 99,
		},
		descricao:
			"Lendas contam que pode compartilhar vida eterna. Dormiu por mil anos na forma de uma árvore antes de seu renascimento.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vida",
		obtencao: "Team Flare Secret HQ",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/70/716Xerneas_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Xerneas_(Pok%C3%A9mon)",
	},
	{
		nome: "Yveltal",
		numero: 717, // considerando a national dex
		tipo: ["Noturno", " Voador"],
		massa: 203.0, // em kg
		altura: 5.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 126,
			atq: 131,
			def: 95,
			atq_esp: 131,
			def_esp: 98,
			vel: 99,
		},
		descricao:
			"Quando sua vida chega ao fim, absorve a energia vital de todas as coisa vivas e se transforma em um casulo novamente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Destruição",
		obtencao: "Team Flare Secret HQ",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/98/717Yveltal_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Yveltal_(Pok%C3%A9mon)",
	},
	{
		nome: "Zygarde Forma 10%",
		numero: 718.1, // considerando a national dex
		tipo: ["Dragão", " Terra"],
		massa: 33.5, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 54,
			atq: 100,
			def: 71,
			atq_esp: 61,
			def_esp: 85,
			vel: 115,
		},
		descricao:
			"Quando o ecossistema de sua região entra em desordem, aparece e revela seu poder secreto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Equilíbrio",
		obtencao: "Caverna Terminus",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f2/718Zygarde_10_Percent_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zygarde_(Pok%C3%A9mon)",
	},
	{
		nome: "Zygarde Forma 50%",
		numero: 718.2, // considerando a national dex
		tipo: ["Dragão", " Terra"],
		massa: 305.0, // em kg
		altura: 5.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 108,
			atq: 100,
			def: 121,
			atq_esp: 81,
			def_esp: 95,
			vel: 95,
		},
		descricao:
			"Quando o ecossistema de sua região entra em desordem, aparece e revela seu poder secreto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Equilíbrio",
		obtencao: "Caverna Terminus",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b1/718Zygarde_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zygarde_(Pok%C3%A9mon)",
	},
	{
		nome: "Zygarde Forma Completa",
		numero: 718.3, // considerando a national dex
		tipo: ["Dragão", " Terra"],
		massa: 610.0, // em kg
		altura: 4.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 216,
			atq: 100,
			def: 121,
			atq_esp: 91,
			def_esp: 95,
			vel: 85,
		},
		descricao:
			"Quando o ecossistema de sua região entra em desordem, aparece e revela seu poder secreto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Equilíbrio",
		obtencao: "Caverna Terminus",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/05/718Zygarde_Complete_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zygarde_(Pok%C3%A9mon)",
	},
	{
		nome: "Diancie",
		numero: 719, // considerando a national dex
		tipo: ["Rocha", " Fada"],
		massa: 8.8, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 50,
			atq: 100,
			def: 150,
			atq_esp: 100,
			def_esp: 150,
			vel: 50,
		},
		descricao:
			"Pode criar instantaneamente vários diamantes comprimindo o carbono no ar entre suas mãos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Joia",
		obtencao: "Por evento",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/cf/719Diancie_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Diancie_(Pok%C3%A9mon)",
	},
	{
		nome: "Hoopa Contido",
		numero: 720.1, // considerando a national dex
		tipo: ["Psíquico", " Fantasma"],
		massa: 9.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 80,
			atq: 110,
			def: 60,
			atq_esp: 150,
			def_esp: 130,
			vel: 70,
		},
		descricao:
			"Este encrenqueiro envia tudo e qualquer coisa para lugares distantes usando seu laço, o que pode distorcer o espaço.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Travessura",
		obtencao: "Por evento",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9b/720Hoopa-Confined_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hoopa_(Pok%C3%A9mon)",
	},
	{
		nome: "Hoopa Libertado",
		numero: 720.2, // considerando a national dex
		tipo: ["Psíquico", " Noturno"],
		massa: 490.0, // em kg
		altura: 6.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 80,
			atq: 160,
			def: 60,
			atq_esp: 170,
			def_esp: 130,
			vel: 80,
		},
		descricao:
			"Este encrenqueiro envia tudo e qualquer coisa para lugares distantes usando seu laço, o que pode distorcer o espaço.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gênio",
		obtencao: "Por evento",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f2/720Hoopa-Unbound_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hoopa_(Pok%C3%A9mon)",
	},
	{
		nome: "Volcanion",
		numero: 721, // considerando a national dex
		tipo: ["Fogo", " Água"],
		massa: 195.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 80,
			atq: 110,
			def: 120,
			atq_esp: 130,
			def_esp: 90,
			vel: 70,
		},
		descricao:
			"Solta nuvens de vapor e desaparece na névoa densa. Dizem que vive em montanhas onde os humanos não pisam.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vapor",
		obtencao: "Por evento",
		estagio: 1,
		geracao: 6, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/21/721Volcanion_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Volcanion_(Pok%C3%A9mon)",
	},
	{
		nome: "Rowlet",
		numero: 722, // considerando a national dex
		tipo: ["Planta", " Voador"],
		massa: 1.5, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 68,
			atq: 55,
			def: 55,
			atq_esp: 50,
			def_esp: 50,
			vel: 42,
		},
		descricao:
			"Este Pokémon cauteloso usa a fotossíntese para armazenar energia durante o dia, enquanto se torna ativo à noite.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pluma de Folha",
		obtencao: "Cidade de Iki; ou Rota 1",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/26/722Rowlet_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rowlet_(Pok%C3%A9mon)",
	},
	{
		nome: "Dartrix",
		numero: 723, // considerando a national dex
		tipo: ["Planta", " Voador"],
		massa: 16.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 78,
			atq: 75,
			def: 75,
			atq_esp: 70,
			def_esp: 70,
			vel: 52,
		},
		descricao:
			"Um pouco dândi, passa seu tempo livre alisando suas asas. Sua preocupação com qualquer sujeira em sua plumagem pode deixá-lo incapaz de lutar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lâmina de Pluma",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e6/723Dartrix_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dartrix_(Pok%C3%A9mon)",
	},
	{
		nome: "Decidueye de Alola",
		numero: 724.1, // considerando a national dex
		tipo: ["Planta", " Fantasma"],
		massa: 36.6, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 78,
			atq: 107,
			def: 75,
			atq_esp: 100,
			def_esp: 100,
			vel: 70,
		},
		descricao:
			"Dispara flechas de suas asas com tanta precisão que elas podem perfurar uma pedra a distância de mais de noventa metros.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Flecha de Pluma",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f7/724Decidueye_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Decidueye_(Pok%C3%A9mon)",
	},
	{
		nome: "Decidueye de Hisui",
		numero: 724.2, // considerando a national dex
		tipo: ["Planta", " Lutador"],
		massa: 37.0, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 88,
			atq: 112,
			def: 80,
			atq_esp: 95,
			def_esp: 95,
			vel: 60,
		},
		descricao:
			"O ar armazenado dentro das ráquis de suas penas isola o Pokémon contra o frio extremo da região.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Flecha de Pluma",
		obtencao: "Coronet Highlands: Space-time distortions; e por evolução",
		estagio: 3,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/40/724Decidueye-Hisui_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Decidueye_(Pok%C3%A9mon)",
	},
	{
		nome: "Litten",
		numero: 725, // considerando a national dex
		tipo: ["Fogo"],
		massa: 4.3, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 45,
			atq: 65,
			def: 40,
			atq_esp: 60,
			def_esp: 40,
			vel: 70,
		},
		descricao:
			"Enquanto se limpa, acumula pelos dentro do estômago. Incendeia os pelos e cospe ataques de fogo, que mudam com base em como tosse.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gato de Fogo",
		obtencao: "Cidade de Iki; ou Rota 1",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/65/725Litten_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Litten_(Pok%C3%A9mon)",
	},
	{
		nome: "Torracat",
		numero: 726, // considerando a national dex
		tipo: ["Fogo"],
		massa: 25.0, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 65,
			atq: 85,
			def: 50,
			atq_esp: 80,
			def_esp: 50,
			vel: 90,
		},
		descricao:
			"Em sua garganta, carrega um sino de fogo. O sino toca brilhantemente sempre que este Pokémon cospe fogo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gato de Fogo",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/dd/726Torracat_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Torracat_(Pok%C3%A9mon)",
	},
	{
		nome: "Incineroar",
		numero: 727, // considerando a national dex
		tipo: ["Fogo", " Noturno"],
		massa: 83.0, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 95,
			atq: 115,
			def: 90,
			atq_esp: 80,
			def_esp: 90,
			vel: 60,
		},
		descricao:
			"Este Pokémon tem uma disposição violenta e egoísta. Caso não esteja com vontade de ouvir, irá ignorar as ordens de seu Treinador com total indiferença.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Salto",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d2/727Incineroar_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Incineroar_(Pok%C3%A9mon)",
	},
	{
		nome: "Popplio",
		numero: 728, // considerando a national dex
		tipo: ["Água"],
		massa: 7.5, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 50,
			atq: 54,
			def: 54,
			atq_esp: 66,
			def_esp: 56,
			vel: 40,
		},
		descricao:
			"Este Pokémon cheira fluidos corporais de seu nariz, soprando balões para esmagar seus inimigos. É famoso por ser um trabalhador esforçado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Leão do Mar",
		obtencao: "Cidade de Iki; ou Rota 1",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0a/728Popplio_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Popplio_(Pok%C3%A9mon)",
	},
	{
		nome: "Brionne",
		numero: 729, // considerando a national dex
		tipo: ["Água"],
		massa: 17.5, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 60,
			atq: 69,
			def: 69,
			atq_esp: 91,
			def_esp: 81,
			vel: 50,
		},
		descricao:
			"Um dançarino habilidoso, este Pokémon cria uma sequência de balões de água enquanto dança, e bombardeia rapidamente seus inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Estrela do Pop",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/53/729Brionne_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Brionne_(Pok%C3%A9mon)",
	},
	{
		nome: "Primarina",
		numero: 730, // considerando a national dex
		tipo: ["Água", " Fada"],
		massa: 44.0, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 80,
			atq: 74,
			def: 74,
			atq_esp: 126,
			def_esp: 116,
			vel: 60,
		},
		descricao:
			"Controla seus balões de água com música. A melodia é aprendida de outras de sua espécie e é transmitida de uma geração para a outra.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Solista",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ea/730Primarina_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Primarina_(Pok%C3%A9mon)",
	},
	{
		nome: "Pikipek",
		numero: 731, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 1.2, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 35,
			atq: 75,
			def: 30,
			atq_esp: 30,
			def_esp: 30,
			vel: 65,
		},
		descricao:
			"Consegue bicar a uma taxa de 16 vezes por segundo para perfurar buracos em árvores. Usa os buracos para armazenar comida e para ninhos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pica-pau",
		obtencao: "Rotas 1, 4, 5, e outras; e Poké Pelago",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a1/731Pikipek_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pikipek_(Pok%C3%A9mon)",
	},
	{
		nome: "Trumbeak",
		numero: 732, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 14.8, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 55,
			atq: 85,
			def: 50,
			atq_esp: 40,
			def_esp: 50,
			vel: 75,
		},
		descricao:
			"Come frutas e armazena as sementes em seu bico. Quando encontra inimigos ou presas, dispara todas as sementes de uma só vez.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bico de Corneta",
		obtencao:
			"Rotas 5, 8, e 11; Selva Exuberante; Poni Grove; Poni Plains; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/9c/732Trumbeak_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Trumbeak_(Pok%C3%A9mon)",
	},
	{
		nome: "Toucannon",
		numero: 733, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 26.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 80,
			atq: 120,
			def: 75,
			atq_esp: 75,
			def_esp: 75,
			vel: 60,
		},
		descricao:
			"Quando batalha, seu bico aquece. A temperatura pode facilmente exceder 100 graus Celsius, causando queimaduras severas quando atinge.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Canhão",
		obtencao: "Rota 11; Poni Grove; Poni Plains; e por evolução",
		estagio: 3,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e6/733Toucannon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Toucannon_(Pok%C3%A9mon)",
	},
	{
		nome: "Yungoos",
		numero: 734, // considerando a national dex
		tipo: ["Normal"],
		massa: 6.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 48,
			atq: 70,
			def: 30,
			atq_esp: 30,
			def_esp: 30,
			vel: 45,
		},
		descricao:
			"Vagueia em uma busca incessante por comida. Ao anoitecer, desmaia de exaustão e adormece no local.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Enrolão",
		obtencao: "Rotas 1, 2, 3, e outras; Kala'e Bay; e Verdant Cavern",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3d/734Yungoos_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Yungoos_(Pok%C3%A9mon)",
	},
	{
		nome: "Gumshoos",
		numero: 735, // considerando a national dex
		tipo: ["Normal"],
		massa: 14.2, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 88,
			atq: 110,
			def: 60,
			atq_esp: 55,
			def_esp: 60,
			vel: 45,
		},
		descricao:
			"Quando encontra um traço de sua presa, pacientemente vigia o local... mas está sempre cochilando ao cair da noite.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vigilante",
		obtencao:
			"Rotas 10, 11, 15, e outras; Akala Outskirts; Ancient Poni Path; Poni Gauntlet; Poni Grove; Poni Plains; Poni Plains; Mount Lanakila; Tapu Village; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b8/735Gumshoos_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gumshoos_(Pok%C3%A9mon)",
	},
	{
		nome: "Grubbin",
		numero: 736, // considerando a national dex
		tipo: ["Inseto"],
		massa: 4.4, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 47,
			atq: 62,
			def: 45,
			atq_esp: 55,
			def_esp: 45,
			vel: 46,
		},
		descricao:
			"Sua forte mandíbula permite este Pokémon raspe árvores e sorva a seiva. Normalmente vive no subsolo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Larva",
		obtencao: "Rotas 1, 2, 3, e outra; e Blush Mountain",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/57/736Grubbin_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Grubbin_(Pok%C3%A9mon)",
	},
	{
		nome: "Charjabug",
		numero: 737, // considerando a national dex
		tipo: ["Inseto", " Elétrico"],
		massa: 10.5, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 57,
			atq: 82,
			def: 95,
			atq_esp: 55,
			def_esp: 75,
			vel: 36,
		},
		descricao:
			"Seu corpo é capaz de armazenar eletricidade. Em acampamentos, pessoas ficam gratas por ter um por perto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bateria",
		obtencao: "Blush Mountain; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/35/737Charjabug_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Charjabug_(Pok%C3%A9mon)",
	},
	{
		nome: "Vikavolt",
		numero: 738, // considerando a national dex
		tipo: ["Inseto", " Elétrico"],
		massa: 45.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 77,
			atq: 70,
			def: 90,
			atq_esp: 145,
			def_esp: 75,
			vel: 43,
		},
		descricao:
			"Produz eletricidade por meio de um órgão elétrico em seu abdomen. Sobrecarrega Pokémon pássaros com raios chocantes de energia elétrica.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lucanídeo",
		obtencao: "Blush Mountain; e por evolução",
		estagio: 3,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d4/738Vikavolt_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vikavolt_(Pok%C3%A9mon)",
	},
	{
		nome: "Crabrawler",
		numero: 739, // considerando a national dex
		tipo: ["Lutador"],
		massa: 7.0, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 47,
			atq: 82,
			def: 57,
			atq_esp: 42,
			def_esp: 47,
			vel: 63,
		},
		descricao:
			"Enquanto protege seus pontos fracos com suas pinças, procura por uma abertura e desfere socos. Quando perde, espuma pela boca e desmaia.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Boxeador",
		obtencao:
			"Rotas 2, 3, 4, e outras; Secluded Shore; Ula'ula Beach; Poni Wilds; e Poni Plains",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/91/739Crabrawler_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Crabrawler_(Pok%C3%A9mon)",
	},
	{
		nome: "Crabominable",
		numero: 740, // considerando a national dex
		tipo: ["Lutador", " Gelo"],
		massa: 180.0, // em kg
		altura: 1.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 97,
			atq: 132,
			def: 77,
			atq_esp: 62,
			def_esp: 67,
			vel: 43,
		},
		descricao:
			"Mirou o topo, mas se perdeu e terminou em uma montanha nevada. Sendo forçado a resistir o frio, este Pokémon evoluiu e cresceu pelo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Caranguejo de Lã",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/37/740Crabominable_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Crabominable_(Pok%C3%A9mon)",
	},
	{
		nome: "Oricorio (Estilo Flamenco)",
		numero: 741.1, // considerando a national dex
		tipo: ["Fogo", " Voador"],
		massa: 3.4, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 75,
			atq: 70,
			def: 70,
			atq_esp: 98,
			def_esp: 70,
			vel: 93,
		},
		descricao:
			"Bate suas asas para criar fogo. Conforme se move nos passos de sua linda dança, banha seus oponentes em chamas intensas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dançante",
		obtencao: "Ula'ula Meadow",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ee/741Oricorio_Baile_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Oricorio_(Pok%C3%A9mon)",
	},
	{
		nome: "Oricorio (Estilo Pompom)",
		numero: 741.2, // considerando a national dex
		tipo: ["Elétrico", " Voador"],
		massa: 3.4, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 75,
			atq: 70,
			def: 70,
			atq_esp: 98,
			def_esp: 70,
			vel: 93,
		},
		descricao:
			"Cria uma carga elétrica ao esfregar suas penas. Dança em direção aos seus inimigos e dá chocantes socos elétricos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dançante",
		obtencao: "Jardim de Melemele",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/fc/741Oricorio_Pom-Pom_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Oricorio_(Pok%C3%A9mon)",
	},
	{
		nome: "Oricorio (Estilo Hula)",
		numero: 741.3, // considerando a national dex
		tipo: ["Psíquico", " Voador"],
		massa: 3.4, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 75,
			atq: 70,
			def: 70,
			atq_esp: 98,
			def_esp: 70,
			vel: 93,
		},
		descricao:
			"Este Pokémon relaxa balançando gentilmente. Isso aumenta sua energia psíquica, que então dispara em seus inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dançante",
		obtencao: "Rota 6",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e6/741Oricorio_Pa%27u_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Oricorio_(Pok%C3%A9mon)",
	},
	{
		nome: "Oricorio (Estilo Leque)",
		numero: 741.4, // considerando a national dex
		tipo: ["Fantasma", " Voador"],
		massa: 3.4, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 75,
			atq: 70,
			def: 70,
			atq_esp: 98,
			def_esp: 70,
			vel: 93,
		},
		descricao:
			"Convoca os mortos com sua dança sonhadora. De sua malícia, extrai poder com o qual amaldiçoa seus inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dançante",
		obtencao: "Poni Meadow",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/14/741Oricorio_Sensu_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Oricorio_(Pok%C3%A9mon)",
	},
	{
		nome: "Cutiefly",
		numero: 742, // considerando a national dex
		tipo: ["Inseto", " Fada"],
		massa: 0.2, // em kg
		altura: 0.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 40,
			atq: 45,
			def: 40,
			atq_esp: 55,
			def_esp: 40,
			vel: 84,
		},
		descricao:
			"Alimenta-se do néctar e do pólen das flores. Por ser capaz de sentir auras, consegue identificar quais flores estão próximas de florescer.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abelha Voadora",
		obtencao: "Rotas 2, e 3; Jardim de Melemele; e Poké Pelago",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7f/742Cutiefly_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cutiefly_(Pok%C3%A9mon)",
	},
	{
		nome: "Ribombee",
		numero: 743, // considerando a national dex
		tipo: ["Inseto", " Fada"],
		massa: 0.5, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 60,
			atq: 55,
			def: 60,
			atq_esp: 95,
			def_esp: 70,
			vel: 124,
		},
		descricao:
			"Enrola pólen em tufos. Produz muitas variedades diferentes, algumas usadas como alimento e outras usadas em batalha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abelha Voadora",
		obtencao: "Ula'ula Meadow; Poni Meadow; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/fe/743Ribombee_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ribombee_(Pok%C3%A9mon)",
	},
	{
		nome: "Rockruff",
		numero: 744, // considerando a national dex
		tipo: ["Rocha"],
		massa: 9.2, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 45,
			atq: 65,
			def: 40,
			atq_esp: 30,
			def_esp: 40,
			vel: 60,
		},
		descricao:
			"É considerado ser um bom Pokémon para iniciantes por ser amigável, mas seu temperamento fica mais rude à medida que cresce.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Filhote",
		obtencao: "Rota 1; e Colina Dez Quilates",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f9/744Rockruff_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rockruff_(Pok%C3%A9mon)",
	},
	{
		nome: "Lycanroc (Forma Diurna)",
		numero: 745.1, // considerando a national dex
		tipo: ["Rocha"],
		massa: 25.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 75,
			atq: 115,
			def: 65,
			atq_esp: 55,
			def_esp: 65,
			vel: 112,
		},
		descricao:
			"Seus movimentos rápidos confundem seus inimigos. Bem equipado com garras e presas, também usa as rochas afiadas em sua juba como armas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lobo",
		obtencao: "Grande Cânion de Poni; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f1/745Lycanroc_Midday_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lycanroc_(Pok%C3%A9mon)",
	},
	{
		nome: "Lycanroc (Forma Noturna)",
		numero: 745.2, // considerando a national dex
		tipo: ["Rocha"],
		massa: 25.0, // em kg
		altura: 1.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 85,
			atq: 115,
			def: 75,
			atq_esp: 55,
			def_esp: 75,
			vel: 82,
		},
		descricao:
			"Quanto mais intimidador for o oponente que enfrenta, mais o sangue deste Pokémon ferve. Atacará sem se importar com sua própria segurança.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lobo",
		obtencao: "Grande Cânion de Poni; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/cf/745Lycanroc_Midnight_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lycanroc_(Pok%C3%A9mon)",
	},
	{
		nome: "Lycanroc (Forma Crepúsculo)",
		numero: 745.3, // considerando a national dex
		tipo: ["Rocha"],
		massa: 25.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 75,
			atq: 117,
			def: 65,
			atq_esp: 55,
			def_esp: 65,
			vel: 110,
		},
		descricao:
			"Debaixo de sua calma aparente está um intenso espírito de luta.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lobo",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/5e/745Lycanroc_Dusk_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lycanroc_(Pok%C3%A9mon)",
	},
	{
		nome: "Wishiwashi (Forma Individual)",
		numero: 746.1, // considerando a national dex
		tipo: ["Água"],
		massa: 0.3, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 45,
			atq: 20,
			def: 20,
			atq_esp: 25,
			def_esp: 25,
			vel: 40,
		},
		descricao:
			"Quando está em perigo, seus olhos se umedecem e começam a brilhar. A luz do brilho atrai seus companheiros, e se unem contra seus inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixinho",
		obtencao:
			"Rotas 7, 8, 9, e outras; Melemele Sea; Kala'e Bay; Ladeira Brooklet; Akala Outskirts; Ula'ula Beach; e, durante batalhas, estar abaixo dos 25% de PS",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/75/746Wishiwashi_Solo_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wishiwashi_(Pok%C3%A9mon)",
	},
	{
		nome: "Wishiwashi (Forma Cardume)",
		numero: 746.2, // considerando a national dex
		tipo: ["Água"],
		massa: 78.6, // em kg
		altura: 8.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 45,
			atq: 140,
			def: 130,
			atq_esp: 140,
			def_esp: 135,
			vel: 30,
		},
		descricao:
			"Com a aparição deles, até Pokémon grandes fugirão. Quando se unem para usar seu Revólver d'Água, seu poder excede o de Hidro-Bomba.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixinho",
		obtencao:
			"Rotas 7, 8, 9, e outras; Melemele Sea; Kala'e Bay; Ladeira Brooklet; Akala Outskirts; Ula'ula Beach; e, durante batalhas, estar acima dos 25% de PS",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/cd/746Wishiwashi_School_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wishiwashi_(Pok%C3%A9mon)",
	},
	{
		nome: "Mareanie",
		numero: 747, // considerando a national dex
		tipo: ["Veneno", " Água"],
		massa: 8.0, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 50,
			atq: 53,
			def: 62,
			atq_esp: 43,
			def_esp: 52,
			vel: 45,
		},
		descricao:
			"Mergulha o espinho de veneno em sua cabeça em sua presa. Quando a presa enfraquece, dá o golpe final com seus dez tentáculos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Estrela Brutal",
		obtencao: "Rota 9; e Melemele Sea",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/97/747Mareanie_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mareanie_(Pok%C3%A9mon)",
	},
	{
		nome: "Toxapex",
		numero: 748, // considerando a national dex
		tipo: ["Veneno", " Água"],
		massa: 14.5, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 50,
			atq: 63,
			def: 152,
			atq_esp: 53,
			def_esp: 142,
			vel: 35,
		},
		descricao:
			"Aqueles atacados pelo veneno deste Pokémon sofrerão dor intensa por três dias e três noites. Após a recuperação, haverá alguns efeitos colaterais.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Estrela Brutal",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1b/748Toxapex_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Toxapex_(Pok%C3%A9mon)",
	},
	{
		nome: "Mudbray",
		numero: 749, // considerando a national dex
		tipo: ["Terra"],
		massa: 110.0, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 70,
			atq: 100,
			def: 70,
			atq_esp: 45,
			def_esp: 55,
			vel: 45,
		},
		descricao:
			"A lama grudada em seus cascos melhora sua aderência e seu poderoso passo de corrida.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Teimoso",
		obtencao: "Rotas 4, 6, e 12; Paniola Ranch; e Blush Mountain",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6e/749Mudbray_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mudbray_(Pok%C3%A9mon)",
	},
	{
		nome: "Mudsdale",
		numero: 750, // considerando a national dex
		tipo: ["Terra"],
		massa: 920.0, // em kg
		altura: 2.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 100,
			atq: 125,
			def: 100,
			atq_esp: 55,
			def_esp: 85,
			vel: 35,
		},
		descricao:
			"Cospe uma lama que oferece resistência tanto ao vento quanto à chuva, por isso as paredes das casas antigas eram frequentemente cobertas com ela.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cavalo de Tração",
		obtencao: "Rota 12; Blush Mountain; Poni Plains; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/65/750Mudsdale_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mudsdale_(Pok%C3%A9mon)",
	},
	{
		nome: "Dewpider",
		numero: 751, // considerando a national dex
		tipo: ["Água", " Inseto"],
		massa: 4.0, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 38,
			atq: 40,
			def: 52,
			atq_esp: 40,
			def_esp: 72,
			vel: 27,
		},
		descricao:
			"Quando se depara com inimigos ou presas em potencial, este Pokémon ataca-os com sua cabeça coberta de bolhas de água.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bolha de Água",
		obtencao: "Ladeira Brooklet",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/fd/751Dewpider_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dewpider_(Pok%C3%A9mon)",
	},
	{
		nome: "Araquanid",
		numero: 752, // considerando a national dex
		tipo: ["Água", " Inseto"],
		massa: 82.0, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 68,
			atq: 70,
			def: 92,
			atq_esp: 50,
			def_esp: 132,
			vel: 42,
		},
		descricao:
			"Cabeceia com a bolha de água em sua cabeça. Pequenos Pokémon são sugados para sua bolha, onde se afogam.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bolha de Água",
		obtencao: "Jardim de Malie; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/84/752Araquanid_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Araquanid_(Pok%C3%A9mon)",
	},
	{
		nome: "Fomantis",
		numero: 753, // considerando a national dex
		tipo: ["Planta"],
		massa: 1.5, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 40,
			atq: 55,
			def: 35,
			atq_esp: 50,
			def_esp: 35,
			vel: 35,
		},
		descricao:
			"Durante o dia, dorme e absorve luz. Quando a noite cai, anda por aí procurando um lugar mais seguro para dormir.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Foice de Folha",
		obtencao: "Rota 5; e Selva exuberante",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/bf/753Fomantis_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Fomantis_(Pok%C3%A9mon)",
	},
	{
		nome: "Lurantis",
		numero: 754, // considerando a national dex
		tipo: ["Planta"],
		massa: 18.5, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 70,
			atq: 105,
			def: 90,
			atq_esp: 80,
			def_esp: 90,
			vel: 45,
		},
		descricao:
			"É preciso muito esforço para manter suas cores vivas, mas alguns colecionadores gostam desse trabalho e o tratam como um hobby.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Foice Florescida",
		obtencao: "Recebido em Heahea Beach; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7b/754Lurantis_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lurantis_(Pok%C3%A9mon)",
	},
	{
		nome: "Morelull",
		numero: 755, // considerando a national dex
		tipo: ["Planta", " Fada"],
		massa: 1.5, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 40,
			atq: 35,
			def: 55,
			atq_esp: 65,
			def_esp: 75,
			vel: 15,
		},
		descricao:
			"Espalha esporos que piscam e brilham. Qualquer um que veja essas luzes cai em um sono profundo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Iluminador",
		obtencao: "Rota 11; Ladeira Brooklet; e Selva exuberante",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/75/755Morelull_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Morelull_(Pok%C3%A9mon)",
	},
	{
		nome: "Shiinotic",
		numero: 756, // considerando a national dex
		tipo: ["Planta", " Fada"],
		massa: 11.5, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 60,
			atq: 45,
			def: 80,
			atq_esp: 90,
			def_esp: 100,
			vel: 30,
		},
		descricao:
			"Florestas onde estes Pokémon vivem são traiçoeiras para entrar à noite. Pessoas confusas com suas luzes estranhas nunca mais conseguem encontrar o caminho de casa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Iluminador",
		obtencao: "Rota 11; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0f/756Shiinotic_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shiinotic_(Pok%C3%A9mon)",
	},
	{
		nome: "Salandit",
		numero: 757, // considerando a national dex
		tipo: ["Veneno", " Fogo"],
		massa: 4.8, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 48,
			atq: 44,
			def: 40,
			atq_esp: 71,
			def_esp: 40,
			vel: 77,
		},
		descricao:
			"Queima seu fluido corporal para criar um gás venenoso. Quando seus inimigos se tornam desorientados pelo gás inalado, este Pokémon os ataca.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lagarto Tóxico",
		obtencao: "Rota 8; Vulcão Wela; e caverna da Selva exuberante",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/1b/757Salandit_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Salandit_(Pok%C3%A9mon)",
	},
	{
		nome: "Salazzle",
		numero: 758, // considerando a national dex
		tipo: ["Veneno", " Fogo"],
		massa: 22.2, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 68,
			atq: 64,
			def: 60,
			atq_esp: 111,
			def_esp: 60,
			vel: 117,
		},
		descricao:
			"Cheia de feromônios, seu gás venenoso pode ser diluído para uso na produção de perfumes deliciosos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lagarto Tóxico",
		obtencao:
			"Vulcão Wela; Selva exuberante; recebido em Heahea Beach; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/44/758Salazzle_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Salazzle_(Pok%C3%A9mon)",
	},
	{
		nome: "Stufful",
		numero: 759, // considerando a national dex
		tipo: ["Normal", " Lutador"],
		massa: 6.8, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 70,
			atq: 75,
			def: 50,
			atq_esp: 45,
			def_esp: 50,
			vel: 50,
		},
		descricao:
			"Apesar de sua aparência adorável, quando fica bravo e se debate, seus braços e pernas poderiam derrubar um lutador profissional.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Agitado",
		obtencao: "Rota 8; e Akala Outskirts",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d9/759Stufful_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Stufful_(Pok%C3%A9mon)",
	},
	{
		nome: "Bewear",
		numero: 760, // considerando a national dex
		tipo: ["Normal", " Lutador"],
		massa: 135.0, // em kg
		altura: 2.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 120,
			atq: 125,
			def: 80,
			atq_esp: 55,
			def_esp: 60,
			vel: 60,
		},
		descricao:
			"Este imensamente perigoso Pokémon possui uma força física avassaladora. Seu habitat é geralmente proibido.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Braço Forte",
		obtencao: "Poni Gauntlet; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a6/760Bewear_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bewear_(Pok%C3%A9mon)",
	},
	{
		nome: "Bounsweet",
		numero: 761, // considerando a national dex
		tipo: ["Planta"],
		massa: 3.2, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 42,
			atq: 30,
			def: 38,
			atq_esp: 30,
			def_esp: 38,
			vel: 32,
		},
		descricao:
			"Um aroma delicioso jorra de seu corpo. São frequentemente engolidos inteiros por Pokémon pássaros atraídos por aquela delícia flutuante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fruta",
		obtencao: "Selva exuberante",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/be/761Bounsweet_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bounsweet_(Pok%C3%A9mon)",
	},
	{
		nome: "Steenee",
		numero: 762, // considerando a national dex
		tipo: ["Planta"],
		massa: 8.2, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 52,
			atq: 40,
			def: 48,
			atq_esp: 40,
			def_esp: 48,
			vel: 62,
		},
		descricao:
			"As sépalas em sua cabeça se desenvolveram para proteger seu corpo. São bem duras, então mesmo se bicadas por Pokémon pássaros, esse Pokémon fica totalmente bem.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fruta",
		obtencao: "Selva exuberante; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d4/762Steenee_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Steenee_(Pok%C3%A9mon)",
	},
	{
		nome: "Tsareena",
		numero: 763, // considerando a national dex
		tipo: ["Planta"],
		massa: 21.4, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 72,
			atq: 120,
			def: 98,
			atq_esp: 50,
			def_esp: 98,
			vel: 72,
		},
		descricao:
			"Sua pernas longas e marcantes não são apenas para exibição, mas para serem usadas para chutar com habilidade. Na vitória, se exibe chutando os derrotados, rindo ruidosamente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fruta",
		obtencao: "Por evolução",
		estagio: 3,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/ac/763Tsareena_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tsareena_(Pok%C3%A9mon)",
	},
	{
		nome: "Comfey",
		numero: 764, // considerando a national dex
		tipo: ["Fada"],
		massa: 0.3, // em kg
		altura: 0.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 51,
			atq: 52,
			def: 90,
			atq_esp: 82,
			def_esp: 110,
			vel: 100,
		},
		descricao:
			"Prende flores à sua videira altamente nutritiva. Isso revitaliza as flores, e elas exalam um cheiro aromático.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Colhedor de Flores",
		obtencao: "Selva exuberante; e Poké Pelago",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/6f/764Comfey_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Comfey_(Pok%C3%A9mon)",
	},
	{
		nome: "Oranguru",
		numero: 765, // considerando a national dex
		tipo: ["Normal", " Psíquico"],
		massa: 76.0, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 90,
			atq: 60,
			def: 80,
			atq_esp: 90,
			def_esp: 110,
			vel: 60,
		},
		descricao:
			"Conhecido por sua inteligência extrema, este Pokémon desprezará qualquer Treinador inexperientes, por isso é mais adequado para Treinadores veteranos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sábio",
		obtencao: "Selva exuberante",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4c/765Oranguru_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Oranguru_(Pok%C3%A9mon)",
	},
	{
		nome: "Passimian",
		numero: 766, // considerando a national dex
		tipo: ["Lutador"],
		massa: 82.8, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 100,
			atq: 120,
			def: 90,
			atq_esp: 40,
			def_esp: 60,
			vel: 80,
		},
		descricao:
			"Formam grupos de quase vinte indivíduos. O vínculo mútuo deles é notável, nunca decepcionam um camarada.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Trabalho em Equipe",
		obtencao: "Selva exuberante",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/b7/766Passimian_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Passimian_(Pok%C3%A9mon)",
	},
	{
		nome: "Wimpod",
		numero: 767, // considerando a national dex
		tipo: ["Inseto", " Água"],
		massa: 12.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 25,
			atq: 35,
			def: 40,
			atq_esp: 20,
			def_esp: 30,
			vel: 80,
		},
		descricao:
			"Este Pokémon é um covarde. Enquanto dispara em fuga desesperadamente, o bater de suas muitas pernas deixa um rastro limpo e brilhante em seu rastro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escapada",
		obtencao:
			"Rota 8; Prado da Ilha Poni; Dividing Peak Tunnel; Poni Breaker Coast",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/78/767Wimpod_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wimpod_(Pok%C3%A9mon)",
	},
	{
		nome: "Golisopod",
		numero: 768, // considerando a national dex
		tipo: ["Inseto", " Água"],
		massa: 108.0, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 75,
			atq: 125,
			def: 140,
			atq_esp: 60,
			def_esp: 90,
			vel: 40,
		},
		descricao:
			"Luta habilmente com seus seis braços, mas passa a maior parte de seu tempo meditando pacificamente em cavernas nas profundezas do mar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escama Dura",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e7/768Golisopod_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Golisopod_(Pok%C3%A9mon)",
	},
	{
		nome: "Sandygast",
		numero: 769, // considerando a national dex
		tipo: ["Fantasma", " Terra"],
		massa: 70.0, // em kg
		altura: 0.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 55,
			atq: 55,
			def: 80,
			atq_esp: 70,
			def_esp: 45,
			vel: 15,
		},
		descricao:
			"Nascido de um monte de areia construído por uma criança, este Pokémon personifica os rancores dos que partiram.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Monte de Areia",
		obtencao: "Rota 15; e Hano Beach",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3d/769Sandygast_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sandygast_(Pok%C3%A9mon)",
	},
	{
		nome: "Palossand",
		numero: 770, // considerando a national dex
		tipo: ["Fantasma", " Terra"],
		massa: 250.0, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 85,
			atq: 75,
			def: 110,
			atq_esp: 100,
			def_esp: 75,
			vel: 35,
		},
		descricao:
			"Enterrado sob o castelo estão massas de ossos secos daqueles cuja vitalidade foi drenada.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Castelo de Areia",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/38/770Palossand_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Palossand_(Pok%C3%A9mon)",
	},
	{
		nome: "Pyukumuku",
		numero: 771, // considerando a national dex
		tipo: ["Água"],
		massa: 1.2, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 55,
			atq: 60,
			def: 130,
			atq_esp: 30,
			def_esp: 130,
			vel: 5,
		},
		descricao:
			"Vive em mares rasos, como áreas próximas a uma praia. Pode ejetar seus órgãos internos, que usa para engolir sua presa ou lutar contra inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pepino-do-mar",
		obtencao: "Rota 7; Hano Beach; e Poké Pelago",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/98/771Pyukumuku_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pyukumuku_(Pok%C3%A9mon)",
	},
	{
		nome: "Type: Null",
		numero: 772, // considerando a national dex
		tipo: ["Normal"],
		massa: 120.5, // em kg
		altura: 1.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 95,
			atq: 95,
			def: 95,
			atq_esp: 95,
			def_esp: 95,
			vel: 59,
		},
		descricao:
			"Devido ao perigo que este Pokémon sintético pode causar descontrole, usa uma máscara de controle para restringir seu poder.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sintético",
		obtencao: "Recebido em Paraíso Aether",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/b/be/772Type_Null_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Type:_Null_(Pok%C3%A9mon)",
	},
	{
		nome: "Silvally",
		numero: 773, // considerando a national dex
		tipo: ["Normal"],
		massa: 100.5, // em kg
		altura: 2.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 95,
			atq: 95,
			def: 95,
			atq_esp: 95,
			def_esp: 95,
			vel: 95,
		},
		descricao:
			"Sua confiança em seu parceiro é o que o desperta. Este Pokémon é capaz de alterar sua tipagem, uma flexibilidade que é bem exibida em batalha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sintético",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a7/773Silvally_Normal_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Silvally_(Pok%C3%A9mon)",
	},
	{
		nome: "Minior (Forma Meteoro)",
		numero: 774.1, // considerando a national dex
		tipo: ["Rocha", " Voador"],
		massa: 40.0, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 60,
			atq: 60,
			def: 100,
			atq_esp: 60,
			def_esp: 100,
			vel: 60,
		},
		descricao:
			"Originalmente criado na camada de ozônio, cai no chão quando a concha que envolve seu corpo fica muito pesada.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Meteoro",
		obtencao: "Mount Hokulani",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c5/774Minior_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Minior_(Pok%C3%A9mon)",
	},
	{
		nome: "Minior (Forma Núcleo)",
		numero: 774.2, // considerando a national dex
		tipo: ["Rocha", " Voador"],
		massa: 0.3, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 60,
			atq: 100,
			def: 60,
			atq_esp: 100,
			def_esp: 60,
			vel: 120,
		},
		descricao:
			"Come poeira na atmosfera. A composição da poeira determina a cor de seu núcleo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Meteoro",
		obtencao: "Mount Hokulani e, durante a batalha, estar abaixo dos 50% de PS",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/81/774Minior_Blue_Dream.png",
			"https://archives.bulbagarden.net/media/upload/d/d8/774Minior_Green_Dream.png",
			"https://archives.bulbagarden.net/media/upload/9/91/774Minior_Indigo_Dream.png",
			"https://archives.bulbagarden.net/media/upload/b/b3/774Minior_Orange_Dream.png",
			"https://archives.bulbagarden.net/media/upload/f/ff/774Minior_Red_Dream.png",
			"https://archives.bulbagarden.net/media/upload/3/33/774Minior_Violet_Dream.png",
			"https://archives.bulbagarden.net/media/upload/d/dd/774Minior_Yellow_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Minior_(Pok%C3%A9mon)",
	},
	{
		nome: "Komala",
		numero: 775, // considerando a national dex
		tipo: ["Normal"],
		massa: 19.9, // em kg
		altura: 0.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 65,
			atq: 115,
			def: 65,
			atq_esp: 75,
			def_esp: 95,
			vel: 65,
		},
		descricao:
			"Nasce dormindo e morre dormindo. Todos seus movimentos, aparentemente, não são mais do que resultados dos movimentos em seus sonhos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cochilando",
		obtencao: "Rota 11",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/14/775Komala_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Komala_(Pok%C3%A9mon)",
	},
	{
		nome: "Turtonator",
		numero: 776, // considerando a national dex
		tipo: ["Fogo", " Dragão"],
		massa: 212.0, // em kg
		altura: 2.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 60,
			atq: 78,
			def: 135,
			atq_esp: 91,
			def_esp: 85,
			vel: 36,
		},
		descricao:
			"O casco em suas costas é quimicamente instável e explode violentamente se golpeado. O buraco em seu estomago é seu ponto fraco.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Tartaruga Explosiva",
		obtencao: "Blush Mountain",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/99/776Turtonator_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Turtonator_(Pok%C3%A9mon)",
	},
	{
		nome: "Togedemaru",
		numero: 777, // considerando a national dex
		tipo: ["Elétrico", " Metal"],
		massa: 3.3, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 65,
			atq: 98,
			def: 63,
			atq_esp: 40,
			def_esp: 73,
			vel: 96,
		},
		descricao:
			"Os longos pelos em suas costas agem como para-raios. Os raios que atrai são armazenados como energia em seu saco elétrico.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fofinho",
		obtencao: "Blush Mountain",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/06/777Togedemaru_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Togedemaru_(Pok%C3%A9mon)",
	},
	{
		nome: "Mimikyu (Forma Disfarçada)",
		numero: 778.1, // considerando a national dex
		tipo: ["Fantasma", " Fada"],
		massa: 0.7, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 55,
			atq: 90,
			def: 80,
			atq_esp: 50,
			def_esp: 105,
			vel: 96,
		},
		descricao:
			"Sua verdadeira aparência é desconhecida. Um estudioso que viu o que havia sob o trapo ficou tomado de terror e morreu devido ao choque.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Disfarce",
		obtencao: "Mercado Megabarato abandonado",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/2c/778Mimikyu_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mimikyu_(Pok%C3%A9mon)",
	},
	{
		nome: "Mimikyu (Forma Descoberta)",
		numero: 778.2, // considerando a national dex
		tipo: ["Fantasma", " Fada"],
		massa: 0.7, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 55,
			atq: 90,
			def: 80,
			atq_esp: 50,
			def_esp: 105,
			vel: 96,
		},
		descricao:
			"Depois de todo o esforço de se disfarçar, seu pescoço foi quebrado. O que quer que esteja dentro provavelmente está ileso, mas ainda está se sentindo triste.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Disfarce",
		obtencao:
			"Mercado Megabarato abandonado e, durante a batalha, receber dano",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3a/778Mimikyu_Busted_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mimikyu_(Pok%C3%A9mon)",
	},
	{
		nome: "Bruxish",
		numero: 779, // considerando a national dex
		tipo: ["Água", " Psíquico"],
		massa: 19.0, // em kg
		altura: 0.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 68,
			atq: 105,
			def: 70,
			atq_esp: 70,
			def_esp: 70,
			vel: 92,
		},
		descricao:
			"Quando libera seu pode psíquico da protuberância em sua cabeça, o som áspero de dentes rangendo ecoa pela área.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ranger Dentes",
		obtencao: "Rotas 13, 14, e 15; e Secluded Shore",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c4/779Bruxish_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bruxish_(Pok%C3%A9mon)",
	},
	{
		nome: "Drampa",
		numero: 780, // considerando a national dex
		tipo: ["Normal", " Dragão"],
		massa: 185.0, // em kg
		altura: 3.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 78,
			atq: 60,
			def: 85,
			atq_esp: 135,
			def_esp: 91,
			vel: 36,
		},
		descricao:
			"Possui uma personalidade compassiva, mas caso seja enfurecido, destrói completamente seus arredores com sua baforada intensa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Plácido",
		obtencao: "Mount Lanakila",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/5/59/780Drampa_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Drampa_(Pok%C3%A9mon)",
	},
	{
		nome: "Dhelmise",
		numero: 781, // considerando a national dex
		tipo: ["Fantasma", " Planta"],
		massa: 210.0, // em kg
		altura: 3.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 70,
			atq: 131,
			def: 100,
			atq_esp: 86,
			def_esp: 90,
			vel: 40,
		},
		descricao:
			"A alma das algas à deriva nas ondas renasceu como este Pokémon. Ela se mantém viva com novas infusões de detritos do fundo do mar e algas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Alga Sinistra",
		obtencao: "Seafolk Village",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/1/14/781Dhelmise_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dhelmise_(Pok%C3%A9mon)",
	},
	{
		nome: "Jangmo-o",
		numero: 782, // considerando a national dex
		tipo: ["Dragão"],
		massa: 29.7, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 45,
			atq: 55,
			def: 65,
			atq_esp: 45,
			def_esp: 45,
			vel: 45,
		},
		descricao:
			"Expressa seus sentimentos estalando suas escamas. Sons metálicos ecoam pelas altas montanhas onde este Pokémon vive.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escamoso",
		obtencao: "Grande Cânion de Poni",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/03/782Jangmo-o_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Jangmo-o_(Pok%C3%A9mon)",
	},
	{
		nome: "Hakamo-o",
		numero: 783, // considerando a national dex
		tipo: ["Dragão", " Lutador"],
		massa: 47.0, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 55,
			atq: 75,
			def: 90,
			atq_esp: 65,
			def_esp: 70,
			vel: 65,
		},
		descricao:
			"Salta sobre sua presa com um grito corajoso. Seus socos escamosos destroem seus oponentes em pedaços.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escamoso",
		obtencao: "Grande Cânion de Poni; e por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d4/783Hakamo-o_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hakamo-o_(Pok%C3%A9mon)",
	},
	{
		nome: "Kommo-o",
		numero: 784, // considerando a national dex
		tipo: ["Dragão", " Lutador"],
		massa: 78.2, // em kg
		altura: 1.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 75,
			atq: 110,
			def: 125,
			atq_esp: 100,
			def_esp: 105,
			vel: 85,
		},
		descricao:
			"Quando avista inimigos, ameaça-os balançando as escamas em sua cauda. Oponentes fracos irão rachar e fugir em pânico.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escamoso",
		obtencao: "Grande Cânion de Poni; e por evolução",
		estagio: 3,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/8c/784Kommo-o_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kommo-o_(Pok%C3%A9mon)",
	},
	{
		nome: "Tapu Koko",
		numero: 785, // considerando a national dex
		tipo: ["Elétrico", " Fada"],
		massa: 20.5, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 70,
			atq: 115,
			def: 85,
			atq_esp: 95,
			def_esp: 75,
			vel: 130,
		},
		descricao:
			"Esta deidade guardiã de Melemele está cheia de curiosidade. Invoca nuvens de trovão e armazena seus raios dentro de seu corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espírito Nativo",
		obtencao: "Ruínas do Conflito",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e1/785Tapu_Koko_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tapu_Koko_(Pok%C3%A9mon)",
	},
	{
		nome: "Tapu Lele",
		numero: 786, // considerando a national dex
		tipo: ["Psíquico", " Fada"],
		massa: 18.6, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 70,
			atq: 85,
			def: 75,
			atq_esp: 130,
			def_esp: 115,
			vel: 95,
		},
		descricao:
			"Esta deidade guardiã de Akala é cruelmente inocente. O aroma fragrante das flores é a fonte de sua energia.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espírito Nativo",
		obtencao: "Ruins of Life",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7d/786Tapu_Lele_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tapu_Lele_(Pok%C3%A9mon)",
	},
	{
		nome: "Tapu Bulu",
		numero: 787, // considerando a national dex
		tipo: ["Planta", " Fada"],
		massa: 45.5, // em kg
		altura: 1.9, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 70,
			atq: 130,
			def: 115,
			atq_esp: 85,
			def_esp: 95,
			vel: 75,
		},
		descricao:
			"A deidade guardiã de Ula'ula é um Pokémon preguiçoso. Comanda plantas para imobilizar seu adversários e então lhes desfere um golpe violento com seus chifres.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espírito Nativo",
		obtencao: "Ruínas da Abundância",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ea/787Tapu_Bulu_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tapu_Bulu_(Pok%C3%A9mon)",
	},
	{
		nome: "Tapu Fini",
		numero: 788, // considerando a national dex
		tipo: ["Água", " Fada"],
		massa: 21.2, // em kg
		altura: 1.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 70,
			atq: 75,
			def: 115,
			atq_esp: 95,
			def_esp: 130,
			vel: 85,
		},
		descricao:
			"A deidade guardiã de Poni, consegue controlar água. Pessoas dize que consegue criar água pura que limpará qualquer impureza.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espírito Nativo",
		obtencao: "Ruínas da Esperança",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d1/788Tapu_Fini_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tapu_Fini_(Pok%C3%A9mon)",
	},
	{
		nome: "Cosmog",
		numero: 789, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 0.1, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 43,
			atq: 29,
			def: 31,
			atq_esp: 29,
			def_esp: 31,
			vel: 37,
		},
		descricao:
			"Seu corpo é gasoso e frágil. Cresce devagar enquanto coleta poeira da atmosfera.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Nebulosa",
		obtencao: "Lake of the Sunne, ou Lake of the Moone",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/67/789Cosmog_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cosmog_(Pok%C3%A9mon)",
	},
	{
		nome: "Cosmoem",
		numero: 790, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 999.9, // em kg
		altura: 0.1, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 43,
			atq: 29,
			def: 131,
			atq_esp: 29,
			def_esp: 131,
			vel: 37,
		},
		descricao:
			"Imóvel como se estivesse morto, seu corpo é levemente morno ao toque. No passado distante, era chamado de casulo das estrelas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Protoestrela",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/67/790Cosmoem_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cosmoem_(Pok%C3%A9mon)",
	},
	{
		nome: "Solgaleo",
		numero: 791, // considerando a national dex
		tipo: ["Psíquico", " Metal"],
		massa: 230.0, // em kg
		altura: 3.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 137,
			atq: 137,
			def: 107,
			atq_esp: 113,
			def_esp: 89,
			vel: 97,
		},
		descricao:
			"É dito que vive em outro mundo. A luz intensa que irradia da superfície de seu corpo pode tornar a mais escura das noites iluminar-se como o meio-dia.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Solar",
		obtencao: "Altar Solar, ou Trilha Mahalo; e por evolução",
		estagio: 3,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/92/791Solgaleo_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Solgaleo_(Pok%C3%A9mon)",
	},
	{
		nome: "Lunala",
		numero: 792, // considerando a national dex
		tipo: ["Psíquico", " Fantasma"],
		massa: 120.0, // em kg
		altura: 4.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 137,
			atq: 113,
			def: 89,
			atq_esp: 137,
			def_esp: 107,
			vel: 97,
		},
		descricao:
			"É dito que vive em outro mundo, este Pokémon devora a luz, cobrindo o brilho do dia com o véu escuro e sem luar da noite.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lunar",
		obtencao: "Altar Lunar, ou Trilha Mahalo; e por evolução",
		estagio: 3,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0a/792Lunala_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lunala_(Pok%C3%A9mon)",
	},
	{
		nome: "Nihilego",
		numero: 793, // considerando a national dex
		tipo: ["Rocha", " Veneno"],
		massa: 55.5, // em kg
		altura: 1.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 109,
			atq: 53,
			def: 47,
			atq_esp: 127,
			def_esp: 131,
			vel: 103,
		},
		descricao:
			"Uma de várias Ultracriaturas. Pessoas na rua relatam observar aqueles que estão infestados por este Pokémon repentinamente se tornarem violentos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Parasita",
		obtencao: "Diglett's Tunnel, ou Vulcão Wela; e Ultra Deep Sea",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/3b/793Nihilego_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nihilego_(Pok%C3%A9mon)",
	},
	{
		nome: "Buzzwole",
		numero: 794, // considerando a national dex
		tipo: ["Inseto", " Lutador"],
		massa: 333.6, // em kg
		altura: 2.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 107,
			atq: 139,
			def: 139,
			atq_esp: 53,
			def_esp: 53,
			vel: 79,
		},
		descricao:
			"Esta Ultracriatura apareceu de outro mundo. Exibe seu corpo, mas não está claro se essa exibição é uma ostentação ou uma ameaça.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Inchado",
		obtencao: "Jardim Melele; e Ultra Jungle",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a5/794Buzzwole_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Buzzwole_(Pok%C3%A9mon)",
	},
	{
		nome: "Pheromosa",
		numero: 795, // considerando a national dex
		tipo: ["Inseto", " Lutador"],
		massa: 25.0, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 71,
			atq: 137,
			def: 37,
			atq_esp: 137,
			def_esp: 37,
			vel: 151,
		},
		descricao:
			"Uma das perigosas Ultracriaturas, tem sido avistada correndo pela região em velocidades assustadoras.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Elegância",
		obtencao: "Verdant Cavern; e Ultra Desert",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a8/795Pheromosa_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pheromosa_(Pok%C3%A9mon)",
	},
	{
		nome: "Xurkitree",
		numero: 796, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 100.0, // em kg
		altura: 3.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 83,
			atq: 89,
			def: 71,
			atq_esp: 173,
			def_esp: 71,
			vel: 83,
		},
		descricao:
			"Uma das misteriosas formas de vida conhecidas como Ultracriaturas. De acordo com testemunhas, choques elétricos surpreendentes emanam de todo o seu corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cintilante",
		obtencao: "Selva exuberante, ou Memorial Hill; e Ultra Plant",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/43/796Xurkitree_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Xurkitree_(Pok%C3%A9mon)",
	},
	{
		nome: "Celesteela",
		numero: 797, // considerando a national dex
		tipo: ["Metal", " Voador"],
		massa: 999.9, // em kg
		altura: 9.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 97,
			atq: 101,
			def: 103,
			atq_esp: 107,
			def_esp: 101,
			vel: 61,
		},
		descricao:
			"Um tipo de Ultracriatura. Testemunhas a viram queimar uma floresta expelindo gás de seus dois braços.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lançamento",
		obtencao: "Deserto de Haina, ou Jardim de Malie; e Ultra Crater",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a8/797Celesteela_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Celesteela_(Pok%C3%A9mon)",
	},
	{
		nome: "Kartana",
		numero: 798, // considerando a national dex
		tipo: ["Planta", " Metal"],
		massa: 0.1, // em kg
		altura: 0.3, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 59,
			atq: 181,
			def: 131,
			atq_esp: 59,
			def_esp: 31,
			vel: 109,
		},
		descricao:
			"Uma das formas de vida conhecidas como Ultracriatura, foi observada cortando uma gigantesca torre de aço com um golpe de sua lâmina.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espada Sacada",
		obtencao: "Rota 17, ou Jardim de Malie; e Ultra Forest",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/c5/798Kartana_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kartana_(Pok%C3%A9mon)",
	},
	{
		nome: "Guzzlord",
		numero: 799, // considerando a national dex
		tipo: ["Noturno", " Dragão"],
		massa: 888.0, // em kg
		altura: 5.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 223,
			atq: 101,
			def: 53,
			atq_esp: 97,
			def_esp: 53,
			vel: 43,
		},
		descricao:
			"Engoliu montanhas e prédios inteiros, segundo relatos. É uma das Ultracriaturas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Papa-porcaria",
		obtencao: "Resolution Cave; e Ultra Ruin",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/0/0b/799Guzzlord_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Guzzlord_(Pok%C3%A9mon)",
	},
	{
		nome: "Necrozma",
		numero: 800.1, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 230.0, // em kg
		altura: 2.4, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 97,
			atq: 107,
			def: 101,
			atq_esp: 127,
			def_esp: 89,
			vel: 79,
		},
		descricao:
			"Lembrando as Ultracriaturas, acredita-se que essa forma de vida, aparentemente adormecida no subsolo, tenha vindo de outro mundo em tempos antigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Prisma",
		obtencao: "Colina Dez Quilates; e Mount Lanakila",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ef/800Necrozma_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Necrozma_(Pok%C3%A9mon)",
	},
	{
		nome: "Necrozma Juba Crepúsculo",
		numero: 800.2, // considerando a national dex
		tipo: ["Psíquico", " Metal"],
		massa: 460.0, // em kg
		altura: 3.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 97,
			atq: 157,
			def: 127,
			atq_esp: 113,
			def_esp: 109,
			vel: 77,
		},
		descricao:
			"Esta é a sua forma enquanto devora a luz de Solgaleo. Ataca os inimigos e então os corta com as garras em seus quatro membros e costas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Prisma",
		obtencao:
			"Colina Dez Quilates; Mount Lanakila; e fundir com Solgaleo usando N-Solarizer",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/db/800Necrozma_Dusk_Mane_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Necrozma_(Pok%C3%A9mon)",
	},
	{
		nome: "Necrozma Asas Alvorada",
		numero: 800.3, // considerando a national dex
		tipo: ["Psíquico", " Fantasma"],
		massa: 350.0, // em kg
		altura: 4.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 97,
			atq: 113,
			def: 109,
			atq_esp: 157,
			def_esp: 127,
			vel: 77,
		},
		descricao:
			"Esta é sua forma enquanto devora a luz de Lunala. Agarra os inimigos com suas garras gigantes e os despedaça com força bruta.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Prisma",
		obtencao:
			"Colina Dez Quilates; Mount Lanakila; e fundir com Lunala usando N-Lunarizer",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/88/800Necrozma_Dawn_Wings_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Necrozma_(Pok%C3%A9mon)",
	},
	{
		nome: "Ultra Necrozma",
		numero: 800.4, // considerando a national dex
		tipo: ["Psíquico", " Dragão"],
		massa: 230.0, // em kg
		altura: 7.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 97,
			atq: 167,
			def: 97,
			atq_esp: 167,
			def_esp: 97,
			vel: 129,
		},
		descricao:
			"Esta é sua forma quando obsorve energia de luz avassaladora. Dispara raios laser de todo o corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Prisma",
		obtencao:
			"Colina Dez Quilates; Mount Lanakila; e quando Necrozma Juba Crepúsculo ou Necrozma Asas Alvorada está segurando Ultranecrozium Z e usa Ultraexplosão",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: true,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/ee/800Necrozma_Ultra_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Necrozma_(Pok%C3%A9mon)",
	},
	{
		nome: "Magearna",
		numero: 801, // considerando a national dex
		tipo: ["Metal", " Fada"],
		massa: 80.5, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 80,
			atq: 95,
			def: 115,
			atq_esp: 130,
			def_esp: 115,
			vel: 65,
		},
		descricao:
			"Este Pokémon artificial, construído há mais de 500 anos, consegue entender fala humana bas não consegue falar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Artificial",
		obtencao: "Hau'oli City",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/4/4e/801Magearna_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Magearna_(Pok%C3%A9mon)",
	},
	{
		nome: "Marshadow",
		numero: 802, // considerando a national dex
		tipo: ["Lutador", " Fantasma"],
		massa: 22.2, // em kg
		altura: 0.7, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 90,
			atq: 125,
			def: 80,
			atq_esp: 90,
			def_esp: 90,
			vel: 125,
		},
		descricao:
			"Capaz de se esconder nas sombras, nunca aparece diante humanos, portanto sua própria existência era considerada um mito.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Morador das Sombras",
		obtencao: "Por evento",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/d/d9/802Marshadow_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Marshadow_(Pok%C3%A9mon)",
	},
	{
		nome: "Poipole",
		numero: 803, // considerando a national dex
		tipo: ["Veneno"],
		massa: 1.8, // em kg
		altura: 0.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 67,
			atq: 73,
			def: 67,
			atq_esp: 73,
			def_esp: 67,
			vel: 73,
		},
		descricao:
			"Esta Ultracriatura é querida o suficiente para ser escolhida como primeira parceira em seu próprio mundo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espinho Venenoso",
		obtencao: "Recebido em Megalo Tower ou Ultra Megalopolis",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/6/60/803Poipole_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Poipole_(Pok%C3%A9mon)",
	},
	{
		nome: "Naganadel",
		numero: 804, // considerando a national dex
		tipo: ["Veneno", " Dragão"],
		massa: 150.0, // em kg
		altura: 3.6, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 73,
			atq: 73,
			def: 73,
			atq_esp: 127,
			def_esp: 73,
			vel: 121,
		},
		descricao:
			"Armazena centenas de litros de líquido venenoso dentro de seu corpo. É um dos organismos conhecidos como Ultracriaturas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espinho Venenoso",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/82/804Naganadel_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Naganadel_(Pok%C3%A9mon)",
	},
	{
		nome: "Stakataka",
		numero: 805, // considerando a national dex
		tipo: ["Rocha", " Metal"],
		massa: 820.0, // em kg
		altura: 5.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 61,
			atq: 131,
			def: 211,
			atq_esp: 53,
			def_esp: 101,
			vel: 13,
		},
		descricao:
			"Quando paredes de pedra começaram a se mover e atacar, a verdadeira identidade do bruto era essa misteriosa forma de vida, que lembra uma Ultracriatura.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Muralha",
		obtencao: "Poni Grove",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/97/805Stakataka_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Stakataka_(Pok%C3%A9mon)",
	},
	{
		nome: "Blacephalon",
		numero: 806, // considerando a national dex
		tipo: ["Fogo", " Fantasma"],
		massa: 13.0, // em kg
		altura: 1.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 53,
			atq: 127,
			def: 53,
			atq_esp: 151,
			def_esp: 79,
			vel: 107,
		},
		descricao:
			"Desliza em direção às pessoas. Então, sem aviso, dispara a explosão de sua própria cabeça. Aparentemente, é um tipo de Ultracriatura.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fogos de Artifício",
		obtencao: "Poni Grove",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/e/e8/806Blacephalon_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Blacephalon_(Pok%C3%A9mon)",
	},
	{
		nome: "Zeraora",
		numero: 807, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 44.5, // em kg
		altura: 1.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 88,
			atq: 112,
			def: 75,
			atq_esp: 102,
			def_esp: 80,
			vel: 143,
		},
		descricao:
			"Este Pokémon se aproxima de seus inimigos na velocidade da luz, depois os despedaça membro a membro com suas garras afiadas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Trovoada",
		obtencao: "Por evento",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: true,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/2/25/807Zeraora_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zeraora_(Pok%C3%A9mon)",
	},
	{
		nome: "Meltan",
		numero: 808, // considerando a national dex
		tipo: ["Metal"],
		massa: 8.0, // em kg
		altura: 0.2, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 46,
			atq: 65,
			def: 65,
			atq_esp: 55,
			def_esp: 35,
			vel: 34,
		},
		descricao:
			"Derrete partículas de ferro e outros metais que encontra no subsolo, para que possa absorvê-los em seu corpo de aço fundido.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Porca",
		obtencao: "Capturado em Pokémon GO",
		estagio: 1,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/8/8f/808Meltan_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Meltan_(Pok%C3%A9mon)",
	},
	{
		nome: "Melmetal",
		numero: 809, // considerando a national dex
		tipo: ["Metal"],
		massa: 800.0, // em kg
		altura: 2.5, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 135,
			atq: 143,
			def: 143,
			atq_esp: 80,
			def_esp: 65,
			vel: 34,
		},
		descricao:
			"Reverenciado há muito tempo por sua capacidade de criar ferro do nada, por alguma razão voltou à vida depois de 3'000 anos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Porca",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 7, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/f/f7/809Melmetal_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Melmetal_(Pok%C3%A9mon)",
	},
	{
		nome: "Perrserker",
		numero: 863, // considerando a national dex
		tipo: ["Metal"],
		massa: 28.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 70,
			atq: 110,
			def: 100,
			atq_esp: 50,
			def_esp: 60,
			vel: 50,
		},
		descricao:
			"O que aparenta ser um capacete de ferro é na verdade seu pelo endurecido. Este Pokémon vive pela adrenalina da batalha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Viking",
		obtencao: "Rotas 7, e 9; Giant's Mirror; Lake of Outrage; e por evolução",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/c/cc/863Perrserker_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Perrserker_(Pok%C3%A9mon)",
	},
	{
		nome: "Cursola",
		numero: 864, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 0.4, // em kg
		altura: 1.0, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 60,
			atq: 95,
			def: 50,
			atq_esp: 145,
			def_esp: 130,
			vel: 30,
		},
		descricao:
			"Tenha cuidado com o corpo ectoplasmático que cerca a alma deste Pokémon. Você ficará duro como pedra se tocá-lo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coral",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/7/7e/864Cursola_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cursola_(Pok%C3%A9mon)",
	},
	{
		nome: "Sirfetch'd",
		numero: 865, // considerando a national dex
		tipo: ["Lutador"],
		massa: 117.0, // em kg
		altura: 0.8, // em metros
		pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
		estatistica: {
			ps: 62,
			atq: 135,
			def: 95,
			atq_esp: 68,
			def_esp: 82,
			vel: 65,
		},
		descricao:
			"Após desviar de ataques com seu escudo de folhas duras, contra-ataca com seu talo afiado de alho-poró. O talo de alho-poró é tanto arma quanto alimento.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pato Selvagem",
		obtencao: "Por evolução",
		estagio: 2,
		geracao: 8, // considerando em qual geração foi introduzido
		variante: false,
		lendario: false,
		sprite: [
			"https://archives.bulbagarden.net/media/upload/a/a4/865Sirfetch%27d_Dream.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sirfetch%27d_(Pok%C3%A9mon)",
	},
];

const nomesDisponiveis = [...new Set(pkmnDisponiveis.map((x) => x.nome))];

/* geração de Kanto; 1-151 */
const primeiraGeracao = pkmnDisponiveis.filter((x) => x.geracao === 1);
const numerosPrimeira = primeiraGeracao.map((X) => X.numero);
const nomesPrimeira = [...new Set(primeiraGeracao.map((x) => x.nome))];

/* geração de Johto; 152-251; 100 novos */
const segundaGeracao = pkmnDisponiveis.filter((x) => x.geracao === 2);
const numerosSegunda = segundaGeracao.map((X) => X.numero);
const nomesSegunda = [...new Set(segundaGeracao.map((x) => x.nome))];

/* geração de Hoenn; 252-386; 135 novos */
const terceiraGeracao = pkmnDisponiveis.filter((x) => x.geracao === 3);
const numerosTerceira = terceiraGeracao.map((x) => x.numero);
const nomesTerceira = [...new Set(terceiraGeracao.map((x) => x.nome))];

/* geração de Sinnoh; 387-493; 107 novos */
const quartaGeracao = pkmnDisponiveis.filter((x) => x.geracao === 4);
const numerosQuarta = quartaGeracao.map((x) => x.numero);
const nomesQuarta = [...new Set(quartaGeracao.map((x) => x.nome))];

/* geração de Unova; 494-649; 156 novos */
const quintaGeracao = pkmnDisponiveis.filter((x) => x.geracao === 5);
const numerosQuinta = quintaGeracao.map((x) => x.numero);
const nomesQuinta = [...new Set(quintaGeracao.map((x) => x.nome))];

/* geração de Kalos; 650-721; 72 novos */
const sextaGeracao = pkmnDisponiveis.filter((x) => x.geracao === 6);
const numerosSexta = sextaGeracao.map((x) => x.numero);
const nomesSexta = [...new Set(sextaGeracao.map((x) => x.nome))];

/* geração de Alola; 722-809; 88 novos */
const setimaGeracao = pkmnDisponiveis.filter((x) => x.geracao === 7);
const numerosSetima = setimaGeracao.map((x) => x.numero);
const nomesSetima = [...new Set(setimaGeracao.map((x) => x.nome))];

/* geração de Galar e Hisui; 810-905; 96 novos */
const oitavaGeracao = pkmnDisponiveis.filter((x) => x.geracao === 8);
const numerosOitava = oitavaGeracao.map((x) => x.numero);
const nomesOitava = [...new Set(oitavaGeracao.map((x) => x.nome))];

/* geração de Paldea e Kikatami; 906-1025; 120 novos */
const nonaGeracao = pkmnDisponiveis.filter((x) => x.geracao === 9);
const numerosNona = nonaGeracao.map((x) => x.numero);
const nomesNona = [...new Set(nonaGeracao.map((x) => x.nome))];

console.info(
	"# GERAÇÕES #",
	`\n##Primeira## ${
		[...new Set(numerosPrimeira.map((x) => x.toFixed()))].length
	}/151 | ${(
		([...new Set(numerosPrimeira.map((x) => x.toFixed()))].length / 151) *
		100
	).toFixed(2)}%;`,
	`\n##Segunda## ${
		[...new Set(numerosSegunda.map((x) => x.toFixed()))].length
	}/100 | ${(
		([...new Set(numerosSegunda.map((x) => x.toFixed()))].length / 100) *
		100
	).toFixed(2)}%;`,
	`\n##Terceira## ${
		[...new Set(numerosTerceira.map((x) => x.toFixed()))].length
	}/135 | ${(
		([...new Set(numerosTerceira.map((x) => x.toFixed()))].length / 135) *
		100
	).toFixed(2)}%;`,
	`\n##Quarta## ${
		[...new Set(numerosQuarta.map((x) => x.toFixed()))].length
	}/107 | ${(
		([...new Set(numerosQuarta.map((x) => x.toFixed()))].length / 107) *
		100
	).toFixed(2)}%;`,
	`\n##Quinta## ${
		[...new Set(numerosQuinta.map((x) => x.toFixed()))].length
	}/156 | ${(
		([...new Set(numerosQuinta.map((x) => x.toFixed()))].length / 156) *
		100
	).toFixed(2)}%;`,
	`\n##Sexta## ${
		[...new Set(numerosSexta.map((x) => x.toFixed()))].length
	}/72 | ${(
		([...new Set(numerosSexta.map((x) => x.toFixed()))].length / 72) *
		100
	).toFixed(2)}%;`,
	`\n##Sétima## ${
		[...new Set(numerosSetima.map((x) => x.toFixed()))].length
	}/88 | ${(
		([...new Set(numerosSetima.map((x) => x.toFixed()))].length / 88) *
		100
	).toFixed(2)}%;`,
	`\n##Oitava## ${
		[...new Set(numerosOitava.map((x) => x.toFixed()))].length
	}/96 | ${(
		([...new Set(numerosOitava.map((x) => x.toFixed()))].length / 96) *
		100
	).toFixed(2)}%;`,
	`\n##Nona## ${
		[...new Set(numerosNona.map((x) => x.toFixed()))].length
	}/120 | ${(
		([...new Set(numerosNona.map((x) => x.toFixed()))].length / 120) *
		100
	).toFixed(2)}%.`
);
