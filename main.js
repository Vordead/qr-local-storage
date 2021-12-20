//the key of the token
//196b95d9-c2bb-4549-8ee0-128a264df39f

//the value of the token
//8e102823-bb14-451a-bdd6-65d7d7a8919b

const queryString = window.location.href;

function saveToken() {
    console.log(queryString);
    var index;
    for (let i = 0; i < queryString.length; i++) {
        console.log(queryString[i]);
        if (queryString[i] == "=") {
            index = i;
            console.log(index)
            break;
        }
    }
    var token = queryString.substring(index + 1);
    console.log(token)
    // I can only set 1 token with key employee, if I set another one
    //with same key it will be overriden.
    localStorage.setItem('196b95d9-c2bb-4549-8ee0-128a264df39f', token)
}


function updateUI() {
    var values = [], keys = Object.keys(localStorage), i = keys.length;
    while (i--) { values.push(localStorage.getItem(keys[i])); }
    document.getElementById('ls-currently').textContent = values;
}



//local storage is supported by major browsers but we can still check

// if (typeof (Storage) !== "undefined") {

// } else {

// }
