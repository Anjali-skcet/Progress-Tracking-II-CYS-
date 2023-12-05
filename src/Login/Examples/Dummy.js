import React from 'react';
import ReactDOM from 'react-dom/client';

export default class Dummy extends React.Component {
  render() {
    return <h2>Happy Learning! {this.props.name}!</h2>
  }
}
const container=document.getElementById('root');
const root=ReactDOM.createRoot(container);
root.render(<Dummy name="Anjali"/>);

