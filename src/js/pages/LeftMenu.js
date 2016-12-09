import React from 'react';

export default class LeftMenu extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="nav navbar-nav rms-nav left-menu">
        <li className="width-100">
           <div className="input-group stylish-input-group">
              <span className="input-group-addon search-ico"><button type="submit"><span className="glyphicon glyphicon-search text-white"></span></button></span><input type="text" className="form-control rms-search-box text-white font-size-16px" placeholder="Search"/>
              <span className="input-group-addon">
                 <button><span className="glyphicon glyphicon-trash text-white font-medium"></span></button>
                 <button type="submit"><span className="glyphicon glyphicon-sort text-white font-medium"></span></button><button type="submit"><span className="glyphicon glyphicon-filter text-white font-medium"></span></button>
                 <div className="glyphicon rms-search-count">99999999999</div>
              </span>
           </div>
        </li>
     </ul>
    );
  }
}
