import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://livingstonecano.com/",
  author: "Livingstone Cano",
  profile: "https://www.linkedin.com/in/livingstone-cano-7aa79728",
  desc: "Senior Software Engineer & Lead | Experto en .NET 9, Clean Architecture y Estrategia Cloud.",
  title: "Livingstone Cano",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 3, // Ajustado a 3 posts en la home como pediste
  postPerPage: 3, 
  scheduledPostMargin: 15 * 60 * 1000, 
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false, // Desactivado para un perfil profesional de portafolio
    text: "Edit page",
    url: "https://github.com/livingstone23/join/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "es", // Idioma base: Español
  timezone: "Europe/Madrid", // Ajustado a tu zona horaria según tu CV
} as const;

export const LOCALE = {
  main: "es-ES",
  langTag: ["es-ES", "en-US"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/livingstone23/join",
    linkTitle: `Repositorio de ${SITE.author} en Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/livingstone-cano-7aa79728",
    linkTitle: `${SITE.author} en LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:livingstone23@gmail.com",
    linkTitle: `Enviar un correo a ${SITE.author}`,
    active: true,
  },
];