import type { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  // fetch request here to extract dynamic content
  // const response = await fetch()

  return {
    title: `Product ${params.id}, is known as "Fetched Product Name from the API"`,
  };
}

export default function Products() {
  return <h1>Products</h1>;
}
