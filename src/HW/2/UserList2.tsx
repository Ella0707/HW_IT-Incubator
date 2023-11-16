import {CurrentUser} from './CurrentUser';
import {UsersObjectType} from './HW2';

type UserList2PropsType = {
	users: UsersObjectType // пропиши типизацию
	filterUsers: Function // пропиши типизацию
};

export const UserList2 = (props: UserList2PropsType) => {
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={() => props.filterUsers(props.users.myFriends[0].address.city)}>SHOW ME FRIENDS FROM LA</button>

			<ul>
			  {props.users.myFriends.map((user, index) => (
			    <CurrentUser key={index} user={user}/>
			  ))}
			</ul>
		</div>
	);
};
