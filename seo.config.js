/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  titleTemplate: '%s - 지도 서비스 어플리케이션',
  openGraph: {
    type: 'website',
    site_name: '지도 서비스 어플리케이션',
    images: [
      { url: 'https://nextjs.org/static/blog/next-13/twitter-card.png' },
    ],
  },
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
    },
  ],
  additionalMetaTags: [
    {
      name: 'naver-site-verification',
      content: '8c775aab7a94700d20f88112398c98e1c7ec8592',
    },
    {
      name: 'google-site-verification',
      content: 'p-_9ZM0KfmiyuKniNGWwmCAkjaYoddphFndbZs3CI3I',
    },
  ],
};
