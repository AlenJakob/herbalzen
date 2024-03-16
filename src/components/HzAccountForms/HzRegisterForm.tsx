import {
	Box,
	Button,
	Container,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
} from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { ToggleFormState } from "@/types/common";

export const HzRegisterForm = ({ toggleSignUp }: ToggleFormState) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (e: {
		target: { value: SetStateAction<string> };
	}) => setEmail(e.target.value);

	const handlePasswordChange = (e: {
		target: { value: SetStateAction<string> };
	}) => setPassword(e.target.value);

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		console.log("Log:email", email);
		console.log("Log:password", password);

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log("Log:userCredential", userCredential);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<Container
			p={6}
			maxW="sm"
			m="2rem auto"
			sx={{ border: "1px solid #319795", borderRadius: "5px" }}
		>
			<Heading>Rejestracja</Heading>

			<Box my={4}>
				Mam konto{" "}
				<Button variant="link" onClick={() => toggleSignUp(true)}>
					Logowanie
				</Button>
			</Box>

			<form onSubmit={handleSubmit}>
				<FormControl mb={4}>
					<FormLabel>Email address</FormLabel>
					<Input type="email" value={email} onChange={handleEmailChange} />
					{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
				</FormControl>

				<FormControl>
					<FormLabel>Password</FormLabel>
					<Input
						type="password"
						value={password}
						onChange={handlePasswordChange}
					/>
					{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
				</FormControl>
				<Button marginTop={4} variant="solid" type="submit">
					Zarejestruj
				</Button>
			</form>
		</Container>
	);
};
