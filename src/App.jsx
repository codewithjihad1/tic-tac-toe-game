import './App.css'
import { useState } from 'react';
import music from './assets/music.mp3';
import trunMusic from './assets/ting.mp3';
import gameOverMusic from './assets/gameover.mp3';
import useSound from 'use-sound';
import excitedImg from './assets/excited.gif';
import Footer from './Footer';
import drawImg from './assets/draw.png';

const App = () => {
  const [count, setCount] = useState(0);
  const [win, setWin] = useState(false);
  const [playSound, {stop}] = useSound(music);
  const [trunSound] = useSound(trunMusic);
  const [gameOverSound] = useSound(gameOverMusic);
  const [gameData, setGameData] = useState(['','','','','','','','','']);
  const [winer, setWiner] = useState('');

  const handleClick = (e, pos) => {
    if(win) return 0;

    if(count%2 === 0 && e.target.innerHTML === '') {
      gameData[pos] = 'x';
      e.target.innerHTML = `<span>X</span>`;
      setCount(count+1);
      trunSound();
      checkWin();
    }else if(e.target.innerHTML === ''){
      gameData[pos] = 'o';
      e.target.innerHTML = `<span>O</span>`;
      setCount(count+1);
      trunSound();
      checkWin();
    }
  }

  const winCon = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWin = () => {
    console.log(gameData);
    winCon.forEach(e => {
      if(gameData[e[0]] === 'x' && gameData[e[1]] === 'x' && gameData[e[2]] === 'x') {
        setWin(true);
        setWiner("Winner is X (❁´◡`❁)");
      }
      if(gameData[e[0]] === 'o' && gameData[e[1]] === 'o' && gameData[e[2]] === 'o') {
        setWin(true);
        setWiner("Winner is O (❁´◡`❁)");
      }
    })
  }


  if(win) {
    playSound();
  }

  // Game reset handler
  const handleReset = () => {
    window.location.reload(false);
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h2 className='text-[30px] mb-5'>Tic Tac Toe Game for <span className='text-sky-400'>React.js</span></h2>

        <div className="board grid grid-cols-3 max-w-[310px] w-full gap-2">
          <div className="box" onClick={(e) => handleClick(e, 0)}></div>
          <div className="box" onClick={(e) => handleClick(e, 1)}></div>
          <div className="box" onClick={(e) => handleClick(e, 2)}></div>
          <div className="box" onClick={(e) => handleClick(e, 3)}></div>
          <div className="box" onClick={(e) => handleClick(e, 4)}></div>
          <div className="box" onClick={(e) => handleClick(e, 5)}></div>
          <div className="box" onClick={(e) => handleClick(e, 6)}></div>
          <div className="box" onClick={(e) => handleClick(e, 7)}></div>
          <div className="box" onClick={(e) => handleClick(e, 8)}></div>
        </div>

        {win &&
          <div>
            <h3 className='mt-5 text-[30px]'>{winer} </h3>
            <div>
              <img src={excitedImg} alt="Win Gif" />
            </div>          
            <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-8' onClick={handleReset}>New Game</button>
          </div>
        }

        {count === 9 && !win && 
          <div>
            <h3 className='mt-5 text-[30px]'>Match is Draw </h3>
            <div>
              <img className='w-[160px]' src={drawImg} alt="Draw img" />
            </div> 
            <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-8' onClick={handleReset}>Reset Game</button>
          </div>
        }

      </main>
      <Footer/>
    </>
    
  )
}

export default App
