// const fetchGoogleData = async (lat, lng) => {
//     console.log('lat:', lat, "lng:", lng)

//     const proxyurl = "https://cors-anywhere.herokuapp.com/";
//     const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=500&key=${apiKey}`;

//     axios(proxyurl + url)
//         .then(response => response.json())
//         .then(contents => console.log(contents))
//         .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

// }

const axios = require('axios')

async function fetchGoogleData(req, res) {

    const { lat, lng, name } = req.params;

    console.log('API KEY ==> ', process.env.API_KEY)

    const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5&formatted_address=${name}key=${process.env.API_KEY}`;

    try {
        const response = await axios(URL);
        console.log('Response:', response.data);
        return res.status(200).send(response.data)
    } catch (error) {
        console.error('Error:', error);
        return
    }

}

module.exports = fetchGoogleData