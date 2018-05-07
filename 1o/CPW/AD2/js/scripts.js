console.log("AD2 CPW 2018.1");

//Constantes usadas no programa
const PATHS_DE_IMAGENS = {
    "Guidons": "imagens/Guidom_AlumSpeed.jpg",
    "Selins": "imagens/Selim_Rad7.jpg",
    "Pedal": "imagens/PedalIngles.jpg",
    "POTY_BV": "imagens/Bike_Poty_ARO26.jpg",
    "CALOI_T19":"imagens/Bike_Caloi_ARO26.jpg",
    "MTB_VOLT":"imagens/Bike_Caloi_ARO26.jpg",
    "CALOI_CECI":"imagens/Bike_MBT_ARO16.jpg",
};

const TAMANHOS_DE_JANELAS = {
    "Guidons": "width= 370,height= 400",
    "Selins": "width=350,height=380",
    "Pedal": "width=350,height=360",
}


//Questão 1
function abreJanela(tipo) {    

    let produtos = document.getElementById(tipo);

    //Se o elemento não contem uma imagem, logo ele não está no modelo proposto na questão
    if (!produtos.querySelector('img')) {
        produtos = montaConteudo(produtos);
    }

    exibeLista(produtos);
    
    return false;
}

function montaConteudo(produtos){

    //Monta o conteúdo da janela, com imagem, lista e o botão
    let titulo = "<h1>" + produtos.id + "</h1>";
    let imagem = "<img src=" + PATHS_DE_IMAGENS[produtos.id] + " alt=" + produtos.id + " />";

    //Conteudo refere-se aos produtos na UL dentro do LI que lista os tipos de produtos
    let conteudo = "<br>" + produtos.innerHTML + "<br>"; 

    let botao = "<button onclick='window.close()' >Fechar</button>";
    let footer = "<br>Imagem meramente ilustrativa...";

    produtos.innerHTML = "<center>" + titulo + imagem + conteudo + botao + footer + "</center>";

    return produtos;
}

function exibeLista(lista){

    let configs = TAMANHOS_DE_JANELAS[lista.id];
    let janela = window.open("",lista.id, configs);

    janela.document.write(lista.innerHTML);

    with(janela.document.body.style){
    display = "block";
    color = "#DD0000";
    backgroundColor = "#EEEE33";
    }
}

//Questão 2
function mostraBike(bike){
    alert(bike);
}
