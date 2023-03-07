import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineShareAlt, AiOutlineCopy } from 'react-icons/ai';
import { CiCircleMore } from 'react-icons/ci';
import type { Store } from 'types/store';
import copy from 'copy-to-clipboard';
import styled from 'styled-components';
import BaseStyle from 'components/common/BaseStyle';
import CircleAlert from 'components/Alert/CircleAlert';

interface Props {
  currentStore?: Store;
  expanded: boolean;
  onClickArrow: () => void;
}

const DetailHeader = ({ currentStore, expanded, onClickArrow }: Props) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const openAlert = () => {
    setIsAlertOpen(true);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  const router = useRouter();

  return (
    <Styled>
      <div className="header">
        <button
          className="arrow_button"
          onClick={() => {
            router.push(`/detail/${currentStore?.name}`);
          }}
          disabled={!currentStore}
          aria-label="매장 상세 페이지로 이동"
        >
          <IoIosArrowUp size={20} color="#666666" />
        </button>
        {!currentStore && (
          <p className="title">
            📍매장을 <span>선택</span>해주세요!
          </p>
        )}
        {currentStore && (
          <div className="flex_row">
            <p className="name">
              <Link
                href={`/detail/${currentStore.name}`}
                aria-label="디테일 페이지로 이동"
              >
                {currentStore.name}
              </Link>
              <span className="sub_title">{currentStore.foodKind}</span>
            </p>
          </div>
        )}
      </div>
      <CircleAlert isAlertOpen={isAlertOpen}>
        <AiOutlineCopy size="2.813rem" color="white" />
        <p className="alert_text">
          URL이
          <br /> 복사되었습니다.
        </p>
      </CircleAlert>
    </Styled>
  );
};

export default DetailHeader;

const Styled = styled.div`
  > .header {
    display: flex;
    flex-direction: column;
    height: 60px;
    margin-bottom: 8px;
    padding: 0 20px;

    > .arrow_button {
      height: 20px;
      align-self: center;
      border: none;
      background-color: transparent;

      &:disabled {
        opacity: 0.2;
        cursor: not-allowed;
      }

      &.expanded {
        transform: rotate(180deg);
      }

      @keyframes bounce {
        from {
          transform: translateY(0);
        }
        to {
          transform: translateY(-5px);
        }
      }

      svg {
        animation: bounce 500ms infinite alternate ease-in;
      }
    }

    > .title {
      font-size: 1rem;
      font-weight: 700;
      margin: 4px auto;

      > span {
        color: #f88a25;
      }
    }

    > .flex_row {
      display: flex;
      justify-content: space-between;
      align-items: center;

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
  }

  .alert_text {
    margin-top: 0.5rem;
    text-align: center;
    color: #fff;
    font-size: 0.875rem;
  }
`;
