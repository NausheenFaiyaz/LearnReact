// import { useContext } from 'react';
import './App.css';
// import Counter from './components/Counter';
// import { CounterContext } from './context/Counter';
import Item from './components/Item';
import Cart from './components/Cart';
function App() {

  // const counterState= useContext(CounterContext);

  // console.log('Context', counterState);
  
  return (
    <div className="App">
      {/* <h1>Count is {counterState.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/> */}

      <Item name="MacBook Air Pro" price={999}/>
      <Item name="Pendrive" price={39}/>
      <Item name="Iphone 16" price={799}/>
      <Cart/>
    </div>
  );
}

export default App;
