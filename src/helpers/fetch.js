
class FetchApi {
    constructor(props) {
        this.path = 'https://raw.githubusercontent.com/simsib/eat-out-randomizer/master/data/data.json';
    }

    getData() {
        return new Promise((resolve, reject) => {

            fetch(this.path)
                .then((response) => {
                    if (response.status !== 200) {
                        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
                        return;
                    }
                    response.json().then((data) => {
                        setTimeout(function () {
                            resolve(data.places);
                        }, 300);
                    });
                })
                .catch((err) => {
                    reject('Fetch Error :-S ' + err);
                    console.log('Fetch Error :-S', err);
                });

        });
    }
}


export default FetchApi;