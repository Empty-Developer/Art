import React from "react";
import "./Main-Info.css"
import { Link } from 'react-router-dom';
export default function MainInfo() {

  return (
    <>
      <main className="container-main">
        <div className="box-main">
          <h1 className="title-main">The painting is<br/>worth a lot of money.</h1>
          <h4 className="description-main">
            This is an auction. The site was created to<br/>sell paintings. Do you
            have any paintings?<br/>DO YOU? Upload them to the site and start<br/>making
            money.
          </h4>
          <Link className="button-main" to="/registration">START NOW</Link>
        </div>
      </main>
    </>
  );
}
