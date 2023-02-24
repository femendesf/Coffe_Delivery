
export function Payment(){
    return(
        <div className="mt-3 bg-base-card">
            <h1>Pagamento</h1>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            <div>
                <button>CARTÃO DE CRÉDITO</button>
                <button>CARTÃO DE DÉBITO</button>
                <button>DINHEIRO</button>
            </div>
        </div>
    )
}