import { Card, CardContent } from "@/app/components/ui/card";
import { Barbershop } from "@prisma/client";
import Image from "next/image";
interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="p-1">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src={barbershop.imageUrl}
          alt={barbershop.name}
          className="h-[159px] w-full rounded-2xl"
        />
        <h2>{barbershop.name}</h2>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
