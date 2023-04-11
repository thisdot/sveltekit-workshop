const getUserInfo = async (session?: string) => {
	if (!session) return;
	return {
		name: session
	};
};

export const handle = async ({ event, resolve }) => {
	event.locals.user = await getUserInfo(event.cookies.get('session'));

	return resolve(event);
};
