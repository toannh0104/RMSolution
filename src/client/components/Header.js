import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu';

import ActionSettings from 'material-ui/svg-icons/action/settings'
import {white} from 'material-ui/styles/colors';

import AutoComplete from 'material-ui/AutoComplete';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

class Header extends React.Component {

   constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };

    this.props.handleChangeRequestNavDrawer();
  }

  render() {
    const {styles, handleChangeRequestNavDrawer} = this.props;    

    const style = {
      appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: 57
      },
      menuButton: {
        marginLeft: 10
      },
      iconsRightContainer: {
        marginLeft: 20
      }
    };
    console.log("stateee");
    return (
        <div>
            <AppBar className="header" 

                iconElementLeft={
                  <div className="header-left-items">
                    <table>
                    <tbody>
                      <tr>
                        <td>
                          <IconButton onClick={handleChangeRequestNavDrawer}><Menu color={white} /></IconButton>
                        </td>
                        <td>
                          <Avatar className="avatar" src="https://static-s.aa-cdn.net/img/ios/985085520/8518f062afc5f2df9bdbea106ce26888?v=1" />
                        </td>
                        <td>
                          <div className="account-info" >
                            Nguyen Hai Toan <br/>
                            <span>SE - AP</span>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    
                  </div>
                }

                iconElementRight={
                <div style={style.iconsRightContainer}>

                  <IconMenu color={white}
                            iconButtonElement={                              
                              <IconButton><ActionSettings color={white}/></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    <MenuItem key={1} primaryText="Setting 01"/>
                    <MenuItem key={2} primaryText="Application 2"/>
                    <MenuItem key={3} primaryText="Application 3"/>
                  </IconMenu>

                  <IconMenu color={white}
                            iconButtonElement={
                              <IconButton>
                              <i className="material-icons white-color">power_settings_new</i>
                              </IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    <MenuItem primaryText="Sign out"/>
                  </IconMenu>
                </div>
              }

             />
          </div>
      );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func
};

export default Header;
