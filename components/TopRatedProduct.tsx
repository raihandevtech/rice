import porductData, {productType} from "../assets/fake-data/products";
import ProductCard from "./ProductCard";

const TopRatedProduct = () => {
  return (
    <section className="_top_rated_rice_section">
      <div className="_top_rated_rice_wrap">
        <div className="container">
          <h2 className="_rice_heading_title">Top Rated Product</h2>
          <div className="row">
              {porductData.getProducts(6).map((product: productType, index: number) => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                  <ProductCard
                    product={product} 
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopRatedProduct;