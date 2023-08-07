
import './Button.css';

const Button = ({symbol,color='#5c5c5c',handleClick}) => {
    
    return (
        <div 
        onClick={() => handleClick(symbol)} 
        className="calc--buttons" 
        style={{backgroundColor:color}}>
            {symbol}
        </div>

    )
    }

export default Button;