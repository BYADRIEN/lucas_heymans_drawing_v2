export default function header()
{
    return(
            <nav className="bg-green-950 shadow-lg font-serif">
                <div className="container mx-auto">
                    <div className="sm:flex justify-center">
                       <ul className="text-gray sm:self-center text-xl border-t sm:border-none pr-6"> 
<li className="space-x-12 text-[#F5F5DC]">
    <a href="">Mes dessins</a>
    <a href="">Tarif</a>
</li>
                    </ul>
<a className="text-[#F5F5DC] text-3xl p-4" href="">Lucas Heymans</a>
                   <ul className="text-gray sm:self-center text-xl border-t sm:border-none pl-6 "> 
<li className="space-x-12 text-[#F5F5DC]">
    <a href="">A propos</a>
    <a href="">Contact</a>
</li>
                    </ul>
                    </div>
                </div>
            </nav>
    )
}