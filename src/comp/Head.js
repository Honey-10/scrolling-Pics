import React, { useState, useEffect } from "react";
import icon1 from "../icon1.svg";
import axios from "axios";

const Head = () => {
  const [query, setQuery] = useState("");
  const [srh, setSrh] = useState(null);
  const [trigger, setTrigger] = useState(false);

  console.log(query);
  useEffect(() => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5a9b10de4117b3e623755f73e8fab5b2&text=${query}&format=json&nojsoncallback=1`
      )
      .then((responce) => {
        setSrh(responce.data.photos);
        console.log(responce);
      });
  }, [query]);
  const searchPhotos = async (e) => {
    e.preventDefault();
    console.log("Submitting the Form");
    console.log(searchPhotos);
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={icon1} className="App-logo" alt="logo" />
          <h1 className="App-title">Search</h1>
          <form className="form" onSubmit={searchPhotos}>
            <label className="label" htmlFor="query">
              {" "}
              📷
            </label>
            <input
              type="text"
              name="query"
              className="input"
              placeholder={`Try "dog" or "apple"`}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onClick={() => setTrigger(true)}
            />

            <button type="submit" className="button">
              Search
            </button>
          </form>
        </header>
      </div>
      <div className="inner-container">
        {srh?.photo &&
          srh.photo.map((el) => {
            return (
              <div className="img">
                <img
                  src={`http://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}.jpg`}
                ></img>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Head;
