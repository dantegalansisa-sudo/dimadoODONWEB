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
  { icon: '📧', text: 'dimadocentroodont@hotmail.com' },
  { icon: '📷', text: '@dimadocentroodontologico' },
  { icon: '✅', text: 'Aceptamos ARS' },
];

export default function ContactSection() {
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    especialista: '',
    ars: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Construir mensaje de WhatsApp con todos los datos del formulario
    const lines = [
      '📋 *SOLICITUD DE CITA — DIMADO*',
      '',
      `👤 *Nombre:* ${formData.nombre}`,
      `📱 *Teléfono:* ${formData.telefono}`,
      `🦷 *Servicio:* ${formData.servicio || 'No especificado'}`,
      `👩‍⚕️ *Especialista:* ${formData.especialista || 'Sin preferencia'}`,
      `✅ *¿Tiene ARS?:* ${formData.ars || 'No especificado'}`,
    ];

    if (formData.mensaje) {
      lines.push(`💬 *Mensaje:* ${formData.mensaje}`);
    }

    const msg = encodeURIComponent(lines.join('\n'));
    const waUrl = `https://wa.me/18299339036?text=${msg}`;

    window.open(waUrl, '_blank');
    setStatus('sent');
    setFormData({ nombre: '', telefono: '', servicio: '', especialista: '', ars: '', mensaje: '' });
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
              <div style={{ marginBottom: 16 }}>
                <img
                  src="/images/logo real.jpeg"
                  alt="Dimado Centro Odontológico"
                  style={{
                    height: 44,
                    objectFit: 'contain',
                    borderRadius: 6,
                  }}
                />
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
                  '/images/ceoo.jpeg',
                  '/images/PILAR FALETA.jpeg',
                  '/images/ROSSY GARCIA.jpeg',
                  '/images/JAILENNY SANTOS.jpeg',
                  '/images/Angely  Betances.jpeg',
                  '/images/laudi montero, odontóloga general.jpeg',
                  '/images/Luisa rivera y odontóloga general.jpeg',
                  '/images/Blanca Aguilera- odontologia integral.jpeg',
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
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: '#DCFCE7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    fontSize: 36,
                  }}
                >
                  ✅
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 24,
                    color: 'var(--text-dark)',
                    fontWeight: 400,
                    marginBottom: 12,
                  }}
                >
                  ¡Solicitud Enviada!
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: 28,
                    maxWidth: 320,
                    margin: '0 auto 28px',
                  }}
                >
                  Hemos recibido tu solicitud de cita. Nuestro equipo se pondrá en contacto contigo pronto.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: 14,
                    color: 'var(--blue-mid)',
                    background: 'var(--blue-pale)',
                    border: 'none',
                    borderRadius: 50,
                    padding: '12px 28px',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                >
                  Enviar Otra Solicitud
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 18 }}>
                  <label style={labelStyle}>Nombre completo *</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
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
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    placeholder="809-000-0000"
                    style={{ ...inputStyle, ...getFocusStyle('telefono') }}
                    onFocus={() => setFocused('telefono')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label style={labelStyle}>Servicio</label>
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
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
                    value={formData.especialista}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer', ...getFocusStyle('especialista') }}
                    onFocus={() => setFocused('especialista')}
                    onBlur={() => setFocused(null)}
                  >
                    <option value="">Sin preferencia</option>
                    <option>Dr. Maikel Maleno</option>
                    <option>Dra. Pilar Falet (Ortodoncia)</option>
                    <option>Dra. Jhoanna Tapia (Periodoncia)</option>
                    <option>Dra. Rossy García (Niños)</option>
                    <option>Dra. Jailenny Santos</option>
                    <option>Dra. Angely Betances (Cirugía Maxilofacial)</option>
                  </select>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label style={labelStyle}>¿Tiene ARS?</label>
                  <select
                    name="ars"
                    value={formData.ars}
                    onChange={handleChange}
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
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Cuéntanos en qué podemos ayudarte..."
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

                {status === 'error' && (
                  <div
                    style={{
                      background: '#FEF2F2',
                      border: '1px solid #FECACA',
                      borderRadius: 10,
                      padding: '12px 16px',
                      marginBottom: 18,
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      color: '#DC2626',
                    }}
                  >
                    Hubo un error al enviar. Por favor intenta de nuevo o contáctanos por WhatsApp.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    width: '100%',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: 14,
                    color: '#FFFFFF',
                    background: status === 'sending' ? '#93C5FD' : 'var(--blue-mid)',
                    border: 'none',
                    borderRadius: 50,
                    height: 52,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    boxShadow: 'var(--shadow-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
                  }}
                >
                  {status === 'sending' ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar Solicitud de Cita
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
