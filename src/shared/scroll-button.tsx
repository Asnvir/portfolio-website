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

    // Use scrollIntoView for better mobile compatibility
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
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
