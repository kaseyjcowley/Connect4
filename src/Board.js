import React, {PropTypes} from 'react';
import range from 'lodash/range';
import classnames from 'classnames';
import './Board.css';
import {RED, BLACK} from './constants';

export const Board = ({pieces}) => (
  <div className="Board">
    {pieces.map((col, colNum) => (
      col.map((row, rowNum) => {
        const slotClasses = classnames('Board__slot', {
          'Board__slot--red': pieces[colNum][rowNum] === RED,
          'Board__slot--black': pieces[colNum][rowNum] === BLACK,
        });

        return (
          <div key={`${colNum}_${rowNum}`} className={slotClasses} />
        );
      })
    ))}
  </div>
);

Board.propTypes = {
  pieces: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number)
  ).isRequired,
};

export const BoardButtons = (props) => (
  <div className="Board__btns">
    {range(0, props.cols).map((colNum) => (
      <div 
        key={`col_${colNum}`}
        className="Board__btn"
        onClick={() => props.addPiece(colNum)}
      />
    ))}
  </div>
);

BoardButtons.propTypes = {
  cols: PropTypes.number.isRequired,
  addPiece: PropTypes.func.isRequired,
};