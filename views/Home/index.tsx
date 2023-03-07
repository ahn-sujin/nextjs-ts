import styled from 'styled-components';
import Header from 'components/HomeHeader';
import MapSection from 'views/Home/Map';
import DetailSection from 'view/Home/Detail';

const HomeView = () => {
  return (
    <Styled>
      <Header />
      <main className="main">
        <MapSection />
        <DetailSection />
      </main>
    </Styled>
  );
};

export default HomeView;

const Styled = styled.div`
  max-width: 430px;
  height: 100vh;
  margin: 0 auto;

  @media (max-width: 480px) {
    max-width: 100%;
  }

  .main {
    width: 100%;
    height: 100%;
  }
`;
