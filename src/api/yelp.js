// HTTP requests to yelp

import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer HERE_COMES_YOUR_API_KEY'
    },
});