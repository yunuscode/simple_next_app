import "../styles/globals.css";
import { AuthRouter } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }) {
	return (
		<AuthRouter>
			<Component {...pageProps} />
		</AuthRouter>
	);
}

export default MyApp;
