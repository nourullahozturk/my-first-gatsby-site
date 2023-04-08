import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
// The general process for using a plugin is to install it, configure it in your gatsby-config.js file, and then use it in your site as needed.
// https://www.gatsbyjs.com/plugins
import Layout from "../components/layout";
import Seo from "../components/seo";

// Gatsby automatically creates pages for React components that are the default export of files in the src/pages directory.
// Pages created in the src/pages directory use the name of the file as the route for the page.
// For example, if you had a file called src/pages/garden-gnomes.js, you could access that page at localhost:8000/garden-gnomes

const IndexPage = () => {
  // Under the hood, a React component is a function that returns a React element. A React element is an object that React uses to render DOM elements. The simplest way to write React elements is with JSX
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/artists-eyes-kfTLKubjUnM-unsplash.jpg"
        />
      </Layout>
    </main>
  );
};

export const Head = () => <Seo title="Home Page" />;

// You can use the Gatsby Head API by exporting a named function called Head in your pages and page templates (e.g. the ones used by createPage or the File System Route API).

// Be sure to capitalize Head and please note that exporting this named function inside a component like Layout won’t add the metadata to the <head>. The above works because you’re exporting Head in a page inside src/pages.

export default IndexPage;
