import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

const access_token = 'fababa6435ce3cd7b4863b1cceae06fd';
const user_id = '94195684';


class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    // this is where we will store the comments, when they have been retrieved
    this.state = {
      videos: []
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
        const videos = response.data.data.map(video => {
          return {
            title: video.name,
            description: video.description,
            video_id: video.uri.slice(8)
          }
        });
        console.log('videos:');
        console.log(videos);

        this.setState( {videos: videos} );
        // this.setState({ title: response.data.data[2].name });
      })
      .catch(err => {
        console.log(err);
      });

  }

  render() {
    console.log(this.state);

    const videoDetails = this.state.videos.map(item =>
      <div key={item.title} className = "row white">

        <div className="col-xs-1"></div>
          <div className="col-xs-10">
          <h3 className="garamond yellowText">{item.title}</h3>
          <p className="yellowText">{item.description}</p>
          {console.log(item.video_id)}
          <iframe src={"https://player.vimeo.com/video/" + item.video_id} width="auto" height="auto"></iframe>
          </div>
        <div className="col-xs-1"></div>

      </div>

    );

    // <h1> {this.state.videos[0] && this.state.videos[0].title} </h1>
    // <p> {this.state.videos[0] && this.state.videos[0].description} </p>
    // <h1> {this.state.videos[1] && this.state.videos[1].title} </h1>

    return (
        <div>{videoDetails}</div>
    );
  }
}

ReactDOM.render(<UserInfo />, document.getElementById('userInfo'));
