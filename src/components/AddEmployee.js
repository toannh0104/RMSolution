import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';


class AddEmployee extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	       open: false,
	       finished: false,
    	   stepIndex: 0,

    	   fixedHeader: true,
	      fixedFooter: true,
	      stripedRows: false,
	      showRowHover: false,
	      selectable: true,
	      multiSelectable: false,
	      enableSelectAll: false,
	      deselectOnClickaway: true,
	      showCheckboxes: true,
	      height: '300px',
	    };
	  };

	handleOpen = () => {
	    this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	 handleNext = () => {
	    const {stepIndex} = this.state;
	    this.setState({
	      stepIndex: stepIndex + 1,
	      finished: stepIndex >= 5,
	    });
	  };

	  handlePrev = () => {
	    const {stepIndex} = this.state;
	    if (stepIndex > 0) {
	      this.setState({stepIndex: stepIndex - 1});
	    }
	  };

	  handleToggle = (event, toggled) => {
	    this.setState({
	      [event.target.name]: toggled,
	    });
	  };

	  handleChange = (event) => {
	    this.setState({height: event.target.value});
	  };


	  getStepContent(stepIndex) {
	    switch (stepIndex) {
	      case 0:
	        return (
			<Table className="tbl-add-emp"
	          height={this.state.height}
	          fixedHeader={this.state.fixedHeader}
	          fixedFooter={this.state.fixedFooter}
	          selectable={false}
	          multiSelectable={false}
	        >
				{/*<TableHeader
		            displaySelectAll={this.state.showCheckboxes}
		            adjustForCheckbox={this.state.showCheckboxes}
		            enableSelectAll={this.state.enableSelectAll}
		          >
		            <TableRow>
		              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
		                Super Header
		              </TableHeaderColumn>
		            </TableRow>
		            <TableRow>
		              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
		              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
		              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
		            </TableRow>
		          </TableHeader>*/}


				<TableBody
		            displayRowCheckbox={false}
		            deselectOnClickaway={this.state.deselectOnClickaway}
		            showRowHover={this.state.showRowHover}
		            stripedRows={this.state.stripedRows}
		          >
		
		    		<TableRow>
		              <TableRowColumn><TextField hintText="Last Name" floatingLabelText="Last Name"/></TableRowColumn>
		              <TableRowColumn><TextField hintText="Status" floatingLabelText="Status"/></TableRowColumn>
		            </TableRow>
		            <TableRow>
		              <TableRowColumn><TextField hintText="Last Name" floatingLabelText="Last Name"/></TableRowColumn>
		              <TableRowColumn><TextField hintText="Status" floatingLabelText="Status"/></TableRowColumn>
		            </TableRow>
		            <TableRow>
		              <TableRowColumn><TextField hintText="Last Name" floatingLabelText="Last Name"/></TableRowColumn>
		              <TableRowColumn><TextField hintText="Status" floatingLabelText="Status"/></TableRowColumn>
		            </TableRow>
		            <TableRow>
		              <TableRowColumn><TextField hintText="Last Name" floatingLabelText="Last Name"/></TableRowColumn>
		              <TableRowColumn><TextField hintText="Status" floatingLabelText="Status"/></TableRowColumn>
		            </TableRow>
		            <TableRow>
		              <TableRowColumn><TextField hintText="Last Name" floatingLabelText="Last Name"/></TableRowColumn>
		              <TableRowColumn><TextField hintText="Status" floatingLabelText="Status"/></TableRowColumn>
		            </TableRow>
		            <TableRow>
		              <TableRowColumn><TextField hintText="Last Name" floatingLabelText="Last Name"/></TableRowColumn>
		              <TableRowColumn><TextField hintText="Status" floatingLabelText="Status"/></TableRowColumn>
		            </TableRow>

		         </TableBody>
			</Table>
	        	);
	      case 1:
	        return (
	        	<div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
<div>handleClose</div>
</div>
	        	);
	      case 2:
	        return 'Grade';
	      case 3:
	        return 'Dependents';
	      case 4:
	        return 'Home';
	      case 5:
	        return 'Location';	        
	      default:
	        return 'You\'re a long way from home sonny jim!';
	    }
	  }


	doClick(){
		alert();
	};

	render(){
		const styles = {
		  headline: {
		    fontSize: 24,
		    paddingTop: 16,
		    marginBottom: 12,
		    fontWeight: 400,
		  },
		  slide: {
		    padding: 10,
		  },
		  propContainer: {
		    width: 200,
		    overflow: 'hidden',
		    margin: '20px auto 0',
		  },
		  propToggleHeader: {
		    margin: '20px auto 10px',
		  },
		};



		const customContentStyle = {
		  width: '80%',
		  maxWidth: 'none',
		};

		const actions = [
	      <FlatButton
	        label="Cancel"
	        primary={true}
	        onTouchTap={this.handleClose}
	      />,
	      <FlatButton
	        label="Submit"
	        primary={true}
	        onTouchTap={this.handleClose}
	      />,
	    ];

	    const {finished, stepIndex} = this.state;
	    const contentStyle = {margin: '0 16px'};

		return(
			<div>
		        <RaisedButton className="add-emp-btn material-icons add_emp" onTouchTap={this.handleOpen}
		        	icon = { <IconButton className="add-employee">
                    <i className="material-icons">add_circle</i>
                  </IconButton>}
		         />
		        <Dialog
		          title="Add Employee"
		          actions={actions}
		          modal={true}
		          contentStyle={customContentStyle}
		          open={this.state.open}
		        >
		          <div className="dialog-content">

					<div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
				        <Stepper activeStep={stepIndex}>
				          <Step>
				            <StepLabel>General info</StepLabel>
				          </Step>
				          <Step>
				            <StepLabel>history</StepLabel>
				          </Step>
				          <Step>
				            <StepLabel>Grade</StepLabel>
				          </Step>
				          <Step>
				            <StepLabel>Dependents</StepLabel>
				          </Step>
				          <Step>
				            <StepLabel>Place</StepLabel>
				          </Step>
				          <Step>
				            <StepLabel>Location</StepLabel>
				          </Step>
				        </Stepper>
				        <div style={contentStyle}>
				          {finished ? (
				            <p>
				              <a
				                href="#"
				                onClick={(event) => {
				                  event.preventDefault();
				                  this.setState({stepIndex: 0, finished: false});
				                }}
				              >
				                Click here
				              </a> to reset the example.
				            </p>
				          ) : (
				            <div>
				              <p>{this.getStepContent(stepIndex)}</p>
				              <div style={{marginTop: 12}}>
				                <FlatButton
				                  label="Back"
				                  disabled={stepIndex === 0}
				                  onTouchTap={this.handlePrev}
				                  style={{marginRight: 12}}
				                />
				                <RaisedButton
				                  label={stepIndex === 2 ? 'Finish' : 'Next'}
				                  primary={true}
				                  onTouchTap={this.handleNext}
				                />
				              </div>
				            </div>
				          )}
				        </div>
				      </div>

		          </div>
		        </Dialog>
		      </div>

			
          );
	}
}

export default AddEmployee;