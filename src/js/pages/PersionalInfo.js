import React from 'react';

export default class PersionalInfo extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="persional-info" className="tab-pane fade in active">
	      <div className="title">Persional Info</div>
	      <div className="table-responsive">
	        <table className="table persional-info">
	        <tbody>
	          <tr>
	            <td>
	               <small>First Name</small>
	               <div>Apple</div>
	            </td>
	            <td>
	               <small>Sub Division</small>
	               <div >Java Bootcamp</div>
	            </td>
	          </tr>
	          <tr>
	            <td>
	               <small>Last Name</small>
	               <div >Last Name</div>
	            </td>
	            <td>
	               <small>Status</small>
	               <div >Contract</div>
	            </td>
	          </tr>
	          <tr>
	            <td>
	               <small>Gender</small>
	               <div >Male</div>
	            </td>
	            <td>
	               <small>Suspend Date</small>
	               <div>-</div>
	            </td>
	          </tr>
	          <tr>
	            <td>
	               <small>Date Of Birth</small>
	               <div >Januarry 04, 1988</div>
	            </td>
	            <td>
	               <small>Hired Date</small>
	               <div >22 August 2016</div>
	            </td>
	          </tr>
	          <tr>
	            <td>
	               <small>National</small>
	               <div >VietNam</div>
	            </td>
	            <td>
	               <small>Grade</small>
	               <div >SE - AP</div>
	            </td>
	          </tr>
	          <tr>
	            <td>
	               <small>Marital Status</small>
	               <div >Narrired</div>
	            </td>
	            <td>
	               <small>Division</small>
	               <div >CDC</div>
	            </td>
	          </tr>
	          <tr>
	            <td>
	               <small>Phone</small>
	               <div >+84949040188</div>
	            </td>
	            <td>
	               <small>Email</small>
	               <div >email@mitrais.com</div>
	            </td>
	          </tr>
	          </tbody>
	        </table>
	      </div>
	    </div>
    );
  }
}