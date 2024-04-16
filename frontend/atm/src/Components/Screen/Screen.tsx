import ButtonScreen from '../ButtonScreen/ButtonScreen'
import TopScreen from '../TopScreen/TopScreen'
import './Screen.scss'
import { useEffect, Dispatch, SetStateAction, useState } from 'react'
import axios from 'axios'
type screenProps = {
    screen: string,
    setInput?: Dispatch<SetStateAction<string>>
    text?: string
}

const Screen = (props : screenProps) =>
{
    const {screen, setInput, text} = props

    return (
        <div className="screen">
            <TopScreen screen={screen} setInput={setInput ? setInput : () => {}} text={text}/>
            <ButtonScreen screen={screen} />
        </div>
    )
}

export default Screen