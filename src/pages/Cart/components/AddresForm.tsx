
export function AddresForm(){
    return(
        <form className="flex flex-col bg-base-card p-10">
            <h1>Endereço de entrega</h1>
            <p>Informe o endereço onde deseja receber seu pedido</p>

            <div>
                <input type="number" placeholder="CEP" />
                <input type="text" placeholder="Rua" />

                <div className="flex">
                    <input type="number" name="" id="" placeholder="Número"/>
                    <input type="text" name="" id="" placeholder="Complemento"/>
                </div>

                <div>
                    <input type="text" placeholder="Bairro" />
                    <input type="text" name="" id="" placeholder="Cidade"/>
                    <input type="text" placeholder="UF"/>
                </div>
            </div>
            
        </form>
    )
}