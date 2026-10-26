const vendors = [
  {
    id: 'my-restaurant',
    name: 'Kafe Mahallah Ali',
    location: 'Mahallah Ali, Ground Floor',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      { id: 'my-1', name: 'Dish 1', description: '...', price: 7.5, category: 'Rice', available: true },
      { id: 'my-2', name: 'Dish 2', description: '...', price: 6, category:'Noodles', available: true },
      { id: 'my-3', name: 'Drink 1', description: '...', price: 2.5, category: 'Drinks', available: false },
    ],
  },
  {
    id: 'kafe-aminah',
    name: 'Kafe Mahallah Aminah',
    location: 'Mahallah Aminah, Ground Floor',
    openHours: '8:00 am - 9:00 pm',
    isOpen: true,
    menu: [
      { id: 'ami-1', name: 'Nasi Ayam Penyet', description: 'Smashed fried chicken with sambal and rice', price: 9, category: 'Rice', available: true },
      { id: 'ami-2', name: 'Laksa Johor', description: 'Spaghetti in spicy fish gravy with herbs', price: 10, category: 'Noodles', available: true },
      { id: 'ami-2', name: 'Air Bandung', description: 'Rose syrup with milk', price: 3, category: 'Drinks', available: true },
    ],
  },
  {
    id: 'kafe-faruq',
    name: 'Kafe Mahallah Faruq',
    location: 'Mahallah Faruq, Ground Floor',
    openHours: '6:00 pm - 1:00 am',
    isOpen: true,
    menu: [
      { id: 'fa-1', name: 'Dish 1', description: '...', price: 8, category: 'Rice', available: true },
      { id: 'fa-2', name: 'Dish 2', description: '...', price: 10, category:'Noodles', available: true },
      { id: 'fa-3', name: 'Drink 1', description: '...', price: 2.5, category: 'Drinks', available: false },
    ],
  }
]
 
export default vendors