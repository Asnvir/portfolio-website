import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Address() {
  return (
    <address className="text-center contact-info-flex">
      <div className="contact-item">
        <FontAwesomeIcon icon={faMap} />
        <div className="contact-item-text">
          <span>Location</span>
          <span>Netanya, Israel</span>
        </div>
      </div>

      <div className="contact-item">
        <FontAwesomeIcon icon={faEnvelopeOpen} />
        <div className="contact-item-text">
          <span>mail me</span>
          <a href={'mailto:' + process.env.NEXT_PUBLIC_TO_EMAIL_ADDRESS}>{process.env.NEXT_PUBLIC_TO_EMAIL_ADDRESS}</a>
        </div>
      </div>

      <div className="contact-item">
        <FontAwesomeIcon icon={faPhone} />
        <div className="contact-item-text">
          <span>call me</span>
          <a href={'tel:' + process.env.NEXT_PUBLIC_FULL_PHONE_NUMBER}>{process.env.NEXT_PUBLIC_PHONE_NUMBER}</a>
        </div>
      </div>
    </address>
  );
}
