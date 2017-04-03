const offsets = [1, 2, 3];

const horizontalWin = (player, pieces, [col, row]) => {
  return (
    offsets.every((offset) => pieces[col+offset] && pieces[col+offset][row] === player) ||
    offsets.every((offset) => pieces[col-offset] && pieces[col-offset][row] === player)
  );
};

const verticalWin = (player, pieces, [col, row]) => {
  return offsets.every((offset) => pieces[col][row+offset] === player);
};

const diagonalWin = (player, pieces, [col, row]) => {
  return (
    (
      pieces[col+1] && pieces[col+1][row+1] === player &&
      pieces[col+2] && pieces[col+2][row+2] === player &&
      pieces[col+3] && pieces[col+3][row+3] === player
    ) || 
    (
      pieces[col+1] && pieces[col+1][row-1] === player &&
      pieces[col+2] && pieces[col+2][row-2] === player &&
      pieces[col+3] && pieces[col+3][row-3] === player
    ) ||
    (
      pieces[col-1] && pieces[col-1][row+1] === player &&
      pieces[col-2] && pieces[col-2][row+2] === player &&
      pieces[col-3] && pieces[col-3][row+3] === player
    ) ||
    (
      pieces[col-1] && pieces[col-1][row-1] === player &&
      pieces[col-2] && pieces[col-2][row-2] === player &&
      pieces[col-3] && pieces[col-3][row-3] === player
    )
  );
};

/**
 * Check if the player has a win.
 * 
 * @param player int
 * @param pieces [][]
 * @param lastUpdatedSlot [int:col, int:row]
 * @return Boolean
 */
export const playerIsWinner = (player, pieces, lastUpdatedSlot) => {
  return (
    horizontalWin(player, pieces, lastUpdatedSlot) ||
    verticalWin(player, pieces, lastUpdatedSlot) ||
    diagonalWin(player, pieces, lastUpdatedSlot)
  );
};