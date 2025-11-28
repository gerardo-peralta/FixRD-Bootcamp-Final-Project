
// @ts-ignore
// @ts-nocheck
/* ------------------------emmanuel---------------------------→ */

import React from 'react';
import './sobrenosotros.css';

export default function AboutUs() {
  return (
    <>
      <div className="about-section">
        <h1 className="about-title">¿Quiénes Somos?</h1>
        <p>
          En FixRD unimos a los mejores técnicos certificados de República Dominicana con clientes que necesitan
          servicios confiables, rápidos y profesionales.
        </p>

        <img
          className="about-img"
          src="https://images.unsplash.com/photo-1581093448798-5a05f27c45cc"
          alt="Equipo de trabajo"
        />
      </div>

      <div className="about-section">
        <h1 className="about-title">Nuestra Misión</h1>
        <p>
          Brindar una plataforma moderna y segura que permita al usuario encontrar los servicios técnicos que necesita,
          mientras ayudamos a los profesionales a expandir su alcance.
        </p>
      </div>

      <div className="about-section">
        <h1 className="about-title">Nuestros Valores</h1>
        <ul>
          <li>✔ Transparencia</li>
          <li>✔ Responsabilidad</li>
          <li>✔ Profesionalidad</li>
          <li>✔ Confianza</li>
          <li>✔ Seguridad</li>
        </ul>
      </div>
    </>
  );
}
