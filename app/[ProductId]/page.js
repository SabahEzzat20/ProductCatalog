import Image from "next/image";
import Grid from '@mui/material/Grid2';
import styles from '../page.module.css'
import Link from "next/link";
import useRouter from 'next/navigation'; // Import useRouter hook

export default function ProductDetails({ params }) {   
    //Destructuring product id
    const { ProductId } = params;
    return (
        <>
            <div>Product {ProductId}</div>
            <Link href={'/'} passHref prefetch={true}>Go back</Link>
        </>
    )
};