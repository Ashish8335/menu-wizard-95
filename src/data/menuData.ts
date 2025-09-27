import { MenuItem } from '@/types/menu';

export const menuData: MenuItem[] = [
  // APPETIZERS
  {
    id: '1',
    name: 'Veg Samosa',
    description: 'Crispy triangular pastries filled with spiced potatoes and peas, served with mint chutney',
    price: 5.99,
    image: 'https://www.fbgcdn.com/pictures/ceef8e20-ea16-4cd1-95f9-a3e0a0f84c94_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '2',
    name: 'Samosa Chat',
    description: 'Crushed samosas topped with yogurt, chutneys, onions and spices - a Delhi street food favorite',
    price: 7.99,
    image: 'https://www.fbgcdn.com/pictures/9fce4482-2bd4-4272-86ab-3694868649a7_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '3',
    name: 'Mixed Veggie Pakoras - 8 pcs',
    description: 'Crispy deep-fried fritters made with mixed vegetables and chickpea flour batter',
    price: 8.99,
    image: 'https://www.fbgcdn.com/pictures/e41c04f8-7387-4578-bbd3-7db79e710feb_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '4',
    name: 'Gobi Manchurian Dry',
    description: 'Indo-Chinese style cauliflower florets tossed in spicy manchurian sauce',
    price: 12.99,
    image: 'https://www.fbgcdn.com/pictures/8b1ad240-9362-4e87-bf66-ed2ec4496750_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '5',
    name: 'Chicken 65',
    description: 'Spicy deep-fried chicken chunks marinated in yogurt and South Indian spices',
    price: 13.99,
    image: 'https://www.fbgcdn.com/pictures/35a42cdc-8163-4b96-92a4-379c7165d86f_d3.jpg',
    category: 'Appetizers',
    available: true
  },

  // SOUPS
  {
    id: '6',
    name: 'Tomato Soup',
    description: 'Rich and creamy tomato soup with herbs and a hint of basil',
    price: 6.99,
    image: 'https://www.fbgcdn.com/pictures/4d9785d0-c983-48bd-b097-0bfe3f6ed693_d3.jpg',
    category: 'Soups',
    available: true
  },
  {
    id: '7',
    name: 'Cream of Broccoli Soup',
    description: 'Velvety smooth broccoli soup with cream and subtle seasonings',
    price: 7.99,
    image: 'https://www.fbgcdn.com/pictures/837f4f67-dfe5-43f5-8bb6-f7edc558b4c5_d3.jpg',
    category: 'Soups',
    available: true
  },

  // VEGETARIAN MAINS
  {
    id: '8',
    name: 'Dal Makhani',
    description: 'Slow-cooked black lentils in rich tomato and butter gravy with cream',
    price: 14.99,
    image: 'https://www.fbgcdn.com/pictures/7d574d42-6561-489c-9b07-a41bdb53ed01_d3.jpg',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '9',
    name: 'Paneer Tikka Masala',
    description: 'Grilled paneer cubes in creamy tomato-based curry with aromatic spices',
    price: 16.99,
    image: 'https://www.fbgcdn.com/pictures/eac936c3-0231-4a83-a95b-919c8555304b_d3.jpg',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '10',
    name: 'Palak Paneer',
    description: 'Fresh spinach curry with paneer cubes, garlic, and traditional spices',
    price: 15.99,
    image: 'https://www.fbgcdn.com/pictures/ce7c89cb-04dc-43cc-845a-f0ee39e16364_d3.jpg',
    category: 'Vegetarian',
    available: true
  },

  // CHICKEN DISHES
  {
    id: '11',
    name: 'Butter Chicken',
    description: 'Tender chicken in rich, creamy tomato sauce with butter and mild spices',
    price: 18.99,
    image: 'https://www.fbgcdn.com/pictures/a29d7903-29d6-4124-8efd-c1dde9f8e185_d3.jpg',
    category: 'Chicken',
    available: true
  },
  {
    id: '12',
    name: 'Chicken Tikka Masala',
    description: 'Marinated grilled chicken in spiced curry sauce with onions and peppers',
    price: 19.99,
    image: 'https://www.fbgcdn.com/pictures/8fe3f636-29cc-4b26-b132-eaf7fe35cb86_d3.jpg',
    category: 'Chicken',
    available: true
  },
  {
    id: '13',
    name: 'Chettinad Chicken',
    description: 'Fiery South Indian chicken curry with roasted spices and coconut',
    price: 20.99,
    image: 'https://www.fbgcdn.com/pictures/ccfb7ffa-3210-4bb5-adb5-10fa63013063_d3.jpg',
    category: 'Chicken',
    available: true
  },

  // BIRYANI & RICE
  {
    id: '14',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice layered with spiced chicken, saffron and fried onions',
    price: 22.99,
    image: 'https://www.fbgcdn.com/pictures/425d3a12-4d9d-4c58-9026-581b0c9f2bc6_d3.jpg',
    category: 'Rice & Biryani',
    available: true
  },
  {
    id: '15',
    name: 'Veg Biryani',
    description: 'Aromatic basmati rice with mixed vegetables, herbs and traditional biryani spices',
    price: 18.99,
    image: 'https://www.fbgcdn.com/pictures/565eb08d-547a-45cd-8f73-9f3f2788ac27_d3.jpg',
    category: 'Rice & Biryani',
    available: true
  },
  {
    id: '16',
    name: 'Jeera Rice',
    description: 'Fragrant basmati rice tempered with cumin seeds and ghee',
    price: 8.99,
    image: 'https://www.fbgcdn.com/pictures/0febb882-9a6a-4c81-8cec-578f8ac3415d_d3.jpg',
    category: 'Rice & Biryani',
    available: true
  },

  // BREADS
  {
    id: '17',
    name: 'Garlic Naan',
    description: 'Soft leavened bread topped with fresh garlic and cilantro',
    price: 4.99,
    image: 'https://www.fbgcdn.com/pictures/cf16ca23-5bd6-432a-b288-4985a90c7050_d3.jpg',
    category: 'Breads',
    available: true
  },
  {
    id: '18',
    name: 'Butter Naan',
    description: 'Classic soft naan bread brushed with butter',
    price: 3.99,
    image: 'https://www.fbgcdn.com/pictures/778c53e8-5d36-4e3a-9549-116a07c82351_d3.jpg',
    category: 'Breads',
    available: true
  },
  {
    id: '19',
    name: 'Cheese Naan',
    description: 'Naan stuffed with melted cheese - a popular fusion favorite',
    price: 6.99,
    image: 'https://www.fbgcdn.com/pictures/70a8e366-2627-4abe-84c5-3a884c6eef54_d3.jpg',
    category: 'Breads',
    available: true
  }
];

export const categories = [
  'All Items',
  'Appetizers', 
  'Soups',
  'Vegetarian',
  'Chicken',
  'Rice & Biryani',
  'Breads'
];