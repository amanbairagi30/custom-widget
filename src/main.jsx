import React from 'react';
import { createRoot } from 'react-dom/client';
import Widget from './Widget';

class WidgetWebComponent extends HTMLElement {
  constructor() {
    super();
    this.mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint); // Shadow DOM
    this.root = null; // Will hold the root after initialization
  }

  connectedCallback() {
    const theme = this.getAttribute('theme') || 'light';
    const username = this.getAttribute('username') || 'guest';

    // Use createRoot for React 18
    this.root = createRoot(this.mountPoint); // Initializes a new root
    this.root.render(<Widget theme={theme} username={username} />);
  }

  disconnectedCallback() {
    // Clean up the React component
    if (this.root) {
      this.root.unmount(); // Use unmount from the root object in React 18
    }
  }
}

// Register the web component
customElements.define('widget-web-component', WidgetWebComponent);
