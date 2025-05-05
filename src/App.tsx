

import './App.css'
import CurrentTime from './components/current-time'
import HelloUser from './components/hello-user'

function App() {
  

  return (
    <div className="p-4">
      <HelloUser prenom="CoachDev" />
      <CurrentTime/>

    </div>
      
  )
}

export default App
