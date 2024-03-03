import { AccountPanel } from "../common/AccountPanel";
import { HzLoginForm } from "./HzLoginForm";
import { HzRegisterForm } from "./HzRegisterForm";

export const HzFormManager = (props) => {
	return (
		<div>
			<AccountPanel />
			<HzLoginForm />
			<HzRegisterForm />
		</div>
	);
};
