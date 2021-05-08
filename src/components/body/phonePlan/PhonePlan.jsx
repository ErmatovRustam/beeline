import React from 'react'
import './PhonePlan.css'
import Post from './posts/Post'

const PhonePlan = () => {
    return (
        <div className = 'phonePlan'>
            <h3 id='title'>Бесплатная и безлимитная подписка IVI навсегда — в вашем тарифе!</h3>
            <div className = 'posts'>
                <Post isLarge= {false} title='Бирге для интернета + IVI' cost='390 с' term='/ неделя' gb={30} ivi={10} call={10} webCall={2 }/>
                <Post isLarge= {false} title='Бирге для интернета PRO + IVI' cost='490 с' term='/ неделя' gb={40} ivi={15} call={40} webCall={2} />
                <Post isLarge= {true} title='Подписка ivi еще на 30 дней бесплатно' cost='200 с' term='/ 30 дней' note = 'еще 30 дней бесплатной подписки онлайн-кинотеатра' />
            </div>
        </div>
    )
}

export default PhonePlan
