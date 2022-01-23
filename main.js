//the key of the token in local storage
//196b95d9-c2bb-4549-8ee0-128a264df39f

function saveToken() {
    let params = new URLSearchParams(location.search);
    var token = params.get('id')
    localStorage.setItem('196b95d9-c2bb-4549-8ee0-128a264df39f', token)
}
saveToken();