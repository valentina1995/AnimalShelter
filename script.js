
    var response = new XMLHttpRequest();
    response.open('GET','https://eyavqewaud.execute-api.ap-northeast-1.amazonaws.com/production/animals');
    response.onload = function () {
        var animal = JSON.parse(response.responseText);

        if (response.status == 200) {
            animal.forEach(ani => {
                console.log(animal);
            })
        } else {
            console.log('error')
        }
    }
    response.send()

