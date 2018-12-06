import React from 'react';
import '../../styles/home-layout.css';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';
import Content from '../../components/content.js';
import '../../styles/styles.css';

function HomeLayout(props) {
  return (
      <section className="container">
          <Header/>
          <Content/>
          <Footer/>
      </section>
  )
}
export default HomeLayout;