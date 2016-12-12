import React from 'react';

export default class PersionalHistory extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (      
        <div id="history" className="tab-pane fade">
          <div className="title">Persional histories</div>
          <table className="table" >
            <tbody>
              <tr>
                <td className="width200px" >
                  <small className="font-small">JANYARRY</small>
                  <div className="htitle">2016 - PRESENT</div>
                  <hr/>
                  <div className="bold align-right">Mitrais Ltd</div>
                  <div className="align-right">JAVA DEVELOPER</div>
                </td>
                <td>
                  <div className="htitle" >JOB DESRIPTION</div>
                  <ul>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td className="width200px" >
                  <small className="font-small">JANYARRY</small>
                  <div className="htitle">2016 - PRESENT</div>
                  <hr/>
                  <div className="bold align-right">EXOPLATFORM</div>
                  <div className="align-right">JAVA DEVELOPER</div>
                </td>
                <td>
                  <div className="htitle" >JOB DESRIPTION</div>
                  <ul>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td className="width200px" >
                  <small className="font-small">JANYARRY</small>
                  <div className="htitle">2016 - PRESENT</div>
                  <hr/>
                  <div className="bold align-right">VIETSOFTWARE INTERNATIONAL</div>
                  <div className="align-right">JAVA DEVELOPER</div>
                </td>
                <td>
                  <div className="htitle" >JOB DESRIPTION</div>
                  <ul>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                    <li className="font-14px" >Description descrption descrption descrption descrption</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
         </div>
    );
  }
}
