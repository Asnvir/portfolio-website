import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import parse from 'html-react-parser';

const experienceContent = [
  {
    year: '2018 - 2020',
    position: 'Network and Threat Support Specialist',
    companyName: '<a target="_blank" href="https://www.bynet.co.il/">Bynet</a>',
    details: `Managed, configured, maintained, and secured network equipment (routers, switches, firewalls) while providing real-time monitoring and threat response to ensure optimal performance and information system integrity.`,
  },
  {
    year: '2016 - 2018',
    position: 'Network and Threat Support Specialist',
    companyName: '<a target="_blank" href="https://www.idf.il/">IDF</a>',
    details: `Managed, configured, maintained, and secured network equipment (routers, switches, firewalls) while providing real-time monitoring and threat response to ensure optimal performance and information system integrity.`,
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
            <p className="open-sans-font">{val.details}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
