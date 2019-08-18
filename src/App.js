import React from 'react';
import { useSpring, animated } from 'react-spring'


//nav I use some inline bootstrap styling here to get the effect of fixed-top

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <a className="navbar-brand" href="#">DD&T</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-auto text-center">
          <li className="nav-item">
            <a className="nav-link" aria-label="home" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-label="services" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-label="gallery" href="#">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-label="contact" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}



// Splash page used bootstrap grid and some inline margins.

function Home() {
  const h1 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { delay: 1000, duration: 1000 }
  })

  const div = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { delay: 1000, duration: 2250 }
  })

  return (
    <section id="home">
      <div className="container centerText">
        <div className="row">
          <div className="col-12"><animated.h1 style={h1}><h1 className="text-center">Deck Docks & Things</h1></animated.h1>
            <animated.div style={div}>
              <div className="mt-3">
                <p className="">Decks, docks, piers, bulkheads, lifts and more. We offer complete turn key projects as well as pile driving for the DIY or the marine carpenter.
              Licensed and Insured CGC 1526414</p>
                <p className="text-center mt-3">We are ready to build better things.</p>
                <h4 className="text-center mt-3"><span><strong>Are you ready?</strong></span></h4>
                <div className="flex">
                  <button type="button" aria-label="contact us" className="bouncy btn">Contact Us</button>
                </div>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  )
}


// Used bootstrap grid and some inline margins.

function Services() {
  return (
    <div className="background-color">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Services</h1>
            <div class="header-line"></div>
          </div>
          <div className="col-xl-6 mt-3">
            <h2 className="text-center">Custom Decks and Docks</h2>
            <p className="mt-3">There is no project too big or too small for us. We'll work hard to add your own touch of character to each build through our distinctive attention to quality and craftsmanship. We can build classy and stylish at the same time as rugged and durable. DD&T provides a variety of materials, patterns and colors to complement your home.</p>
          </div>
          <div className="col-xl-6 mt-3">
            <h2 className="text-center">Bulkheads and Seawalls</h2>
            <p className="mt-3">Bulkheads and seawalls can be complicated structures and the experts at DD&T know the necessary steps it takes to ensure yours will be long-lasting and attractive. With the knowledge and equipment to install the advanced materials and technologies needed to produce a low-maintenance, highly-durable barrier that meets all your retention needs and more. </p>
          </div>
          <div className="col-xl-12 mt-3">
            <h2 className="text-center">Boatlifts and More</h2>
            <p className="mt-3">From boatlifts, deck lifts, and personal water craft lifts to outdoor kitchens with BBQs and fire pits and more... If you can dream it, we can build it.</p>
          </div>
        </div>
      </div>
    </div >

  )
}

/* 
Working with a budget?
DD&T works to provide you a stress-free and affordable outdoor living space solution that checks all the boxes of your must-have list. From start to finish, we strive to provide complete customer satisfaction and an incredible space you can be proud of for many years to come. Contact us for a free consultation today!
No One Beats Our Custom Deck Installations.
Get a customized vinyl or wood deck and dock combination for a perfect waterfront solution.​

Decks, docks, bulkheads, lifts, hoists and more, we cater to all your custom needs.

*/

// Used bootstrap grid and some inline margins.

function Gallery() {
  return (
    <section id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Working With A Budget?</h1>
            <div class="header-line"></div>
          </div>
          <div className="col-xl-12 mt-3">
            <p className="mt-3">DD&T works to provide you a stress-free and affordable outdoor living space solution that checks all the boxes of your must-have list. From start to finish, we strive to provide complete customer satisfaction and an incredible space you can be proud of for many years to come.</p>
          </div>
        </div>
      </div>
    </section>
  )
}



function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Services />
      <Gallery />
    </div>
  );
}

export default App;
