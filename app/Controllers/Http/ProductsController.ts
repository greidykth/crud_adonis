// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Product from "App/Models/Product"

export default class ProductsController {
    public async index({ response }) {
        const products = await Product.all()

        return response.ok(products)
    }
    //Store
    public async store({ request, response }) {
        const product = new Product()

        product.title = request.input("title");
        product.description = request.input("description");
        product.image = request.input("image");
        product.quantity = request.input("quantity");
        product.price = request.input("price");

        await product.save()

        return response.ok(product)
    }

    public async show({ params, response }) {
        const { id }: { id: Number } = params

        const product: any = await Product.find(id)
        if (!product) {
            return response.notFound({ message: 'product not found' })
        }

        return response.ok(product)
    }
    
    //Update
    public async update({ request, params, response }) {
        const { id }: { id: Number } = params

        const product: any = await Product.find(id)

        if (!product) {
            return response.notFound({ message: 'product not found' })
        }

        product.title = request.input("title");
        product.description = request.input("description");
        product.image = request.input("image");
        product.quantity = request.input("quantity");
        product.price = request.input("price");

        await product.save()

        return response.ok(product)
    }

    public async destroy({ params, response }) {
        const { id }: { id: Number } = params

        const product: any = await Product.find(id)
        if (!product) {
            return response.notFound({ message: 'Product not found' })
        }

        await product.delete()

        return response.ok({ message: 'Product deleted successfully.' })
    }
}
