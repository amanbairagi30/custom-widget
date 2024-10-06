import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './Widget';

// Define the custom web component
class WidgetWebComponent extends HTMLElement {
  constructor() {
    super();
    this.mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint);
  }

  connectedCallback() {
    const theme = this.getAttribute('theme') || 'light';
    const username = this.getAttribute('username') || 'guest';

    ReactDOM.render(<Widget theme={theme} username={username} />, this.mountPoint);
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
  }
}

// Register the web component
customElements.define('widget-web-component', WidgetWebComponent);
