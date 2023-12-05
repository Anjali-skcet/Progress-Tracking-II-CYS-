import React from 'react';
import Child from './Child';
function Parent(){
    return(
        <div>
            <h1>This is a parent component</h1>
            <Child
                color1="green"
            />
        </div>
    );
}
export default Parent
