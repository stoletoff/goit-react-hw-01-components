import PropTypes from 'prop-types';
import {
  FriendListI,
  FriendListStatus,
  FriendListAvatar,
  FriendListName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendListI>
    <FriendListStatus status={isOnline ? 'green' : 'red'}></FriendListStatus>
    <FriendListAvatar src={avatar} alt={name} width={48}/>
    <FriendListName>{name}</FriendListName>
  </FriendListI>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
