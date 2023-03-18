const gameboard = (() => {
  let _array = ["", "x", "", "", "x", "", "", "x", ""];

  const checkWin = () => {
    if (_array[0] !== "" && _array[1] !== "" && _array[2] !== "") {
      if (_array[0] === _array[1] && _array[1] === _array[2]) {
        console.log(_array[0]);
      }
    } else if (_array[3] !== "" && _array[4] !== "" && _array[5] !== "") {
      if (_array[3] === _array[4] && _array[4] === _array[5]) {
        console.log(_array[3]);
      }
    } else if (_array[6] !== "" && _array[7] !== "" && _array[8] !== "") {
      if (_array[6] === _array[7] && _array[7] === _array[8]) {
        console.log(_array[6]);
      }
    } else if (_array[0] !== "" && _array[3] !== "" && _array[6] !== "") {
      if (_array[0] === _array[3] && _array[3] === _array[6]) {
        console.log(_array[0]);
      }
    } else if (_array[1] !== "" && _array[4] !== "" && _array[7] !== "") {
      if (_array[1] === _array[4] && _array[4] === _array[7]) {
        console.log(_array[1]);
      }
    } else if (_array[2] !== "" && _array[5] !== "" && _array[8] !== "") {
      if (_array[2] === _array[5] && _array[5] === _array[8]) {
        console.log(_array[2]);
      }
    } else if (_array[0] !== "" && _array[4] !== "" && _array[8] !== "") {
      if (_array[0] === _array[4] && _array[4] === _array[8]) {
        console.log(_array[0]);
      }
    } else if (_array[2] !== "" && _array[4] !== "" && _array[7] !== "") {
      if (_array[2] === _array[4] && _array[4] === _array[7]) {
        console.log(_array[2]);
      }
    }
  };

  return {
    checkWin,
  };
})();

gameboard.checkWin();