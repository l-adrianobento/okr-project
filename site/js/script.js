var vitoria = ['123', '456', '789', '147', '258', '369', '159', '357'];
var jogador_x = '';
var jogador_o = '';
var vez_de = 'X';
var jogadas = 0;
var ganhou = false;

// Função para reiniciar o jogo
function recomecar(){

/*
12457

127
-1247
127
124
247
147
*/

	// reinicia todas as variaveis
	this.jogador_x = '';
	this.jogador_o = '';
	this.vez_de = 'X';
	this.jogadas = 0;
	this.ganhou = false;

	// passa pelas 9 casas 
	for(var i = 1; i < 10; i++){

		// pega o id da casa da vez
		var slot_selecionado = 'slot_'+i;

		// remove a desabilitacao da casa
		document.getElementById(slot_selecionado).classList.remove("desabled");

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

	// se as jogadas foremimpares
	if(this.jogadas%2 != 0){

		// seta para vez do jogador o
		this.vez_de = 'O';

		// adiciona a casa clicada anteriormente nas casas do jogador x
		this.jogador_x += slot;

		// adiciona a classe relacionadas ao jogador x
		document.getElementById(slot_selecionado).classList.add("x");
	}
	else {

		// seta para vez do jogador x
		this.vez_de = 'X';

		// adiciona a casa clicada anteriormente nas casas do jogador o
		this.jogador_o += slot;

		// adiciona a classe relacionada ao jogador o
		document.getElementById(slot_selecionado).classList.add("o");
	}

	// separa as casas clicadas pelo jogador da vez

	// ordena as casas clicadas

	// verifica se existe algum conjunto de casas que foi clicado no array de conjutos de vitoria

	// se ainda não foram 9 jogadas
	if(this.jogadas != 9)
		// exibe o proximo jogador
		document.getElementById('vez-de').innerHTML = this.vez_de;
	else
		// se ja foram as 9 jogadas, exibe que não existe proxima jogada
		document.getElementById('vez-de').innerHTML = '~';

}