//the key of the token
//196b95d9-c2bb-4549-8ee0-128a264df39f

//the value of the token
//8e102823-bb14-451a-bdd6-65d7d7a8919b


const queryString = window.location.href;
var foundToken = false;

if (localStorage.getItem("196b95d9-c2bb-4549-8ee0-128a264df39f") != null) {
    foundToken = true;
    document.getElementById('isfound-text').textContent = localStorage.getItem("196b95d9-c2bb-4549-8ee0-128a264df39f");
}
else{
    document.getElementById('isfound-text').textContent = "Unrecognized user!\nPlease refer to IT"
}