import './Button.scss';

type ButtonPropsType = {
  handleOnClick: () => void
}

function Button({handleOnClick} : ButtonPropsType) {
  return (
    <div className='button' onClick={() => handleOnClick()}></div>
  )
}

export default Button