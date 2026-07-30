import React from "react";
import Button from "../../shared/ui/button/Button";
import "./Main-Info.css"
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
          <Button className="button-main">START NOW</Button>
        </div>
      </main>
    </>
  );
}
