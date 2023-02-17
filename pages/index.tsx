import { Fragment, use, useEffect } from 'react';
import { NextPage } from 'next';
import Header from '../components/home/Header';
import MapSection from '../components/home/MapSection';
import DetailSection from '../components/home/DetailSection';
import { Store } from '../types/store';
import useStores from '../hooks/useStores';
import { NextSeo } from 'next-seo';
import style from '../styles/home.module.scss';

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
        title="오늘 맛집"
        description="지도 서비스 메인 페이지"
        canonical="https://sujin-map.vercel.app"
        openGraph={{
          url: 'https://sujin-map.vercel.app',
        }}
      />
      <Header />
      <main className={style.main}>
        <MapSection />
        <DetailSection />
      </main>
    </Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  const stores = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stores`
  ).then((res) => res.json());

  return {
    props: { stores },
    revalidate: 60 * 60, // 데이터가 빠른 시간안에 바뀌지 않음으로 설정 하지 않아도 무관
  };
}
