import React from 'react';
import serialize from 'form-serialize';

class AddPhoto extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
    const newPhoto = serialize(e.target, { hash: true });
    this.props.onAddPhoto(newPhoto);
  };

  render() {
    return (
      <div className="container">
        <form
          className="mt-5"
          method="POST"
          onSubmit={this.handleFormSubmit}
          required
        >
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Fill The Form To Add A Photo.."
            disabled
          />
          <div className="form-row">
            <div className="form-group col-md-10">
              <label htmlFor="inputName">Name</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input type="text" className="form-control" name="rating" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input type="text" className="form-control" name="imageURL" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea
                className="form-control"
                name="overview"
                rows="5"
              ></textarea>
            </div>
          </div>
          <br />
          <input
            type="submit"
            className="btn btn-danger w-100"
            value="Add Photo"
          />
        </form>
      </div>
    );
  }
}

export default AddPhoto;
