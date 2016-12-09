const employee = (state, action) => {
	switch(action.type){
		case 'LIST_EMPLOYEE_BY_ID': 
			return{
				id: action.id,
				text: action.text,
				completed: false
			}
		default: 
			return false;
	}
}

const employees = (state = [], action) => {
	switch(action.type){
		case 'ADD_EMPLOYEE': 
			return[
				...state,
				employees(undefined, action)
			]
		default:
			return state
	}
}

export default employees;