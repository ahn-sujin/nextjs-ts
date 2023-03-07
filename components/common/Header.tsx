import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';

interface Props {
  logo?: boolean;
  back?: boolean;
  isFixed?: boolean;
  title?: string;
  rightElements?: React.ReactElement[];
  onClickLogo?: () => void;
}

const HeaderComponent = ({
  logo = false,
  back = false,
  isFixed = false,
  title,
  rightElements,
  onClickLogo,
}: Props) => {
  const router = useRouter();

  return (
    <Header className={`${isFixed ? 'fixed' : ''}`}>
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
        <button type="button" className="back" onClick={() => router.back()}>
          <BiArrowBack size="1.25rem" />
        </button>
      )}
      <div className="title">{title}</div>
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
  padding: 15px 20px 10px;

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 999;
  }

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
    top: 58%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.125rem;
    font-weight: 700;
  }

  > .flex_item {
    display: flex;
  }
`;
