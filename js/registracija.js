function scaleUp(obj,size){
    obj.style.fontSize=size;
}

function handleOnFocus(x){
    x.style.color=":rgb(135,206,235)";
    x.style.backgroundColor="skyblue";
}



function validation() {
    var user = document.getElementsById('username').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    
    
    if(user=""){
        window.alert("Unesite korisnicko ime");
        return false;
    } else if(email=""){
         window.alert("Unesite email");
        return false;
    }
    else if(pass=""){
        window.alert("Unesite lozinku.");
        return false;
    } 
    
    window.alert("Uspesno ste se registrovali!");
    return true;


}



