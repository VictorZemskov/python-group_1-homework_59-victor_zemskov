import React, {Component} from 'react';
import './Joke.css';

class Joke extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Joke] ShouldUpdate');
    return nextProps.value !== this.props.value;
  }

  render() {
    return (
      <article className="Joke">
        <h1>{this.props.value}</h1>
      </article>
    );
  }
}
export default Joke;