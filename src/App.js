import React, { Component } from 'react';
import range from 'lodash/range';
import {BoardButtons, Board} from './Board';
import './App.css';
import {playerIsWinner} from './helpers';
import {
  BOARD_COLS,
  BOARD_ROWS,
  EMPTY,
  PLAYER_1,
  PLAYER_2,
  PLAYER_1_COLOR,
  PLAYER_2_COLOR,
} from './constants';

export class App extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      player: PLAYER_1,
      lastUpdatedSlot: [],
      pieces: range(0, BOARD_COLS).map(() =>
        range(0, BOARD_ROWS).map(() => EMPTY)
      ),
    };

    this.addPiece = this.addPiece.bind(this);
  }

  addPiece(colNum) {
    const pieces = this.state.pieces.slice(0);
    const rowNum = pieces[colNum].lastIndexOf(EMPTY);
    const isPlayer1 = this.state.player === PLAYER_1;

    if (rowNum === -1) {
      return;
    }

    pieces[colNum][rowNum] = isPlayer1 ? PLAYER_1_COLOR : PLAYER_2_COLOR;

    this.setState({
      player: isPlayer1 ? PLAYER_2 : PLAYER_1,
      lastUpdatedSlot: [colNum, rowNum],
      pieces,
    }, () => {
      console.log('called');
      if (playerIsWinner(this.state.player, pieces, [colNum, rowNum])) {
        alert(`Player ${this.state.player} wins!`);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <BoardButtons cols={BOARD_COLS} addPiece={this.addPiece} />
        <Board pieces={this.state.pieces} />
      </div>
    );
  }
}
