import * as api from '../api'
import { FETCH_ALL } from './actionTypes';

export const getShipments = () => async (dispatch) => {
    try {
        const { data } = await api.fetchShipments();

        console.log(data)
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export default getShipments

