import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import parse from 'html-react-parser';

const experienceContent = [
  {
    year: 'Dec 2024 - Present',
    position: 'Fullstack engineer',
    companyName: '<a target="_blank" href="https://faddom.com/">Faddom</a>',
    details: [
      'Developed product features for monitoring platform (data visualization, policy rules, alert notifications).',
      ' Improved application performance by reducing unnecessary re-renders by 40% through Angular optimization techniques.',
      'Wrote unit and integration tests, ensuring code reliability and reducing production bugs.',
    ],
  },
  {
    year: 'Dec 2023 - Dec 2024',
    position: 'Fullstack engineer',
    companyName: '<a target="_blank" href="https://brightdata.com/">Bright Data</a>',
    details: [
      'Developed features for web data collection platform(traffic monitoring, proxy configuration, IP rotation).',
      'Enhanced backend efficiency by optimizing database queries, reducing API response time by 25%.',
    ],
  },
  {
    year: 'Oct 2020 - Nov 2023',
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
