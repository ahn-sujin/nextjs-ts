import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import useCurrentStore from 'hooks/useCurrentStore';
import type { Store } from 'types/store';
import ListCategory from 'views/List/Category';
import ListCard from 'views/List/Card';
import styled from 'styled-components';

interface Props {
  store: Store;
}

const FoodKindList: NextPage<Props> = ({ store }) => {
  console.log(store);
  return (
    <>
      <NextSeo
        title="맛집일기"
        description="지도 서비스 리스트 페이지"
        canonical={`https://sujin-map.vercel.app/list/${store.foodKind}`}
        openGraph={{
          url: `https://sujin-map.vercel.app/list/${store.foodKind}`,
        }}
      />
      <Styled>
        <div className="">
          <ListCategory currentStore={store} />
          <ListCard currentStore={store} />
        </div>
      </Styled>
    </>
  );
};

export default FoodKindList;

/** https://nextjs.org/docs/basic-features/data-fetching/get-static-paths */
export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('public/stores.json')).default;
  const paths = stores.map((store) => ({ params: { name: store.foodKind } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import('public/stores.json')).default;
  const store = stores.find((store) => store.foodKind === params?.name);

  return { props: { store } };
};

const Styled = styled.div``;
