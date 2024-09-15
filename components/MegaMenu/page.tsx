/* eslint-disable @typescript-eslint/no-explicit-any */
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { MdCabin } from 'react-icons/md';

import { TbCaravan, TbTent, TbBuildingCottage } from 'react-icons/tb';

type Category={
  id: number
  name: string
  icon: any
}

type items={
  name: string
  icon: Category[]
  isSelected:boolean
}

import { GiWoodCabin, GiMushroomHouse } from 'react-icons/gi';
import { PiWarehouse, PiLighthouse, PiVan } from 'react-icons/pi';

import { GoContainer } from 'react-icons/go';

const categories:Category[] = [
  {
    id: 1,
    name: 'cabin',
    icon: MdCabin,
  },
  {
    id: 2,
    name: 'airstream',
    icon: PiVan,
  },
  {
    id: 3,
    name: 'tent',
    icon: TbTent,
  },
  {
    id: 4,
    name: 'warehouse',
    icon: PiWarehouse,
  },
  {
    id: 5,
    name: 'cottage',
    icon: TbBuildingCottage,
  },
  {
    id: 6,
    name: 'magic',
    icon: GiMushroomHouse,
  },
  {
    id: 7,
    name: 'container',
    icon: GoContainer,
  },
  {
    id: 8,
    name: 'caravan',
    icon: TbCaravan,
  },
  {
    id: 9,
    name: 'tiny',
    icon: PiLighthouse,
  },
  {
    id: 10,
    name: 'lodge',
    icon: GiWoodCabin,
  },
];

export default function CategorySection() {
  return (
<ScrollArea className="w-full whitespace-nowrap">
  <div className="flex justify-center p-5">
    {categories.map((category, index) => (
      <CategoryItem key={category.id} {...category} isSelected={index === category.id} />
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>
  )
}

function CategoryItem({ name, icon:Icon, isSelected }:items) {
  return (
    <button className="inline-flex flex-col items-center justify-center hover:bg-slate-300 p-2 w-[120px] rounded-3xl">
      <div className="mb-2 text-gray-500">
        <Icon className="h-6 w-6" />
      </div>
      <span className={cn(
        "text-xs font-medium",
        isSelected ? "border-b-2 border-gray-900 text-gray-900" : "text-gray-500"
      )}>
        {name}
      </span>
    </button>
  )
}
