import styles from './ColorText.module.scss';

interface ColortTextProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  uppercase?: boolean;
}

const ColorText: React.FC<ColortTextProps> = ({
  variant = 'primary',
  children,
  uppercase,
}) => (
  <span className={`${styles[variant]} ${uppercase ? styles.uppercase : ''}`}>
    {children}
  </span>
);

export default ColorText;
