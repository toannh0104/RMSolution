import React from 'react';

export default class EmployeeList extends React.Component {


  static propTypes = {
    name: React.PropTypes.string,
  };

  getInitialState(){
  	return{
  		selectedId: -1
  	}
  }

  loadEmployee(id){
  	console.log("Loading employee by id = "+id);
  	this.state.selectedId = id;
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="list-group elements-list employee-list">                      
         <li className="list-group-item rms-list-item">
            <a data-toggle="tab" href="#persional-info" onClick={this.loadEmployee.bind(null, 1) } >
                  <div className="col-xs-2">
                  	<span>
                  		<img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/>
                  	</span>
                  	</div>
                  <div className="col-xs-7 text-black">
                     <div>ToanNH </div>
                     <div>SE - AP</div>
                     <div>Hanoi, VietNam</div>
                  </div>
                  <div className="col-xs-1 text-black">
                     <small>20/12/2016</small>
                     <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                  </div>                                 
            </a>
         </li>
         <li className="list-group-item rms-list-item">
            <a data-toggle="tab" href="#persional-info" onClick={this.loadEmployee.bind(null, 2) } >
                  <div className="col-xs-2"><span><img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/></span></div>
                  <div className="col-xs-7 text-black">
                     <div>ToanNH </div>
                     <div>SE - AP</div>
                     <div>Hanoi, VietNam</div>
                  </div>
                  <div className="col-xs-1 text-black">
                     <small>20/12/2016</small>
                     <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                  </div>
               
            </a>
         </li>
         <li className="list-group-item rms-list-item">
            <a data-toggle="tab" href="#persional-info" onClick={this.loadEmployee.bind(null, 3) } >
                  <div className="col-xs-2"><span><img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/></span></div>
                  <div className="col-xs-7 text-black">
                     <div>ToanNH </div>
                     <div>SE - AP</div>
                     <div>Hanoi, VietNam</div>
                  </div>
                  <div className="col-xs-1 text-black">
                     <small>20/12/2016</small>
                     <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                  </div>
               
            </a>
         </li>
         <li className="list-group-item rms-list-item">
            <a data-toggle="tab" href="#persional-info" onClick={this.loadEmployee.bind(null, 4) } >
                  <div className="col-xs-2"><span><img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/></span></div>
                  <div className="col-xs-7 text-black">
                     <div>ToanNH </div>
                     <div>SE - AP</div>
                     <div>Hanoi, VietNam</div>
                  </div>
                  <div className="col-xs-1 text-black">
                     <small>20/12/2016</small>
                     <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                  </div>
               
            </a>
         </li>
         <li className="list-group-item rms-list-item">
            <a data-toggle="tab" href="#persional-info" aria-expanded="false">
                  <div className="col-xs-2"><span><img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/></span></div>
                  <div className="col-xs-7 text-black">
                     <div>ToanNH </div>
                     <div>SE - AP</div>
                     <div>Hanoi, VietNam</div>
                  </div>
                  <div className="col-xs-1 text-black">
                     <small>20/12/2016</small>
                     <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                  </div>
               
            </a>
         </li>
         <li className="list-group-item rms-list-item">
            <a data-toggle="tab" href="#persional-info" aria-expanded="false">
                  <div className="col-xs-2"><span><img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/></span></div>
                  <div className="col-xs-7 text-black">
                     <div>ToanNH </div>
                     <div>SE - AP</div>
                     <div>Hanoi, VietNam</div>
                  </div>
                  <div className="col-xs-1 text-black">
                     <small>20/12/2016</small>
                     <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                  </div>
               
            </a>
         </li>
         <li className="list-group-item rms-list-item">
            <a data-toggle="tab" href="#persional-info" aria-expanded="false">
                  <div className="col-xs-2"><span><img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/></span></div>
                  <div className="col-xs-7 text-black">
                     <div>ToanNH </div>
                     <div>SE - AP</div>
                     <div>Hanoi, VietNam</div>
                  </div>
                  <div className="col-xs-1 text-black">
                     <small>20/12/2016</small>
                     <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                  </div>
               
            </a>
         </li>
         <li className="list-group-item rms-list-item">
            <a data-toggle="tab" href="#persional-info" aria-expanded="false">
                  <div className="col-xs-2"><span><img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/></span></div>
                  <div className="col-xs-7 text-black">
                     <div>ToanNH </div>
                     <div>SE - AP</div>
                     <div>Hanoi, VietNam</div>
                  </div>
                  <div className="col-xs-1 text-black">
                     <small>20/12/2016</small>
                     <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                  </div>
               
            </a>
         </li>
         <li className="list-group-item rms-list-item">
            <a data-toggle="tab" href="#persional-info" aria-expanded="false">
                  <div className="col-xs-2"><span><img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/></span></div>
                  <div className="col-xs-7 text-black">
                     <div>ToanNH </div>
                     <div>SE - AP</div>
                     <div>Hanoi, VietNam</div>
                  </div>
                  <div className="col-xs-1 text-black">
                     <small>20/12/2016</small>
                     <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                  </div>
               
            </a>
         </li>
      </ul>
    );
  }
}
