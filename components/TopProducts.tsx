import Image from "next/image"
import Link from "next/link"
import { topProducts } from "@/lib/data"

export default function TopProducts() {
  return (
    <section className="basis-[30%] bg-white p-3 rounded shadow">
      <div className="flex flex-row items-center justify-between border-b pb-1
      text-[#818891]">
        <h1>Top Products</h1>
        <Link href="products/" className="cursor-pointer hover:text-[#5F6979]">See all</Link>
      </div>
      <section>
        <ul className="flex flex-col gap-3 mt-4">
          {topProducts.map(product => (
            <Link key={product.id} href={`products/${product.id}`}
            className="cursor-pointer flex flex-row justify-between items-start gap-2
            border-b pb-2">
              <div className="flex flex-row items-center gap-2">
                <Image
                  src={product.image}
                  alt="product image"
                  width={50}
                  height={50}
                  className="rounded"
                />
                <div>
                  <h4 className="text-[#5F6979]">{product.title}</h4>
                  <small className="text-[#818891]">{product.demographic}</small>
                </div>
              </div>
              <p className="text-[#5F6979]">{`$${product.price}`}</p>
            </Link>
          ))}
        </ul>
      </section>
    </section>
  )
}
