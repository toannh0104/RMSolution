import React from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';


import globalStyles from '../styles';
import Data from '../data';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FontIcon from 'material-ui/FontIcon';



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
  };

  handleChange = (value) => {
    this.setState({
      slideIndex: value
    });
  };

  render(){
    console.log("render detail ");
    console.log(this.state);
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
              <h2 style={styles.headline}>Tabs with slide effect</h2>
             
              Swipe to see the next slide.<br />
            </div>
            <div style={styles.slide}>
              slide n°2
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
