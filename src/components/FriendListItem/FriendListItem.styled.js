import styled from 'styled-components';

export const FriendListI = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  margin-bottom: 10px;
  background-color: rgba(188, 192, 197, 0.551);
  padding: 0;
  border-radius: 10px;
  border: 1px solid rgb(227, 227, 227);
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;

export const FriendListStatus = styled.span`
  width: 15px;
  height: 15px;
  margin-left: 10px;
  border-radius: 50%;
  background-color: ${props => props.status};
`;
export const FriendListAvatar = styled.img`
margin-left: 10px`;
export const FriendListName = styled.p`
font-weight: 500;
margin-left: 10px`;
