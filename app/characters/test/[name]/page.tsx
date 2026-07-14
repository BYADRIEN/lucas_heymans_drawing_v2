import { PrismaClient } from "@prisma/client";
// 1. On importe le composant Link de Next.js !
import Link from "next/link"; 

const prisma = new PrismaClient();

interface PageProps {
  params: Promise<{ name: string }>;
}

export default async function CharactersPage({ params }: PageProps) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);

  // On essaie de chercher en BDD
  const product = await prisma.product.findFirst({
    where: { name: decodedName }
  });

  return (
    // 2. On utilise une balise vide <> au début et </> à la fin 
    // pour que React autorise d'avoir la div ET le Link côte à côte
    <>
      <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
        <h1>Page de test d'URL</h1>
        <p>L'URL a bien envoyé le nom : <strong>{decodedName}</strong></p>
        
        <hr />

        {product ? (
          <div style={{ color: 'green' }}>
            <h2>✅ Produit trouvé dans la base de données !</h2>
            <p>ID : {product.id}</p>
            <p>Prix : {product.price} €</p>
            <p>Quantité : {product.quantity}</p>
          </div>
        ) : (
          <div style={{ color: 'red' }}>
            <h2>❌ Produit non trouvé en base de données</h2>
            <p>Prisma a cherché une ligne où le nom est exactement : <code>"{decodedName}"</code></p>
            <p>Vérifie dans ta base de données si l'écriture (majuscules, espaces) correspond à 100%.</p>
          </div>
        )}
      </div>

      {/* 3. Le bouton retour est maintenant à l'abri et fonctionnel */}
      <div style={{ paddingLeft: '30px' }}>
        <Link 
          href="/"
          style={{ 
            color: '#0066cc', 
            textDecoration: 'none', 
            fontWeight: 'bold' 
          }}
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </>
  );
}