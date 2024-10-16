import Image from 'next/image';

import Achievemnts from './achievemnts';
import Skills from './skills';
import Education from './education';
import Experience from './experience';
import PersonalInfo from './personal-info';
import heroImgMobile from '@images/hero/hero-1-mobile.jpg';
import Projects from './projects';

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
              {/* [Personal Info & Achievements] & Skills Starts */}
              <div className="row">
                {/* Personal Info & Achievements Starts */}
                <div className="col-lg-6 col-md-12">
                  {/* Personal Info Starts */}
                  <div className="personal-info-section " style={{ marginBottom: '5rem' }}>
                    <div className="col-12">
                      <h3 className="text-uppercase text-center custom-title mb-0 ft-wt-600">personal infos</h3>
                    </div>
                    {/* Image for mobile view */}
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
                    {/* Personal info */}
                    <div className="col-12">
                      <PersonalInfo />
                    </div>
                  </div>
                  {/* Personal Info Ends */}

                  {/* Achievemnts Starts */}
                  <div className="personal-info-section">
                    <div className="col-12">
                      <h3 className="text-uppercase text-center custom-title mb-0 ft-wt-600">Achievements</h3>
                    </div>
                    <div className="col-12">
                      <Achievemnts />

                      {/*<PersonalInfo />*/}
                    </div>
                  </div>
                  {/* Achievemnts Ends */}
                </div>
                {/* Personal Info & Achievements ends */}

                {/* Skills Starts */}
                <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                  <Skills />
                </div>
                {/* Skills Ends */}
              </div>
              {/* [Personal Info & Achievements] & Skills Ends */}

              <hr className="separator" />

              {/* Experience & Projects & Education Starts */}
              <div className="row">
                <div className="col-lg-4 col-md-6 m-15px-tb">
                  <div className="resume-box">
                    <Experience />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 m-15px-tb">
                  <div className="resume-box">
                    <Projects />
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 m-15px-tb">
                  <div className="resume-box">
                    <Education />
                  </div>
                </div>
              </div>
              {/* Experience & Projects & Education Ends */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
