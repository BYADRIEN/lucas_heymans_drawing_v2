import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

export async function POST(request: Request) {
    try {
        // 1. Vérification de sécurité pour le débogage
        if (!process.env.DATABASE_URL) {
            console.error("❌ ERREUR : DATABASE_URL n'est pas définie dans l'environnement !");
            return NextResponse.json(
                { error: "Configuration base de données manquante côté serveur." },
                { status: 500 }
            );
        }

        const { name, quantity, price } = await request.json();

        // 2. Sécurisation des types (on s'assure que ce sont des nombres)
        const product = await prisma.product.create({
            data: {
                name,
                quantity: Number(quantity),
                price: Number(price)
            }
        });

        return NextResponse.json(product, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Erreur lors de la création du produit" },
            { status: 500 }
        );
    }
}