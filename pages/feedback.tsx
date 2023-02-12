import { Fragment } from 'react';
import { NextSeo } from 'next-seo';
import Header from '../components/common/Header';

export default function Feedback() {
  return (
    <Fragment>
      <NextSeo
        title="피드백"
        description="매장 지도 서비스 어플리케이션에 대한 피드백을 받습니다."
        canonical="https://sujin-map.vercel.app/feedback"
        openGraph={{
          url: 'https://sujin-map.vercel.app/feedback',
        }}
      />
      <Header />
      <main></main>
    </Fragment>
  );
}
