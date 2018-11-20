import React from 'react'
import { Helmet } from "react-helmet"

import Banner from "../components/Banner";

import '../assets/css/tour.css'

import icon_41 from '../assets/img/icon/41.png'
import icon_42 from '../assets/img/icon/42.png'
import icon_43 from '../assets/img/icon/43.png'
import level_1 from '../assets/img/icon/level1.png'
import level_2 from '../assets/img/icon/level2.png'
import level_3 from '../assets/img/icon/level3.png'

export default () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Wild Coast Walks</title>
        </Helmet>

        <Banner
            extraClass="details-one"
            title1="Experience"
            title2="Nepal"
            text1="The right tour for the right traveller"
            text2=""
            breadcrumb="Tour"
        />
        <div className="adventures-grid section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="shop-item-filter">
                            <form action="#" id="banner-searchbox" className="details-form">
                                <div className="row">
                                    <div className="col-md-3 col-sm-4 col-xs-12">
                                        <div className="adventure-cat">
                                            <select name="destination" className="search-adventure">
                                                <option>Select Destination</option>
                                                <option>Madagascar</option>
                                                <option>Botswana</option>
                                                <option>Canada, Alaska</option>
                                                <option>Antarctica</option>
                                                <option>Swaziland</option>
                                                <option>Ethiopia</option>
                                                <option>Tanzania</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-xs-12">
                                        <div className="adventure-cat">
                                            <select name="duration" className="search-adventure">
                                                <option>Duration</option>
                                                <option>3 to 10 days</option>
                                                <option>5 to 7 days</option>
                                                <option>7 to 10 days</option>
                                                <option>10 to 15 days</option>
                                                <option>15 to 20 days</option>
                                                <option>20 to 25 days</option>
                                                <option>25 to 30 days</option>
                                                <option>30 to 60days</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2 hidden-sm col-xs-12">
                                        <div className="adventure-cat box-small">
                                            <select name="departing" className="search-adventure">
                                                <option>Departing</option>
                                                <option>January</option>
                                                <option>February</option>
                                                <option>March</option>
                                                <option>April</option>
                                                <option>May</option>
                                                <option>June</option>
                                                <option>July</option>
                                                <option>August</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-2 col-xs-12">
                                        <div className="adventure-cat box-small">
                                            <select name="price" className="search-adventure">
                                                <option>Price</option>
                                                <option>$5000</option>
                                                <option>$8000</option>
                                                <option>$10000</option>
                                                <option>$12000</option>
                                                <option>$14000</option>
                                                <option>$16000</option>
                                                <option>$18000</option>
                                                <option>$20000</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-3 col-xs-12">
                                        <div className="details-button">
                                            <button type="submit" id="btn-search-category">SEARCH</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="trip-information">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="trip-info-left-text">
                            <div className="section-title text-center">
                                <div className="title-border">
                                    <h1>Trip <span>Overview</span></h1>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className="clearfix"></div>
                            <ul className="details-info">
                                <li className=""><span>Start</span>Kathmandu, Nepal</li>
                                <li className=""><span>Ages</span>MIN 16</li>
                                <li className=""><span>Finish</span>Kathmandu, Nepal</li>
                                <li className=""><span>Group size</span>Min 1, Max 12</li>
                                <li className=""><span>Countries</span>Nepal</li>
                            </ul>
                            <div className="details-social-link">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-google-plus"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-rss"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 hidden-sm hidden-xs">
                        <div className="trip-booking-info">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Activities</h2>
                                    <div className="single-trip-content">
                                        <div className="trip-icon">
                                            <img src={icon_41} alt="" />
                                        </div>
                                        <h4>Camping</h4>
                                    </div>
                                    <div className="single-trip-content">
                                        <div className="trip-icon">
                                            <img src={icon_42} alt="" />
                                        </div>
                                        <h4>Hiking</h4>
                                    </div>
                                    <div className="single-trip-content">
                                        <div className="trip-icon">
                                            <img src={icon_43} alt="" />
                                        </div>
                                        <h4>Camping</h4>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h2>Activity Level</h2>
                                    <div className="trip-level-content">
                                        <img src={level_1} alt="" />
                                        <h4>Easy</h4>
                                    </div>
                                    <div className="trip-level-content">
                                        <img src={level_2} alt="" />
                                        <h4>Medium</h4>
                                    </div>
                                    <div className="trip-level-content">
                                        <img src={level_3} alt="" />
                                        <h4>hard</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row divider"></div>
                            <div className="row">
                                <div className="col-md-4 text-center">
                                    <div className="trip-text-container">
                                        <h2>Rating</h2>
                                        <div className="trip-rating">
                                            <i className="fa fa-star grey"></i>
                                            <i className="fa fa-star grey"></i>
                                            <i className="fa fa-star grey"></i>
                                            <i className="fa fa-star grey"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <p>15 <span>reviews</span></p>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="trip-text-container">
                                        <h2>Duration</h2>
                                        <h3>10 Days</h3>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="trip-text-container budget">
                                        <h2>Budget</h2>
                                        <h1>$659</h1>
                                        <p>per person</p>
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button id="booking-button" type="submit">Book this trip</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="trip-inclution section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1>Trip <span>Inclutions</span></h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui<br /> id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="include-item">
                            <div className="include-icon">
                                <i className="fa fa-cutlery"></i>
                            </div>
                            <div className="include-text">
                                <h4>Meals</h4>
                                <p>8 breakfasts, 3 lunches, 2 dinners</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="include-item">
                            <div className="include-icon">
                                <i className="fa fa-truck"></i>
                            </div>
                            <div className="include-text">
                                <h4>Transport</h4>
                                <p>Bus, Minibus, Raft, Bus, Minibus</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 hidden-sm">
                        <div className="include-item no-margin">
                            <div className="include-icon">
                                <i className="fa fa-home"></i>
                            </div>
                            <div className="include-text">
                                <h4>Accommodation</h4>
                                <p>Camping (with basic facilities) (1 night), Guesthouse (5 nights), Hotel (3 nights)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="trip-pricing-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1 className="text-white">Trip <span>Date &amp; Price</span></h1>
                            </div>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui<br /> id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form action="#" method="post">
                            <div className="table-content table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <td className="trip-date"><div>Departure Dates</div></td>
                                            <td className="trip-status"><div>Trip Status</div></td>
                                            <td className="trip-price"><div>Price <span>(Per person)</span></div></td>
                                            <td className="trip-action"><div>Action</div></td>
                                        </tr>
                                        <tr><td className="transparent" colSpan={4}></td></tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="trip-date"><div>19 Dec 2015 - 28 Dec 2015</div></td>
                                            <td className="trip-status"><div>Fully booked</div></td>
                                            <td className="trip-price"><div>$1,200 - $1,400</div></td>
                                            <td className="trip-action"><div><button className="booking-button-two" type="submit">Book now</button></div></td>
                                        </tr>
                                        <tr>
                                            <td className="trip-date"><div>31 Oct 2015 - 9 Nov 2015</div></td>
                                            <td className="trip-status"><div>Available</div></td>
                                            <td className="trip-price"><div>$1,048 - $2156</div></td>
                                            <td className="trip-action"><div><button className="booking-button-two" type="submit">Book now</button></div></td>
                                        </tr>
                                        <tr>
                                            <td className="trip-date"><div>24 Oct 2015 - 2 Nov 2015</div></td>
                                            <td className="trip-status"><div>Fully booked</div></td>
                                            <td className="trip-price"><div>$1,200 - $1,400</div></td>
                                            <td className="trip-action"><div><button className="booking-button-two" type="submit">Book now</button></div></td>
                                        </tr>
                                        <tr>
                                            <td className="trip-date"><div>19 Dec 2015 - 28 Dec 2015</div></td>
                                            <td className="trip-status"><div>Available</div></td>
                                            <td className="trip-price"><div>$1,048 - $2156</div></td>
                                            <td className="trip-action"><div><button className="booking-button-two" type="submit">Book now</button></div></td>
                                        </tr>
                                        <tr>
                                            <td className="trip-date"><div>31 Oct 2015 - 9 Nov 2015</div></td>
                                            <td className="trip-status"><div>Fully booked</div></td>
                                            <td className="trip-price"><div>$1,200 - $1,400</div></td>
                                            <td className="trip-action"><div><button className="booking-button-two" type="submit">Book now</button></div></td>
                                        </tr>
                                        <tr>
                                            <td className="trip-date"><div>24 Oct 2015 - 2 Nov 2015</div></td>
                                            <td className="trip-status"><div>Available</div></td>
                                            <td className="trip-price"><div>$1,048 - $2156</div></td>
                                            <td className="trip-action"><div><button className="booking-button-two" type="submit">Book now</button></div></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)