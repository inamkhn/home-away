import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Trash2 } from "lucide-react"

interface Property {
  name: string
  nightlyRate: number
  nightsBooked: number
  totalIncome: number
}

const properties: Property[] = [
  { name: "Cabin in Aruba", nightlyRate: 75, nightsBooked: 0, totalIncome: 0 },
  { name: "Caravan in Togo", nightlyRate: 450, nightsBooked: 0, totalIncome: 0 },
  { name: "Tent in Armenia", nightlyRate: 400, nightsBooked: 8, totalIncome: 3581 },
]

export default function MyRentals() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Active Properties: {properties.length}</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property Name</TableHead>
              <TableHead>Nightly Rate</TableHead>
              <TableHead>Nights Booked</TableHead>
              <TableHead>Total Income</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {properties.map((property, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <TableCell className="font-medium">{property.name}</TableCell>
                <TableCell>${property.nightlyRate}</TableCell>
                <TableCell>{property.nightsBooked}</TableCell>
                <TableCell>${property.totalIncome}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Pencil className="h-5 w-5 text-gray-500 cursor-pointer hover:text-blue-500" />
                    <Trash2 className="h-5 w-5 text-gray-500 cursor-pointer hover:text-red-500" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="text-sm text-gray-500 mt-4">A list of all your properties.</p>
    </div>
  )
}