import React from 'react';
import axios from 'axios';

class EditPhoto extends React.Component {
  state = {
    name: '',
    rating: '',
    overview: '',
    imageURL: '',
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const response = await axios.get(`http://localhost:3002/pgotos/${id}`);
    const photo = response.data;
    this.setState({
      name: photo.name,
      rating: photo.rating,
      overview: photo.overview,
      imageURL: photo.imageURL,
    });
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, rating, overview, imageURL } = this.state;
    const id = this.props.match.params.id;

    const updatedPhoto = {
      name,
      rating,
      overview,
      imageURL,
    };

    this.props.onEditPhoto(id, updatedPhoto);
    this.props.history.push('/');
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
            placeholder="Edit The Form To Update A Photo.."
            disabled
          />
          <div className="form-row">
            <div className="form-group col-md-10">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onInputChange}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input
                type="text"
                className="form-control"
                name="rating"
                value={this.state.rating}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input
                type="text"
                className="form-control"
                name="imageURL"
                value={this.state.imageURL}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea
                className="form-control"
                name="overview"
                rows="5"
                value={this.state.overview}
                onChange={this.onInputChange}
              ></textarea>
            </div>
          </div>
          <br />
          <input
            type="submit"
            className="btn btn-primary w-100"
            value="Edit Photo"
          />
        </form>
      </div>
    );
  }
}

export default EditPhoto;
