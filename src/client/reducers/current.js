
var initState = {
    selectedEmp: -1
}

export default function selected(state = initState, action) {
  if(action.type === "UPDATE_SELECTED"){  	
  	var selectedEmp;
  	
  	for (let emp of state.employees) {	 
	  if (emp.id === action.postCode) {
	  	selectedEmp = emp;
	    break;
	  }
	}
  	
  	return {...state, selectedEmp: selectedEmp}
  }


  if(action.type === "SEARCH_EMPLOYEE"){        
    console.log("update employee");
    return {...state, employees: action.employees}
  }


  return state; 
}