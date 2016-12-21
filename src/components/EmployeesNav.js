import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import SearchBox from './SearchBox';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {white} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';

export default class  extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
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
                      iconButtonElement={<IconButton className="sort-btn white-color" ><i className="material-icons">sort</i></IconButton>}
                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
              <MenuItem key={1} primaryText="sort"/>
            </IconMenu>
            <IconMenu color={white}
                      iconButtonElement={
                        <IconButton className="filter-btn white-color">
                          <i className="material-icons">format_line_spacing</i>
                        </IconButton>
                      }
                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                      anchorOrigin={{horizontal: 'right', vertical: 'top'}} >
            </IconMenu>
          </div>
        }
      />
    );
  }
}
