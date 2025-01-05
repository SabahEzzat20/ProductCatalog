import Image from "next/image";
import Grid from '@mui/material/Grid2';
import styles from '../page.module.css'
import Link from "next/link";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import axios from "axios";
import Box from "@mui/material/Box";
import Rating from '@mui/material/Rating';
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

export default async function ProductDetails({ params }) {   
    //Destructuring product id
    const { ProductId } = params;
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data;
    
    const getProductById = (id) => {
        return products.find(product => product.id === id);
    };
    const product = getProductById(+ ProductId);
    return (
        <Box className={styles.productDetailsContainer}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/" className={styles.breadcrumbHome}>
                    Home
                </Link>
                <p>{product.title}</p>
            </Breadcrumbs>
            <Grid container direction={{xl: "row", lg: "row",md: "row",sm: "column", xs: "column"}} spacing={5} padding={7} className={styles.productDetails}>
                <Grid container size={{xs: 12, sm: 12, md: 6, lg: 6, xl: 6}} sx={{ minHeight: '400px',width: '300px',position: 'relative'}}>
                    <Image
                        src={product.image}
                        layout="fill"
                        // width={300} 
                        // height={300}
                        alt="Product Image"
                        loading="lazy"
                        unoptimized
                        style={{width: '100%',objectFit:'contain'}}
                    />
                </Grid>
                <Grid container size={{xs: 12, sm: 12, md: 6, lg: 6, xl: 6}} sx={{minHeight: '400px'}}>
                    <Stack direction="column" sx={{position: 'relative'}}>
                        <p className={styles.category}>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                        <h2>{product.title}</h2>
                        <Stack direction="row" spacing={2} alignItems={'center'}>
                            <Rating name="read-only" value={product.rating.rate} readOnly />
                            <p className={styles.reviewsCount}>({product.rating.count} Reviews)</p>
                        </Stack>
                        <p className={styles.productPrice}>${product.price}</p>
                        <p>{product.description}</p>
                        <button className={`${styles.showDetailsBtn} ${styles.BuyNowBtn}`}>Buy Now</button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
};