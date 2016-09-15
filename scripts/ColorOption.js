import React, {Component} from 'react';
import $ from 'jquery';

export default class ColorOption extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: props.color,
      gridSize: props.gridSize
    }
  }
  handleClick = (e) => {
    var color = e.target.attributes['color'].value;
    this.props.handleColorSelect(color);
  }
  render() {
    var cellWidth = 100 / this.state.gridSize;
    var widthString = cellWidth + '%'
    var style = {
      backgroundColor: this.state.color,
      width: this.props.width + 'px',
      height: this.props.height + 'px',
    }
    return (
      <div style={style} onClick={this.handleClick} color={this.state.color}>
      </div>
    );
  }
}
