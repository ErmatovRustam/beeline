import React from 'react'
import './Post.css'

const Post = (props) => {

    const style = {
        width: '30px',
        height: '35px',
        display: 'inline'
    }
    return (
        <div id = { props.isLarge ? 'largeBox' : 'box'}>
            <img style={style } src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKqLoqMF1KWdx8dJEX0eaPoPJrJX-oGvYJ9A&usqp=CAU" alt="icon" />
            <h5>{props.title}</h5>
            <h4>{props.cost}{props.term}</h4>
            <h5>Активируйте подписку IVI в Мой Beeline</h5>
            <p>{ props.gb} Гб интернета</p>
            <p>{props.ivi} Гб на IVI</p>
            <p>{ props.call} мин на звонки вне сети</p>
            <p>{ props.webCall} Instagram WhatsApp Telegram</p>
        </div>
    )
}

export default Post
