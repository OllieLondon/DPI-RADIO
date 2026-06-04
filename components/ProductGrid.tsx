'use client'

import { useState } from 'react'

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  colors: string[]
  isNew: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: 'Ceramic Serving Bowl',
    category: 'Kitchen',
    price: 48,
    image: '🥣',
    colors: ['cream', 'sage'],
    isNew: true,
  },
  {
    id: 2,
    name: 'Natural Wood Utensils Set',
    category: 'Kitchen',
    price: 62,
    image: '🥄',
    colors: ['natural', 'walnut'],
    isNew: true,
  },
  {
    id: 3,
    name: 'Woven Storage Basket',
    category: 'Home',
    price: 85,
    image: '🧺',
    colors: ['natural', 'charcoal'],
    isNew: false,
  },
  {
    id: 4,
    name: 'Minimalist Plant Pot',
    category: 'Decor',
    price: 52,
    image: '🪴',
    colors: ['sage', 'terracotta'],
    isNew: false,
  },
  {
    id: 5,
    name: 'Artisanal Candle',
    category: 'Decor',
    price: 38,
    image: '🕯️',
    colors: ['cream', 'sage', 'rust'],
    isNew: true,
  },
  {
    id: 6,
    name: 'Organic Cotton Napkins',
    category: 'Kitchen',
    price: 24,
    image: '🧵',
    colors: ['cream', 'natural'],
    isNew: false,
  },
  {
    id: 7,
    name: 'Wooden Cutting Board',
    category: 'Kitchen',
    price: 72,
    image: '🪵',
    colors: ['natural', 'dark'],
    isNew: false,
  },
  {
    id: 8,
    name: 'Ceramic Mug Set',
    category: 'Kitchen',
    price: 56,
    image: '☕',
    colors: ['cream', 'sage', 'rust'],
    isNew: true,
  },
]

interface FilterCategory {
  name: string
  label: string
}

export default function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const categories: FilterCategory[] = [
    { name: 'all', label: 'All Products' },
    { name: 'Kitchen', label: 'Kitchen' },
    { name: 'Home', label: 'Home' },
    { name: 'Decor', label: 'Decor' },
  ]

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter)

  return (
    <section id="products" className="section-spacing bg-white">
      <div className="container-main">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-widest text-kasaoli-gold font-semibold mb-4">
            Our Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-kasaoli-charcoal mb-6">
            Thoughtfully Curated Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Each piece in our collection is selected for its quality, sustainability, and ability to enhance your living space.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveFilter(cat.name)}
              className={`px-6 py-2 text-sm uppercase tracking-widest font-medium transition ${
                activeFilter === cat.name
                  ? 'bg-kasaoli-green text-white'
                  : 'bg-transparent border border-kasaoli-green text-kasaoli-green hover:bg-kasaoli-green hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative mb-6 bg-gray-50 aspect-square flex items-center justify-center overflow-hidden rounded-lg">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-kasaoli-rust text-white px-3 py-1 text-xs uppercase tracking-widest font-semibold">
                    New
                  </div>
                )}

                {/* Hover Overlay */}
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-kasaoli-charcoal bg-opacity-10 flex items-end justify-center p-4 opacity-100 animate-in">
                    <button className="w-full btn-primary">
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-widest text-kasaoli-gold font-semibold mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-serif text-kasaoli-charcoal group-hover:text-kasaoli-gold transition">
                    {product.name}
                  </h3>
                </div>

                {/* Color Options */}
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`w-3 h-3 rounded-full border border-gray-400 hover:border-kasaoli-gold transition ${
                        color === 'cream' ? 'bg-kasaoli-cream' :
                        color === 'sage' ? 'bg-kasaoli-green' :
                        color === 'natural' ? 'bg-yellow-100' :
                        color === 'terracotta' ? 'bg-kasaoli-rust' :
                        color === 'rust' ? 'bg-kasaoli-rust' :
                        color === 'charcoal' ? 'bg-kasaoli-charcoal' :
                        color === 'walnut' ? 'bg-amber-900' :
                        color === 'dark' ? 'bg-gray-800' :
                        'bg-gray-300'
                      }`}
                      title={color}
                    />
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-baseline justify-between pt-2 border-t border-gray-200">
                  <p className="text-lg font-serif text-kasaoli-charcoal">
                    ${product.price}
                  </p>
                  <button className="text-xs uppercase tracking-widest text-kasaoli-gold hover:text-kasaoli-rust font-semibold">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="btn-secondary">
            Explore Full Catalog
          </button>
        </div>
      </div>
    </section>
  )
}
