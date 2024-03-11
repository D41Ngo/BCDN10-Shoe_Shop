import { Carousel } from "./carousel";
import { ProductFeature } from "./product-feature";

export default function Home() {
    return (
        <div className="bg-red-400">
            <Carousel />

            <ProductFeature />
        </div>
    );
}
