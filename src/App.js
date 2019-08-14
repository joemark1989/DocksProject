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
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}



// Splash page utitlize

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
      <animated.h1 style={h1}><h1 className="centered-home-h1">Deck Docks & Things</h1></animated.h1>
      <animated.div style={div}><div className="centered-home-lead">
        <p>Decks, docks, piers, bulkheads, lifts and more. We offer complete turn key projects as well as pile driving for the DIY or the marine carpenter.
              Licensed and Insured CGC 1526414</p>
        <div></div>
        <p>We are ready to build better things, are you ready?</p>
        <div className="flex">
          <button type="button" className="bouncy btn">Contact Us</button>
        </div>
      </div></animated.div>
    </section>
  )
}

function Services() {
  return (
    <section className="service-h1-background">
      <h1 className="service-h1">Services</h1>
      <div class="firstSection"></div>
      <div class="secondSection"></div>
      <div>
        <h1 className="centered-service-h1-top-left">Personal Approach</h1>
        <p className="centered-service-lead-top-left">Always a great addition to any home, decks docks are becoming more versatile and are in use practically year-round. With your imagination and our expertise, your ultimate outdoor hangout for your family is a phone call away. Just about anything is possible! We specialize in designing and building very special outdoor spaces that reflect the personalities of the people that use them. Decks and docks can be complicated engineering projects, we have the experience, equipment and qualifications necessary to bring your vision to a reality.</p>

        <h1 className="centered-service-h1-top-right">Personal Approach</h1>
        <p className="centered-service-lead-top-right">Always a great addition to any home, decks docks are becoming more versatile and are in use practically year-round. With your imagination and our expertise, your ultimate outdoor hangout for your family is a phone call away. Just about anything is possible! We specialize in designing and building very special outdoor spaces that reflect the personalities of the people that use them. Decks and docks can be complicated engineering projects, we have the experience, equipment and qualifications necessary to bring your vision to a reality.</p>

        <h1 className="centered-service-h1-bottom-left">Personal Approach</h1>
        <p className="centered-service-lead-bottom-left">Always a great addition to any home, decks docks are becoming more versatile and are in use practically year-round. With your imagination and our expertise, your ultimate outdoor hangout for your family is a phone call away. Just about anything is possible! We specialize in designing and building very special outdoor spaces that reflect the personalities of the people that use them. Decks and docks can be complicated engineering projects, we have the experience, equipment and qualifications necessary to bring your vision to a reality.</p>

        <h1 className="centered-service-h1-bottom-right">Personal Approach</h1>
        <p className="centered-service-lead-bottom-right">Always a great addition to any home, decks docks are becoming more versatile and are in use practically year-round. With your imagination and our expertise, your ultimate outdoor hangout for your family is a phone call away. Just about anything is possible! We specialize in designing and building very special outdoor spaces that reflect the personalities of the people that use them. Decks and docks can be complicated engineering projects, we have the experience, equipment and qualifications necessary to bring your vision to a reality.</p>
      </div>
    </section>

  )
}




function App() {
  return (
    <div className="">
      <Nav />
      <Home />
      <Services />
    </div >
  );
}

export default App;
