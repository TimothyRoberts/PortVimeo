import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './index.css';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';

import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch.js';


class Index extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			stateSketch: sketch
		};
	}
  
  render() {
    return(
      <BrowserRouter>
        <div className="marginRight zindex1">
          <P5Wrapper sketch={this.state.stateSketch} />
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
