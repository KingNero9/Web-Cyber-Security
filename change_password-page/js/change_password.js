const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function myFunction1() {
	var x = document.getElementById("input1");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

function myFunction2() {
	var x = document.getElementById("input2");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

function checkEmail(theForm) {
    if (theForm.input1.value != theForm.input2.value)
    {
        alert('Those passwords don\'t match');
        return false;
    } else {
        return true;
    }
}

function matchPassword(form) {  
	var pw1 = document.getElementById("old").value;  
	var pw2 = document.getElementById("input1").value; 
	var pw3 = document.getElementById("input2").value;
	if(pw1 == pw2 || pw1 == pw3){ 
		alert("You can't reuse the same password"); 
		return false; 
	} else {  
		form.action="../password_changed-page/password_changed.html";
		return true; 
	}  
}  
