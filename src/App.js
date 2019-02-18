import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends, score: 0, topScore: 0
  };

  componentDidMount() {
    this.setState({friends:this.shuffleData(this.state.friends)})
  };

  shuffleData = friends => {
    let i = friends.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = friends[i];
      friends[i] = friends[j];
      friends[j] = temp;
      i--;
    }
    return friends;
  };

  // guess = x => {
  // };
  // guessIncorrect = x => {
  // };
  // handleClick = id => {make a copy of friends.json arry using map - new variable to hold id temp
  // compare what was clicked to the random one was chosen(id) call the above functions within this 
  // }
  // reset = x => {
  // }

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game!</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
