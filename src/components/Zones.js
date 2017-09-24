import React, {Component} from 'react'
import Zone from './Zone'
import superagent from 'superagent'
import {APIManager} from '../utility/index'

class Zones extends Component {
  constructor(){
    super()
    this.state = {
      zone: {
        name: '',
        zipCodes: ''
      },
      list: []
    }

    this.updateZone = this.updateZone.bind(this)
    this.addZone = this.addZone.bind(this)
  }

  componentDidMount(){
    APIManager.get('/api/zone', null, (err,response) => {
      if(err) {
        alert("ERROR:" + err)
        return
      }
      this.setState({
        list: response.results
      })
    })
  }

  updateZone(e){
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[e.target.id] = e.target.value
    this.setState({
      zone: updatedZone
    })
  }

  addZone(){
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone['zipCodes'] = updatedZone.zipCode.split(",")
    console.log(updatedZone);
    APIManager.post('/api/zone', updatedZone, (err,response) => {
      if(err) {
        alert('ERROR:' + err.message)
        return
      }
      let updatedList = Object.assign([],this.state.list)
      updatedList.push(response.results);
      this.setState({
        list: updatedList
      })
    })
  }

  render(){

    const listItems = this.state.list.map((zone,i) => {
      return(
        <li><Zone key={i} currentZone={zone} /></li>
      )
    })

    return(
      <div>
        <ol>
          {listItems}
        </ol>

          <input id="name" onChange={this.updateZone} className="form-control" type="text" placeholder="name"/><br />
          <input id="zipCode" onChange={this.updateZone} className="form-control" type="text" placeholder="zip codes"/><br />
          <button onClick={this.addZone} className="btn btn-danger"> Add Zone </button>
      </div>
    )
  }
}

export default Zones
