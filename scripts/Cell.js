import React, {Component} from 'react';
import $ from 'jquery';

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gridSize: props.gridSize,
      color: '#cccccc'
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.canvasCleared) {
      this.setState({
        color: '#cccccc'
      })
    }
  }
  // componentDidUpdate() {
    //componentDidUpdate
  // }
  // componentWillUpdate() {
    //componentWillUpdate
  // }
  handleClick = (e) => {
    this.setState({
      color: this.props.colorPicked
    })
    if (this.props.canvasCleared)
      this.dirtyCanvas();
  }
  clearColor = () => {
    this.setState({
      color: '#cccccc'
    })
  }
  dirtyCanvas() {
    this.props.dirtyCanvas()
  }
  render() {
    var cellWidth = 100 / this.state.gridSize;
    var widthString = cellWidth + '%'
    var style = {
      backgroundColor: this.state.color,
      width: this.props.width + 'px',
      height: this.props.height + 'px',
      borderRight: this.props.gridShown ? 'solid #dddddd 1px' : '',
      borderBottom: this.props.gridShown ? 'solid #dddddd 1px' : ''
    }
    return (
      <div style={style} onClick={this.handleClick}>
      </div>
    );
  }
}
