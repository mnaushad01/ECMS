import React from 'react';

class Title extends React.Component {
   render() {
     console.log(this.props);
      return (
         
        <h1>{this.props.title}</h1>
      );
   }
}

export default Title;