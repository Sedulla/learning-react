import React from 'react';
import { Link } from 'react-router-dom';

class PhotoList extends React.Component {
  render() {
    const truncateOverview = (string, maxLenght) => {
      if (!string) return null;
      if (string <= maxLenght) return string;
      return `${string.substring(0, maxLenght)}...`;
    };

    return (
      <div className="row">
        {this.props.photos.map((photo, i) => (
          <div className="col-lg-4" key={i}>
            <div className="card mb-4 shadow-sm">
              <img src={photo.imageURL} className="card-img=top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{photo.name}</h5>
                <p className="card-text">
                  {truncateOverview(photo.overview, 150)}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    className="btn btn-md btn-outline-danger"
                    onClick={(e) => this.props.deletePhotoProp(photo)}
                  >
                    Delete
                  </button>
                  <Link
                    type="button"
                    className="btn btn-md btn-outline-primary"
                    to={`edit/${photo.id}`}
                  >
                    Edit
                  </Link>
                  <h2>
                    <span className="badge alert-primary">{photo.rating}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PhotoList;
