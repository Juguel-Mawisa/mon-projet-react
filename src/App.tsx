

import './App.css'
import Button from './components/button'

import CurrentTime from './components/current-time'
import EmojiMessage from './components/emoji-message'
import HelloUser from './components/hello-user'
import UserCard from './components/user-card'


function App() {
  
  return (
    <div className="p-4">
      <HelloUser prenom="le monde" />
      <CurrentTime/>
      <EmojiMessage emoji="🚀" message="En route vers React !"/>
      <UserCard nom="Juguel Mawisa" email="juguelmawisa@gmail.com" />
      <Button/>
    </div>   
  )
}

export default App
