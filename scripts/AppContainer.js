import React, {Component} from 'react';
import CanvasContainer from './CanvasContainer';
import Toolbox from './Toolbox'

export default class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorPicked: '#ffffff',
      gridShown: true,
      canvasCleared: true
    }
    // this.handleColorSelect = this.handleColorSelect.bind(this)
    // this.handleGridToggle = this.handleGridToggle.bind(this)
    // this.handleCanvasClear = this.handleCanvasClear.bind(this)
    // this.handleDirtyCanvas = this.handleDirtyCanvas.bind(this)
  }
  handleColorSelect = (color) => {
    this.setState({
      colorPicked: color
    })
  }
  handleGridToggle = () => {
    this.setState({
      gridShown: !this.state.gridShown
    })
  }
  handleCanvasClear = () => {
    this.setState({
      canvasCleared: true
    })
  }
  handleDirtyCanvas = () => {
    this.setState({
      canvasCleared: false
    })
  }
  render() {
    return (
      <div
        style = {{
          backgroundColor: '#eeeeee',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
        <CanvasContainer ref="canvasContainer"
          colorPicked={this.state.colorPicked}
          gridShown={this.state.gridShown}
          canvasCleared={this.state.canvasCleared}
          dirtyCanvas={this.handleDirtyCanvas} />
        <Toolbox handleColorSelect={this.handleColorSelect}
          handleGridToggle={this.handleGridToggle}
          handleCanvasClear={this.handleCanvasClear} />
      </div>
    );
  }
}
