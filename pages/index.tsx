import { Fragment, useEffect } from 'react';
import { NextPage } from 'next';
import Header from '../components/home/Header';
import MapSection from '../components/home/MapSection';
import DetailSection from '../components/home/DetailSection';
import { Store } from '../types/store';
import useStores from '../hooks/useStores';
import { NextSeo } from 'next-seo';
interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <Fragment>
      <NextSeo
        title="매장 지도"
        description="Next.js 시작하기 강의를 위한 매장 지도 서비스 입니다."
      />
      <Header />
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
        <DetailSection />
      </main>
    </Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  /** TODO: next api routes로 불러오기 ---> 리팩토링 */
  const stores = (await import('../public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60, // 데이터가 빠른 시간안에 바뀌지 않음으로 설정 하지 않아도 무관
  };
}
