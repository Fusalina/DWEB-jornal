/*
const listarFrases = (event)=>{
    event.preventDefault();
    let tabela = document.getElementsByTagName("table")[0];
    let linha = tabela.insertRow(-1);
    let col0 = linha.insertCell(0);
    col0.appendChild(document.createTextNode("Frase"));
    db.collection("frases").get().then((querySnapshot)=>{
        querySnapshot.forEach((doc) => {
            let linha = tabela.insertRow(-1);
            let col0 = linha.insertCell(0);
            col0.appendChild(document.createTextNode(doc.data().frase));
        });
    });
}
*/

var listaIdNoticiasEducacao = [];
var listaIdNoticiasPolitica = [];
var listaIdNoticiasSaude = [];
var listCategorias = ['politica', 'saude', 'educacao'];

$(document).ready(function(){
    db.collection("educacao").get().then((querySnapshot)=>{
        querySnapshot.forEach((doc) => {
            listaIdNoticiasEducacao.push(doc.id);
        });
    });
    db.collection("politica").get().then((querySnapshot)=>{
        querySnapshot.forEach((doc) => {
            listaIdNoticiasPolitica.push(doc.id);
        });
    });
    db.collection("saude").get().then((querySnapshot)=>{
        querySnapshot.forEach((doc) => {
            listaIdNoticiasSaude.push(doc.id);
        });
    }); 

    console.log(randCat());
    console.log(randIdEduc());
    console.log(listaIdNoticiasEducacao);
    console.log(randIdPolit());
    console.log(listaIdNoticiasPolitica);
    console.log(randIdSaude());
    console.log(listaIdNoticiasSaude);


});

function randCat(){
    return listCategorias[Math.floor(Math.random() * listCategorias.length)];   
};

function randIdEduc(){
    console.log(listaIdNoticiasEducacao[Math.floor(Math.random() * listaIdNoticiasEducacao.length)]);
    return listaIdNoticiasEducacao[Math.floor(Math.random() * listaIdNoticiasEducacao.length)];
};

function randIdPolit(){
    return listaIdNoticiasPolitica[Math.floor(Math.random() * listaIdNoticiasPolitica.length)];
};

function randIdSaude(){
    return listaIdNoticiasSaude[Math.floor(Math.random() * listaIdNoticiasSaude.length)];
};




