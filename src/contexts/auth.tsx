import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface AuthResponseInterface {
	token: string;
	user: {
		id: string;
		avatar_url: string;
		name: string;
		login: string;
	};
}

interface UserInterface {
	id: string;
	name: string;
	login: string;
	avatar_url: string;
}

interface AuthContextInteface {
	user: UserInterface | null;
	signInUrl: string;
}

export const AuthContext = createContext({} as AuthContextInteface);

interface AuthProviderInterface {
	children?: React.ReactNode;
}

export function AuthProvider(props: AuthProviderInterface) {
	const [user, setUser] = useState<UserInterface | null>(null);

	const signInUrl = `http://github.com/login/oauth/authorize?scope=user&client_id=3ae80957ae4fa850f929`;

	async function signIn(githubCode: string) {
		const response = await api.post<AuthResponseInterface>('authenticate', {
			code: githubCode,
		});

		const { token, user } = response.data;

		localStorage.setItem('@dowhile:token', token);

		setUser(user);
	}

	useEffect(() => {
		const token = localStorage.getItem('@dowhile:token');

		if (token) {
			api.defaults.headers.common.authorization = `Bearer ${token}`;

			api.get<UserInterface>('profile').then((response) => {
				setUser(response.data);
			});
		}
	}, []);

	useEffect(() => {
		const url = window.location.href;
		const hasGithubCode = url.includes('?code=');

		if (hasGithubCode) {
			const [urlWithoutCode, githubCode] = url.split('?code=');

			window.history.pushState({}, '', urlWithoutCode);

			signIn(githubCode);
		}
	}, []);

	return (
		<AuthContext.Provider value={{ signInUrl, user }}>
			{props.children}
		</AuthContext.Provider>
	);
}
