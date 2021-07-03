const SERVER_URL = "http://localhost:1234";

export default class FetchData {
	static async getMe(token) {
		try {
			let response = await fetch(SERVER_URL + "/users/get_me", {
				headers: {
					Authorization: "Bearer " + token,
				},
			});
			response = await response.json();
			return response;
		} catch (error) {
			return false;
		}
	}
	static async loginUser(email, password) {
		console.log(email, password);
		try {
			let response = await fetch(SERVER_URL + "/users/sign_in", {
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({
					email: email,
					password: password,
				}),
			});
			response = await response.json();
			return response;
		} catch (error) {
			return false;
		}
	}
}
