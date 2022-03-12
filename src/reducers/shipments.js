export default (shipments = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return shipments;
        default:
            return shipments
    }
}