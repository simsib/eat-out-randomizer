
class FetchApi {
    constructor(props) {
        this.path = 'https://gist.githubusercontent.com/simsib/c7301eb56c14b35601ece8fff9e86bab/raw/3f3782e35d93a66a3fd3dd8b97a4a8870c983c4a/eat-out-randomizer-places.json';
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