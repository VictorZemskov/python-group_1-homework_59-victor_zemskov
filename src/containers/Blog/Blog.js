import React, {Component, Fragment} from 'react';
import './Blog.css';
import Post from '../../components/Joke/Joke';
import Button from '../../components/Button/Button';

class Blog extends Component {
  state = {
    jokes: []
  };

  componentDidMount() {
    const P_URL = 'https://api.chucknorris.io/jokes/random';
    fetch(P_URL).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong with network request');
    }).then(jokes => {
      const newJokes = jokes;
      const updatedJokes = [...this.state.jokes.map(joke => {
        return {
            ...joke
        }
      })];
      updatedJokes.push(newJokes);
      this.setState({jokes: updatedJokes});
    }).catch(error => {
      console.log(error);
    })
  }

  addJoke = () => {
      this.componentDidMount();
  };


  render() {

    return (
      <Fragment>
        <section className="Joke">
          {this.state.jokes.map(joke => (
            <Post
              key={joke.id}
              value={joke.value}
            />
          ))}
        </section>
        <Button btnType="Danger" click={this.addJoke}>ADD JOKE</Button>
       </Fragment>
    )
  }
}

export default Blog;
