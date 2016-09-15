import React, {Component} from 'react';
import ColorPicker from './ColorPicker';
import $ from 'jquery';

export default class Toolbox extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    var toolboxWidth = $('#toolbox').width();
    this.setState({
      toolboxWidth: toolboxWidth
    })
    window.addEventListener('resize', this.handleResize);
  }
  handleResize = (e) => {
    this.setState({
      toolboxWidth: $('#toolbox').width()
    })
  }
  handleColorSelect = (color) => {
    this.props.handleColorSelect(color)
  }
  handleGridToggle = () => {
    this.props.handleGridToggle();
  }
  handleCanvasClear = () => {
    this.props.handleCanvasClear();
  }
  render() {
    var style = {
      width: '30%',
      backgroundColor: '#dddddd',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center'
    }
    var buttonStyle = {
      height: '10%', width: '50%', margin: 'auto'
    }
    var gridButtonText = this.props.gridShown ? 'Grid Off' : 'Grid On';
    return (
      <div id="toolbox" style={style}>
        <ColorPicker handleColorSelect={this.handleColorSelect}
          toolboxWidth={this.state.toolboxWidth}/>
        <button style={buttonStyle} onClick={this.handleGridToggle}>{gridButtonText}</button>
        <button style={buttonStyle} onClick={this.handleCanvasClear}>Clear</button>
      </div>
    );
  }
}
