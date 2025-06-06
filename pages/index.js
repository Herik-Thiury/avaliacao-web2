import Head from "next/head";
import ProductCard from "../components/ProductCardComponents";
import Header from "../components/Header";
import productCatalogStyles from "../styles/ProductCatalog.module.css";

export default function Home({ products, error }) {
  return (
    <>
      <Head>
        <title>Digital Store - Produtos Incríveis</title>
        <meta
          name="description"
          content="Tela inicial de um e-commerce com as melhores ofertas!"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/Favicon.png" />
      </Head>

      <Header />

      <main className={productCatalogStyles.container}>
        <h1 className={productCatalogStyles.title}>Meus Produtos</h1>

        {error && (
          <p
            className={productCatalogStyles.errorMessage}
          >{`Erro ao carregar produtos: ${error}`}</p>
        )}
        {!error && products.length === 0 && (
          <p className={productCatalogStyles.loadingMessage}>
            Carregando produtos...
          </p>
        )}

        {!error && products.length > 0 && (
          <div className={productCatalogStyles.productList}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.title}
                image={product.image}
                price={product.price}
                category={product.category}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const products = await res.json();

    return {
      props: {
        products,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return {
      props: {
        products: [],
        error: error.message || "Erro desconhecido ao carregar produtos.",
      },
      revalidate: 60,
    };
  }
}
