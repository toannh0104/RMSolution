import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import {white} from 'material-ui/styles/colors';
import {Avatar, FlatButton } from 'material-ui';
import AddEmployee from './AddEmployee';
import EmployeesNav from './EmployeesNav';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SvgIcon from 'material-ui/SvgIcon';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';


class LeftDrawer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        open: true,
        navDrawerOpen: true
      };
      this.loadEmp = this.loadEmp.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
  };

  componentDidMount(){
    this.props.updateSlected(1);
    this.props.current.employees = this.props.posts;
    console.log("render completed");
  }

  loadEmp(empId){
      this.props.updateSlected(empId);
  }

  handleDelete(empid){
    confirm("Account "+empid+" is deleting...");
  }


  render(){
    console.log("render left");
    console.log(this.props.current.employees);
    let keyword = this.props.current.keyword;


    return (
      <Drawer className="drawer" containerClassName="drawer-container" overlayClassName="drawer-overlay"
        width={this.props.current.paddingLeftDrawerOpen}
        docked={true}
        open={this.props.navDrawerOpen} >          
          <div className="employees"> <EmployeesNav {...this.props} />
            {this.props.current.employees.length > 0 ? (
                <div>
                {this.props.current.employees.map((emp, index) =>
                   <div className="menu-item" key={emp.id} onClick={this.loadEmp.bind(null, emp.id)} >
                    <Avatar src={emp.avatar} className="employees-avatar" size={50}/>

                    <div className="cleft">
                      <div className="employees-info-name" dangerouslySetInnerHTML={window.updateHighlight(emp.firstName + ' ' +emp.lastName, keyword)} ></div>
                      <div className="employees-info">{emp.grade} </div>
                      <div className="employees-info" dangerouslySetInnerHTML={window.updateHighlight(emp.location, keyword)}></div>
                    </div>
                    <div className="cright">
                      <div className="employees-info-name" >{emp.hiredDate} </div>
                      <div className="employees-info">                        
                          <IconMenu
                            iconButtonElement={<IconButton><ContentFilter /></IconButton>}
                            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                          >
                            <MenuItem primaryText="Deactive"  leftIcon={<SvgIcon> <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/> </SvgIcon>}  />
                            <MenuItem primaryText="Send Feedback"  leftIcon={<SvgIcon> <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/> </SvgIcon>}  />
                            <MenuItem onClick={this.handleDelete.bind(null, emp.id)} primaryText="Delete" leftIcon={<SvgIcon><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"/></SvgIcon>} />
                          </IconMenu>           
                      </div>

                    </div>

                  </div>
                )}
                </div>
            ) : <div> NOT FOUND </div> }

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


window.updateHighlight = function (text, keyword){
      if(keyword !== undefined && keyword !== ""){
        var regKeyword = new RegExp(keyword, "gi");
        return {__html: text.replace(regKeyword, function(_keyword){return "<span class='highlight' >"+_keyword+"</span>" } )}
      }
      return {__html: text};
    }
export default LeftDrawer;
