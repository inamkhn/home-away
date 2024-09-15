import { Star, Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Review = {
    id: number
    title: string
    rating: number
    comment: string
    avatarSrc: string
  }

export default function ReviewCard({ review }: { review: Review }) {
    return (
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={review.avatarSrc} alt={review.title} />
              <AvatarFallback>{review.title[0]}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-sm font-medium">{review.title}</CardTitle>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <Trash2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-red-500" />
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">{review.comment}</p>
        </CardContent>
      </Card>
    )
  }