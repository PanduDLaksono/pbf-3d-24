import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../parts/Header/header'
import Footer from '../../parts/Footer/footer'
import API from '../../services/API/api'
import video from '../../assets/video/wheat-field.mp4'
import bg1 from '../../assets/images/video-detail-1.jpg'

class Video extends React.Component {
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
                                                        <a class="nav-link tm-nav-link" href="/">Videos <span class="sr-only">(current)</span></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link tm-nav-link" href="/about">About</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link tm-nav-link" href="/contact">Contact</a>
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
                <div class="mx-auto tm-content-container">
                    <main>
                        <div class="row mb-5 pb-4">
                            <div class="col-12">
                                <video className='videoTag' width="1422" height="800" controls autoPlay>
                                    <source src={video} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div class="row mb-5 pb-5">
                            <div class="col-xl-8 col-lg-7">
                                <div class="tm-video-description-box">
                                    <h2 class="mb-5 tm-video-title">Mauris dapibus urna nec ipsum posuere</h2>
                                    <p class="mb-4">Cras dictum pretium est, et imperdiet ex. Fusce vitae vestibulum ipsum. Maecenas ultricies ipsum a urna ullamcorper, id interdum est blandit. Vivamus sit amet justo sed erat iaculis consequat. Nulla suscipit posuere lectus ut venenatis. Proin sed orci eget tellus euismod vulputate eu eu arcu.</p>
                                    <p class="mb-4">Etiam a bibendum lorem. Curabitur ac bibendum odio. Vivamus euismod dui mauris, ut tincidunt mi congue quis. Phasellus luctus orci dolor, a luctus massa tincidunt vitae. Integer sit amet odio id libero tincidunt dignissim in eget arcu.</p>
                                    <p class="mb-4">Aliquam tristique ut magna sit amet tincidunt. Sed tempor tellus nulla, molestie luctus lectus tincidunt id. Cras euismod leo a urna placerat, vel blandit turpis fermentum.</p>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-5">
                                <div class="tm-bg-gray tm-share-box">
                                    <h6 class="tm-share-box-title mb-4">Share this video</h6>
                                    <div class="mb-5 d-flex">
                                        <a href="" class="tm-bg-white tm-share-button"><i class="fab fa-facebook"></i></a>
                                        <a href="" class="tm-bg-white tm-share-button"><i class="fab fa-twitter"></i></a>
                                        <a href="" class="tm-bg-white tm-share-button"><i class="fab fa-pinterest"></i></a>
                                        <a href="" class="tm-bg-white tm-share-button"><i class="far fa-envelope"></i></a>
                                    </div>
                                    <p class="mb-4">Author: <a href="https://templatemo.com" class="tm-text-link">TemplateMo</a></p>
                                    <a href="#" class="tm-bg-white px-5 mb-4 d-inline-block tm-text-primary tm-likes-box tm-liked">
                                        <i class="fas fa-heart mr-3 tm-liked-icon"></i>
                                        <i class="far fa-heart mr-3 tm-not-liked-icon"></i>
                                        <span id="tm-likes-count">486 likes</span>
                                    </a>
                                    <div>
                                        <button class="btn btn-primary p-0 tm-btn-animate tm-btn-download tm-icon-download"><span>Download Video</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row pt-4 pb-5">
                            <div class="col-12">
                                <h2 class="mb-5 tm-text-primary">Related Videos for You</h2>
                                <API />
                            </div>
                        </div>
                    </main>
                </div>
                <Footer />

            </div>
        )
    }
}

export default Video;