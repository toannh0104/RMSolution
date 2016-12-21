import store from '../store';

// load employee
export function renderEmployee(empId) {
    console.log("fetch employee updated")
    
    store.dispatch({type: "FETCH_EMPLOYEE_BY_ID", payload: "OK ROI DAY"});
    
}
/*
export function fetchCards(index, id) {
    console.log("fetch cards");
    console.log(store);

    return {
        type: 'FETCH_CARDS',
        index: index,
        id
    }
}*/