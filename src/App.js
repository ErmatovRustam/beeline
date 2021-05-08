import Header from './components/header/Header.jsx'
import PhonePlan from './components/body/phonePlan/PhonePlan.jsx'
import PhoneApp from './components/body/phoneApp/PhoneApp.jsx'
import Gifts from './components/gifts/Gifts.jsx'
import FootNote from './components/footNote/FootNote.jsx'
import Footer from './components/footer/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header className="promoS" />
      <PhonePlan />
      <PhoneApp />
      <Gifts />
      <FootNote />
      <Footer />
    </div>
  )
}

export default App
