const productos = []; 

        function agregarProducto() {
            const nombre = document.getElementById('nombre').value;
            const precio = parseFloat(document.getElementById('precio').value);
            const stock = parseInt(document.getElementById('stock').value);

            if (nombre && !isNaN(precio) && !isNaN(stock)) {
                productos.push({ nombre, precio, stock });
                document.getElementById('nombre').value = '';
                document.getElementById('precio').value = '';
                document.getElementById('stock').value = '';
                mostrarProductosEnLista();
            } else {
                alert('Ingresa valores válidos para nombre, precio y stock.');
            }
        }
        function mostrarProductosEnLista() {
            const listaProductos = document.getElementById('listaProductos');
            listaProductos.innerHTML = '';

            for (const producto of productos) {
                const li = document.createElement('li');
                li.textContent = `Nombre: ${producto.nombre}, Precio: ${producto.precio}, Stock: ${producto.stock}`;
                listaProductos.appendChild(li);
            }
        }
        function verificarStock() {
            let stockCriticoEncontrado = false;

            for (const producto of productos) {
                if (producto.stock < 1000) {
                    alert(`El producto "${producto.nombre}" tiene un stock crítico.`);
                    stockCriticoEncontrado = true;
                }
            }
            if (!stockCriticoEncontrado) {
                alert('El inventario está en buen estado.');
            }
        }