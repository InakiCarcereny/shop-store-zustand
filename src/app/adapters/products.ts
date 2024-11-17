import { Product } from "../models";
import { getProducts } from "../services";

export async function productsAdapter() {
  try {
    const response = await getProducts();

    const products = response.data;

    return products.map((product: Product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      images: product.images,
      creationAt: product.creationAt,
      updatedAt: product.updatedAt,
      category: {
        id: product.category.id,
        name: product.category.name,
        image: product.category.image,
        creationAt: product.category.creationAt,
        updatedAt: product.category.updatedAt,
      },
    }));
  } catch (error) {
    console.error(error);
  }
}
