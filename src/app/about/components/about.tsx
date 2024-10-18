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
              {/* [Personal Info & Achievements] & Skills starts */}
              <div className="row mb-4">
                {/* Personal Info & Achievements starts */}
                <div className="col-lg-6 col-md-12">
                  {/* Personal Info starts */}
                  <div className="personal-info-section " style={{ marginBottom: '5rem' }}>
                    <div className="col-12">
                      <h3 className="text-uppercase text-center custom-title mb-0 ft-wt-600">personal infos</h3>
                    </div>

                    {/* Image for mobile view starts*/}
                    <div className="col-12 d-block d-sm-none">
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

                    <div className="col-12">
                      <PersonalInfo />
                    </div>
                  </div>
                  {/* Personal Info ends */}

                  {/* Achievements starts */}
                  <div className="personal-info-section">
                    <div className="col-12">
                      <h3 className="text-uppercase text-center custom-title mb-0 ft-wt-600">Achievements</h3>
                    </div>
                    <div className="col-12">
                      <Achievements />
                    </div>
                  </div>
                  {/* Achievements Ends */}
                </div>
                {/* Personal Info & Achievements ends */}

                {/* Skills starts */}
                <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                  <Skills />
                </div>
                {/* Skills ends */}
              </div>
              {/* [Personal Info & Achievements] & Skills ends */}

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
