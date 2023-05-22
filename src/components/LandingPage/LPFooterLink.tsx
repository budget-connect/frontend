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
            'inline-block underline transition hover:text-secondary-content/75'
          }
          href={link}
        >
          {title}
        </Link>
      ) : (
        <li>
          <Link
            className={
              'inline-block transition hover:text-secondary-content/75'
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
