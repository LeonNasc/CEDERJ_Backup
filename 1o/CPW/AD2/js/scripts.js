console.log("AD2 CPW 2018.1");
console.log("Aluno: Leon de França Nascimento");
console.log("Polo:SGO");

//Constantes usadas no programa
const PATHS_DE_IMAGENS = {
    "Guidons": "imagens/Guidom_AlumSpeed.jpg",
    "Selins": "imagens/Selim_Rad7.jpg",
    "Pedal": "imagens/PedalIngles.jpg",
    "POTY_BV": "imagens/Bike_Poty_ARO26.jpg",
    "CALOI_T19":"imagens/Bike_Caloi_ARO26.jpg",
    "MTB_VOLT":"imagens/Bike_MTB_ARO16.jpg",
    "CALOI_CECI":"imagens/Bike_Caloi_ARO16.jpg",
};

const TAMANHOS_DE_JANELAS = {
    "Guidons": "width= 370,height= 400",
    "Selins": "width=350,height=380",
    "Pedal": "width=350,height=360",
}

/* ------------------------- Questão 1 -------------------------*/
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

/* ------------------------- Questão 2 -------------------------*/
function mostraBike(bike_index){

    //carregaInfoBikes retorna um array(acessável por bike_index)    
    bike = carregaInfoBikes()[bike_index];
    
    //Todo bike segue o modelo [descr,imagem,preço]
    mudaTxt(bike[0]);
    mudaImg(bike[1], bike[2]);

    return false;
}

function carregaInfoBikes(){

    let MTB = ['MTB Volt PT/AM - Aro 16', PATHS_DE_IMAGENS['MTB_VOLT'], 490,00];
    let CECI = ['Caloi Ceci Branca - Aro 16', PATHS_DE_IMAGENS['CALOI_CECI'],469,00];
    let Poty = ['Poty Branca/Vermelho',PATHS_DE_IMAGENS['POTY_BV'],489,00];
    let T19 = ['Caloi Sport T19 V21' ,PATHS_DE_IMAGENS['CALOI_T19'],880,00];

    return info_bikes = Array(MTB, CECI, Poty, T19);    
}

function mudaTxt(nome){
    descr = document.getElementById('descrição');
    descr.innerHTML = nome;
}

function mudaImg(imagem_path, valor){
    imagem =  document.getElementById('imagem');
    imagem.querySelector('img').src = imagem_path;

    preço = document.getElementById('preço');

    if(!preço){
        imagem.innerHTML += "<div id='preço'> R$" + valor + "</div>";
    }
    else{
        preço.innerHTML = "<div id='preço'> R$" + valor + "</div>";
    }
    imagem.style.textAlign = "center";
    preço.style.textAlign = "center";
}

/* ------------------------- Questão 3 -------------------------*/

function validaTel(numero, tipo){

    if(validaTamanhoTel(numero, tipo)){        
      validaDigitosTel(numero);
    }
}

function validaTamanhoTel(numero, tipo){

    if(tipo == 'celular'){
        if (numero.value.length != 9){
            alert("Telefone celular tem de ter 9 dígitos!");
            numero.value="";
            return false;
        }
      }
      else{
        if(numero.value.length != 8){
          alert("Telefone fixo tem de ter 8 dígitos!");
          numero.value ="";
          return false;
        }
      }
      return true;
}

function validaDigitosTel(numero){
    for(i = 0; i< numero.value.length;i++){

        if(isNaN(parseInt(numero.value[i]))){
        alert("Telefone só pode ter dígitos! Caractere '" + numero.value[i] + "' inválido");
        numero.value ="";
        return;
        }
    }
}

/* Números de telefone são um bom exemplo de dados regulares, que podem ser
identificados através de uma expressão regular, ou regex. Em validaTelFixo e 
validaTelCelular, o padrão identifica se foram passados 8 ou 9 digitos (e somente digitos),
respectivamente, e se o número não atender o padrão, retorna uma mensagem de erro.*/
function validaTelFixo(numero){

    let regex = '^[0-9]{8}^';

    //O número passado não atende a expressão regular
    if(!numero.value.match(regex)){
        alert("Telefone fixo dever ter 8 dígitos, sem letras ou símbolos!");
        numero.value ="";
        return;
    }
    console.log('OK');
}
function validaTelCelular(numero){

    let regex = '^[0-9]{9}^';

    //O número passado não atende a expressão regular
    if(!numero.value.match(regex)){
        alert("Telefone celular deve ter 9 dígitos, sem letras ou símbolos!");
        numero.value ="";
        return;
    }
    
    console.log('OK');
}

/* ------------------------- Questão 4 -------------------------*/

function MontaPedido(){

}

function adicionaProduto(){

}