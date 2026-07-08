'use client'

import React from "react"

export default function DeleteButton({ id }: { id: string }) {
    const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
        // 1. Bloque le comportement HTML par défaut
        event.preventDefault(); 

        if (!confirm("Voulez-vous vraiment supprimer ce produit ?")) return;

        try {
            // 2. On tape sur l'API qui marche (/api/products) avec DELETE
            const response = await fetch('/api/products', { 
                method: "DELETE",                           
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id }) 
            });

            if (response.ok) {
                console.log('Produit supprimé !');
                window.location.reload(); 
            } else {
                const errorData = await response.json();
                alert(`Erreur : ${errorData.error || 'Impossible de supprimer'}`);
            }
        } catch (err) {
            console.error('Erreur réseau :', err);
        }
    };

    return (
        <form onSubmit={handleDelete} style={{ display: 'inline' }}>
            <button type="submit" style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}>
                Supprimer
            </button>
        </form>
    );
}