import './App.css';
import NavigationBar from "./components/Navigationbar"
import Intro from "./components/Intro"
import Tranding from './components/Tranding'
import Superhero from './components/Superhero'

import "./style/LandingPage.css"

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}

      {/* tranding section */}
      <div className='trending'>
        <Tranding />
      </div>
      {/* end of tranding section */}

      {/* superhero section */}
      <div className='superhero'>
        <Superhero />
      </div>
      {/* end of tranding section */}
    </div>
  )
}

export default App
