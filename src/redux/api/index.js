import axios from 'axios';

const url = 'https://shipments-engine.herokuapp.com/'

const truck = 'localhost:/4000/trucks'

export const fetchShipments =  () => axios.get(`${url}/shipments/get`)
export const createShipment =  (newPost) => axios.post(`${url}/shipments/add`, newPost)

export const fetchTruck = () => axios.get(truck)
