import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
const Search = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=5a9b10de4117b3e623755f73e8fab5b2&format=json&nojsoncallback=1"
      )
      .then((responce) => {
        setData(responce.data.photos);
      });
  }, []);
  return (
    <div className="inner-container">
      {data?.photo &&
        data.photo.map((el) => {
          return (
            <div className="img">
              <img
                src={`http://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}.jpg`}
              ></img>
            </div>
          );
        })}
    </div>
  );
};

export default Search;
