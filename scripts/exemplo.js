/*
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>firebase by seegatesite.com</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css">
	<script defer src="https://use.fontawesome.com/releases/v5.0.0/js/all.js"></script>
</head>
<body>
	<section class="section">
		<div class="container">
			<h1 class="title">
				List Of Person
			</h1>
			<div class="content">
				<button id="btnAdd" class="button"><i class="fa fa-plus"></i> Add Person</button>
			</div>
			<div id="card-list" class="columns is-mobile">

			</div>
		</div>
		<div id="modal" class="modal">
			<div class="modal-background"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">Person Form</p>
					<button class="btnClose delete" aria-label="close"></button>
				</header>
				<section class="modal-card-body">
					<div class="field">
						<label class="label">Name</label>
						<div class="control">
							<input type="hidden" id="txtType">
							<input type="hidden" id="txtKey">
							<input class="input" id="txtName" type="text" placeholder="Name">
						</div>
						<p class="help"> </p>
					</div>
					<div class="field">
						<label class="label">Email</label>
						<div class="control">
							<input class="input" id="txtEmail" type="text" placeholder="Email">
						</div>
						<p class="help"> </p>
					</div>
					<div class="field">
						<label class="label">Profile Picture</label>
						<div class="control">
							<input class="input" id="txtPic" type="text" placeholder="Profile picture url">
						</div>
						<p class="help"></p>
					</div>
				</section>
				<footer class="modal-card-foot">
					<button id="btnSave" class="button is-success">Save changes</button>
					<button id="btnClose" class="button">Cancel</button>
				</footer>
			</div>
		</div>
	</section>
	<script src="https://code.jquery.com/jquery-2.2.4.min.js"
	integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
	crossorigin="anonymous"></script>
	<script src="https://www.gstatic.com/firebasejs/4.10.0/firebase.js"></script>
	<script>
		var nextkey =0;
		var config = {
			apiKey: "******************************",
			authDomain: "******************************",
			databaseURL: "******************************",
			projectId: "******************************",
			storageBucket: "******************************",
			messagingSenderId: "******************************"
		};
		firebase.initializeApp(config);
		var database = firebase.database();

		database.ref('users').on('child_added', function(data) {
			add_data_table(data.val().username,
                            data.val().profile_picture,
                            data.val().email,data.key);
			var lastkey = data.key;
			nextkey = parseInt(lastkey)+1;
		});
		database.ref('users').on('child_changed', function(data) {
			update_data_table(
                data.val().username,
                data.val().profile_picture,
                data.val().email,data.key)
		});
		database.ref('users').on('child_removed', function(data) {
			remove_data_table(data.key)
		});

		function add_data_table(name,pic,email,key){
			$("#card-list").append('<div class="column is-3" id="'+key+'">
                                        <div class="card">
                                            <div class="card-image">
                                                <figure class="image is-4by3">
                                                    <img src="'+pic+'"></figure>
                                            </div>
                                            <div class="card-content">
                                                <div class="media">
                                                    <div class="media-content">
                                                        <p class="title is-4">'+name+'</p>
                                                        <p class="subtitle is-6">@'+email+'</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <footer class="card-footer">
                                            <a href="#" data-key="'+key+'" class="card-footer-item btnEdit">Edit</a>
                                            <a href="#" class="card-footer-item btnRemove"  data-key="'+key+'">Remove</a>
                                            </footer>
                                        </div>
                                    </div>');
		}
		function update_data_table(name,pic,email,key){
			$("#card-list #"+key).html('<div class="card">
                                            <div class="card-image">
                                                <figure class="image is-4by3">
                                                <img src="'+pic+'">
                                                </figure>
                                            </div>
                                            <div class="card-content">
                                                <div class="media">
                                                    <div class="media-content">
                                                        <p class="title is-4">'+name+'</p>
                                                        <p class="subtitle is-6">@'+email+'</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <footer class="card-footer">
                                                <a href="#" class="card-footer-item btnEdit"  data-key="'+key+'">Edit</a>
                                                <a  data-key="'+key+'" href="#" class="card-footer-item btnRemove">Remove</a>
                                            </footer>
                                        </div>');
		}
		function remove_data_table(key){
			$("#card-list #"+key).remove();
		}
		function new_data(name,email,pic,key){
			database.ref('users/' + key).set({
				username: name,
				email: email,
				profile_picture : pic
			});
		}
		function update_data(name,email,pic,key){
			database.ref('users/' + key).update({
				username: name,
				email: email,
				profile_picture : pic
			});
		}
		$( "#btnAdd" ).click(function() {
			$("#txtName").val("");
			$("#txtEmail").val("");
			$("#txtPic").val("");
			$("#txtType").val("N");
			$("#txtKey").val("0");
			$( "#modal" ).addClass( "is-active" );

		});
		$("#btnSave" ).click(function() {
			if($("#txtType").val() == 'N'){
				database.ref('users').once("value").then(function(snapshot) {
					if(snapshot.numChildren()==0){
						nextkey = 1;
					}
					new_data($("#txtName").val(),$("#txtEmail").val(),$("#txtPic").val(),nextkey);
				});
			}else{
				update_data($("#txtName").val(),$("#txtEmail").val(),$("#txtPic").val(),$("#txtKey").val());
			}
			$("#btnClose").click();
		});
		$(document).on("click",".btnEdit",function(event){
			event.preventDefault();
			key = $(this).attr("data-key");
			database.ref('users/'+key).once("value").then(function(snapshot){
				$("#txtName").val(snapshot.val().username);
				$("#txtEmail").val(snapshot.val().email);
				$("#txtPic").val(snapshot.val().profile_picture);		
				$("#txtType").val("E");	
				$("#txtKey").val(key);	
			});
			$( "#modal" ).addClass( "is-active" );
		});
		$(document).on("click",".btnRemove",function(event){
			event.preventDefault();
			key = $(this).attr("data-key");
			database.ref('users/' + key).remove();
		})
		
		$( "#btnClose,.btnClose" ).click(function() {
			$( "#modal" ).removeClass( "is-active" );
		});
	</script>
</body>
</html>
*/