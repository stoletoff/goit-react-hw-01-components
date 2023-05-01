import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem';
import { FriendListCard } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <FriendListCard>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      ></FriendListItem>
    ))}
  </FriendListCard>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
