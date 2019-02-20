import React, {Component, Fragment} from 'react';
import './Blog.css';
import Post from '../../components/Joke/Joke';
import Button from '../../components/Button/Button';

class Blog extends Component {
  state = {
    jokes: [
      // {title: 'Test Post', author: 'John Doe', id: '1'},
      // {title: 'Hello, world', author: 'Jack Black', id: '2'},
      // {title: 'Another example', author: 'Main Editor', id: '3'},
    ],
    // postsFormShown: false,
  };

  componentDidMount() {
    const P_URL = 'https://api.chucknorris.io/jokes/random';
    fetch(P_URL).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong with network request');
    }).then(jokes => {
      const updatedJokes = [jokes];
      this.setState({jokes: updatedJokes});
    }).catch(error => {
      console.log(error);
    })
  }

  changeJoke = () => {
      this.componentDidMount();
  };

  // togglePostsForm = () => {
  //   this.setState(prevState => {
  //     console.log('[Blog] Toggling form');
  //     return {postsFormShown: !prevState.postsFormShown};
  //   });
  // };


  // constructor(props) {
  //   super(props);
  //   console.log('[Blog] constructor');
  //   console.log('[Blog] State exists: ', this.state.posts.length > 0);
  // }
  //
  // componentDidMount() {
  //   console.log('[Blog] DidMount');
  // }



  render() {
    // console.log('[Blog] Render');
    // console.log(this.state.postsFormShown);

    // let postsForm = null;
    //
    // if (this.state.postsFormShown) {
    //   postsForm = (
    //     <section className="NewPost">
    //       <p>New post form will be here</p>
    //     </section>
    //   );
    // }


    return (
      <Fragment>
        <section className="Joke">
          {this.state.jokes.map(joke => (
            <Post
              key={joke.id}
              value={joke.value}
              // author={post.author}
            />
          ))}
        </section>
         {/*<button className="ToggleButton" onClick={this.togglePostsForm}>*/}
           {/*New post*/}
         {/*</button>*/}
         {/*{postsForm}*/}
        <Button btnType="Danger" click={this.changeJoke}>ADD JOKE</Button>
       </Fragment>
    )
  }
}

export default Blog;
