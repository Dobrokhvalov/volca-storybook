import React from "react";
import { storiesOf } from "@storybook/react";

// common components
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import PendingIcon from "../../components/common/PendingIcon";

// component stories
import ButtonStory from "./ButtonStory.jsx";
import PageContainerStory from "./PageContainerStory.jsx";
import TokenIconStory from "./TokenIconStory.jsx";

// Common Components
storiesOf("Common Components", module)
  .add("Header", () => <Header />)
  .add("Footer", () => <Footer />)
  .add("Button", ButtonStory)
  .add("Page Container", PageContainerStory)
  .add("Token Icon", TokenIconStory)
  .add("Pending Icon", () => <PendingIcon />);
