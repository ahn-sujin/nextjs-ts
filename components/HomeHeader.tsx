import { useCallback } from 'react';
import { useRouter } from 'next/router';
import copy from 'copy-to-clipboard';
import { AiOutlineShareAlt, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPinMapFill } from 'react-icons/bs';
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
          <button
            onClick={() => {
              console.log('리스트 페이지로 이동');
            }}
            className="box"
            key="button"
            aria-label="리스트 페이지로 이동"
          >
            <AiOutlineMenu size={20} color="white" />
          </button>,
          <button
            onClick={() => {
              console.log('지도 페이지로 이동');
            }}
            className="box"
            key="button"
            aria-label="지도 페이지로 이동"
          >
            <BsFillPinMapFill size={20} color="white" />
          </button>,
        ]}
      />
    </Styled>
  );
};

export default HomeHeader;

const Styled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

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

    :last-of-type {
      margin-right: 0;
    }
  }
`;
