import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state= {
      selectedColor: '#FFF' // default color: white
    }
  }

  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  genRow = (vals) => (
    //By passing a callback down as a prop, the ColorSelector component was able to cause a change in state in its parent, Matrix
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}