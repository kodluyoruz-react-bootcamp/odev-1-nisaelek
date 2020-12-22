import axios from "axios";

const ENDPOINT = "https://jsonplaceholder.typicode.com";
const userid= "https://jsonplaceholder.typicode.com/users/id";
async function getData(userid) {
	try {
		const { data:user  } = await axios.get(`${ENDPOINT}/users/id`);
		console.log(users);
	} catch (e) {
		console.log(e);
	}
}

export default getData();