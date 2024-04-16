import React, { Dispatch, SetStateAction } from 'react'


type topScreenProps = {
  screen: string,
  text?: string
  setInput: Dispatch<SetStateAction<string>>
}

const TopScreen = (props : topScreenProps) => {

  const {screen,text, setInput} = props

  return (
  <div className="container-1">
    {(screen === 'insert') && (<input placeholder='insert value' onChange={(e) => {setInput(e.target.value)}}/>)}
    {(screen === 'balance') && (<p>Balance: {text}</p>)}
    </div>
  )
}

export default TopScreen