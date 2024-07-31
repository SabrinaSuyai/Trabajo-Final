const productos = [
    { nombre: 'Cerveza', precio: 100, stock: 10 },
    { nombre: 'Vino', precio: 100, stock: 10 },
    { nombre: 'Leche', precio: 100, stock: 10 },
    { nombre: 'Yerba', precio: 100, stock: 10 },
    { nombre: 'Cafe', precio: 100, stock: 10 },
    { nombre: 'Te', precio: 100, stock: 10 },
    { nombre: 'Azucar', precio: 100, stock: 10 },
    { nombre: 'Fideos', precio: 100, stock: 10 },
    { nombre: 'Arroz', precio: 100, stock: 10 },
]

window.onload = () => {
    const productosLista = document.getElementById('productos-lista');
    productos.forEach((producto, index) => {
        productosLista.innerHTML += `
            <div>
                <span>${producto.nombre} - $${producto.precio}</span>
                <input type="number" id="cantidad-${index}" min="0" max="${producto.stock}" value="0">
            </div>
        `;
    });
};

function comprar() {
    let total = 0;
    let mensaje = '';
    productos.forEach((producto, index) => {
        const cantidad = parseInt(document.getElementById(`cantidad-${index}`).value);
        if (cantidad > producto.stock || cantidad < 0) {
            mensaje = `Error: Stock insuficiente para ${producto.nombre}`;
            return;
        }
        total += cantidad * producto.precio;
    });
    if (mensaje) {
        document.getElementById('mensaje').innerText = mensaje;
    } else {
        document.getElementById('mensaje').innerText = `Total de la compra: $${total}`;
    }
}
