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

            if (listaIdNoticiasEducacao.length > 0) {
                console.log(listaIdNoticiasEducacao);

                console.log(randIdEduc());
                renderEduCard(randIdEduc());
            }
        });
    });
    db.collection("politica").get().then((querySnapshot) => {
        querySnapshot.docs.forEach(doc => {
            listaIdNoticiasPolitica.push(doc.id);

            if (listaIdNoticiasPolitica.length > 0) {
                console.log(listaIdNoticiasPolitica);

                console.log('teste random:')
                console.log(randIdPolit());
            }
        });
    });
    db.collection("saude").get().then((querySnapshot) => {
        querySnapshot.docs.forEach(doc => {
            listaIdNoticiasSaude.push(doc.id);

            if (listaIdNoticiasSaude.length > 0) {
                console.log(listaIdNoticiasSaude);

                console.log(listaIdNoticiasSaude);
            }
        });
    });


    //console.log(listaIdNoticiasEducacao.length)
    /*
    console.log(randCat());
    
    
    console.log(randIdPolit());
    console.log(listaIdNoticiasPolitica);
    console.log(randIdSaude());
    console.log(listaIdNoticiasSaude);
    */
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


function renderEduCard(id) {
    let randomEduNews = db.collection('educacao').doc(id).data();

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


function renderEdu(doc) {
    let card = document.createElement('div');
    let title = document.createElement('h3');

    card.setAttribute('data-id', doc.id);
    title.textContent = doc.data().titulo;

    card.appendChild(title);


    document.getElementById("card-edu-1").appendChild(card);
    console.log('O QUE É O DOC:')
    console.log(doc)


    /*
    var para = document.createElement("P");
    var t = document.createTextNode("This is a paragraph.");
    para.appendChild(t);

    document.getElementById("myDIV").appendChild(para);
     */
}

db.collection('educacao').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        //console.log(doc.data())
        //console.log(doc.data().titulo)
        //let titulo = doc.data().titulo
        //renderEdu(doc);
    })
    
})

