const axios = require('axios')

async function geocodeAddress(address){
    results = []
    try {
        const response = await axios.get('https://geocode.search.hereapi.com/v1/geocode', {
            params: {
                q: address,
                apiKey: 'Ay_UcRCc1k3a3GjnPm112vXSHTokJrVbdSVU8hQB4_M' 
            }
        })
        results.push(response.data.items[0].mapView.north)
        results.push(response.data.items[0].mapView.east)
        return results
    } catch (error) {
        console.error('Error fetching geocoding data:', error)
        throw error
    }
}

//geocodeAddress()

module.exports = geocodeAddress