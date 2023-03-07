import { useState } from 'react';
import useSWR from 'swr';
import { CURRENT_STORE_KEY } from 'hooks/useCurrentStore';
import type { Store } from 'types/store';
import DetailHeader from 'view/Home/Detail/DetailHeader';
import DetailContent from 'view/Home/Detail/DetailContent';
import styled from 'styled-components';

const HomeDetail = () => {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);

  return (
    <Styled>
      <div
        className={`detail_section ${expanded ? 'expanded' : ''} ${
          currentStore ? 'selected' : ''
        } `}
      >
        <DetailHeader
          currentStore={currentStore}
          expanded={expanded}
          onClickArrow={() => setExpanded(!expanded)}
        />
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
    transition: all 800ms;
    transform: translateY(calc(100% - 68px));

    &.selected {
      height: 170px;
      transform: translateY(calc(100% - 160px));
    }

    &.expanded {
      height: 100%;
      transform: translateY(0);
      z-index: 101;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;
