import React from "react";

import { storiesOf } from "@storybook/react";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Button from "../components/common/Button";
import TokenIcon from "../components/common/TokenIcon";
import PageContainer from "../components/common/PageContainer";

import ClaimPage from "../components/pages/ClaimPage";

// css imports for storybook
import "../../public/css/Inter UI fonts/interui-fonts.css";
import "../components/common/common.css";

// Pages
storiesOf("Pages", module).add("Claim Page", () => <ClaimPage />);

// Common Components
storiesOf("Common Components", module)
  .add("Header", () => <Header />)
  .add("Footer", () => <Footer />)
  .add("Button", () => (
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
  ))
  .add("Page Container", () => (
    <PageContainer>
      <div style={{ backgroundColor: "#aaa", height: 50, width: 50 }} />
      <div style={{ backgroundColor: "#aaa", height: 50, width: 50 }} />
      <div style={{ backgroundColor: "#aaa", height: 50, width: 50 }} />
    </PageContainer>
  ))
  .add("Token Icon", () => (
    <div>
      <div>
        <h4> ZRX token: </h4>
        <TokenIcon tokenAddress="0xe41d2489571d322189246dafa5ebde1f4699f498" />
      </div>
      <hr />
      <div>
        <h4> Unknown Token: </h4>
        <TokenIcon tokenAddress="0x000" />
      </div>
    </div>
  ));
