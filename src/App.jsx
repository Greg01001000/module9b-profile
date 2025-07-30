import UserProfile from './UserProfile';

const name = 'Max Karl Ernst Ludwig Planck';
const pic = 'https://static.wikia.nocookie.net/cards-the-universe-and-everything/images/5/53/API_Max_Planck.jpg';
const quote = '"A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it."';
const bonus = 'Max Planck was a German theoretical physicist who originated quantum theory by discovering that light waves are not continuous, but made of discrete packets.';

function App() {
  document.getElementById('root').style.margin = 'auto';
  return (
    <div>
      <UserProfile name={name} pic={pic} quote={quote} bonus={bonus} />
    </div>
  );
}

export default App;
