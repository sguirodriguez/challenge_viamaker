import styled from 'styled-components';

export const Container = styled.div``;

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  display: ${({isOpen}) => {
    if(isOpen){
      return 'flex'
    }

    return 'none'
  }};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
  z-index: 1000000000;
`;

export const ModalContent = styled.div`
  background: ${({theme})=>theme.colors.white};
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  max-width: 850px;
  max-height: 450px;
  border: 1px solid ${({theme})=>theme.colors.grayDark};
  .header{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .box-value{
      padding: 10px;
      background-color: ${({theme})=>theme.colors.green};
    }

    .flex1{
      flex:1;
      display: flex;
    }

    .justify-left{
      justify-content: left;
    }
    .justify-center{
      justify-content: center;
    }
    .justify-right{
      justify-content: right;
    }
  }
`;

export const CloseButton = styled.button`

  cursor: pointer;
`;