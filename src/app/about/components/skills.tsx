export default function Skills() {
  const skillsContent = [
    {
      category: 'Backend',
      skills: ['Java', 'Spring', 'Hibernate', 'JUnit'],
    },
    {
      category: 'Database',
      skills: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'Firebase'],
    },
  ];

  return (
    <>
      <h3 className="text-uppercase pb-5 mb-0 text-center custom-title ft-wt-600">Skills</h3>
      <div className="row">
        {skillsContent.map((val, i) => (
          <div className="col-12" key={i}>
            <div className="box-stats with-margin">
              <h3 className="poppins-font position-relative">{val.category}</h3>
              <div className="skills-list open-sans-font">
                {val.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
