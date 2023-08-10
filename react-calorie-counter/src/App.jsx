import { useState } from 'react'
import appLogo from './assets/kal.png'
import './App.css'

function App() {
  const [food, setFood] = useState('')
  const [calorie, setCalorie] = useState('')

  const [foods, setFoods] = useState([

  ])
  let total = 0;

  const addFood = () => {
    let newFood={};
    newFood = {
      id: foods.length != 0 ? foods[foods.length-1].id+1 : 1,
      food: food,
      calorie: calorie
    }

    const updatesFoods = foods.concat (newFood)
    setFoods(updatesFoods)
  }

  const deleteFood = (id) => {
    setFoods(v => v.filter(f => f.id != id))
  }
  {console.log(foods)}

  return (
    <> 
      <div className="control dashboard">
        <div className="title-wrapper">
          <h1>Calorie Counter</h1>
          <img src={appLogo} className="logo app" alt="App logo" />
        </div>
        <div className="card">
          <input className="food" type="text" placeholder="Food Name" value = {food} onChange={e => setFood (e.target.value)}/><br />
          <input className="calorie" type="number" placeholder="Calorie" value = {calorie} onChange={e => setCalorie (e.target.value)}/><br />
          <br />
          <button onClick={() => addFood()}>Add Food</button>
        </div>
      </div>
      <div className="output dashboard">
        <h1 className="output-title">Foods Name</h1>
        <ol>
            {foods.map((v,i) => {
              total += parseInt(v.calorie)
              return(
                <li key={i}>
                {v.food} - {v.calorie} <button onClick={() => deleteFood(v.id)}>X</button>
              </li>
              )  
            })}
        </ol>
        <div>
          <p className="text-result">Total calories Are <b>{total}</b></p>
        </div>
      </div>
    </>
  )
}

export default App
