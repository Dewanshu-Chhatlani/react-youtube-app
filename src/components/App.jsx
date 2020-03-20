import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

const KEY = "AIzaSyBUAnSYaCiPolCRZg9sHleawh_6dlma2i0";
class App extends React.Component {
  onSearchSubmit = inputText => {
    youtube.get("/search", {
      params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
        q: inputText
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
