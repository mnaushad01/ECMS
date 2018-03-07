import React from 'react';

class App extends React.Component {

  constructor(){
     super();
     this.name="Naushad in constructor";
  }
  
	
   render() {
     
      return (
         <div>
            Hello World!!!   {this.name}
         </div>
      );
   }
}

export default App;