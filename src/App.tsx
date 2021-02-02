import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() { 
  const [count, setCount] = useState<number>(0);
  // console.log(match);
  // enum Color {
  //   Red = 1,
  //   Green = 'Green',
  //   Blue = 'Blue',
  // }
  // let c: Color = Color.Red;
  enum Color {
    Red = 1,
    Green,
    Blue,
  }
  let colorName: string = Color[2];
  console.log(colorName);
  useEffect(() => {
    const interval = setInterval(()=>{
      setCount((count)=>count + 1);
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  }, [count])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React + {count}
        </a>
      </header>
    </div>
  );
}

export default App;
