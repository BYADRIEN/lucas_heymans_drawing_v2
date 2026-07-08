// Fichier : app/api/[id]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

interface RouteParams {
    params: Promise<{ id: string }>
}

// MODIFIER UN PRODUIT (PUT /api/[id])
export async function PUT(request: Request, { params }: RouteParams) {
    try {
        const { id } = await params; 
        const { name, quantity, price } = await request.json(); 

        const updatedProduct = await prisma.product.update({
            where: { id: id }, 
            data: {
                name,
                quantity: Number(quantity),
                price: Number(price)
            }
        });

        return NextResponse.json(updatedProduct);
    } catch (error) {
        console.error(`❌ Erreur API (PUT /api/${params}):`, error);
        return NextResponse.json(
            { error: "Erreur lors de la modification du produit" }, 
            { status: 500 }
        );
    }
}

// RÉCUPÉRER UN SEUL PRODUIT (GET /api/[id])
export async function GET(request: Request, { params }: RouteParams) {
    try {
        const { id } = await params;

        const product = await prisma.product.findUnique({
            where: { id: id }
        });

        if (!product) {
            return NextResponse.json({ error: "Produit non trouvé" }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error(`❌ Erreur API (GET /api/${params}):`, error);
        return NextResponse.json(
            { error: "Erreur lors de la récupération du produit" }, 
            { status: 500 }
        );
    }
}