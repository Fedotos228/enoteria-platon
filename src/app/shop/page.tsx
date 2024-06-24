"use client";

import FilterSidebar from "@/components/blocks/FilterSidebar";
import Introduction from "@/components/blocks/Introduction";
import ShopGrid from "@/components/blocks/ShopGrid";
import Container from "@/components/layout/Container";
import { blocksService } from "@/services/blocks/blocks.service";
import { useQuery } from "@tanstack/react-query";

export default function ShopPage() {
  const { data } = useQuery({
    queryKey: ["shop"],
    queryFn: () => blocksService.getShop(),
    select: (data) => data.data.data.attributes,
  });

  return (
    <>
      <Introduction content={data?.components[0]} />
      <Container>
        <div className="mb-20 mt-10 grid gap-4 md:grid-cols-[200px_1fr] ml:grid-cols-[280px_1fr]">
          <FilterSidebar />
          <ShopGrid />
        </div>
      </Container>
    </>
  );
}
