import { NextResponse } from "next/server";
import { prisma } from "@/utils/db"; // 🌟 Vérifie bien que ton prisma est importé depuis le bon chemin

export async function POST(request: Request) {
    try {
        const { id } = await request.json();

        if (!id) {
            return NextResponse.json({ error: "L'ID du produit est manquant dans la requête." }, { status: 400 });
        }

        // Suppression dans la base de données via Prisma
        await prisma.product.delete({
            where: { 
                id: id // 🌟 Si ton ID dans Prisma (schema.prisma) est un Int/Number, écris plutôt : id: Number(id)
            }
        });

        return NextResponse.json({ message: "Produit supprimé avec succès" }, { status: 200 });

    } catch (error: any) {
        console.error("❌ Erreur API (deleteproducts):", error);
        return NextResponse.json(
            { error: error.message || "Erreur lors de la suppression du produit" },
            { status: 500 }
        );
    }
}