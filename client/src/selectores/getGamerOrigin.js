export const getGamerOrigin = (origin, array) => {
	switch (origin) {
		case 'API':
			return array.filter((el) => typeof el.id === 'number');

		case 'DB':
			return array.filter((el) => typeof el.id === 'string');

		case 'ALL':
			return array;

		default:
			return array;
	}
};
export default getGamerOrigin;
