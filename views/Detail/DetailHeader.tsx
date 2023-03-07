import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoIosArrowUp } from 'react-icons/io';
import {
  AiOutlineShareAlt,
  AiOutlineCopy,
  AiOutlineHome,
} from 'react-icons/ai';
import type { Store } from 'types/store';
import copy from 'copy-to-clipboard';
import styled from 'styled-components';
import Header from 'components/common/Header';
import BaseStyle from 'components/common/BaseStyle';
import CircleAlert from 'components/Alert/CircleAlert';

interface Props {
  currentStore?: Store;
}

const DetailHeader = ({ currentStore }: Props) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const openAlert = () => {
    setIsAlertOpen(true);
  };
  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <Styled>
      <Header
        back
        rightElements={[
          <Link
            href="/"
            className="box"
            key="list_button"
            aria-label="홈으로 이동"
          >
            <AiOutlineHome size="1.25rem" color="back" />
          </Link>,
        ]}
      />
      {currentStore && (
        <div className="flex_row">
          <p className="name">
            {currentStore.name}
            <span className="sub_title">{currentStore.foodKind}</span>
          </p>
          <button
            onClick={() => {
              copy(location.origin + '/detail/' + currentStore.name),
                openAlert(),
                setTimeout(closeAlert, 2000);
            }}
            aria-label="매장 정보 주소 클립보드 복사"
          >
            <AiOutlineShareAlt size={24} color={BaseStyle.colors.primary} />
          </button>
        </div>
      )}
      <div className="alert_area">
        <CircleAlert isAlertOpen={isAlertOpen}>
          <AiOutlineCopy size="2.813rem" color="white" />
          <p className="alert_text">
            URL이
            <br /> 복사되었습니다.
          </p>
        </CircleAlert>
      </div>
    </Styled>
  );
};

export default DetailHeader;

const Styled = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  z-index: 200;

  @media (max-width: 480px) {
    width: 100%;
  }
  .box {
    width: 1.25rem;
    height: 1.25rem;
  }

  > .flex_row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.25rem;
    margin-bottom: 0.5rem;

    > .name {
      margin: 0.25rem 0;
      font-size: 1.25rem;
      font-weight: 700;

      > .sub_title {
        margin-left: 0.5em;
        font-size: 0.813rem;
        font-weight: 400;
        color: #8f8f8f;
      }
    }
  }

  .alert_area {
    .container {
      position: fixed;
      top: 10rem;
      left: 50%;
      transform: translateX(-50%);
    }

    .alert_text {
      margin-top: 0.5rem;
      text-align: center;
      color: #fff;
      font-size: 0.875rem;
    }
  }
`;
