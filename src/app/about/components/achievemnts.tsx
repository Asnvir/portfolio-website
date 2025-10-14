export default function Achievements() {
  return (
    <div className="box-stats with-margin">
      <h4 className="poppins-font text-center mb-2 ft-wt-600">
        Military Recognition as a Volunteer Soldier
      </h4>
      <h5 className="open-sans-font text-center mb-3 ft-wt-400" style={{ opacity: 0.8, fontSize: '14px' }}>
        (Hebrew - מצטיין אלוף)
      </h5>
      <p className="open-sans-font" style={{ lineHeight: '1.8', marginBottom: '20px' }}>
        Received a Certificate of Merit for exceptional dedication as a volunteer and lone soldier in the Israel Defense
        Forces (IDF), awarded by the Commander of the Southern Command.
      </p>
      <div className="text-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1kA0iuG2Wjj8m3l3AEGdZYX7HHoTt3SQN/view?usp=sharing"
          className="achievement-link"
        >
          📄 Link to the article
        </a>
      </div>
    </div>
  );
}
