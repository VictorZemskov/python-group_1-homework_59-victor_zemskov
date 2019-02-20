import React, {Component} from 'react';
import './Joke.css';

class Joke extends Component {

  render() {
    // console.log('[Post] Render');
    return (
      <article className="Joke">
        <h1>{this.props.value}</h1>
      </article>
    );
  }
}
export default Joke;