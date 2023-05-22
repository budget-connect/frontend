import React from 'react';

import { ILPFooterLinkProps } from '../../types/LPinterface';
import Link from 'next/link';

const LPFooterLink: React.FC<ILPFooterLinkProps> = ({
  link,
  title,
  underline,
}) => {
  return (
    <>
      {underline ? (
        <Link
          className={
            'hover:text-secondary-content/75 inline-block underline transition'
          }
          href={link}
        >
          {title}
        </Link>
      ) : (
        <li>
          <Link
            className={
              'hover:text-secondary-content/75 inline-block transition'
            }
            href={link}
          >
            {title}
          </Link>
        </li>
      )}
    </>
  );
};

export default LPFooterLink;
