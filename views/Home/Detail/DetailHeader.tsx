import styles from 'styles/detail.module.scss';
import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineShareAlt } from 'react-icons/ai';
import type { Store } from 'types/store';
import copy from 'copy-to-clipboard';

interface Props {
  currentStore?: Store;
  expanded: boolean;
  onClickArrow: () => void;
}

const DetailHeader = ({ currentStore, expanded, onClickArrow }: Props) => {
  return (
    <div className={styles.header}>
      <button
        className={`${styles.arrowButton} ${expanded ? styles.expanded : ''}`}
        onClick={onClickArrow}
        disabled={!currentStore}
        aria-label={expanded ? '매장 정보 접기' : '매장 정보 펼치기'}
      >
        <IoIosArrowUp size={20} color="#666666" />
      </button>
      {!currentStore && (
        <p className={styles.title}>
          📍맛집을 <span>선택</span>해주세요!
        </p>
      )}
      {currentStore && (
        <div className={styles.flexRow}>
          <p className={styles.name}>
            {currentStore.name}
            <span className={styles.subTitle}>{currentStore.foodKind}</span>
          </p>
          <button
            onClick={() => {
              copy(location.origin + '/detail/' + currentStore.name);
            }}
            aria-label="매장 정보 주소 클립보드 복사"
          >
            <AiOutlineShareAlt size={24} color="#F88A25" />
          </button>
        </div>
      )}
    </div>
  );
};

export default DetailHeader;
