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
            src="/images/logo2.png"
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 430px;
  margin: 0 auto;
  padding: 10px 20px;

  > .logo {
    background: #fff;
    padding: 6px 8px 0px 10px;
    border-radius: 6px;
  }

  > .flex_item {
    display: flex;
  }
`;
