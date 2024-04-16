
import atm_sign from './img/atm_sign.png'
import sign_graffiti from './img/graffiti.png'
import graffiti from './img/sticker_graf.png'
import systems from './img/systems.png'
import './App.scss';
import Button from './Components/Button/Button';
import BankSprites from './Components/BankSprites/BankSprites';
import Screen from './Components/Screen/Screen';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

type userType = {
  pin: string,
  name: string,
  bank: string,
  balance: number
}

function App()
{

  const initialUser = {
    pin: '0000',
    name: 'user',
    bank: 'sprites',
    balance: 0
  }
  const [user, setUser] = useState(initialUser)
  const [screen, setScreen] = useState('welcome')
  const [input, setInput] = useState('')
  const [operation, setOperation] = useState(0)
  const [bank, setBank] = useState('sprites')

  /* 
  0 welcome
  1 insert / re insert pin
  2 main
  3 balance
  4 withdraw
  5 deposit
  
  
  */

  useEffect(() =>
  {
  }, [])

  const onClick = () =>
  {
    console.log('click')
  }

  const clickBackButton = () =>
  {
    if (operation === 1 || operation === 2)
    {
      setScreen('welcome')
      return
    } else
    {
      setScreen('main')
      setOperation(2)
    }
  }


  const clickExitButton = () =>
  {
    if (screen === 'main')
    {
      setScreen('welcome')
    }
  }

  const clickConfirmButton = async () =>
  {
    var usr: userType = initialUser;
    if (operation === 0)
    {
      await axios.get('http://localhost:3001/user?pin=' + input).then(
        res =>
        {
          usr = res.data
        })
      if (usr)
      {
        setUser(usr)
        setBank(usr.bank)
        setScreen('main')
        setOperation(2)
        setInput('')
      }
      return
    }
    let url = ''
    if (operation === 4)
      {
      url = 'http://localhost:3001/balance?pin=' + user.pin + '&qty=-' + input
      }else {
        url = 'http://localhost:3001/balance?pin=' + user.pin + '&qty=' + input
      }
      await axios.get(url).then(
        res =>
        {
          usr = res.data
        })

      if (usr)
      {
        setUser(usr)
        setScreen('main')
        setOperation(2)
      }
  }

  const clickBalanceButton = () =>
  {
    if (operation === 2)
    {
      setScreen('balance')
      setOperation(3)
    }
  }


  const clickWithdrawButton = () =>
  {
    if (operation === 2)
    {
      setScreen('insert')
      setOperation(4)
    }
  }

  const clickDepositButton = () =>
  {
    if (operation === 2)
    {
      setScreen('insert')
      setOperation(5)
    }
  }



  const clickPINButton = () =>
  {
    setScreen('insert')
    setInput('')
  }

  return (
    <>
      <div className="App">
        <div className='header'><img className='atm-sign' alt='atm-sign' src={atm_sign} /><img className='sign-graffiti' alt='sign-graffiti' src={sign_graffiti} /></div>
        <div className='sprites'><BankSprites bank={bank} /></div>
        <div className='buttons-left'>
          <Button handleOnClick={onClick} />
          <Button handleOnClick={onClick} />
          <Button handleOnClick={() => clickWithdrawButton()} />
          <Button handleOnClick={() =>
          {
            if (screen === 'main')
            {
              clickDepositButton()
            } else
              clickBackButton()
          }} />
        </div>
        <div className='buttons-right'>
          <Button handleOnClick={onClick} />
          <Button handleOnClick={clickExitButton} />
          <Button handleOnClick={() => clickBalanceButton()} />
          <Button handleOnClick={() =>
          {
            if (screen === 'insert'){
              clickConfirmButton()
              setInput('0')
            }
            else
            {
              setOperation(0)
              setInput('0')
              setBank('sprites')
              clickPINButton()
            }
          }
          } />
        </div>
        <div className='screen'>
          {screen === 'welcome' && <Screen screen={'welcome'} setInput={setInput} />}
          {screen === 'main' && <Screen screen={'main'} setInput={setInput} />}
          {screen === 'insert' && <Screen screen={'insert'} setInput={setInput} />}
          {screen === 'balance' && <Screen screen={'balance'} setInput={setInput} text={user.balance.toString()} />}
        </div>
        <div className='bottom'><img className='graffiti-sticker' alt='graffiti-sticker' src={graffiti} /><img className='systems' alt='systems' src={systems} /></div>
      </div>
    </>
  );
}

export default App;
