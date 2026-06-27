"use client"

import {useMutation, useQueryClient} from "@tanstack/react-query"
import { error } from "console";
import { form } from "framer-motion/client";
import { useFormStatus } from "react-dom"

export default function AddForm(){

const {pending} = useFormStatus();
const queryClient = useQueryClient();
const mutation = useMutation({
    mutationFn : async ( formData : FormData ) => {
        const productData = {
            name: formData.get('name'),
            quantity : Number(formData.get('quantity')),
            price: Number(formData.get('price')),
        };
        const response = await fetch('/api/products',{
            method : 'POST',
            headers : {
                'content-Type' : 'application/json'
            },
            body : JSON.stringify(productData)
        });
        if(!response.ok){
            throw new Error ("Erreur de la création")
        }
        return response.json()
    },
    onSuccess: ()=> {
        queryClient.invalidateQueries({queryKey : ['products']})
        console.log("Produits crée");
    },
    onError: (error)=> {
    console.error("Erreur lors d'ajout de produit", error)
    }
});
const handleSubmit = ( event : React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    mutation.mutate(formData)
}
const BtnSubmit = () => {
    return (
        <button disabled={mutation.isPending || pending} type="submit">
{ mutation.isPending || pending ? "Création en cour" : " ajouter le produit"}
        </button>
    )
}

    return(
        <form onSubmit={handleSubmit} className='max-w-[1000px] flex items-center mb-2'>
           <input type="text" name="name" required placeholder='Nom du produit'/>
           <input type="number" name="quantity" required placeholder='Quantité'/>
           <input 
            type="number" 
            name="price" 
            required 
            step="0.01" 
            placeholder="Prix du produit"
            />
            <BtnSubmit/>
        </form>
    )
}