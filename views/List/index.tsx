import useSWR from 'swr';
import styled from 'styled-components';

import { STORE_KEY } from 'hooks/useStores';
import type { Store } from 'types/store';
import Header from 'components/common/Header';
import StoreListCategory from './Category';
import StoreListCard from './Card';

const StoreList = () => {
  const { data: stores } = useSWR<Store>(STORE_KEY);

  return (
    <Styled>
      <Header back title="매장 리스트" isFixed />
      <div className="container">
        <StoreListCategory />
        <StoreListCard stores={stores} />
      </div>
    </Styled>
  );
};

export default StoreList;

const Styled = styled.div`
  max-width: 430px;
  height: 100vh;
  margin: 0 auto;

  @media (max-width: 480px) {
    max-width: 100%;
  }

  > .container {
    padding: 8.125rem 0 1.25rem;
  }
`;
