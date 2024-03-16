import { useState } from "react";
import { AccountPanel } from "../common/AccountPanel";
import { HzLoginForm } from "./HzLoginForm";
import { HzRegisterForm } from "./HzRegisterForm";

export const HzFormManager = () => {
	const [isSignUp, setIsSignUp] = useState(true);
	return (
		<>
			<AccountPanel />
			{isSignUp ? (
				<HzLoginForm toggleSignUp={setIsSignUp} />
			) : (
				<HzRegisterForm toggleSignUp={setIsSignUp} />
			)}
		</>
	);
};
