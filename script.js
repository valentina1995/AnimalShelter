function viewAnimal() {
    var response = new XMLHttpRequest();
    response.open('GET', 'https://eyavqewaud.execute-api.ap-northeast-1.amazonaws.com/production/animals');
    response.onload = function () {
        var animal = JSON.parse(response.responseText);

        if (response.status == 200) {
            showResults(animal);
            console.log(animal);

        } else {
            console.log('error')
        }

    }
    response.send();
}

function showResults(result) {

    const app = document.getElementById('root');

    for (i in result) {

        var column = document.createElement('div');
        column.setAttribute('class', 'column');
        var card = document.createElement('div');
        card.setAttribute('class', 'card');
        var nombre = document.createElement("h2");
        var tipo = document.createElement("p");
        var fecha = document.createElement("p");
        var edad = document.createElement("p");
        var foto = document.createElement("img");

        nombre.textContent = result[i].animal_name;
        tipo.textContent = 'Kind: ' + result[i].animal_kind;
        fecha.textContent = 'Entry date: ' + result[i].entry_date;
        edad.textContent = 'Age: ' + result[i].animal_age;
        foto.src = result[i].animal_picture;

        app.appendChild(column);
        column.appendChild(card);
        card.appendChild(nombre);
        card.appendChild(tipo);
        card.appendChild(fecha);
        card.appendChild(edad);
        card.appendChild(foto);
    }


}





function receive() {
    var name = document.getElementById("rName").value;
    var kind = document.getElementById("rKind").value;
    // var date = document.getElementById("rDate");
    var d = Date(Date.now());
    var dt = d.toString();
    var age = document.getElementById("rAge").value;
    age = parseInt(age,10);
    var data = JSON.stringify({
        animal_name: name,
        animal_kind: kind,
        entry_date: dt,
        animal_age: age
    });
    var xhr = new XMLHttpRequest();
    var url = 'https://eyavqewaud.execute-api.ap-northeast-1.amazonaws.com/production/animals';
    xhr.open("POST", url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    //xhr.setRequestHeader("Access-Control-Allow-Origin","*")
    xhr.onload = function () {
        // do something to response
        console.log(this.responseText);
    };

    xhr.send(data);
    xhr.onloadend = function () {

        if(xhr.status == 201)
            alert('Animal created');
    };


}

function sendData(){
    var name = document.getElementById("rName").value;
    var kind = document.getElementById("rKind").value;
    // var date = document.getElementById("rDate");
    var d = Date(Date.now());
    var dt = d.toString();
    var age = document.getElementById("rAge").value;
    age = parseInt(age,10);


    var url = 'https://eyavqewaud.execute-api.ap-northeast-1.amazonaws.com/production/animals/';
    var data = {
        animal_name: name,
        animal_kind: kind,
        entry_date: dt,
        animal_age: age,

    };

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json; charset=utf-8 '
        }
    }).then(res => res.json())
        .catch(error => console.log('Error:', error))
        .then(response => console.log('Success:', response));

}
