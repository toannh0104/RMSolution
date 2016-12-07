import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Authenticated, NotAuthenticated, LoginLink } from 'react-stormpath';

export default class IndexPage extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };

  render() {
    return (
      <div>


    <div id="wrapper">

    
        <div id="page-wrapper" className="gray-bg" >
        <div className="row border-bottom">
        <nav className="navbar navbar-static-top" role="navigation" >
          
          <ul className="nav nav-tabs nav-justified" role="tablist">
              <li className="active selected"><a data-toggle="tab" href="#persional-info" className="glyphicon glyphicon-user" ></a></li>
              <li><a data-toggle="tab" href="#menu1" className="glyphicon glyphicon-time" ></a></li>
              <li><a data-toggle="tab" href="#menu2" className="glyphicon glyphicon-education" ></a></li>
                <li><a data-toggle="tab" href="#menu1" className= "glyphicon glyphicon-heart"></a></li>
              <li><a data-toggle="tab" href="#menu2" className="glyphicon glyphicon-home" ></a></li>
                <li><a data-toggle="tab" href="#menu1" className="glyphicon glyphicon-map-marker" ></a></li>
            </ul>

        </nav>
        </div>
            
            <div className="fh-breadcrumb">

                <div className="left-column">
                    <div className="slimScrollDiv" ><div className="full-height-scroll" >
                    <ul className="nav navbar-nav rms-nav left-menu">
            <li className="width-100">
                <div className="input-group stylish-input-group">                                      
                    <span className="input-group-addon">
                        <button type="submit">
                            <span className="glyphicon glyphicon-search text-white font-size-16px"></span>
                        </button>  
                    </span>
                    <input type="text" className="form-control rms-search-box text-white font-size-16px"  placeholder="Search" />
                    <span className="input-group-addon">
                        <button type="submit">
                            <span className="glyphicon glyphicon-sort text-white font-medium"></span>
                        </button>
                        <button type="submit">
                            <span className="glyphicon glyphicon-filter text-white font-medium"></span>
                        </button> 
                        <div className="glyphicon rms-search-count">99999999999</div>
                    </span>
                </div>
            </li>

          </ul>
          <div className="clearfix" ></div>
                        <ul className="list-group elements-list" >

                          <li className="list-group-item rms-list-item" >
                                <a data-toggle="tab" href="#tab-1" aria-expanded="false">
                                    <div className="row">
                                      <div className="col-xs-2">
                                        <span>
                                          <img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg" />
                                        </span>
                                      </div>
                                      <div className="col-xs-7 text-black">
                                        <div>Nguyen Hai Toan </div>
                                        <div>SE - AP</div><div>Hanoi, VietNam</div>
                                      </div>

                                      <div className="col-xs-1 text-black">
                                        <div>20/12/2016</div>
                                        <div>
                                          <span className="glyphicon glyphicon-record record-item">
                                            <i className="glyphicon glyphicon-menu-right"></i>
                                          </span>
                                        </div>
                                      </div>
                                  </div>
                                </a>
                          </li>

                          <li className="list-group-item rms-list-item" >
                                <a data-toggle="tab" href="#tab-2" aria-expanded="false">
                                    <div className="row">
                                      <div className="col-xs-2">
                                        <span>
                                          <img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg" />
                                        </span>
                                      </div>
                                      <div className="col-xs-7 text-black">
                                        <div>Nguyen Hai Toan </div>
                                        <div>SE - AP</div><div>Hanoi, VietNam</div>
                                      </div>

                                      <div className="col-xs-1 text-black">
                                        <div>20/12/2016</div>
                                        <div>
                                          <span className="glyphicon glyphicon-record record-item">
                                            <i className="glyphicon glyphicon-menu-right"></i>
                                          </span>
                                        </div>
                                      </div>
                                  </div>
                                </a>
                          </li>


                          <li className="list-group-item rms-list-item" >
                                <a data-toggle="tab" href="#tab-3" aria-expanded="false">
                                    <div className="row">
                                      <div className="col-xs-2">
                                        <span>
                                          <img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg" />
                                        </span>
                                      </div>
                                      <div className="col-xs-7 text-black">
                                        <div>Nguyen Hai Toan </div>
                                        <div>SE - AP</div><div>Hanoi, VietNam</div>
                                      </div>

                                      <div className="col-xs-1 text-black">
                                        <div>20/12/2016</div>
                                        <div>
                                          <span className="glyphicon glyphicon-record record-item">
                                            <i className="glyphicon glyphicon-menu-right"></i>
                                          </span>
                                        </div>
                                      </div>
                                  </div>
                                </a>
                          </li>
                    <li className="list-group-item rms-list-item" >
                                <a data-toggle="tab" href="#tab-1" aria-expanded="false">
                                    <div className="row">
                                      <div className="col-xs-2">
                                        <span>
                                          <img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg" />
                                        </span>
                                      </div>
                                      <div className="col-xs-7 text-black">
                                        <div>Nguyen Hai Toan </div>
                                        <div>SE - AP</div><div>Hanoi, VietNam</div>
                                      </div>

                                      <div className="col-xs-1 text-black">
                                        <div>20/12/2016</div>
                                        <div>
                                          <span className="glyphicon glyphicon-record record-item">
                                            <i className="glyphicon glyphicon-menu-right"></i>
                                          </span>
                                        </div>
                                      </div>
                                  </div>
                                </a>
                          </li>

                          <li className="list-group-item rms-list-item" >
                                <a data-toggle="tab" href="#tab-2" aria-expanded="false">
                                    <div className="row">
                                      <div className="col-xs-2">
                                        <span>
                                          <img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg" />
                                        </span>
                                      </div>
                                      <div className="col-xs-7 text-black">
                                        <div>Nguyen Hai Toan </div>
                                        <div>SE - AP</div><div>Hanoi, VietNam</div>
                                      </div>

                                      <div className="col-xs-1 text-black">
                                        <div>20/12/2016</div>
                                        <div>
                                          <span className="glyphicon glyphicon-record record-item">
                                            <i className="glyphicon glyphicon-menu-right"></i>
                                          </span>
                                        </div>
                                      </div>
                                  </div>
                                </a>
                          </li>


                          <li className="list-group-item rms-list-item" >
                                <a data-toggle="tab" href="#tab-3" aria-expanded="false">
                                    <div className="row">
                                      <div className="col-xs-2">
                                        <span>
                                          <img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg" />
                                        </span>
                                      </div>
                                      <div className="col-xs-7 text-black">
                                        <div>Nguyen Hai Toan </div>
                                        <div>SE - AP</div><div>Hanoi, VietNam</div>
                                      </div>

                                      <div className="col-xs-1 text-black">
                                        <div>20/12/2016</div>
                                        <div>
                                          <span className="glyphicon glyphicon-record record-item">
                                            <i className="glyphicon glyphicon-menu-right"></i>
                                          </span>
                                        </div>
                                      </div>
                                  </div>
                                </a>
                          </li>

                          <li className="list-group-item rms-list-item" >
                                <a data-toggle="tab" href="#tab-1" aria-expanded="false">
                                    <div className="row">
                                      <div className="col-xs-2">
                                        <span>
                                          <img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg" />
                                        </span>
                                      </div>
                                      <div className="col-xs-7 text-black">
                                        <div>Nguyen Hai Toan </div>
                                        <div>SE - AP</div><div>Hanoi, VietNam</div>
                                      </div>

                                      <div className="col-xs-1 text-black">
                                        <div>20/12/2016</div>
                                        <div>
                                          <span className="glyphicon glyphicon-record record-item">
                                            <i className="glyphicon glyphicon-menu-right"></i>
                                          </span>
                                        </div>
                                      </div>
                                  </div>
                                </a>
                          </li>

                          <li className="list-group-item rms-list-item" >
                                <a data-toggle="tab" href="#tab-2" aria-expanded="false">
                                    <div className="row">
                                      <div className="col-xs-2">
                                        <span>
                                          <img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg" />
                                        </span>
                                      </div>
                                      <div className="col-xs-7 text-black">
                                        <div>Nguyen Hai Toan </div>
                                        <div>SE - AP</div><div>Hanoi, VietNam</div>
                                      </div>

                                      <div className="col-xs-1 text-black">
                                        <div>20/12/2016</div>
                                        <div>
                                          <span className="glyphicon glyphicon-record record-item">
                                            <i className="glyphicon glyphicon-menu-right"></i>
                                          </span>
                                        </div>
                                      </div>
                                  </div>
                                </a>
                          </li>


                          <li className="list-group-item rms-list-item" >
                                <a data-toggle="tab" href="#tab-3" aria-expanded="false">
                                    <div className="row">
                                      <div className="col-xs-2">
                                        <span>
                                          <img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg" />
                                        </span>
                                      </div>
                                      <div className="col-xs-7 text-black">
                                        <div>Nguyen Hai Toan </div>
                                        <div>SE - AP</div><div>Hanoi, VietNam</div>
                                      </div>

                                      <div className="col-xs-1 text-black">
                                        <div>20/12/2016</div>
                                        <div>
                                          <span className="glyphicon glyphicon-record record-item">
                                            <i className="glyphicon glyphicon-menu-right"></i>
                                          </span>
                                        </div>
                                      </div>
                                  </div>
                                </a>
                          </li>
                  </ul>

                    </div><div className="slimScrollBar" ></div><div className="slimScrollRail" ></div></div>
                </div>

                <div className="right-column">
                    <div className="slimScrollDiv" ><div className="full-height-scroll white-bg border-left" >

                        <div className="element-detail-box">

                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane">

                                    <div className="pull-right">
                                        <div className="tooltip-demo">
                                            <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="left" title="Plug this message"><i className="fa fa-plug"></i> Plug it</button>
                                            <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="Mark as read"><i className="fa fa-eye"></i> </button>
                                            <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mark as important"><i className="fa fa-exclamation"></i> </button>
                                            <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Move to trash"><i className="fa fa-trash-o"></i> </button>

                                        </div>
                                    </div>
                                    <div className="small text-muted">
                                        <i className="fa fa-clock-o"></i> Friday, 12 April 2014, 12:32 am
                                    </div>

                                    <h1>
                                        Their separate existence is a myth
                                    </h1>

                                    <p>
                                        The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                                    </p>
                                    <p>
                                        The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.
                                    </p>
                                    <p>
                                        The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.
                                    </p>

                                    <p>
                                        The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.
                                    </p>
                                    <p>
                                        The new common language will be more simple and regular than the existing European languages. It will be as simpl.
                                    </p>
                                    <p>
                                        To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                                    </p>
                                    <p>
                                        The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.
                                    </p>
                                    <p>
                                        It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.
                                    </p>

                                    <p>
                                        The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.
                                    </p>
                                    <p>
                                        To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                                    </p>
                                    <p className="small">
                                        <strong>Best regards, Anthony Smith </strong>
                                    </p>

                                    <div className="m-t-lg">
                                        <p>
                                            <span><i className="fa fa-paperclip"></i> 2 attachments - </span>
                                            <a href="#">Download all</a>
                                            |
                                            <a href="#">View all images</a>
                                        </p>

                                        <div className="attachment">
                                            <div className="file-box">
                                                <div className="file">
                                                    <a href="#">
                                                        <span className="corner"></span>

                                                        <div className="icon">
                                                            <i className="fa fa-file"></i>
                                                        </div>
                                                        <div className="file-name">
                                                            Document_2014.doc
                                                            <br/>
                                                            <small>Added: Jan 11, 2014</small>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                            <div className="file-box">
                                                <div className="file">
                                                    <a href="#">
                                                        <span className="corner"></span>

                                                        <div className="icon">
                                                            <i className="fa fa-line-chart"></i>
                                                        </div>
                                                        <div className="file-name">
                                                            Seels_2015.xls
                                                            <br/>
                                                            <small>Added: May 13, 2015</small>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>

                                </div>

                                <div id="tab-2" className="tab-pane active">
                                    <div className="pull-right">
                                        <div className="tooltip-demo">
                                            <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="left" title="Plug this message"><i className="fa fa-plug"></i> Plug it</button>
                                            <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="Mark as read"><i className="fa fa-eye"></i> </button>
                                            <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mark as important"><i className="fa fa-exclamation"></i> </button>
                                            <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Move to trash"><i className="fa fa-trash-o"></i> </button>

                                        </div>
                                    </div>
                                    <div className="small text-muted">
                                        <i className="fa fa-clock-o"></i> Monday, 21 May 2014, 10:32 am
                                    </div>

                                    <h1>
                                        The European languages - same family.
                                    </h1>

                                    <p>
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.
                                    </p>
                                    <p>
                                        The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.
                                    </p>

                                    <p>
                                        The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.
                                    </p>
                                    <p>
                                        To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                                    </p>
                                    <p>
                                        The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.
                                    </p>

                                    <p>
                                        The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.
                                    </p>
                                    <p>
                                        To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                                    </p>
                                    <p className="small">
                                        <strong>Best regards, Anthony Smith </strong>
                                    </p>

                                    <div className="m-t-lg">
                                        <p>
                                            <span><i className="fa fa-paperclip"></i> 2 attachments - </span>
                                            <a href="#">Download all</a>
                                            |
                                            <a href="#">View all images</a>
                                        </p>

                                        <div className="attachment">
                                            <div className="file-box">
                                                <div className="file">
                                                    <a href="#">
                                                        <span className="corner"></span>

                                                        <div className="icon">
                                                            <i className="fa fa-file"></i>
                                                        </div>
                                                        <div className="file-name">
                                                            Document_2014.doc
                                                            <br/>
                                                            <small>Added: Jan 11, 2014</small>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                            <div className="file-box">
                                                <div className="file">
                                                    <a href="#">
                                                        <span className="corner"></span>

                                                        <div className="icon">
                                                            <i className="fa fa-line-chart"></i>
                                                        </div>
                                                        <div className="file-name">
                                                            Seels_2015.xls
                                                            <br/>
                                                            <small>Added: May 13, 2015</small>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab-3" className="tab-pane">
                                    <div className="pull-right">
                                        <div className="tooltip-demo">
                                            <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="left" title="Plug this message"><i className="fa fa-plug"></i> Plug it</button>
                                            <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="Mark as read"><i className="fa fa-eye"></i> </button>
                                            <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mark as important"><i className="fa fa-exclamation"></i> </button>
                                            <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Move to trash"><i className="fa fa-trash-o"></i> </button>

                                        </div>
                                    </div>
                                    <div className="small text-muted">
                                        <i className="fa fa-clock-o"></i> Tuesday, 15 May 2014, 10:32 am
                                    </div>

                                    <h1>
                                        To take a trivial example
                                    </h1>

                                    <p>
                                        But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
                                    </p>
                                    <p>
                                        The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.
                                    </p>

                                    <p>
                                        he wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and.
                                    </p>
                                    <p>
                                        To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                                    </p>

                                    <p>
                                        The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.
                                    </p>
                                    <p>
                                        To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce.
                                    </p>
                                    <p className="small">
                                        <strong>Best regards, Anthony Smith </strong>
                                    </p>

                                    <div className="m-t-lg">
                                        <p>
                                            <span><i className="fa fa-paperclip"></i> 2 attachments - </span>
                                            <a href="#">Download all</a>
                                            |
                                            <a href="#">View all images</a>
                                        </p>

                                        <div className="attachment">
                                            <div className="file-box">
                                                <div className="file">
                                                    <a href="#">
                                                        <span className="corner"></span>

                                                        <div className="icon">
                                                            <i className="fa fa-file"></i>
                                                        </div>
                                                        <div className="file-name">
                                                            Document_2014.doc
                                                            <br/>
                                                            <small>Added: Jan 11, 2014</small>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                            <div className="file-box">
                                                <div className="file">
                                                    <a href="#">
                                                        <span className="corner"></span>

                                                        <div className="icon">
                                                            <i className="fa fa-line-chart"></i>
                                                        </div>
                                                        <div className="file-name">
                                                            Seels_2015.xls
                                                            <br/>
                                                            <small>Added: May 13, 2015</small>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-4" className="tab-pane">
                                    <div className="pull-right">
                                        <div className="tooltip-demo">
                                            <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="left" title="Plug this message"><i className="fa fa-plug"></i> Plug it</button>
                                            <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="Mark as read"><i className="fa fa-eye"></i> </button>
                                            <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mark as important"><i className="fa fa-exclamation"></i> </button>
                                            <button className="btn btn-white btn-xs" data-toggle="tooltip" data-placement="top" title="" data-original-title="Move to trash"><i className="fa fa-trash-o"></i> </button>

                                        </div>
                                    </div>
                                    <div className="small text-muted">
                                        <i className="fa fa-clock-o"></i> Thursday, 27 april 2014, 10:32 am
                                    </div>

                                    <h1>
                                        Gregor Samsa woke from troubled dreams.
                                    </h1>

                                    <p>
                                        His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.
                                    </p>
                                    <p>
                                        To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                                    </p>
                                    <p>
                                        Travelling day in and day out. Doing business like this takes much more effort than doing your own business at home, and on top of that there's the curse of travelling, worries about making train connections, bad and irregular food, contact with different people all the time so that you can never get to know anyone or become friendly with them.
                                    </p>

                                    <p>
                                        The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.
                                    </p>
                                    <p>
                                        To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                                    </p>
                                    <p className="small">
                                        <strong>Best regards, Anthony Smith </strong>
                                    </p>

                                    <div className="m-t-lg">
                                        <p>
                                            <span><i className="fa fa-paperclip"></i> 2 attachments - </span>
                                            <a href="#">Download all</a>
                                            |
                                            <a href="#">View all images</a>
                                        </p>

                                        <div className="attachment">
                                            <div className="file-box">
                                                <div className="file">
                                                    <a href="#">
                                                        <span className="corner"></span>

                                                        <div className="icon">
                                                            <i className="fa fa-file"></i>
                                                        </div>
                                                        <div className="file-name">
                                                            Document_2014.doc
                                                            <br/>
                                                            <small>Added: Jan 11, 2014</small>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                            <div className="file-box">
                                                <div className="file">
                                                    <a href="#">
                                                        <span className="corner"></span>

                                                        <div className="icon">
                                                            <i className="fa fa-line-chart"></i>
                                                        </div>
                                                        <div className="file-name">
                                                            Seels_2015.xls
                                                            <br/>
                                                            <small>Added: May 13, 2015</small>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div><div className="slimScrollBar"></div><div className="slimScrollRail"></div></div>
                </div>



            </div>

        <div className="footer">
            <div className="pull-right">
                10GB of <strong>250GB</strong> Free.
            </div>
            <div>
                <strong>Copyright</strong> Example Company © 2014-2017
            </div>
        </div>

        </div>
        </div>

</div>
    );
  }
}
