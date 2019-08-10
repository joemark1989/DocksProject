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
        <ul className="navbar-nav ml-auto">
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
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { delay: 1000, duration: 1000 }
  })
  return (
    <div>
      <animated.div className="mainImg" style={props} />
      <h1 className="centered">Deck Docks & Things</h1>
      <p className="lead-centered">Decks, docks, piers, bulkheads, lifts and more. We offer complete turn key projects as well as pile driving for the DIY or the marine carpenter.
      Licensed and Insured CGC 1526414</p>
      <p className="lead-centered-next">Now offering sales and installation of the revolutionary TideSlide Mooring Products and Systems.</p>
      <div className="arrow">
        <span></span>
        <span></span>
        <span></span>

      </div>
    </div>
  )
}




function App() {
  return (
    <div className="">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
