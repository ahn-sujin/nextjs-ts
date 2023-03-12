import { useState } from 'react';
import useSWR from 'swr';
import { CURRENT_STORE_KEY } from 'hooks/useCurrentStore';
import type { Store } from 'types/store';
import DetailHeader from 'view/Home/Detail/DetailHeader';
import DetailContent from 'view/Home/Detail/DetailContent';
import styled from 'styled-components';

const HomeDetail = () => {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);

  return (
    <Styled>
      <div className={`detail_section ${currentStore ? 'selected' : ''} `}>
        <DetailHeader currentStore={currentStore} />
        <DetailContent currentStore={currentStore} />
      </div>
    </Styled>
  );
};
export default HomeDetail;

const Styled = styled.div`
  > .detail_section {
    position: absolute;
    bottom: 0;
    width: 430px;
    height: 78px;
    display: flex;
    flex-direction: column;
    padding: 10px 0 0;
    background-color: white;
    color: #444444;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    box-shadow: 0 -2px 8px 0 rgba(136, 136, 136, 0.3);
    transform: translateY(calc(100% - 68px));

    &.selected {
      height: 170px;
      transform: translateY(calc(100% - 160px));
      transition: all 0.8s;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;
