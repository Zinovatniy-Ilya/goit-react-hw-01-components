import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import statisticsData from "./json/statistical-data.json";
import profileUsers from "./json/user.json";
import friends from "./json/friends.json";
import transactions from "./json/transactions.json";

const { name, tag, location, avatar, stats } = profileUsers;
// console.log(profileUsers);

function App() {
  return (
    <div className="App">
      <h1>React. HomeWork-1</h1>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="statistics" stats={statisticsData} />
      <FriendList friends={friends} />
      <TransactionHistory transact={transactions} />
    </div>
  );
}

export default App;