// BEGIN
const getMutualFriends = (user1, user2) =>{
  const firstFriends = user1.getFriends();
  const secondFriend = user2.getFriends();

  const generalFriend = []

  for (const friend1 of firstFriends){
    for (const friend2 of secondFriend){
      if(friend1.id === friend2.id){
        generalFriend.push(friend1);
        break;
      }
    }
  }
  return generalFriend;
}
export { getMutualFriends };
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});