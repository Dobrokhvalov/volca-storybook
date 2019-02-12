import React from "react";

import Button from "../../components/common/Button";

const ButtonStory = () => (
    <div>
      <div>
        <h4> Basic: </h4>
        <Button label="Claim" />
      </div>
      <hr />
      <div>
        <h4> Refreshing: </h4>
        <Button label="Claim" refreshing={true} />
      </div>
      <hr />
      <div>
        <h4> Disabled: </h4>
        <Button label="Claim" disabled={true} />
      </div>
      <hr />
      <div>
        <h4> Custom inline-style: </h4>
        <Button label="Claim" style={{ backgroundColor: "#aaa" }} />
      </div>
    </div>
);

export default ButtonStory;
