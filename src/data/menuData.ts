import { MenuItem } from '@/types/menu';
import butterChickenImg from '@/assets/butter-chicken.jpg';
import chickenBiryaniImg from '@/assets/chicken-biryani.jpg';
import tandooriChickenImg from '@/assets/tandoori-chicken.jpg';
import palakPaneerImg from '@/assets/palak-paneer.jpg';
import dalMakhaniImg from '@/assets/dal-makhani.jpg';
import naanBreadImg from '@/assets/naan-bread.jpg';

export const menuData: MenuItem[] = [
  // DEALS
  {
    id: 'deal1',
    name: '10% Off 5pm to 9pm',
    description: 'Enjoy 10% OFF from 5 pm to 9pm. (On Online Orders Only) (Will Be Applied Automatically)',
    price: 0,
    image: 'https://www.fbgcdn.com/pictures/7061d643-791f-404d-9517-07ce4a5f9661_d2.jpg',
    category: 'Deals',
    available: true,
    isPercentageDiscount: true,
    discountValue: 10,
    validTime: '5:00 PM - 9:00 PM'
  },
  {
    id: 'deal2',
    name: 'Buy 1 Get 1 FREE Yellow Daal Tadka',
    description: 'Buy One Get One FREE Yellow Daal Tadka. Offer is valid for online orders only.',
    price: 0,
    image: 'https://www.fbgcdn.com/pictures/42a1fe11-c85b-4d0d-b980-3b656bfa1583.jpg',
    category: 'Deals',
    available: true,
    isDeal: true,
    dealType: 'BOGO'
  },
  {
    id: 'deal3',
    name: 'Buy Butter Chicken Get Rice FREE',
    description: 'Buy One Butter Chicken Get One Rice FREE ******one offer valid at a time only*****',
    price: 0,
    image: 'https://www.fbgcdn.com/pictures/48778819-e760-404d-b8bc-5cfb493c69fa.jpg',
    category: 'Deals',
    available: true,
    isDeal: true,
    dealType: 'FREE_ITEM'
  },
  {
    id: 'deal4',
    name: 'Free delivery on Order of $40+',
    description: 'Free delivery on orders of $40 or more. Offer valid for online orders only. Not valid for Catering.',
    price: 0,
    image: 'https://www.fbgcdn.com/pictures/7854f82d-15a9-44db-a86b-acf6260a430f.jpg',
    category: 'Deals',
    available: true,
    isDeal: true,
    dealType: 'FREE_DELIVERY',
    minimumOrder: 40
  },

  // STARTERS (APPETIZERS)
  {
    id: '1',
    name: 'Veg Samosa',
    description: 'Crispy pastry filled with spiced potatoes, peas, and herbs, garnished with fresh cilantro and green onions.',
    price: 5.99,
    image: 'https://www.fbgcdn.com/pictures/ceef8e20-ea16-4cd1-95f9-a3e0a0f84c94_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '2',
    name: 'Samosa Chat',
    description: 'Crispy samosas topped with yogurt, tamarind chutney, chopped onions, and garnished with fresh cilantro and pomegranate seeds.',
    price: 8.99,
    image: 'https://www.fbgcdn.com/pictures/9fce4482-2bd4-4272-86ab-3694868649a7_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '3',
    name: 'Mixed Veggie Pakoras - 8 pcs',
    description: 'Crispy appetizers filled with mixed vegetables. Served with delicious tamarind and mint sauce.',
    price: 8.99,
    image: 'https://www.fbgcdn.com/pictures/e41c04f8-7387-4578-bbd3-7db79e710feb_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '4',
    name: 'Gobi Manchurian Dry',
    description: 'Indo-chinese appetizer made with cauliflower, bell-pepper, capsicum, hot garlic sauce, vinegar, ginger & garlic.',
    price: 9.99,
    image: 'https://www.fbgcdn.com/pictures/e41c04f8-7387-4578-bbd3-7db79e710feb_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '5',
    name: 'Gobi 65',
    description: 'Gobi 65 is a tasty starter snack of spicy fried cauliflower with yogurt as base. A yum snack for the day is this gobi 65.',
    price: 9.99,
    image: 'https://www.fbgcdn.com/pictures/e759db9f-8488-429b-9034-27868ff3acbf_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '6',
    name: 'Gobi Chilli',
    description: 'Crispy cauliflower florets coated in a tangy, spicy sauce, garnished with chopped green onions.',
    price: 9.99,
    image: 'https://www.fbgcdn.com/pictures/e245cc20-7ee3-4d24-869a-ebf194c2b481_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '7',
    name: 'Aloo Chilli',
    description: 'Deep-fried potatoes with green capsicum, chilies, onion, garlic and delicious hot garlic chili sauce.',
    price: 9.99,
    image: 'https://www.fbgcdn.com/pictures/5c0afff5-3f44-4f99-84cb-7fc2eb75fbea_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '8',
    name: 'Potatoes 65 (Aloo 65)',
    description: 'Potatoes marinated in a blend of spices, deep fried until golden, typically includes curry leaves and mustard seeds.',
    price: 9.99,
    image: '/api/placeholder/400/300',
    category: 'Appetizers',
    available: true
  },
  {
    id: '9',
    name: 'Everest Special Gobi Coconut',
    description: 'Cauliflower cooked with coconut, typically includes a blend of spices, onion, and tomato, creating a savory vegan dish.',
    price: 9.99,
    image: '/api/placeholder/400/300',
    category: 'Appetizers',
    available: true
  },
  {
    id: '10',
    name: 'Paneer Chilli',
    description: 'Deep fried cottage cheese cubes with green capsicum, chillies, onion, garlic and delicious hot garlic chilli sauce.',
    price: 10.99,
    image: 'https://www.fbgcdn.com/pictures/eec863c3-74f5-4433-b489-2103ccff3407_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '11',
    name: 'Paneer Pakoras',
    description: 'Marinated paneer (Indian cheese) dipped in a batter and fried making a crispy, mouthwatering appetizer. Crispy outside and soft inside, these pakoras are addicting.',
    price: 10.99,
    image: '/api/placeholder/400/300',
    category: 'Appetizers',
    available: true
  },
  {
    id: '12',
    name: 'Paneer 65',
    description: 'Fresh organic cottage cheese pieces marinated in spices, deep fried and garnished with curry leaves, onion rings and lemon wedges.',
    price: 10.99,
    image: '/api/placeholder/400/300',
    category: 'Appetizers',
    available: true
  },
  {
    id: '13',
    name: 'Paneer Manchurian',
    description: 'Crispy paneer cubes tossed in a tangy Manchurian sauce with bell peppers and onions.',
    price: 10.99,
    image: 'https://www.fbgcdn.com/pictures/560a65ba-d606-4ec6-b556-b05955447fd5_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '14',
    name: 'Mushroom 65',
    description: 'Fresh organic mushroom marinated in spices, deep-fried, and garnished with curry leaves, onion rings and lemon wedges.',
    price: 10.99,
    image: 'https://www.fbgcdn.com/pictures/e8a27d4b-4854-48f9-b6d3-f254f2ad891e_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '15',
    name: 'Mushroom Chilli',
    description: 'Fresh organic mushroom stir-fried with bell peppers and onions in a spicy, tangy, chili sauce, garnished with fresh scallions.',
    price: 10.99,
    image: 'https://www.fbgcdn.com/pictures/96373003-59e3-44aa-a190-20a3f99d4017_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '16',
    name: 'Chicken Manchurian Dry',
    description: 'Chicken manchurian is a lip smacking recipe that is an absolute favorite amongst everyone. Served with hot garlic sauce.',
    price: 10.99,
    image: 'https://www.fbgcdn.com/pictures/f296ec42-e6a8-4054-bc81-aa165056ff48_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '17',
    name: 'Chicken Manchurian',
    description: 'Crispy chicken pieces tossed in a savory sauce, garnished with bell peppers, green onions, and cilantro, topped with shredded carrots.',
    price: 10.99,
    image: 'https://www.fbgcdn.com/pictures/14611ff5-6f17-447a-b303-99894967b579_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '18',
    name: 'Chicken Pepper Fry',
    description: 'Dry fried chicken goes perfectly with the aromatic flavor of garlic, pepper, ginger and other spices. A must try!',
    price: 10.99,
    image: 'https://www.fbgcdn.com/pictures/0091e4dd-6624-4edf-9170-6169ec281580_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '19',
    name: 'Chicken Lollipop',
    description: 'Tasty chicken appetizer, deep-fried and served with hot garlic sauce.',
    price: 10.99,
    image: 'https://www.fbgcdn.com/pictures/3a5e7b76-d527-41c3-9a6f-0369c547477a_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '20',
    name: 'Chicken Pakora',
    description: 'Crispy on the outside, juicy inside, subtle spices that hit the taste buds with the right intensity, and dipped in chutney – chicken pakoras are small pockets of joy that burst in your mouth like confetti!',
    price: 10.99,
    image: '/api/placeholder/400/300',
    category: 'Appetizers',
    available: true
  },
  {
    id: '21',
    name: 'Chilli Chicken',
    description: 'A mouth-watering chicken recipe that\'s cooked using green onion & capsicum along with Indian spices and Chinese flavors.',
    price: 10.99,
    image: '/api/placeholder/400/300',
    category: 'Appetizers',
    available: true
  },
  {
    id: '22',
    name: 'Chicken 65',
    description: 'Tender chicken pieces marinated in spices, deep fried and garnished with curry leaves, onion rings, and lemon wedges.',
    price: 10.99,
    image: 'https://www.fbgcdn.com/pictures/1bff24b4-62a4-4275-ad94-fea1c473b246_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '23',
    name: 'Soya Chaap 65',
    description: 'Soya chaap is a vegetarian dish made from soy protein marinated in a blend of spices, deep fried until golden, typically includes curry leaves and mustard seeds.',
    price: 10.99,
    image: 'https://www.fbgcdn.com/pictures/57d170c5-bc92-497e-898d-4c191c9d030c_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '24',
    name: 'Chilli Fish',
    description: 'Deep fried fish with hot garlic chilli sauce and Indo-Chinese spices.',
    price: 10.99,
    image: 'https://www.fbgcdn.com/pictures/303f462f-55ff-48b5-96ab-270c0265a2ca_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '25',
    name: 'Fish 65',
    description: 'Fish 65 or hot hot Indian fish! Crispy on the outside and hot, tasty fish in the inside with yogurt as base. Finger licking good!',
    price: 13.99,
    image: 'https://www.fbgcdn.com/pictures/e6cd9754-1b97-4202-8dba-20518b87ac4f_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '26',
    name: 'Fish Pakoras',
    description: 'Fish pakora is deep fried in Indian spices and gram flour batter and served with tamarin and mint sauce. A must try!',
    price: 13.99,
    image: 'https://www.fbgcdn.com/pictures/a4a8d523-f4a9-4d58-b340-ddd884593281_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '27',
    name: 'Fish Fry Boneless',
    description: 'Boneless fish pieces, marinated with Asian spices then deep fried to achieve a crispy texture.',
    price: 13.99,
    image: 'https://www.fbgcdn.com/pictures/f2806d26-16c1-4d7f-b9e5-ae5762676b8d_d3.jpg',
    category: 'Appetizers',
    available: true
  },
  {
    id: '28',
    name: 'Shrimp Chilli',
    description: 'Shrimp stir-fried with bell peppers and onions in a spicy, tangy chilli sauce, garnished with fresh scallions.',
    price: 13.99,
    image: '/api/placeholder/400/300',
    category: 'Appetizers',
    available: true
  },

  // SOUP & SALAD
  {
    id: '29',
    name: 'Veg Hot & Sour Soup',
    description: 'Hot and sour vegetable soup is a classic soup that is loaded with mushrooms, carrot, ginger, garlic and cabbage.',
    price: 6.99,
    image: 'https://www.fbgcdn.com/pictures/29faad1f-3762-4116-b994-ccabb0657490_d3.jpg',
    category: 'Soup & Salad',
    available: true
  },
  {
    id: '30',
    name: 'Chicken Hot & Sour Soup',
    description: 'Hot and sour chicken soup is a classic soup that is loaded with mushrooms, carrot, ginger, garlic and cabbage.',
    price: 7.99,
    image: 'https://www.fbgcdn.com/pictures/59f2405f-c689-4215-ab91-37f4ccff5a62_d3.jpg',
    category: 'Soup & Salad',
    available: true
  },
  {
    id: '31',
    name: 'Chicken Sweet Corn Soup',
    description: 'Sweet corn with chicken along with garlic, green onion, light vegetarian soup that will enhance your mood.',
    price: 6.99,
    image: 'https://www.fbgcdn.com/pictures/3d417133-5e78-43d7-bbd0-9ea22637f922_d3.jpg',
    category: 'Soup & Salad',
    available: true
  },
  {
    id: '32',
    name: 'Sweet Corn Soup',
    description: 'Sweet corn, garlic, green onion, light vegetarian soup that will enhance your mood.',
    price: 6.99,
    image: '/api/placeholder/400/300',
    category: 'Soup & Salad',
    available: true
  },
  {
    id: '33',
    name: 'Dal Soup (Vegan)',
    description: 'Healthy lentil soup full of nutritions! Perfect if you are on a diet and want to get something light.',
    price: 6.99,
    image: '/api/placeholder/400/300',
    category: 'Soup & Salad',
    available: true
  },
  {
    id: '34',
    name: 'Lentil Soup',
    description: 'Soup made of lentil that are nutritious, rich in minerals, protein, low in fat, high in fiber (digestive health), and unbelievably delicious!',
    price: 6.99,
    image: 'https://www.fbgcdn.com/pictures/f975a8dd-01d9-4f94-b731-cb816ff2c945_d3.jpg',
    category: 'Soup & Salad',
    available: true
  },
  {
    id: '35',
    name: 'Green Salad',
    description: 'Cucumber, carrot, onion, lemon, chili and mixed springs.',
    price: 7.99,
    image: 'https://www.fbgcdn.com/pictures/adf83f6f-f18b-4150-8ced-e96b1b9ba9a3_d3.jpg',
    category: 'Soup & Salad',
    available: true
  },
  {
    id: '36',
    name: 'Tomato Soup',
    description: 'The best tomato soup in town!',
    price: 7.99,
    image: 'https://www.fbgcdn.com/pictures/f1a2ccda-9a24-4caa-8a05-eccabf65921d_d3.jpg',
    category: 'Soup & Salad',
    available: true
  },
  {
    id: '37',
    name: 'Onion Lemon Chilli',
    description: 'Side flavor item to enhance any of the other items in the menu.',
    price: 2.99,
    image: '/api/placeholder/400/300',
    category: 'Soup & Salad',
    available: true
  },
  {
    id: '38',
    name: 'Titanic Jhol Momo Sauce',
    description: 'Side sauce for your favorite momos.',
    price: 6.99,
    image: '/api/placeholder/400/300',
    category: 'Soup & Salad',
    available: true
  },

  // CHOWMEIN (NOODLES)
  {
    id: '39',
    name: 'California Spicy Noodles Veg (Chef\'s Special)',
    description: 'Chef\'s Special stir-fried noodles mixed with vegetables, Indo-Chinese spiced bringing Heaven on Earth for you.',
    price: 16.99,
    image: 'https://www.fbgcdn.com/pictures/f56866a0-8127-4496-aa95-d56a5d2e9408_d3.jpg',
    category: 'Noodles',
    available: true
  },
  {
    id: '40',
    name: 'California Spicy Noodles Paneer (Chef\'s Special)',
    description: 'Chef\'s Special stir-fried noodles mixed with Paneer, Indo-Chinese spiced bringing Heaven on Earth for you.',
    price: 16.99,
    image: '/api/placeholder/400/300',
    category: 'Noodles',
    available: true
  },
  {
    id: '41',
    name: 'California Spicy Noodles Egg (Chef\'s Special)',
    description: 'Chef\'s Special stir-fried noodles mixed with egg, Indo-Chinese spiced bringing Heaven on Earth for you.',
    price: 16.99,
    image: '/api/placeholder/400/300',
    category: 'Noodles',
    available: true
  },
  {
    id: '42',
    name: 'California Spicy Noodles Chicken (Chef\'s Special)',
    description: 'Chef\'s Special stir-fried noodles mixed with chicken, Indo-Chinese spiced bringing Heaven on Earth for you.',
    price: 16.99,
    image: '/api/placeholder/400/300',
    category: 'Noodles',
    available: true
  },
  {
    id: '43',
    name: 'California Spicy Noodles Mixed (Chef\'s Special)',
    description: 'Chef\'s Special stir-fried noodles mixed with vegetables, egg and chicken, Indo-Chinese spiced bringing Heaven on Earth for you.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Noodles',
    available: true
  },
  {
    id: '44',
    name: 'Chicken Chowmein',
    description: 'Stir-fried chicken noodles mixed with tasty vegetables, Indo-chinese spiced and protein, bringing Heaven on Earth for you.',
    price: 15.99,
    image: 'https://www.fbgcdn.com/pictures/d87e2203-c699-47cd-b250-b5ea03706f49_d3.jpg',
    category: 'Noodles',
    available: true
  },
  {
    id: '45',
    name: 'Everest Special Mixed Chowmein',
    description: 'Stir-fried noodles mixed with tasty vegetables, chicken, eggs, Indo-chinese spices and protein, bringing Heaven on Earth for you.',
    price: 15.99,
    image: 'https://www.fbgcdn.com/pictures/6cec63fa-d530-4f2c-bd15-a7d61709164c_d3.jpg',
    category: 'Noodles',
    available: true
  },
  {
    id: '46',
    name: 'Veg Chowmein',
    description: 'Stir-fried noodles mixed with tasty vegetables, Indo-Chinese spiced bringing Heaven on Earth for you.',
    price: 13.99,
    image: 'https://www.fbgcdn.com/pictures/b1e71c6f-49da-4e63-a6dd-e9dc110cfd22_d3.jpg',
    category: 'Noodles',
    available: true
  },
  {
    id: '47',
    name: 'Tandoori Momo-Chicken with Chowmein',
    description: '10 Pieces momo cooked in clay oven and bedded with Everest special noodles and served with Everest special sauces.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Noodles',
    available: true
  },
  {
    id: '48',
    name: 'Mushroom Chowmein',
    description: 'Sautéed mushroom and crunchy bell peppers tossed with stir fried noodles in a savory sauce',
    price: 14.99,
    image: 'https://www.fbgcdn.com/pictures/71e4a944-bf66-4e6e-aff2-cb6e609a5f2f_d3.jpg',
    category: 'Noodles',
    available: true
  },

  // CHICKEN ENTREES
  {
    id: '49',
    name: 'Butter Chicken - Chef\'s Special',
    description: 'Chef\'s special. Butter chicken is one of the most popular curries and we have one of the best in the world! Sliced thigh chicken meat with creamy, buttery sauce.',
    price: 16.99,
    image: butterChickenImg,
    category: 'Chicken',
    available: true
  },
  {
    id: '50',
    name: 'Chicken Achari',
    description: 'A mouth watering yet simple chicken thigh meat dish cooked with fresh mixed pickle and Indian spices with cashew nuts.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Chicken',
    available: true
  },
  {
    id: '51',
    name: 'Chicken Curry',
    description: 'Home style cooked chicken curry with Indian spices and tomato and onion based gravy.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Chicken',
    available: true
  },
  {
    id: '52',
    name: 'Chicken Jalfrazi',
    description: 'Jalfrazi is a special style of cooking chicken thigh meat with Indian spices and onion, tomato based gravy mixed with cashew nuts.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Chicken',
    available: true
  },
  {
    id: '53',
    name: 'Kadai Chicken',
    description: 'Kadai Chicken is a delicious curry made by cooking chicken with kadai masala, onion, tomato, capsicum, spices and herbs.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Chicken',
    available: true
  },
  {
    id: '54',
    name: 'Chicken Korma',
    description: 'Chicken Korma is a mildly spiced Indian dish with chicken thighs, thick creamy sauce featuring cashew and almond nuts.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Chicken',
    available: true
  },
  {
    id: '55',
    name: 'Chicken Saag',
    description: 'Spinach and pieces of chicken thigh meat in a tasty creamy base.',
    price: 16.99,
    image: '/api/placeholder/400/300',
    category: 'Chicken',
    available: true
  },
  {
    id: '56',
    name: 'Chicken Tikka Masala (Premium)',
    description: 'Composed of grilled chunks of chicken breast meat enveloped in a buttery, creamy sauce.',
    price: 16.99,
    image: 'https://www.fbgcdn.com/pictures/7ab647e2-e591-41c9-86b1-af57478ba6ab_d3.jpg',
    category: 'Chicken',
    available: true
  },
  {
    id: '57',
    name: 'Chicken Vindaloo',
    description: 'A traditional potato dish with chicken thigh meat with slight tang from vinegar cooked with Indian spices and onion tomato gravy.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Chicken',
    available: true
  },
  {
    id: '58',
    name: 'Chilli Chicken',
    description: 'A mouth-watering chicken recipe that\'s cooked using green onion & capsicum along with Indian spices and Chinese flavors.',
    price: 11.99,
    image: '/api/placeholder/400/300',
    category: 'Chicken',
    available: true
  },
  {
    id: '59',
    name: 'Special Chicken Coconut',
    description: 'Thigh chicken meat cooked with Indian spices with coconut milk as the base. Must try!',
    price: 15.99,
    image: 'https://www.fbgcdn.com/pictures/1754e240-6f18-49e8-a475-f96eeb6031eb_d3.jpg',
    category: 'Chicken',
    available: true
  },

  // BIRYANI & FRIED RICE
  {
    id: '60',
    name: 'Chicken Biryani',
    description: 'Chicken and saffron rice in biryani herbs served with special house raita and cashew nuts.',
    price: 15.99,
    image: chickenBiryaniImg,
    category: 'Rice & Biryani',
    available: true
  },
  {
    id: '61',
    name: 'Goat Biryani',
    description: 'Goat bone-in and saffron rice in biryani herbs served with special house raita and cashew nuts.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/193e7131-35d3-4c54-a9cb-7d6237a83231_d3.jpg',
    category: 'Rice & Biryani',
    available: true
  },
  {
    id: '62',
    name: 'Lamb Biryani',
    description: 'Lamb and saffron rice in biryani herbs served with special house raita and cashew nuts.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Rice & Biryani',
    available: true
  },
  {
    id: '63',
    name: 'Vegetable Biryani',
    description: 'Seasonal vegetable with saffron rice in biryani herbs served with special house raita and cashew nuts.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Rice & Biryani',
    available: true
  },
  {
    id: '64',
    name: 'Paneer Biryani',
    description: 'Organic paneer with saffron rice in biryani herbs served with raita.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Rice & Biryani',
    available: true
  },
  {
    id: '65',
    name: 'Egg Biryani',
    description: 'Seasonal vegetable with saffron rice along with egg in biryani herbs served with special house raita and cashew nuts.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Rice & Biryani',
    available: true
  },
  {
    id: '66',
    name: 'Fish Biryani',
    description: 'Fish and saffron rice in biryani herbs served with raita.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Rice & Biryani',
    available: true
  },
  {
    id: '67',
    name: 'Shrimp Biryani',
    description: 'Shrimp and saffron rice in biryani herbs served with raita.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Rice & Biryani',
    available: true
  },
  {
    id: '68',
    name: 'Chicken Fried Rice',
    description: 'Everest special basmati rice cooked with fried onions, chicken and garlic with light Everest special sauce.',
    price: 15.99,
    image: 'https://www.fbgcdn.com/pictures/d5b62eb4-5b25-4163-b6ba-e4110a7b978f_d3.jpg',
    category: 'Rice & Biryani',
    available: true
  },
  {
    id: '69',
    name: 'Veg Fried Rice',
    description: 'Everest special basmati rice cooked with fried onions, seasonal vegetable and garlic with light Everest special sauce.',
    price: 15.99,
    image: 'https://www.fbgcdn.com/pictures/44e1fd07-ce74-425e-81ad-85709a8f230c_d3.jpg',
    category: 'Rice & Biryani',
    available: true
  },
  {
    id: '70',
    name: 'California Spicy Fried Rice Veg',
    description: 'Chef\'s special fried rice with vegetables.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Rice & Biryani',
    available: true
  },
  {
    id: '71',
    name: 'California Spicy Fried Rice Chicken',
    description: 'Chef\'s special fried rice with chicken.',
    price: 16.99,
    image: '/api/placeholder/400/300',
    category: 'Rice & Biryani',
    available: true
  },
  {
    id: '72',
    name: 'Eggs Fried Rice',
    description: 'Everest special. Basmati rice cooked with fried onions, seasonal vegetable, eggs and garlic with light Everest special sauce.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Rice & Biryani',
    available: true
  },
  {
    id: '73',
    name: 'Special Paneer Mushroom Fried Rice',
    description: 'Chef special creation, basmati rice mixed with mushroom and paneer.',
    price: 16.99,
    image: '/api/placeholder/400/300',
    category: 'Rice & Biryani',
    available: true
  },
  {
    id: '74',
    name: 'Shrimp Fried Rice',
    description: 'Everest special. Basmati rice cooked with fried onions, shrimp and garlic with light Everest special sauce.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Rice & Biryani',
    available: true
  },

  // VEG ENTREES
  {
    id: '75',
    name: 'Achari Eggplant',
    description: 'A mouth watering yet simple eggplant dish cooked with fresh mixed pickle and Indian spices.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '76',
    name: 'Aloo Gobi Masala',
    description: 'Aloo gobi (potatoes & cauliflower) is a popular Indian dish in which potatoes and cauliflower are cooked with onions, tomatoes and spices.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '77',
    name: 'Chana Masala',
    description: 'Chickpeas cooked in a blend of North Indian spices in tomato based gravy.',
    price: 15.99,
    image: 'https://www.fbgcdn.com/pictures/7220f619-e25a-43de-b8de-f8432af07e08_d3.jpg',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '78',
    name: 'Dal Makhani',
    description: 'Whole black lentil cooked in ginger, garlic, onions and some herbs in butter sauce.',
    price: 15.99,
    image: dalMakhaniImg,
    category: 'Vegetarian',
    available: true
  },
  {
    id: '79',
    name: 'Kadhai Paneer',
    description: 'Fresh cottage cheese cooked in thick gravy with diced capsicums, onions, Indian spices with tomato based gravy.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '80',
    name: 'Malai Kofta-Chef\'s Special',
    description: 'Vegetable dumpling (4pcs) cooked in creamy tomato, cashew paste and creamy sauce with Indian spices.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '81',
    name: 'Mushroom Mattar',
    description: 'Mutter Mushroom is both nutritious and flavorful with Indian spices and tomato gravy.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '82',
    name: 'Mattar Paneer',
    description: 'Homemade cottage cheese and green peas cooked in creamy tomato sauce and Indian spices.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '83',
    name: 'Okra Masala',
    description: 'Fresh okra cooked with onion, North Indian spices with tomato base.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '84',
    name: 'Paneer Butter Masala (Premium)',
    description: 'Indian cottage cheese cooked with cashew paste, buttery, creamy tomato base.',
    price: 16.99,
    image: 'https://www.fbgcdn.com/pictures/79ef3edb-093f-46b2-b9db-cf96ae002273_d3.jpg',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '85',
    name: 'Saag Aloo',
    description: 'Spinach leaves cooked with potato in creamy tomato and onion sauce.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '86',
    name: 'Saag Paneer - Chef\'s Special',
    description: 'Spinach leaves cooked with cubes of homemade cottage cheese with Indian spices and creamy sauce.',
    price: 16.99,
    image: 'https://www.fbgcdn.com/pictures/644196ce-b28b-4799-be21-b123fa43c0b4_d3.jpg',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '87',
    name: 'Shahi Paneer - Royal Taste',
    description: 'Paneer (Indian cottage cheese) pieces in a thick, creamy and spicy gravy prepared in tomato, onion, bell peppers and cashew nut paste.',
    price: 15.99,
    image: 'https://www.fbgcdn.com/pictures/c349f4f6-119f-4fb4-9347-4654e5f5c3c1_d3.jpg',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '88',
    name: 'Tawa Okra Fry',
    description: 'Pan fried Okra dish with Indian spices, raw onions and tomato. Absolutely delicious!',
    price: 15.99,
    image: 'https://www.fbgcdn.com/pictures/881a5838-7024-439f-a2bc-43f3fdb75cd0_d3.jpg',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '89',
    name: 'Veg Korma',
    description: 'Mixed vegetables cooked in creamy tomato with cashew sauce.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '90',
    name: 'Mixed Veg Curry (Vegan)',
    description: 'Stir-fried seasonal vegetables cooked with Indian herbs and spices with tomato based gravy.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '91',
    name: 'Vegetable Manchurian Gravy (Vegan)',
    description: 'Vegetable Manchurian is a perfect melange of stir-fried vegetables and delicious manchurian balls cooked in a thick Indo-Chinese gravy.',
    price: 15.99,
    image: 'https://www.fbgcdn.com/pictures/5307ce15-e1ab-4dee-910f-b81e7033bc8c_d3.jpg',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '92',
    name: 'Chana Masala (Vegan)',
    description: 'Chickpeas cooked in a blend of North Indian spices in tomato based gravy.',
    price: 15.99,
    image: 'https://www.fbgcdn.com/pictures/9de88798-4ac1-41b6-a550-1687bb3ec702_d3.jpg',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '93',
    name: 'Yellow Dal Tadka (Vegan)',
    description: 'Yellow lentils cooked with fresh tomato, onion, cumin and cilantro.',
    price: 15.99,
    image: 'https://www.fbgcdn.com/pictures/82120695-630b-4468-b9e8-0a0ad440719c_d3.jpg',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '94',
    name: 'Vegetable Jalfrazi-Vegan',
    description: 'Vegetable Jalfrezi is a North Indian recipe. This semi-dry side dish recipe is a blend of many vegetables and Indian spices with onion, bell-pepper and cashew nuts.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '95',
    name: 'Tawa Okra Fry-Vegan',
    description: 'Pan fried Okra dish with Indian spices, raw onions and tomato. Absolutely delicious!',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '96',
    name: 'Okra Masala-Vegan',
    description: 'Okra masala is delicious and goes really well with potatoes, Indian spices with tomato based gravy.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Vegetarian',
    available: true
  },
  {
    id: '97',
    name: 'Aloo Gobi Matar-Vegan',
    description: 'A very classic Indian dish of potatoes, green peas and cauliflower with tomato based gravy. It is usually considered "pure" in a spiritual sense since it is vegan.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Vegetarian',
    available: true
  },

  // GOAT ENTREES
  {
    id: '98',
    name: 'Goat Curry',
    description: 'Spicy and savory goat curry, a flavorful dish made with tender goat meat and aromatic spices.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/e5f9fb57-039c-4581-8894-9a91ad051632_d3.jpg',
    category: 'Goat',
    available: true
  },
  {
    id: '99',
    name: 'Goat Chilli',
    description: 'Diced goat stir-fried with onions, bell peppers, and a blend of spicy chilis, typically includes a mix of fresh herbs and spices.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Goat',
    available: true
  },
  {
    id: '100',
    name: 'Goat Saag',
    description: 'Tender goat pieces simmered in a rich, spiced spinach sauce, garnished with a dollop of cream and a slice of red pepper.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Goat',
    available: true
  },
  {
    id: '101',
    name: 'Goat Vindaloo',
    description: 'Diced goat in a spicy curry sauce with potatoes, typically includes a touch of vinegar and a blend of aromatic spices.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Goat',
    available: true
  },
  {
    id: '102',
    name: 'Goat Jalfrazi',
    description: 'Goat cooked with onions, bell peppers, and tomatoes in a mildly spiced curry sauce.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Goat',
    available: true
  },
  {
    id: '103',
    name: 'Goat Achari',
    description: 'Tender goat pieces marinated in a blend of pickling spices, cooked in a tangy gravy typically including onions, tomatoes, and a mix of aromatic herbs.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/81daca63-61ba-4381-ad0a-a6f9dfcfdd98_d3.jpg',
    category: 'Goat',
    available: true
  },
  {
    id: '104',
    name: 'Nepali Style Goat Curry',
    description: 'Tender goat pieces in a rich, spiced curry sauce, garnished with fresh cilantro and radish slices.',
    price: 18.99,
    image: '/api/placeholder/400/300',
    category: 'Goat',
    available: true
  },

  // LAMB ENTREES
  {
    id: '105',
    name: 'Everest Special Lamb Coconut',
    description: 'Lamb Coconut is a delicious combination of lamb and special Everest coconut based sauce and Indian spices.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Lamb',
    available: true
  },
  {
    id: '106',
    name: 'Lamb Achari',
    description: 'A mouth watering yet simple Lamb meat dish cooked with fresh mixed pickle and Indian spices with cashew nuts.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/a4f4dac9-89ba-446b-a33f-f6122ec5d771_d3.jpg',
    category: 'Lamb',
    available: true
  },
  {
    id: '107',
    name: 'Lamb Curry',
    description: 'Delicious Indian curry with lamb meat with Indian spiced and onion and tomato based gravy.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/329e2b11-7f2e-4080-a451-6aa6eb1ccfe6_d3.jpg',
    category: 'Lamb',
    available: true
  },
  {
    id: '108',
    name: 'Lamb Jalfrezi',
    description: 'Lamb Jalfrezi is a North Indian recipe cooked with sliced onions, bell peppers, Indian spices with cashew nuts and tomato based gravy.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Lamb',
    available: true
  },
  {
    id: '109',
    name: 'Lamb Korma',
    description: 'Lamb korma is a delicious combination of lamb and special Everest korma sauce with cashew nuts and Indian spices.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/bedcced8-04d5-4fe9-898c-ced7cb14f620_d3.jpg',
    category: 'Lamb',
    available: true
  },
  {
    id: '110',
    name: 'Lamb Rogan Josh',
    description: 'Lamb meat cooked with Indian spices, Rogan tomato gravy and cashew nuts.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/b103501b-0532-4367-a222-e2a224f14afb_d3.jpg',
    category: 'Lamb',
    available: true
  },
  {
    id: '111',
    name: 'Lamb Saag Chef\'s Special',
    description: 'Lamb meat perfectly mixed with green and creamy Spinach gravy.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/debd95b3-d848-4eab-b1ab-f4277ec2d54f_d3.jpg',
    category: 'Lamb',
    available: true
  },
  {
    id: '112',
    name: 'Lamb Tikka Masala-Premium',
    description: 'Composed of grilled chunks of lamb meat enveloped in a creamy spiced tomato sauce.',
    price: 18.99,
    image: 'https://www.fbgcdn.com/pictures/fc47533a-069d-4cc3-a010-714b3328f362_d3.jpg',
    category: 'Lamb',
    available: true
  },
  {
    id: '113',
    name: 'Lamb Vindaloo',
    description: 'A traditional potato dish with Lamb with slight tang from vinegar cooked with Indian spices and onion tomato gravy.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/a779a350-2440-4960-a0ab-ea47503f76d5_d3.jpg',
    category: 'Lamb',
    available: true
  },

  // EGG ENTREES
  {
    id: '114',
    name: 'Egg Curry',
    description: 'Hard-boiled eggs simmered in a rich, spiced curry sauce, garnished with fresh cilantro.',
    price: 15.99,
    image: 'https://www.fbgcdn.com/pictures/fcb96ce0-fe57-4193-96fe-f91d752b7b7b.jpg',
    category: 'Egg',
    available: true
  },
  {
    id: '115',
    name: 'Egg Jalfrezi',
    description: 'Beautiful combination of egg with a jalfrezi sauce that will leave you amazed!',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Egg',
    available: true
  },
  {
    id: '116',
    name: 'Egg Masala',
    description: 'Egg dish made with all the right spices to bring the perfect flavor for your enjoyment.',
    price: 15.99,
    image: '/api/placeholder/400/300',
    category: 'Egg',
    available: true
  },

  // SEAFOOD ENTREES
  {
    id: '117',
    name: 'Fish Achari',
    description: 'Fish cooked with fresh mixed pickle and Indian spices with cashew nuts.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Seafood',
    available: true
  },
  {
    id: '118',
    name: 'Fish Coconut',
    description: 'Fish coconut is a delicious combination of tilapia fish and special Everest coconut based sauce and Indian spices.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Seafood',
    available: true
  },
  {
    id: '119',
    name: 'Fish Curry',
    description: 'Fresh tilapia fish submerged in tomato based gravy with Indian spices and green peas.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Seafood',
    available: true
  },
  {
    id: '120',
    name: 'Fish Korma',
    description: 'Fresh tilapia fish with special Everest korma sauce with cashew nuts and Indian spices.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/959e0332-47f9-453e-a12f-8d1273de436d_d3.jpg',
    category: 'Seafood',
    available: true
  },
  {
    id: '121',
    name: 'Fish Tikka Masala-Premium',
    description: 'Fresh tilapia fish cooked in tasty, creamy buttery sauce and Indian spices.',
    price: 18.99,
    image: '/api/placeholder/400/300',
    category: 'Seafood',
    available: true
  },
  {
    id: '122',
    name: 'Fish Vindaloo',
    description: 'A traditional potato fish dish with slight tang from vinegar cooked with Indian spices and onion tomato gravy.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Seafood',
    available: true
  },
  {
    id: '123',
    name: 'Shrimp Achari',
    description: 'Shrimp cooked with fresh mixed pickle and Indian spices with cashew nuts.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Seafood',
    available: true
  },
  {
    id: '124',
    name: 'Shrimp Chilly',
    description: 'Deep fried Shrimp with hot garlic chilli sauce.',
    price: 13.99,
    image: '/api/placeholder/400/300',
    category: 'Seafood',
    available: true
  },
  {
    id: '125',
    name: 'Shrimp Coconut',
    description: 'Shrimp coconut is a delicious combination of shrimp and special Everest coconut based sauce and Indian spices.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/bb8ee80e-4a4f-4d57-bc72-761b913c2585_d2.jpg',
    category: 'Seafood',
    available: true
  },
  {
    id: '126',
    name: 'Shrimp Curry',
    description: 'Shrimp submerged in tomato based gravy with Indian spices and green peas.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/08fc26db-94a0-416e-bdf0-925826be28c8_d3.jpg',
    category: 'Seafood',
    available: true
  },
  {
    id: '127',
    name: 'Shrimp Korma',
    description: 'Shrimp korma is a delicious combination of shrimp and special Everest korma sauce with cashew nuts and Indian spices.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/801fd669-86dd-4dfa-b05d-d07f4d392719_d3.jpg',
    category: 'Seafood',
    available: true
  },
  {
    id: '128',
    name: 'Shrimp Tikka Masala-Premium',
    description: 'Creamy, tikka masala gravy cooked with regular shrimp.',
    price: 18.99,
    image: '/api/placeholder/400/300',
    category: 'Seafood',
    available: true
  },
  {
    id: '129',
    name: 'Shrimp Vindaloo',
    description: 'A traditional potato dish with shrimp with slight tang from vinegar cooked with Indian spices and onion tomato gravy.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/2c8fb663-151d-4603-b091-ff6fd0c51b2b_d3.jpg',
    category: 'Seafood',
    available: true
  },
  {
    id: '130',
    name: 'Tandoori Tiger Prawn (Big Size)',
    description: 'Tiger Prawns marinated in an array of creams and Indian spices, grilled in a tandoori clay oven.',
    price: 21.99,
    image: '/api/placeholder/400/300',
    category: 'Seafood',
    available: true
  },

  // MOMO (NEPALESE DUMPLINGS)
  {
    id: '131',
    name: 'Chicken Momo Platter 12 Pcs (Everest Special)',
    description: 'Total 12 pieces momos including Steam,Chilli Momo, Kothe (Pan fry) and Tandoori Momo. Each momo 3 pieces served with Everest special noodles.',
    price: 25.99,
    image: 'https://www.fbgcdn.com/pictures/0a9b6148-780b-4686-bfe2-cf6dfc9b81f5_d3.jpg',
    category: 'Momo',
    available: true
  },
  {
    id: '132',
    name: 'Veg Momo Platter 12 Pcs (Everest Special)',
    description: 'Total 12 pieces Veg Momo including Steam, Deep fry, Kothe (Pan Fry) and Tandoori Momo. Each Momo 3 pieces served with Everest Special Noodles.',
    price: 23.99,
    image: 'https://www.fbgcdn.com/pictures/d58cfc70-dbd9-4980-b1a9-9185b51da4d8_d3.jpg',
    category: 'Momo',
    available: true
  },
  {
    id: '133',
    name: 'Chilli Chicken Momo',
    description: 'Chicken Momo sautéed with bell peppers and onion in special house chili sauce. Hot and spicy!',
    price: 10.99,
    image: 'https://www.fbgcdn.com/pictures/83421d9d-a6d8-4e94-be1b-509b3f8dab40_d3.jpg',
    category: 'Momo',
    available: true
  },
  {
    id: '134',
    name: 'Chilli Veg Momo',
    description: 'Veg Momo sautéed with bell peppers and onion in special house chili sauce. Hot and spicy!',
    price: 10.99,
    image: 'https://www.fbgcdn.com/pictures/d77d5135-1555-4784-818c-ebf770fd14f8_d3.jpg',
    category: 'Momo',
    available: true
  },
  {
    id: '135',
    name: 'Fried Chicken Momo',
    description: 'Deep fried chicken momo till brown and crisp and served with tomato sauce and chili sauce.',
    price: 11.99,
    image: 'https://www.fbgcdn.com/pictures/6dc55758-9cc6-4df8-bdb8-586140144bf1_d3.jpg',
    category: 'Momo',
    available: true
  },
  {
    id: '136',
    name: 'Fried Veg Momo',
    description: 'Deep fried veg momo till brown and crisp and served with tomato sauce and chili sauce.',
    price: 10.99,
    image: 'https://www.fbgcdn.com/pictures/01eb8326-d716-49c6-8737-183b72047e48_d3.jpg',
    category: 'Momo',
    available: true
  },
  {
    id: '137',
    name: 'Steamed Chicken Momo (Himalayan Special)',
    description: 'Famous Nepalese dumplings filled with ground chicken, cumin, and coriander. Served with Nepali tomato achar and spicy chili sauce on the side.',
    price: 10.99,
    image: 'https://www.fbgcdn.com/pictures/282a5e33-4cd8-4d44-8d2c-ddc6d183187f_d3.jpg',
    category: 'Momo',
    available: true
  },
  {
    id: '138',
    name: 'Steamed Veg Momo (Himalayan Special)',
    description: 'Famous Nepalese dumplings filled with vegetable, cumin, and coriander. Served with Nepali tomato achar and spicy chili sauce on the side.',
    price: 9.99,
    image: 'https://www.fbgcdn.com/pictures/313bdfbc-61c5-4648-b41b-3362dd0d1cb4_d3.jpg',
    category: 'Momo',
    available: true
  },
  {
    id: '139',
    name: 'Tandoori Chicken Momo (10 pcs)',
    description: 'Tandoori based flavorful Chicken Momo. These momos are soaked and marinated in the tandoori sauce later baked in tandoori oven, and bedded with Everest special noodles.',
    price: 19.99,
    image: 'https://www.fbgcdn.com/pictures/405742e5-20c9-494a-9d70-a4afd857bbe3_d3.jpg',
    category: 'Momo',
    available: true
  },
  {
    id: '140',
    name: 'Tandoori Veg Momo (10 pcs)',
    description: 'Tandoori based flavorful Momos. These momos are soaked and marinated in the tandoori sauce later baked in the tandoori oven, and bedded with Everest special noodles.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/2a94258c-0f90-496b-aa13-8ae350c9bd01_d3.jpg',
    category: 'Momo',
    available: true
  },
  {
    id: '141',
    name: 'Titanic Chicken Jhol Momo',
    description: 'Our Titanic Chicken Jhol Momo is worth drowning for.',
    price: 15.99,
    image: 'https://www.fbgcdn.com/pictures/3d596a56-bb81-4f69-a0cc-eebaaa9b02d8_d3.jpg',
    category: 'Momo',
    available: true
  },
  {
    id: '142',
    name: 'Titanic Veg Jhol Momo',
    description: 'If you\'re a vegetarian, nothing else on the menu will float your boat like our Titanic Jhol Momo. Trust us!',
    price: 15.99,
    image: 'https://www.fbgcdn.com/pictures/c453a7f8-370d-44b2-b032-c6050d90ddd5_d3.jpg',
    category: 'Momo',
    available: true
  },
  {
    id: '143',
    name: 'Veg Kothey Momo',
    description: 'Pan fried Nepalese Veg dumplings. Served with Nepali tomato achar and spicy chili sauce on the side.',
    price: 10.99,
    image: 'https://www.fbgcdn.com/pictures/71c3e82f-d803-4538-b389-b70cea86a058_d3.jpg',
    category: 'Momo',
    available: true
  },
  {
    id: '144',
    name: 'Chicken Kothey Momo',
    description: 'Pan fried nepalese chicken dumplings. Served with Nepali tomato achar and spicy chili sauce on the side.',
    price: 10.99,
    image: '/api/placeholder/400/300',
    category: 'Momo',
    available: true
  },

  // BREADS AND NAAN
  {
    id: '145',
    name: 'Plain Naan (Regular Naan)',
    description: 'Regular Naan',
    price: 2.99,
    image: 'https://www.fbgcdn.com/pictures/a90e8b35-bf00-41e0-9c4f-caf09e18b33a_d3.jpg',
    category: 'Breads',
    available: true
  },
  {
    id: '146',
    name: 'Butter Naan',
    description: 'Naan with lots of butter',
    price: 2.99,
    image: naanBreadImg,
    category: 'Breads',
    available: true
  },
  {
    id: '147',
    name: 'Garlic Naan',
    description: 'Naan with Garlic flavor',
    price: 3.99,
    image: 'https://www.fbgcdn.com/pictures/945e61b7-8b41-46da-b52c-1fb653ec8e02_d3.jpg',
    category: 'Breads',
    available: true
  },
  {
    id: '148',
    name: 'Cheese Naan',
    description: 'Naan stuffed with house special mixed cheese.',
    price: 4.99,
    image: 'https://www.fbgcdn.com/pictures/5c0db877-b9b0-4142-ad4d-2adb0da3acc4_d3.jpg',
    category: 'Breads',
    available: true
  },
  {
    id: '149',
    name: 'Chilli Naan',
    description: 'Naan made spicy with chilli.',
    price: 3.99,
    image: 'https://www.fbgcdn.com/pictures/42605e24-c19e-4349-a99a-1e1caa5b3abe_d3.jpg',
    category: 'Breads',
    available: true
  },
  {
    id: '150',
    name: 'Everest Naan Basket',
    description: 'Mix of plain naan, Butter naan and Garlic Naan',
    price: 9.99,
    image: 'https://www.fbgcdn.com/pictures/42605e24-c19e-4349-a99a-1e1caa5b3abe_d3.jpg',
    category: 'Breads',
    available: true
  },
  {
    id: '151',
    name: 'Keema Naan',
    description: 'Naan with Keema',
    price: 4.99,
    image: '/api/placeholder/400/300',
    category: 'Breads',
    available: true
  },
  {
    id: '152',
    name: 'Kulchha Paneer',
    description: 'A popular Punjabi dish served with Paneer',
    price: 4.99,
    image: '/api/placeholder/400/300',
    category: 'Breads',
    available: true
  },
  {
    id: '153',
    name: 'Kulchha Onion',
    description: 'A popular Punjabi dish served with Onions.',
    price: 4.99,
    image: 'https://www.fbgcdn.com/pictures/5c5e85b6-8740-4584-b17e-ee6199ebe59e_d2.jpg',
    category: 'Breads',
    available: true
  },
  {
    id: '154',
    name: 'Kulchha Potatoes',
    description: 'A popular Punjabi dish served with Potatoes.',
    price: 4.99,
    image: '/api/placeholder/400/300',
    category: 'Breads',
    available: true
  },
  {
    id: '155',
    name: 'Lachchha Paratha',
    description: 'Multi layered Indian flat bread made with Whole wheat cooked in ghee and butter for extra flavor.',
    price: 4.99,
    image: '/api/placeholder/400/300',
    category: 'Breads',
    available: true
  },
  {
    id: '156',
    name: 'Tandoori Roti',
    description: 'Stone ground whole wheat tandoor flatbread.',
    price: 2.99,
    image: 'https://www.fbgcdn.com/pictures/b8204366-3f23-481f-9cef-f22b0e1b7aed_d3.jpg',
    category: 'Breads',
    available: true
  },
  {
    id: '157',
    name: 'Paneer Paratha',
    description: 'Whole wheat bread stuffed with paneer.',
    price: 4.99,
    image: '/api/placeholder/400/300',
    category: 'Breads',
    available: true
  },
  {
    id: '158',
    name: 'Aloo Paratha',
    description: 'Whole wheat bread stuffed with peas and potatoes.',
    price: 4.99,
    image: '/api/placeholder/400/300',
    category: 'Breads',
    available: true
  },

  // RICE
  {
    id: '159',
    name: 'Plain Rice',
    description: 'Regular Rice',
    price: 2.99,
    image: 'https://www.fbgcdn.com/pictures/afc1c335-6f1f-4dad-bad5-4022df645e91_d2.jpg',
    category: 'Rice',
    available: true
  },
  {
    id: '160',
    name: 'Jeera Rice',
    description: 'Rice with cumin seeds.',
    price: 4.99,
    image: '/api/placeholder/400/300',
    category: 'Rice',
    available: true
  },
  {
    id: '161',
    name: 'Brown Rice',
    description: 'For healthier alternative we recommend brown rice.',
    price: 3.99,
    image: '/api/placeholder/400/300',
    category: 'Rice',
    available: true
  },

  // SIDE ORDERS
  {
    id: '162',
    name: 'Ghee',
    description: 'Add some ghee to make any dish more favorable.',
    price: 2.99,
    image: '/api/placeholder/400/300',
    category: 'Sides',
    available: true
  },
  {
    id: '163',
    name: 'Mango Chutney',
    description: 'Mango Chutney is an Indian relish made with mangoes, sugar/jaggery, spices and an acidic ingredient like lemon juice or vinegar.',
    price: 2.99,
    image: '/api/placeholder/400/300',
    category: 'Sides',
    available: true
  },
  {
    id: '164',
    name: 'Mixed Pickle',
    description: 'Spice up any of our dishes with our favorable mixed pickles.',
    price: 2.99,
    image: '/api/placeholder/400/300',
    category: 'Sides',
    available: true
  },
  {
    id: '165',
    name: 'Onion Lemon Chilli',
    description: 'Side flavor item to enhance any of the other items in the menu.',
    price: 2.99,
    image: '/api/placeholder/400/300',
    category: 'Sides',
    available: true
  },
  {
    id: '166',
    name: 'Papadum',
    description: 'A thin, crisp, round flatbread.',
    price: 2.99,
    image: '/api/placeholder/400/300',
    category: 'Sides',
    available: true
  },
  {
    id: '167',
    name: 'Raita Yogurt',
    description: 'Plain yogurt grated with cucumber, carrots and lemon juice.',
    price: 3.99,
    image: '/api/placeholder/400/300',
    category: 'Sides',
    available: true
  },
  {
    id: '168',
    name: 'Special Yogurt',
    description: 'Special in house made yogurt. Very different from what you get at the stores.',
    price: 4.99,
    image: '/api/placeholder/400/300',
    category: 'Sides',
    available: true
  },

  // TANDOORI
  {
    id: '169',
    name: 'Full Tandoori Chicken',
    description: 'Four pieces of Tandoori Chicken marinated in yogurt and Indian spices then roasted in a hot tandoor oven clay.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/b357022f-302f-4c93-9aed-4c2f819e9a8c_d3.jpg',
    category: 'Tandoori',
    available: true
  },
  {
    id: '170',
    name: 'Half Tandoori Chicken',
    description: 'Two pieces of Tandoori Chicken marinated in yogurt and Indian spices then roasted in a hot tandoor oven clay.',
    price: 10.99,
    image: 'https://www.fbgcdn.com/pictures/436554dd-55b7-465d-90a3-4a4ef553b0f0_d3.jpg',
    category: 'Tandoori',
    available: true
  },
  {
    id: '171',
    name: 'Boneless Assorted Chicken Kabab',
    description: '3 types of Succulent chicken kebabs marinated in spices, featuring a variety of colorful bell peppers, onions, and garnished with fresh vegetables. (Hariyali Chicken Kebab - 3pcs, Achari Chicken Kebab -3pcs & Chicken Tikka Kebab - 3pcs)',
    price: 18.99,
    image: 'https://www.fbgcdn.com/pictures/b7373290-2c46-47b0-b68a-5461ed78ee82_d3.jpg',
    category: 'Tandoori',
    available: true
  },
  {
    id: '172',
    name: 'Boti Lamb Kabab',
    description: 'Boneless lamb marinated in yogurt and Indian spices then roasted in a hot tandoori oven clay.',
    price: 19.99,
    image: 'https://www.fbgcdn.com/pictures/0eb51145-dc36-4d9c-a1f8-71237414638f_d3.jpg',
    category: 'Tandoori',
    available: true
  },
  {
    id: '173',
    name: 'Chicken Sheekh Kabab',
    description: 'Chicken Sheekh Kabab is an Indian appetizer made with ground minced meat and a handful of spices cooked in oven clay and served with a side of green chutney.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/ecf17817-6a9c-454c-a7df-ee8ee5abe2d0_d3.jpg',
    category: 'Tandoori',
    available: true
  },
  {
    id: '174',
    name: 'Half Tandoori Tiger Prawn-4Pcs (Big Size Prawn)',
    description: 'Tiger Prawns marinated in an array of creams and masalas, grilled in a tandoor',
    price: 13.99,
    image: '/api/placeholder/400/300',
    category: 'Tandoori',
    available: true
  },
  {
    id: '175',
    name: 'Mixed Grill Platter',
    description: 'Chicken, Shrimp, Lamb and Salmon marinated in yogurt and Indian spices then roasted in a hot tandoor oven clay. Served with green chutney.',
    price: 23.99,
    image: 'https://www.fbgcdn.com/pictures/039a0acd-4c4c-4248-b139-de662e79f02a_d3.jpg',
    category: 'Tandoori',
    available: true
  },
  {
    id: '176',
    name: 'Tandoori Achari Chicken Tikka',
    description: '8 pieces of chicken breast meat marinated in yogurt, fresh pickle paste, Indian spices in tandoori oven clay.',
    price: 10.99,
    image: '/api/placeholder/400/300',
    category: 'Tandoori',
    available: true
  },
  {
    id: '177',
    name: 'Tandoori Fish Tikka (8pcs)',
    description: 'Fresh fish marinated in yogurt and Indian spices then roasted in a hot tandoori oven clay',
    price: 19.99,
    image: '/api/placeholder/400/300',
    category: 'Tandoori',
    available: true
  },
  {
    id: '178',
    name: 'Tandoori Chicken Tikka-8pcs',
    description: 'Chicken breast marinated in yogurt, mint, cilantro, green chili and Indian spices in tandoori oven clay.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Tandoori',
    available: true
  },
  {
    id: '179',
    name: 'Tandoori Momo Chicken-10pcs',
    description: 'Tandoori based flavorful Momos. These momos are soaked and marinated in the tandoori sauce later baked in tandoori oven, and bedded with Everest special noodles.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/c52b47e5-9c2d-4f27-b8ea-c53e1de9c228_d3.jpg',
    category: 'Tandoori',
    available: true
  },
  {
    id: '180',
    name: 'Tandoori Momo-Chicken with Chowmein',
    description: '10 Pieces momo cooked in clay oven and bedded with Everest special noodles and served with Everest special sauces.',
    price: 17.99,
    image: '/api/placeholder/400/300',
    category: 'Tandoori',
    available: true
  },
  {
    id: '181',
    name: 'Tandoori Panner Tikka',
    description: '8 pieces of Panner marinated in yogurt with Indian spices in tandoori oven clay.',
    price: 17.99,
    image: 'https://www.fbgcdn.com/pictures/276a77d2-ed38-42bd-abee-ef2f4ae9c45b_d3.jpg',
    category: 'Tandoori',
    available: true
  },
  {
    id: '182',
    name: 'Tandoori Prawns-Regular Size-8pcs',
    description: 'Tandoori Shrimp marinated in yogurt and Indian spices then roasted in a hot tandoor oven clay.',
    price: 19.99,
    image: '/api/placeholder/400/300',
    category: 'Tandoori',
    available: true
  },
  {
    id: '183',
    name: 'Tandoori Salmon Tikka',
    description: 'Fresh salmon marinated in yogurt and Indian spices then roasted in a hot tandoori oven clay.',
    price: 19.99,
    image: 'https://www.fbgcdn.com/pictures/e701d514-0d72-464c-bab2-fa067ef20a15_d3.jpg',
    category: 'Tandoori',
    available: true
  },
  {
    id: '184',
    name: 'Tandoori Seafood Half And Half',
    description: 'Mixed of Salmons & Shrimps (4 Pcs Each) marinated with Chef Signature sauce and cooked in Tandoor.',
    price: 19.99,
    image: 'https://www.fbgcdn.com/pictures/1c1c2a5f-54cf-4044-af67-8f42a6c5fce1_d3.jpg',
    category: 'Tandoori',
    available: true
  },
  {
    id: '185',
    name: 'Tandoori Shrimp (8pcs)',
    description: 'Regular size Prawns marinated in an array of creams and Indian spices, grilled in a tandoori clay oven.',
    price: 19.99,
    image: '/api/placeholder/400/300',
    category: 'Tandoori',
    available: true
  },
  {
    id: '186',
    name: 'Tandoori Tiger Prawn (Big Size)',
    description: 'Tiger Prawns marinated in an array of creams and Indian spices, grilled in a tandoori clay oven.',
    price: 21.99,
    image: '/api/placeholder/400/300',
    category: 'Tandoori',
    available: true
  },

  // DRINKS
  {
    id: '187',
    name: 'Coke (Zero Sugar)',
    description: 'Refreshing zero sugar cola.',
    price: 1.99,
    image: '/api/placeholder/400/300',
    category: 'Drinks',
    available: true
  },
  {
    id: '188',
    name: 'Sodas',
    description: 'Assorted soft drinks.',
    price: 1.99,
    image: '/api/placeholder/400/300',
    category: 'Drinks',
    available: true
  },
  {
    id: '189',
    name: 'Mango Lassi',
    description: 'Traditional Indian mango yogurt drink.',
    price: 4.99,
    image: 'https://www.fbgcdn.com/pictures/31134e6c-c2b3-4a4a-97e1-8487629cc9ba_d3.jpg',
    category: 'Drinks',
    available: true
  },
  {
    id: '190',
    name: 'Masala Tea',
    description: 'Traditional Indian spiced tea.',
    price: 2.99,
    image: '/api/placeholder/400/300',
    category: 'Drinks',
    available: true
  },
  {
    id: '191',
    name: 'Organic Coconut Water',
    description: 'Fresh organic coconut water.',
    price: 4.99,
    image: '/api/placeholder/400/300',
    category: 'Drinks',
    available: true
  },
  {
    id: '192',
    name: 'Red Bull',
    description: 'Energy drink.',
    price: 4.99,
    image: '/api/placeholder/400/300',
    category: 'Drinks',
    available: true
  },
  {
    id: '193',
    name: 'Salt Lassi',
    description: 'Traditional Indian salted yogurt drink.',
    price: 4.99,
    image: '/api/placeholder/400/300',
    category: 'Drinks',
    available: true
  },
  {
    id: '194',
    name: 'Sparkling Water (Pellegrino)',
    description: 'Premium sparkling water.',
    price: 4.99,
    image: '/api/placeholder/400/300',
    category: 'Drinks',
    available: true
  },
  {
    id: '195',
    name: 'Water Bottle 500 ml',
    description: 'Bottled water.',
    price: 1.99,
    image: '/api/placeholder/400/300',
    category: 'Drinks',
    available: true
  },

  // DESSERTS
  {
    id: '196',
    name: 'Gulab Jamun',
    description: 'Gulab jamun is a popular Indian dessert made with milk-reduced flour dough balles soaked in Sugar syrup flavored with cardamom, rose water, saffron etc.',
    price: 5.99,
    image: 'https://www.fbgcdn.com/pictures/63bd7f6a-bf6c-4703-b7ed-3bf688911e1a_d3.jpg',
    category: 'Desserts',
    available: true
  },
  {
    id: '197',
    name: 'Rasmalai',
    description: 'Ras malai is a popular Indian dessert of soft cottage cheese dumplings soaked in a creamy milk syrup flavored with Cardamom, Saffron, Nuts like almonds and pistachios.',
    price: 5.99,
    image: 'https://www.fbgcdn.com/pictures/d6fdb98e-2524-4e0c-ad41-d28ad41f9f81_d3.jpg',
    category: 'Desserts',
    available: true
  }
];

export const categories = [
  'All Items',
  'Deals',
  'Appetizers',
  'Soup & Salad',
  'Noodles',
  'Chicken',
  'Rice & Biryani',
  'Vegetarian',
  'Goat',
  'Lamb',
  'Egg',
  'Seafood',
  'Momo',
  'Breads',
  'Rice',
  'Sides',
  'Tandoori',
  'Drinks',
  'Desserts'
];