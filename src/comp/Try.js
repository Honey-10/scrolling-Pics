import React, { Component } from "react";

class Try extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
    };
  }

  componentDidMount() {
    alert(process.env.REACT_APP_API_KEY);
    fetch(
      "https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=5a9b10de4117b3e623755f73e8fab5b2&per_page=20&page=10&format=json&nojsoncallback=1"
    )
      .then(function (response) {
        return response.json();
      })
      .then(
        function (j) {
          alert(JSON.stringify(j));
          let picArray = j.photos.photo.map((pic) => {
            var srcPath =
              "https://farm" +
              pic.farm +
              ".staticflickr.com/" +
              pic.server +
              "/" +
              pic.id +
              "_" +
              pic.secret +
              ".jpg";
            return <img alt="dogs" src={srcPath}></img>;
          });
          this.setState({ pictures: picArray });
        }.bind(this)
      );
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.pictures}</p>
      </div>
    );
  }
}

export default Try;
