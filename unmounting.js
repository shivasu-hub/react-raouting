import React from 'react';

export default class Unmount extends React.Component{
    render(){
        return(
            <>
            <h1>UnMounting</h1>
            <h3>Explain Brief</h3>
            <p>This method is called when a component is being removed from the DOM:
</p>
  <ul>
      <li>
    componentWillUnmount()
    </li>
  </ul>
        </>
        );
    }
}