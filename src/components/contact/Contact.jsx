import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contactez-moi</h2>
      <form>
        <input type="text" placeholder="Votre nom" />
        <input type="email" placeholder="Votre email" />
        <textarea placeholder="Votre message"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
