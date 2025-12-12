import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';

const educationContent = [
  {
    year: '2020 - 2024',
    degree: 'B.Sc. in Software Engineering',
    institute: 'Afeka College of Engineering',
    details: 'Software Developement',
  },
];

export default function Education() {
  return (
    <>
      <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Education</h3>
      <ul>
        {educationContent.map((val, i) => (
          <li key={i}>
            <div className="icon">
              <FontAwesomeIcon icon={faGraduationCap} className="fa" />
            </div>
            <span className="time open-sans-font text-uppercase">{val.year}</span>
            <h5 className="poppins-font text-uppercase">
              {val.degree}
              <span className="place open-sans-font">{val.institute}</span>
            </h5>
            <p className="open-sans-font">{parse(val.details)}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
