import Products from "./ProductDetails/page";
import axios from "axios";
import Grid from '@mui/material/Grid2';
import styles from './page.module.css'
export default async function Home() {
  const response = await axios.get('https://fakestoreapi.com/products');
    const data = response.data;
  return (
    <Grid container spacing={2} justifyContent='center' size={12} className={styles.productsCatalog}>
      {data.map((product) => (
        <Grid size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 3}} key={product.id} sx={{backgroundColor:'grey', padding: '10px'}}>
          <Products product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
