import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-md py-5">
        <div className="container-fluid">
          <span className="navbar-text justify-content-center ">
            <h4 className="navbar-center ">Search Photos</h4>
          </span>
          <div className="d-flex justify-content-center search-btn">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
