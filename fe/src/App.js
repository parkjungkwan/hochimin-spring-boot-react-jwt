import React, {useState} from 'react'
import Counter from './cmm/container/Counter'
import Login from './sec/container/Login'
import SignUp from './uss/container/SignUp'
import Home from './cmm/container/Home'
import {Route} from 'react-router-dom'
const App = () => {
  return(<>
  <Route path="/" component={Home} exact/>
  <Route path="/Counter" component={Counter}/>
  <Route path="/Login" component={Login}/>
  <Route path="/SignUp" component={SignUp}/>
  </>)
}

export default App