import Image from 'next/image';

import Achievements from './achievemnts';
import Skills from './skills';
import Education from './education';
import Experience from './experience';
import PersonalInfo from './personal-info';
import heroImgMobile from '@images/hero/hero-1-mobile.jpg';
import Projects from './projects';
import { ScrollButton } from '@shared/scroll-button';

export default function About() {
  return (
    <>
      <div className="about react-tabs__tab-panel--selected">
        <div data-aos="fade-up" data-aos-duration="1200">
          <div className="title-section text-left text-sm-center">
            <h1>
              ABOUT <span>ME</span>
            </h1>
            <span className="title-bg">Resume</span>
          </div>
          <section className="main-content">
            <div className="container">
              {/* Image for mobile view starts*/}
              <div className="d-block d-sm-none mb-3">
                <Image
                  src={heroImgMobile}
                  placeholder="blur"
                  quality={100}
                  width={300}
                  height={300}
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div>
              {/* Image for mobile view ends*/}

              {/* Two columns using Grid */}
              <div className="about-grid">
                {/* Left Column: Personal Info + Achievements */}
                <div className="about-grid-column">
                  <h3 className="text-uppercase text-center custom-title mb-3 ft-wt-600">Personal Infos</h3>
                  <PersonalInfo />
                  <Achievements />
                </div>

                {/* Right Column: Skills */}
                <div className="about-grid-column">
                  <h3 className="text-uppercase text-center custom-title mb-3 ft-wt-600">Skills</h3>
                  
                  {/* Frontend */}
                  <div className="box-stats with-margin">
                    <h3 className="poppins-font position-relative">Frontend</h3>
                    <div className="skills-list open-sans-font">
                      {['TypeScript', 'Angular', 'Next.js', 'React.js', 'Tailwind CSS', 'Material UI', 'HTML', 'CSS'].map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="box-stats with-margin">
                    <h3 className="poppins-font position-relative">Backend</h3>
                    <div className="skills-list open-sans-font">
                      {['Java', 'Spring', 'Hibernate', 'JUnit'].map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Database */}
                  <div className="box-stats with-margin">
                    <h3 className="poppins-font position-relative">Database</h3>
                    <div className="skills-list open-sans-font">
                      {['MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'Firebase'].map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <ScrollButton targetId="experience-projects-education" />

              <hr className="separator" />

              {/* Experience & Projects & Education starts */}
              <div id="experience-projects-education" className="row">
                {/* Experience starts */}
                <div className="col-lg-4 col-md-6 m-15px-tb">
                  <div className="resume-box">
                    <Experience />
                  </div>
                </div>
                {/* Experience ends */}

                {/* Projects starts */}
                <div className="col-lg-4 col-md-6 m-15px-tb">
                  <div className="resume-box">
                    <Projects />
                  </div>
                </div>
                {/* Projects ends */}

                {/* Education starts */}
                <div className="col-lg-4 col-md-6 m-15px-tb">
                  <div className="resume-box">
                    <Education />
                  </div>
                </div>
                {/* Education ends */}
              </div>
              {/* Experience & Projects & Education ends */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}