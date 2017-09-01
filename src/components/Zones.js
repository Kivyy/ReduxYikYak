import React, {Component} from 'react'
import Zone from './Zone'

class Zones extends Component {
  constructor(){
    super()
    this.state = {
      zone: {
        name: '',
        zipCode: ''
      },
      list: [
      ]
    }

    this.updateZone = this.updateZone.bind(this)
    this.addZone = this.addZone.bind(this)
  }

  updateZone(e){
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[e.target.id] = e.target.value
    this.setState({
      zone: updatedZone
    })
  }

  addZone(){
    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.zone)
    this.setState({
      list: updatedList
    })
  }

  render(){

    const listItems = this.state.list.map((zone,i) => {
      return(
        <li><Zone currentZone={zone} /></li>
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
