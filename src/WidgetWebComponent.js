import React from 'react';
import "./index.css"
import Widget from './Widget.jsx';
import { createRoot } from 'react-dom/client';

class WidgetWebComponent extends HTMLElement {
  connectedCallback() {
    const theme = this.getAttribute('theme') || 'light';
    const username = this.getAttribute('username') || 'default-user';

    createRoot(
      <React.StrictMode>
        <Widget theme={theme} username={username} />
      </React.StrictMode>,
      this
    );
  }
}

customElements.define('widget-web-component', WidgetWebComponent);

export default WidgetWebComponent;