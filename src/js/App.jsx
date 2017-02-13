import React from 'react';
import {render} from 'react-dom';
import NavBar from './nav-bar.jsx';
import MainSection from './main-section.jsx';
import Footer from './footer.jsx'
class App extends React.Component {
  render () {
    return (
      <div>
          <NavBar name={'EAT OUT randomizer'} color={'teal'}></NavBar>{/*light-blue*/}
          <MainSection></MainSection>
          {/*<Footer></Footer>*/}
      </div>);
  }
}

export default App;