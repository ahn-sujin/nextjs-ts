import Link from 'next/link';
import styles from '../../styles/header.module.scss';
import Header from '../common/Header';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';

const HomeHeader = () => {
  return (
    <Header
      rightElements={[
        <button
          onClick={() => {
            alert('복사!');
          }}
          className={styles.box}
          style={{ marginRight: 8 }}
          key="button"
        >
          <AiOutlineShareAlt size={20} />
        </button>,
        <Link href="/feedback" className={styles.box} key="link">
          <VscFeedback size={20} />
        </Link>,
      ]}
    />
  );
};

export default HomeHeader;
