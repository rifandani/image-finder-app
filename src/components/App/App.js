import React from 'react';

import ImageList from '../ImageList/ImageList';
import ImageSearch from '../ImageSearch/ImageSearch';

const API_TOKEN = process.env.API_TOKEN || '16458203-e400377251e0636ab1d34f28a';

class App extends React.Component {
  state = {
    images: [],
    error: null,
    err: null,
  };
  handleMakeRequest = async (e) => {
    e.preventDefault();
    try {
      const searchValue = e.target.elements.searchValue.value;
      const request = await fetch(
        `https://pixabay.com/api/?key=${API_TOKEN}&q=${searchValue}&per_page=15`,
      );
      const results = await request.json();
      if (!searchValue) {
        this.setState({ error: 'Tolong isi input field dengan benar.' });
      } else {
        this.setState({ images: results.hits, error: null });
      }
    } catch (err) {
      this.setState({ err: `${err}` });
    }
  };
  render() {
    console.log(this.state.error);
    return (
      <div>
        <ImageSearch handleMakeRequest={this.handleMakeRequest} />
        {this.state.error !== null ? (
          <div style={{ color: '#fff', textAlign: 'center' }}>
            {this.state.error}
          </div>
        ) : (
          <ImageList images={this.state.images} />
        )}
      </div>
    );
  }
}

export default App;
