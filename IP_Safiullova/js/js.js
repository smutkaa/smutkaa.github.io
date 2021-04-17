const form = document.forms[0];

form.addEventListener("submit", function(event){
	event.preventDefault();
	const info = new FormData(form);
	
	const values = [...info.values()];
 	console.log(values);
 	for (var i = 0; i < 4; i++) {
 		if (values[i] === ""){
 			swal.fire({
				  title: "Заполните все поля",
				  icon: "error"
				});
 			 
 		}
 		else{
 				swal.fire({
				  title: "Спасибо за заказ!",
				  icon: "success"
				});
 		}
 	}
})