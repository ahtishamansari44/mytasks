import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"
import { motion } from "motion/react"

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
        <CardHeader className="p-0 relative aspect-square bg-white overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain p-6 w-full h-full transition-transform duration-500 hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <Badge className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm">
            {product.category}
          </Badge>
        </CardHeader>
        <CardContent className="flex-1 p-5 flex flex-col gap-2">
          <div className="flex items-center gap-1 text-amber-500 text-sm font-medium">
            <Star className="w-4 h-4 fill-current" />
            <span>{product.rating.rate}</span>
            <span className="text-muted-foreground font-normal">({product.rating.count})</span>
          </div>
          <CardTitle className="text-lg line-clamp-2 font-semibold leading-tight min-h-[2.5rem]">
            {product.title}
          </CardTitle>
          <p className="text-2xl font-bold text-primary mt-auto">
            ${product.price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="p-5 pt-0">
          <Button className="w-full gap-2 group" variant="default">
            <ShoppingCart className="w-4 h-4 transition-transform group-hover:scale-110" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
