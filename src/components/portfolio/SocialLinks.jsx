const socials = [
  {
    href: "https://github.com/abdulJalilHabibi",
    label: "GitHub",
    icon: "fa-brands fa-github",
  },
  {
    href: "https://www.linkedin.com/in/abdul-jalil-habibi-59645a409",
    label: "LinkedIn",
    icon: "fa-brands fa-linkedin-in",
  },
];

export function SocialLinks() {
  return (
    <ul className="socials" aria-label="Social media">
      {socials.map((s) => (
        <li key={s.label}>
          <a href={s.href} target="_blank" rel="noopener" aria-label={s.label}>
            <i className={s.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}
