import React, {Component} from 'react'

class Zone extends Component {
  render(){
    const zoneProps = this.props.currentZone
    return(
      <div style={styles.container}>
        <h2 style={{maginBottom: 0}}><a style={{textDecoration: 'none', color: 'red'}} href="#">{zoneProps.name}</a></h2>
        <span className="details">Zip Codes: {zoneProps.zipCodes[0]}</span><br/>
        <span className="details"> {zoneProps.numComments}</span>
      </div>
    )
  }
}

const styles = {
  container: {
    padding: 16 ,
    background: '#f9f9f9',
    marginTop: 12,
    border: '1px solid #ddd'
  }
}

export default Zone
