import ReviewCard from "@/components/ReviewCard/page"

type Review = {
  id: number
  title: string
  rating: number
  comment: string
  avatarSrc: string
}

export default function Reviews() {
    const reviews: Review[] = [
        {
          id: 1,
          title: "Caravan in Finland",
          rating: 5,
          comment: "Amazing place !!!",
          avatarSrc: "/placeholder.svg?height=40&width=40",
        },
        {
          id: 2,
          title: "Beach Resort",
          rating: 4,
          comment: "Great experience, beautiful views.",
          avatarSrc: "/placeholder.svg?height=40&width=40",
        },
        {
          id: 3,
          title: "Mountain Retreat",
          rating: 5,
          comment: "Peaceful and rejuvenating stay.",
          avatarSrc: "/placeholder.svg?height=40&width=40",
        },
        {
          id: 4,
          title: "City Hotel",
          rating: 3,
          comment: "Good location, average amenities.",
          avatarSrc: "/placeholder.svg?height=40&width=40",
        },
      ]
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}