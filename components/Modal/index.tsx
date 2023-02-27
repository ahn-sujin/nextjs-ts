import { ReactNode } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import BaseStyle from 'components/common/BaseStyle';

interface ModalProps {
  children?: ReactNode;
  title?: string;
  buttonName?: string;
  isModalOpen?: boolean;
  handleModal?: () => void;
}

const Modal = ({
  children,
  title,
  buttonName,
  isModalOpen,
  handleModal,
}: ModalProps) => {
  return (
    <Styled>
      {isModalOpen && (
        <>
          <div className="modal_background" onClick={handleModal} />
          <div className="modal">
            {title && (
              <header className="modal_header">
                <span>{title}</span>
                <AiOutlineClose onClick={handleModal} className="cancel_btn" />
              </header>
            )}
            <section className="modal_content">{children}</section>
            <footer className="modal_footer">
              {buttonName && (
                <button className="modal_complete_btn">{buttonName}</button>
              )}
            </footer>
          </div>
        </>
      )}
    </Styled>
  );
};

export default Modal;

const Styled = styled.div`
  > .modal_background {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.6);
    z-index: 200;
  }

  > .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 500px;
    max-height: 646px;
    border-radius: 5px;
    background-color: white;
    z-index: 201;
    overflow-y: auto;

    > .modal_header {
      padding: 10px 0;
      position: relative;
      text-align: center;
      background-color: ${BaseStyle.colors.primary};
      color: #fff;

      > .cancel_btn {
        position: absolute;
        top: 14px;
        right: 15px;
        border: none;
        background-color: transparent;
        color: #fff;
        cursor: pointer;
      }
    }

    > .modal_content {
      padding: 30px 30px 0 30px;

      > ul {
        padding: 0 5px;

        > li {
          display: flex;
          align-items: center;
          padding: 10px 0;

          > .data_label {
            display: block;
            width: 100px;
            margin-right: 10px;
            font-weight: 500;
            font-size: 14px;
            color: #9c9c9c;
          }

          > input {
            width: calc(100% - 110px);
            padding: 10px 8px;
            border: 1px solid #d0d0d0;
            border-radius: 3px;
          }
        }
      }
    }
    > .modal_footer {
      > .modal_complete_btn {
        width: calc(100% - 60px);
        margin: 30px;
        top: 10px;
        right: 20px;
        padding: 13px 100px;
        border: none;
        border-radius: 5px;
        background-color: ${BaseStyle.colors.primary};
        color: #fff;
      }
    }
  }

  @media (max-width: 480px) {
    .modal {
      min-width: calc(100% - 40px);
    }
  }
`;
