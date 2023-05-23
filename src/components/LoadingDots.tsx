import { twMerge } from 'tailwind-merge';
import styles from '../styles/loading-dots.module.css';

const LoadingDots = ({
  color = '#000',
  style = 'small',
}: {
  color: string;
  style: string;
}) => {
  return (
    <span
      className={twMerge(
        style == 'small' ? styles.loading2 : styles.loading,
        'py-2'
      )}
    >
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
};

export default LoadingDots;

LoadingDots.defaultProps = {
  style: 'small',
};
