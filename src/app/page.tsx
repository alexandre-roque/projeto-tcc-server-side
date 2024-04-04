import { db } from "@/db";
import Product from "./components/product";
import { product } from "@/db/schema/products";

export default async function Home() {
	const products = (await db.query.products.findMany()).concat(
		getProducts() as product[]
	);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{products.map((product) => (
					<Product product={product} key={product.id} />
				))}
			</div>
		</main>
	);
}

function getProducts() {
	return [
		{
			name: "Sleek White & Orange Wireless Gaming Controller",
			description:
				"Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.",
			price: 69,
			imageUrl: "https://i.imgur.com/ZANVnHE.jpeg",
		},
		{
			name: "Sleek Comfort-Fit Over-Ear Headphones",
			description:
				"Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether you're at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.",
			price: 28,
			imageUrl: "https://i.imgur.com/SolkFEB.jpeg",
		},
		{
			name: "Sleek Wireless Computer Mouse",
			description:
				"Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",
			price: 10,
			imageUrl: "https://i.imgur.com/w3Y8NwQ.jpeg",
		},
		{
			name: "Sleek Modern Laptop with Ambient Lighting",
			description:
				"Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.",
			price: 43,
			imageUrl: "https://i.imgur.com/OKn1KFI.jpeg",
		},
		{
			name: "Sleek Modern Laptop for Professionals",
			description:
				"Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.",
			price: 97,
			imageUrl: "https://i.imgur.com/ItHcq7o.jpeg",
		},
		{
			name: "Stylish Red & Silver Over-Ear Headphones",
			description:
				"Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
			price: 39,
			imageUrl: "https://i.imgur.com/YaSqa06.jpeg",
		},
		{
			name: "Sleek Mirror Finish Phone Case",
			description:
				"Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
			price: 27,
			imageUrl: "https://i.imgur.com/yb9UQKL.jpeg",
		},
		{
			name: "Sleek Smartwatch with Vibrant Display",
			description:
				"Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
			price: 16,
			imageUrl: "https://i.imgur.com/LGk9Jn2.jpeg",
		},
		{
			name: "Sleek Modern Leather Sofa",
			description:
				"Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
			price: 53,
			imageUrl: "https://i.imgur.com/Qphac99.jpeg",
		},
		{
			name: "Mid-Century Modern Wooden Dining Table",
			description:
				"Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
			price: 24,
			imageUrl: "https://i.imgur.com/DMQHGA0.jpeg",
		},
		{
			name: "Elegant Golden-Base Stone Top Dining Table",
			description:
				"Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
			price: 66,
			imageUrl: "https://i.imgur.com/NWIJKUj.jpeg",
		},
		{
			name: "Modern Elegance Teal Armchair",
			description:
				"Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
			price: 25,
			imageUrl: "https://i.imgur.com/6wkyyIN.jpeg",
		},
		{
			name: "Elegant Solid Wood Dining Table",
			description:
				"Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
			price: 67,
			imageUrl: "https://i.imgur.com/4lTaHfF.jpeg",
		},
		{
			name: "Modern Minimalist Workstation Setup",
			description:
				"Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
			price: 49,
			imageUrl: "https://i.imgur.com/3oXNBst.jpeg",
		},
		{
			name: "Modern Ergonomic Office Chair",
			description:
				"Elevate your office space with this sleek and comfortable Modern Ergonomic Office Chair. Designed to provide optimal support throughout the workday, it features an adjustable height mechanism, smooth-rolling casters for easy mobility, and a cushioned seat for extended comfort. The clean lines and minimalist white design make it a versatile addition to any contemporary workspace.",
			price: 71,
			imageUrl: "https://i.imgur.com/3dU0m72.jpeg",
		},
		{
			name: "Futuristic Holographic Soccer Cleats",
			description:
				"Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
			price: 39,
			imageUrl: "https://i.imgur.com/qNOjJje.jpeg",
		},
		{
			name: "Rainbow Glitter High Heels",
			description:
				"Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
			price: 39,
			imageUrl: "https://i.imgur.com/62gGzeF.jpeg",
		},
		{
			name: "Chic Summer Denim Espadrille Sandals",
			description:
				"Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.",
			price: 33,
			imageUrl: "https://i.imgur.com/9qrmE1b.jpeg",
		},
		{
			name: "Vibrant Runners: Bold Orange & Blue Sneakers",
			description:
				"Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
			price: 27,
			imageUrl: "https://i.imgur.com/hKcMNJs.jpeg",
		},
		{
			name: "Vibrant Pink Classic Sneakers",
			description:
				"Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
			price: 84,
			imageUrl: "https://i.imgur.com/mcW42Gi.jpeg",
		},
		{
			name: "Futuristic Silver and Gold High-Top Sneaker",
			description:
				"Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!",
			price: 68,
			imageUrl: "https://i.imgur.com/npLfCGq.jpeg",
		},
		{
			name: "Futuristic Chic High-Heel Boots",
			description:
				"Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
			price: 36,
			imageUrl: "https://i.imgur.com/HqYqLnW.jpeg",
		},
		{
			name: "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
			description:
				"Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
			price: 53,
			imageUrl: "https://i.imgur.com/AzAY4Ed.jpeg",
		},
		{
			name: "Elegant Purple Leather Loafers",
			description:
				"Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish, these shoes feature a classic loafer silhouette that's been updated with a contemporary twist. The comfortable slip-on design and durable soles ensure both style and functionality for the modern man.",
			price: 17,
			imageUrl: "https://i.imgur.com/Au8J9sX.jpeg",
		},
		{
			name: "Classic Blue Suede Casual Shoes",
			description:
				"Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.",
			price: 39,
			imageUrl: "https://i.imgur.com/sC0ztOB.jpeg",
		},
		{
			name: "Sleek Futuristic Electric Bicycle",
			description:
				"This modern electric bicycle combines style and efficiency with its unique design and top-notch performance features. Equipped with a durable frame, enhanced battery life, and integrated tech capabilities, it's perfect for the eco-conscious commuter looking to navigate the city with ease.",
			price: 22,
			imageUrl: "https://i.imgur.com/BG8J0Fj.jpg",
		},
		{
			name: "Sleek All-Terrain Go-Kart",
			description:
				"Experience the thrill of outdoor adventures with our Sleek All-Terrain Go-Kart, featuring a durable frame, comfortable racing seat, and robust, large-tread tires perfect for handling a variety of terrains. Designed for fun-seekers of all ages, this go-kart is an ideal choice for backyard racing or exploring local trails.",
			price: 37,
			imageUrl: "https://i.imgur.com/Ex5x3IU.jpg",
		},
		{
			name: "Radiant Citrus Eau de Parfum",
			description:
				"Indulge in the essence of summer with this vibrant citrus-scented Eau de Parfum. Encased in a sleek glass bottle with a bold orange cap, this fragrance embodies freshness and elegance. Perfect for daily wear, it's an olfactory delight that leaves a lasting, zesty impression.",
			price: 73,
			imageUrl: "https://i.imgur.com/xPDwUb3.jpg",
		},
		{
			name: "Sleek Olive Green Hardshell Carry-On Luggage",
			description:
				"Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation, a sturdy telescopic handle, and a secure zippered compartment to keep your belongings safe. Its compact size meets most airline overhead bin requirements, ensuring a hassle-free flying experience.",
			price: 48,
			imageUrl: "https://i.imgur.com/jVfoZnP.jpg",
		},
		{
			name: "Chic Transparent Fashion Handbag",
			description:
				"Elevate your style with our Chic Transparent Fashion Handbag, perfect for showcasing your essentials with a clear, modern edge. This trendy accessory features durable acrylic construction, luxe gold-tone hardware, and an elegant chain strap. Its compact size ensures you can carry your day-to-day items with ease and sophistication.",
			price: 61,
			imageUrl: "https://i.imgur.com/Lqaqz59.jpg",
		},
		{
			name: "Trendy Pink-Tinted Sunglasses",
			description:
				"Step up your style game with these fashionable black-framed, pink-tinted sunglasses. Perfect for making a statement while protecting your eyes from the glare. Their bold color and contemporary design make these shades a must-have accessory for any trendsetter looking to add a pop of color to their ensemble.",
			price: 38,
			imageUrl: "https://i.imgur.com/0qQBkxX.jpg",
		},
		{
			name: "Elegant Glass Tumbler Set",
			description:
				"Enhance your drinkware collection with our sophisticated set of glass tumblers, perfect for serving your favorite beverages. This versatile set includes both clear and subtly tinted glasses, lending a modern touch to any table setting. Crafted with quality materials, these durable tumblers are designed to withstand daily use while maintaining their elegant appeal.",
			price: 50,
			imageUrl: "https://i.imgur.com/TF0pXdL.jpg",
		},
	];
}
