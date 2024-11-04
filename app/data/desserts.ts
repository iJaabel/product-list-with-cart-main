export interface DessertImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Dessert {
  image: DessertImage;
  name: string;
  category: string;
  price: number;
}

export const desserts: Dessert[] = [
  {
    image: {
      thumbnail: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=200&q=80",
      mobile: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=375&q=80",
      tablet: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=768&q=80",
      desktop: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=1440&q=80"
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.50
  },
  {
    image: {
      thumbnail: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=200&q=80",
      mobile: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=375&q=80",
      tablet: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=768&q=80",
      desktop: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=1440&q=80"
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.00
  },
  {
    image: {
      thumbnail: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=200&q=80",
      mobile: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=375&q=80",
      tablet: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=768&q=80",
      desktop: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=1440&q=80"
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.00
  },
  {
    image: {
      thumbnail: "https://images.unsplash.com/photo-1542124948-dc391252a940?w=200&q=80",
      mobile: "https://images.unsplash.com/photo-1542124948-dc391252a940?w=375&q=80",
      tablet: "https://images.unsplash.com/photo-1542124948-dc391252a940?w=768&q=80",
      desktop: "https://images.unsplash.com/photo-1542124948-dc391252a940?w=1440&q=80"
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.50
  },
  {
    image: {
      thumbnail: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=200&q=80",
      mobile: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=375&q=80",
      tablet: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=768&q=80",
      desktop: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=1440&q=80"
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.00
  },
  {
    image: {
      thumbnail: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=200&q=80",
      mobile: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=375&q=80",
      tablet: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=768&q=80",
      desktop: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=1440&q=80"
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.00
  },
  {
    image: {
      thumbnail: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=200&q=80",
      mobile: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=375&q=80",
      tablet: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=768&q=80",
      desktop: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=1440&q=80"
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.50
  },
  {
    image: {
      thumbnail: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200&q=80",
      mobile: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=375&q=80",
      tablet: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=768&q=80",
      desktop: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1440&q=80"
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.50
  },
  {
    image: {
      thumbnail: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&q=80",
      mobile: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=375&q=80",
      tablet: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=768&q=80",
      desktop: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1440&q=80"
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.50
  }
];