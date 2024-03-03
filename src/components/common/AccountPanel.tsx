import { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from "@chakra-ui/react";

export const AccountPanel = () => {
	const [authUser, setAuthUser] = useState<unknown | null>(null);
	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user) => {
			if (user) {
				setAuthUser(user);
			} else {
				setAuthUser(null);
			}
		});

		return () => {
			listen();
		};
	}, []);

	const logout = () => {
		signOut(auth)
			.then((response) => {
				console.log("Log:response", response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			{" "}
			{authUser ? (
				<>
					<p>{`Zalogowany jako ${authUser?.email}`}</p>
					<Button onClick={logout}>Wylogowuj</Button>
				</>
			) : (
				"Niezalogowany"
			)}
		</div>
	);
};
