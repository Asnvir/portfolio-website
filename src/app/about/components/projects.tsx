import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';

const projectsContent = [
  {
    year: '2024',
    title: 'VolunNear',
    technologies: ['Java', 'Spring Boot', 'Typescript', 'React', 'JWT', 'MySQL', 'Docker', 'MinIO'],
    description:
      'VolunNear connects volunteers with organizations, simplifying the process with a user-friendly interface that saves time and ensures a seamless experience for everyone.',
    link: '<a target="_blank" href="https://github.com/Asnvir/VolunNear-backend">GitHub repo</a>',
  },
  {
    year: '2024',
    title: 'HealthApp',
    technologies: ['Java', 'Spring Boot', 'MongoDB', 'Docker', 'Swagger', 'JUnit'],
    description:
      'HealthApp is an innovative platform that transforms personal health and nutrition management with tools for informed diet, fitness, and wellness decisions.',
    link: '<a target="_blank" href="https://github.com/Asnvir/HealthApp">GitHub repo</a>',
  },
  {
    year: '2023',
    title: 'Search App',
    technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
    description: 'A React app using the Rick and Morty API for character and episode searches.',
    link: '<a target="_blank" href="https://github.com/Asnvir/RickMorty">GitHub repo</a>',
  },
  {
    year: '2023',
    title: 'Money Tracker',
    technologies: ['Java', 'RxJava', 'Firebase', 'Glide'],
    description: 'Intuitive Android app that simplifies expense tracking and organization.',
    link: '<a target="_blank" href="https://github.com/Asnvir/MoneyTracker">GitHub repo</a>',
  },
];

export default function Projects() {
  return (
    <>
      <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Projects</h3>
      <ul>
        {projectsContent.map((val, i) => (
          <li key={i}>
            <div className="icon">
              <FontAwesomeIcon icon={faBriefcase} className="fa" />
            </div>
            <span className="time open-sans-font text-uppercase">{val.year}</span>
            <h5 className="poppins-font text-uppercase">
              {val.title}
              <span className="place open-sans-font">{parse(val.link)}</span>
            </h5>
            <p className="open-sans-font mb-2">
              <span className="ft-wt-600">Technologies used: </span>
              <br />
              {val.technologies.join(', ')}
            </p>
            <p className="open-sans-font">
              <span className="ft-wt-800">Description: </span>
              <br />
              {val.description}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
