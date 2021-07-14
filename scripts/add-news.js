$(document).ready(function(){
    var categoria = $("#categoria");
    var titulo = $("#titulo");
    var resumo = $("#resumo");
    var textoMateria = $("#txtMateria");
    var autor =  $("#autor");
    var data = $("#data");
    var fonte = $("#fonte");
    var imagem = $("#imagem");
    var btnEnviar = $("#btnEnviar");

    btnEnviar.click(function(){
        storeReg(categoria.val(), titulo.val(), resumo.val(), 
        textoMateria.val(), autor.val(), data.val(), fonte.val(), imagem.val());
    });

    function storeReg(categoria, titulo, resumo, texto, autor, data, fonte, imagem){
        db.collection(categoria).add({
            titulo: titulo,
            resumo: resumo,
            texto: texto,
            autor: autor,
            data: data,
            fonte: fonte,
            imagem: imagem,
        })
        .then(function(){
            alert("Materia registrada com sucesso.");  
            limpaCampos()  
        })
        .catch(function (error){
            alert("Erro ao registrar materia." + error)
        });
    }

    function limpaCampos(){
        categoria.val('');
        titulo.val('');
        resumo.val('');
        textoMateria.val('');
        autor.val('');
        data.val('');
        fonte.val('');
        imagem.val('');
    }
});

$(document).ready(function () {
    $('#titulo').on('input change', function () {
        if ($(this).val().length == 0) {
            alert('O titulo não é opcional!');
        }
        else if ($(this).val().length > 50) {
            alert('O titulo não é opcional!');
        }
        else {
            console.log('titulo valido')
        }
    });
});
