import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import Widget from './Widget.jsx';

class WidgetWebComponent extends HTMLElement {
  connectedCallback() {
    const theme = this.getAttribute('theme') || 'light';
    const username = this.getAttribute('username') || 'default-user';

    // const wrapper = document.createElement('div');
    // wrapper.className = 'widget-wrapper';
    // this.appendChild(wrapper);


    ReactDOM.render(
      <React.StrictMode>
        <Widget theme={theme} username={username} />
      </React.StrictMode>,
      this
    );
  }
}

customElements.define('widget-web-component', WidgetWebComponent);

export default WidgetWebComponent;