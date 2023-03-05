import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import type { Store } from 'types/store';
import BaseStyle from 'components/common/BaseStyle';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';

type Props = {
  stores?: Store;
};

const CardList = ({ stores }: Props) => {
  if (!stores) return null;

  return (
    <Styled>
      <ul className="card_wrap">
        {/* <li key={stores.nid} className="card_item">
          <div className="image_box">
            <Image
              src={stores.images[0]}
              alt="매장 대표 이미지"
              fill
              sizes="100px"
              object-fit="cover"
            />
          </div>
          <div className="text_box">
            <p className="store_name">
              <Link href={`/detail/${stores.name}`}>{stores.name}</Link>
              <span>{stores.foodKind}</span>
            </p>
            <p className="info">
              <IoLocationOutline
                size="1.125rem"
                color={BaseStyle.colors.primary}
              />
              <span>{stores.address}</span>
            </p>
            <p className="info">
              <IoCallOutline size="1.125rem" color={BaseStyle.colors.primary} />
              <span>{stores.phone}</span>
            </p>
            <p className="short two">{stores.description}</p>
          </div>
        </li> */}
        {stores.map(
          ({
            nid,
            name,
            foodKind,
            address,
            phone,
            images,
            description,
          }: Store) => (
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
    </Styled>
  );
};

export default CardList;

const Styled = styled.div`
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
`;
