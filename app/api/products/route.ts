// Fichier : app/api/products/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

// RÉCUPÉRER TOUS LES PRODUITS (GET /api/products)
export async function GET() {
    try {
        const products = await prisma.product.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return NextResponse.json(products);
    } catch (error) {
        console.error("❌ Erreur API (GET /api/products):", error);
        return NextResponse.json(
            { error: "Erreur lors de la récupération des produits" }, 
            { status: 500 }
        );
    }
}

// CRÉER UN PRODUIT (POST /api/products)
export async function POST(request: Request) {
    try {
        const { name, quantity, price } = await request.json();

        const product = await prisma.product.create({
            data: {
                name,
                quantity: Number(quantity),
                price: Number(price)
            }
        });

        return NextResponse.json(product, { status: 201 });
    } catch (error) {
        console.error("❌ Erreur API (POST /api/products):", error);
        return NextResponse.json(
            { error: "Erreur lors de la création du produit" },
            { status: 500 }
        );
    }
}
// 2. LA SUPPRESSION (Ajoutée directement ici)
export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();

        if (!id) {
            return NextResponse.json({ error: "ID manquant" }, { status: 400 });
        }

        await prisma.product.delete({
            where: { id: id } // Laisse 'id' car tes IDs sont des chaînes de caractères (UUID)
        });

        return NextResponse.json({ message: "Supprimé !" }, { status: 200 });
    } catch (error: any) {
        console.error("❌ Erreur API (DELETE):", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
