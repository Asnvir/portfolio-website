'use client';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

type ScrollButtonProps = {
  targetId: string;
};

export const ScrollButton = ({ targetId }: ScrollButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      return;
    }
    window.scrollBy({
      top: targetElement.getBoundingClientRect().top - window.pageYOffset,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <button ref={buttonRef} onClick={handleScroll} className="readmore-button-icon">
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </div>
  );
};
