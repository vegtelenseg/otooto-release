import React, { Component } from 'react';

class Intro extends Component {
  constructor() {
    super();
  }
  render = () => {
    return (
      <section id="intro" class="wrapper style1 fullscreen fade-up">
  <div class="inner">
    <h1>OTOOTO</h1>
    <p>We, <b>diffently</b>, conduct experiments that may or may not seriously break the universe</p>
    <ul class="actions">
      <li><a href="#one" class="button scrolly">Learn more</a></li>
    </ul>
  </div>
</section>
    );
  }
}

export default Intro;
