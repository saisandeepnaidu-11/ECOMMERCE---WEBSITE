TECOS - No End For Fashion 🛍️

A modern, responsive e-commerce website for a fashion retail brand built with vanilla HTML, CSS, and JavaScript.

## 🌟 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dynamic Product Rendering**: Products loaded from a centralized JavaScript array
- **Shopping Cart**: Persistent cart with localStorage integration
- **Product Pages**: 
  - Homepage with featured products and new arrivals
  - Shop page with all products
  - Individual product detail pages
  - Shopping cart page with checkout functionality
- **Additional Pages**:
  - About page
  - Blog page
  - Contact page with contact form
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Product Features**:
  - Product image gallery
  - Size and quantity selection
  - Add to cart functionality
  - Remove from cart option
  - Quantity update in cart

## 🚀 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with responsive design
- **JavaScript (ES6)**: Dynamic functionality and DOM manipulation
- **Font Awesome**: Icons
- **LocalStorage**: Cart persistence

## 📁 Project Structure

```
Build-and-Deploy-Ecommerce-Website-main/
├── index.html          # Homepage with featured and new products
├── shop.html           # Shop page displaying all products
├── sproduct.html       # Single product detail page
├── cart.html           # Shopping cart page
├── blog.html           # Blog page
├── about.html          # About page
├── contact.html        # Contact form page
├── style.css           # Main stylesheet
├── script.js           # JavaScript functionality
└── img/                # Images directory
    ├── products/       # Product images
    ├── features/       # Feature icons
    ├── banner/         # Banner images
    └── pay/            # Payment gateway icons
```

## 🛠️ Installation & Setup

### Prerequisites
- Python 3.x installed on your system

### Running the Project

1. **Clone or download the project**
   ```bash
   cd Build-and-Deploy-Ecommerce-Website-main
   ```

2. **Start the local server**
   ```bash
   python -m http.server 8080
   ```

3. **Open your browser**
   Navigate to: `http://localhost:8080/index.html`

## 💡 Usage

### Browsing Products
- Visit the **homepage** to see featured products and new arrivals
- Navigate to the **Shop** page to view all available products
- Click on any product to view detailed information

### Shopping Cart
1. Select product size and quantity on the product detail page
2. Click "Add to Cart"
3. View cart by clicking the shopping bag icon
4. Update quantities or remove items as needed
5. Click "Proceed to Checkout" to complete your order

### Contact
- Fill out the contact form on the **Contact** page
- Location: M.V.P. Colony, Sector 8, Visakhapatnam
- Phone: (+91) 7989811376 / (+91) 7799465046
- Hours: 10:00 - 18:00, Mon - Sat

## 🎨 Key Features Explained

### Dynamic Product System
Products are stored in a centralized JavaScript array in `script.js`, making it easy to:
- Add new products
- Update product information
- Maintain consistency across pages

### Cart Management
- Items persist in browser localStorage
- Automatic total calculation
- Quantity updates reflected immediately
- Remove items with one click

### Responsive Navigation
- Desktop: Full horizontal navigation bar
- Mobile: Hamburger menu with slide-out navigation

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Adding New Products
Edit the `products` array in `script.js`:

```javascript
{
    id: 16,
    image: 'img/products/your-image.jpg',
    name: 'Your Product Name',
    brand: 'Brand Name',
    price: 99,
    description: 'Product description here'
}
```

### Updating Branding
- Logo text: Search and replace "TECOS" in HTML files
- Colors: Modify CSS variables in `style.css`
- Contact info: Update footer section in HTML files

## 📄 License

© 2026, TECOS - No End For Fashion

## 👨‍💻 Developer

Sai Sandeep Naidu
- Email: saisandeepnaidu111@gmail.com

---

**Happy Shopping! 🎉**
