import React from 'react'
import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> 

const Footer = () => {
    return (
        <div className = 'footer'>
            <div id="copyRight">
                &copy; 2021, Beeline. Все права защищены
            </div>
            <div id="info">
                <p className = 'contact'>+996 (775) 58 0611</p>
                <p className = 'contact'>Справочная *611</p>
                <p className = 'contact' id = 'email'>answer@beeline.kg</p>
            </div>
            <div id="social">
                <InstagramIcon className = 'icons' />
                <FacebookIcon className = 'icons'  />
                <YouTubeIcon  className = 'icons'  />
                <TelegramIcon className = 'icons'  />
                <TwitterIcon  className = 'icons'  />
                <WhatsAppIcon className = 'icons'  />
            </div>
        </div>
    )
}

export default Footer
