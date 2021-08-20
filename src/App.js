import React from 'react';
import './App.css';
import ProfilePhoto from "./Component/Profil/ProfilePhoto"
import FullName from "./Component/Profil/FullName"
import Address from "./Component/Profil/Address"

function App() {
  return (
    <div className="appContainer">
    <ProfilePhoto />
    <FullName/>
    <Address />
    </div>
    );
}

export default App;