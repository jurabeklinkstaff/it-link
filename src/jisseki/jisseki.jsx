import './jisseki.css'
import hitachi from '../imgs/hitachi.jpeg'
import axload from '../imgs/axload.png'
import free from '../imgs/freee.jpeg'
import ttdc from '../imgs/TTDC.jpeg'



const Jisseki = () => {

    return (
        <div className='jisseki'>
            <h1>実績</h1>
            <span></span>
            <div className='clients'>
                <img src={axload} alt="" />
                <img src={free} alt="" />
                <img src={hitachi} alt="" />
                <img src={ttdc} alt="" />
            </div>
            <h2>50社以上の企業様に満足いただいています。</h2>
        </div>
    );

}

export default Jisseki;