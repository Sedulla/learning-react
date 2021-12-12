import React from 'react';
import SearchBar from './SearchBar';
import PhotoList from './PhotoList';
import axios from 'axios';
import AddPhoto from './AddPhoto';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EditPhoto from './EditPhoto';

class App extends React.Component {
  state = {
    photos: [],
    searchQuery: '',
  };

  async componentDidMount() {
    // FETCH API;

    // const baseURL = 'http://localhost:3002/pgotos';
    // const response = await fetch(baseURL);
    // const data = await response.json();
    // console.log(data);
    // this.setState({ photos: data });
    this.getPhotos();
  }

  async getPhotos() {
    const response = await axios.get('http://localhost:3002/pgotos');
    this.setState({ photos: response.data });
  }

  // DELETE PHOTO
  deletePhoto = async (photo) => {
    await axios.delete(`http://localhost:3002/pgotos/${photo.id}`);

    const newPhotoList = this.state.photos.filter((p) => p.id !== photo.id);

    this.setState((state) => ({
      photos: newPhotoList,
    }));
  };

  // SEARCH PHOTO
  searchPhoto = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  // ADD PHOTO
  addPhoto = async (photo) => {
    await axios.post(`http://localhost:3002/pgotos/`, photo);
    this.setState((state) => ({
      photos: state.photos.concat([photo]),
    }));
    this.getPhotos();
  };

  // EDIT PHOTO
  editPhoto = async (id, updatedPhoto) => {
    await axios.put(`http://localhost:3002/pgotos/${id}`, updatedPhoto);
    this.getPhotos();
  };

  render() {
    let filteredPhotos = this.state.photos
      .filter((photo) => {
        return photo.name;
        // return photo.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      })
      .sort((a, b) => {
        return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
      });

    return (
      <Router>
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <React.Fragment>
                  <div className="row">
                    <div className="col-lg-12">
                      <SearchBar searchPhotoProp={this.searchPhoto} />
                    </div>
                  </div>
                  <PhotoList
                    photos={filteredPhotos}
                    deletePhotoProp={this.deletePhoto}
                  />
                </React.Fragment>
              )}
            ></Route>
            <Route
              path="/add"
              render={({ history }) => (
                <AddPhoto
                  onAddPhoto={(photo) => {
                    this.addPhoto(photo);
                    history.push('/');
                  }}
                />
              )}
            ></Route>

            <Route
              path="/edit/:id"
              render={(props) => (
                <EditPhoto
                  {...props}
                  onEditPhoto={(id, photo) => {
                    this.editPhoto(id, photo);
                  }}
                />
              )}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
