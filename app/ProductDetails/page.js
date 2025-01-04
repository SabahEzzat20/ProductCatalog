import Image from "next/image";
import Grid from '@mui/material/Grid2';

export default function Products({ product }) {
    // console.log(product.name);
    return (
            <div>
                <Image
                    src={product.image}
                    width={100} 
                    height={100}
                    alt="Product Image"
                    loading="eager"
                />
                {/* <p style={{textWrap: 'wrap'}}>product: {product.title}</p> */}
                <div>${product.price}</div>
                {/* <div>description: {product.description}</div> */}
            </div>
    )
};