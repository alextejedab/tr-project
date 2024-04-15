
import atm_sign from './img/atm_sign.png'
import sign_graffiti from './img/graffiti.png'
import graffiti from './img/sticker_graf.png'
import systems from './img/systems.png'
import './App.scss';
import Button from './Components/Button/Button';
import BankSprites from './Components/BankSprites/BankSprites';
import LoginScreen from './Components/Screen/Screen';

function App()
{
  const onClick = () => {
    console.log('click')
  }

  return (
    <div className="App">
      <div className='header'><img className='atm-sign' alt='atm-sign' src={atm_sign} /><img className='sign-graffiti' alt='sign-graffiti' src={sign_graffiti} /></div>
      <div className='sprites'><BankSprites/></div>
      <div className='buttons-left'>
      <Button handleOnClick= {onClick}/>
      <Button handleOnClick= {onClick}/>
      <Button handleOnClick= {onClick}/>
      <Button handleOnClick= {onClick}/>
      </div>
      <div className='buttons-right'>
      <Button handleOnClick= {onClick}/>
      <Button handleOnClick= {onClick}/>
      <Button handleOnClick= {onClick}/>
      <Button handleOnClick= {onClick}/> 
      </div>
      <div className='screen'><LoginScreen/></div>
      <div className='bottom'><img className='graffiti-sticker' alt='graffiti-sticker' src={graffiti} /><img className='systems' alt='systems' src={systems} /></div>
    </div>
  );
}

export default App;
