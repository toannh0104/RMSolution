import React from 'react';

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
    return (
      <div>1</div>
    );
  }
};

export default DashboardPage;
