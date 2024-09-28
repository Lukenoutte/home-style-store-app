import { useRouter } from 'next/router';
 
export default function Product() {
  const router = useRouter()
  return <p>Post: {router.query.id}</p>
}