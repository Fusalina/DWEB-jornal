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

const get