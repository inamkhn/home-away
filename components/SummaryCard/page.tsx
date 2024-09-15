import { Card, CardContent } from "@/components/ui/card"

export default function SummaryCard({ title, value, textColor }: { title: string; value: string | number; textColor: string }) {
    return (
      <Card className="flex-1">
        <CardContent className="flex justify-between items-center p-6">
          <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
          <span className={`text-3xl font-bold ${textColor}`}>{value}</span>
        </CardContent>
      </Card>
    )
  }