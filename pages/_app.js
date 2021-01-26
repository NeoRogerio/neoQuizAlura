import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Londrina Solid', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="title" content="Quiz Franquia Pokémon" />
        <meta name="description" content="Teste seus conhecimentos sobre a franquia de monstros de bolso mais famosa do mundo." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pokemon-quiz.neorogerio.vercel.app/" />
        <meta property="og:title" content="Quiz Franquia Pokémon" />
        <meta property="og:description" content="Teste seus conhecimentos sobre a franquia de monstros de bolso mais famosa do mundo." />
        <meta property="og:image" content={db.bg} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />

        <meta property="twitter:card" content="sumary_large_image" />
        <meta property="twitter:url" content="https://pokemon-quiz.neorogerio.vercel.app/" />
        <meta property="twitter:title" content="Quiz Franquia Pokémon" />
        <meta property="twitter:description" content="Teste seus conhecimentos sobre a franquia de monstros de bolso mais famosa do mundo." />
        <meta property="twitter:creator" content="@neorogerio" />
        <meta property="twitter:image" content={db.bg} />

        <link rel="shortcut icon" href="data:image/x-icon;base64,AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAABEByAHnCdgCm8KMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARAAABEAAAASIRERIhAAASESIiIRIQABEiISEiIRAAEjEzMzEyEAATMTMzMTMQABMzIjMzMxABITMiMzMxIQEhMzMyMzEhABEyERESMRAAEhEiIiESEAASIiIiIiIQAAEiIjIiIQAAABEjMyEQAAAAABIyEAAAAAAAAREAAADz5wAA4AMAAMABAADAAQAAwAEAAMABAADAAQAAgAAAAIAAAADAAQAAwAEAAMABAADgAwAA8AcAAPwfAAD+PwAA" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
