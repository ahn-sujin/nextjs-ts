import { ReactNode } from 'react';
import styled from 'styled-components';
import BaseStyle from 'components/common/BaseStyle';

interface CircleAlertProps {
  children?: ReactNode;
  isAlertOpen?: boolean;
}

const CircleAlert = ({ children, isAlertOpen }: CircleAlertProps) => {
  return (
    <Styled>
      <div className={`container ${isAlertOpen && 'view'}`}>{children}</div>
    </Styled>
  );
};

export default CircleAlert;

const Styled = styled.div`
  > .container {
    position: fixed;
    top: 10rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 9.375rem;
    height: 9.375rem;
    border-radius: 50%;
    background: ${BaseStyle.colors.primary};
    opacity: 0;
    visibility: hidden;

    &.view {
      opacity: 1;
      visibility: visible;
      transition: all 0.5s;
    }
  }
`;
