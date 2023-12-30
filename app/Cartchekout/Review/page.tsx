"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

interface Product {
    name: string;
    desc: string;
    price: string;
  }
  
const products: Product[] = [
  {
    name: 'Ps5 Controller',
    desc: 'Very Good Gaming Controller',
    price: '120DT',
  },
  {
    name: 'RTX 4090',
    desc: 'Very Good GPU',
    price: '1499DT',
  },
  {
    name: 'Glorious Gaming Model D',
    desc: 'Something else',
    price: '79DT',
  },
  {
    name: 'RGB liquid CPU Cooler',
    desc: 'Very Good cooler',
    price: '199DT',
  },
  { name: 'Shipping', desc: '', price: '7DT' },
];

const addresses: string[] = ['Cité Olympique ', 'Tunisia', 'Tunisia', '1003', 'Tunisia'];

interface Payment {
  name: string;
  detail: string;
}

const payments: Payment[] = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'houssem' },
  { name: 'Card number', detail: '4017049191984483' },
  { name: 'Expiry date', detail: '03/2029' },
];

const Review = () => {
    return ( 
        <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            1523.20 DT
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>houssem</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
     );
}
 
export default Review;