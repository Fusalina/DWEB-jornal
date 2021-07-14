function authUser(event){
    event.preventDefault();
    let email = document.getElementById("user_name_auth").value;
    let password = document.getElementById("senha_auth").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(){
        alert("Login realizado com sucesso!")
        window.location.href="/pages/index-add-news.html";

    })
    .catch(function(error){
        console.log("Usuário não encontrado!");
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode+" : "+errorMessage);
    });
}

function verifyAuth(event){
    let user = firebase.auth().currentUser;
    event.preventDefault();
    console.log(user);
    console.log(user.email);
}

