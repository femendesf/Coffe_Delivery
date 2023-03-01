import { Cards } from "./Cards";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";

export function OurCoffees(){

   
    return (
        <div className='mt-[132px] flex flex-col'>
            <h1 className='text-[32px] mb-14'>
                Nossos cafés
            </h1>
            
            <div className="grid grid-cols-4 gap-8">
                <Cards
                    src="src\assets\coffes\expresso_tradicional.svg"
                    info="TRADICIONAL"
                    title_coffee="Expresso Tradicional"
                    text_coffee="O tradicional café feito com água quente e grãos moído"
                    idCard={uuidv4()}
                   
                />
                <Cards
                    src="src\assets\coffes\expresso_americano.svg"
                    info="TRADICIONAL"
                    title_coffee="Expresso Americano"
                    text_coffee="Expresso diluído, menos intenso que o tradicional"
                    idCard={uuidv4()}
                />
                <Cards
                    src="src\assets\coffes\expresso_cremoso.svg"
                    info="TRADICIONAL"
                    title_coffee="Expresso Cremoso"
                    text_coffee="Café expresso tradicional com espuma cremosa"
                    idCard={uuidv4()}
                />
                <Cards
                    src="src\assets\coffes\expresso_gelado.svg"
                    info="TRADICIONAL"
                    info_increment="GELADO"
                    title_coffee="Expresso Gelado"
                    text_coffee="Bebida preparada com café expresso e cubos de gelo"
                    idCard={uuidv4()}
                />
                <Cards
                    src="src\assets\coffes\cafe_leite.svg"
                    info="TRADICIONAL"
                    info_increment="COM LEITE"
                    title_coffee="Café com Leite"
                    text_coffee="Meio a meio de expresso tradicional com leite vaporizado"
                    idCard={uuidv4()}
                />
                <Cards
                    src="src\assets\coffes\latte.svg"
                    info="TRADICIONAL"
                    info_increment="COM LEITE"
                    title_coffee="Latte"
                    text_coffee="Uma dose de café expresso com o dobro de leite e espuma cremosa"
                    idCard={uuidv4()}
                />

                <Cards
                    src="src\assets\coffes\capuccino.svg"
                    info="TRADICIONAL"
                    info_increment="COM LEITE"
                    title_coffee="Capuccino"
                    text_coffee="Bebida com canela feita de doses iguais de café, leite e espuma"
                    idCard={uuidv4()}
                />

                <Cards
                    src="src\assets\coffes\macchiato.svg"
                    info="tradicional"
                    info_increment="com leite"
                    title_coffee="Macchiato"
                    text_coffee="Café expresso misturado com um pouco de leite quente e espuma"
                    idCard={uuidv4()}
                />

                <Cards
                    src="src\assets\coffes\mocaccino.svg"
                    info="tradicional"
                    info_increment="com leite"
                    title_coffee="Mocaccino"
                    text_coffee="Café expresso com calda de chocolate, pouco leite e espuma"
                    idCard={uuidv4()}
                />

                <Cards
                    src="src\assets\coffes\chocolate_quente.svg"
                    info="especial"
                    info_increment="com leite"
                    title_coffee="Chocolate Quente"
                    text_coffee="Bebida feita com chocolate dissolvido no leite quente e café"
                    idCard={uuidv4()}
                />

                <Cards
                    src="src\assets\coffes\cubano.svg"
                    info="especial"
                    info_increment="alcoólico"
                    info_increment_2="gelado"
                    title_coffee="Cubano"
                    text_coffee="Drink gelado de café expresso com rum, creme de leite e hortelã"
                    idCard={uuidv4()}
                />

                <Cards
                    src="src\assets\coffes\havaiano.svg"
                    info="especial"
                    title_coffee="Havaiano"
                    text_coffee="Bebida adocicada preparada com café e leite de coco"
                    idCard={uuidv4()}
                />

                <Cards
                    src="src\assets\coffes\arabe.svg"
                    info="especial"
                    title_coffee="Árabe"
                    text_coffee="Bebida preparada com grãos de café árabe e especiarias"
                    idCard={uuidv4()}
                />

                <Cards
                    src="src\assets\coffes\irlandes.svg"
                    info="Especial"
                    info_increment="alcoólico"
                    title_coffee="Irlandês"
                    text_coffee="Bebida a base de café, uísque irlandês, açucar e chantilly"
                    idCard={uuidv4()}
                />
            </div>
            

        </div>
    )
}