import React from 'react';
import SectionContainer from "../hoc/SectionContainer";


const Footer = () => {
  return (
    <SectionContainer fullScreen={false} sectionId="footer" bgColor="black">
      <footer className="footer">
        <p>© 2024 Mon Portfolio. Tous droits réservés.</p>
      </footer>
    </SectionContainer>
  );
};

export default Footer;
