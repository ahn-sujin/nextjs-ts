import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import copy from 'copy-to-clipboard';
import styled from 'styled-components';
import {
  AiOutlineShareAlt,
  AiOutlineMenu,
  AiOutlineCopy,
} from 'react-icons/ai';
import { BsFillPinMapFill } from 'react-icons/bs';
import useMap from 'hooks/useMap';
import Header from 'components/common/Header';
import Modal from 'components/Modal';
import CircleAlert from 'components/Alert/CircleAlert';

const HomeHeader = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const openAlert = () => {
    setIsAlertOpen(true);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  const { resetMapOptions, getMapOptions } = useMap();
  const replaceAndCopyUrl = useCallback(() => {
    const mapOptions = getMapOptions();
    const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`;
    copy(location.origin + query);
  }, [getMapOptions]);

  return (
    <Styled>
      <Header
        onClickLogo={resetMapOptions}
        rightElements={[
          <button
            onClick={() => {
              replaceAndCopyUrl(), openAlert(), setTimeout(closeAlert, 2000);
            }}
            className="box"
            key="copy_button"
            aria-label="현재 위치 클립보드 복사"
          >
            <AiOutlineShareAlt size="1.25rem" color="white" />
          </button>,
          <button
            onClick={() => {
              console.log('리스트 페이지로 이동');
            }}
            className="box"
            key="list_button"
            aria-label="리스트 페이지로 이동"
          >
            <AiOutlineMenu size="1.25rem" color="white" />
          </button>,
          <button
            onClick={() => {
              console.log('지도 페이지로 이동');
            }}
            className="box"
            key="map_button"
            aria-label="지도 페이지로 이동"
          >
            <BsFillPinMapFill size="1.25rem" color="white" />
          </button>,
        ]}
      />
      <CircleAlert isAlertOpen={isAlertOpen}>
        <AiOutlineCopy size="2.813rem" color="white" />
        <p className="alert_text">
          현재 위치가
          <br /> 복사되었습니다.
        </p>
      </CircleAlert>
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
  .alert_text {
    margin-top: 0.5rem;
    text-align: center;
    color: #fff;
    font-size: 0.875rem;
  }
`;
