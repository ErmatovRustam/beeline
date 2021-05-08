import React from 'react'
import './Header.css'

 const Header = () => {
     return (
        <div id = 'head'>
        <div id = 'header'>
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
         <div className = 'promo'>
             <div className='menu'>
                 <ul>
                     <li ><img id = 'logo' src="https://beeline.kg/webfiles/1620042459558/dist/images/logo.svg" alt="logo" /></li>
                     <li>Перейти в Билайн</li>
                     <li>Тарифы</li>
                     <li>Услуги</li>
                     <li>Пополнить баланс</li>
                     <li>Приложения</li>
                     <li>Еще</li>
                 </ul>
                 <button>Войти</button>
            </div>
            
            {/* 2 div with text and image */}
            <div className = 'textImg'>
                <div className="text-promo">
                    <h2>Online Cinema IVI</h2>
                    <p>More than 100 000 films and episodes for free in up to 5 devices</p>
                    <button id = 'ivi'>Бесплатно на 14 дней</button>
                    <a href="https://beeline.kg">Как подключить?</a>
                </div>

                <div className="image-promo">
                    <img src="https://ivi.beeline.kg/images/ivi_main.png" alt="ivi-popcorn"/>
                </div>
            </div>
             </div>
             </div>
    )
 }

export default Header;
