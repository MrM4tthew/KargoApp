import { FETCH_ALL } from "redux/actions/actionTypes";

const initialState = {
    shipments: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    const {payload, type} = action
    switch (type) {
        case FETCH_ALL:
            return {...state, shipments: payload};
        default:
            return state;
    }
}