import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      // send actions up to parent componment
      // Clicking on particular div inside ColorSelector should now set state in Matrix
      let callback = () => this.props.setSelectedColor(str)
      return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}
