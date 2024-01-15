import DealCallOut from "@/components/callouts/DealCallOut";
import Card from "@/components/product/product-card";
import Gutter from "@/components/shared/gutter";

export default function Page() {
  return (
    <section>
      <DealCallOut />
      <Gutter all>
        <div>
          <h2 className="text-xl mb-4 text-center  md:text-2xl font-bold tracking-tight ">
            Products
          </h2>
          <div className="flex justify-center flex-wrap gap-x-4 gap-y-7 ">
            <Card title="hello" />
            <Card title="hello" />
            <Card title="hello" />

            <Card title="hello" />
          </div>
        </div>
      </Gutter>
    </section>
  );
}
