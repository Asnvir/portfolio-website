const personalInfoContent = [
  { meta: 'First name', metaInfo: 'Artur' },
  { meta: 'Last name', metaInfo: 'Kopytin' },
  { meta: 'Location', metaInfo: 'Netanya, Israel' },
  { meta: 'Email', metaInfo: 'artur@kopytin.com' },
  { meta: 'Phone', metaInfo: '053-332-8460' },
  { meta: 'Languages', metaInfo: 'Hebrew, English, Russian, Ukrainian' },
];

export default function PersonalInfo() {
  return (
    <div className="box-stats with-margin">
      <ul className="about-list list-unstyled open-sans-font">
        {personalInfoContent.map((val, i) => (
          <li key={i}>
            <span className="title">{val.meta}: </span>
            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{val.metaInfo}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
