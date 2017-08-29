import React, { Component } from 'react';

class Touch extends Component {
  constructor() {
    super();
  }
  render = () => {
    return (
      <section id="three" class="wrapper style2 fade-up">
				<div class="inner">
					<h2>Get in touch</h2>
					<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
					<div class="split style1">
						<section>
							<form method="post" action="#">
								<div class="field half first">
									<label for="name">Name</label>
									<input type="text" name="name" id="name" />
								</div>
								<div class="field half">
									<label for="email">Email</label>
									<input type="text" name="email" id="email" />
								</div>
								<div class="field">
									<label for="message">Message</label>
									<textarea name="message" id="message" rows="5"></textarea>
								</div>
								<ul class="actions">
									<li><a href="" class="button submit">Send Message</a></li>
								</ul>
							</form>
						</section>
						<section>
							<ul class="contact">
								<li>
									<h3>Address</h3>
									<span>34 Forbes Rd<br />
										Randburg, Jhb 2194<br />
										South Africa</span>
									</li>
									<li>
										<h3>Email</h3>
										<a href="#">otooto.enquire@think.com</a>
									</li>
									<li>
										<h3>Phone</h3>
										<span>(065) 885-5131</span>
									</li>
									<li>
										<h3>Social</h3>
										<ul class="icons">
											<li><a href="#" class="fa-twitter"><span class="label">Twitter</span></a></li>
											<li><a href="#" class="fa-facebook"><span class="label">Facebook</span></a></li>
											<li><a href="#" class="fa-github"><span class="label">GitHub</span></a></li>
											<li><a href="#" class="fa-instagram"><span class="label">Instagram</span></a></li>
											<li><a href="#" class="fa-linkedin"><span class="label">LinkedIn</span></a></li>
										</ul>
									</li>
								</ul>
							</section>
						</div>
					</div>
				</section>
    );
  }
}

export default Touch;
