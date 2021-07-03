const { createContext, useState, useEffect, useContext } = require("react");

export const AuthContext = createContext();

export function AuthRouter({ children }) {
	var window = window;
	const [token, setToken] = useState(
		window !== undefined ? window?.localStorage?.getItem("token") : null
	);

	useEffect(
		function () {
			if (token) {
				window?.localStorage.setItem("token", token);
			} else {
				window?.localStorage.removeItem("token");
			}
		},
		[token]
	);

	return (
		<AuthContext.Provider value={{ token, setToken }}>
			<AuthContext.Consumer>{() => children}</AuthContext.Consumer>
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const { token, setToken } = useContext(AuthContext);

	return [token, setToken];
}
