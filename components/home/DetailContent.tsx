import Image from 'next/image';
import type { Store } from '../../types/store';
import Naver from 'public/images/naver.png';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import styles from '../../styles/detail.module.scss';

type Props = {
  currentStore?: Store;
  expanded: boolean;
};

const DetailContent = ({ currentStore, expanded }: Props) => {
  if (!currentStore) return null;
  const menuLengths = currentStore.menus.length;

  return (
    <div
      className={`${styles.detailContent} ${expanded ? styles.expanded : ''}`}
    >
      <div className={styles.images}>
        {currentStore.images.slice(0, 3).map((image) => (
          <div
            style={{ position: 'relative', maxWidth: 120, height: 80 }}
            key={image}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="120px"
              style={{ objectFit: 'cover' }}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
            />
          </div>
        ))}
      </div>
      {expanded && (
        <>
          <div className={styles.description}>
            <p>👉🏻&nbsp;{currentStore.description}</p>
          </div>
          <div className={styles.line} />
          <div className={styles.basicInfo}>
            <div className={styles.address}>
              <IoLocationOutline size={20} color="#9e9e9e" />
              <span>{currentStore.address || '정보가 없습니다.'}</span>
            </div>
            <div className={styles.phone}>
              <IoCallOutline size={18} color="#9e9e9e" />
              <span>{currentStore.phone || '정보가 없습니다.'}</span>
            </div>
            <div className={styles.naverUrl}>
              <Image src={Naver} width={20} height={20} alt="" />
              <a
                href={`https://pcmap.place.naver.com/restaurant/${currentStore.nid}/home`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>네이버 상세 정보</span>
              </a>
            </div>
          </div>
          <div className={styles.line} />
          <div className={styles.menus}>
            <div className={styles.menusTitle}>
              <h2>메뉴</h2>
              <span>{menuLengths}</span>
            </div>
            <ul className={styles.menuList}>
              {currentStore.menus?.map((menu) => (
                <li className={styles.menu} key={menu.name}>
                  <span className={styles.name}>{menu.name}</span>
                  <span className={styles.price}>{menu.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footer}>©SUJIN</div>
        </>
      )}
    </div>
  );
};
export default DetailContent;
