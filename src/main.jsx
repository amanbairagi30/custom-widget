import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import your Tailwind CSS or custom styles here

const Widget = ({ theme = "light", username = "guest" }) => {
    return (
        <div className={`p-4 rounded-lg shadow-md ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
            <h1 className="text-xl font-bold">Hello, {username}!</h1>
            <p>Welcome to our widget!</p>
        </div>
    );
};

class WidgetWebComponent extends HTMLElement {
    constructor() {
        super();
        this.mountPoint = document.createElement('div');
        // Optionally use Shadow DOM
        // this.attachShadow({ mode: "open" }).appendChild(this.mountPoint);
        this.appendChild(this.mountPoint); // Attach directly without Shadow DOM
        this.root = null;
    }

    connectedCallback() {
        const theme = this.getAttribute('theme') || 'light';
        const username = this.getAttribute('username') || 'guest';
        this.root = createRoot(this.mountPoint);
        this.root.render(<Widget theme={theme} username={username} />);
    }

    disconnectedCallback() {
        if (this.root) {
            this.root.unmount();
        }
    }
}

// Define the custom element
customElements.define('widget-web-component', WidgetWebComponent);

// Render the component in the main app
const container = document.getElementById('app'); // Make sure this exists in your HTML
const root = createRoot(container);
root.render(<div className='text-black'>Your main app or nothing here for a widget.</div>);
