import React from 'react';
import NavBar from './nav-bar.jsx';
import MainSection from './main-section.jsx';
import Footer from './footer.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
          <NavBar name={'eat out randomizer'} color={'teal'}></NavBar>{/*light-blue*/}
          <MainSection header={'Whoop Whoop!'}></MainSection>
          {/*<Footer></Footer>*/}
      </div>);
  }
}

export default App;