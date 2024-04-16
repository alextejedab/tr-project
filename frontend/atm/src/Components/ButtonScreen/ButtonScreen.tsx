import React, { useEffect } from 'react'

type buttonScreenProps = {
    screen: string;
}
const ButtonScreen = (props: buttonScreenProps) =>
{
    const {screen} = props

    useEffect(() => {

    }, [])

    const insertScreens = ['login', 'withdrawal', 'deposit']
    const textScreens = ['welcome']
    return (
        <div className="container-3">
            <div className="s-button right"><p></p></div>
            <div className="s-button left"><p></p></div>
            <div className="s-button right"><p></p></div>
            <div className="s-button left">
            {(screen === 'main' && <p>Exit---</p>)}
            </div>
            <div className="s-button right">
            {(screen === 'main' && <p>---Withdraw</p>)}
            </div>
            <div className="s-button left">
                {(screen === 'main' && <p>Balance---</p>)}
            </div>
            <div className="s-button right">
                {(screen === 'main' && <p>---Deposit</p>)}
                {(screen === 'insert' && <p>---Back</p>)}
                {(screen === 'balance' && <p>---Back</p>)}
            </div>
            <div className="s-button left">
                {(screen == 'main' && (<p>Re-Enter PIN---</p>))}
                {(screen == 'welcome' && (<p>Enter PIN---</p>))}
                {(screen == 'insert' && (<p>Confirm---</p>))}
            </div>
        </div>
    )
}

export default ButtonScreen