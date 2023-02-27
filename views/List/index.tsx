import useSWR from 'swr';
import { STORE_KEY } from 'hooks/useStores';
import type { Store } from 'types/store';
import styled from 'styled-components';
import Header from 'components/common/Header';

const StoreList = () => {
  // const {data: store} = useSWR<Store>(STORE_KEY);

  return (
    <Styled>
      <Header back title="매장 리스트" />
      <div className="container">
        <ul className="cart_wrap">
          <li className="card_item">
            <div className="image_box">이미지</div>
            <div className="text_box">
              <p className="store_name">
                신전 떡볶이<span>분식점</span>
              </p>
              <p>주소</p>
              <p>전화번호</p>
              <p>설명</p>
            </div>
          </li>
        </ul>
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

  > header {
    border: solid #000;
    border-width: 0 1px 1px 1px;
  }

  > .container {
    padding: 30px 0;

    > .cart_wrap {
      > .card_item {
        border: 1px solid #000;

        display: flex;
        padding: 20px;

        > .image_box {
          width: 100px;
          height: 100px;
          background: #000;
        }
        > .text_box {
          margin-left: 1rem;

          > .store_name {
            font-size: 1.125rem;

            > span {
              margin-left: 0.5rem;
              font-size: 0.875rem;
              color: #8f8f8f;
            }
          }
        }
      }
    }
  }
`;
