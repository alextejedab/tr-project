import sprites from '../../img/creditcard_sprite1.png'
import visa from '../../img/selected bank/visa.png'
import mastercard from '../../img/selected bank/mastercard.png'
import plus from '../../img/selected bank/plus.png'
import pulse from '../../img/selected bank/pulse.png'
import redblue from '../../img/selected bank/redblue.png'
import star from '../../img/selected bank/star.png'


import './BankSprites.scss'
const BankSprites = () => {
  return (
    <img className='bank-sprites'alt='sprites' src={visa}/>
  )
}

export default BankSprites