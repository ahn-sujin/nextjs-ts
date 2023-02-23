import styled from 'styled-components';
import Header from 'components/HomeHeader';
import MapSection from 'views/Home/Map';
import DetailSection from 'views/Home/Detail';

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
  height: 100%;
  margin: 0 auto;

  .main {
    width: 100%;
    height: 100%;
  }
`;
