import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../Header';
import LeftDrawer from '../LeftDrawer';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import * as actionCreators from '../../actions/actionCreators'
import DashboardPage from '../DashboardPage';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false
    };

    this.props.current.employees = this.props.posts;
    console.log("inited employees")
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleChangeRequestNavDrawer() {
    console.log("handleChangeRequestNavDrawer");
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    let { navDrawerOpen } = this.state;
    var widthDrawer = screen.width * 30/100;
    if(screen.width < 405){
      widthDrawer = screen.width;
    }
    const paddingLeftDrawerOpen = widthDrawer;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '0px 0px 0px 0px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };
    this.props.current.paddingLeftDrawerOpen = paddingLeftDrawerOpen;
    
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
            <Header styles={styles.header}
                  handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

            <LeftDrawer navDrawerOpen={navDrawerOpen} {...this.props} />
            <div style={styles.container}>
              <DashboardPage {...this.props} />
            </div>
           
        </div>

      </MuiThemeProvider>
    );
  }
}

export default Main;