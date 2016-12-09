import {combineReducers} from 'redux';
import employees from './employees';
import employeeFilter from './employeeFilter';

const RMSolutionReducer = combineReducers({
	employees,
	employeeFilter
})

export default RMSolutionReducer;