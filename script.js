
    var response = new XMLHttpRequest();
    response.open('GET','https://eyavqewaud.execute-api.ap-northeast-1.amazonaws.com/production/animals');
    response.onload = function () {
        var animal = JSON.parse(response.responseText);

        if (response.status == 200) {
            showResults(animal);
                console.log(animal);

        } else {
            console.log('error')
        }

    }

    function showResults(result){
        var container = document.getElementById('contenido');
        const app = document.getElementById('root');

        for ( i in result) {




            var card = document.createElement('div');
            card.setAttribute('class', 'card');
            var nombre = document.createElement("h2");
            var tipo = document.createElement("p");
            var fecha = document.createElement("p");
            var edad = document.createElement("p");
            var foto = document.createElement("img");

            nombre.textContent = result[i].animal_name;
            tipo.textContent = 'Type: '+ result[i].animal_kind;
            fecha.textContent = 'Entry date: '+ result[i].entry_date;
            edad.textContent = 'Age: '+ result[i].animal_age;
            foto.src = result[i].animal_picture;


            app.appendChild(card);
            card.appendChild(nombre);
            card.appendChild(tipo);
            card.appendChild(fecha);
            card.appendChild(edad);
            card.appendChild(foto);
        }


    }
    response.send()

