import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import SearchBox from './SearchBox';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {white} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import {Chip} from 'material-ui';
export default class  extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar className="employees-menu-nav"
        title={
          <SearchBox {...this.props} />
        }
        iconElementLeft={<IconButton className="hide-icon" ><NavigationClose /></IconButton>}
        iconElementRight={
          <div>
            <IconMenu color={white}
                      iconButtonElement={<IconButton className="sort-btn white-color" ><i className="material-icons">sort</i></IconButton>}
                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
              <MenuItem key={1} primaryText="sort"/>
            </IconMenu>
            
             <Chip className="chip-counter" >
                 {this.props.current.employees.length}
              </Chip>

          </div>
        }
      />
    );
  }
}
