import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/header.module.scss';

interface Props {
  rightElements?: React.ReactElement[];
  onClickLogo?: () => void;
}

const HeaderComponent = ({ rightElements, onClickLogo }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link
          href="/"
          // className={styles.box}
          onClick={onClickLogo}
          aria-label="홈으로 이동"
        >
          <Image
            src="/images/logo4.png"
            width={90}
            height={25}
            alt="맛나요 로고"
          />
        </Link>
      </div>
      {rightElements && <div className={styles.flexItem}>{rightElements}</div>}
    </header>
  );
};

export default HeaderComponent;
