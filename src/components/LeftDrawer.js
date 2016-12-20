import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {white, blue600} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import SearchBox from './SearchBox';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import Menu from 'material-ui/svg-icons/navigation/menu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AddEmployee from './AddEmployee';
import Chip from 'material-ui/Chip';

const LeftDrawer = (props) => {
  let { navDrawerOpen, width } = props;

  const styles = {

    menuItem: {
      color: white,
      fontSize: 14
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',        
        height: 45        
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
    }
  };
  return (
    <Drawer className="drawer" containerClassName="drawer-container" overlayClassName="drawer-overlay"
      width={width}
      docked={true}
      open={navDrawerOpen}  >

        <div style={styles.logo}>
          
        </div>
        <div className="employees">
        <div className="employees-menu">
          <AppBar className="employees-menu-nav"
              title={
                <SearchBox />
              }
              iconElementLeft={<IconButton className="hide-icon" ><NavigationClose /></IconButton>}

              iconElementRight={
                <div>
                
                  <IconButton className="filter-btn white-color">
                    <i className="material-icons">delete</i>
                  </IconButton>
                    
                  <IconMenu color={white}
                            iconButtonElement={
                              <IconButton className="sort-btn white-color" >
                                <i className="material-icons">sort</i>
                              </IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    <MenuItem key={1} primaryText="sort"/>
                    <MenuItem key={2} primaryText="sort 2"/>
                  </IconMenu>
                  
                  <IconButton className="chip-label">
                    <Chip>999</Chip>
                  </IconButton>
                    
              
                </div>
              }
            />
        </div> {/*end menu*/}

          {props.employees.map((emp, index) =>
             <div style={styles.avatar.div} className="menu-item" key={index} >
              <Avatar src={emp.avatar}
                      size={50}
                      style={styles.avatar.icon}/>

              <div className="cleft">
                <div className="employees-info-name" >{emp.firstName}</div>
                <div className="employees-info">{emp.grade}</div>
                <div className="employees-info">{emp.location}</div>
              </div>
              <div className="cright">
                <div className="employees-info-name" >{emp.hiredDate}</div>
                <div className="employees-info">
                  <i className="material-icons">adjust</i>
                  <i className="material-icons">keyboard_arrow_right</i>
                </div>

              </div>

            </div>
          )}
          <AddEmployee />
        </div>
        
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
};

export default LeftDrawer;
