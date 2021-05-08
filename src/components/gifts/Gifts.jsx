import React from 'react'
import './Gifts.css'
import RedeemIcon from '@material-ui/icons/Redeem';
import StarsIcon from '@material-ui/icons/Stars';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import DevicesIcon from '@material-ui/icons/Devices';
import CallIcon from '@material-ui/icons/Call';

const Gifts = () => {
    return (
        <section id = 'gifts-wrapper'>
            <div className="gifts">
                <div className = 'icon'><RedeemIcon /></div>
                <div className = 'title'>Всегда множество подарков и акций</div>
            </div>
            <div className="gifts">
                 <div className = 'icon'><StarsIcon /></div>
                <div className = 'title'>Награды за действия</div>
            </div>
            <div className="gifts">
                <div className = 'icon'> <MoneyOffIcon /></div>
                <div className = 'title'>Скидочные и специальные предложения только для вас </div>
            </div>
            <div className="gifts">
                <div className = 'icon'><DevicesIcon /></div>
                <div className = 'title'>Простое и удобное управление своим номером и номерами близких</div>
            </div>
            <div className="gifts">
                <div className = 'icon'><CallIcon /></div>
                <div className = 'title'>И связь с компанией Beeline в любое время </div>
            </div>
        </section>
    )
}

export default Gifts
