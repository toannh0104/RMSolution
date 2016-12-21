
var initState = {
    selectedEmp: -1
}

export default function selected(state = initState, action) {
  if(action.type === "UPDATE_SELECTED"){
  	

  	console.log("OK CMNR");
  	var selectedEmp;
  	
  	for (let emp of state.employees) {	 
	  if (emp.id === action.postCode) {
	  	selectedEmp = emp;
	    break;
	  }
	}
  	
  	return {...state, selectedEmp: selectedEmp}
  }


  return state; 
}