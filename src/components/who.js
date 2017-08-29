import React, { Component } from 'react';

class Who extends Component {
  constructor() {
    super();
  }
  render = () => {
    return (
      <section id="one" class="wrapper style2 spotlights">
  <section>
    <a href="#" class="image"><img src="images/pic01.jpg" alt="" data-position="center center" /></a>
    <div class="content">
      <div class="inner">
        <h2>Larry Ellison</h2>
        <p>High energy, confident professional with an infectious enthusiasm for technology.
          He has worked with incredible teams in the digital advertising and marketing industry. Here he built websites,
          for major businesses, from ground up using new and groundbreaking technologies</p>
        <ul class="actions">
          <li><a href="#" class="button">Learn more</a></li>
        </ul>
      </div>
    </div>
  </section>
  <section>
    <a href="#" class="image"><img src="images/pic02.jpg" alt="" data-position="top center" /></a>
    <div class="content">
      <div class="inner">
        <h2>Bantu Zen</h2>
        <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
        <ul class="actions">
          <li><a href="#" class="button">Learn more</a></li>
        </ul>
      </div>
    </div>
  </section>
  <section>
    <a href="#" class="image"><img src="images/pic03.jpg" alt="" data-position="25% 25%" /></a>
    <div class="content">
      <div class="inner">
        <h2>Dennis Domino</h2>
        <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
        <ul class="actions">
          <li><a href="#" class="button">Learn more</a></li>
        </ul>
      </div>
    </div>
  </section>
</section>
    );
  }
}

export default Who;
