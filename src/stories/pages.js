import React from "react";
import { storiesOf } from "@storybook/react";

// pages
import ClaimPage from "../components/pages/ClaimPage";
import ClaimPendingPage from "../components/pages/ClaimPendingPage";
import ClaimCompletedPage from "../components/pages/ClaimCompletedPage";

// Pages
storiesOf("Pages", module)
  .add("Claim Page", () => <ClaimPage />)
  .add("Claim Pending Page", () => <ClaimPendingPage />)
  .add("Claim Completed Page", () => <ClaimCompletedPage />);
