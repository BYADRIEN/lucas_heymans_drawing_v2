'use client'

import { useQuery } from "@tanstack/react-query";
import { Product } from "@/utils/Types";
import Link from 'next/link';

const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch('/api/products')
    if (!response.ok) {
        throw new Error('Erreur lors de la récupération')
    }
    return response.json()
}

export default function ProductsTab() {
    const { data: products, error, isLoading } = useQuery<Product[], Error>({
        queryKey: ["products"],
        queryFn: fetchProducts
    })

    // 🌟 LA FONCTION EST DIRECTEMENT ICI MAINTENANT
    const executionSuppression = async (productId: string) => {
        if (!confirm("Supprimer ce produit ?")) return;

        try {
            const response = await fetch('/api/products', {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: productId })
            });

            if (response.ok) {
                console.log('Produit supprimé !');
                window.location.reload(); 
            } else {
                const errorData = await response.json();
                alert(`Erreur : ${errorData.error}`);
            }
        } catch (err) {
            console.error('Erreur :', err);
        }
    };

    if (isLoading) return <p>Chargement en cours...</p>;
    if (error) return <p>Erreur lors du chargement</p>;

    return (
        <div>
            <p>test</p>
            {products && products.length > 0 ? (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Toutes les catégories</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        {product.id} {product.name} {product.quantity} {product.price}
                                    </td>
                                    <td>
                                        <Link href={`product/${product.id}`}>Modifier</Link>
                                        
                                        {/* 🌟 LE BOUTON CLASSIQUE SANS FORMULAIRE NI IMPORT MAL SÉLECTIONNÉ */}
                                        <button 
                                            onClick={() => executionSuppression(product.id)}
                                            style={{ marginLeft: '10px', color: 'red', cursor: 'pointer' }}
                                        >
                                            Supprimer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Aucun produit trouvé</p>
            )}
        </div>
    );
}