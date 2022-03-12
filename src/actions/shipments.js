import * as api from '../api'

export const getShipments = async (dispatch) => {
    try {
        const data = await api.fetchShipments();

        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}