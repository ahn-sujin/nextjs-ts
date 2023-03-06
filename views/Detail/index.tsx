import { useState } from 'react';
import useSWR from 'swr';
import { CURRENT_STORE_KEY } from 'hooks/useCurrentStore';
import type { Store } from 'types/store';
import DetailHeader from 'view/Detail/DetailHeader';
import DetailContent from 'view/Detail/DetailContent';
import styled from 'styled-components';

const HomeDetail = () => {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);

  return (
    <Styled>
      <DetailHeader currentStore={currentStore} />
      <DetailContent currentStore={currentStore} />
    </Styled>
  );
};
export default HomeDetail;

const Styled = styled.div`
  width: 430px;
  height: 78px;
  padding: 10px 0 0;
  background-color: white;
  color: #444444;

  @media (max-width: 480px) {
    width: 100%;
  }
`;
