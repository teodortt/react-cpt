import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Tours() {


  useEffect(() => {
    $(function () {
      if ($(window).width() > 991) {

        $(window).on('scroll', function () {

          if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
            $('#cpt-logo').attr("src", '/images/logo-green.png').attr("width", "100");

          } else {
            $('.navbar').removeClass('active');
            $('#cpt-logo').attr("src", '/images/logo-white-full.png').attr("width", "150");
          }
        });
      } else {
        $('.navbar').addClass('active');
        $('#cpt-logo').attr("src", '/images/logo-green.png').attr("width", "100");
      }
    });
  });

  useEffect(() => {
    document.documentElement.scrollTop = 1;

  }, [])

  return (
    <div>

      <NavBar />

      <div className="container-fluid bg-tours pl-0 pr-0">


        {/* <video autoPlay={true} muted
          className="video"
          loop id="myVideo">
          <source src="/images/intro-0-20.webm"

            type="video/mp4" />
        </video> */}

        <div className="pt-5 text-white text-center" style={{ position: "relative" }}>
          <div className="py-5 mt-5">

            <h1 className="" style={{ fontWeight: 900, letterSpacing: '2px', fontSize: '50px' }}>Tours</h1>

            <p className="lead mb-0 pt-3">
              <b>We are the leader in providing bike rentals and various tours in New York.</b>
            </p>
            <p className="lead mb-0">
              <b>Reserve your tour now and explore the oasis in the middle of Manhattan.</b>
            </p>
          </div>



          <section className="container text-dark pt1-tours">

            <div className="row justify-content-center">
              <div className="col-md-10">

                {/* cards */}
                <div className="card-group pt-3">

                  <div className="card card-v mx-4">


                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img className="d-block w-100 card-img-top1" src="/images/bike-tour-central-park.jpg" alt="First slide" />

                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100 card-img-top1" src="/images/bike-tour-central-park.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100 card-img-top1" src="/images/bike-tour-central-park.jpg" alt="Third slide" />
                        </div>
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>

                    <div className="card-body" style={{ marginTop: -20 }}>
                      <h5 style={{ color: '#535150', fontSize: '18px' }} className="card-title text-left text-uppercase font-weight-bold pt-3 pb-1">Central Park Bike Tour</h5>

                      <div className="row text-uppercase pb-4">
                        <div style={{ fontSize: 12 }} className="col text-left ">Price from <b style={{ fontSize: 18 }}>$59</b> usd</div>
                        <div style={{ fontSize: 12 }} className="col text-right">Duration <b> 2h</b></div>
                      </div>

                      <p style={{ fontSize: 14 }} className="text-left">
                        Our bicycle tour has been ranked as one the top 5
                        things to do in Central Park by TripAdvisor. It is the
                        only tour that covers the entire length of Central
                        Park and it provides an excellent overview of the
                        whole park.
                      </p>

                      <div className="row text-uppercase">
                        <div style={{ fontSize: 12 }} className="col text-left ">Intensity</div>
                        <div style={{ fontSize: 12 }} className="col text-right">Rating 5.0</div>
                      </div>

                      <div className="row text-uppercase pb-4">
                        <div style={{ fontSize: 12 }} className="col text-left "><b>Active</b></div>
                        <div style={{ fontSize: 16 }} className="col text-right">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                        </div>
                      </div>

                      <div className="row text-uppercase pb-4">
                        <div style={{ fontSize: 12, color: 'silver', fontWeight: 'bold' }} className="col text-left pt-3">
                          View tour
                        </div>
                        <div style={{ fontSize: 12 }} className="col">
                          <p className="btn-reserve">Book now</p>
                        </div>
                      </div>


                    </div>
                  </div>

                  <div className="card card-v mx-4">


                    <div id="carouselExampleControls2" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img className="d-block w-100 card-img-top1" src="/images/pedicab-tour-central-park.jpg" alt="First slide" />

                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100 card-img-top1" src="/images/pedicab-tour-central-park.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100 card-img-top1" src="/images/pedicab-tour-central-park.jpg" alt="Third slide" />
                        </div>
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>

                    <div className="card-body" style={{ marginTop: -20 }}>
                      <h5 style={{ color: '#535150', fontSize: '18px' }} className="card-title text-left text-uppercase font-weight-bold pt-3 pb-1">Central Park Pedicab Tour</h5>

                      <div className="row text-uppercase pb-4">
                        <div style={{ fontSize: 12 }} className="col text-left ">Price from <b style={{ fontSize: 18 }}>$53</b> usd</div>
                        <div style={{ fontSize: 12 }} className="col text-right">Duration <b> 1h</b></div>
                      </div>

                      <p style={{ fontSize: 14 }} className="text-left">
                        Our bicycle tour has been ranked as one the top 5
                        things to do in Central Park by TripAdvisor. It is the
                        only tour that covers the entire length of Central
                        Park and it provides an excellent overview of the
                        whole park.
                      </p>

                      <div className="row text-uppercase">
                        <div style={{ fontSize: 12 }} className="col text-left ">Intensity</div>
                        <div style={{ fontSize: 12 }} className="col text-right">Rating 5.0</div>
                      </div>

                      <div className="row text-uppercase pb-4">
                        <div style={{ fontSize: 12 }} className="col text-left "><b>Active</b></div>
                        <div style={{ fontSize: 16 }} className="col text-right">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                        </div>
                      </div>

                      <div className="row text-uppercase pb-4">
                        <div style={{ fontSize: 12, color: 'silver', fontWeight: 'bold' }} className="col text-left pt-3">
                          View tour
                        </div>
                        <div style={{ fontSize: 12 }} className="col">
                          <p className="btn-reserve">Book now</p>
                        </div>
                      </div>


                    </div>
                  </div>

                </div>
              </div>
            </div>

          </section>


          {/* <footer> */}
          <Footer />

        </div>

        {/* before header div </div> */}

        {/* body */}
      </div>

      {/* html */}
    </div >
  )
}


  //force scroll to top on page refresh
  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // }

  // if (typeof window === 'undefined') {
  //   global.window = {}
  // }