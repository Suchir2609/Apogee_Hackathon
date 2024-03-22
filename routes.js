const axios = require('axios');

const start = '40.7128,-74.0060'; // New York City coordinates (latitude, longitude)
const destination = '34.0522,-118.2437'; // Los Angeles coordinates
const vehicle = 'car'

async function routes(start, destination, vehicle){
    const apiKey = 'Ay_UcRCc1k3a3GjnPm112vXSHTokJrVbdSVU8hQB4_M'
    const url = `https://router.hereapi.com/v8/routes?transportMode=${vehicle}&origin=${start}&destination=${destination}&return=polyline,summary,actions,instructions,routeHandle&apiKey=${apiKey}`;
    try{
        const response = await axios.get(url)
        return response.data
    
    } catch (error) {
        console.error('Error fetching geocoding data:', error)
        throw error
    }
    
}

routes( start,destination, vehicle).then(data=>{
    console.log(data)
})

module.exports = routes
    