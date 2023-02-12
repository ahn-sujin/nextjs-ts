import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import styles from '../styles/detail.module.scss';
import type { Store } from '../types/store';
import DetailHeader from '../components/home/DetailHeader';
import DetailContent from '../components/home/DetailContent';
import { useRouter } from 'next/router';
import useCurrentStore from '../hooks/useCurrentStore';
import { NextSeo } from 'next-seo';

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const expanded = true;

  const router = useRouter();
  const { setCurrentStore } = useCurrentStore();

  const goToMap = () => {
    setCurrentStore(store);
    router.push(`
    /?zoom=15&lat=${store.coordinates[0]}&lng=${store.coordinates[1]}
    `);
  };

  return (
    <>
      <NextSeo
        title="매장 지도"
        description="매장 지도 서비스 어플리케이션 상세 페이지 입니다."
        canonical={`https://sujin-map.vercel.app/${store.name}`}
      />
      <div
        className={`${styles.detailSection} ${styles.expanded} ${styles.selected} `}
      >
        <DetailHeader
          currentStore={store}
          expanded={expanded}
          onClickArrow={goToMap}
        />
        <DetailContent currentStore={store} expanded={expanded} />
      </div>
    </>
  );
};

export default StoreDetail;

/** https://nextjs.org/docs/basic-features/data-fetching/get-static-paths */
export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('../public/stores.json')).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import('../public/stores.json')).default;
  const store = stores.find((store) => store.name === params?.name);

  return { props: { store } };
};
