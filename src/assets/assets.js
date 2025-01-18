import search_icon from './search_icon.png';
import profile_icon from './profile_icon.png';
import cart_icon from './cart_icon.png';
import menu_icon from './menu_icon.png';
import hero_img from './hero_img.png';
import p_img6 from './p_img1.png'
import p_img2 from './p_img2.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img1 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'
import p_img9 from './p_img9.png'
import quality_icon from './quality_icon.png'

export const assets = {
    quality_icon,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    hero_img,
    p_img1,
    p_img2,
    p_img3,
    p_img4,
    p_img5,
    p_img6,
    p_img7,
    p_img8,
    p_img9
};


const Products = [
    {
        _id: "aaaa",
        name: "women round neck cotton top",
        price: 1000,
        description : "a lightweight usually knitted pullover shirt, close-fitting",
        image: [p_img1],
        category: "women",
        subcategory: "topwear",
        size: ["s","m","l"],
        date: 887908099880,
        bestseller: true

    },
    {
        _id: "bbbb",
        name: "cleaner",
        price: 1800,
        description : "a best mirror cleaner just spray and clean",
        image: [p_img2],
        category: "houseuse",
        subcategory: "forclean",
        size: [],
        date: 887908099880,
        bestseller: true

    },
    {
        _id: "ccccc",
        name: "face creem",
        price: 7900,
        description : "best face creame for glow your face",
        image: [p_img3],
        category: "women",
        subcategory: "cosmetic",
        size: [],
        date: 887908099880,
        bestseller: true

    },
    {
        _id: "ddddd",
        name: "glass zar",
        price: 9999,
        description : "a glass zar for your kitchen food keep fresh",
        image: [p_img4],
        category: "houseuse",
        subcategory: "kitchenasses...",
        size: ["s","m","l"],
        date: 887908099880,
        bestseller: true

    },
    {
        _id: "eeeee",
        name: "women damage jeans",
        price: 9590,
        description : "a lightweight usually knitted pullover jeans, close-fitting and with damage",
        image: [p_img5],
        category: "women",
        subcategory: "bottomwear",
        size: ["s","m","l"],
        date: 887908099880,
        bestseller: true

    },
    {
        _id: "fffff",
        name: "short top",
        price: 990,
        description : "a lightweight usually knitted pullover jeans, close-fitting and with damage",
        image: [p_img6],
        category: "women",
        subcategory: "topwear",
        size: ["s","m","l"],
        date: 887908099880,
        bestseller: true

    },
    {
        _id: "ggggg",
        name: "water bottle",
        price: 8880,
        description : "a lightweight usually knitted pullover jeans, close-fitting and with damage",
        image: [p_img7],
        category: "unisex",
        subcategory: "kitchenasses...",
        size: ["s","m","l"],
        date: 887908099880,
        bestseller: true

    },
    {
        _id: "hhhhh",
        name: "fashion & cloth",
        price: 8880,
        description : "a lightweight usually knitted pullover jeans, close-fitting and with damage",
        image: [p_img8],
        category: "unisex",
        subcategory: "winterwear",
        size: ["s","m","l"],
        date: 887908099880,
        bestseller: true

    },
    {
        _id: "iiiii",
        name: "fashion & cloth",
        price: 8880,
        description : "a lightweight usually knitted pullover jeans, close-fitting and with damage",
        image: [p_img9],
        category: "unisex",
        subcategory: "winterwear",
        size: ["s","m","l"],
        date: 887908099880,
        bestseller: true

    }
];

export default Products