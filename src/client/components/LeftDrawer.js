import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import {white} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import AddEmployee from './AddEmployee';
import EmployeesNav from './EmployeesNav';


class LeftDrawer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        open: false,
        navDrawerOpen: false,
        employees: []
      };
      this.loadEmp = this.loadEmp.bind(this);
  };

  componentDidMount(){
    this.props.updateSlected(1);
  }

  loadEmp(empId){
      this.props.updateSlected(empId);
  }

  render(){
    console.log("render left");
    return (

      <Drawer className="drawer" containerClassName="drawer-container" overlayClassName="drawer-overlay"
        width={this.props.current.paddingLeftDrawerOpen}
        docked={true}
        open={this.props.navDrawerOpen} >          
          <div className="employees"> <EmployeesNav />
            {this.props.current.employees.map((emp, index) =>
               <div className="menu-item" key={emp.id} onClick={this.loadEmp.bind(null, emp.id)} >
                <Avatar src={emp.avatar} className="employees-avatar" size={50}/>

                <div className="cleft">
                  <div className="employees-info-name" >{emp.firstName} {emp.lastName}</div>
                  <div className="employees-info">{emp.grade} </div>
                  <div className="employees-info">{emp.location} </div>
                </div>
                <div className="cright">
                  <div className="employees-info-name" >{emp.hiredDate} </div>
                  <div className="employees-info">
                    <i className="material-icons">adjust</i>
                    <i className="material-icons">keyboard_arrow_right</i>
                  </div>

                </div>

              </div>
            )}
            <AddEmployee/>
          </div>
      </Drawer>
    );
  };
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  employees: PropTypes.array
};

export default LeftDrawer;
