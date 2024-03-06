export const productList: Product[] = [
{ id: 1, name: 'Lavandina', price: 9, description: 'el mejor desinfectante' },
{ id: 2, name: 'Detergente', price: 5 },
{ id: 3, name: 'Limpia Vidrios', price: 10, description: 'Tus cristales transparentes' },
{ id: 4, name: 'Limpia Piso', price: 8, description: 'Tus pisos mas limpios' },
{ id: 5, name: 'Jabón', price: 3, description: 'Limpia tus manos' }
]

export interface Product {
    id: number | string;
    name: string;
    price: number,
    description?: string;
}