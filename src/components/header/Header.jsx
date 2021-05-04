import React from 'react'
import './Header.css'

 const Header = () => {
    return (
        <div className = 'header'>
            <ul className = 'left-header'>
                <li>Помощь </li>
                <li>О компании</li>
                <li>Карта офисов</li>
                <li>Акции и новости</li>
                <li>Beeline Рахмат</li>
            </ul>
            <ul className = 'right-header'>
                <li>Рус / Кыр</li>
                <li>Частным лицам / Бизнесу</li>
            </ul>
        </div>
    )
 }

export default Header;
