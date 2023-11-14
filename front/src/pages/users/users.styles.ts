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