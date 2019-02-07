import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './index.css';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';


class Index extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="marginRight zindex1">
          <button className="headerButton"><Link className="oswald whiteText" to="/contact">CONTACT</Link></button>
          <button className="headerButton"><Link className="oswald whiteText" to="/portfolio">PORTFOLIO</Link></button>
          <button className="headerButton"><Link className="oswald whiteText" to="/">HOME</Link></button>

          <Route exact path="/" component={Home}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </BrowserRouter>
    );
  }
}


ReactDOM.render(<Index />, document.getElementById('home'));
