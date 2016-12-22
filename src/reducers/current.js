
var initState = {
    selectedEmp: -1
}

export default function selected(state = initState, action) {
  if(action.type === "UPDATE_SELECTED"){
  	console.log("OK CMNR")
  	return {...state, selectedEmp: action.postCode}
  }


  return state; 
}