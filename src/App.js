import Header from './components/header/Header.jsx'
import Promo from './components/promo/Promo.jsx'
import PhonePlan from './components/body/phonePlan/PhonePlan.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header className="promoS" />
      {/* <Promo className="promoS" id="promo" /> */}
      <PhonePlan />
    </div>
  )
}

export default App
