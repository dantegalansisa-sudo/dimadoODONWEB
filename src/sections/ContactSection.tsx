import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';
import { useState, type FormEvent } from 'react';

const inputStyle = {
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 14,
  fontWeight: 400 as const,
  color: 'var(--text-dark)',
  background: 'var(--bg-white)',
  border: '1.5px solid var(--border)',
  borderRadius: 10,
  height: 50,
  padding: '0 16px',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const labelStyle = {
  fontFamily: 'var(--font-body)',
  fontWeight: 600 as const,
  fontSize: 12,
  color: 'var(--text-dark)',
  marginBottom: 6,
  display: 'block' as const,
};

const contactInfo = [
  { icon: '📞', text: '809-738-3233 / 809-561-5640' },
  { icon: '📱', text: 'WhatsApp: 829-933-9036 / 829-812-0499' },
  { icon: '📍', text: 'Av. Monumental, Plaza Liam, Primer Nivel' },
  { icon: '📷', text: '@dimadocentroodontologico' },
  { icon: '✅', text: 'Aceptamos ARS' },
];

export default function ContactSection() {
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open('https://wa.link/ky62jl', '_blank');
  };

  const getFocusStyle = (name: string) =>
    focused === name
      ? { borderColor: 'var(--blue-mid)', boxShadow: '0 0 0 3px rgba(33,150,243,0.1)' }
      : {};

  return (
    <section id="contacto" style={{ padding: '120px 0', background: 'var(--bg-white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionLabel icon="📅" text="AGENDA TU CITA" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'var(--text-h2)',
              color: 'var(--text-dark)',
              fontWeight: 400,
              lineHeight: 1.15,
              marginBottom: 12,
            }}
          >
            ¿Listo Para Tu
            <br />
            Consulta?
          </motion.h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              color: 'var(--text-muted)',
            }}
          >
            Contáctanos y agenda tu cita hoy
          </p>
        </div>

        {/* Cards */}
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20,
          }}
        >
          {/* Left — Info card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'var(--blue-main)',
              borderRadius: 20,
              padding: 48,
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Logo */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16 }}>
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: 'var(--cyan)',
                    display: 'inline-block',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    color: '#FFFFFF',
                  }}
                >
                  imado
                </span>
              </div>

              <div
                style={{
                  width: 40,
                  height: 2,
                  background: 'var(--cyan)',
                  borderRadius: 2,
                  marginBottom: 24,
                }}
              />

              {contactInfo.map((info) => (
                <div
                  key={info.text}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <span style={{ fontSize: 16, lineHeight: 1.5 }}>{info.icon}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.85)',
                      lineHeight: 1.5,
                    }}
                  >
                    {info.text}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <a
                href="https://wa.link/ky62jl"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 14,
                  color: '#FFFFFF',
                  background: 'var(--cyan)',
                  borderRadius: 50,
                  padding: '14px 28px',
                  transition: 'transform 0.2s',
                  marginBottom: 20,
                }}
              >
                <span style={{ fontSize: 16 }}>💬</span>
                WhatsApp Directo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Mini team avatars */}
              <div style={{ display: 'flex', marginTop: 8 }}>
                {[
                  '/images/CEO.jpeg',
                  '/images/PILAR FALETA.jpeg',
                  '/images/ROSSY GARCIA.jpeg',
                  '/images/JAILENNY SANTOS.jpeg',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Team"
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid var(--blue-main)',
                      marginLeft: i > 0 ? -8 : 0,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'var(--bg-section)',
              borderRadius: 20,
              padding: 48,
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 18 }}>
                <label style={labelStyle}>Nombre completo *</label>
                <input
                  type="text"
                  name="nombre"
                  required
                  style={{ ...inputStyle, ...getFocusStyle('nombre') }}
                  onFocus={() => setFocused('nombre')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div style={{ marginBottom: 18 }}>
                <label style={labelStyle}>Teléfono / WhatsApp *</label>
                <input
                  type="tel"
                  name="telefono"
                  required
                  style={{ ...inputStyle, ...getFocusStyle('telefono') }}
                  onFocus={() => setFocused('telefono')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div style={{ marginBottom: 18 }}>
                <label style={labelStyle}>Servicio</label>
                <select
                  name="servicio"
                  style={{ ...inputStyle, cursor: 'pointer', ...getFocusStyle('servicio') }}
                  onFocus={() => setFocused('servicio')}
                  onBlur={() => setFocused(null)}
                >
                  <option value="">Seleccionar servicio</option>
                  <option>Evaluación General</option>
                  <option>Odontopediatría</option>
                  <option>Ortodoncia (Brackets)</option>
                  <option>Periodoncia (Encías)</option>
                  <option>Endodoncia (Conductos)</option>
                  <option>Implantes Dentales</option>
                  <option>Cirugía Maxilofacial</option>
                  <option>Rejuvenecimiento Facial</option>
                  <option>Estética Dental</option>
                  <option>Rehabilitación Bucal (Prótesis)</option>
                </select>
              </div>

              <div style={{ marginBottom: 18 }}>
                <label style={labelStyle}>Especialista</label>
                <select
                  name="especialista"
                  style={{ ...inputStyle, cursor: 'pointer', ...getFocusStyle('especialista') }}
                  onFocus={() => setFocused('especialista')}
                  onBlur={() => setFocused(null)}
                >
                  <option value="">Sin preferencia</option>
                  <option>Dr. Maikel Maleno</option>
                  <option>Dra. Pilar Faleta (Ortodoncia)</option>
                  <option>Dra. Jhoanna Tapia (Ortodoncia)</option>
                  <option>Dra. Rossy García (Niños)</option>
                  <option>Dra. Jailenny Santos</option>
                </select>
              </div>

              <div style={{ marginBottom: 18 }}>
                <label style={labelStyle}>¿Tiene ARS?</label>
                <select
                  name="ars"
                  style={{ ...inputStyle, cursor: 'pointer', ...getFocusStyle('ars') }}
                  onFocus={() => setFocused('ars')}
                  onBlur={() => setFocused(null)}
                >
                  <option value="">Seleccionar</option>
                  <option>Sí</option>
                  <option>No</option>
                  <option>No sé</option>
                </select>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Mensaje</label>
                <textarea
                  name="mensaje"
                  rows={3}
                  style={{
                    ...inputStyle,
                    height: 'auto',
                    padding: '12px 16px',
                    resize: 'vertical',
                    ...getFocusStyle('mensaje'),
                  }}
                  onFocus={() => setFocused('mensaje')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 14,
                  color: '#FFFFFF',
                  background: 'var(--blue-mid)',
                  border: 'none',
                  borderRadius: 50,
                  height: 52,
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                Enviar Solicitud de Cita
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
