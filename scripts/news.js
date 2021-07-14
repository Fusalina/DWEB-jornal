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

$(document).ready(function () {
    db.collection("educacao").get().then((querySnapshot) => {
        querySnapshot.docs.forEach(doc => {
            console.log(doc.id)
            listaIdNoticiasEducacao.push(doc.id);
        });
        let idRandomE = randIdEduc();
        console.log('id random: ' + idRandomE);
        db.collection("educacao").doc(idRandomE).get().then((data) => {
            renderEdu(data);
        });

        let idRandomE2 = randIdEduc();
        console.log('id random: ' + idRandomE2);
        db.collection("educacao").doc(idRandomE2).get().then((data) => {
            renderEdu2(data);
        });
    });
    db.collection("politica").get().then((querySnapshot) => {
        querySnapshot.docs.forEach(doc => {
            listaIdNoticiasPolitica.push(doc.id);
        });
        let idRandomP = randIdPolit();
        console.log('id random: ' + idRandomP);
        db.collection("politica").doc(idRandomP).get().then((data) => {
            renderPoli(data);
        });

        let idRandomP2 = randIdPolit();
        console.log('id random: ' + idRandomP2);
        db.collection("politica").doc(idRandomP2).get().then((data) => {
            renderPoli2(data);
        });
    });
    db.collection("saude").get().then((querySnapshot) => {
        querySnapshot.docs.forEach(doc => {
            listaIdNoticiasSaude.push(doc.id);
        });
        let idRandomS = randIdSaude();
        console.log('id random: ' + idRandomS);
        db.collection("saude").doc(idRandomS).get().then((data) => {
            renderSau(data);
        });

        let idRandomS2 = randIdSaude();
        console.log('id random: ' + idRandomS2);
        db.collection("saude").doc(idRandomS2).get().then((data) => {
            renderSau2(data);
        });
    });

});



function randCat() {
    return listCategorias[Math.floor(Math.random() * listCategorias.length)];
};

function randIdEduc() {
    console.log(listaIdNoticiasEducacao[Math.floor(Math.random() * listaIdNoticiasEducacao.length)]);
    return listaIdNoticiasEducacao[Math.floor(Math.random() * listaIdNoticiasEducacao.length)];
};

function randIdPolit() {
    return listaIdNoticiasPolitica[Math.floor(Math.random() * listaIdNoticiasPolitica.length)];
};

function randIdSaude() {
    return listaIdNoticiasSaude[Math.floor(Math.random() * listaIdNoticiasSaude.length)];
};

/*
function renderEduCard(id) {
    console.log(randIdEduc())
    console.log('TESTE DB: !!!!')
    //console.log(db.collection('educacao').doc(id));

    let randomEduNews = db.collection('educacao').db.collection('educacao').doc().get();

    let card = document.createElement('div');
    let category = document.createElement('h2');
    let title = document.createElement('h3');

    card.setAttribute('data-id', randomEduNews.id);
    category.textContent = 'Educação';
    title.textContent = randomEduNews.data().titulo;

    card.appendChild(category);
    card.appendChild(title);

    document.getElementById("card-edu-1").appendChild(card);

}
*/



function renderEdu(doc) {
    let card = document.createElement('div');
    card.classList.add('card');

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-body');
    let category = document.createElement('h5');
    category.classList.add('card-header');
    category.classList.add('text-secondary');

    

    let title = document.createElement('h3');
    title.classList.add('card-title');
    title.classList.add('card-body');


    let divImg = document.createElement('div');
    let imgInput = document.createElement('img');
    imgInput.src = doc.data().imagem;
    imgInput.classList.add('card-img-top');
    

    let divAbstract = document.createElement('div');
    divAbstract.classList.add('card-body')
    let abstractP = document.createElement('p');
    abstractP.classList.add('card-text');
    abstractP.classList.add('card-body');
    abstractP.textContent = doc.data().resumo;

    card.setAttribute('data-id', doc.id);
    category.textContent = 'Educação';
    title.textContent = doc.data().titulo;

    cardHeader.appendChild(category);
    cardHeader.appendChild(title);

    divImg.appendChild(imgInput);

    divAbstract.appendChild(abstractP);

    card.appendChild(cardHeader);
    card.appendChild(divImg);
    card.appendChild(divAbstract);

    //card-footer

    document.getElementById("card-edu-1").appendChild(card);
    //console.log('O QUE É O DOC:')
    //console.log(doc)


    /*
    var para = document.createElement("P");
    var t = document.createTextNode("This is a paragraph.");
    para.appendChild(t);

    document.getElementById("myDIV").appendChild(para);
     */
}

function renderPoli(doc) {
    let card = document.createElement('div');
    card.classList.add('card');

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-body');
    let category = document.createElement('h5');
    category.classList.add('card-header');
    category.classList.add('text-secondary');

    

    let title = document.createElement('h3');
    title.classList.add('card-title');
    title.classList.add('card-body');


    let divImg = document.createElement('div');
    let imgInput = document.createElement('img');
    imgInput.src = doc.data().imagem;
    imgInput.classList.add('card-img-top');

    let divAbstract = document.createElement('div');
    divAbstract.classList.add('card-body')
    let abstractP = document.createElement('p');
    abstractP.classList.add('card-text');
    abstractP.classList.add('card-body');
    abstractP.textContent = doc.data().resumo;

    card.setAttribute('data-id', doc.id);
    category.textContent = 'Política';
    title.textContent = doc.data().titulo;

    cardHeader.appendChild(category);
    
    cardHeader.appendChild(title);

    divImg.appendChild(imgInput);

    divAbstract.appendChild(abstractP);

    card.appendChild(cardHeader);
    card.appendChild(divImg);
    card.appendChild(divAbstract);


    document.getElementById("card-poli-1").appendChild(card);
    
}


function renderSau(doc) {
    let card = document.createElement('div');
    card.classList.add('card');

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-body');
    let category = document.createElement('h5');
    category.classList.add('card-header');
    category.classList.add('text-secondary');

    

    let title = document.createElement('h3');
    title.classList.add('card-title');
    title.classList.add('card-body');


    let divImg = document.createElement('div');
    let imgInput = document.createElement('img');
    imgInput.src = doc.data().imagem;
    imgInput.classList.add('card-img-top');

    let divAbstract = document.createElement('div');
    divAbstract.classList.add('card-body')
    let abstractP = document.createElement('p');
    abstractP.classList.add('card-text');
    abstractP.classList.add('card-body');
    abstractP.textContent = doc.data().resumo;

    card.setAttribute('data-id', doc.id);
    category.textContent = 'Saúde';
    title.textContent = doc.data().titulo;

    cardHeader.appendChild(category);
    cardHeader.appendChild(title);

    divImg.appendChild(imgInput);

    divAbstract.appendChild(abstractP);

    card.appendChild(cardHeader);
    card.appendChild(divImg);
    card.appendChild(divAbstract);


    document.getElementById("card-sau-1").appendChild(card);
    
}

//second row

function renderEdu2(doc) {
    let card = document.createElement('div');
    card.classList.add('card');

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-body');
    let category = document.createElement('h5');
    category.classList.add('card-header');
    category.classList.add('text-secondary');

    

    let title = document.createElement('h3');
    title.classList.add('card-title');
    title.classList.add('card-body');


    let divImg = document.createElement('div');
    let imgInput = document.createElement('img');
    imgInput.src = doc.data().imagem;
    imgInput.classList.add('card-img-top');
    

    let divAbstract = document.createElement('div');
    divAbstract.classList.add('card-body')
    let abstractP = document.createElement('p');
    abstractP.classList.add('card-text');
    abstractP.classList.add('card-body');
    abstractP.textContent = doc.data().resumo;

    card.setAttribute('data-id', doc.id);
    category.textContent = 'Educação';
    title.textContent = doc.data().titulo;

    cardHeader.appendChild(category);
    cardHeader.appendChild(title);

    divImg.appendChild(imgInput);

    divAbstract.appendChild(abstractP);

    card.appendChild(cardHeader);
    card.appendChild(divImg);
    card.appendChild(divAbstract);

    //card-footer

    document.getElementById("card-edu-2").appendChild(card);
    //console.log('O QUE É O DOC:')
    //console.log(doc)


    /*
    var para = document.createElement("P");
    var t = document.createTextNode("This is a paragraph.");
    para.appendChild(t);

    document.getElementById("myDIV").appendChild(para);
     */
}

function renderPoli2(doc) {
    let card = document.createElement('div');
    card.classList.add('card');

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-body');
    let category = document.createElement('h5');
    category.classList.add('card-header');
    category.classList.add('text-secondary');

    

    let title = document.createElement('h3');
    title.classList.add('card-title');
    title.classList.add('card-body');


    let divImg = document.createElement('div');
    let imgInput = document.createElement('img');
    imgInput.src = doc.data().imagem;
    imgInput.classList.add('card-img-top');

    let divAbstract = document.createElement('div');
    divAbstract.classList.add('card-body')
    let abstractP = document.createElement('p');
    abstractP.classList.add('card-text');
    abstractP.classList.add('card-body');
    abstractP.textContent = doc.data().resumo;

    card.setAttribute('data-id', doc.id);
    category.textContent = 'Política';
    title.textContent = doc.data().titulo;

    cardHeader.appendChild(category);
    
    cardHeader.appendChild(title);

    divImg.appendChild(imgInput);

    divAbstract.appendChild(abstractP);

    card.appendChild(cardHeader);
    card.appendChild(divImg);
    card.appendChild(divAbstract);


    document.getElementById("card-poli-2").appendChild(card);
    
}


function renderSau2(doc) {
    let card = document.createElement('div');
    card.classList.add('card');

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-body');
    let category = document.createElement('h5');
    category.classList.add('card-header');
    category.classList.add('text-secondary');

    

    let title = document.createElement('h3');
    title.classList.add('card-title');
    title.classList.add('card-body');

    let divImg = document.createElement('div');
    let imgInput = document.createElement('img');
    imgInput.src = doc.data().imagem;
    imgInput.classList.add('card-img-top');

    let divAbstract = document.createElement('div');
    divAbstract.classList.add('card-body')
    let abstractP = document.createElement('p');
    abstractP.classList.add('card-text');
    abstractP.classList.add('card-body');
    abstractP.textContent = doc.data().resumo;

    card.setAttribute('data-id', doc.id);
    category.textContent = 'Saúde';
    title.textContent = doc.data().titulo;

    cardHeader.appendChild(category);
    cardHeader.appendChild(title);

    divImg.appendChild(imgInput);

    divAbstract.appendChild(abstractP);

    card.appendChild(cardHeader);
    card.appendChild(divImg);
    card.appendChild(divAbstract);


    document.getElementById("card-sau-2").appendChild(card);
    
}