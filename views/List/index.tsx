import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import styled from 'styled-components';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import { STORE_KEY } from 'hooks/useStores';
import type { Store } from 'types/store';
import BaseStyle from 'components/common/BaseStyle';
import Header from 'components/common/Header';

const StoreList = () => {
  const { data: stores } = useSWR<Store[]>(STORE_KEY);

  if (!stores) return null;
  return (
    <Styled>
      <Header back title="매장 리스트" isFixed />
      <div className="container">
        <ul className="category_list">
          <li className="active">전체</li>
          <li>중식</li>
          <li>일식</li>
          <li>한식</li>
          <li>중식</li>
          <li>일식</li>
          <li>한식</li>
          <li>양식</li>
          <li>중식</li>
          <li>일식</li>
          <li>한식</li>
        </ul>
        <ul className="card_wrap">
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
                    <Link href={`/detail/${name}`}>{name}</Link>
                    <span>{foodKind}</span>
                  </p>
                  <p className="info">
                    <IoLocationOutline
                      size="1.125rem"
                      color={BaseStyle.colors.primary}
                    />
                    <span>{address}</span>
                  </p>
                  <p className="info">
                    <IoCallOutline
                      size="1.125rem"
                      color={BaseStyle.colors.primary}
                    />
                    <span>{phone}</span>
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

  > .container {
    padding: 8.125rem 0 1.25rem;

    > .category_list {
      position: fixed;
      left: 0;
      top: 3.5rem;
      display: flex;
      padding: 0.938rem 1.25rem 0 1.25rem;
      margin-bottom: 1.25rem;
      white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      background: #fff;
      border-bottom: 1px solid #f5f5f5;
      z-index: 999;

      > li {
        height: 1.875rem;
        line-height: 2rem;
        padding: 0px 0.938rem;
        color: ${BaseStyle.gray.sub};

        &.active {
          position: relative;
          color: ${BaseStyle.colors.primary};
          font-weight: 700;

          &:after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            width: 60%;
            height: 2px;
            background: ${BaseStyle.colors.primary};
          }
        }
      }
    }

    > .card_wrap {
      > .card_item {
        display: flex;
        margin: 0 1.25rem 1.25rem 1.25rem;
        padding: 1.25rem;
        border-radius: 1.25rem;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

        > .image_box {
          position: relative;
          width: 6.25rem;
          height: 6.25rem;
          background: #000;
        }
        > .text_box {
          width: calc(100% - 7.25rem);
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
              vertical-align: text-top;
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
              font-size: 0.75rem;
              color: ${BaseStyle.gray.sub};
            }
          }

          > .info {
            display: flex;
            align-items: flex-start;
            gap: 0.2rem;
            margin-bottom: 0.3rem;
            font-size: 0.875rem;

            > span {
              width: calc(100% - 1.125rem);
              font-size: 0.875rem;
            }
          }
        }
      }
    }
  }
`;
