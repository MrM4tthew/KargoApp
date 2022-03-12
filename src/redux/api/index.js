import axios from 'axios';

const url = 'https://shipments-engine.herokuapp.com/'

export const fetchShipments =  () => axios.post(`${url}/shipments/get`)
export const createShipment =  (newPost) => axios.post(`${url}/shipments/add`, newPost)


