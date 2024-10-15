const personalInfoContent = [
  { meta: 'First name', metaInfo: 'Artur' },
  { meta: 'Last name', metaInfo: 'Kopytin' },
  { meta: 'Location', metaInfo: 'Tel Aviv, Israel' },
  { meta: 'Email', metaInfo: 'artur.kop97@gmail.com' },
  { meta: 'Langages', metaInfo: 'Hebrew, English, Russian, Ukrainian' },
];

export default function PersonalInfo() {
  const lastIndex = personalInfoContent.length - 1;
  const isLastIndexOdd = personalInfoContent.length % 2 !== 0;

  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i} className={i === lastIndex && isLastIndexOdd ? 'last-item' : ''}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{val.metaInfo}</span>
        </li>
      ))}
    </ul>
  );
}
