import React from 'react';
import {render} from 'react-dom';

(function($){
  $(function(){
    console.log('sap');
    $('.button-collapse').sideNav();

  });
})(jQuery);

class App extends React.Component {
  render () {
    return <div>Main content people!!</div>;
  }
}

export default App;