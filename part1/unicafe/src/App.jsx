import { useState } from "react"
  
const Statisticsline=({text,data})=>{
  return(
    <>
    <tr>
    <td>{text}</td>
    <td>{data}</td>
    </tr>
    </>
  )
}

const Statistics=({good,neutral,bad})=>{
  const averagecal=good>bad ?good-bad:bad-good
  const average=(averagecal/(good+neutral+bad)).toFixed(1)
  const positive=(good/(good+neutral+bad)*100).toFixed(1)
  const total=good+neutral+bad
  if(good===0 && neutral===0 && bad===0){
    return(
      <h4>No Feedbacks Given</h4>
    )
  }
  return(
    <>
    <table>
      <tbody>
      <Statisticsline text="Good" data={good}/>
      <Statisticsline text="Neutral" data={neutral}/>
      <Statisticsline text="Bad" data={bad}/>
      <Statisticsline text="Total" data={total}/>
      <Statisticsline text="Average" data={average}/>
      <Statisticsline text="Positive" data={positive}/>
      </tbody>
    </table>
    </>
  )
}

function App() {
  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)
  return (
    <>
    <h1>Give Feedback</h1>
    <button onClick={()=>setGood(good+1)}>Good</button>
    <button onClick={()=>setNeutral(neutral+1)}>Neutral</button>
    <button onClick={()=>setBad(bad+1)}>Bad</button>
    <h2>Statistics</h2>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
