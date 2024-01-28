import {
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";

interface IUser {
	name: string;
	phone: string;
	email: string;
	username: string;
	website: string;
}

export const MyTableComponent = ({ users }: { users: IUser[] }) => {
	return (
		<TableContainer>
			<Table size="sm">
				<Thead>
					<Tr>
						<Th>Name</Th>
						<Th>Phone</Th>
						<Th>Email</Th>
						<Th>Username</Th>
						<Th>Website</Th>
					</Tr>
				</Thead>
				<Tbody>
					{users.length > 0 &&
						users.map(({ name, phone, email, username, website }: IUser) => {
							return (
								<Tr key={name}>
									<Td>{name}</Td>
									<Td>{phone}</Td>
									<Td>{email}</Td>
									<Td>{username}</Td>
									<Td>{website}</Td>
								</Tr>
							);
						})}
				</Tbody>
			</Table>
		</TableContainer>
	);
};
