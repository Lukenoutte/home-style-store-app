export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  return <p>Product: {id}</p>
}