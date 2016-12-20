import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}  from 'material-ui/Table';
import { 
	AutoComplete as MUIAutoComplete, IconButton, FontIcon, RaisedButton,FlatButton, Dialog, 
	Step,Stepper,StepLabel,StepButton, DatePicker } from 'material-ui'

$(document).ready(function(){
		$(".add-emp-btn").draggable({containment:$(".employees"), scroll:false});
})

class AddEmployee extends React.Component {

	render(){
		return(		
			<div>
		        <div className="add-emp-btn" onTouchTap={this.handleOpen} >		        	
                    <i className="material-icons">add_circle</i>
                </div>

		    </div>
          );
	}
}

AddEmployee = reduxForm({
  form: 'AddEmployee'
})(AddEmployee)

export default AddEmployee;