import React from 'react';


import Title from './Title.jsx';


class Header extends React.Component {
   render() {
     console.log(this.props);
      return (
        <div> 
        <header>{this.props.title}</header>
           <Title title={this.props.title}/>
        </div>
      );
   }
}

export default Header;