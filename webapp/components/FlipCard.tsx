// components/FlipCard.tsx
import React from "react";
import styles from "@/styles/FlipCard.module.css";

interface FlipCardProps {
  frontContent: string;
  backContent: string;
}

const FlipCard = ({ frontContent, backContent }: FlipCardProps) => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <p className={styles.centerText}>{frontContent}</p>
          <div className={styles.hoverText}>Hover Me</div>
        </div>
        <div className={styles.flipCardBack}>
          <p>{backContent}</p>
          <div className={styles.leaveText}>Leave Me</div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
