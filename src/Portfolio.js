import React from 'react';
import LabelledInput from './Components/LabelledInput.js';
import DropDown from './Components/DropDown.js';
import axios from 'axios';
import './index.css';
const access_token = 'fababa6435ce3cd7b4863b1cceae06fd';


/////////// VIDEO INFORMATION ///////////
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    // this is where we will store the comments, when they have been retrieved
    this.state = {
      videos: [],
      searchText: '',
      sortBy : 'Newest - Oldest'
    };

    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleUpvote(index) {
    this.state.videos[index].upvoteCount++;
    console.log(this.state.videos[index].upvoteCount);
    this.setState( (prevState, props) => ({
      videos[index].upvoteCount: prevState.videos[index].upvoteCount + 1
    }));
  }

  handleChange(event) {

    // console.log(this.state.searchText);
    // handle both of the <select> UI elements
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
            name: video.name,
            description: video.description,
            video_id: video.uri.slice(8),
            created_time_origin: video.created_time,
            created_time: video.created_time.slice(0,10),
            upvoteCount: 0
          }
        });


        this.setState( {videos: videos} );
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    //sort array
    const data = [].concat(this.state.videos).sort((a, b) => {
      if (a.created_time_origin < b.created_time_origin)
        return this.state.sortBy === "Newest - Oldest" ? 1 : -1;
      if (a.created_time_origin > b.created_time_origin)
        return this.state.sortBy === "Oldest - Newest" ? -1 : 1;
      return 0;
    });



    const videoDetails = data.map( (item, index) => {
      const nameMatch = item.name.toLowerCase().includes(this.state.searchText.toLowerCase());
      // console.log(item.name);
      // console.log(this.state.searchText);
      // console.log(nameMatch);
      return (nameMatch) ? (
      <div key={item.name}>
        <div className = "row topMargin"></div>
        <div className = "row topMargin bottomMargin borderTB">
          <div className="col-xs-4 col-md-4 col-lg-4 padLeft">
            <h4 className="whiteText oswald">{item.name}</h4>
            <hr className="yellow" />
            <h3 className="yellowText garamond">{item.description}</h3>

            <UpVoteBox handleUpvote={this.handleUpvote} index={index} count={item.upvoteCount}/>
            <h3 style={{float: "left"}} className="yellowText garamond">{item.upvoteCount}</h3>

          </div>
          <div className="col-md-1 col-lg-1"></div>
          <div className="col-xs-8 col-md-7 col-lg-7">
            <iframe className="padRight" title={item.name} src={"https://player.vimeo.com/video/" + item.video_id} width="640" height="360" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
            <h3 style={{float: "right"}} className="yellowText padRight smallTextSize garamond">{item.created_time}</h3>
          </div>
        </div>
      </div>
    ) : null;
    });

    return (
        <div>
          <LabelledInput name="searchText" label="Search by name" value={this.state.searchText} handleChange={this.handleChange} placeholder={"  Search Projects"} />
          <DropDown options={['Newest - Oldest', 'Oldest - Newest']} name="sortBy" handleChange={this.handleChange} label="" selected={this.state.created_time} />
          {videoDetails}
        </div>
    );
  }
}

class UpVoteBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return   <button className="upvoteButton" onClick={() => this.props.handleUpvote(this.props.index)}>&#9829;</button>;
  }
}

export default Portfolio;
