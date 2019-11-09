import React from 'react'
import { Helmet } from "react-helmet";
import Nav from '../components/nav'
import Synthesizer from '../components/synthesizer'


const Home = () => (
  <div>
    <Helmet>
      <title>TechWave</title>
      <meta name="description" content="A web synthesizer" />
      <meta name="robots" content="index, follow" />
      <link rel='icon' href='/favicon.ico' />
      <link rel="stylesheet" href="/css/main.css" type="text/css" media="all"></link>
      <script src="/js/main.js" type="text/javascript" />
      <script src="/js/zdog.dist.min.js" type="text/javascript" />
    </Helmet>
    <Nav />
    <div id="main">
      <Synthesizer />
    </div>

    <style jsx>{`
      #main {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    `}</style>
  </div>
)

export default Home
