export default function Achievements() {
  const achievementsContent = [
    { title: `Java`, subTitle1: 'MySQL', subTitle2: 'MongoDB' },
    { title: 'Spring Boot', subTitle1: 'Spring Data JPA', subTitle2: 'Spring Security' },
    { title: 'Type Script', subTitle1: 'JavaScript', subTitle2: '' },
    { title: 'React', subTitle1: 'Redux', subTitle2: 'TanStack Query' },
    { title: 'NextJS', subTitle1: '', subTitle2: '' },
  ];

  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            {val.subTitle1 ? (
              <p className="open-sans-font m-0 position-relative text-uppercase">
                {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
              </p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
