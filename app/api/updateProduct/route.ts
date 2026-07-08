import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

interface RouteParams {
    params: Promise<{ id: string }>
}

// 1. MODIFIER un produit (PUT)
export async function PUT(request: Request, { params }: RouteParams) {
    try {
        // Extraction de l'ID depuis l'URL de Next.js
        const { id } = await params; 

        // Récupération des données envoyées par le formulaire
        const { name, quantity, price } = await request.json(); 

        const updatedProduct = await prisma.product.update({
            where: { id: id }, // Utilise l'UUID texte reçu
            data: {
                name: name,
                quantity: Number(quantity),
                price: Number(price)
            }
        });

        return NextResponse.json(updatedProduct);

    } catch (error) {
        console.error("❌ Erreur API (PUT):", error);
        return NextResponse.json(
            { error: "Erreur lors de la modification du produit" }, 
            { status: 500 }
        );
    }
}

// 2. AJOUTER un produit (POST) - Optionnel / Sécurité
export async function POST(request: Request) {
    try {
        if (!process.env.DATABASE_URL) {
            console.error("❌ ERREUR : DATABASE_URL n'est pas définie !");
            return NextResponse.json(
                { error: "Configuration base de données manquante." },
                { status: 500 }
            );
        }

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
        console.error("❌ Erreur API (POST):", error);
        return NextResponse.json(
            { error: "Erreur lors de la création du produit" },
            { status: 500 }
        );
    }
}

// 3. RÉCUPÉRER un produit ou la liste (GET)
export async function GET(request: Request, { params }: RouteParams) {
    try {
        const { id } = await params;

        // Si l'id dans l'URL correspond à un vrai produit
        if (id && id !== "products" && id !== "updateProducts") {
            const product = await prisma.product.findUnique({
                where: { id: id }
            });
            return NextResponse.json(product);
        }

        // Sinon, on renvoie tous les produits
        const products = await prisma.product.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return NextResponse.json(products);

    } catch (error) {
        console.error("❌ Erreur API (GET):", error);
        return NextResponse.json(
            { error: "Erreur lors de la récupération" }, 
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