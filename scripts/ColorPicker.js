import React, {Component} from 'react';
import ColorOption from './ColorOption'

export default class ColorPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: [
        '#000000',
        '#111111',
        '#222222',
        '#333333',
        '#444444',
        '#555555',
        '#666666',
        '#777777',
        '#888888',
        '#999999',
        '#aaaaaa',
        '#bbbbbb',
        '#cccccc',
        '#dddddd',
        '#eeeeee',
        '#ffffff'
      ]
    }
    // this.handleColorSelect = this.handleColorSelect.bind(this)
  }
  handleColorSelect = (color) => {
    this.props.handleColorSelect(color);
  }
  render() {
    // cellWidth = container width divided by number colors, 2 rows
    let cellWidth = this.props.toolboxWidth / this.state.numColors * 2;

    let colorOptions = [];
    for (let i = 0; i < this.state.colors.length; i++)
      colorOptions.push(<ColorOption key={i} width={cellWidth} height={cellWidth}
        color={this.state.colors[i]}
        handleColorSelect={this.handleColorSelect}/>)

    let style = {
      backgroundColor: '#bbbbbb',
      // width: '75%',
      margin: 'auto',
      display: 'flex',
      flexWrap: 'wrap'
    }
    return (
      <div style={style}>
        {colorOptions}
      </div>
    );
  }
}
