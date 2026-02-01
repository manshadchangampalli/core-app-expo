import { productsConfig } from "../common/ProductList/products.config";

export interface OrderItem {
    id: string;
    title: string;
    image: string;
    date: string;
    price: number;
    status: 'Delivered' | 'Cancelled' | 'Processing';
}

export const ordersConfig: OrderItem[] = [
    {
        id: '1',
        title: 'Premium Pasta Combo',
        image: productsConfig[0]?.image || 'https://via.placeholder.com/150',
        date: '2 days ago',
        price: 45.5,
        status: 'Delivered'
    },
    {
        id: '2',
        title: 'Breakfast Special',
        image: productsConfig[1]?.image || 'https://via.placeholder.com/150',
        date: '5 days ago',
        price: 32.0,
        status: 'Delivered'
    },
    {
        id: '3',
        title: 'Fast Food Feast',
        image: productsConfig[2]?.image || 'https://via.placeholder.com/150',
        date: '1 week ago',
        price: 58.75,
        status: 'Delivered'
    }
];
