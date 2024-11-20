export const saveGameToStorage = ({ board, turn }) => {
    try {
      window.localStorage.setItem("board", JSON.stringify(board));
      window.localStorage.setItem("turn", turn);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };
  
  export const resetGameStorage = () => {
    try {
      window.localStorage.removeItem("board");
      window.localStorage.removeItem("turn");
    } catch (error) {
      console.error("Error removing from localStorage:", error);
    }
  };
  