import { fail, redirect } from '@sveltejs/kit';

type Movie = {
	id: string;
	name: string;
	release: number;
	rating: number;
	comment?: string;
};

let movies: Movie[] = [
	{
		id: 'df5105ff-9d87-4bd9-be62-4743c0a243b9',
		name: 'Everything Everywhere All at Once',
		release: 2022,
		rating: 5,
		comment: `Unlike anything I have ever seen before. I loved it!`
	},
	{
		id: '446e2ae1-5cc4-4b84-9ea0-1e77428e46f6',
		name: 'The Shawshank Redemption',
		release: 1994,
		rating: 5,
		comment: 'Amazing, if a little over-hyped'
	}
];

export const load = () => {
	return {
		movies
	};
};

const validateMovie = (movieData: Omit<Movie, 'id'>) => {
	if (!movieData.name) {
		return {
			success: false,
			error: `Name of the movie is required`
		};
	}
	if (!movieData.release) {
		return {
			success: false,
			error: `Release Year is required`
		};
	}
	if (!movieData.rating) {
		return {
			success: false,
			error: `Please rate the movie from 1 to 5 stars`
		};
	}
	return {
		success: true
	};
};

export const actions = {
	async logMovie({ request }) {
		const formData = await request.formData();

		// await new Promise((res) => setTimeout(res, 3000));

		const name = formData.get('name');
		const release = formData.get('release');
		const rating = formData.get('rating');
		const comment = formData.get('comment');

		if (name === 'Adam') {
			throw redirect(303, 'super-secret-url');
		}

		const movieData: Omit<Movie, 'id'> = {
			name: typeof name === 'string' ? name : '',
			release: Number(release),
			rating: Number(rating),
			comment: typeof comment === 'string' ? comment : ''
		};

		const validation = validateMovie(movieData);

		if (validation.success) {
			movies.push({ id: crypto.randomUUID(), ...movieData });
		} else {
			return fail(400, {
				name,
				release,
				rating,
				comment,
				errorMessage: validation.error
			});
		}

		return {
			success: true
		};
	},

	async deleteMovie({ request }) {
		const movieId = (await request.formData()).get('movieToDelete');
		console.log('DELETE', movieId);
		movies = movies.filter((m) => m.id !== movieId);
	}
};
