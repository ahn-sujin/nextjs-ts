import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import useCurrentStore from 'hooks/useCurrentStore';
import type { Store } from 'types/store';
import DetailHeader from 'view/Detail/DetailHeader';
import DetailContent from 'view/Detail/DetailContent';
import styled from 'styled-components';

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
        title="맛집일기"
        description="지도 서비스 상세 페이지"
        canonical={`https://sujin-map.vercel.app/detail/${store.name}`}
        openGraph={{
          url: `https://sujin-map.vercel.app/detail/${store.name}`,
        }}
      />
      <Styled>
        <div className="detail_section  ">
          <DetailHeader currentStore={store} />
          <DetailContent currentStore={store} />
        </div>
      </Styled>
    </>
  );
};

export default StoreDetail;

/** https://nextjs.org/docs/basic-features/data-fetching/get-static-paths */
export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('public/stores.json')).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import('public/stores.json')).default;
  const store = stores.find((store) => store.name === params?.name);

  return { props: { store } };
};

const Styled = styled.div`
  height: 100%;
  > .detail_section {
    width: 430px;
    height: 100%;
    margin: 0 auto;
    z-index: 101;
    padding: 10px 0 0;
    background-color: white;
    transition: transform 800ms;

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;
