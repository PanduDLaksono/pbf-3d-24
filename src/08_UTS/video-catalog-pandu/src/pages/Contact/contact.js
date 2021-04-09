import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../parts/Header/header'
import Footer from '../../parts/Footer/footer'
import bg1 from '../../assets/images/contact-1.jpg'
import user1 from '../../assets/images/testimonial-1.jpg'
import user2 from '../../assets/images/testimonial-2.jpg'
import user3 from '../../assets/images/testimonial-3.png'
import user4 from '../../assets/images/testimonial-4.png'

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Header />
                
                <div class="position-relative">
                    <div class="potition-absolute tm-site-header">
                        <div class="container-fluid position-relative">
                            <div class="row">
                                <div class="col-5 col-md-8 ml-auto mr-0">
                                    <div class="tm-site-nav">
                                        <nav class="navbar navbar-expand-lg mr-0 ml-auto" id="tm-main-nav">
                                            <button class="navbar-toggler tm-bg-black py-2 px-3 mr-0 ml-auto collapsed" type="button"
                                                data-toggle="collapse" data-target="#navbar-nav" aria-controls="navbar-nav"
                                                aria-expanded="false" aria-label="Toggle navigation">
                                                <span>
                                                    <i class="fas fa-bars tm-menu-closed-icon"></i>
                                                    <i class="fas fa-times tm-menu-opened-icon"></i>
                                                </span>
                                            </button>
                                            <div class="collapse navbar-collapse tm-nav" id="navbar-nav">
                                                <ul class="navbar-nav text-uppercase">
                                                    <li class="nav-item active">
                                                        <a class="nav-link tm-nav-link" href="/">Videos </a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link tm-nav-link" href="/about">About</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link tm-nav-link" href="/contact">Contact<span class="sr-only">(current)</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tm-welcome-container tm-fixed-header tm-fixed-header-1">
                            <img src={bg1} alt="Image" class="tm-welcome-container tm-fixed-header tm-fixed-header-1" />
                        <div class="text-center">
                            <p class="pt-5 px-3 tm-welcome-text tm-welcome-text-2 mb-1 text-white mx-auto">Background image can be fixed. Content will simply slide over.</p>
                        </div>
                    </div>
                    <div id="tm-fixed-header-bg"></div>
                </div>
                <main>
                    <div class="container-fluid px-0">
                        <div class="mx-auto tm-content-container">
                            <div class="row mt-3 mb-5 pb-3">
                                <div class="col-12">
                                    <div class="mx-auto tm-about-text-container px-3">
                                        <h2 class="tm-page-title mb-4 tm-text-primary">Contact our team</h2>
                                        <p class="mb-4">
                                            Integer sit amet odio id libero tincidunt dignissim in eget arcu. Aliquam tristique ut magna sit amet tincidunt. Sed tempor tellus nulla, molestie luctus lectus tincidunt id. You are <u>not allowed</u> to re-distribute the template ZIP file on any template collection website.
                                </p>
                                        <p class="mb-4">Video Catalog is a free website template for your business. This is 100% free Bootstrap v4.4.1 layout. You can modify and adapt this template for your CMS websites. You can use it for commercial or non-commercial work. If you wish to suport <a rel="nofollow" target="_parent" href="https://templatemo.com" class="tm-text-primary">TemplateMo</a>, please contact us.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mx-auto pb-3 tm-about-text-container px-3">
                                <div class="row">
                                    <div class="col-lg-6 mb-5">
                                        <form id="contact-form" action="" method="POST" class="tm-contact-form">
                                            <div class="form-group">
                                                <input type="text" name="name" class="form-control rounded-0" placeholder="Name" required="" />
                                            </div>
                                            <div class="form-group">
                                                <input type="email" name="email" class="form-control rounded-0" placeholder="Email" required="" />
                                            </div>
                                            <div class="form-group">
                                                <select class="form-control" id="contact-select" name="inquiry">
                                                    <option value="-">Subject</option>
                                                    <option value="sales">Sales &amp; Marketing</option>
                                                    <option value="creative">Creative Design</option>
                                                    <option value="uiux">UI / UX</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <textarea rows="8" name="message" class="form-control rounded-0" placeholder="Message"
                                                    required=""></textarea>
                                            </div>

                                            <div class="form-group mb-0">
                                                <button type="submit" class="btn btn-primary rounded-0 d-block ml-auto mr-0 tm-btn-animate tm-btn-submit tm-icon-submit"><span>Submit</span></button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="mapouter mb-60">
                                            <div class="gmap_canvas">
                                                <iframe width="100%" height="520" id="gmap_canvas"
                                                    src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="parallax-window parallax-window-2" data-parallax="scroll" data-image-src="img/contact-2.jpg"></div>

                        <div class="mx-auto tm-content-container mt-4 px-3 mb-3">
                            <div class="row">
                                <div class="col-12">
                                    <h2 class="tm-page-title mb-5 tm-text-primary">Testimonials</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 mb-5 pt-3">
                                    <div class="media tm-testimonial">
                                        <img class="mr-4 rounded-circle img-fluid" src={user1} alt="Generic placeholder image" />
                                        <p class="media-body pt-3 tm-testimonial-text" >
                                            Vestibulum non lectus id lacus aliquet porttitor in non nulla. Aenean urna diam, finibys id lorem nec, feugiat convallis dolor. Integer aliquam, eros eget rutrum iaculis.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-5 pt-3">
                            <div class="media tm-testimonial">
                                <img class="mr-4 rounded-circle img-fluid" src={user2} alt="Generic placeholder image" />
                                <p class="media-body pt-3 tm-testimonial-text">
                                    Maecenas et libero in eros laoreet finibus sed vitae diam. Etiam consetetur, nunc sed pretium elementum, diam erat fringilla tortor, placerat condimentum.
                              </p>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-5 pt-3">
                            <div class="media tm-testimonial">
                                <img class="mr-4 rounded-circle img-fluid" src={user3} alt="Generic placeholder image" />
                                <p class="media-body pt-3 tm-testimonial-text">
                                    Aliquam tristique ut magna sit amet tincidunt. Sed tempor tellus nulla, molestie luctus lectus tincidunt id. Cras duismod leo a urna placerat, vel blandit turpis fermentum.
                              </p>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-5 pt-3">
                            <div class="media tm-testimonial">
                                <img class="mr-4 rounded-circle img-fluid" src={user4} alt="Generic placeholder image" />
                                <p class="media-body pt-3 tm-testimonial-text">
                                    Nulla suscipit posuere lectus ut venenatis. Proin sed orci eget tellus euismod vulputate eu eu arcu. Etiam a bibendum lorem. Cura
                              </p>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Contact;