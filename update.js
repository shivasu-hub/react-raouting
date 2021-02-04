import React from 'react';

export default class Update extends React.Component{
    render(){
        return(
            <>
            <h1>Updating</h1>
            <h3>Explain Brief</h3>
            <p>
 An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
 </p>
 <ul>
     <li>static getDerivedStateFromProps()</li>
     <li>shouldComponentUpdate()</li>
     <li>render()</li>
     <li>getSnapshotBeforeUpdate()</li>
     <li> componentDidUpdate()</li>
 </ul>
        </>
        );
    }
}