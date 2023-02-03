import { Fragment, useEffect } from 'react';
import { NextPage } from 'next';
import Header from '../components/home/Header';
import MapSection from '../components/home/MapSection';
import { Store } from '../types/store';
import useStores from '../hooks/useStores';

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
      <Header />
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
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
