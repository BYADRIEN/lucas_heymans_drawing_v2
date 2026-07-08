"use client"

import { useState, useEffect, use } from 'react' 
import Link from "next/link"
import { useRouter } from "next/navigation"

interface Params {
    id: string 
}

interface UpdatePageProps {
    params: Promise<Params> 
}

export default function PageProduct({ params }: UpdatePageProps) {
    // Récupération propre de l'ID du produit depuis l'URL
    const { id: productId } = use(params)

    const [product, setProduct] = useState<any>(null)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`/api/${productId}`); 
            if (!response.ok) {
                setError('Produit non trouvé');
                return;
            }
            const data = await response.json()
            setProduct(data)
        };
        
        fetchProduct(); 
    }, [productId]) 

    if (error) {
        return (
            <div>
                <p>{error}</p>
                <Link href='/'>Retour</Link>
            </div>
        )
    }

    if (!product) {
        return <div>Chargement...</div>
    }

    const { name, quantity, price } = product

    const handlesubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        
        // CORRECTION ICI : On tape sur la route dynamique avec l'ID, pas sur /api/updateProducts !
        const response = await fetch(`/api/${productId}`, {
            method: 'PUT', 
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({
                name: formData.get('name'),
                quantity: Number(formData.get('quantity')),
                price: Number(formData.get('price'))
            })
        })

        if (response.ok) {
            router.push('/')
        } else {
            const errorData = await response.json();
            console.error('Erreur lors de la modification', errorData.error)
        }
    }

    return (
        <div>
            <Link href="/">Retour à l'accueil</Link>
            <form onSubmit={handlesubmit}> 
                
                <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder='Modifier le nom du produit' 
                    defaultValue={name} 
                />

                <input 
                    type="number" 
                    name="quantity" 
                    required 
                    placeholder='Quantité' 
                    defaultValue={quantity} 
                />

                <input 
                    type="number" 
                    step="0.01"
                    name="price" 
                    required 
                    placeholder='Prix' 
                    defaultValue={price} 
                />
                
                <button type="submit">Modifier</button>
            </form>
        </div>
    )
}