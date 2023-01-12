import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// styles
import styles from './Button.module.scss';

export interface ButtonProps {
  label?: string;
  icon?: any;
  ariaLabel?: string;
  onClick: () => void;
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, icon, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {icon && (
        <FontAwesomeIcon
          data-testid='button-icon'
          className={styles.buttonIcon}
          icon={icon}
        />
      )}
      {label && <span className={styles.buttonLabel}>{label}</span>}
    </button>
  );
};

export default Button;
