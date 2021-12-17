import React from 'react'

import './App.css';
import Child from './child.js';
import Child2 from './child2'
import Rates from './rates.js';
import Navigation from './Navigation.js';
import Header from './Header.js';


export const UserContext = React.createContext();

export default function App() {
  const todos = [
    {id: 1, text: 'buy groceries', done: false },
    {id: 2, text: 'do laundry', done: false },
  ]
  const [counter, setCounter] = React.useState(0);

  const text = React.useRef();

  const onFocus = () => {text.current.style.background="#ddf"}
  const onBlur = () => {text.current.style.background="#fff"}


  React.useEffect(() => {
    const myText = text.current
    myText.addEventListener('focus', onFocus)
    myText.addEventListener('blur', onBlur)

    return () => {
      myText.removeEventListener('focus', onFocus)
      myText.removeEventListener('blur', onBlur)
    };

  }, []);

  const [username, setUsername] = React.useState(null);
  const currentUser = {
    username: username,
    loginUser: (_username) => setUsername(_username),
    logoutUser: () => setUsername(null)
  };

  return (
    <div className="App">
      
      <div>
        <h1>Memoization</h1>
        <p>Counter: {counter}</p>
        <Child
          step={1} 
          setCounter = {setCounter}
        />
         <Child
          step={5} 
          setCounter = {setCounter}
        />
        <Child2 
          setCounter = {setCounter}
        />
      </div>
      
      <hr />
      <div>
        <h1> The Context Hook</h1>
        <UserContext.Provider value={currentUser}>
          <Navigation />
          <Header />
        </UserContext.Provider>
      </div>
      <hr/>

      <div>
        <h1>The Ref Hook</h1>
        <input 
          ref={text}
        />


      </div>

      <hr />
    
      <div>
        <h1>The Effect Hook</h1>
        <Rates />
      </div>
      <hr />
      <div>
        <h1>State</h1>
        <p>Counter: {counter}</p>
        <Child
          step={1} 
          setCounter = {setCounter}
        />
         <Child
          step={5} 
          setCounter = {setCounter}
        />
      </div>

      
      <hr />
      
      <div>
        <h1>Rendering</h1>
        { username
          ?
            <h2>Hello {username}!</h2>
          :
            <h2>Hello Stranger!</h2>
        }
        { username && // this is an if condition without an else.
          <p>Logout</p>
        }
        
        <ul>
          { todos.map(todo =>
              <li key={todo.id}>
                {todo.text}
              </li>
          )}
        </ul>
      </div>
    </div>
  );
}

