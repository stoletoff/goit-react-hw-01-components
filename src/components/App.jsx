import { Profile } from './Profile';
import user from './Data/user.json';
export const App = () => {
  return (
    <div style={{
      padding: 25,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      color: '#010101'
    }}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
