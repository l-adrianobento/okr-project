var vitoria = ['123', '456', '789', '147', '258', '369', '159', '357'];
var jogador_x = '';
var jogador_o = '';
var vez_de = 'X';
var jogadas = 0;

// Função para reiniciar o jogo
function recomecar(){

	// reinicia todas as variaveis
	this.jogador_x = '';
	this.jogador_o = '';
	this.vez_de = 'X';
	this.jogadas = 0;
 
	// passa pelas 9 casas 
	for(var i = 1; i < 10; i++){

		// pega o id da casa da vez
		var slot_selecionado = 'slot_'+i;

		// remove a desabilitacao da casa
		document.getElementById(slot_selecionado).classList.remove("desabled");

		// remove a vitoria da casa
		document.getElementById(slot_selecionado).classList.remove("ganhou");

		// limpa o texto da casa
		document.getElementById(slot_selecionado).innerHTML = '';

		// remove a classe de casa marcada com x
		document.getElementById(slot_selecionado).classList.remove("x");

		// remove a classe de casa marcada com o
		document.getElementById(slot_selecionado).classList.remove("o");
	}

	// coloca o reinicio com o jogador x
	document.getElementById('vez-de').innerHTML = this.vez_de;
}

// Função para tratamento da casa selecionada
function seleciona(slot){

	// pega o id da casa da vez
	var slot_selecionado = 'slot_'+slot;

	// desabilita a casa para não poder ser clicada novamente
	document.getElementById(slot_selecionado).classList.add("desabled");

	// marca a casa com o valor do jogador
	document.getElementById(slot_selecionado).innerHTML = this.vez_de;
	
	// adiciona 1 as jogadas
	this.jogadas++;

	// seta a variavel para vitoria
	var ganhou = false;

	// se as jogadas foremimpares
	if(this.jogadas%2 != 0){

		// seta para vez do jogador o
		this.vez_de = 'O';

		// adiciona a casa clicada anteriormente nas casas do jogador x
		this.jogador_x += slot;

		// adiciona a classe relacionadas ao jogador x
		document.getElementById(slot_selecionado).classList.add("x");

		// verifica se houve vitoria
		ganhou = __verificaVitoria(this.jogador_x);
	}
	else {

		// seta para vez do jogador x
		this.vez_de = 'X';

		// adiciona a casa clicada anteriormente nas casas do jogador o
		this.jogador_o += slot;

		// adiciona a classe relacionada ao jogador o
		document.getElementById(slot_selecionado).classList.add("o");

		// verifica se houve vitoria
		ganhou = __verificaVitoria(this.jogador_o);
	}

	// verifica se ganhou
	if(ganhou)
		__marcaVitoria(ganhou);

	// se ainda não foram 9 jogadas
	if(this.jogadas != 9 && !ganhou)
		// exibe o proximo jogador
		document.getElementById('vez-de').innerHTML = this.vez_de;
	else
		// se ja foram as 9 jogadas, exibe que não existe proxima jogada
		document.getElementById('vez-de').innerHTML = '~';
}

// Marca os slots apos a vitoria
function __marcaVitoria(ganhou){

	// passa pelos slots responsaveis pela vitoria
	for(var i = 0; i < ganhou.length; i++)
		// marca tais slots
		document.getElementById("slot_"+ganhou[i]).classList.add("ganhou");

	// desabilita os outros slots\
	for(var i = 1; i < 10; i++){

		// pega a lista de classes do slot da vez
		var slot_agora = document.getElementById('slot_'+i).classList;

		// se nao ouver a classe de desabilitado
		if(!slot_agora.contains("desabled"))
			// adiciona a classe para desabilitar o slot
			slot_agora.add("desabled");
	}

	// exibe que não existe proxima jogada
	document.getElementById('vez-de').innerHTML = '~';
}

// Verifica se ouve vitoria
function __verificaVitoria(jogadas){

	// separa os slots jogados
	var array_jogadas = jogadas.split("");

	// inicia a variavel de econtrados
	var encontrados = 0;

	// se forem mais de 3 jogadas
	if(array_jogadas.length >= 3) {

		// passa pelo array de vitorias
		for(var i = 0; i < this.vitoria.length; i++){

			// separa os slots da possibilidade de vitoria da vez
			var possibilidade_vitoria = this.vitoria[i].split("");

			// reinicia a variavel de encontrados
			encontrados = 0;

			// passa pelos slots da possibilidade de vitoria
			for(var j = 0; j < possibilidade_vitoria.length; j++){

				// se no array de slots clicados exitir o slot da possibilidade de vitoria
				if(array_jogadas.includes(possibilidade_vitoria[j]))
					// marca como slot encontrado
					encontrados++;
			}

			// se foram encontrados 3 slots
			if(encontrados == 3)
				// retorna os slots da vitoria
				return possibilidade_vitoria;
		}
	}

	return false;
}