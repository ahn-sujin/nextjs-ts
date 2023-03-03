import styled from 'styled-components';
import BaseStyle from 'components/common/BaseStyle';

const ItemCategory = () => {
  return (
    <Styled>
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
    </Styled>
  );
};

export default ItemCategory;

const Styled = styled.div`
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
`;
