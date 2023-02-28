import Image from 'next/image';
import useSWR from 'swr';
import styled from 'styled-components';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import { STORE_KEY } from 'hooks/useStores';
import type { Store } from 'types/store';
import BaseStyle from 'components/common/BaseStyle';
import Header from 'components/common/Header';

const StoreList = () => {
  const { data: stores } = useSWR<Store[]>(STORE_KEY);
  console.log('store', typeof stores);

  if (!stores) return null;
  return (
    <Styled>
      <Header back title="매장 리스트" />
      <div className="container">
        <ul className="cart_wrap">
          {stores.map(
            ({ nid, name, foodKind, address, phone, images, description }) => (
              <li key={nid} className="card_item">
                <div className="image_box">
                  <Image
                    src={images[0]}
                    alt="매장 대표 이미지"
                    fill
                    sizes="100px"
                    object-fit="cover"
                  />
                </div>
                <div className="text_box">
                  <p className="store_name">
                    {name}
                    <span>{foodKind}</span>
                  </p>
                  <p className="info short one">
                    <IoLocationOutline
                      size="1.125rem"
                      color={BaseStyle.colors.primary}
                    />
                    {address}
                  </p>
                  <p className="info short one">
                    <IoCallOutline
                      size="1.125rem"
                      color={BaseStyle.colors.primary}
                    />
                    {phone}
                  </p>
                  <p className="short two">{description}</p>
                </div>
              </li>
            )
          )}
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

  /* > header {
    border: solid ${BaseStyle.gray.sub};
    border-width: 0 1px 1px 1px;
  } */

  > .container {
    padding: 20px 0;

    > .cart_wrap {
      > .card_item {
        display: flex;
        margin: 0 20px 20px 20px;
        padding: 20px;
        border-radius: 20px;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

        > .image_box {
          position: relative;
          width: 6.25rem;
          height: 6.25rem;
          background: #000;
        }
        > .text_box {
          width: calc(100% - 6.25rem);
          margin-left: 1rem;

          > .store_name {
            margin-bottom: 0.5rem;
            font-size: 1.125rem;
            font-weight: 700;

            > span {
              margin-left: 0.5rem;
              font-size: 0.875rem;
              font-weight: 400;
              color: ${BaseStyle.gray.sub};
            }
          }

          > .short {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 0.875rem;

            &.one {
              white-space: nowrap;
              word-break: break-all;
            }

            &.two {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
          }

          > .info {
            display: flex;
            align-items: flex-start;
            gap: 0.2rem;
            margin-bottom: 0.3rem;
          }
        }
      }
    }
  }
`;
