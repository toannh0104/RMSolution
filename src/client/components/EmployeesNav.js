import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import SearchBox from './SearchBox';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {white} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import {Chip} from 'material-ui';
import SvgIcon from 'material-ui/SvgIcon';

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
            <IconMenu color={white} className="nav-sort"
                      iconButtonElement={<IconButton className="sort-btn white-color" ><i className="material-icons">sort</i></IconButton>}
                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
              <MenuItem className="nav-sort-by-name" primaryText="Name" leftIcon={<SvgIcon> <path d="M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"/> </SvgIcon>}  />
              <MenuItem className="nav-sort-by-date" primaryText="Hired Date"  leftIcon={<SvgIcon> <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/> </SvgIcon>}  />
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
