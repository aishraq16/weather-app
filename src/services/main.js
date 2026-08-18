import 'dotenv/config';

const WEATHER_BASE_URL = process.env.WEATHER_BASE_URL
const WEATHER_API_KEY = process.env.WEATHER_API_KEY
const location = "dhaka"
const URL = `${WEATHER_BASE_URL}${location}?key=${WEATHER_API_KEY}`
console.log(URL)
fetch(URL)
    .then((res) => {
        if (!res){
            throw new Error(`HTTP Error. Status: ${res.status}`)
        }
        return res.json()
    })
    .then((data) => {
        console.log(data.description)
    })
    .catch((err) => console.log("error: " + err))

