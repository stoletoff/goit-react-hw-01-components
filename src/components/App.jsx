import { Profile } from './Profile';
import user from './Data/user.json';
import { Statistics } from './Statistics';
import data from './Data/data.json';

export const App = () => {
  return (
    <div
      style={{
        padding: 25,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
