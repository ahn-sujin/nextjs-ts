import { useCallback } from 'react';
import { useRouter } from 'next/router';
import copy from 'copy-to-clipboard';
import { AiOutlineShareAlt } from 'react-icons/ai';
import useMap from 'hooks/useMap';
import Header from 'components/common/Header';
import styled from 'styled-components';

const HomeHeader = () => {
  const { resetMapOptions, getMapOptions } = useMap();

  const router = useRouter();
  const replaceAndCopyUrl = useCallback(() => {
    const mapOptions = getMapOptions();
    const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`;

    router.replace(query);
    copy(location.origin + query);
  }, [router, getMapOptions]);

  return (
    <Styled>
      <Header
        onClickLogo={resetMapOptions}
        rightElements={[
          <button
            onClick={replaceAndCopyUrl}
            className="box"
            key="button"
            aria-label="현재 위치 클립보드 복사"
          >
            <AiOutlineShareAlt size={20} color="white" />
          </button>,
        ]}
      />
    </Styled>
  );
};

export default HomeHeader;

const Styled = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

  @media (max-width: 480px) {
    width: calc(100% - 20px);
    left: 10px;
    transform: translateX(0);
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    margin-right: 8px;
    background-color: #f88a25;
    border: none;
    border-radius: 4px;
    box-shadow: 0 -2px 8px 0 rgba(136, 136, 136, 0.3);
  }
`;
