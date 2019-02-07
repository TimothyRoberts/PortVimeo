import React, {Fragment} from 'react';
import axios from 'axios';
import './index.css';
const access_token = 'fababa6435ce3cd7b4863b1cceae06fd';


/////////// USER INFORMATION ///////////
class Home extends React.Component {
  constructor(props) {
    super(props);
    // this is where we will store the comments, when they have been retrieved
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    axios.get("https://api.vimeo.com/users/94195684/videos", {
                  headers: {
                    Authorization: `Bearer ${access_token}`
                  }
               }
            )
      .then(response => {
        // GET request was successful, store the results in state
        console.log(response);
        const user = [response.data.data[0].user.name.toUpperCase(),
                      response.data.data[0].user.bio,
                      response.data.data[0].user.location];

        console.log('user:');
        console.log(user);
                console.log('response:');
                console.log(response);

        this.setState( {user: user} );
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state);

    return (
      <Fragment>
        <div className="row">
          <div className="col-xs-4 col-md-4 col-lg-4 nameDiv bio">
            <h3 className="garamond yellowText2">  "{this.state.user[1] && this.state.user[1]}"</h3>
          </div>
        </div>

        <div className="row">
          <div className="emptyNameDiv"></div>
          <div className="col-xs-6 col-md-6 col-lg-6 nameDiv">
            <h1 className="oswald h1margin"> {this.state.user[0] && this.state.user[0]} </h1>
          </div>
        </div>
      </Fragment>

    );
  }
}

export default Home;
