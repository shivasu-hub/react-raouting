import React from 'react';

export default class Mount extends React.Component{

   
    render(){
       return(<>
       
   <h1>Mounting</h1>
   <h3>Explain Brief</h3>
   <p>These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
</p>
<ul>
<li>constructor()</li>
<li>static getDerivedStateFromProps()</li>
<li>render()</li>
<li>componentDidMount()</li>
</ul>

     </>
       ); 
    }
}