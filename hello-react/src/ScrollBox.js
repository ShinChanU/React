import React, { Component } from 'react';


class ScrollBox extends Component {
  render() {
    const style = {
      border: ‘1px solid black‘,
      height: ‘300px‘,
      width: ‘300px‘,
      overflow: ‘auto‘,
      position: ‘relative‘
    };
    <span class="co50">const</span>
    <span class="cd2"> innerStyle </span>
    <span class="co40">=</span>
    <span class="cd2"></span> {
      width: ‘100 %‘,
      height: ‘650px‘,
      background: ‘linear - gradient(white, black)‘
    }
<span class="co50">return</span>
<span class="cd2"> 
(</span>


  <div
    style={style}
    ref={(ref) => { this.box = ref }}>
    <div style={innerStyle} />
  </div>
    );
  }
}



export default ScrollBox;