//source: https://www.grafikart.fr/tutoriels/promise-async-await-875
var request = function(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new window.XMLHttpRequest()

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject(xhr)
                }
            }
        }
        xhr.open('GET', url, true)
        xhr.send()
    })
}