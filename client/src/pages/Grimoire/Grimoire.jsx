import React from 'react';


const grimoireSite = () => {
    const iframeHeight = '800px';
    return (
        <main>
            <section className="kasa">
                <iframe
                    src="https://delahocheemmanuel.github.io/site_projet_7"
                    title="Booki"
                    width="100%"
                    height={iframeHeight}
                    style={{ border: 'none' }}
                />
            </section>
        </main>
    );
};

export default grimoireSite;
