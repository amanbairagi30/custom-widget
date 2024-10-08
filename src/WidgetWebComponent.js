import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import Widget from './Widget.jsx';
import styles from './index.css';

class WidgetWebComponent extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const theme = this.getAttribute('theme') || 'light';
    const username = this.getAttribute('username') || 'default-user';

    // Create a container for the widget
    const container = document.createElement('div');
    container.style.cssText = 'contain: content; position: relative; z-index: 1;';

    // Inject styles
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    shadowRoot.appendChild(styleElement);

    shadowRoot.appendChild(container);


    ReactDOM.render(
      <React.StrictMode>
        <Widget theme={theme} username={username} />
      </React.StrictMode>,
      container
    );
  }
}

customElements.define('widget-web-component', WidgetWebComponent);

export default WidgetWebComponent;