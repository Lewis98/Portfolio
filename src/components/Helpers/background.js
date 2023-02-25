import React, { Component, useState } from 'react'
import img1 from '../../background/1.jfif';
import img2 from '../../background/2.jpg';
import img3 from '../../background/3.jpg';



export default class BackgroundSlideshow extends Component {
  render() {

    return(
      <ul class="slideshow">
        <li><span>Image 01</span></li>
        <li><span>Image 02</span></li>
        <li><span>Image 03</span></li>
        <li><span>Image 04</span></li>
        <li><span>Image 05</span></li>
        <li><span>Image 06</span></li>
      </ul>
    )
  }
}