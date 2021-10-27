import './App.css';
import {useState} from 'react'
function App() {
  
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  function filterRedFruits(){
    const redFruits = fruits.filter((item) => {return item.color === 'red'})
    setFruits(redFruits)
  }
  const totalPrice = fruits.reduce((valorAnterior, valorAtual) => {
     return valorAtual.price + valorAnterior
  }, 0)

  return (
    <div className="App">
      <span>Valor total: ${totalPrice},00</span> 
      <span className='spanBigFather'>{fruits.map((item) => {return <span>{item.name}</span>})}</span>
      <button onClick={filterRedFruits}>Clique aqui</button>
    </div>
  );
}

export default App;
