import Link from 'next/link';
import type { Store } from 'types/store';
import styled from 'styled-components';
import BaseStyle from 'components/common/BaseStyle';

type Props = {
  stores?: Store;
};

const ItemCategory = ({ stores }: Props) => {
  if (!stores) return null;

  return (
    <Styled>
      <ul className="category_list">
        {stores.map(({ nid, foodKind }: Store) => (
          <li key={nid}>
            <Link
              href={`/list/${foodKind}`}
              aria-label="카테고리 리스트 페이지로 이동"
            >
              {foodKind}
            </Link>
          </li>
        ))}
      </ul>
    </Styled>
  );
};

export default ItemCategory;

const Styled = styled.div`
  > .category_list {
    position: fixed;
    top: 3.5rem;
    max-width: 430px;
    display: flex;
    padding-top: 0.938rem;
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
      font-size: 0.875rem;

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
`;
