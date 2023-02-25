import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineShareAlt } from 'react-icons/ai';
import type { Store } from 'types/store';
import copy from 'copy-to-clipboard';
import styled from 'styled-components';

interface Props {
  currentStore?: Store;
  expanded: boolean;
  onClickArrow: () => void;
}

const DetailHeader = ({ currentStore, expanded, onClickArrow }: Props) => {
  return (
    <Styled>
      <div className="header">
        <button
          className={`arrow_button ${expanded ? 'expanded' : ''}`}
          onClick={onClickArrow}
          disabled={!currentStore}
          aria-label={expanded ? '매장 정보 접기' : '매장 정보 펼치기'}
        >
          <IoIosArrowUp size={20} color="#666666" />
        </button>
        {!currentStore && (
          <p className="title">
            📍맛집을 <span>선택</span>해주세요!
          </p>
        )}
        {currentStore && (
          <div className="flex_row">
            <p className="name">
              {currentStore.name}
              <span className="sub_title">{currentStore.foodKind}</span>
            </p>
            <button
              onClick={() => {
                copy(location.origin + '/detail/' + currentStore.name);
              }}
              aria-label="매장 정보 주소 클립보드 복사"
            >
              <AiOutlineShareAlt size={24} color="#F88A25" />
            </button>
          </div>
        )}
      </div>
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
        margin: 4px 0;
        font-size: 1.25rem;
        font-weight: 700;

        > .sub_title {
          margin-left: 8px;
          font-size: 0.813rem;
          font-weight: 400;
          color: #8f8f8f;
        }
      }
    }
  }
`;
