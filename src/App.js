import React, { Component } from 'react'
import $ from 'jquery'
import './App.css'
import Card from './WorkCards'
import Table from './SkillTable'
import Profile from './Profile'
import Contact from './Contact'

class App extends Component {
  render() {
    $(function() {
      $('.toggle').click(function() {
    　　$(this).toggleClass('active')
      　if ($(this).hasClass('active')) {
      　　$('.nav-menu').addClass('active')
      　} else {
      　　$('.nav-menu').removeClass('active')
      　}
    　})
    })
    return (
      <div>
        <header>
          <div className="hakuai">
            <h1>Portfolio</h1>
            <h2>Miki Takeuchi</h2>
            <h3>Web Engineer</h3>
          </div>
          {/* <nav className="nav-menu">
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/skil">Skill</a></li>
              <li><a href="/works">Works</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <div className="toggle">
            <div />
            <div />
            <div />
          </div> */}
        </header>
        <div className="contentsInner">
          <h2 className="sub-title">About</h2>
          <Profile />
        </div>
        <div className="contentsInner">
          <h2 className="sub-title">Skill</h2>          
          <Table />
        </div>
        <div className="contentsInner">
          <h2 className="sub-title">Works</h2>
          <Card />
        </div>
        <div className="contentsInner">
          <h2 className="sub-title">Contact</h2>
          <Contact />
        </div>
      </div>
    )
  }
}

export default App;
