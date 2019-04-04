import React from 'react';
import Square from './Square';


class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
      value={this.props.squares[i]}
      key={i}
      onClick={() => this.props.onClick(i)} />
    );
  }

  createBoard = () => {
    const board = [];
    let squareCounter = 0;

    for (let i = 0; i < 3; i++) {
      const children = [];
      for (let j = 0; j < 3; j++) {
        children.push(this.renderSquare(squareCounter++))
      }
      board.push(<div className="board-row">{children}</div>)
    }
    return board;
  }

  render() {
    return (
      <div>
        {this.createBoard()}
      </div>
    );
  }
}

export default Board;
