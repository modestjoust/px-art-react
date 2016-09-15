import React, {Component} from 'react';
import Canvas from './Canvas';
import $ from 'jquery';

export default class CanvasContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    //  CanvasContainer must mount before we query for height/width, so can't
    //  set state.canvasSize until then => container and canvas rendered twice
    var canvasHeight = $('#canvasContainer').height();
    this.setState({
      canvasSize: canvasHeight
    })
    $('#canvasContainer').width($('#canvasContainer').height());
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize = (e) => {
    $('#canvasContainer').width($('#canvasContainer').height());
    this.setState({
      canvasSize: $('#canvasContainer').height()
    })
  }
  render() {
    return (
      <div id="canvasContainer"
        style = {{
          backgroundColor: '#dddddd',
        }}>
        <Canvas ref="canvas" canvasSize={this.state.canvasSize}
          colorPicked={this.props.colorPicked}
          gridShown={this.props.gridShown}
          canvasCleared={this.props.canvasCleared}
          dirtyCanvas={this.props.dirtyCanvas}/>
      </div>
    );
  }
}
