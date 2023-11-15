import styled from 'styled-components';

export const Container = styled.div``;

export const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
`


export const UserItem = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
height: 70px;
padding: 0px 15px;
border: 2px solid ${({theme})=>theme.colors.gray};
border-radius: 10px;
margin-bottom:10px;
&:hover{
    background-color: ${({theme})=>theme.colors.gray};
}
.left{
    flex:1;
}

.right{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}
`

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

  .buttons{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
`;