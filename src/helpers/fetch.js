
class FetchApi {
    constructor(props) {
        this.path = 'https://raw.githubusercontent.com/simsib/eat-out-randomizer/master/data/data.json';
    }

    getData(callback) {
        //setTimeout(function () {
            fetch(this.path)
                .then((response) => {
                    if (response.status !== 200) {
                        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
                        return;
                    }
                    response.json().then((data) => {
                        callback(data.places);
                    });
                })
                .catch((err) => {
                    console.log('Fetch Error :-S', err);
                });
        //}, 1000);
    }
}


export default FetchApi;