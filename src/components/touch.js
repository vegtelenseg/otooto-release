import React, { Component } from 'react';

class Touch extends Component {
  render = () => {
    return (
      <section id="three" className="wrapper style2 fade-up">
				<div className="inner">
					<h2>Get in touch</h2>
					<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
					<div className="split style1">
						<section>
							<form method="post" action="#">
								<div className="field half first">
									<label htmlFor="name">Name</label>
									<input type="text" name="name" id="name" />
								</div>
								<div className="field half">
									<label htmlFor="email">Email</label>
									<input type="text" name="email" id="email" />
								</div>
								<div className="field">
									<label htmlFor="message">Message</label>
									<textarea name="message" id="message" rows="5"></textarea>
								</div>
								<ul className="actions">
									<li><a href="" className="button submit">Send Message</a></li>
								</ul>
							</form>
						</section>
						<section>
							<ul className="contact">
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
										<ul className="icons">
											<li><a href="#" className="fa-twitter"><span className="label">Twitter</span></a></li>
											<li><a href="#" className="fa-facebook"><span className="label">Facebook</span></a></li>
											<li><a href="#" className="fa-github"><span className="label">GitHub</span></a></li>
											<li><a href="#" className="fa-instagram"><span className="label">Instagram</span></a></li>
											<li><a href="#" className="fa-linkedin"><span className="label">LinkedIn</span></a></li>
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
