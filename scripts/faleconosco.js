$(document).ready(function(){
    var nome = $("#nome");
    var email = $("#email");
    var texto = $("#texto_area");
    var btnEnviar = $("#btn_enviar");

    btnEnviar.click(function(){
        storeFaleCon(nome.val(), email.val(), texto.val());
    });

    function storeFaleCon(nome, email, texto){
        db.collection("faleConosco").add({
            nome: nome,
            email: email,
            texto: texto
        })
        .then(function(){
            alert("Obrigado por entrar em contato.");  
            limpaCampos();     
        })
        .catch(function (error){
            alert("Erro ao registrar." + error)
        });
    }

    function limpaCampos(){
        nome.val('');
        email.val('');
        texto.val('');
    }
});

