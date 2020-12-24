const axios= require("axios") ;

const ENDPOINT = "https://jsonplaceholder.typicode.com";
async function getData(id) {
	try {
		const { data: users } = await axios.get(`${ENDPOINT}/users/${id}`);
		const { data: posts } = await axios.get(`${ENDPOINT}/posts?userId=1`);
		
		function combineData(){
		const combineDatas=console.log(users,posts);
			return combineDatas;
		}
	combineData();
	
	} catch (e) {
		console.log(e);
	}
}

 export default getData;