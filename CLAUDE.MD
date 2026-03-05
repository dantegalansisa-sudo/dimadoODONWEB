# 🦷 CENTRO ODONTOLÓGICO DIMADO — CLAUDE.md DEFINITIVO
## Web Premium Clínica Dental #2 — Referencia Ibnesina Ultra Moderna

---

## ⚠️ INSTRUCCIÓN #1 — LIMPIAR ANTES DE CONSTRUIR

```
ANTES DE ESCRIBIR CUALQUIER CÓDIGO:
1. Elimina todo en /src/components/
2. Elimina todo en /src/sections/
3. Ejecuta: npm install framer-motion
4. Lee este CLAUDE.md completo
5. Construye desde cero limpio
```

---

## 🎯 VISIÓN DE DISEÑO

**Estética:** Ultra Modern Medical Clean — blanco puro dominante, azul Dimado como
acento, layout tipo Ibnesina con bento grid y floating stats cards.
**Referencia:** La imagen Ibnesina provista — hero full foto con paciente sonriendo,
floating cards con datos médicos, bento grid de servicios con íconos minimalistas.
**Diferenciador:** Foto grupal de los 8 miembros del equipo en sección especial.
CEO Dr. Maikel Maleno con sección dedicada. Bento grid de servicios animado.
**Sensación:** "Clínica moderna, equipo grande, ARS aceptado — aquí confío mi salud."

---

## 🎨 SISTEMA DE DISEÑO — ULTRA MODERN MEDICAL

### Colores
```css
:root {
  /* Fondos — MUY CLAROS, casi blancos */
  --bg-base:    #F8FBFF;        /* Azul muy muy claro — fondo principal */
  --bg-white:   #FFFFFF;        /* Blanco puro — hero y cards */
  --bg-section: #EEF5FC;        /* Azul suavísimo — secciones alternas */
  --bg-card:    #FFFFFF;        /* Cards blancas con shadow */

  /* Azul Dimado (del logo) */
  --blue-main:  #1565C0;        /* Azul marino oscuro del logo */
  --blue-mid:   #2196F3;        /* Azul medio — botones y accents */
  --blue-light: #64B5F6;        /* Azul claro — detalles */
  --blue-pale:  #E3F2FD;        /* Azul palidísimo — fondos chips */
  --cyan:       #26C6DA;        /* Cyan fresco — detalles modernos */

  /* Textos */
  --text-dark:  #0D1117;        /* Casi negro */
  --text-body:  #374151;        /* Gris oscuro */
  --text-muted: #9CA3AF;        /* Gris claro */

  /* Bordes y sombras */
  --border:     #E5E7EB;
  --shadow-sm:  0 1px 12px rgba(21,101,192,0.07);
  --shadow-md:  0 4px 32px rgba(21,101,192,0.10);
  --shadow-lg:  0 16px 56px rgba(21,101,192,0.13);
  --shadow-blue: 0 8px 28px rgba(33,150,243,0.28);
}
```

### Tipografía
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
```

```css
/* Títulos: DM Serif Display — elegancia médica moderna */
--font-display: 'DM Serif Display', serif;

/* Body/UI: DM Sans — limpio y super legible */
--font-body: 'DM Sans', sans-serif;

/* Escala */
--text-hero:  clamp(44px, 5.5vw, 80px);
--text-h2:    clamp(34px, 4vw, 56px);
--text-h3:    clamp(18px, 2vw, 24px);
--text-body:  16px;
--text-label: 11px;
```

### Espaciado OBLIGATORIO
```css
section    { padding: 120px 0; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 56px; }
/* Mobile: 80px 0 | container: 0 20px */
```

---

## 🏗️ STACK

```bash
npm install framer-motion
```

---

## 📁 ESTRUCTURA

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── AnimatedCounter.tsx
│   ├── SectionLabel.tsx
│   ├── FloatingCard.tsx
│   ├── BentoCard.tsx          ← Para el bento grid de servicios
│   └── WhatsAppButton.tsx
├── sections/
│   ├── HeroSection.tsx        ← ⭐ IBNESINA STYLE
│   ├── BentoServicesSection.tsx ← Grid asimétrico de servicios
│   ├── CEOSection.tsx         ← Dr. Maikel Maleno destacado
│   ├── StatsSection.tsx
│   ├── TeamSection.tsx        ← Doctoras conocidas + foto grupal
│   ├── TeamPhotoSection.tsx   ← Foto grupal de los 8 con diseño especial
│   ├── ARSSection.tsx         ← "Aceptamos ARS" — diferenciador
│   ├── ProcessSection.tsx
│   ├── TestimonialsSection.tsx
│   └── ContactSection.tsx
├── App.tsx
└── index.css
```

---

## 📄 SECCIONES — ESPECIFICACIONES EXACTAS

---

### 1. NAVBAR

```tsx
// sticky, bg white/90 blur al scroll, altura: 72px
// Completamente blanco — bordes muy suaves

// Izquierda: Logo Dimado (el punto azul + "imado" + "Centro Odontológico, E.I.R.L.")
// Centro: DM Sans 500 14px, color text-body
//   Inicio · Servicios · Equipo · Dr. Maleno · ARS · Contacto
//   hover: color var(--blue-mid)
// Derecha: 2 botones:
//   "📞 809-933-9036" — outline azul, border-radius 50px
//   "📅 Agendar Cita" — bg azul, color blanco, border-radius 50px, shadow-blue

// Estilo:
background: rgba(255,255,255,0.94);
backdrop-filter: blur(16px);
border-bottom: 1px solid var(--border);
```

---

### 2. HERO SECTION ⭐ — IBNESINA STYLE

**Concepto:** Replicar exactamente el estilo Ibnesina de la referencia.
Hero con borde redondeado (border-radius: 24px), foto dental full que ocupa 70%
del área, texto superpuesto a la izquierda, floating cards con datos del paciente.

**Estructura hero (como Ibnesina):**
```tsx
// Contenedor hero con border-radius: 24px, overflow: hidden
// Altura: 85vh, posición: relative

// Foto fondo dental (paciente sonriendo en consulta):
// https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1800&q=80

// Overlay izquierda — gradient suave para leer el texto:
background: linear-gradient(
  90deg,
  rgba(255,255,255,0.92) 0%,
  rgba(255,255,255,0.7) 30%,
  rgba(255,255,255,0.1) 60%,
  transparent 100%
);
```

**Contenido texto (izquierda, sobre el overlay):**
```tsx
// Badge pill (delay 0.3s):
<motion.div style={{
  display: 'inline-flex', alignItems: 'center', gap: 8,
  background: 'var(--blue-pale)', borderRadius: 50,
  padding: '8px 18px'
}}>
  <span style={{
    width: 8, height: 8, borderRadius: '50%',
    background: '#22C55E',
    boxShadow: '0 0 0 3px rgba(34,197,94,0.25)',
    animation: 'pulse 2s infinite'
  }} />
  <span style={{
    fontFamily: 'DM Sans', fontSize: 12, fontWeight: 600,
    color: 'var(--blue-main)', letterSpacing: '0.05em'
  }}>
    CONSULTAS DISPONIBLES · PLAZA LIAM
  </span>
</motion.div>

// Título (stagger 0.15s por línea, slideUp 40px):
<h1 style={{
  fontFamily: 'DM Serif Display',
  fontStyle: 'italic',
  fontSize: 'clamp(44px, 5.5vw, 80px)',
  lineHeight: 1.08,
  color: 'var(--text-dark)'
}}>
  Cuidado Dental Diario
  <br/>
  para una <span style={{ color: 'var(--blue-mid)' }}>Sonrisa</span>
  <br/>
  Saludable.
</h1>

// Descripción (delay 0.7s):
"Tu sonrisa, nuestra especialidad. El Dr. Maikel Maleno
y su equipo de especialistas te ofrecen la mejor atención
odontológica con tecnología de vanguardia."

// 2 botones (delay 0.9s):
// Btn 1 negro: "📥 Descargar Agenda" (estilo Ibnesina - negro pill)
// Btn 2 outline: "📅 Agendar Consulta"
// NOTA: Botón negro es moderno y diferente — referencia Ibnesina exacta

// Social proof inferior (delay 1.1s):
// "Más de 8 Doctores Especializados"
// 3 avatares circulares solapados del equipo
// → arrow pequeño con "Ver Equipo"
```

**Floating cards (como Ibnesina):**
```tsx
// CARD 1 — Superior derecha: "Insights / Paciente"
// Posición: top: 15%, right: 3%
// bg white, border-radius: 16px, shadow-md, padding: 16px 20px
// Contiene:
//   "Insights" label pequeño
//   Avatar paciente + "Juana · 32 años (Femenina)"
//   "Reporte Mensual · [barra de progreso azul]"

// CARD 2 — Media derecha: Stat grande
// "90 mg/dL" → adaptar a: "4.9 ⭐ Rating"
// Número grande DM Serif Display bold azul
// Label: "Calificación Promedio"

// CARD 3 — Inferior izquierda: Social proof
// "2,008+ Pacientes satisfechos"
// 3 fotos circulares solapadas

// CARD 4 — Inferior derecha: Especialistas
// Fotos circulares de las doctoras solapadas
// "Nuestros Especialistas"

// Todas las floating cards tienen:
// animation: float gentle 4-6s infinite con delays diferentes
// box-shadow: var(--shadow-md)
// border: 1px solid rgba(0,0,0,0.04)

// Badges extra (como Ibnesina):
// Top-right extremo: "in 🔗 ✕" — icons sociales pequeños
// "×20%" — stat pequeño

// Navegador de slides: "< 01 ──────────── 05 >"
// (decorativo — muestra que hay más)
```

---

### 3. BENTO SERVICES SECTION ⭐ — El diferenciador

```tsx
// Fondo: var(--bg-white)
// padding: 120px 0

// Header centrado:
// "Explora Nuestros Servicios"
// Subtítulo: "Explore now →" — pill outline pequeño

// BENTO GRID ASIMÉTRICO (como Ibnesina):
// Layout en grid con cards de diferentes tamaños

// Grid:
// [ grande: Ortodoncia ] [ mediana: Odontopediatría ]
// [ mediana: Limpieza  ] [   grande: Endodoncia      ]
// [ pequeña: Blanq.    ] [ pequeña: Carillas ] [ pequeña: Extracc. ]

const services = [
  {
    name: "Ortodoncia",
    icon: "😁",   // bracket/diente
    svgIcon: "...",  // SVG diente con bracket
    desc: "Brackets y alineadores para una sonrisa perfectamente alineada.",
    size: "large",    // ocupa 2 columnas
    specialist: "Dra. Pilar Faleta",
    bg: "var(--blue-pale)"
  },
  {
    name: "Odontopediatría",
    icon: "👶",
    desc: "Cuidado dental especializado para niños con más de 20 años de experiencia.",
    size: "medium",
    specialist: "Dra. Rossy García",
    bg: "#F0FFF4"  // verde muy suave
  },
  {
    name: "Limpieza Dental",
    icon: "🦷",
    desc: "Profilaxis profesional. Evaluación GRATIS este mes.",
    size: "medium",
    specialist: "Equipo Dimado",
    promo: "RD$950",
    bg: "var(--bg-section)"
  },
  {
    name: "Endodoncia",
    icon: "🔬",
    desc: "Tratamiento de conducto sin dolor con tecnología avanzada.",
    size: "large",
    specialist: "Especialistas Dimado",
    bg: "var(--blue-pale)"
  },
  {
    name: "Blanqueamiento",
    icon: "✨",
    desc: "Dientes más blancos en 1 sesión.",
    size: "small",
    bg: "#FFFDF0"
  },
  {
    name: "Carillas",
    icon: "💎",
    desc: "Transformación completa de tu sonrisa.",
    size: "small",
    bg: "var(--bg-section)"
  },
  {
    name: "Extracciones",
    icon: "🩺",
    desc: "Procedimientos seguros y sin dolor.",
    size: "small",
    bg: "#F9F0FF"
  }
];

// Estilo BentoCard:
// border-radius: 20px, padding: 32px
// border: 1px solid var(--border)
// Ícono SVG: 48px, color azul
// Nombre: DM Serif Display 22px
// Desc: DM Sans 400 14px text-muted
// Specialist badge: DM Sans 600 11px, bg blanco, border-radius 50px
// Hover: transform scale(1.01), shadow-md

// Card grande: tiene imagen de fondo de la especialidad (opacity 0.1)
// Card con promo "RD$950": badge especial amarillo "OFERTA DEL MES"

// framer-motion: stagger de entrada por card 0.08s
```

---

### 4. CEO SECTION — Dr. Maikel Maleno

```tsx
// Fondo: var(--bg-section)
// padding: 120px 0
// Layout: Contenido izquierda (55%) + Foto derecha (45%)

// CONTENIDO IZQUIERDA:
// [SectionLabel: 👨‍⚕️ DIRECTOR & CEO]

// <h2 DM Serif Display Italic>
//   Dr. Maikel Maleno
//   <br/>
//   <span color:blue>El Liderazgo</span> Detrás
//   <br/>
//   de Dimado.
// </h2>

// [Línea azul 60px]

// Párrafo:
"El Dr. Maikel Maleno fundó el Centro Odontológico Dimado con
una visión clara: ofrecer atención dental de especialidad con
el más alto nivel de calidad y calidez humana. Su liderazgo
ha construido un equipo de 8 profesionales comprometidos con
la salud bucal de sus pacientes."

// Quote box (bg azul pale, border-left: 3px solid azul):
"Tu sonrisa, nuestra especialidad."
— Dr. Maikel Maleno, Director & CEO

// Credenciales:
// 🦷 Director del Centro Odontológico Dimado
// 🏆 Equipo de 8 especialistas
// ✅ Aceptamos ARS
// 📍 Av. Monumental, Plaza Liam, Primer Nivel

// [Botón: Agendar con Dr. Maleno →]

// FOTO DERECHA:
// /public/images/dr-maikel.jpg
// (el Dr. Maikel del centro en la foto grupal — bata negra, en el centro)
// Si no hay foto individual: usar la foto grupal cropeada al Dr. Maikel
// border-radius: 20px, shadow-lg
// Blob azul morphing detrás (css animation)

// Badge sobre la foto:
// "CEO & Director · Centro Odontológico Dimado"
// bg white, shadow-md, border-radius: 12px
```

---

### 5. TEAM SECTION — Las Especialistas Conocidas

```tsx
// Fondo: var(--bg-white)
// padding: 120px 0

// Header:
// [SectionLabel: 👩‍⚕️ NUESTRAS ESPECIALISTAS]
// <h2>El Equipo que<br/>Cuida Tu Sonrisa</h2>
// Nota: "Pondremos tu foto con tu nombre aquí, Dra."

// Grid 2x2 — 4 doctoras con datos reales

const specialists = [
  {
    name: "Dra. Pilar Faleta",
    role: "ORTODONCISTA",
    specialty: "Ortodoncia — Brackets y alineadores",
    image: "/public/images/dra-pilar.jpg",
    placeholder: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&q=80",
    badge: "ORTODONCIA"
  },
  {
    name: "Dra. Jhoanna Tapia",
    role: "ESPECIALISTA EN ORTODONCIA",
    specialty: "Tratamientos ortodóncicos avanzados",
    image: "/public/images/dra-jhoanna.jpg",
    placeholder: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&q=80",
    badge: "ORTODONCIA"
  },
  {
    name: "Dra. Rossy García",
    role: "ODONTOPEDIATRA",
    specialty: "Odontología pediátrica · +20 años de experiencia",
    image: "/public/images/dra-rossy.jpg",
    placeholder: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80",
    badge: "ODONTOPEDIATRÍA",
    highlight: "+20 AÑOS"  // badge especial de experiencia
  },
  {
    name: "Dra. Jailenny Santos",
    role: "ODONTÓLOGA",
    specialty: "Atención general y especializada",
    image: "/public/images/dra-jailenny.jpg",  // foto enviada por el cliente
    placeholder: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=500&q=80",
    badge: "ODONTOLOGÍA"
  }
];

// Estilo card doctor:
// bg white, border-radius: 20px, overflow hidden
// border: 1px solid var(--border)
// shadow-sm → shadow-md en hover
// transform translateY(-6px) en hover

// Foto: aspect-ratio 3/4, object-fit cover, object-position top
// Badge rol: bg var(--blue-pale), color var(--blue-main)
// Nunito/DM Sans 600 11px uppercase, border-radius 50px

// Badge highlight especial (solo Dra. Rossy):
// bg var(--blue-main), color white
// "+20 AÑOS" — posición top-left

// ⚠️ NOTA IMPORTANTE PARA CLAUDE CODE:
// El cliente subirá fotos reales de cada doctora nombradas:
// /public/images/dra-pilar.jpg
// /public/images/dra-jhoanna.jpg
// /public/images/dra-rossy.jpg
// /public/images/dra-jailenny.jpg
// /public/images/dr-maikel.jpg
// Si no existen, usar placeholders de Unsplash
```

---

### 6. TEAM PHOTO SECTION ⭐ — La Foto Grupal

```tsx
// Fondo: var(--bg-section)
// padding: 120px 0

// ⚠️ SECCIÓN ESPECIAL — La foto grupal de los 8 miembros

// Layout: Texto izquierda (40%) + Foto derecha (60%)

// TEXTO IZQUIERDA:
// [SectionLabel: 🤝 NUESTRO EQUIPO COMPLETO]
// <h2 DM Serif Display>
//   8 Profesionales,<br/>
//   Una Sola <em>Misión</em>.
// </h2>
// [Línea azul]
// "En Centro Odontológico Dimado contamos con un equipo
// de 8 especialistas altamente capacitados, comprometidos
// con brindarte la mejor atención dental en un ambiente
// moderno y acogedor."

// Grid de chips de especialidades:
// [Ortodoncia] [Odontopediatría] [Endodoncia]
// [Blanqueamiento] [Carillas] [Limpieza]
// bg var(--blue-pale), color var(--blue-main), border-radius 50px

// [Botón: Conoce a Nuestro Equipo →]

// FOTO DERECHA:
// src: /public/images/equipo-dimado.jpg  ← La foto grupal de los 8
// (La foto grupal con uniformes negros enviada por el cliente)
// border-radius: 20px
// box-shadow: var(--shadow-lg)
// object-fit: cover

// Overlay en la foto (hover): 
// Aparece badge "CENTRO ODONTOLÓGICO DIMADO" con logo
// Smooth transition

// Decoración:
// Blob azul opacity:0.06 detrás de la foto
// Marco offset: border: 2px solid var(--blue-pale), offset: 12px
// border-radius: 20px

// Entrada con scroll:
// Foto: slideRight 60px → 0, delay 0.3s
// Texto: slideLeft 40px → 0, delay 0.1s
```

---

### 7. ARS SECTION — Diferenciador clave

```tsx
// Fondo: var(--blue-main) — sección azul marino
// padding: 80px 0

// Header centrado blanco:
// ✅ "Aceptamos ARS"
// Subtítulo: "Tu seguro de salud cubre tu tratamiento dental"

// Grid de logos/nombres de ARS (placeholders si no hay logos):
// ARS Humano · ARS Senasa · ARS Universal · ARS Simag
// ARS Constitución · Y muchas más

// Cada ARS: bg rgba(255,255,255,0.1), border-radius: 12px
// padding: 20px, DM Sans 600 14px blanco centrado
// hover: bg rgba(255,255,255,0.2), scale 1.03

// CTA final:
// "¿Tienes ARS? Llámanos y verificamos tu cobertura"
// [Botón blanco: 📞 Llamar Ahora]
```

---

### 8. STATS SECTION

```tsx
// Fondo: var(--bg-white)
// padding: 80px 0
// Línea superior e inferior: 1px solid var(--border)

const stats = [
  { value: 2008, suffix: "+", label: "PACIENTES SATISFECHOS" },
  { value: 8,    suffix: "",  label: "ESPECIALISTAS EN EQUIPO" },
  { value: 20,   suffix: "+", label: "AÑOS DE EXPERIENCIA (Dra. Rossy)" },
  { value: 4.9,  suffix: "★", label: "CALIFICACIÓN PROMEDIO" }
];

// Layout: 4 columnas, border-right entre cada una
// Número: DM Serif Display 700, 72px, color var(--blue-main)
// Label: DM Sans 600 11px uppercase letter-spacing, text-muted
// AnimatedCounter con IntersectionObserver
```

---

### 9. PROCESS SECTION

```tsx
// Fondo: var(--bg-section)
// padding: 120px 0

// Header centrado
// 4 pasos con línea conectora punteada

const steps = [
  { num: "01", icon: "📞", title: "Llama o Escribe",     desc: "Contáctanos por WhatsApp o teléfono para consultar disponibilidad." },
  { num: "02", icon: "🔍", title: "Evaluación Inicial",  desc: "Evaluación dental GRATIS. Diagnóstico completo de tu salud bucal." },
  { num: "03", icon: "🦷", title: "Tu Tratamiento",      desc: "Plan personalizado ejecutado por nuestros especialistas certificados." },
  { num: "04", icon: "😊", title: "Sonrisa Nueva",       desc: "Resultado que transforma tu confianza y bienestar diario." }
];

// Línea dashed conectora: border-top: 2px dashed var(--border)
// Número: círculo bg var(--blue-main), número DM Sans 800 blanco
// Entrada con stagger 0.2s
```

---

### 10. OFERTA ESPECIAL — Banner Promocional

```tsx
// Fondo: var(--bg-white)
// padding: 60px 0

// Banner horizontal llamativo:
// bg: linear-gradient(135deg, var(--blue-main), var(--blue-mid))
// border-radius: 20px, padding: 48px 56px
// shadow-lg

// Izquierda: Texto
// "🎁 Mes de la Salud Bucal"
// "Evaluación GRATIS + Profilaxis dental"
// Precio destacado: "RD$ 950" en blanco bold grande
// "¡Llama y aprovecha solo por este mes!"

// Derecha: CTA
// [Botón blanco bold: Aprovechar Oferta →]
// "Llama: (829) 933-9036"

// Badge flotante: "INSCRIPCIÓN GRATIS" — cyan, border-radius 50px
// Elemento decorativo: diente SVG opacity:0.1 en background
```

---

### 11. TESTIMONIALS

```tsx
// Fondo: var(--bg-section)
// padding: 120px 0

const testimonials = [
  {
    initials: "CM",
    name: "Carmen M.",
    treatment: "Ortodoncia — Dra. Pilar",
    stars: 5,
    text: "La Dra. Pilar es increíble. Mi tratamiento de ortodoncia fue exactamente lo que necesitaba. El Dr. Maleno y su equipo son muy profesionales. 100% recomendados."
  },
  {
    initials: "JP",
    name: "José P.",
    treatment: "Odontopediatría — Dra. Rossy",
    stars: 5,
    text: "La Dra. Rossy tiene una paciencia y amor por los niños increíble. Mi hijo fue con miedo y salió feliz. Más de 20 años de experiencia que se notan en cada detalle."
  },
  {
    initials: "AM",
    name: "Ana M.",
    treatment: "Limpieza y Blanqueamiento",
    stars: 5,
    text: "Fui por el especial de profilaxis y quedé fascinada. La clínica en Plaza Liam es moderna y limpia. Todo el equipo te hace sentir en un ambiente de confianza total."
  }
];

// 3 cards en grid
// border-top: 3px solid var(--cyan)
// Comilla: DM Serif Display 80px, color var(--blue-pale)
```

---

### 12. CONTACT SECTION

```tsx
// Fondo: var(--bg-white)
// padding: 120px 0

// Header:
// [SectionLabel: 📅 AGENDA TU CITA]
// <h2>¿Listo Para Tu<br/>Consulta?</h2>
// "Tu primera evaluación es GRATIS"

// 2 cards lado a lado

// CARD IZQUIERDA — Datos:
// bg: var(--blue-main), color white, border-radius: 20px, padding: 48px

// Logo Dimado blanco
// [Línea cyan]

// 📞 809-738-3233 / 809-561-5640
// 📱 WhatsApp: 829-933-9036 / 829-812-0499
// 📍 Av. Monumental, Plaza Liam, Primer Nivel
// 📷 @dimadocentroodontologico
// ✅ Aceptamos ARS

// [Botón cyan: 💬 WhatsApp Directo →]
// wa.link/ky62jl

// Mini fotos circulares del equipo solapadas

// CARD DERECHA — Formulario:
// bg: var(--bg-section), border-radius: 20px, padding: 48px
// shadow-md

// Campos:
// [Nombre completo]*
// [Teléfono / WhatsApp]*
// [Servicio: Select]
//   → Limpieza y Profilaxis (RD$950)
//   → Ortodoncia
//   → Odontopediatría
//   → Blanqueamiento
//   → Carillas
//   → Extracción
//   → Evaluación General (GRATIS)
// [Especialista: Select]
//   → Dr. Maikel Maleno
//   → Dra. Pilar Faleta (Ortodoncia)
//   → Dra. Jhoanna Tapia (Ortodoncia)
//   → Dra. Rossy García (Niños)
//   → Dra. Jailenny Santos
//   → Sin preferencia
// [¿Tiene ARS? Select → Sí / No / No sé]
// [Mensaje]
// [Btn azul: Enviar Solicitud de Cita →]

// Inputs: DM Sans 400, bg white, border var(--border)
// border-radius: 10px, height: 50px
// focus: border var(--blue-mid), shadow azul suave
// Label encima: DM Sans 600 12px
```

---

### 13. FOOTER

```tsx
// Fondo: #0A1628 (azul muy oscuro)
// Línea cyan 2px superior
// padding: 64px 0 32px

// 4 columnas: Logo | Servicios | Especialistas | Contacto
// Logo Dimado blanco
// "Tu sonrisa, nuestra especialidad" en DM Serif Display Italic

// Copyright: "© 2025 Centro Odontológico Dimado E.I.R.L. | Av. Monumental, Plaza Liam"
```

---

## 🎭 ANIMACIONES — Framer Motion

### 1. Hero — Entrada Ibnesina style
```tsx
// Badge pill:     delay 0.2s, fadeIn + scale 0.9→1
// Línea 1 título: delay 0.4s, slideUp 40px
// Línea 2 título: delay 0.55s, slideUp 40px
// Línea 3 título: delay 0.7s, slideUp 40px
// Descripción:    delay 0.85s, fadeIn
// Botones:        delay 1.0s, slideUp
// Foto hero:      delay 0.5s, fadeIn + scale 1.02→1
// Cards flotantes: delay 0.7s, 0.9s, 1.1s, 1.3s — scale 0.85→1 + fadeIn
```

### 2. Floating cards
```css
@keyframes float-gentle {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(0.5deg); }
}
/* Card 1: 5s ease-in-out infinite */
/* Card 2: 6s ease-in-out infinite 1s */
/* Card 3: 4.5s ease-in-out infinite 0.5s */
/* Card 4: 5.5s ease-in-out infinite 1.5s */
```

### 3. Bento grid — entrada escalonada
```tsx
// Cada bento card entra con stagger 0.07s
// initial: { opacity: 0, scale: 0.96, y: 20 }
// animate: { opacity: 1, scale: 1, y: 0 }
// transition: duration 0.6s, ease [0.16, 1, 0.3, 1]
```

### 4. Foto grupal — parallax suave al scroll
```tsx
// useScroll + useTransform
// La foto de equipo se mueve -20px a +20px al hacer scroll
// Efecto de profundidad sutil
```

### 5. Secciones generales
```tsx
// useInView: initial { opacity:0, y:40 } → { opacity:1, y:0 }
// duration: 0.8s, ease: [0.16, 1, 0.3, 1]
// stagger children: 0.1s
```

---

## 🔘 WHATSAPP FLOTANTE

```tsx
// bg: var(--blue-mid), color white, border-radius: 50px
// "💬 WhatsApp" con ping animado
// box-shadow: var(--shadow-blue)

const msg = "Hola Centro Odontológico Dimado! Me interesa agendar una cita. ¿Me pueden ayudar?";
const wa = "https://wa.link/ky62jl";
// O directo: https://wa.me/18299339036
```

---

## 📱 RESPONSIVE

```
Mobile (375px):
- Hero: 1 col, foto atrás opacity:0.15, floating cards ocultas
- Bento grid: 1 columna, todas cards iguales
- Team Photo: foto arriba, texto abajo
- Team: 2 columnas
- Contact: apiladas

Tablet (768px):
- Bento: 2 columnas
- Team: 2 columnas

Desktop: layout completo | max-width: 1200px
```

---

## 🎯 REGLAS ABSOLUTAS

```
1. FONDO: BLANCO #F8FBFF — ultra limpio y moderno como Ibnesina
2. FUENTES: DM Serif Display Italic para títulos + DM Sans para body
3. ACENTO: Azul #2196F3 principal, Cyan #26C6DA moderno
4. HERO: Border-radius 24px en el contenedor (estilo Ibnesina exacto)
5. BENTO GRID: Obligatorio — diferenciador visual clave de esta web
6. FOTO GRUPAL: Sección propia con parallax — los 8 miembros
7. ARS SECTION: Obligatoria — diferenciador de mercado para RD
8. CEO: Dr. Maikel Maleno con sección dedicada — es la marca
9. PROMO: Banner "Evaluación GRATIS + Profilaxis $950" visible
10. FORMULARIO: Incluye selector de ARS y de especialista
11. ESPACIADO: 120px entre secciones SIN EXCEPCIÓN
12. SKILLS: frontend-design + taste-skill + webapp-testing — TODAS
```

---

## ⚠️ NOTA SOBRE LAS IMÁGENES (Para Claude Code)

```
EL CLIENTE SUBIRÁ LAS SIGUIENTES FOTOS:
- /public/images/dr-maikel.jpg      ← CEO (foto del centro en foto grupal)
- /public/images/dra-pilar.jpg      ← Dra. Pilar Faleta
- /public/images/dra-jhoanna.jpg    ← Dra. Jhoanna Tapia
- /public/images/dra-rossy.jpg      ← Dra. Rossy García
- /public/images/dra-jailenny.jpg   ← Dra. Jailenny Santos (foto enviada)
- /public/images/equipo-dimado.jpg  ← Foto grupal de los 8 (FOTO ENVIADA)

MIENTRAS NO ESTÉN, USA ESTOS UNSPLASH PLACEHOLDERS:
- Dr. Maikel: https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500
- Dra. Pilar: https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500
- Dra. Jhoanna: https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500
- Dra. Rossy: https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500
- Dra. Jailenny: https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=500
- Equipo: https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800
```

---

## 📌 SEO

```tsx
title: "Centro Odontológico Dimado | Tu Sonrisa, Nuestra Especialidad — Av. Monumental"
description: "Centro Odontológico Dimado E.I.R.L. Dr. Maikel Maleno. Ortodoncia, Odontopediatría, Endodoncia, Blanqueamiento. Aceptamos ARS. Plaza Liam, Av. Monumental. Tel: 809-738-3233"
```

---

## 💬 INSTRUCCIÓN EXACTA PARA CLAUDE CODE

```
Lee el CLAUDE.md completo antes de empezar.

PASO 1: Limpia /src/components/ y /src/sections/
PASO 2: npm install framer-motion
PASO 3: Construye en este orden EXACTO:

1. index.css — variables CSS + fuentes DM Serif + DM Sans
2. FloatingCard.tsx + BentoCard.tsx + AnimatedCounter.tsx
3. HeroSection.tsx ← PRIORIDAD MÁXIMA — estilo Ibnesina
   - Contenedor con border-radius: 24px
   - Foto dental de fondo con overlay suave
   - Texto con stagger de entrada
   - 4 floating cards animadas
   - Social proof inferior con avatares
4. Navbar.tsx
5. BentoServicesSection.tsx — grid asimétrico animado
6. CEOSection.tsx — Dr. Maikel Maleno destacado
7. TeamSection.tsx — 4 doctoras con datos reales
8. TeamPhotoSection.tsx — foto grupal con parallax
9. ARSSection.tsx — fondo azul, logos ARS
10. StatsSection.tsx
11. PromoSection.tsx — banner oferta especial
12. ProcessSection.tsx
13. TestimonialsSection.tsx
14. ContactSection.tsx — con selector de ARS
15. Footer + WhatsAppButton

DETENTE después del Hero y muéstramelo.
Espera aprobación antes de continuar.

IMPORTANTE: Las fotos reales del equipo llegarán nombradas
según la guía de imágenes. Usar Unsplash placeholders
mientras tanto.

Usa las skills frontend-design, taste-skill y webapp-testing.
```

---

*Proyecto #2 de 15 clínicas dentales — NEXIX Tech Studio | nexixstudio.com*