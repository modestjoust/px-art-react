import React, {Component} from 'react';
import Cell from './Cell';

export default class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gridSize: 16,
      canvasSize: props.canvasSize
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      canvasSize: nextProps.canvasSize
    })
  }
  render() {
    var cellWidth = this.props.gridShown ?
      (this.state.canvasSize - this.state.gridSize) / this.state.gridSize
      : this.state.canvasSize / this.state.gridSize;
    var cellHeight = this.props.gridShown ?
      (this.state.canvasSize - this.state.gridSize) / this.state.gridSize
      : this.state.canvasSize / this.state.gridSize;

    let cells = [];
    for (var i = 0; i < this.state.gridSize; i++)
      for (var j = 0; j < this.state.gridSize; j++) {
        cells.push(<Cell ref={"cell"+(i*this.state.gridSize + j)}
          key={i*this.state.gridSize + j}
          gridSize={this.state.gridSize}
          width={cellWidth} height={cellHeight}
          colorPicked={this.props.colorPicked}
          gridShown={this.props.gridShown}
          canvasCleared={this.props.canvasCleared}
          dirtyCanvas={this.props.dirtyCanvas}/>)
      }
    return (
      <div style={{
        width: this.state.canvasSize + 'px',
        height: this.state.canvasSize + 'px',
        backgroundColor: '#bbbbbb',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {cells}
      </div>
    );
  }
}
