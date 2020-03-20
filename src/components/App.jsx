import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

const KEY = "AIzaSyBUAnSYaCiPolCRZg9sHleawh_6dlma2i0";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSearchSubmit = async inputText => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
        q: inputText
      }
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    console.log(video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
