import { Error } from "utils/alert";
import * as api from "../api";
import { FETCH_ALL } from "./actionTypes";

export const getShipments = () => async (dispatch) => {
  try {
    const { data } = await api.fetchShipments();
    await dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    Error(error.message);
  }
};

export default getShipments;
