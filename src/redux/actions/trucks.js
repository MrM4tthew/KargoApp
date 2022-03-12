import * as api from '../api'
import { FETCH_ALL } from './actionTypes';

export const getTruck = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTruck();

        console.log(data)
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export default getTruck


