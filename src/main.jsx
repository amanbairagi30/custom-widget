import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './Widget'; // Your React component

// Tailwind CSS as string (use your own or copy from Tailwind's build)
const tailwindStyles = `
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
`;

class WidgetWebComponent extends HTMLElement {
  constructor() {
    super();
    this.mountPoint = document.createElement('div');
    const styleTag = document.createElement('style');
    styleTag.textContent = tailwindStyles; // Add Tailwind CSS to shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(styleTag);
    shadow.appendChild(this.mountPoint);
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

customElements.define('widget-web-component', WidgetWebComponent);
