import React from 'react';
import { Avatar, ShellBar, Link } from '@ui5/webcomponents-react';
import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <ShellBar
        primaryTitle="Worklist App"
        notificationCount="99"
        showNotifications={true}
        showProductSwitch={true}
      >
        <Avatar slot="logo" image={logo} />
        <Avatar slot="profile" image="https://github.com/afuscella.png" />

      </ShellBar>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
        >
          Learn React
        </Link>
      </header>
    </div>
  );
}
