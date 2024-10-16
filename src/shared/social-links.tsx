import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialShare = [
  {
    icon: <FontAwesomeIcon icon={faLinkedinIn} />,
    link: 'https://www.linkedin.com/in/artur-kopytin/',
  },
  {
    icon: <FontAwesomeIcon icon={faGithub} />,
    link: 'https://github.com/Asnvir',
  },
];

export default function SocialLinks() {
  return (
    <div className="socials-container">
      <ul className="social list-unstyled">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={val.link} target="_blank" rel="noreferrer">
              {val.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
