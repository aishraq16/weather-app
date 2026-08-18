import 'dotenv/config';

const WEATHER_BASE_URL = process.env.WEATHER_BASE_URL
const WEATHER_API_KEY = process.env.WEATHER_API_KEY
const location = "dhaka"
const weather_url = `${WEATHER_BASE_URL}${location}?key=${WEATHER_API_KEY}`
console.log(weather_url)
fetch(weather_url)
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

const GIF_BASE_URL = process.env.GIF_BASE_URL
const GIF_API_KEY = process.env.GIF_API_KEY
const search = "rain"
const gif_url = `${GIF_BASE_URL}?api_key=${GIF_API_KEY}&q=${search}`
console.log(gif_url)
fetch(gif_url)
    .then(res => {
        if (!res){
            throw new Error(`HTTP Error. Status: ${res.status}`)
        }
        return res.json()
    })
    .then(data => {
        console.log(data.data[0].url)
    })
    .catch(err => {
        console.log("Error: " + err)
    })