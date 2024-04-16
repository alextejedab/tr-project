import sprites from '../../img/creditcard_sprite1.png'
import visa from '../../img/selected bank/visa.png'
import mastercard from '../../img/selected bank/mastercard.png'
import plus from '../../img/selected bank/plus.png'
import pulse from '../../img/selected bank/pulse.png'
import redblue from '../../img/selected bank/redblue.png'
import star from '../../img/selected bank/star.png'
import './BankSprites.scss'
import { useEffect } from 'react'
type bankPropType = {
  bank: string;
}
const BankSprites = (props: bankPropType) => {
  const { bank } = props
  const chooseBank = () =>{
    switch(bank) {
    case 'visa': return visa
    case 'mastercard': return mastercard
    case 'plus': return plus
    case 'pulse': return pulse
    case 'redblue': return redblue
    case 'star': return star
    default: return sprites
    }
  }

  useEffect(() => {
  }, [bank])

  return (
    <img className='bank-sprites'alt='sprites' src={chooseBank()}/>
  )
}

export default BankSprites