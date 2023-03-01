import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';

interface Props {
  logo?: boolean;
  back?: boolean;
  isHome?: boolean;
  title?: string;
  rightElements?: React.ReactElement[];
  onClickLogo?: () => void;
}

const HeaderComponent = ({
  logo = false,
  back = false,
  isHome = false,
  title,
  rightElements,
  onClickLogo,
}: Props) => {
  return (
    <Header>
      {logo && (
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
      )}
      {back && (
        <div className="back">
          <Link href="/" aria-label="홈으로 이동">
            <BiArrowBack size="1.25rem" />
          </Link>
        </div>
      )}
      <div className="title">{title}</div>
      {rightElements && <div className="flex_item">{rightElements}</div>}
    </Header>
  );
};

export default HeaderComponent;

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 430px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 480px) {
    width: 100%;
  }

  > .logo {
    background: #fff;
    padding: 6px 8px 0px 10px;
    border-radius: 6px;
  }

  > .back {
    height: 1.25rem;
  }

  > .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.25rem;
    font-weight: 700;
  }

  > .flex_item {
    display: flex;
  }
`;
