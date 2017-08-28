import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Zone from './components/Zone'

class App extends Component {
  render(){
    return(
      <div>
        <Zone/>
      </div>
    )
  }
}

ReactDOM.render(<App /> , document.getElementById('root'))
