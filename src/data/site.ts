// ──────────────────────────────────────────────────────────────────────────
//  Edit your personal info here. Used by the Hero, About and Footer sections.
// ──────────────────────────────────────────────────────────────────────────
export const site = {
  name: 'Taha Hassan Tariq',
  tagline: 'Software Developer',
  // 2–3 sentences shown under the name in the hero.
  intro:
    'I am a Software Developer specializing in gameplay systems and full-stack applications. ' +
    'With 3 years of experience building polished mechanics in Unity C#, I also bridge the gap ' +
    'to the web—crafting high-performance experiences with .NET and the MERN stack.',
  // Longer bio for the About section.
  about:
    'I am a developer who loves bridging interactive entertainment with powerful web architectures. ' +
  'For the past 3 years, I have focused on Unity and C#, diving deep into gameplay programming, ' +
  'systems architecture, and tooling to bring complex ideas to life. Recently, I have expanded ' +
  'my toolkit into full-stack web development, leveraging .NET for robust backend systems and the ' +
  'MERN stack (MongoDB, Express, React, Node.js) to build fast, scalable, and accessible web applications. ' +
  'Whether I am optimizing a physics loop or architecting a modern API, I thrive on turning technical ' +
  'challenges into fluid user experiences.',
  // Skills shown as chips in the About section.
  skills: [
    'Unity',
    '.NET Framework',
    'C#',
    'C++',
    'Python',
    'TypeScript',
    'JavaScript',
    'HTML / CSS',
    'MERN',
    'Git',
  ],
  // Set these to your real URLs. Leave a value as '' to hide that link.
  links: {
    github: 'https://github.com/Taha-Hassan-1',
    linkedin: 'https://www.linkedin.com/in/taha-hassan-tariq-a23330231/',
    itch: 'https://tahahassan1.itch.io/',
    email: 'tahahassan672@gmail.com',
    // Put resume.pdf in public/ and keep this as is, or set to '' to hide.
    resume: `${import.meta.env.BASE_URL}resume.pdf`,
  },
};
