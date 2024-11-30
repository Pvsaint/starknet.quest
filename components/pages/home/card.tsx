import styles from "@styles/components/pages/home/card.module.css";
import cdnize from "@utils/cdnize";
import Typography from "@components/UI/typography/typography";
import { TEXT_TYPE } from "@constants/typography";

type CardProps = {
  children: React.ReactNode;
  imgSrc: string;
  title: string;
  onClick: () => void;
  disabled?: boolean;
};

const Card: React.FC<CardProps> = ({ children, title, imgSrc, onClick, disabled }) => {
  return (
    <div className={styles.card} onClick={disabled ? undefined : onClick} aria-disabled={disabled}>
      <div
        style={{ backgroundImage: `url('${cdnize(imgSrc)}')` }}
        className={styles.cardImage}
      />
      <div className={`${styles.cardInfos}`}>
        <Typography type={TEXT_TYPE.H3} color="secondary" className={styles.cardTitle}>{title}</Typography>
        {children}
      </div>
    </div>
  );
};

export default Card;
