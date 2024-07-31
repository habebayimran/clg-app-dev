import images from "./images";
import {FaPaperPlane, FaEdit, FaRocket, FaShoppingCart, FaFileAlt, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt} from "react-icons/fa";
import {BiDollarCircle} from "react-icons/bi";
import {ImMagicWand} from "react-icons/im";
import {AiOutlineReload} from "react-icons/ai";

const gradient = "url(#blue-gradient)" ;

const services = [
    {
        id: 1,
        icon: <FaPaperPlane style = {{ fill: gradient }} />,
        title: "Yoga For Beginners",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 2,
        icon: <BiDollarCircle style = {{ fill: gradient }} />,
        title: "Advanced Yoga Techniques",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 3,
        icon: <FaRocket style = {{ fill: gradient }} />,
        title: "Yoga Therapy",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 4, 
        icon: <FaEdit style = {{ fill: gradient }} />,
        title: "Meditation and Mindfullnes",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 5,
        icon: <ImMagicWand style = {{ fill: gradient }} />,
        title: "Yoga For Stress Releif",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 6,
        icon: <FaShoppingCart style = {{ fill: gradient }} />,
        title: "Yoga for Flexibility",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    }
];

const about = [
    {
        id: 7,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor"
    }
]

const qualities = [
    {
        id: 8,
        icon: <FaFileAlt style = {{ fill: gradient }} />,
        title: "Interactive Sessions",
        text: "Engage with instructors and fellow participants during live sessions. Ask questions, receive personalized adjustments and take notes."
    },
    {
        id: 9,
        icon: <AiOutlineReload style = {{ fill: gradient }}  />,
        title: "On-Demand Replays",
        text: "Missed a live session? No problem! Access recorded classes anytime, allowing you to reload at your own pace."
    }
];

const features = [
    {
        id: 10,
        title: "International Yoga Day",
        text: "Discover the world of yoga on International Yoga Day! Explore a curated list of events and activities happening across India and globally on June 21st here by various Yoga Challenges and Games."
    },
    {
        id: 11,
        title: "Yog Bharatmala",
        text: "As part of this initiative, the Indian Army, Indian Air Force, Indian Coast Guard, and Border Road Organisation will organize yoga demonstrations at the borders, coasts, and islands, collectively forming a Yog Bharatmala."
    },
    {
        id: 12,
        title: "Ocean Ring of Yoga",
        text: "IDY-2023 will witness an innovative program ‘Ocean Ring of Yoga' on June 21st when with the help of the Ministry of Defense, External Affairs and Waterways, Yoga demonstrations at many ports,on many ships will take place"
    },
    {
        id: 13,
        title: "Har Aangan Yog",
        text: "At the grassroots level, the participation of Panchayats, Anganwadis, Asha/ANM workers, and local communities will be integral to the Yoga demonstrations by showcasing yoga at various levels."
    }, 
    {
        id: 14,
        title: "Arctic to Antarctica Yoga Celebration",
        text: "Yoga demonstrations will be conducted across a vast geographical range, spanning from the Arctic to Antarctica. Countries located along or in close proximity to the Prime Meridian will actively participate in these demonstrations."
    },
    {
        id: 15,
        title: "Bhakti Fest",
        text: "A yoga and conscious music festival, Bhakti Fest continues to cultivate self-awareness and community as it has for more than a decade. Organized by the nonprofit Center for Spiritual Studies, the three-day desert gatherings in Joshua Tree National Park deliver tools for self-discovery and inner fulfillment"
    }
];

const portfolio = [
    {
        id: 16,
        title: "Hatha Yoga",
        text: "A traditional form of yoga focusing on physical postures and breathing techniques.",
        image: images.portfolio_img_1,
    },
    {
        id: 17,
        title: "Vinyasa Yoga",
        text: "A dynamic flow of yoga poses synchronized with breath, enhancing strength and flexibility.",
        image: images.portfolio_img_2,
    },
    {
        id: 18,
        title: "Ashtanga Yoga",
        text: "A rigorous and disciplined style of yoga that follows a specific sequence of postures.",
        image: images.portfolio_img_3,
    }
];

const testimonials = [
    {
        id: 19,
        name: "Marie Jordan",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_1,
        rating: 3
    },
    {
        id: 20,
        name: "Ann Brown",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_2,
        rating: 5
    },
    {
        id: 21,
        name: "Andrew Bill",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_3,
        rating: 2
    },
    {
        id: 22,
        name: "Jason Stawer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_4,
        rating: 4
    },
    {
        id: 23,
        name: "Lisa Green",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_5,
        rating: 2
    },
    {
        id: 24,
        name: "Anna Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_6,
        rating: 4
    }
]

const contact = [
    {
        id: 25,
        icon: <FaPhoneAlt style = {{ fill: gradient }} />,
        info: "+91 63820 21150",
        text: "Feel free to call us for any inquiries or assistance regarding our yoga sessions."
    },
    {
        id: 26,
        icon: <FaEnvelopeOpen style = {{ fill: gradient }} />,
        info: "habebayleobasa@gmail.com",
        text: "Reach out to us via email for detailed information, support, or any other questions."
    },
    {
        id: 27,
        icon: <FaMapMarkerAlt style = {{ fill: gradient }} />,
        info: "Chennai , Tamilnadu",
        text: "Visit us at our yoga academy in Chennai for in-person sessions and consultations."
    }
]

const sections = {services, about, qualities, features, portfolio, testimonials, contact};

export default sections;