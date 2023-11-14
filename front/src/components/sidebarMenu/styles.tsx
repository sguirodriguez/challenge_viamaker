import { H5 } from '@styles/text';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 250px;
  height: 100%;
  position: absolute;
  left: 0;
  border: none !important;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 20px;
  padding-left: 12px;
  padding-right: 12px;
`;

export const Container = styled.div`
  width: 230px;
  min-height: 100% !important;
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.background};
  padding-top: 22px;
  padding-left: 12px;
  padding-right: 12px;
  position: fixed;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  margin-top: 5px;
  padding: 0px 11px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:first-of-type {
    margin-top: 0px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayLight};
    cursor: pointer;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .icon {
    width: 25px;
  }
`;

export const SubItem = styled.div`
  width: 100%;
  height: 32px;
  margin-top: 10px;
  padding-left: 34px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  .icon {
    width: 25px;
  }

  &:first-of-type {
    margin-top: 0px;
  }
`;

export const NotificationMessage = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.redLight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextNotification = styled(H5)`
  font-size: 12px;
  line-height: 150%;
`;

export const Divider = styled.div`
  margin-top: 24px;
  margin-left: -12px;
  width: 250px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.graySemiMedium};
`;

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
`;
