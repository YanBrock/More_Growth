import * as React from "react";
import '../index.scss';
import Heading from "../components/Heading/Heading";
import Details1 from "../components/Details1/Details1";
import Details2 from "../components/Details2/Details2";
import Layout from "../components/Layout";
import Offer from "../components/Offer/Offer";
import Helmet from 'react-helmet'

export default function Home() {



  return(
      <Layout className="layout">
        <Helmet>
          <title>Task for More Growth</title>
          <meta name="description" content="This is an app which was created as a test task which should show how I can to manage with Web Developer's responsibilities from More Growth" />
          <meta name="keywords" content="task, web app, web developer" />
          <meta property="og:title" content="Task for More Growth" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="This is an app which was created as a test task which should show how I can to manage with Web Developer's responsibilities from More Growth" />
          <meta property="og:image" content="" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content="http://localhost:8000/" />
          <link rel="canonical" href="http://localhost:8000/" />
        </Helmet>
        
        <Heading />
        <Details1 />
        <Details2 />
        <Offer />
      </Layout>
  );
};