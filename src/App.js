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
            <a className="nav-link" href="#">About</a>
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

/*

Now offering sales and installation of the revolutionary TideSlide Mooring Products and Systems.

http://www.tideslide.com/
*/


// Splash page

function Main() {
  const h1 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { delay: 1000, duration: 1000 }
  })

  const div = useSpring({
    opacity: 1,
    from: { opacity: 0},
    config: {delay: 1000, duration: 3000 }
  })
  
  return (
    <div>
      <section id="home">
      <animated.h1 style={h1}><h1 className="centered">Deck Docks & Things</h1></animated.h1>
       <animated.div style={div}><div className="lead-centered">
          <p>Decks, docks, piers, bulkheads, lifts and more. We offer complete turn key projects as well as pile driving for the DIY or the marine carpenter.
              Licensed and Insured CGC 1526414</p>
          <p>Now offering sales and installation of the revolutionary TideSlide Mooring Products and Systems. Check them out <a href="http://www.tideslide.com/" target="_blank" rel="noopener noreferrer"><span className="tideSlide">HERE!</span></a></p>
        </div></animated.div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </div>
  )
}

function About() {
  return (
    <div className="section background"></div>
  )
}




function App() {
  return (
    <div className="">
      <Nav />
      <Main />
      <About />
    </div >
  );
}

export default App;
