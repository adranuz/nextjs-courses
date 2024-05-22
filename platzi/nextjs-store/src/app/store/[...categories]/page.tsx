interface Props {
	params: { categories: string };
	searchParams?: URLSearchParams;
}

/**
 * This component is rendered when the URL matches the pattern /store/[...category]/page
 *
 * [category] is a dynamic segment that matches any path following /store/
 *
 * [...category] is a catch-all route that matches /store/a, /store/a/b, /store/a/b/c, etc.
 *
 * [[...category]] uses both, dynamic and catch-all routes, to match /store/a, /store/a/b, /store/a/b/c, etc.
 * and match the inside component page.tsx to the father folder store
 *
 * */
export default function Categories({ params, searchParams }: Props) {
	const { categories } = params;
	console.log(categories, searchParams)
	return <h1>Categoría dinámica: {categories}</h1>;
}
