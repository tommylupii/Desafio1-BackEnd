class ProductManager {
  constructor(){
    this.products = []
    this.Id = 0
  }

  getProducts(){
    return this.products
  }

  agregarProduct(title, description, price, thumbnail, code, stock){
    const product = {
      id: this.Id++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    }

    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("Faltan datos")
    }

    if (this.products.some((product) => product.code === code)) {
        console.error("El 'code' ya existe")
    }

    this.products.push(product)
  }

  getProductById(id){
    const idProduct = this.products.find((product) => product.id === id)

    if(idProduct){
      return idProduct
    } else {
      console.error(`No se encontro el producto: ${id}`)
      return null
    }
  }

}

const productManager = new ProductManager()

productManager.agregarProduct(
  "producto prueba",
  "este es un producto prueba",
  200,
  "sin imagen",
  "abc123",
  25,
)

productManager.agregarProduct(
  "producto prueba 2",
  "este es otro producto prueba",
  400,
  "sin imagen",
  "def456",
  25,
)

productManager.agregarProduct(
  "producto prueba 3",
  "este es un producto fallido",
  400,
  "",
  "def456",
  25,
)

console.log(productManager.getProducts())
console.log(productManager.getProductById(0))
console.log(productManager.getProductById(3))