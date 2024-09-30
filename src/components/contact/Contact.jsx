import React from 'react';
import SectionContainer from "../hoc/SectionContainer";

const Contact = () => {
    return (
      <SectionContainer fullScreen={false} sectionId="contact" title="Contact" bgColor="white">
        <form>
          <input type="text" placeholder="Votre nom" />
          <input type="email" placeholder="Votre email" />
          <textarea placeholder="Votre message"></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </SectionContainer>

    );
}

export default Contact
