//
document.getElementById('add-single-item-to-ls').addEventListener("click", function () {
    window.localStorage.setItem('name', 'Karl Hadwen');
    updateUI();
});

document.getElementById('add-another-item-to-ls').addEventListener("click", function () {
    localStorage.setItem('users',
        JSON.stringify({ name: "Mike", age: '23' })
    );
    updateUI();
});

document.getElementById('get-single-item-from-ls').addEventListener("click", function () {
    const user = JSON.parse(localStorage.getItem('users'));
    document.getElementById('ls-currently').textContent = user.name;
});

document.getElementById('remove-single-item-from-ls').addEventListener("click", function () {
    localStorage.removeItem('users');
    updateUI();
});

document.getElementById('remove-all-from-ls').addEventListener("click", function () {
    localStorage.clear();
    updateUI();
});

//the key of the token
//196b95d9-c2bb-4549-8ee0-128a264df39f

//the value of the token
//8e102823-bb14-451a-bdd6-65d7d7a8919b


function updateUI() {
    var values = [], keys = Object.keys(localStorage), i = keys.length;
    while (i--) { values.push(localStorage.getItem(keys[i])); }
    document.getElementById('ls-currently').textContent = values;
}

document.getElementById('save-token').addEventListener("click", function () {
    const queryString = window.location.href;
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
);


//local storage is supported by major browsers but we can still check

// if (typeof (Storage) !== "undefined") {

// } else {

// }