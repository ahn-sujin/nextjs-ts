import Header from 'components/HomeHeader';
import MapSection from 'views/Home/Map';
import DetailSection from 'views/Home/Detail';
import style from 'styles/home.module.scss';

const HomeView = () => {
  return (
    <div className={style.container}>
      <Header />
      <main className={style.main}>
        <MapSection />
        <DetailSection />
      </main>
    </div>
  );
};

export default HomeView;
