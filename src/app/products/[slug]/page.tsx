export const ProductPage = async ({ params }: { params: { slug: string } }) => {
  return <div>product {params.slug}</div>;
};

export default ProductPage;
