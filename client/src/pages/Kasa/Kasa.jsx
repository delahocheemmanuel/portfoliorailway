import React from 'react';
import Footer from '../../components/Footer/Footer';


const kasaSite = () => {
    const iframeHeight = '2100px';
  return (
    <main>
    <section className='kasa'>
      <iframe
        src="https://delahocheemmanuel.github.io/site_projet_6"
        title="Booki"
        width="100%"
        height={iframeHeight}
        style={{ border: 'none' }}
      />
    </section>
    <Footer />
    </main>
  );
};

export default kasaSite;