import "./formCheckout.css";

const FormCheckout = ({ dataForm, handleInputChange, sendOrder }) => {
  return (
     <div className="checkout-container">
            <h1 className="checkout-title">Finalizar Compra</h1>
            <form className="checkout-form" onSubmit={sendOrder}>
                <div className="checkout-form-group">
                    <label htmlFor="nombre" className="checkout-label">Nombre completo</label>
                    <input 
                        type="text" 
                        id="nombre"
                        name="nombre"
                        className="checkout-input"
                        value={dataForm.nombre}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="checkout-form-group">
                    <label htmlFor="email" className="checkout-label">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        className="checkout-input"
                        value={dataForm.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="checkout-form-group">
                    <label htmlFor="telefono" className="checkout-label">Teléfono</label>
                    <input 
                        type="tel" 
                        id="telefono"
                        name="telefono"
                        className="checkout-input"
                        value={dataForm.telefono}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit" className="checkout-btn">Confirmar compra</button>
            </form>
        </div>
  )
}

export default FormCheckout