import React from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';



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
};


class DashboardPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this)
  };

  handleChange(value){
    console.log("change tab: "+value)
    this.setState({
      slideIndex: value
    });
  };

  render(){
    console.log("render detail ");
    console.log(this.props);
    let employee = this.props.current.selectedEmp;
    return (
      <div className="main-content" >
        <div className="main-menu" >
          <Tabs className="main-tabs"
            onChange={this.handleChange}
            value={this.state.slideIndex}            
          >
            <Tab icon={<FontIcon className="material-icons">account_circle</FontIcon>} value={0} />
            <Tab icon={<FontIcon className="material-icons">history</FontIcon>} value={1} />
            <Tab icon={<FontIcon className="material-icons">school</FontIcon>} value={2} />
            <Tab icon={<FontIcon className="material-icons">supervisor_account</FontIcon>} value={3} />            
            <Tab icon={<FontIcon className="material-icons">account_balance</FontIcon>} value={4} />
            <Tab icon={<FontIcon className="material-icons">place</FontIcon>} value={5} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div>
              <h2 className="heading-line">General information</h2>
              <Table className="tbl-add-emp"
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={false}
                    multiSelectable={false}
                  >
                <TableBody className="tbl-body"
                        displayRowCheckbox={false}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                      >
            
                    <TableRow>
                          <TableRowColumn>
                            <TextField value={employee.firstName} disabled={true} floatingLabelText="First Name"/>
                          </TableRowColumn>
                          <TableRowColumn>
                            <TextField value={employee.subDivision} disabled={true} floatingLabelText="Sub Division"/></TableRowColumn>
                            <TableRowColumn>
                              <img src={employee.avatar} width={100} />
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                          <TableRowColumn><TextField value={employee.lastName} disabled={true} floatingLabelText="Last Name"/></TableRowColumn>
                          <TableRowColumn><TextField value={employee.status} disabled={true} floatingLabelText="Status"/></TableRowColumn>
                        </TableRow>
                        <TableRow>
                          <TableRowColumn><TextField value={employee.gender} disabled={true} floatingLabelText="Gender"/></TableRowColumn>
                          <TableRowColumn>
                              <DatePicker value={employee.hiredDate} disabled={true} />
                          </TableRowColumn>
                        </TableRow>
                        <TableRow>
                          <TableRowColumn>
                            <DatePicker value={employee.hiredDate} disabled={true}  />                 
                          </TableRowColumn>
                          <TableRowColumn>
                            <DatePicker value={employee.hiredDate} disabled={true}  />
                          </TableRowColumn>
                        </TableRow>
                        <TableRow>
                          <TableRowColumn><TextField value={employee.phone} disabled={true} floatingLabelText="Phone"/></TableRowColumn>
                          <TableRowColumn><TextField value={employee.grade} disabled={true}  floatingLabelText="Grade"/></TableRowColumn>
                        </TableRow>
                        <TableRow>
                          <TableRowColumn><TextField hintText="Marital Status" floatingLabelText="Marital Status"/></TableRowColumn>
                          <TableRowColumn><TextField value={employee.location} disabled={true}  floatingLabelText="Location"/></TableRowColumn>
                        </TableRow>
                     </TableBody>
              </Table>

            </div>
            <div style={styles.slide}>
              <h2 className="heading-line">Historical</h2>
              <Table className="tbl-add-emp"
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={false}
                    multiSelectable={false}
                  >
               <TableHeader
                  displaySelectAll={false}
                  adjustForCheckbox={false}
                  enableSelectAll={false}
                >
                  <TableRow>
                    <TableHeaderColumn tooltip="Company">Company</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Company">Position</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Company">Date</TableHeaderColumn>
                    <TableHeaderColumn></TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody className="tbl-body"
                        displayRowCheckbox={false}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                      >            
                    <TableRow>
                      <TableRowColumn>Company Name</TableRowColumn>
                      <TableRowColumn>Position</TableRowColumn>
                      <TableRowColumn>From xxx to xxx</TableRowColumn>
                      <TableRowColumn>Edit</TableRowColumn>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Company Name</TableRowColumn>
                      <TableRowColumn>Position</TableRowColumn>
                      <TableRowColumn>From xxx to xxx</TableRowColumn>
                      <TableRowColumn>Edit</TableRowColumn>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Company Name</TableRowColumn>
                      <TableRowColumn>Position</TableRowColumn>
                      <TableRowColumn>From xxx to xxx</TableRowColumn>
                      <TableRowColumn>Edit/Remove</TableRowColumn>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn></TableRowColumn>
                      <TableRowColumn></TableRowColumn>
                      <TableRowColumn></TableRowColumn>
                      <TableRowColumn>Add</TableRowColumn>
                    </TableRow>
                    
                 </TableBody>
                </Table>
            </div>
            <div style={styles.slide}>
              slide n°3
            </div>
             <div style={styles.slide}>
              slide n°4
            </div>
             <div style={styles.slide}>
              slide n°5
            </div>
             <div style={styles.slide}>
              slide n°6
            </div>
          </SwipeableViews>
     
        </div>   
      </div>
    );
  }
};

export default DashboardPage;
