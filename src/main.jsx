import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './Widget';  // Your React component

// Define the custom web component
class WidgetWebComponent extends HTMLElement {
  constructor() {
    super();
    this.mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint); // Use shadow DOM
  }

  connectedCallback() {
    const theme = this.getAttribute('theme') || 'light';
    const username = this.getAttribute('username') || 'guest';

    ReactDOM.render(<Widget theme={theme} username={username} />, this.mountPoint); // Render React component
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint); // Clean up when removed
  }
}

// Register the web component
customElements.define('widget-web-component', WidgetWebComponent);
