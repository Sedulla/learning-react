import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form action="" onSubmit={this.handleFormSubmit}>
        <div
          className="form-row mb-5"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '2rem',
          }}
        >
          <div className="col-10">
            <input
              onChange={this.props.searchPhotoProp}
              type="text"
              className="form-control"
              placeholder="Search a photo"
            />
          </div>
          <div className="col-2">
            <Link
              to="/add"
              type="button"
              className="btn btn-md btn-danger"
              style={{ marginLeft: '4rem' }}
            >
              Add Photo
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
