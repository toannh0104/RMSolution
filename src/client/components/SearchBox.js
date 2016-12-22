import React from 'react';
import TextField from 'material-ui/TextField';
import {white, blue500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import Fuse from 'fuse.js';
class SearchBox extends React.Component {

  handleSearch(e){
    console.log(this.props);
    let keyword = e.target.value.trim();
    let currentEmployees = this.props.posts;

    if(keyword.length < 3) {
      this.props.current.keyword = undefined;
      this.props.search(currentEmployees);
      return;
    };
    
    this.props.current.keyword = keyword;
    var options = {
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 3,
      keys: [{
        name: 'firstName'
      }, {
        name: 'lastName'
      }, {
        name: 'location'
      }, {
        name: 'phone'
      }]
    };
    var fuse = new Fuse(currentEmployees, options)    
    this.props.search(fuse.search(e.target.value))
  }



  render(){
    const styles = {
    iconButton: {
      float: 'left',
      paddingTop: 17
    },
    textField: {
      color: white,
      borderRadius: 2,
      height: 35
    },
    inputStyle: {
      color: white,
      paddingLeft: 5
    },
    hintStyle: {
      height: 16,
      paddingLeft: 5,
      color: white
    }
  };

    return (
      <div>
        <IconButton style={styles.iconButton} >
          <Search color={white} />
        </IconButton>
        <TextField
          hintText="Search..."
          underlineShow={false}
           maxLength="15" 
          fullWidth={true}
          style={styles.textField}
          inputStyle={styles.inputStyle}
          hintStyle={styles.hintStyle}
          onChange={this.handleSearch.bind(this)}
        />
      </div>
    );
  }
};

export default SearchBox;
