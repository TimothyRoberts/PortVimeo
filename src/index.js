import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DropDown from './Components/DropDown.js';
import axios from 'axios';

const access_token = 'fababa6435ce3cd7b4863b1cceae06fd';
const user_id = '94195684';
const vimeoAddress = 'https://vimeo.com';

/////////// USER INFORMATION ///////////
class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    // this is where we will store the comments, when they have been retrieved
    this.state = {
      user: []
    };
  }

  // Runs when component is mounted
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
                      response.data.data[0].user.location,
                      response.data.data[0].user.pictures.uri];

        console.log('user:');
        console.log(user);
                console.log('response:');
                console.log(response);

        this.setState( {user: user} );
        // this.setState({ title: response.data.data[2].name });
      })
      .catch(err => {
        console.log(err);
      });

  }

  render() {
    console.log(this.state);

    return (
      <div className="">
        <div className="row">
          <div className="emptyNameDiv"></div>
          <div className="col-xs-6 col-md-6 col-lg-6 nameDiv">
            <h1 className="oswald h1margin"> {this.state.user[0] && this.state.user[0]} </h1>
          </div>
          <div className="col-xs-9 col-md-9 col-lg-9"></div>
          <div className="col-xs-3 col-md-3 col-lg-3 contactDiv">
            <div className="divBorder2">
              <h3 className="oswald">CONTACT</h3>
              <h3 className="garamond whiteText">Based in {this.state.user[2] && this.state.user[2]}</h3>
              <h3 className="garamond whiteText">petersherman@gmail.com</h3>
            </div>
              <div className="divBorder2 h3margin">
                <h3 className="oswald">FEATURED PROJECTS &#8595;</h3>
              </div>
          </div>

        </div>

        <div className="row">
          <div className="col-xs-4 col-md-4 col-lg-4 nameDiv bio">
            <h3 className="garamond yellowText2">  "{this.state.user[1] && this.state.user[1]}"</h3>
          </div>
        </div>

      </div>

    );
  }
}


/////////// VIDEO INFORMATION ///////////
class VideoInfo extends React.Component {
  constructor(props) {
    super(props);
    // this is where we will store the comments, when they have been retrieved
    this.state = {
      videos: []
    };
    this.handleUpvote = this.handleUpvote.bind(this);
  }

  handleUpvote(index) {
    //this.setState({ upvoteCount: this.state.upvoteCount + 1 });
    this.state.videos[index].upvoteCount++;
    console.log(this.state.videos[index].upvoteCount);
    this.setState( (prevState, props) => ({
      upvoteCount: prevState.upvoteCount + 1
    }));
  }

  componentDidMount() {
    axios.get("https://api.vimeo.com/users/94195684/videos", {
                  headers: {
                    Authorization: `Bearer ${access_token}`
                  }
               }
            )
      .then(response => {
        const videos = response.data.data.map(video => {
          return {
            title: video.name,
            description: video.description,
            video_id: video.uri.slice(8),
            created_time: video.created_time.slice(0,10),
            upvoteCount: 0
          }
        });
        console.log('videos:');
        console.log(videos);

        this.setState( {videos: videos} );
      })
      .catch(err => {
        console.log(err);
      });
      // <DropDown options={['all','male','female']} name="genderSelected" handleChange={this.handleChange} label="Filter by gender" selected={this.state.genderSelected} />
  }

  render() {
    console.log(this.state);

    const videoDetails = this.state.videos.map( (item,index) =>
      <div key={item.title}>
        <div className = "row topMargin bottomMargin">

        </div>
        <div className = "row topMargin bottomMargin">
          <div className="col-xs-4 col-md-4 col-lg-4">
            <h4 className="whiteText oswald">{item.title}</h4>
            <hr className="yellow" />
            <h3 className="yellowText garamond">{item.description}</h3>

            <UpVoteBox handleUpvote={this.handleUpvote} index={index} count={item.upvoteCount}/>
            <h3 style={{float: "left"}} className="yellowText garamond">{item.upvoteCount}</h3>

          </div>
          <div className="col-md-1 col-lg-1"></div>
          <div className="col-xs-8 col-md-7 col-lg-7">
            <iframe src={"https://player.vimeo.com/video/" + item.video_id} width="640" height="360" frameBorder="4" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
            <h3 style={{float: "right"}} className="yellowText garamond">{item.created_time}</h3>
          </div>
        </div>


      </div>


    );

    // <h1> {this.state.videos[0] && this.state.videos[0].title} </h1>
    // <p> {this.state.videos[0] && this.state.videos[0].description} </p>
    // <h1> {this.state.videos[1] && this.state.videos[1].title} </h1>

    return (

        <div>
          <DropDown options={['Newest - Oldest','Oldest - Newest']} name="dateSelected" />,
          {videoDetails}
        </div>

    );
  }
}

class UpVoteBox extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);



    // this.state = {upvoteCount: 0}
  }
  render(){
    // const upvoteCount = () => <p>hi</p>;
    return   <button className="upvoteButton" onClick={() => this.props.handleUpvote(this.props.index)}>&#9829;</button>;
  }
}
// <button className="upvoteButton" onClick={() => this.props.handleClick(this.props.index)}>&#9829;</button>


ReactDOM.render(<UserInfo />, document.getElementById('userInfo'));
ReactDOM.render(<VideoInfo />, document.getElementById('root'));
