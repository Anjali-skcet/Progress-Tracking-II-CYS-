import React from 'react';
function StyledComponent() {
 // Define the inline styles
 const componentStyle = {
 backgroundColor: 'lightblue',
 padding: '20px',
 borderRadius: '8px'
 };
 const headingStyle = {
 color: 'navy',
 fontSize: '24px'
 };
 return (
 <div style={componentStyle}>
 <h2 style={headingStyle}>This is a Styled Component</h2>
 <p>This component's styles are scoped to it and do not affect child components.</p>
 </div>
 );
}
export default StyledComponent;