import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import Widget from './Widget.jsx';

// const Widget = ({ theme = 'light', username = 'guest' }) => {
//   return (
//     <div className={`p-4 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
//       <h1 className="text-xl font-bold">Hello, {username}!</h1>
//       <p>Welcome to our widget!</p>
//     </div>
//   );
// };

class WidgetWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const theme = this.getAttribute('theme') || 'light';
    const username = this.getAttribute('username') || 'default-user';


    const mountPoint = document.createElement('div');
    this.shadowRoot.appendChild(mountPoint);

    ReactDOM.render(
      <React.StrictMode>
        <Widget theme={theme} username={username} />
      </React.StrictMode>,
      mountPoint
    );
  }
}

customElements.define('widget-web-component', WidgetWebComponent);

export default WidgetWebComponent;