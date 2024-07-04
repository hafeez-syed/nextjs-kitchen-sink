import type { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
	// fetch request here to extract dynamic content
	// const response = await fetch()

	return {
		title: `Product ${params.id}, is known as "Fetched Product Name from the API"`,
	};
}

const fetchProducts = async () => {
	// throw new Error("Oops! Something went wrong");
	await wait(2000);
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	return await response.json();
};

export default async function Products() {
	const products = await fetchProducts();
	return (
		<>
			<h1>Products</h1>
			{products.length}
		</>
	);
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
