import Menu from './Components/Menu'
import Content from './Components/Content'
import Hero from './Components/Hero'
import MySelfDescription from './Components/MyselfDescription'
import './App.css'

function App () {
  return (
    <div className='app'>
      <Menu />
      <Content>
        <Hero />
        <MySelfDescription />
      </Content>
    </div>
  )
}

export default App
