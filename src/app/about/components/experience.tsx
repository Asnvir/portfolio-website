import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import parse from 'html-react-parser';

const experienceContent = [
  {
    year: 'Dec 2025 - Present',
    position: 'Backend Engineer',
    companyName: '<a target="_blank" href="https://www.ivory-sw.com/">Ivory Software Systems</a>',
    details: [],
  },
  {
    year: 'Dec 2024 - Oct 2025',
    position: 'Backend Engineer',
    companyName: '<a target="_blank" href="https://faddom.com/">Faddom</a>',
    details: [
      'Utilized Kafka with Spring Kafka in Java Spring Boot applications for asynchronous inter-service communication in microservices architecture, improving system responsiveness and reducing microservice load.',
      'Containerized microservices with Docker for consistent deployment across environments.',
      'Optimizated PostgreSQL queries, reducing API response time.',
    ],
  },
  {
    year: 'Dec 2023 - Dec 2024',
    position: 'Backend Engineer',
    companyName: '<a target="_blank" href="https://brightdata.com/">Bright Data</a>',
    details: [
      'Developed IP rotation microservice using Java, Kafka, and Spring Boot.',
      'Implemented DAL (Data Access Layer) for MongoDB integration.',
      'Wrote unit and integration tests, ensuring code reliability and reducing production bugs.',
    ],
  },
  {
    year: 'Oct 2020 - Nov 2022',
    position: 'Network and Threat Support Specialist',
    companyName: '<a target="_blank" href="https://www.bynet.co.il/">Bynet Data Communications</a>',
    details: [
      'Detected and resolved network issues—from router misconfigurations to protocol failures (BGP, OSPF).',
      'Configured LAN/WAN networks on Cisco routers/switches and FortiGate/CheckPoint firewalls.',
      'Configured policies on firewalls to provide secure connections.',
    ],
  },
];

export default function Experience() {
  return (
    <>
      <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Experience</h3>
      <ul>
        {experienceContent.map((val, i) => (
          <li key={i}>
            <div className="icon">
              <FontAwesomeIcon icon={faBriefcase} className="fa" />
            </div>
            <span className="time open-sans-font text-uppercase">{val.year}</span>
            <h5 className="poppins-font text-uppercase">
              {val.position}
              <span className="place open-sans-font">{parse(val.companyName)}</span>
            </h5>
            <ul className="open-sans-font experience-details">
              {val.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
