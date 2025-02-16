export interface Product {
    id: string;
    title: string;
    price: number;
    description?: string;
    images: Record<number, string>;
}