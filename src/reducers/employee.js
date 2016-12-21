var initState = {
    selectedEmployee: null,
    login: false
}
function employee(state = initState, action) {
    switch (action.type) {
        case 'FETCH_EMPLOYEE_BY_ID' :
            console.log("FETCH_EMPLOYEE_BY_ID reducer");
            console.log(...state);
            return {...state, selectedEmployee:action.payload}
            break;  
        default:
            return state;
    }
}
export default employee;
