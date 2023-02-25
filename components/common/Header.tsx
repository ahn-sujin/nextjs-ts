import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  rightElements?: React.ReactElement[];
  onClickLogo?: () => void;
}

const HeaderComponent = ({ rightElements, onClickLogo }: Props) => {
  return (
    <Header>
      <div className="logo">
        <Link href="/" onClick={onClickLogo} aria-label="홈으로 이동">
          <Image
            src="/images/logo.png"
            width={90}
            height={25}
            alt="맛집일기 로고"
          />
        </Link>
      </div>
      {rightElements && <div className="flex_item">{rightElements}</div>}
    </Header>
  );
};

export default HeaderComponent;

const Header = styled.header`
  /* position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%); */
  background: #fff;

  width: 410px;
  height: 45px;
  padding: 0 10px;
  border-radius: 30px;

  /* display: flex;
  justify-content: space-between;
  align-items: center; */

  z-index: 100;
  pointer-events: none;

  @media (max-width: 480px) {
    width: 100%;
  }

  > .logo {
    position: absolute;
    left: 48%;
    top: 10px;
    transform: translateX(-50%);
    pointer-events: auto;
  }

  > .flex_item {
    display: flex;
    pointer-events: auto;
    position: absolute;
    right: 10px;
    top: 6px;
  }
`;
