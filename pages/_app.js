import React from 'react'
import '../styles/globals.css'
import Layout from "../Componenets/Layout/Layout"

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>

  ) 
  
} 

export default MyApp
