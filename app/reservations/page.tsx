import SummaryCard from "@/components/SummaryCard/page"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Reservation {
  propertyName: string
  country: string
  flag: string
  nights: number
  total: number
  checkIn: string
  checkOut: string
}

const reservations: Reservation[] = [
  {
    propertyName: "Tent in Armenia",
    country: "Armenia",
    flag: "🇦🇲",
    nights: 8,
    total: 3581,
    checkIn: "June 3, 2024",
    checkOut: "June 11, 2024",
  },
]


export default function ReservationDashboard() {
  const totalProperties = 3
  const totalNights = reservations.reduce((sum, res) => sum + res.nights, 0)
  const totalIncome = reservations.reduce((sum, res) => sum + res.total, 0)

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Properties" value={totalProperties} textColor="text-orange-500" />
        <SummaryCard title="Nights" value={totalNights} textColor="text-orange-500" />
        <SummaryCard title="Total" value={`$${totalIncome.toLocaleString()}`} textColor="text-orange-500" />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Total Reservations: {reservations.length}</h2>
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property Name</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Nights</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead>Check Out</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reservations.map((reservation, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{reservation.propertyName}</TableCell>
                  <TableCell>
                    <span className="mr-2">{reservation.flag}</span>
                    {reservation.country}
                  </TableCell>
                  <TableCell>{reservation.nights}</TableCell>
                  <TableCell>${reservation.total.toLocaleString()}</TableCell>
                  <TableCell>{reservation.checkIn}</TableCell>
                  <TableCell>{reservation.checkOut}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="text-sm text-gray-500 mt-2">A list of your recent reservations.</p>
      </div>
    </div>
  )
}