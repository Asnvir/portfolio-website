const personalInfoContent = [
  { meta: 'First name', metaInfo: 'Artur' },
  { meta: 'Last name', metaInfo: 'Kopytin' },
  { meta: 'Location', metaInfo: 'Netanya, Israel' },
  { meta: 'Email', metaInfo: process.env.NEXT_PUBLIC_TO_EMAIL_ADDRESS },
  { meta: 'Phone', metaInfo: process.env.NEXT_PUBLIC_PHONE_NUMBER },
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
