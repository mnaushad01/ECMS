import React from 'react';


import Header from './Header.jsx';
import Footer from './Footer.jsx';

class Layout extends React.Component {
   
   constructor()
   {
      super();
      this.state={name: "Naushad"}
   }
   
   componentDidMount(){
		fetch('http://localhost:8080/demo').then(function(result){
			console.log('result >>>>>>> ',result);
		})
		
	}

   render() {
      const title="Welcome Guruji"
          setTimeout(() =>{
            this.setState({name: "Sahil"});

          }, 1000)

         return (
         <div> 
           {this.state.name}
          <Header name="Somethimg other" title={this.state.name} />
          <Footer />
           
         </div>
      );
   }
}

export default Layout;