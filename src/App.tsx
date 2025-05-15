

import './App.css'
import AutoColor from './components/auto-color'

import ColorBox from './components/color-box'

import CurrentTime from './components/current-time'
import EmojiMessage from './components/emoji-message'
import FakeApi from './components/fake-api'
import HelloUser from './components/hello-user'
import LikeButton from './components/like'
import NomEnDirect from './components/nom-en-direct'
import PageTitle from './components/page-title'
import UserCard from './components/user-card'
import Welcome from './components/welcome'


function App() {
  
  return (
    <div className="p-4">
      <HelloUser prenom="le monde" />
      <CurrentTime/>
      <EmojiMessage emoji="🚀" message="En route vers React !"/>
      <UserCard nom="Juguel Mawisa" email="juguelmawisa@gmail.com" />
      
      <Welcome nom= {"juguel"} age={20} />
      <LikeButton/>
      <NomEnDirect/>
      <ColorBox/>
      <PageTitle/>
      <FakeApi/>
      <AutoColor/>


    </div>   
  )
}

export default App
