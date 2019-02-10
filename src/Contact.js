import React, {Fragment} from 'react';
import axios from 'axios';
import './index.css';
const access_token = 'fababa6435ce3cd7b4863b1cceae06fd';

/////////// CONTACT INFORMATION ///////////
class Contact extends React.Component {
  constructor(props) {
    super(props);
    // this is where we will store the comments, when they have been retrieved
    this.state = {
      user: []
    };
  }

  // Runs when component is mounted
  componentDidMount() {
    axios.get("https://api.vimeo.com/users/94043645/videos", {
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
        <div className="col-xs-12 col-md-12 col-lg-12"></div>
      </div>
      <div className="row">
        <div className="col-xs-7 col-md-7 col-lg-7"></div>
          <div className="col-xs-5 col-md-5 col-lg-5">
            <div className="contactDiv">
              <h3 className="garamond blackText centerText">Based in {this.state.user[2] && this.state.user[2]}</h3>
              <h3 className="garamond blackText centerText">timdwroberts@gmail.com</h3>
            </div>
        </div>

        <div className="col-xs-4 col-md-4 col-lg-4"></div>
      </div>
      </Fragment>

    );
  }
}

export default Contact;
