import { useState } from "react"

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected,setSelected]=useState(0)
  const [point,setPoint]=useState(new Array(anecdotes.length).fill(0))
  const maxpoint=point.indexOf(Math.max(...point))
  const random=Math.floor(Math.random()*anecdotes.length)
  const addvote=()=>{
    const points=[...point];
    points[selected]+=1;
    setPoint(points);
  }
  const Button=({handleClick,text})=>{
    return(
      <>
      <button onClick={handleClick}>{text}</button>
      </>
    )
  }

  return (
    <>
    <h1>{anecdotes[selected]}</h1>
    <h3>has {point[selected]} votes</h3>
    <Button handleClick={addvote} text="Vote"/>
    <Button handleClick={()=>setSelected(random)} text="Next Anecdotes"/>
    <h1>Anecdotes with most votes</h1>
    <p>{anecdotes[maxpoint]}</p>
    <p>has {point[maxpoint]} votes</p>
    </>
  )
}

export default App
