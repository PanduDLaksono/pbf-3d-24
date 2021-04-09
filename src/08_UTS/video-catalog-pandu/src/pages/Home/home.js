import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../parts/Header/header'
import Footer from '../../parts/Footer/footer'
import video from '../../assets/video/wheat-field.mp4'
import API from '../../services/API/api'
class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div class="tm-welcome-container text-center text-white">
                    <div class="tm-welcome-container-inner">
                        <p class="tm-welcome-text mb-1 text-white">Video Catalog is brought to you by TemplateMo.</p>
                        <p class="tm-welcome-text mb-5 text-white">This is a full-width video banner.</p>
                        <a href="#content" class="btn tm-btn-animate tm-btn-cta tm-icon-down">
                            <span>Discover</span>
                        </a>
                    </div>
                </div>

                <div id="tm-video-container">
                    <video className='videoTag' autoPlay muted loop id="tm-video">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>

                <i id="tm-video-control-button" class="fas fa-pause"></i>
                <div class="tm-page-wrap mx-auto">
                    <div class="container-fluid">
                        <div id="content" class="mx-auto tm-content-container">
                            <main>
                                <div class="row">
                                    <div class="col-12">
                                        <h2 class="tm-page-title mb-4">Our Video Catalog</h2>
                                        <div class="tm-categories-container mb-5">
                                            <h3 class="tm-text-primary tm-categories-text">Categories:</h3>
                                            <ul class="nav tm-category-list">
                                                <li class="nav-item tm-category-item"><a href="#" class="nav-link tm-category-link active">All</a></li>
                                                <li class="nav-item tm-category-item"><a href="#" class="nav-link tm-category-link">Drone Shots</a></li>
                                                <li class="nav-item tm-category-item"><a href="#" class="nav-link tm-category-link">Nature</a></li>
                                                <li class="nav-item tm-category-item"><a href="#" class="nav-link tm-category-link">Actions</a></li>
                                                <li class="nav-item tm-category-item"><a href="#" class="nav-link tm-category-link">Featured</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                
                                    <API/>
                                

                                <div>
                                    <ul class="nav tm-paging-links">
                                        <li class="nav-item active"><a href="#" class="nav-link tm-paging-link">1</a></li>
                                        <li class="nav-item"><a href="#" class="nav-link tm-paging-link">2</a></li>
                                        <li class="nav-item"><a href="#" class="nav-link tm-paging-link">3</a></li>
                                        <li class="nav-item"><a href="#" class="nav-link tm-paging-link">4</a></li>
                                    </ul>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;