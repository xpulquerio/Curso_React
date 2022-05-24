//CSS 
import './App.css';

// React 
import { useCallback, useEffect, useState } from "react";

//data 
import { wordsList } from './data/words';
// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';
const guessesQty = 3;

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState('');

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);



  const pickedWordAndCategory = useCallback(() => {
    //pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { category, word };
  }, [words]);

  //starts the secret word game
  const startGame = useCallback(() => {
    //Clear all letters
    clearLetterStates();

    //pick word and pick category
    const { category, word } = pickedWordAndCategory();

    //create ana array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    //fill stats
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickedWordAndCategory]);

  // process letter input
  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase();

    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove a chance
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1)

    }

  };

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  //check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      //reset all states
      clearLetterStates()
      setGameStage(stages[2].name);
    }

  }, [guesses])

  //check if guesses ended
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)] //Transformar um array de letras da palavras em um array de letras únicas para verificar se todas já foram "advinhadas!"

    //win condition
    if (guessedLetters.length === uniqueLetters.length) {

      //add score
      setScore((actualScore) => actualScore += 100);

      //restart with a new word
      startGame();

    }
  }, [guessedLetters, letters, startGame])



  //restarts the game
  const retry = () => {
    setGuesses(guessesQty);
    setScore(0);

    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score} />}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
