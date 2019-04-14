document.getElementById('search-form').addEventListener('submit', function(e){

    const number = document.getElementById('number').value;
    const output = document.getElementById('output');
    let result = '';
    const xhr = new XMLHttpRequest();

    // xhr.open('GET', 'data.txt', true);
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    xhr.onload = function(){
        if(this.status === 200){

            const response = JSON.parse(this.responseText);

            console.log(response.value);
            if(response.type === 'success' && number != ''){
                response.value.forEach(function(joke){
                    result += `<div class="alert alert-info">${joke.joke}</div>`;
                });
            }else{
                result += '<div class="alert alert-danger">Something Went Wrong!</div>';
            }
            output.innerHTML = result;

            
        }
        
    }
    xhr.send();

    // HTTP STATUSES
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found "
    e.preventDefault();
});