import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';
import {
  Trees,
  Home,
  Search,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Phone,
  Mail,
  Calendar,
  CheckCircle2,
  Star,
  Heart,
  Eye,
  X,
  Languages,
  Sun,
  Award,
  Calculator,
  Building,
  Filter,
  Check,
  Compass,
  Volume2,
  Sparkles,
  Layers,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
  Palette,
  LayoutGrid,
  LayoutList,
  Rows,
  RotateCcw,
  RotateCw,
  Play,
  Pause,
  Maximize2,
  Video,
  Move,
  VolumeX,
  Share2,
  ChevronDown,
  Droplets,
  Wind,
  Moon,
  Ruler,
  Clock,
  Send,
  PhoneCall,
  MessageSquare,
  Download,
  Utensils,
  Coffee,
  ShoppingBag,
  Plus,
  Minus,
  ChefHat,
  ShoppingBasket,
  CheckSquare,
  Square
} from 'lucide-react';

// Imported generated high-fidelity image assets
import heroImage from './assets/images/hero_emerald_eco_villa_1790425138109.jpg';
import villaDeLaFlora from './assets/images/villa_de_la_flora_1790425151987.jpg';
import emeraldPalmsResort from './assets/images/emerald_palms_resort_1790425163853.jpg';
import pineRoadEcoHaven from './assets/images/pine_road_eco_haven_1790425174956.jpg';
import sereneValleyGlassVilla from './assets/images/serene_valley_glass_villa_1790425186135.jpg';
import botanicalOasisResidence from './assets/images/botanical_oasis_residence_1790425199134.jpg';
import highlandForestSanctuary from './assets/images/highland_forest_sanctuary_1790425210813.jpg';
import scenicPalmAvenue from './assets/images/scenic_palm_avenue_1790425221524.jpg';
import greenhavenBistro from './assets/images/greenhaven_bistro_restaurant_1790429318525.jpg';

interface ThemePalette {
  id: string;
  nameSo: string;
  nameEn: string;
  heroGradient: string;
  accentColor: string;
  accentText: string;
  badgeBg: string;
  badgeText: string;
  primaryBtn: string;
  primaryBtnHover: string;
  cardBorderHover: string;
  iconColor: string;
  swatchPrimary: string;
  swatchAccent: string;
  darkBg: string;
}

const colorPalettes: ThemePalette[] = [
  {
    id: 'emerald-gold',
    nameSo: 'Emerald & Dahab Gem',
    nameEn: 'Emerald & Royal Gold',
    heroGradient: 'from-[#032317] via-[#09422b] to-[#0f5c3c]',
    accentColor: '#f59e0b',
    accentText: 'text-[#fbbf24]',
    badgeBg: 'bg-[#fef3c7]',
    badgeText: 'text-[#92400e]',
    primaryBtn: 'bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#041a11]',
    primaryBtnHover: 'hover:from-[#d97706] hover:to-[#b45309]',
    cardBorderHover: 'hover:border-[#f59e0b]',
    iconColor: 'text-[#f59e0b]',
    swatchPrimary: '#09422b',
    swatchAccent: '#f59e0b',
    darkBg: 'bg-[#032317]'
  },
  {
    id: 'royal-navy-mint',
    nameSo: 'Boqortooyo Sapphire & Mint',
    nameEn: 'Royal Sapphire & Electric Mint',
    heroGradient: 'from-[#0b1329] via-[#1e293b] to-[#0f766e]',
    accentColor: '#10b981',
    accentText: 'text-[#34d399]',
    badgeBg: 'bg-[#d1fae5]',
    badgeText: 'text-[#065f46]',
    primaryBtn: 'bg-gradient-to-r from-[#10b981] to-[#059669] text-[#022c22]',
    primaryBtnHover: 'hover:from-[#059669] hover:to-[#047857]',
    cardBorderHover: 'hover:border-[#10b981]',
    iconColor: 'text-[#10b981]',
    swatchPrimary: '#0b1329',
    swatchAccent: '#10b981',
    darkBg: 'bg-[#0b1329]'
  },
  {
    id: 'rainforest-sunset',
    nameSo: 'Kaysta Cagaaran & Sunset Amber',
    nameEn: 'Rainforest & Sunset Amber',
    heroGradient: 'from-[#1a0c02] via-[#451a03] to-[#064e3b]',
    accentColor: '#f97316',
    accentText: 'text-[#fb923c]',
    badgeBg: 'bg-[#ffedd5]',
    badgeText: 'text-[#9a3412]',
    primaryBtn: 'bg-gradient-to-r from-[#f97316] to-[#ea580c] text-[#1a0c02]',
    primaryBtnHover: 'hover:from-[#ea580c] hover:to-[#c2410c]',
    cardBorderHover: 'hover:border-[#f97316]',
    iconColor: 'text-[#f97316]',
    swatchPrimary: '#451a03',
    swatchAccent: '#f97316',
    darkBg: 'bg-[#1a0c02]'
  },
  {
    id: 'deep-violet-jade',
    nameSo: 'Deep Violet & Jade Luxury',
    nameEn: 'Deep Violet & Jade Luxury',
    heroGradient: 'from-[#1e1b4b] via-[#311042] to-[#064e3b]',
    accentColor: '#ec4899',
    accentText: 'text-[#f472b6]',
    badgeBg: 'bg-[#fce7f3]',
    badgeText: 'text-[#831843]',
    primaryBtn: 'bg-gradient-to-r from-[#ec4899] to-[#db2777] text-white',
    primaryBtnHover: 'hover:from-[#db2777] hover:to-[#be185d]',
    cardBorderHover: 'hover:border-[#ec4899]',
    iconColor: 'text-[#ec4899]',
    swatchPrimary: '#1e1b4b',
    swatchAccent: '#ec4899',
    darkBg: 'bg-[#1e1b4b]'
  }
];

interface Hotspot {
  id: string;
  x: number;
  y: number;
  title: string;
  titleSomali: string;
  desc: string;
  descSomali: string;
}

interface Property {
  id: number;
  title: string;
  titleSomali: string;
  category: 'villa' | 'eco' | 'estate' | 'rent';
  price: number;
  isRent?: boolean;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  gallery: string[];
  description: string;
  descriptionSomali: string;
  features: string[];
  featuresSomali: string[];
  rating: number;
  solarPowered: boolean;
  greenRoadAccess: boolean;
  badge: string;
  badgeSomali: string;
  hotspots?: Hotspot[];
  mapPos: {
    x: number;
    y: number;
    gridRef: string;
  };
}

const propertiesData: Property[] = [
  {
    id: 1,
    title: "Villa De La Flora",
    titleSomali: "Fillada Ubaxa & Dhul Cagaaran",
    category: "villa",
    price: 480000,
    location: "Qardho Green Valley, Hills",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3400,
    image: villaDeLaFlora,
    gallery: [
      villaDeLaFlora,
      heroImage,
      sereneValleyGlassVilla
    ],
    description: "A luxury modern villa integrated into lush green hills with modern glass architecture, private garden, and solar power.",
    descriptionSomali: "Filla casri ah oo ku dhex taal buuro dabiici ah oo cagaaran, leh guri kuraasiyo galaas ah, beertii dabiiciga ahayd, iyo korontada qorraxda.",
    features: ["Private Infinity Pool", "Solar Energy Grid", "Gym Access", "Lush Forest Access", "Smart Climate Control", "24/7 Security"],
    featuresSomali: ["Biyo-dheellitirka Dabaasha", "Xarunta Korontada Qorraxda", "Tiyaatarka Jimicsiga", "Wadooyinka Cagaaran Ee Kaysta", "Nidaamka Smart Home", "Amniga 24 Saat"],
    rating: 4.9,
    solarPowered: true,
    greenRoadAccess: true,
    badge: "Most Popular",
    badgeSomali: "Ugu Doorashada Badan",
    hotspots: [
      { id: 'h1', x: 35, y: 40, title: 'Solar Roof Grid', titleSomali: 'Nidaamka Korontada Qorraxda', desc: 'Provides 100% clean energy covering all household power needs.', descSomali: 'Wuxuu bixiyaa koronto nadiif ah oo 100% buuxisa baahida guriga.' },
      { id: 'h2', x: 70, y: 65, title: 'Infinity Pool', titleSomali: 'Biyo-dheellitirka Dabaasha', desc: 'Temperature-controlled swimming pool with valley views.', descSomali: 'Biyo-dheellitir dabaasha oo kulaylkiisa la maamulo xilliyada dhan.' },
      { id: 'h3', x: 20, y: 75, title: 'Botanical Courtyard', titleSomali: 'Beerta Ubaxa', desc: 'Custom landscaped flora with automated drip irrigation.', descSomali: 'Beero dabiici ah oo leh nidaamka waraabinta biyaha ee smart-ka.' }
    ],
    mapPos: { x: 28, y: 32, gridRef: "A-3" }
  },
  {
    id: 2,
    title: "Emerald Palms Resort Villa",
    titleSomali: "Fillada Timirta Cagaaran",
    category: "estate",
    price: 650000,
    location: "Palm Park Avenue, Coastal Coast",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    image: emeraldPalmsResort,
    gallery: [
      emeraldPalmsResort,
      scenicPalmAvenue,
      heroImage
    ],
    description: "Tropical paradise property surrounded by lush palm trees, paved green driveways, and scenic mountain views.",
    descriptionSomali: "Guri dhul dabiici ah oo ay ku xeeran yihiin geedo timir cagaaran, wadooyin qurux badan, iyo aragga buuraha indhaha u roon.",
    features: ["Botanical Garden", "Private Pool", "Solar Energy Grid", "Gym Access", "24/7 Security", "Panoramic Views"],
    featuresSomali: ["Beerta Dhirta Dabiiciga", "Biyo-dheellitirka Dabaasha", "Xarunta Korontada Qorraxda", "Tiyaatarka Jimicsiga", "Amniga 24 Saat", "Aragga Buuraha Quruxda Badan"],
    rating: 5.0,
    solarPowered: true,
    greenRoadAccess: true,
    badge: "Luxury Estate",
    badgeSomali: "Guri Luxury Ah",
    hotspots: [
      { id: 'e1', x: 45, y: 55, title: 'Palm Driveway', titleSomali: 'Wadada Geedaha Timirta', desc: 'Private cobblestone road with palm tree canopy.', descSomali: 'Wado gaar ah oo laami ah oo leh geedo timir oo xilliyada dhan cagaaran.' }
    ],
    mapPos: { x: 68, y: 22, gridRef: "B-5" }
  },
  {
    id: 3,
    title: "Pine Road Eco Haven",
    titleSomali: "Guriga Wadooyinka Dhaadheer Ee Cagaaran",
    category: "eco",
    price: 380000,
    location: "Green Canopy Way, Highland",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2600,
    image: pineRoadEcoHaven,
    gallery: [
      pineRoadEcoHaven,
      villaDeLaFlora,
      highlandForestSanctuary
    ],
    description: "Peaceful residence situated along a tree-covered avenue with quiet walking paths and crystal air quality.",
    descriptionSomali: "Guri nabad badan oo ku yaal wadada dhirta cagaaran ee hooska leh, leh dooxyo socodka iyo hawo aad u safay ah.",
    features: ["Zero Carbon Footprint", "Solar Energy Grid", "Rainwater Recycling", "Garden & Forest Trails", "Gym Access"],
    featuresSomali: ["Kelefka Deegaanka Ee Eeber", "Xarunta Korontada Qorraxda", "Nidaamka Biyaha Roobka", "Beerta & Dooxyada Kaysta", "Tiyaatarka Jimicsiga"],
    rating: 4.8,
    solarPowered: true,
    greenRoadAccess: true,
    badge: "Eco Pioneer",
    badgeSomali: "Dhowraha Deegaanka",
    mapPos: { x: 42, y: 62, gridRef: "D-4" }
  },
  {
    id: 4,
    title: "Serene Valley Glass Villa",
    titleSomali: "Fillada Dooxa Nabadda & Galaaska",
    category: "villa",
    price: 520000,
    location: "Green Ridge Estates, Sector 4",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3800,
    image: sereneValleyGlassVilla,
    gallery: [
      sereneValleyGlassVilla,
      heroImage,
      pineRoadEcoHaven
    ],
    description: "Architectural masterpiece with glass walls opening onto rolling green hills and pristine paved avenues.",
    descriptionSomali: "Filla naqshad sare leh oo galaas ah oo ku fureysa dooxyo cagaaran iyo wadooyin safan oo indhaha u roon.",
    features: ["Heated Private Pool", "Solar Energy Grid", "Gym Access", "Smart Climate Control", "Green Garden Walkway", "24/7 Security"],
    featuresSomali: ["Dabaasha Biyaha Kulul", "Xarunta Korontada Qorraxda", "Tiyaatarka Jimicsiga", "Nidaamka Smart Home", "Wadada Socodka Beerta", "Amniga 24 Saat"],
    rating: 4.9,
    solarPowered: true,
    greenRoadAccess: true,
    badge: "Modern Design",
    badgeSomali: "Naqshad Casri Ah",
    mapPos: { x: 76, y: 68, gridRef: "E-6" }
  },
  {
    id: 5,
    title: "Botanical Oasis Residence",
    titleSomali: "Guriga Beeraha & Dhirta Dabiiciga Ah",
    category: "rent",
    price: 2800,
    isRent: true,
    location: "Garden District, Central Greens",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2200,
    image: botanicalOasisResidence,
    gallery: [
      botanicalOasisResidence,
      scenicPalmAvenue
    ],
    description: "Beautiful rental home set inside a private flower botanical garden with quiet neighborhood green roads.",
    descriptionSomali: "Guri kirada ah oo aad u qurux badan oo ku dhex yaal beerta ubaxa iyo dhirta, leh wadooyin degan oo cagaaran.",
    features: ["Weekly Garden Care", "Solar Water Heating", "Private Pool Access", "Gym Access", "Fully Furnished"],
    featuresSomali: ["Daryeelka Beerta Todobaadkiiba", "Biyaha Qorraxda Ee Kulul", "Biyo-dheellitirka Dabaasha", "Tiyaatarka Jimicsiga", "Buuxda Alaabta Guriga"],
    rating: 4.7,
    solarPowered: true,
    greenRoadAccess: true,
    badge: "Monthly Rental",
    badgeSomali: "Kirada Bisha",
    mapPos: { x: 22, y: 76, gridRef: "F-2" }
  },
  {
    id: 6,
    title: "Highland Forest Sanctuary",
    titleSomali: "Koodhka Kaysta Buuraha Cagaaran",
    category: "estate",
    price: 720000,
    location: "Sunset Ridge Drive, Highland Park",
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5100,
    image: highlandForestSanctuary,
    gallery: [
      highlandForestSanctuary,
      heroImage,
      emeraldPalmsResort
    ],
    description: "Exclusive estate situated atop a green hill with private paved forest access and uninterrupted sunrise views.",
    descriptionSomali: "Guri aad u weyn oo boqortooyo oo ku yaal dhiillada buur cagaaran, leh wado gaar ah oo kaysta ah.",
    features: ["Helipad Access", "Private Tennis Court & Gym Access", "Private Infinity Pool", "Solar Energy Grid", "Forest Trails & Garden", "Eco Smart Automation", "24/7 Security"],
    featuresSomali: ["Lendhka Nidaamka Helikobtar", "Barxadda Teniska & Gym", "Biyo-dheellitirka Dabaasha", "Xarunta Korontada Qorraxda", "Dooxyada Socodka Kaysta", "Nidaamka Smart Eco", "Amniga 24 Saat"],
    rating: 5.0,
    solarPowered: true,
    greenRoadAccess: true,
    badge: "Ultra Luxury",
    badgeSomali: "Midka Ugu Qalisan",
    mapPos: { x: 82, y: 38, gridRef: "C-6" }
  }
];

const scenicRoads = [
  {
    title: "Wadada Geedaha Timirta & Dooxa",
    titleEn: "Palm & Valley Boulevard",
    image: scenicPalmAvenue,
    desc: "Wadooyin laami ah oo ay ku xeeran yihiin geedo timir cagaaran iyo iftiinka qorraxda oo indhaha u roon."
  },
  {
    title: "Wadada Kaysta & Dhirta Dabiiciga",
    titleEn: "Forest Canopy Avenue",
    image: pineRoadEcoHaven,
    desc: "Aag degan oo hooska dhirta dhaadheer ay ku daboolan tahay wadooyinka guriga lagu galo."
  },
  {
    title: "Wadada Beerta Ubaxyada & Biyaha",
    titleEn: "Botanical Stream Drive",
    image: botanicalOasisResidence,
    desc: "Ugu roon socodka subaxdii iyo fiidkii, iyada oo jawigu yahay mid safay oo hawo nadiif ah."
  }
];

const getPropertyTourRooms = (prop: Property) => {
  return [
    {
      id: 'living',
      nameSo: 'Fadhi & Galaaska (Main Living Suite)',
      nameEn: 'Main Living Suite',
      image: prop.gallery[0] || prop.image,
      hotspots: [
        { x: 35, y: 40, titleSo: 'Daaqada Smart Galaas', titleEn: 'Smart Window Glass', descSo: 'Daaqado galaas ah oo iftiinka otomaatig u beddela.', descEn: 'Electrochromic smart glass that tints automatically with sunlight.' },
        { x: 65, y: 55, titleSo: 'Muuqaalka Beerta & Dooxa', titleEn: 'Valley & Garden View', descSo: 'Aragga dabiiciga ah ee dooxa cagaaran.', descEn: 'Direct panoramic view overlooking rolling green hills.' }
      ]
    },
    {
      id: 'master',
      nameSo: 'Qolka Jiifka Boqortooyada (Master Suite)',
      nameEn: 'Master Luxury Bedroom',
      image: prop.gallery[1] || heroImage,
      hotspots: [
        { x: 40, y: 45, titleSo: 'Balcony Private Door', titleEn: 'Balcony Private Door', descSo: 'Albaabka gaarka ah ee balakoonka.', descEn: 'Seamless indoor-outdoor sliding glass leading to private garden.' }
      ]
    },
    {
      id: 'pool',
      nameSo: 'Biyo-dheellitirka Dabaasha & Patio',
      nameEn: 'Infinity Pool & Deck',
      image: prop.gallery[2] || sereneValleyGlassVilla,
      hotspots: [
        { x: 50, y: 60, titleSo: 'Solar Pool Jet Heaters', titleEn: 'Solar Pool Jet Heaters', descSo: 'Biyo-dheellitir la kululeeyo xilliyada dhan.', descEn: 'Solar-thermal powered pool temperature control.' }
      ]
    }
  ];
};

interface PropertyShareButtonProps {
  prop: Property;
  copiedId: number | null;
  handleShare: (e: React.MouseEvent, prop: Property) => void;
  lang: 'so' | 'en';
  variant?: 'light' | 'dark';
}

const PropertyShareButton = ({ prop, copiedId, handleShare, lang, variant = 'light' }: PropertyShareButtonProps) => {
  const isCopied = copiedId === prop.id;

  return (
    <motion.button
      onClick={(e) => handleShare(e, prop)}
      title={lang === 'so' ? 'Wadaag Guriga' : 'Share Property'}
      animate={isCopied ? { scale: [1, 1.35, 1.1] } : { scale: 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 20 }}
      className={`p-2 rounded-full border backdrop-blur-md transition-all cursor-pointer relative z-20 ${
        isCopied
          ? 'bg-emerald-600 text-white border-emerald-500 shadow-xl ring-2 ring-emerald-400/50'
          : variant === 'dark'
          ? 'bg-black/60 text-white border-white/30 hover:bg-black/80'
          : 'bg-white/80 text-black border-white hover:bg-white shadow-sm'
      }`}
    >
      {/* Subtle Ping Scale Animation on transition to Copied! state */}
      <AnimatePresence>
        {isCopied && (
          <>
            <motion.span
              initial={{ scale: 0.8, opacity: 0.9 }}
              animate={{ scale: 2.4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full bg-emerald-400/70 pointer-events-none border border-emerald-300"
            />
            <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping pointer-events-none" />
          </>
        )}
      </AnimatePresence>

      {isCopied ? (
        <motion.div initial={{ scale: 0.4, rotate: -30 }} animate={{ scale: 1, rotate: 0 }}>
          <Check className="w-4 h-4 text-white relative z-10" />
        </motion.div>
      ) : (
        <Share2 className="w-4 h-4 relative z-10" />
      )}

      {/* Floating Copied Toast */}
      <AnimatePresence>
        {isCopied && (
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.7 }}
            animate={{ opacity: 1, y: -38, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 500, damping: 22 }}
            className="absolute left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-emerald-700 text-white text-[10px] font-extrabold tracking-wider whitespace-nowrap shadow-2xl z-40 border border-emerald-400/40 pointer-events-none"
          >
            {lang === 'so' ? 'Waa La Qoray!' : 'Copied!'}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

interface FeatureFilterOption {
  id: string;
  labelEn: string;
  labelSo: string;
  icon: string;
  keywords: string[];
}

const featureFilterOptions: FeatureFilterOption[] = [
  {
    id: 'pool',
    labelEn: 'Private Pool',
    labelSo: 'Biyo-dheellitirka Dabaasha',
    icon: '🏊',
    keywords: ['pool', 'dabaasha', 'swimming', 'infinity pool', 'heated swimming pool']
  },
  {
    id: 'solar',
    labelEn: 'Solar Energy',
    labelSo: 'Korontada Qorraxda',
    icon: '☀️',
    keywords: ['solar', 'qorraxda', 'solar energy grid', 'solar power', 'solar roof grid', 'solar water heating']
  },
  {
    id: 'gym',
    labelEn: 'Gym Access',
    labelSo: 'Tiyaatarka Jimicsiga',
    icon: '🏋️',
    keywords: ['gym', 'jimicsi', 'fitness', 'tennis', 'barxadda teniska']
  },
  {
    id: 'garden',
    labelEn: 'Garden & Forest',
    labelSo: 'Beerta & Kaysta',
    icon: '🌿',
    keywords: ['garden', 'beerta', 'forest', 'botanical', 'lush forest access', 'weekly garden care', 'forest trails']
  },
  {
    id: 'smart',
    labelEn: 'Smart Home',
    labelSo: 'Nidaamka Smart Home',
    icon: '⚡',
    keywords: ['smart', 'automation', 'smart home', 'smart climate control', 'eco smart automation']
  },
  {
    id: 'security',
    labelEn: '24/7 Security',
    labelSo: 'Amniga 24 Saat',
    icon: '🛡️',
    keywords: ['security', 'amniga', '24/7 security', 'pet friendly']
  }
];

export default function App() {
  const [cardLayout, setCardLayout] = useState<'grid' | 'horizontal' | 'poster'>('grid');
  const [lang, setLang] = useState<'so' | 'en'>('so');
  const [activePalette, setActivePalette] = useState<ThemePalette>(colorPalettes[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFeatureFilters, setSelectedFeatureFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [compareList, setCompareList] = useState<Property[]>([]);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [hoveredMapProp, setHoveredMapProp] = useState<Property | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Night Mode Atmosphere
  const [isNightMode, setIsNightMode] = useState<boolean>(false);

  // Property Detail Modal View Tab
  const [modalTab, setModalTab] = useState<'gallery' | 'blueprint'>('gallery');

  // VIP Concierge Floating Drawer State
  const [isVIPOpen, setIsVIPOpen] = useState<boolean>(false);
  const [vipName, setVipName] = useState<string>('');
  const [vipPhone, setVipPhone] = useState<string>('');
  const [vipService, setVipService] = useState<string>('chauffeur');
  const [vipSuccess, setVipSuccess] = useState<boolean>(false);

  // GreenHaven Organic Bistro & In-Villa Dining State
  const [diningCategory, setDiningCategory] = useState<string>('all');
  const [diningCart, setDiningCart] = useState<{ id: number; titleSo: string; titleEn: string; price: number; qty: number; icon: string }[]>([]);
  const [isDiningOrderOpen, setIsDiningOrderOpen] = useState<boolean>(false);
  const [diningVillaNo, setDiningVillaNo] = useState<string>('Villa #102');
  const [diningNotes, setDiningNotes] = useState<string>('');
  const [diningOrderPlaced, setDiningOrderPlaced] = useState<boolean>(false);

  const handleShare = (e: React.MouseEvent, prop: Property) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/#property-${prop.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
    }
    setCopiedId(prop.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  // Virtual 360 Tour State
  const [virtualTourProp, setVirtualTourProp] = useState<Property | null>(null);
  const [activeRoomIndex, setActiveRoomIndex] = useState<number>(0);
  const [panAngle, setPanAngle] = useState<number>(0);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [soundMuted, setSoundMuted] = useState<boolean>(false);

  // Audio Speech State
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  useEffect(() => {
    if (!virtualTourProp || !isAutoRotating) return;
    const interval = setInterval(() => {
      setPanAngle((prev) => (prev + 1) % 360);
    }, 60);
    return () => clearInterval(interval);
  }, [virtualTourProp, isAutoRotating]);

  // AI Quiz Match State
  const [quizOpen, setQuizOpen] = useState<boolean>(false);
  const [quizBedrooms, setQuizBedrooms] = useState<number>(4);
  const [quizType, setQuizType] = useState<string>('villa');
  const [quizResult, setQuizResult] = useState<Property | null>(null);

  // Hero Image Slide Index
  const heroSlides = [heroImage, emeraldPalmsResort, sereneValleyGlassVilla];
  const [heroIndex, setHeroIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Calculator State
  const [calcPrice, setCalcPrice] = useState<number>(480000);
  const [calcDown, setCalcDown] = useState<number>(20);
  const [calcYears, setCalcYears] = useState<number>(25);

  // Price Filter
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000000);

  // Map Selected Property
  const [selectedMapProp, setSelectedMapProp] = useState<Property | null>(propertiesData[0]);

  // Booking Form State
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [bookingName, setBookingName] = useState<string>('');
  const [bookingPhone, setBookingPhone] = useState<string>('');
  const [bookingDate, setBookingDate] = useState<string>('');

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const toggleCompare = (p: Property) => {
    setCompareList(prev => {
      if (prev.some(item => item.id === p.id)) {
        return prev.filter(item => item.id !== p.id);
      }
      if (prev.length >= 3) return prev;
      return [...prev, p];
    });
  };

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang === 'so' ? 'so-SO' : 'en-US';
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const match = propertiesData.find(p => p.bedrooms >= quizBedrooms && (quizType === 'all' || p.category === quizType)) || propertiesData[0];
    setQuizResult(match);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone || !bookingDate) return;
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setBookingName('');
      setBookingPhone('');
      setBookingDate('');
      setSelectedProperty(null);
    }, 3000);
  };

  const toggleFeatureFilter = (filterId: string) => {
    setSelectedFeatureFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const filteredProperties = propertiesData.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.titleSomali.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = p.price >= minPrice && p.price <= maxPrice;

    const matchesFeatures = selectedFeatureFilters.length === 0 || selectedFeatureFilters.every(filterId => {
      const option = featureFilterOptions.find(f => f.id === filterId);
      if (!option) return true;
      const combinedText = [
        ...p.features,
        ...p.featuresSomali,
        p.description,
        p.descriptionSomali,
        p.solarPowered ? 'solar energy' : ''
      ].join(' ').toLowerCase();

      return option.keywords.some(kw => combinedText.includes(kw.toLowerCase()));
    });

    return matchesCategory && matchesSearch && matchesPrice && matchesFeatures;
  });

  // Mortgage calculations
  const principal = calcPrice * (1 - calcDown / 100);
  const monthlyRate = 0.045 / 12;
  const numberOfPayments = calcYears * 12;
  const monthlyMortgage = Math.round(
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
  );
  const estimatedEnergySavings = Math.round(calcPrice * 0.0008);

  const tenYearSavingsData = Array.from({ length: 10 }, (_, index) => {
    const yearNum = index + 1;
    const annualSavings = Math.round(estimatedEnergySavings * Math.pow(1.03, index));
    const cumulativeSavings = Math.round(
      Array.from({ length: yearNum }, (_, y) => estimatedEnergySavings * Math.pow(1.03, y))
        .reduce((sum, val) => sum + val, 0)
    );
    return {
      year: `Yr ${yearNum}`,
      annual: annualSavings,
      cumulative: cumulativeSavings,
    };
  });

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#11241a] font-sans selection:bg-[#09422b] selection:text-white transition-colors duration-500">
      
      {/* Dynamic Top Header with Theme Switcher */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-[#e8e2d5] shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3.5 cursor-pointer" 
            onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }}
          >
            <div 
              style={{ backgroundColor: activePalette.swatchPrimary }}
              className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-md ring-1 ring-white/20 transition-colors duration-500"
            >
              <Trees className="w-6 h-6" style={{ color: activePalette.accentColor }} />
            </div>
            <div>
              <span className="font-serif font-extrabold text-2xl tracking-tight text-[#0a1f15] block leading-none">
                GreenHaven
              </span>
              <span className="text-[10px] font-extrabold tracking-widest uppercase mt-1 block" style={{ color: activePalette.swatchPrimary }}>
                {lang === 'so' ? 'Guryaha Cagaaran & Fillooyinka' : 'Eco Estates & Luxury Villas'}
              </span>
            </div>
          </motion.div>

          {/* Header Action Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Quick Favorites Pill */}
            {favorites.length > 0 && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold"
              >
                <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
                <span>{favorites.length}</span>
              </motion.button>
            )}

            {/* Quiz Match Button */}
            <button
              onClick={() => { setQuizOpen(true); setQuizResult(null); }}
              className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#f2ebd9] hover:bg-[#e8dec7] text-[#0a1f15] border border-[#ddcfb3] text-xs font-bold transition-all cursor-pointer shadow-sm"
            >
              <Sparkles className="w-4 h-4" style={{ color: activePalette.accentColor }} />
              <span>{lang === 'so' ? 'Hel Guriga Habboon' : 'Find Best Villa'}</span>
            </button>

            <button
              onClick={() => setLang(lang === 'so' ? 'en' : 'so')}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#f4f0e6] hover:bg-[#e8e2d4] border border-[#ddcfb3] text-xs font-bold text-[#0a1f15] transition-all cursor-pointer"
            >
              <Languages className="w-4 h-4 text-[#09422b]" />
              <span>{lang === 'so' ? 'Soomaali' : 'English'}</span>
            </button>

            <a
              href="#properties"
              style={{ backgroundColor: activePalette.swatchPrimary }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-xs md:text-sm font-extrabold transition-all shadow-md cursor-pointer hover:opacity-95"
            >
              <Building className="w-4 h-4" style={{ color: activePalette.accentColor }} />
              <span>{lang === 'so' ? 'Eeg Guryaha' : 'Explore Estates'}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Dynamic Colors Based on Active Palette */}
      <section className={`relative overflow-hidden bg-gradient-to-b ${activePalette.heroGradient} text-white pt-12 pb-24 md:pt-20 md:pb-32 transition-all duration-700`}>
        
        {/* Animated Background Lights */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20" style={{ backgroundColor: activePalette.accentColor }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Mobile Theme Switcher Prompt */}
          <div className="flex lg:hidden items-center justify-between bg-black/40 backdrop-blur-md p-3 rounded-2xl mb-8 border border-white/10 text-xs">
            <span className="font-bold text-white flex items-center gap-1.5">
              <Palette className="w-4 h-4" style={{ color: activePalette.accentColor }} />
              {lang === 'so' ? 'Dooro Midabka Aad Jeceshahay:' : 'Select Visual Theme:'}
            </span>
            <div className="flex items-center gap-2">
              {colorPalettes.map((pal) => (
                <button
                  key={pal.id}
                  onClick={() => setActivePalette(pal)}
                  className={`w-6 h-6 rounded-full border-2 transition-all ${activePalette.id === pal.id ? 'ring-2 ring-white scale-110' : ''}`}
                  style={{ backgroundColor: pal.swatchPrimary }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 text-left space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase border border-white/20 shadow-lg">
                <Sparkles className="w-4 h-4" style={{ color: activePalette.accentColor }} />
                <span>{lang === 'so' ? 'Deegaan Cagaaran & Fillooyinka Luxury-ga Ah' : 'Architectural Excellence & Green Living'}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight leading-[1.15] text-white">
                {lang === 'so' ? (
                  <>
                    Guryo Casri Ah Oo Ku Dhex Yaal <span className={activePalette.accentText}>Wadooyin Cagaaran</span> & Deegaan Nabad Ah
                  </>
                ) : (
                  <>
                    Living in Harmony with Nature, <span className={activePalette.accentText}>Tree-Canopied Avenues</span> & Modern Villas
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-2xl">
                {lang === 'so'
                  ? 'Waxaan kuu haynaa fillooyin dabiici ah oo ku yaal wadooyin geedo cagaaran leh, hawada nadiifka ah, iyo bilicda dooxa indhaha u roon.'
                  : 'Exquisite eco-friendly villas nestled along tree-canopied avenues, offering pristine air, solar integration, and serene natural landscapes.'}
              </p>

              {/* Quick Hero CTA buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#properties"
                  className={`px-6 py-3.5 rounded-2xl ${activePalette.primaryBtn} ${activePalette.primaryBtnHover} font-black text-sm flex items-center gap-2.5 shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5`}
                >
                  <Building className="w-4 h-4" />
                  <span>{lang === 'so' ? 'Daawo Guryaha (Properties)' : 'View All Properties'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => { setQuizOpen(true); setQuizResult(null); }}
                  className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" style={{ color: activePalette.accentColor }} />
                  <span>{lang === 'so' ? 'Ciyaar Imtixaanka Guriga' : 'Take Estate Quiz'}</span>
                </button>
              </div>

              {/* Key Highlights Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/15 max-w-xl">
                <div>
                  <p className="text-2xl sm:text-3xl font-serif font-bold" style={{ color: activePalette.accentColor }}>120+</p>
                  <p className="text-xs text-white/70 mt-1 font-medium">{lang === 'so' ? 'Fillooyin Cagaaran' : 'Luxury Eco Villas'}</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-serif font-bold" style={{ color: activePalette.accentColor }}>100%</p>
                  <p className="text-xs text-white/70 mt-1 font-medium">{lang === 'so' ? 'Koronto Qorraxed' : 'Solar Integration'}</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-serif font-bold" style={{ color: activePalette.accentColor }}>4.9 ★</p>
                  <p className="text-xs text-white/70 mt-1 font-medium">{lang === 'so' ? 'Qanacsanaanta' : 'Resident Rating'}</p>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Image Animated Showcase */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl shadow-black/60 group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={heroIndex}
                    src={heroSlides[heroIndex]}
                    alt="Hero Eco Villa"
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    className="w-full h-[420px] sm:h-[480px] object-cover"
                  />
                </AnimatePresence>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 text-xs font-bold text-white flex items-center gap-2 shadow-lg"
                >
                  <Sun className="w-4 h-4" style={{ color: activePalette.accentColor }} />
                  <span>{lang === 'so' ? 'Bilicda Dooxa & Solar' : 'Architectural Eco Design'}</span>
                </motion.div>

                {/* Floating Preview Box */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-white/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider block" style={{ color: activePalette.accentColor }}>
                      {lang === 'so' ? 'Daawo Guriga Saree' : 'Featured Masterpiece'}
                    </span>
                    <p className="text-sm font-serif font-bold text-white">
                      Villa De La Flora
                    </p>
                    <p className="text-[11px] text-white/70">Qardho Green Valley • $480,000</p>
                  </div>

                  <button
                    onClick={() => { setSelectedProperty(propertiesData[0]); setActiveGalleryIndex(0); }}
                    style={{ backgroundColor: activePalette.accentColor }}
                    className="p-3 rounded-xl text-black font-extrabold text-xs transition-all cursor-pointer shadow-md"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Carousel Slide Indicators */}
                <div className="absolute top-4 right-4 flex gap-1.5 z-10">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setHeroIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        heroIndex === idx ? 'w-6 bg-white' : 'w-2 bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

          </div>



        </div>
      </section>

      {/* Featured Properties Grid Section */}
      <section id="properties" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Card Layout Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2">
              <Building className="w-4 h-4" style={{ color: activePalette.accentColor }} />
              <span style={{ color: activePalette.swatchPrimary }}>{lang === 'so' ? 'Guryaha Ugu Quruxda Badan' : 'Available Eco Estates'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a1f15]">
              {lang === 'so' ? 'Fillooyin & Guryo Cagaaran' : 'Featured Architectural Estates'}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Layout Style Selector */}
            <div className="flex items-center gap-1 p-1.5 bg-[#f4f0e6] rounded-2xl border border-[#e2dac9]">
              <button
                onClick={() => setCardLayout('grid')}
                title={lang === 'so' ? 'Qabka Standard Card' : 'Grid Layout'}
                style={cardLayout === 'grid' ? { backgroundColor: activePalette.swatchPrimary } : {}}
                className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  cardLayout === 'grid' ? 'text-white shadow-md' : 'text-[#11241a] hover:bg-[#e6ddc5]'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">{lang === 'so' ? 'Grid' : 'Grid'}</span>
              </button>

              <button
                onClick={() => setCardLayout('horizontal')}
                title={lang === 'so' ? 'Qabka Ballaadhan (Horizontal)' : 'Horizontal Layout'}
                style={cardLayout === 'horizontal' ? { backgroundColor: activePalette.swatchPrimary } : {}}
                className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  cardLayout === 'horizontal' ? 'text-white shadow-md' : 'text-[#11241a] hover:bg-[#e6ddc5]'
                }`}
              >
                <Rows className="w-4 h-4" />
                <span className="hidden sm:inline">{lang === 'so' ? 'Showcase' : 'Showcase'}</span>
              </button>

              <button
                onClick={() => setCardLayout('poster')}
                title={lang === 'so' ? 'Qabka Poster-ka Cinema-ga' : 'Poster Layout'}
                style={cardLayout === 'poster' ? { backgroundColor: activePalette.swatchPrimary } : {}}
                className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  cardLayout === 'poster' ? 'text-white shadow-md' : 'text-[#11241a] hover:bg-[#e6ddc5]'
                }`}
              >
                <LayoutList className="w-4 h-4" />
                <span className="hidden sm:inline">{lang === 'so' ? 'Poster' : 'Poster'}</span>
              </button>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 p-1.5 bg-[#f4f0e6] rounded-2xl border border-[#e2dac9] overflow-x-auto scrollbar-none">
              {[
                { id: 'all', labelSo: 'Dhammaan', labelEn: 'All Properties' },
                { id: 'villa', labelSo: 'Fillooyinka', labelEn: 'Villas' },
                { id: 'eco', labelSo: 'Guryaha Eco', labelEn: 'Eco Homes' },
                { id: 'estate', labelSo: 'Guryaha Waaweyn', labelEn: 'Estates' },
                { id: 'rent', labelSo: 'Kirada', labelEn: 'Rentals' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  style={selectedCategory === tab.id ? { backgroundColor: activePalette.swatchPrimary } : {}}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === tab.id
                      ? 'text-white shadow-md'
                      : 'text-[#11241a] hover:bg-[#e6ddc5]'
                  }`}
                >
                  {lang === 'so' ? tab.labelSo : tab.labelEn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Checkbox Feature Filter Section */}
        <div className="p-5 rounded-3xl bg-[#f8f6f0] border border-[#e2dac9] mb-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 border-b border-[#e8e2d5] pb-3">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#09422b]" />
              <h3 className="font-serif font-bold text-[#0a1f15] text-sm sm:text-base">
                {lang === 'so' ? 'Sifeeyaha Sifaadka Guriga (Feature Checkbox Filter)' : 'Filter By Specific Features'}
              </h3>
              {selectedFeatureFilters.length > 0 && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#0a1f15] text-[#d4af37] text-[10px] font-extrabold border border-[#d4af37]/30">
                  {selectedFeatureFilters.length} {lang === 'so' ? 'Doortay' : 'Selected'}
                </span>
              )}
            </div>

            {selectedFeatureFilters.length > 0 && (
              <button
                onClick={() => setSelectedFeatureFilters([])}
                className="text-xs font-bold text-rose-700 hover:text-rose-800 underline self-start sm:self-auto cursor-pointer"
              >
                {lang === 'so' ? 'Nadiifi Sifaadka' : 'Clear Feature Filters'}
              </button>
            )}
          </div>

          {/* Checkbox Grid Options */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {featureFilterOptions.map((option) => {
              const isChecked = selectedFeatureFilters.includes(option.id);
              return (
                <button
                  type="button"
                  key={option.id}
                  onClick={() => toggleFeatureFilter(option.id)}
                  className={`flex items-center gap-2.5 p-3 rounded-2xl border transition-all cursor-pointer select-none text-xs font-bold text-left w-full ${
                    isChecked
                      ? 'bg-[#0a1f15] text-white border-black shadow-md ring-2 ring-emerald-500/20'
                      : 'bg-white text-[#11241a] border-[#e2dac9] hover:border-[#09422b] hover:bg-[#f2ebd9]'
                  }`}
                >
                  <div className="relative flex items-center justify-center shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-[#d4af37]" />
                    ) : (
                      <Square className="w-4 h-4 text-[#8a9e92]" />
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 truncate">
                    <span className="text-sm">{option.icon}</span>
                    <span className="truncate">{lang === 'so' ? option.labelSo : option.labelEn}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Filter Pills Bar if selected */}
          {selectedFeatureFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-[#e8e2d5]">
              <span className="text-[11px] font-bold text-[#526359]">
                {lang === 'so' ? 'Sifaadka Dooran:' : 'Active Features:'}
              </span>
              {selectedFeatureFilters.map((fId) => {
                const opt = featureFilterOptions.find(o => o.id === fId);
                if (!opt) return null;
                return (
                  <span
                    key={fId}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a1f15] text-white text-[11px] font-bold shadow-sm"
                  >
                    <span>{opt.icon}</span>
                    <span>{lang === 'so' ? opt.labelSo : opt.labelEn}</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleFeatureFilter(fId); }}
                      className="hover:text-rose-300 ml-0.5 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                );
              })}
            </div>
          )}
        </div>

        {/* Results Counter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 px-6 rounded-2xl bg-[#f4f0e6] border border-[#e2dac9] mb-8 text-xs text-[#11241a]">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-[#0a1f15]">
              {filteredProperties.length} {lang === 'so' ? 'Guri Waa La Helay' : 'Properties Listed'}
            </span>
            <span>·</span>
            <span className="font-medium text-[#4a5e52]">
              {lang === 'so' ? 'Sifeynta:' : 'Filters:'} <strong>${minPrice.toLocaleString()} – ${maxPrice.toLocaleString()}</strong>
            </span>
            {selectedFeatureFilters.length > 0 && (
              <>
                <span>·</span>
                <span className="font-bold text-[#09422b]">
                  {selectedFeatureFilters.length} {lang === 'so' ? 'Sifaad Dooran' : 'Feature(s) Applied'}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-4">
            {compareList.length > 0 && (
              <span className="font-bold bg-[#0a1f15] text-white px-3 py-1 rounded-lg">
                {compareList.length} {lang === 'so' ? 'Guri Barbardhig' : 'In Compare'}
              </span>
            )}
            {(minPrice > 0 || maxPrice < 1000000 || selectedCategory !== 'all' || searchTerm !== '' || selectedFeatureFilters.length > 0) && (
              <button
                onClick={() => { setMinPrice(0); setMaxPrice(1000000); setSelectedCategory('all'); setSearchTerm(''); setSelectedFeatureFilters([]); }}
                className="font-bold underline cursor-pointer hover:opacity-80 text-rose-700"
              >
                {lang === 'so' ? 'Tirtir Sifeynta' : 'Clear All Filters'}
              </button>
            )}
          </div>
        </div>

        {/* Property Cards Layout Switching */}
        {cardLayout === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProperties.map((prop) => {
                const isFav = favorites.includes(prop.id);
                const isComp = compareList.some(item => item.id === prop.id);

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={prop.id}
                    className={`group bg-white rounded-3xl border border-[#e8e2d5] ${activePalette.cardBorderHover} overflow-hidden transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_35px_rgba(0,0,0,0.12)] flex flex-col justify-between relative`}
                  >
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden bg-[#f0eadd]">
                      <img
                        src={prop.image}
                        alt={prop.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                        <span 
                          style={{ backgroundColor: activePalette.swatchPrimary }}
                          className="px-3.5 py-1.5 rounded-xl text-white text-[11px] font-extrabold uppercase tracking-wider border border-white/20 shadow-md"
                        >
                          {lang === 'so' ? prop.badgeSomali : prop.badge}
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleCompare(prop)}
                            title={lang === 'so' ? 'Barbardhig Guriga' : 'Compare Property'}
                            className={`p-2 rounded-full border backdrop-blur-md transition-colors cursor-pointer ${
                              isComp
                                ? 'bg-black text-white border-black'
                                : 'bg-white/80 text-black border-white hover:bg-white'
                            }`}
                          >
                            <Layers className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => toggleFavorite(prop.id)}
                            title={lang === 'so' ? 'Jecleysay Guriga' : 'Favorite Property'}
                            className={`p-2 rounded-full border backdrop-blur-md transition-colors cursor-pointer ${
                              isFav
                                ? 'bg-rose-600 text-white border-rose-500'
                                : 'bg-white/80 text-black border-white hover:bg-white'
                            }`}
                          >
                            <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                          </button>

                          {/* Share Button with Ping Scale Animation & Copied Toast */}
                          <PropertyShareButton
                            prop={prop}
                            copiedId={copiedId}
                            handleShare={handleShare}
                            lang={lang}
                          />
                        </div>
                      </div>

                      {/* Bottom Eco Tags */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 z-10">
                        {prop.solarPowered && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[#0a1f15] text-[10px] font-bold shadow-sm">
                            <Sun className="w-3 h-3" style={{ color: activePalette.accentColor }} />
                            {lang === 'so' ? 'Koronto Qorrax' : 'Solar Powered'}
                          </span>
                        )}
                        {prop.greenRoadAccess && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[#0a1f15] text-[10px] font-bold shadow-sm">
                            <Trees className="w-3 h-3 text-[#09422b]" />
                            {lang === 'so' ? 'Wado Cagaaran' : 'Green Avenue'}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-1.5 text-[#526359] text-xs font-semibold">
                            <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: activePalette.swatchPrimary }} />
                            <span className="truncate">{prop.location}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs font-bold shrink-0" style={{ color: activePalette.accentColor }}>
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <span>{prop.rating}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-serif font-bold text-[#0a1f15] transition-colors mb-2 line-clamp-1">
                          {lang === 'so' ? prop.titleSomali : prop.title}
                        </h3>

                        <p className="text-[#4e6155] text-xs leading-relaxed line-clamp-2 mb-6">
                          {lang === 'so' ? prop.descriptionSomali : prop.description}
                        </p>
                      </div>

                      <div>
                        <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-2xl bg-[#f8f6f0] border border-[#e2dac9] text-center mb-6">
                          <div className="flex items-center justify-center gap-1 text-xs font-bold text-[#11241a]">
                            <Bed className="w-3.5 h-3.5" style={{ color: activePalette.swatchPrimary }} />
                            <span>{prop.bedrooms} {lang === 'so' ? 'Sariiro' : 'Beds'}</span>
                          </div>
                          <div className="flex items-center justify-center gap-1 text-xs font-bold text-[#11241a]">
                            <Bath className="w-3.5 h-3.5" style={{ color: activePalette.swatchPrimary }} />
                            <span>{prop.bathrooms} {lang === 'so' ? 'Suuli' : 'Baths'}</span>
                          </div>
                          <div className="flex items-center justify-center gap-1 text-xs font-bold text-[#11241a]">
                            <Maximize className="w-3.5 h-3.5" style={{ color: activePalette.swatchPrimary }} />
                            <span>{prop.sqft} sqft</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-[#eee8da]">
                          <div>
                            <span className="text-[10px] text-[#6b7d72] block uppercase font-bold">
                              {lang === 'so' ? 'Qiimaha Iibka' : 'Listing Price'}
                            </span>
                            <span className="text-xl font-serif font-bold text-[#0a1f15]">
                              ${prop.price.toLocaleString()}
                              {prop.isRent && <span className="text-xs font-sans font-normal text-[#6b7d72]"> /mo</span>}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => { e.stopPropagation(); setVirtualTourProp(prop); setActiveRoomIndex(0); setPanAngle(0); }}
                              className="px-3 py-2.5 rounded-xl bg-[#f4f0e6] hover:bg-[#e8dec7] text-[#0a1f15] border border-[#e2dac9] text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                              title={lang === 'so' ? 'Booqashada 360 Tour' : '360 Virtual Tour'}
                            >
                              <Compass className="w-4 h-4 text-[#d4af37] animate-spin" style={{ animationDuration: '10s' }} />
                              <span className="hidden xl:inline">360° Tour</span>
                            </button>

                            <button
                              onClick={() => { setSelectedProperty(prop); setActiveGalleryIndex(0); }}
                              style={{ backgroundColor: activePalette.swatchPrimary }}
                              className="px-4 py-2.5 rounded-xl text-white text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md hover:opacity-90"
                            >
                              <Eye className="w-4 h-4" style={{ color: activePalette.accentColor }} />
                              <span>{lang === 'so' ? 'Fiiri' : 'View'}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Layout 2: Horizontal Architectural Showcase */}
        {cardLayout === 'horizontal' && (
          <div className="space-y-6">
            <AnimatePresence>
              {filteredProperties.map((prop) => {
                const isFav = favorites.includes(prop.id);
                const isComp = compareList.some(item => item.id === prop.id);

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    key={prop.id}
                    className={`group bg-white rounded-3xl border border-[#e8e2d5] ${activePalette.cardBorderHover} overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12`}
                  >
                    {/* Image Column */}
                    <div className="md:col-span-5 relative h-72 md:h-auto overflow-hidden bg-[#f0eadd]">
                      <img
                        src={prop.image}
                        alt={prop.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                      <span 
                        style={{ backgroundColor: activePalette.swatchPrimary }}
                        className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl text-white text-[11px] font-extrabold uppercase shadow-md"
                      >
                        {lang === 'so' ? prop.badgeSomali : prop.badge}
                      </span>

                      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                        <PropertyShareButton
                          prop={prop}
                          copiedId={copiedId}
                          handleShare={handleShare}
                          lang={lang}
                        />
                        <button
                          onClick={() => toggleFavorite(prop.id)}
                          className={`p-2 rounded-full border backdrop-blur-md cursor-pointer ${
                            isFav ? 'bg-rose-600 text-white border-rose-500' : 'bg-white/80 text-black border-white'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Details Column */}
                    <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#526359] flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" style={{ color: activePalette.swatchPrimary }} />
                            {prop.location}
                          </span>
                          <span className="flex items-center gap-1 text-xs font-bold text-[#d4af37]">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            {prop.rating}
                          </span>
                        </div>

                        <h3 className="text-2xl font-serif font-bold text-[#0a1f15] mb-2">
                          {lang === 'so' ? prop.titleSomali : prop.title}
                        </h3>

                        <p className="text-[#4e6155] text-xs leading-relaxed mb-4">
                          {lang === 'so' ? prop.descriptionSomali : prop.description}
                        </p>

                        {/* Features Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {(lang === 'so' ? prop.featuresSomali : prop.features).slice(0, 3).map((f, idx) => (
                            <span key={idx} className="px-3 py-1 rounded-lg bg-[#f8f6f0] border border-[#e2dac9] text-[11px] font-bold text-[#11241a] flex items-center gap-1">
                              <Check className="w-3 h-3" style={{ color: activePalette.swatchPrimary }} />
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#eee8da] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <span className="text-[10px] text-[#6b7d72] uppercase font-bold block">{lang === 'so' ? 'Qiimaha Iibka' : 'Listing Price'}</span>
                          <span className="text-2xl font-serif font-bold text-[#0a1f15]">${prop.price.toLocaleString()}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={(e) => { e.stopPropagation(); setVirtualTourProp(prop); setActiveRoomIndex(0); setPanAngle(0); }}
                            className="px-4 py-3 rounded-2xl bg-[#f4f0e6] hover:bg-[#e8dec7] text-[#0a1f15] border border-[#e2dac9] text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                          >
                            <Compass className="w-4 h-4 text-[#d4af37] animate-spin" style={{ animationDuration: '10s' }} />
                            <span>360° Virtual Tour</span>
                          </button>

                          <button
                            onClick={() => { setSelectedProperty(prop); setActiveGalleryIndex(0); }}
                            style={{ backgroundColor: activePalette.swatchPrimary }}
                            className="px-5 py-3 rounded-2xl text-white text-xs font-bold flex items-center gap-2 cursor-pointer shadow-md hover:opacity-90"
                          >
                            <Eye className="w-4 h-4" style={{ color: activePalette.accentColor }} />
                            <span>{lang === 'so' ? 'Fiiri Guriga' : 'View Estate'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Layout 3: Cinematic Full-Bleed Poster Card */}
        {cardLayout === 'poster' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProperties.map((prop) => {
                const isFav = favorites.includes(prop.id);

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    key={prop.id}
                    className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#e8e2d5] hover:border-black transition-all group cursor-pointer"
                    onClick={() => { setSelectedProperty(prop); setActiveGalleryIndex(0); }}
                  >
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    {/* Floating Price Tag & Share Button on Top Right */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                      <PropertyShareButton
                        prop={prop}
                        copiedId={copiedId}
                        handleShare={handleShare}
                        lang={lang}
                        variant="dark"
                      />
                      <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/30 text-white font-serif font-bold text-sm shadow-xl">
                        ${prop.price.toLocaleString()}
                      </div>
                    </div>

                    <span 
                      style={{ backgroundColor: activePalette.swatchPrimary }}
                      className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl text-white text-[11px] font-extrabold uppercase shadow-lg"
                    >
                      {lang === 'so' ? prop.badgeSomali : prop.badge}
                    </span>

                    {/* Content Box Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/20 text-white space-y-3">
                      <div>
                        <span className="text-[10px] text-[#d4af37] font-bold uppercase tracking-wider block">{prop.location}</span>
                        <h3 className="text-xl font-serif font-bold text-white leading-snug">
                          {lang === 'so' ? prop.titleSomali : prop.title}
                        </h3>
                      </div>

                      <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-white/10 text-center text-xs font-bold text-white">
                        <div>{prop.bedrooms} Beds</div>
                        <div>{prop.bathrooms} Baths</div>
                        <div>{prop.sqft} sqft</div>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={(e) => { e.stopPropagation(); setVirtualTourProp(prop); setActiveRoomIndex(0); setPanAngle(0); }}
                          className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          <Compass className="w-3.5 h-3.5 text-[#d4af37] animate-spin" style={{ animationDuration: '10s' }} />
                          <span>360° Walkthrough</span>
                        </button>

                        <span className="text-xs font-bold text-[#d4af37] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          {lang === 'so' ? 'Fiiri Guriga' : 'Explore'} <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* Interactive Estate Grid Map Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4f0e6] text-xs font-bold uppercase tracking-wider border border-[#e2dac9] mb-3" style={{ color: activePalette.swatchPrimary }}>
            <Compass className="w-4 h-4" />
            <span>{lang === 'so' ? 'Khariidadda Aagga Guryaha' : 'Interactive Masterplan Map'}</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-[#0a1f15] mb-2">
            {lang === 'so' ? 'Khariidadda Aagagga Guryaha & Grid-ka' : 'Geographic Grid & Estate Pin Map'}
          </h2>
          <p className="text-[#526359] text-xs sm:text-sm leading-relaxed">
            {lang === 'so'
              ? 'Muraayaddu waxay muujinaysaa aagagga guryaha ku yaallaan, wadooyinka cagaaran, iyo meelaha dooxa ah. Taabo pin-ka si aad u eegto guriga.'
              : 'Explore luxury eco-villas and estates plotted across our interactive geographic masterplan grid.'}
          </p>
        </div>

        {/* Map Container */}
        <div className={`${activePalette.darkBg} text-white rounded-3xl border border-white/20 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-3 transition-colors duration-500`}>
          
          {/* Main Grid Map Canvas */}
          <div className="lg:col-span-2 relative min-h-[420px] md:min-h-[480px] bg-black/40 overflow-hidden p-6 flex flex-col justify-between">
            
            {/* Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:16.66%_16.66%] opacity-40 pointer-events-none" />

            {/* Grid Coordinates */}
            <div className="absolute top-2 left-3 right-3 flex justify-between text-[10px] text-white/50 font-mono font-bold tracking-widest pointer-events-none z-10">
              <span>SEC A</span>
              <span>SEC B</span>
              <span>SEC C</span>
              <span>SEC D</span>
              <span>SEC E</span>
              <span>SEC F</span>
            </div>

            {/* Landmark Labels */}
            <div className="relative z-0 pointer-events-none h-full flex flex-col justify-between pt-6 pb-2 px-2 text-[10px] font-mono uppercase text-white/40 font-bold tracking-wider">
              <div className="flex justify-between">
                <span>🌲 Qardho Green Valley</span>
                <span>🌴 Palm Coast Avenue</span>
              </div>
              <div className="flex justify-between">
                <span>🏞️ Botanical Stream Drive</span>
                <span>⛰️ Green Ridge Hills</span>
              </div>
            </div>

            {/* Pins */}
            {propertiesData.map((p) => {
              const isSelected = selectedMapProp?.id === p.id;
              const isHovered = hoveredMapProp?.id === p.id;

              return (
                <div
                  key={p.id}
                  style={{ left: `${p.mapPos.x}%`, top: `${p.mapPos.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300"
                  onMouseEnter={() => setHoveredMapProp(p)}
                  onMouseLeave={() => setHoveredMapProp(null)}
                >
                  {/* Hover Mini-Preview Card Tooltip */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 p-3 rounded-2xl bg-[#0a1f15]/95 backdrop-blur-xl border border-white/30 text-white shadow-2xl z-50 pointer-events-none"
                      >
                        {/* Mini Thumbnail */}
                        <div className="relative h-28 rounded-xl overflow-hidden mb-2 border border-white/20">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[9px] font-black text-[#d4af37] border border-white/20">
                            {p.isRent ? (lang === 'so' ? 'KIRA' : 'FOR RENT') : (lang === 'so' ? 'IIB' : 'FOR SALE')}
                          </div>
                          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-white/90 text-black text-[10px] font-extrabold flex items-center gap-0.5 shadow-md">
                            <Star className="w-3 h-3 fill-[#d4af37] text-[#d4af37]" /> {p.rating}
                          </div>
                        </div>

                        {/* Title & Price */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-mono text-[#d4af37] uppercase font-bold">GRID {p.mapPos.gridRef}</span>
                            <span className="text-xs font-serif font-black text-[#f3e5ab]">${p.price.toLocaleString()}{p.isRent ? '/mo' : ''}</span>
                          </div>

                          <h4 className="font-serif font-bold text-white text-xs truncate">
                            {lang === 'so' ? p.titleSomali : p.title}
                          </h4>

                          <p className="text-[10px] text-white/70 flex items-center gap-1 truncate">
                            <MapPin className="w-3 h-3 text-[#d4af37] shrink-0" />
                            <span className="truncate">{p.location}</span>
                          </p>

                          {/* Mini Specs Pill */}
                          <div className="grid grid-cols-3 gap-1 pt-1.5 mt-1 border-t border-white/15 text-[9px] font-bold text-white/90 text-center">
                            <div>{p.bedrooms} Beds</div>
                            <div>{p.bathrooms} Baths</div>
                            <div>{p.sqft} sqft</div>
                          </div>
                        </div>

                        {/* Tooltip Down Arrow Triangle */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-t-6 border-t-[#0a1f15]/95" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setSelectedMapProp(p)}
                    className={`relative group flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-all cursor-pointer shadow-lg ${
                      isSelected || isHovered
                        ? 'bg-white text-black border-white scale-110 z-30 ring-4 ring-white/30'
                        : 'bg-black/80 hover:bg-black text-white border-white/30 hover:scale-105'
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute -inset-1 rounded-full bg-white animate-ping opacity-30" />
                    )}

                    <MapPin className="w-3.5 h-3.5" style={{ color: isSelected || isHovered ? '#000' : activePalette.accentColor }} />
                    <span className="font-mono">${(p.price / 1000).toFixed(0)}k</span>

                    <span className={`text-[9px] px-1 py-0.2 rounded font-mono ${isSelected || isHovered ? 'bg-black text-white' : 'bg-white/20 text-white'}`}>
                      {p.mapPos.gridRef}
                    </span>
                  </button>
                </div>
              );
            })}

            {/* Map Legend */}
            <div className="relative z-10 flex items-center justify-between text-[11px] text-white/70 border-t border-white/10 pt-3 mt-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white" /> {lang === 'so' ? 'Aagga Guriga Dooran' : 'Selected Estate Pin'}
              </span>
              <span className="font-mono text-[10px] text-white/50">Masterplan Grid: 6x6</span>
            </div>
          </div>

          {/* Map Preview Sidebar Card */}
          {selectedMapProp && (
            <div className="p-6 bg-black/30 border-t lg:border-t-0 lg:border-l border-white/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white/10" style={{ color: activePalette.accentColor }}>
                    GRID REF: {selectedMapProp.mapPos.gridRef}
                  </span>
                  <span className="text-xs font-bold" style={{ color: activePalette.accentColor }}>
                    ${selectedMapProp.price.toLocaleString()}
                  </span>
                </div>

                <div className="relative h-44 rounded-2xl overflow-hidden mb-4 border border-white/20">
                  <img
                    src={selectedMapProp.image}
                    alt={selectedMapProp.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-lg bg-black/80 text-[10px] font-bold text-white">
                    {lang === 'so' ? selectedMapProp.badgeSomali : selectedMapProp.badge}
                  </div>
                </div>

                <h3 className="font-serif font-bold text-white text-lg mb-1">
                  {lang === 'so' ? selectedMapProp.titleSomali : selectedMapProp.title}
                </h3>

                <p className="text-xs text-white/80 flex items-center gap-1 mb-3">
                  <MapPin className="w-3.5 h-3.5" style={{ color: activePalette.accentColor }} />
                  <span>{selectedMapProp.location}</span>
                </p>

                <p className="text-xs text-white/70 leading-relaxed line-clamp-2 mb-4">
                  {lang === 'so' ? selectedMapProp.descriptionSomali : selectedMapProp.description}
                </p>

                <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-black/40 text-center border border-white/10 text-xs text-white mb-4">
                  <div><Bed className="w-3.5 h-3.5 mx-auto" style={{ color: activePalette.accentColor }} />{selectedMapProp.bedrooms} Beds</div>
                  <div><Bath className="w-3.5 h-3.5 mx-auto" style={{ color: activePalette.accentColor }} />{selectedMapProp.bathrooms} Baths</div>
                  <div><Maximize className="w-3.5 h-3.5 mx-auto" style={{ color: activePalette.accentColor }} />{selectedMapProp.sqft} sqft</div>
                </div>
              </div>

              <button
                onClick={() => { setSelectedProperty(selectedMapProp); setActiveGalleryIndex(0); }}
                style={{ backgroundColor: activePalette.accentColor }}
                className="w-full py-3 text-black font-extrabold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Eye className="w-4 h-4" />
                <span>{lang === 'so' ? 'Fiiri Faahfaahinta Guriga' : 'View Full Details'}</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Scenic Green Roads Feature Section */}
      <section className={`py-20 ${activePalette.darkBg} text-white my-12 relative overflow-hidden transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider border border-white/20 mb-3">
              <Trees className="w-4 h-4" style={{ color: activePalette.accentColor }} />
              <span>{lang === 'so' ? 'Wadooyinka & Dooxa Cagaaran' : 'Environmental Excellence'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3">
              {lang === 'so' ? 'Wadooyin Indhaha U Roon & Dhul Doog Ah' : 'Scenic Tree-Canopied Avenues'}
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              {lang === 'so'
                ? 'Guryahayagu kuma koobna oo kaliya dhismaha gudihiisa, ahmiyad gaar ah ayaan siinaa wadooyinka cagaaran, geedaha hooska leh, iyo jawiga bilicda leh.'
                : 'Living in GreenHaven means enjoying private tree-lined roads, clean fresh air, and peaceful neighborhood walks.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scenicRoads.map((road, idx) => (
              <motion.div 
                whileHover={{ y: -6 }}
                key={idx} 
                className="bg-black/30 rounded-3xl border border-white/20 overflow-hidden group hover:border-white transition-all shadow-xl"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={road.image}
                    alt={road.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-white text-xl mb-2">
                    {lang === 'so' ? road.title : road.titleEn}
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed">
                    {road.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Mortgage & Solar Savings Calculator */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#e8e2d5] rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f0e6] text-xs font-bold uppercase tracking-wider mb-4 border border-[#e2dac9]" style={{ color: activePalette.swatchPrimary }}>
                <Calculator className="w-4 h-4" style={{ color: activePalette.accentColor }} />
                <span>{lang === 'so' ? 'Xisaabiyaha Qiimaha & Badbaadada' : 'Investment & Solar Calculator'}</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a1f15] mb-4">
                {lang === 'so' ? 'Xisaabi Bixinta Bisha & Korontada Qorraxda' : 'Estimate Your Monthly Investment & Solar Savings'}
              </h2>

              <p className="text-[#526359] text-sm leading-relaxed mb-8">
                {lang === 'so'
                  ? 'Kudar qiimaha guriga aad dooneyso si aad u fahamto inta aad bixinayso bishiiba iyo inta lacag ah ee korontada qorraxdu kuu badbaadinayso.'
                  : 'Calculate your estimated monthly payment and see how much renewable solar energy saves you every year.'}
              </p>

              {/* Range Inputs */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#11241a] mb-2">
                    <span>{lang === 'so' ? 'Qiimaha Guriga' : 'Property Value'}</span>
                    <span className="font-black">${calcPrice.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={200000}
                    max={1200000}
                    step={20000}
                    value={calcPrice}
                    onChange={(e) => setCalcPrice(Number(e.target.value))}
                    className="w-full accent-black bg-[#e6e1d5] rounded-lg h-2 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-[#11241a] mb-2">
                    <span>{lang === 'so' ? 'Lacagta Hore (Down Payment)' : 'Down Payment'}</span>
                    <span className="font-black">{calcDown}% (${(calcPrice * calcDown / 100).toLocaleString()})</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={50}
                    step={5}
                    value={calcDown}
                    onChange={(e) => setCalcDown(Number(e.target.value))}
                    className="w-full accent-black bg-[#e6e1d5] rounded-lg h-2 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-[#11241a] mb-2">
                    <span>{lang === 'so' ? 'Muddada Bixinta (Sanado)' : 'Loan Duration (Years)'}</span>
                    <span className="font-black">{calcYears} {lang === 'so' ? 'Sanadood' : 'Years'}</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={30}
                    step={5}
                    value={calcYears}
                    onChange={(e) => setCalcYears(Number(e.target.value))}
                    className="w-full accent-black bg-[#e6e1d5] rounded-lg h-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Results Box */}
            <div className={`${activePalette.darkBg} text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6 border border-white/20 shadow-2xl transition-colors duration-500`}>
              <div>
                <span className="text-xs text-white/70 uppercase tracking-wider font-bold block mb-1">
                  {lang === 'so' ? 'Bixinta Bilaha Ah' : 'Estimated Monthly Payment'}
                </span>
                <p className="text-4xl md:text-5xl font-serif font-bold mb-2" style={{ color: activePalette.accentColor }}>
                  ${monthlyMortgage.toLocaleString()}
                  <span className="text-xs font-sans font-normal text-white/70"> /mo</span>
                </p>
                <p className="text-xs text-white/60">
                  {lang === 'so' ? 'Waxay ku salaysan tahay faa\'iidada 4.5% ee caadiga ah.' : 'Based on an estimated 4.5% fixed interest rate.'}
                </p>
              </div>

              {/* Solar Energy Savings Banner & Recharts */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                <div className="flex items-center gap-2 font-bold text-sm mb-1" style={{ color: activePalette.accentColor }}>
                  <Sun className="w-4 h-4" />
                  <span>{lang === 'so' ? 'Badbaadada Korontada Qorraxda' : 'Solar Power Yearly Savings'}</span>
                </div>
                <p className="text-xs text-white/80 mb-3">
                  {lang === 'so'
                    ? `Gurigan wuxuu kuu badbaadinayaa qiyaastii $${estimatedEnergySavings} sannadkiiba maadaama uu adeegsado Solar Energy.`
                    : `This home saves you approximately $${estimatedEnergySavings}/year with built-in renewable solar panels.`}
                </p>

                {/* 10-Year Savings Recharts Bar Chart */}
                <div className="pt-3 border-t border-white/15">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-white">
                      {lang === 'so' ? 'Badbaadada 10-ka Sannadood' : '10-Year Savings Projection'}
                    </span>
                    <span className="text-[10px] text-white/70">
                      {lang === 'so' ? 'Is-darka:' : 'Total:'} <strong style={{ color: activePalette.accentColor }}>${tenYearSavingsData[9].cumulative.toLocaleString()}</strong>
                    </span>
                  </div>

                  <div className="w-full h-36">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={tenYearSavingsData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.15)" vertical={false} />
                        <XAxis dataKey="year" stroke="rgba(255,255,255,0.7)" tick={{ fontSize: 9 }} axisLine={false} tickLine={false} />
                        <YAxis stroke="rgba(255,255,255,0.7)" tick={{ fontSize: 9 }} axisLine={false} tickLine={false} tickFormatter={(val) => `$${val}`} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#0a1f15',
                            borderColor: 'rgba(255,255,255,0.2)',
                            borderRadius: '12px',
                            color: '#fcfaf5',
                            fontSize: '11px',
                          }}
                          formatter={(value: any) => [`$${Number(value || 0).toLocaleString()}`, lang === 'so' ? 'Badbaadada Sannadka' : 'Annual Savings']}
                          labelStyle={{ color: activePalette.accentColor, fontWeight: 'bold' }}
                        />
                        <Bar dataKey="annual" fill={activePalette.accentColor} radius={[4, 4, 0, 0]} name={lang === 'so' ? 'Badbaadada Sannadka' : 'Annual Savings'} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <a
                href="#properties"
                style={{ backgroundColor: activePalette.accentColor }}
                className="w-full py-3.5 text-black font-extrabold rounded-2xl text-xs md:text-sm text-center transition-all cursor-pointer shadow-md hover:opacity-90"
              >
                {lang === 'so' ? 'Dooro Guri Aan Ku Habboon' : 'Find Matching Estates'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Materials & Craftsmanship Showcase */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4f0e6] text-xs font-bold uppercase tracking-wider border border-[#e2dac9] mb-3" style={{ color: activePalette.swatchPrimary }}>
            <Layers className="w-4 h-4" style={{ color: activePalette.accentColor }} />
            <span>{lang === 'so' ? 'Alaabta & Dhismaha Dabiiciga Ah' : 'Eco Materials & Craftsmanship'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a1f15]">
            {lang === 'so' ? 'Muxuu Gurigu U Leeyahay Tayada Ugu Sareysa?' : 'Engineered For 100-Year Architectural Resilience'}
          </h2>
          <p className="text-[#526359] text-xs md:text-sm mt-2">
            {lang === 'so'
              ? 'Nidaam dhisid oo adeegsada alaabaha ugu qaalisan ee dabiiciga ah, kuwaas oo u adkaysta kuleylka iyo isbaddalka cimilada.'
              : 'Every villa is constructed with premium sustainably sourced materials, solar glazing, and geothermal thermal barrier systems.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '☀️',
              titleSo: 'Solar Glazing Glass',
              titleEn: 'Triple-Pane Solar Glass',
              badgeSo: '94% Heat Filter',
              badgeEn: '94% Heat Filter',
              descSo: 'Galaas 3-lakab ah oo baajiya kuleylka qorraxda isla markaana dhaliya koronto dabiici ah.',
              descEn: 'High-performance smart glass filtering ultraviolet radiation while harvesting solar thermal energy.'
            },
            {
              icon: '🌲',
              titleSo: 'Wood & Bamboo',
              titleEn: 'Certified Teak & Bamboo',
              badgeSo: '50-Yr Warranty',
              badgeEn: '50-Yr Warranty',
              descSo: 'Qoryaha teak-ka dabiiciga ah oo aan kuleylka ama cayayaanku xumaan karin oo leh dammaanad 50 sano ah.',
              descEn: 'Sustainably harvested timber treated with non-toxic botanical oils for half a century of resilience.'
            },
            {
              icon: '💧',
              titleSo: 'Biyo Sefeeyaha Beerta',
              titleEn: 'Greywater Recycling Unit',
              badgeSo: '100% Zero-Waste',
              badgeEn: '100% Zero-Waste',
              descSo: 'Nidaam gooni ah oo sefeeya biyaha guriga si loogu waraabiyo geedaha iyo beeraha si toos ah.',
              descEn: 'Automated subterranean micro-filtration recycling all domestic water for lush estate botanical gardens.'
            },
            {
              icon: '⚡',
              titleSo: 'Tesla Powerwall & Cooling',
              titleEn: 'Subterranean Geothermal',
              badgeSo: '22°C Constant',
              badgeEn: '22°C Constant',
              descSo: 'Dhuumaha dhulka hoose ee qoolka ah oo si dabiici ah u qoodhiya guriga ilaa 22°C xitaa kulaylka.',
              descEn: 'Geothermal air exchange tubes utilizing deep earth temperatures to maintain perfect year-round climate.'
            }
          ].map((mat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-white border border-[#e2dac9] shadow-md relative overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-3 rounded-2xl bg-[#f8f6f0] border border-[#e2dac9] inline-block">{mat.icon}</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#0a1f15] text-white text-[10px] font-extrabold uppercase tracking-wider">
                    {lang === 'so' ? mat.badgeSo : mat.badgeEn}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-[#0a1f15] mb-2 group-hover:text-[#09422b] transition-colors">
                  {lang === 'so' ? mat.titleSo : mat.titleEn}
                </h3>

                <p className="text-xs text-[#526359] leading-relaxed">
                  {lang === 'so' ? mat.descSo : mat.descEn}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#eee8da] flex items-center justify-between text-[11px] font-bold text-[#09422b]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                  {lang === 'so' ? 'Eco Certified' : 'Eco Certified'}
                </span>
                <span>ISO 14001</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VIP Owners Club & Gold Pass Membership Card */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#032317] via-[#09422b] to-[#041a11] text-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden border border-[#d4af37]/30">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-extrabold uppercase tracking-wider border border-white/20">
                <Award className="w-4 h-4 text-[#d4af37]" />
                <span>{lang === 'so' ? 'Xubinnimada Boqortooyada VIP' : 'Exclusive VIP Owners Club'}</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-serif font-extrabold tracking-tight text-white leading-tight">
                {lang === 'so' ? (
                  <>
                    GreenHaven <span className="text-[#d4af37]">Gold Pass</span>: Xubinnimo Gaar Ah
                  </>
                ) : (
                  <>
                    GreenHaven <span className="text-[#d4af37]">Gold Pass</span> Privilege
                  </>
                )}
              </h2>

              <p className="text-white/80 text-sm leading-relaxed max-w-xl">
                {lang === 'so'
                  ? 'Khadka xubinnimada dahabka ah wuxuu leeyahay faa\'iidooyin gaar ah oo loogu talagalay dadka iska leh filla kasta: Khadaka helikobter-ka gaarka ah, khudradda dabiiciga ah oo maalin kasta guriga laguugu leeyahay, iyo garoonka golf-ka.'
                  : 'Every estate owner receives the GreenHaven VIP Gold Pass unlocking private helipad landing privileges, daily doorstep organic farm harvests, and 24/7 personal estate concierge detail.'}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { icon: '🚁', titleSo: 'Helicopter Pad Access', titleEn: 'Private Helipad Access' },
                  { icon: '🥑', titleSo: 'Dhaqashada Beerta Dabiiciga', titleEn: 'Daily Organic Harvest' },
                  { icon: '⛳', titleSo: 'Garoonka Golf-ka VIP', titleEn: 'Private Eco Golf Club' },
                  { icon: '🔒', titleSo: 'Nabadgelyada 24/7 Smart', titleEn: '24/7 Biometric Patrol' }
                ].map((p, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 border border-white/15">
                    <span className="text-2xl">{p.icon}</span>
                    <span className="text-xs font-bold text-white">{lang === 'so' ? p.titleSo : p.titleEn}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsVIPOpen(true)}
                  className="px-8 py-4 rounded-2xl bg-[#d4af37] hover:bg-amber-400 text-black font-extrabold text-xs md:text-sm shadow-xl transition-all cursor-pointer flex items-center gap-2.5"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{lang === 'so' ? 'Codso Xubinnimada Gold Pass' : 'Apply For Gold Pass Membership'}</span>
                </button>
              </div>
            </div>

            {/* Simulated 3D Foil Shimmer Card Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ rotateY: 10, rotateX: -5, scale: 1.02 }}
                className="w-full max-w-sm aspect-[1.58/1] rounded-3xl p-6 sm:p-8 bg-gradient-to-tr from-[#111] via-[#1a2e22] to-[#0d3b27] border-2 border-[#d4af37]/60 shadow-[0_25px_60px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col justify-between text-[#d4af37]"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4af37]/40 to-transparent rounded-full blur-2xl pointer-events-none" />

                <div className="flex justify-between items-start z-10">
                  <div>
                    <span className="font-serif font-black text-xl tracking-tight text-white block">GreenHaven</span>
                    <span className="text-[9px] text-[#d4af37] font-extrabold uppercase tracking-widest block">VIP GOLD PASS</span>
                  </div>
                  <Sparkles className="w-6 h-6 text-[#d4af37]" />
                </div>

                <div className="z-10 space-y-1 my-4">
                  <div className="w-10 h-8 rounded-lg bg-gradient-to-r from-amber-200 to-amber-500 opacity-90 border border-white/40 shadow-inner" />
                  <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-white/90 pt-2">
                    4892 •••• •••• 9201
                  </p>
                </div>

                <div className="flex justify-between items-end z-10 text-[10px] uppercase font-bold text-white/80">
                  <div>
                    <span className="text-[8px] text-[#d4af37] block">MEMBER NAME</span>
                    <span>MUXAMMAD CUMAR</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] text-[#d4af37] block">EXPIRES</span>
                    <span>12/32</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* GreenHaven Organic Bistro & In-Villa Dining Showcase */}
      <section id="dining" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fbf9f3] rounded-[2.5rem] border border-[#e2dac9] p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1f15] text-white text-xs font-extrabold uppercase tracking-wider border border-white/20">
                <ChefHat className="w-4 h-4 text-[#d4af37]" />
                <span>{lang === 'so' ? 'Maqaayadda & Dining-ka Fillooyinka' : 'GreenHaven Bistro & In-Villa Dining'}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[#0a1f15]">
                {lang === 'so' ? 'Cuntooyinka Dabiiciga Ah & Dalabka Qolka (In-Villa Dining)' : 'Farm-to-Table Gourmet Dining Delivered To Your Villa'}
              </h2>

              <p className="text-xs md:text-sm text-[#526359] leading-relaxed">
                {lang === 'so'
                  ? 'Khadka maqaayadda dabiiciga ah ee GreenHaven Bistro wuxuu kuu diyaariyaa cuntooyinka ugu dhadhanka badan ee lagu kariyay khudradda iyo doogga beerta dabiiciga ah. Waxaad si toos ah cunto ugu dalban kartaa filla-daada ama Suite-kaaga.'
                  : 'Enjoy organic farm-to-table gourmet dishes, fresh juices, and specialty coffee prepared by our executive chefs and delivered directly to your private villa deck.'}
              </p>

              {/* Menu Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
                {[
                  { id: 'all', labelSo: 'Dhammaan Cuntooyinka', labelEn: 'All Dishes', icon: '🍽️' },
                  { id: 'breakfast', labelSo: 'Quraac Dabiici Ah', labelEn: 'Organic Breakfast', icon: '🥑' },
                  { id: 'main', labelSo: 'Cuntooyinka Waaweyn', labelEn: 'Prime Mains', icon: '🥩' },
                  { id: 'drinks', labelSo: 'Cabbitaanka & Fresh Juices', labelEn: 'Fresh Smoothies & Coffee', icon: '🍹' },
                  { id: 'dessert', labelSo: 'Macaamiinta Beerta', labelEn: 'Estate Desserts', icon: '🍰' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setDiningCategory(cat.id)}
                    className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border ${
                      diningCategory === cat.id
                        ? 'bg-[#0a1f15] text-white border-black shadow-md'
                        : 'bg-white text-[#2c3d33] border-[#e2dac9] hover:bg-[#f2ebd9]'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{lang === 'so' ? cat.labelSo : cat.labelEn}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Restaurant Hero Image Card */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#e2dac9] group h-64 lg:h-72">
              <img src={greenhavenBistro} alt="GreenHaven Bistro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#d4af37]">GREENHAVEN BISTRO</span>
                <h3 className="font-serif font-bold text-lg">{lang === 'so' ? 'Maqaayadda Dabiiciga Ah ee Fillooyinka' : 'Private Estate Organic Bistro'}</h3>
                <p className="text-[11px] text-white/80">{lang === 'so' ? 'Furan 7:00 AM - 11:00 PM • Room Delivery In-Villa' : 'Open 7:00 AM - 11:00 PM • Room Service In-Villa'}</p>
              </div>
            </div>
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { id: 1, category: 'breakfast', icon: '🥑', titleSo: 'Organic Farm Avocado Toast', titleEn: 'Organic Farm Avocado Toast', descSo: 'Rooti dabiici ah, ukunta poach-ka ah, iyo saliid zaytuun.', descEn: 'Sourdough toast, poached eggs, and cold-pressed olive oil.', price: 16 },
              { id: 2, category: 'main', icon: '🥩', titleSo: 'Grass-Fed Prime Ribeye Steak', titleEn: 'Grass-Fed Prime Ribeye Steak', descSo: 'Hilib lo\'aad oo dabiici ah oo lagu kariyay geedo udgoon.', descEn: 'Prime grass-fed ribeye grilled with garden wild rosemary.', price: 45 },
              { id: 3, category: 'main', icon: '🐟', titleSo: 'Fresh Ocean Kingfish Fillet', titleEn: 'Fresh Ocean Kingfish Fillet', descSo: 'Kalluun badda oo cusub oo leh subag liin & khad garlic ah.', descEn: 'Pan-seared coastal kingfish fillet with lemon garlic glaze.', price: 38 },
              { id: 4, category: 'breakfast', icon: '🥞', titleSo: 'Wild Berry Organic Pancakes', titleEn: 'Wild Berry Organic Pancakes', descSo: 'Pancakes maangow iyo malab dabiici ah leh.', descEn: 'Organic oat pancakes topped with wild berries and natural honey.', price: 18 },
              { id: 5, category: 'drinks', icon: '🥭', titleSo: 'Tropical Mango & Mint Smoothie', titleEn: 'Tropical Mango & Mint Smoothie', descSo: 'Mango, passionfruit, iyo naanaac dabiici ah.', descEn: 'Freshly blended organic mango, passionfruit, and garden mint.', price: 12 },
              { id: 6, category: 'drinks', icon: '☕', titleSo: 'Cardamom Saffron Camel Milk Latte', titleEn: 'Cardamom Saffron Camel Milk Latte', descSo: 'Bunka geela ee lagu daray hayl iyo safraan.', descEn: 'Artisanal coffee with steamed organic camel milk, cardamom & saffron.', price: 9 }
            ]
              .filter(item => diningCategory === 'all' || item.category === diningCategory)
              .map((dish) => {
                const inCart = diningCart.find(c => c.id === dish.id);
                return (
                  <div key={dish.id} className="p-5 rounded-2xl bg-white border border-[#e2dac9] shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl p-2 rounded-xl bg-[#f8f6f0] border border-[#e2dac9] inline-block">{dish.icon}</span>
                        <span className="text-sm font-serif font-extrabold text-[#0a1f15]">${dish.price}</span>
                      </div>
                      <h4 className="font-serif font-bold text-[#0a1f15] text-sm">
                        {lang === 'so' ? dish.titleSo : dish.titleEn}
                      </h4>
                      <p className="text-[11px] text-[#526359] mt-1 leading-relaxed">
                        {lang === 'so' ? dish.descSo : dish.descEn}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#eee8da] flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#09422b] uppercase">Fresh Organic</span>
                      
                      {inCart ? (
                        <div className="flex items-center gap-2 bg-[#f4f0e6] p-1 rounded-xl border border-[#e2dac9]">
                          <button
                            onClick={() => {
                              if (inCart.qty === 1) {
                                setDiningCart(prev => prev.filter(c => c.id !== dish.id));
                              } else {
                                setDiningCart(prev => prev.map(c => c.id === dish.id ? { ...c, qty: c.qty - 1 } : c));
                              }
                            }}
                            className="w-6 h-6 rounded-lg bg-white text-black font-bold flex items-center justify-center text-xs shadow-sm cursor-pointer"
                          >
                            -
                          </button>
                          <span className="text-xs font-extrabold text-[#0a1f15] px-1">{inCart.qty}</span>
                          <button
                            onClick={() => {
                              setDiningCart(prev => prev.map(c => c.id === dish.id ? { ...c, qty: c.qty + 1 } : c));
                            }}
                            className="w-6 h-6 rounded-lg bg-[#0a1f15] text-white font-bold flex items-center justify-center text-xs shadow-sm cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            setDiningCart(prev => [...prev, { id: dish.id, titleSo: dish.titleSo, titleEn: dish.titleEn, price: dish.price, qty: 1, icon: dish.icon }]);
                          }}
                          style={{ backgroundColor: activePalette.swatchPrimary }}
                          className="px-3.5 py-1.5 rounded-xl text-white text-xs font-bold transition-all cursor-pointer shadow-sm hover:opacity-90 flex items-center gap-1"
                        >
                          <Plus className="w-3.5 h-3.5 text-[#d4af37]" />
                          <span>{lang === 'so' ? 'Dalbo' : 'Add'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Floating Cart Order Summary Strip if items present */}
          {diningCart.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-4 rounded-2xl bg-[#0a1f15] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#d4af37]/40 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#d4af37] text-black">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-white">
                    {lang === 'so' ? `${diningCart.reduce((a, b) => a + b.qty, 0)} Cunto oo Qolka Loo Dalbanayo` : `${diningCart.reduce((a, b) => a + b.qty, 0)} Items Selected For Villa Delivery`}
                  </h4>
                  <p className="text-[11px] text-[#d4af37]">
                    {lang === 'so' ? `Warta Guud: $${diningCart.reduce((a, b) => a + b.price * b.qty, 0)}` : `Total Bill: $${diningCart.reduce((a, b) => a + b.price * b.qty, 0)}`}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsDiningOrderOpen(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#d4af37] hover:bg-amber-400 text-black font-extrabold text-xs cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <Utensils className="w-4 h-4" />
                <span>{lang === 'so' ? 'Xaqiiji Dalabka Filla-da (Order To Villa)' : 'Confirm Villa Order'}</span>
              </button>
            </motion.div>
          )}

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4f0e6] text-xs font-bold uppercase tracking-wider border border-[#e2dac9] mb-3" style={{ color: activePalette.swatchPrimary }}>
            <Award className="w-4 h-4" style={{ color: activePalette.accentColor }} />
            <span>{lang === 'so' ? 'Rai\'yiga Macaamiisha' : 'Resident Testimonials'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a1f15]">
            {lang === 'so' ? 'Maxay Yiraahdeen Dadka Ku Nool Guryahan?' : 'Loved by Homeowners & Residents'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Khadra A. Nuur",
              role: "Villa De La Flora Owner",
              comment: "Waa guri indhaha u roon oo doog iyo qurux badan! Wadooyinka cagaaran iyo jawiga nabadda ah waxay qoyskayga ka dhigeen kuwo aad u farxad badan.",
              stars: 5
            },
            {
              name: "Cabdalla M. Xasan",
              role: "Emerald Palms Resident",
              comment: "Guryaha GreenHaven waxay leeyihiin naqshad casri ah oo galaas ah. Korontada qorraxda ee lagu rakibay waxay inaga badbaadisaa biilal waaweyn.",
              stars: 5
            },
            {
              name: "Sara E. Johnson",
              role: "Eco Haven Resident",
              comment: "The quiet tree-lined avenues and clean design made this the best home investment decision we have ever made.",
              stars: 5
            }
          ].map((rev, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white border border-[#e8e2d5] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-3" style={{ color: activePalette.accentColor }}>
                  {[...Array(rev.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-[#3a4d42] text-xs md:text-sm leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="border-t border-[#f2ebd9] pt-4 flex items-center gap-3">
                <div 
                  style={{ backgroundColor: activePalette.swatchPrimary }}
                  className="w-10 h-10 rounded-2xl text-white flex items-center justify-center font-serif font-bold text-sm"
                >
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-[#0a1f15] text-xs">{rev.name}</h4>
                  <p className="text-[10px] text-[#6b7d72]">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e2d5] bg-[#f4f0e6] pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Newsletter Banner */}
          <div className={`${activePalette.darkBg} text-white p-8 md:p-12 rounded-3xl mb-12 shadow-xl relative overflow-hidden border border-white/10 transition-colors duration-500`}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              <div className="max-w-xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider border border-white/20 mb-3">
                  <Mail className="w-3.5 h-3.5" style={{ color: activePalette.accentColor }} />
                  <span>{lang === 'so' ? 'Wararkii Ugu Dambeeyay Ee Guryaha' : 'Eco-Villa Updates'}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                  {lang === 'so'
                    ? 'Hel Ogeysiiska Guryaha Cagaaran Ee Cusub'
                    : 'Subscribe to Receive New Eco-Villa Listings'}
                </h3>
                <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                  {lang === 'so'
                    ? 'Soo geli email-kaaga si aan kuu soo dirno fillooyinka cusub, fursadaha kirada, iyo dalabyada gaarka ah todobaad kasta.'
                    : 'Enter your email address to receive curated updates on new green properties and exclusive launches.'}
                </p>
              </div>

              <div className="w-full lg:w-auto">
                {newsletterSubscribed ? (
                  <div className="bg-white/10 border border-white/20 p-4 rounded-2xl flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-6 h-6 shrink-0" style={{ color: activePalette.accentColor }} />
                    <div>
                      <p className="font-bold text-sm text-white">
                        {lang === 'so' ? 'Waad ku guulaysatay!' : 'Subscription Confirmed!'}
                      </p>
                      <p className="text-xs text-white/70">
                        {lang === 'so' ? 'Waan kuu soo diri doonaa wararka cusub.' : 'Thank you for joining our private list.'}
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    <div className="relative flex-1">
                      <Mail className="w-4 h-4 text-[#7d8c83] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder={lang === 'so' ? 'Soo geli email-kaaga...' : 'Enter your email address...'}
                        className="w-full pl-10 pr-4 py-3.5 bg-white text-[#11241a] placeholder-[#7d8c83] text-xs md:text-sm rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <button
                      type="submit"
                      style={{ backgroundColor: activePalette.accentColor }}
                      className="px-6 py-3.5 text-black font-extrabold text-xs md:text-sm rounded-2xl transition-all cursor-pointer whitespace-nowrap shadow-md hover:opacity-90"
                    >
                      {lang === 'so' ? 'Nagu Soo Biir' : 'Subscribe Now'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Copyright & Brand Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-[#e8e2d5]">
            <div className="flex items-center gap-3">
              <div 
                style={{ backgroundColor: activePalette.swatchPrimary }}
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-white"
              >
                <Trees className="w-5 h-5" style={{ color: activePalette.accentColor }} />
              </div>
              <div>
                <span className="font-serif font-bold text-[#0a1f15] text-lg">GreenHaven Estates</span>
                <p className="text-xs text-[#6b7d72]">Guryaha Cagaaran & Fillooyinka Indhaha U Roon</p>
              </div>
            </div>

            <p className="text-xs text-[#6b7d72] text-center">
              © {new Date().getFullYear()} GreenHaven Estates. All rights reserved. Professional Luxury Real Estate.
            </p>

            <div className="flex items-center gap-4 text-xs text-[#6b7d72]">
              <span className="hover:text-[#0a1f15] cursor-pointer">Xaqiijinta (Privacy)</span>
              <span>•</span>
              <span className="hover:text-[#0a1f15] cursor-pointer">Shuruudaha (Terms)</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Compare Bar */}
      {compareList.length > 0 && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 ${activePalette.darkBg} text-white p-4 rounded-3xl border border-white/20 shadow-2xl flex items-center gap-4 max-w-xl w-[92%]`}
        >
          <div className="flex -space-x-3">
            {compareList.map((p) => (
              <img key={p.id} src={p.image} alt="thumb" className="w-10 h-10 rounded-full border-2 border-black object-cover" />
            ))}
          </div>
          <div className="flex-1">
            <span className="text-xs font-bold block" style={{ color: activePalette.accentColor }}>{compareList.length} / 3 {lang === 'so' ? 'Guri La Doortay' : 'Estates Selected'}</span>
            <p className="text-[11px] text-white/80 truncate">
              {compareList.map(p => lang === 'so' ? p.titleSomali : p.title).join(', ')}
            </p>
          </div>
          <button
            onClick={() => setCompareList([])}
            className="p-2 text-xs text-rose-300 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}

      {/* AI Property Finder Quiz Modal */}
      {quizOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#e8e2d5] shadow-2xl relative text-[#11241a]">
            <button onClick={() => setQuizOpen(false)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#f4f0e6]">
              <X className="w-5 h-5 text-[#0a1f15]" />
            </button>

            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider mb-2" style={{ color: activePalette.swatchPrimary }}>
              <Sparkles className="w-4 h-4" style={{ color: activePalette.accentColor }} />
              <span>{lang === 'so' ? 'Talo Bixinta AI' : 'Smart Estate Finder'}</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#0a1f15] mb-2">
              {lang === 'so' ? 'Hel Guriga Ugu Habboon Qoyskaaga' : 'Find Your Dream Eco Villa'}
            </h3>

            {!quizResult ? (
              <form onSubmit={handleQuizSubmit} className="space-y-4 mt-4">
                <div>
                  <label className="text-xs font-bold text-[#11241a] block mb-1">
                    {lang === 'so' ? 'Tirada Sariiraha Aad Dooneyso' : 'Preferred Bedrooms'}
                  </label>
                  <select
                    value={quizBedrooms}
                    onChange={(e) => setQuizBedrooms(Number(e.target.value))}
                    className="w-full bg-[#f8f6f0] border border-[#e2dac9] rounded-xl p-3 text-sm font-bold text-[#11241a]"
                  >
                    <option value={3}>3 {lang === 'so' ? 'Sariiro' : 'Bedrooms'}</option>
                    <option value={4}>4 {lang === 'so' ? 'Sariiro' : 'Bedrooms'}</option>
                    <option value={5}>5+ {lang === 'so' ? 'Sariiro' : 'Bedrooms'}</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#11241a] block mb-1">
                    {lang === 'so' ? 'Nooca Guriga' : 'Property Category'}
                  </label>
                  <select
                    value={quizType}
                    onChange={(e) => setQuizType(e.target.value)}
                    className="w-full bg-[#f8f6f0] border border-[#e2dac9] rounded-xl p-3 text-sm font-bold text-[#11241a]"
                  >
                    <option value="villa">{lang === 'so' ? 'Filla (Glass Villa)' : 'Glass Villa'}</option>
                    <option value="estate">{lang === 'so' ? 'Guri Luxur ah (Estate)' : 'Luxury Estate'}</option>
                    <option value="eco">{lang === 'so' ? 'Eco Cabin' : 'Eco Cabin'}</option>
                  </select>
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: activePalette.swatchPrimary }}
                  className="w-full py-3.5 text-white font-extrabold text-sm rounded-xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-2 hover:opacity-90"
                >
                  <Zap className="w-4 h-4" style={{ color: activePalette.accentColor }} />
                  <span>{lang === 'so' ? 'Hel Guriga Ugu Habboon' : 'Find Matching Estate'}</span>
                </button>
              </form>
            ) : (
              <div className="space-y-4 mt-4">
                <div className={`${activePalette.darkBg} p-4 rounded-2xl text-white flex items-center gap-4`}>
                  <img src={quizResult.image} alt={quizResult.title} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase" style={{ color: activePalette.accentColor }}>{lang === 'so' ? 'Guriga Ugu Habboon:' : 'Top AI Recommendation:'}</span>
                    <h4 className="font-serif font-bold text-base text-white">{lang === 'so' ? quizResult.titleSomali : quizResult.title}</h4>
                    <p className="text-xs text-white/80">${quizResult.price.toLocaleString()}</p>
                  </div>
                </div>

                <button
                  onClick={() => { setSelectedProperty(quizResult); setQuizOpen(false); }}
                  style={{ backgroundColor: activePalette.accentColor }}
                  className="w-full py-3 text-black font-extrabold text-sm rounded-xl cursor-pointer shadow-md"
                >
                  {lang === 'so' ? 'Fiiri Faahfaahinta Buuxda' : 'View Full Details'}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* Detailed Property Modal & Interactive Tour */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-[2rem] max-w-4xl w-full my-8 overflow-hidden shadow-2xl relative text-[#11241a] border border-[#e8e2d5]">
            
            {/* Top Fixed Header Bar with Prominent Back to Website Button */}
            <div className="bg-[#f8f6f0] px-6 py-4 border-b border-[#e2dac9] flex items-center justify-between z-30 relative">
              <button
                onClick={() => setSelectedProperty(null)}
                className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#0a1f15] text-white hover:bg-black font-extrabold text-xs transition-all shadow-md cursor-pointer group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" style={{ color: activePalette.accentColor }} />
                <span>{lang === 'so' ? 'Ku Noqo Website-ka' : 'Back to Website'}</span>
              </button>

              <div className="flex items-center gap-3">
                <span className="text-xs font-serif font-bold text-[#526359] hidden sm:inline truncate max-w-xs">
                  {lang === 'so' ? selectedProperty.titleSomali : selectedProperty.title}
                </span>
                <button
                  onClick={() => setSelectedProperty(null)}
                  title={lang === 'so' ? 'Xidh / Ku Noqo' : 'Close / Go Back'}
                  className="p-2.5 rounded-2xl bg-white hover:bg-rose-600 hover:text-white text-[#0a1f15] border border-[#e2dac9] transition-all shadow-sm cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Gallery Image & Hotspots View */}
            <div className="relative h-72 md:h-96 bg-[#f0eadd]">
              {/* Overlay Floating Quick Back Button */}
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 left-4 z-20 px-4 py-2 rounded-2xl bg-black/80 hover:bg-black backdrop-blur-md text-white border border-white/20 text-xs font-extrabold flex items-center gap-2 shadow-2xl cursor-pointer transition-all hover:scale-105"
              >
                <ArrowLeft className="w-4 h-4" style={{ color: activePalette.accentColor }} />
                <span>{lang === 'so' ? 'Ku Noqo' : 'Back'}</span>
              </button>
              <img
                src={selectedProperty.gallery[activeGalleryIndex] || selectedProperty.image}
                alt={selectedProperty.title}
                className="w-full h-full object-cover"
              />

              {/* Hotspots */}
              {selectedProperty.hotspots?.map((hs) => (
                <div key={hs.id} style={{ left: `${hs.x}%`, top: `${hs.y}%` }} className="absolute -translate-x-1/2 -translate-y-1/2 z-20">
                  <button
                    onClick={() => setActiveHotspot(activeHotspot?.id === hs.id ? null : hs)}
                    style={{ backgroundColor: activePalette.accentColor }}
                    className="w-7 h-7 rounded-full text-black flex items-center justify-center font-bold text-xs shadow-lg ring-4 ring-white/40 cursor-pointer animate-pulse"
                  >
                    +
                  </button>

                  {activeHotspot?.id === hs.id && (
                    <div className={`${activePalette.darkBg} absolute bottom-9 left-1/2 -translate-x-1/2 w-48 p-3 rounded-xl text-white text-xs border border-white/20 shadow-2xl z-30`}>
                      <p className="font-bold" style={{ color: activePalette.accentColor }}>{lang === 'so' ? hs.titleSomali : hs.title}</p>
                      <p className="text-[10px] text-white/80 mt-1">{lang === 'so' ? hs.descSomali : hs.desc}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* Gallery Thumbnails */}
              {selectedProperty.gallery.length > 1 && (
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 overflow-x-auto z-10">
                  {selectedProperty.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGalleryIndex(idx)}
                      className={`w-16 h-12 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeGalleryIndex === idx ? 'border-white scale-105 shadow-md' : 'border-white/60 opacity-70'
                      }`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span 
                      style={{ backgroundColor: activePalette.swatchPrimary }}
                      className="px-3 py-1 rounded-lg text-white text-xs font-bold uppercase"
                    >
                      {lang === 'so' ? selectedProperty.badgeSomali : selectedProperty.badge}
                    </span>

                    {/* Speech Voice synthesis button */}
                    <button
                      onClick={() => handleSpeak(lang === 'so' ? selectedProperty.descriptionSomali : selectedProperty.description)}
                      className="px-3 py-1 rounded-lg bg-[#f4f0e6] border border-[#e2dac9] text-[#11241a] text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Volume2 className={`w-3.5 h-3.5 ${isSpeaking ? 'text-rose-600 animate-pulse' : 'text-black'}`} />
                      <span>{isSpeaking ? (lang === 'so' ? 'Jooji Shagalka' : 'Stop') : (lang === 'so' ? 'Dhagayso Somali' : 'Listen')}</span>
                    </button>

                    {/* Share Button with Ping Animation */}
                    <PropertyShareButton
                      prop={selectedProperty}
                      copiedId={copiedId}
                      handleShare={handleShare}
                      lang={lang}
                    />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a1f15] mt-3">
                    {lang === 'so' ? selectedProperty.titleSomali : selectedProperty.title}
                  </h2>
                  <p className="text-xs text-[#526359] flex items-center gap-1.5 mt-1">
                    <MapPin className="w-4 h-4" style={{ color: activePalette.swatchPrimary }} />
                    <span>{selectedProperty.location}</span>
                  </p>
                </div>

                {/* Specs Box */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#f8f6f0] border border-[#e2dac9] text-center">
                  <div>
                    <span className="text-[10px] text-[#6b7d72] uppercase font-bold block">{lang === 'so' ? 'Sariiro' : 'Bedrooms'}</span>
                    <span className="text-lg font-bold text-[#0a1f15] flex items-center justify-center gap-1 mt-0.5">
                      <Bed className="w-4 h-4" style={{ color: activePalette.swatchPrimary }} /> {selectedProperty.bedrooms}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6b7d72] uppercase font-bold block">{lang === 'so' ? 'Suuliyo' : 'Bathrooms'}</span>
                    <span className="text-lg font-bold text-[#0a1f15] flex items-center justify-center gap-1 mt-0.5">
                      <Bath className="w-4 h-4" style={{ color: activePalette.swatchPrimary }} /> {selectedProperty.bathrooms}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6b7d72] uppercase font-bold block">{lang === 'so' ? 'Balaadhka' : 'Area'}</span>
                    <span className="text-lg font-bold text-[#0a1f15] flex items-center justify-center gap-1 mt-0.5">
                      <Maximize className="w-4 h-4" style={{ color: activePalette.swatchPrimary }} /> {selectedProperty.sqft} sqft
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-[#0a1f15] text-sm mb-2">{lang === 'so' ? 'Sifaadka Guriga' : 'Property Description'}</h4>
                  <p className="text-[#3a4d42] text-xs md:text-sm leading-relaxed">
                    {lang === 'so' ? selectedProperty.descriptionSomali : selectedProperty.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0a1f15] text-sm mb-2">{lang === 'so' ? 'Faa\'iidooyinka Guriga' : 'Key Amenities'}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {(lang === 'so' ? selectedProperty.featuresSomali : selectedProperty.features).map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#11241a] bg-[#f8f6f0] p-2.5 rounded-xl border border-[#e2dac9] font-medium">
                        <Check className="w-4 h-4 shrink-0" style={{ color: activePalette.swatchPrimary }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Booking */}
              <div className="bg-[#f8f6f0] p-6 rounded-3xl border border-[#e2dac9] flex flex-col justify-between">
                <div>
                  <span className="text-xs text-[#6b7d72] block mb-1">{lang === 'so' ? 'Qiimaha Iibka / Kirada' : 'Total Price'}</span>
                  <p className="text-3xl font-serif font-bold text-[#0a1f15] mb-6">
                    ${selectedProperty.price.toLocaleString()}
                    {selectedProperty.isRent && <span className="text-xs font-sans font-normal text-[#6b7d72]"> /mo</span>}
                  </p>

                  {bookingSuccess ? (
                    <div className={`${activePalette.darkBg} p-4 rounded-2xl text-white text-center`}>
                      <CheckCircle2 className="w-8 h-8 mx-auto mb-2" style={{ color: activePalette.accentColor }} />
                      <h4 className="font-bold text-sm mb-1">
                        {lang === 'so' ? 'Booqashadaada Waa La Qabtay!' : 'Tour Request Received!'}
                      </h4>
                      <p className="text-xs text-white/80">
                        {lang === 'so' ? 'Kooxdayadu waxay kula soo xiriiri doontaa saacadaha soo socda.' : 'Our agent will call you shortly.'}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleBookingSubmit} className="space-y-3">
                      <h4 className="font-bold text-[#0a1f15] text-sm mb-1">
                        {lang === 'so' ? 'Ballanso Booqashada Guriga' : 'Schedule a Private Tour'}
                      </h4>

                      <div>
                        <label className="text-[11px] font-bold text-[#526359] block mb-1">{lang === 'so' ? 'Magacaaga' : 'Your Name'}</label>
                        <input
                          type="text"
                          required
                          value={bookingName}
                          onChange={(e) => setBookingName(e.target.value)}
                          placeholder="Muxammad Cumar"
                          className="w-full bg-white border border-[#e2dac9] rounded-xl px-3 py-2 text-xs text-[#11241a] focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-[#526359] block mb-1">{lang === 'so' ? 'Telefoonkaaga' : 'Phone Number'}</label>
                        <input
                          type="tel"
                          required
                          value={bookingPhone}
                          onChange={(e) => setBookingPhone(e.target.value)}
                          placeholder="+252 61 XXX XXXX"
                          className="w-full bg-white border border-[#e2dac9] rounded-xl px-3 py-2 text-xs text-[#11241a] focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-[#526359] block mb-1">{lang === 'so' ? 'Taariikhda Booqashada' : 'Preferred Date'}</label>
                        <input
                          type="date"
                          required
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full bg-white border border-[#e2dac9] rounded-xl px-3 py-2 text-xs text-[#11241a] focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>

                      <button
                        type="submit"
                        style={{ backgroundColor: activePalette.swatchPrimary }}
                        className="w-full py-3 text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer mt-4 hover:opacity-90"
                      >
                        <Calendar className="w-4 h-4" style={{ color: activePalette.accentColor }} />
                        <span>{lang === 'so' ? 'Xaqiiji Booqashada' : 'Confirm Appointment'}</span>
                      </button>
                    </form>
                  )}
                </div>

                <div className="pt-4 border-t border-[#e2dac9] mt-6 flex items-center justify-between text-xs text-[#6b7d72]">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#09422b]" /> +252 61 5000000
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#09422b]" /> Verified
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* 360° Virtual Walkthrough Tour Modal */}
      {virtualTourProp && (() => {
        const rooms = getPropertyTourRooms(virtualTourProp);
        const currentRoom = rooms[activeRoomIndex] || rooms[0];
        
        const dirs = ['N 0°', 'NE 45°', 'E 90°', 'SE 135°', 'S 180°', 'SW 225°', 'W 270°', 'NW 315°'];
        const dirIndex = Math.floor(((Math.abs(panAngle) % 360) / 45)) % 8;
        const currentCompassLabel = dirs[dirIndex];

        return (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              className="bg-[#0a1f15] text-white rounded-3xl max-w-5xl w-full border border-white/20 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[580px] md:min-h-[640px]"
            >
              {/* Top Bar Header */}
              <div className="p-4 sm:p-6 bg-[#032317]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#d4af37]">
                    <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '12s' }} />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#d4af37] font-extrabold uppercase tracking-widest block">
                      360° Interactive Walkthrough Tour
                    </span>
                    <h3 className="font-serif font-bold text-white text-lg sm:text-xl">
                      {lang === 'so' ? virtualTourProp.titleSomali : virtualTourProp.title}
                    </h3>
                  </div>
                </div>

                {/* Compass Direction Badge & Controls */}
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-[#d4af37]">
                    <Move className="w-3.5 h-3.5" />
                    <span>HEADING: {currentCompassLabel}</span>
                  </div>

                  <button
                    onClick={() => setVirtualTourProp(null)}
                    className="px-4 py-2 rounded-2xl bg-[#d4af37] text-black font-extrabold text-xs flex items-center gap-2 shadow-lg transition-all cursor-pointer hover:bg-white"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{lang === 'so' ? 'Ku Noqo Website-ka' : 'Back to Website'}</span>
                  </button>

                  <button
                    onClick={() => setVirtualTourProp(null)}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Center Panorama Interactive Viewport */}
              <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center select-none group min-h-[380px]">
                
                {/* Pan View Canvas Image */}
                <motion.img
                  key={currentRoom.id}
                  src={currentRoom.image}
                  alt={currentRoom.nameEn}
                  style={{
                    transform: `scale(1.25) translateX(${((panAngle % 360) - 180) * 0.8}px)`,
                  }}
                  transition={{ type: 'spring', stiffness: 80, damping: 20 }}
                  className="w-full h-full object-cover pointer-events-none transition-transform duration-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Room Title Floating Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 text-xs font-bold text-white flex items-center gap-2 shadow-xl z-10">
                  <Video className="w-4 h-4 text-[#d4af37]" />
                  <span>{lang === 'so' ? currentRoom.nameSo : currentRoom.nameEn}</span>
                </div>

                {/* Hotspot Markers on Panorama Room */}
                {currentRoom.hotspots.map((hs, idx) => (
                  <div
                    key={idx}
                    style={{ left: `${(hs.x + (panAngle % 50) - 25)}%`, top: `${hs.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <button
                      className="group/hs relative p-3 rounded-full bg-[#d4af37] text-black font-extrabold text-xs shadow-2xl ring-4 ring-[#d4af37]/40 animate-pulse cursor-pointer"
                    >
                      +
                      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-52 p-3 rounded-2xl bg-black/90 backdrop-blur-md border border-[#d4af37]/40 text-white text-xs shadow-2xl opacity-0 group-hover/hs:opacity-100 transition-opacity pointer-events-none z-30">
                        <p className="font-bold text-[#d4af37]">{lang === 'so' ? hs.titleSo : hs.titleEn}</p>
                        <p className="text-[10px] text-white/80 mt-1 leading-relaxed">{lang === 'so' ? hs.descSo : hs.descEn}</p>
                      </div>
                    </button>
                  </div>
                ))}

                {/* On-Screen Rotation Control Buttons */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-xl p-2.5 px-4 rounded-2xl border border-white/20 flex items-center gap-3 shadow-2xl z-20">
                  <button
                    onClick={() => { setIsAutoRotating(false); setPanAngle(prev => prev - 25); }}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-all"
                    title="Rotate Left"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsAutoRotating(!isAutoRotating)}
                    className="px-4 py-2 rounded-xl bg-[#d4af37] text-black font-extrabold text-xs flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    {isAutoRotating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isAutoRotating ? (lang === 'so' ? 'Jooji Auto-Spin' : 'Pause Auto-Spin') : (lang === 'so' ? 'Bise Auto-Spin' : 'Play Auto-Spin')}</span>
                  </button>

                  <button
                    onClick={() => { setIsAutoRotating(false); setPanAngle(prev => prev + 25); }}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-all"
                    title="Rotate Right"
                  >
                    <RotateCw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Bottom Bar: Room Switching Tabs & Guided Tour CTA */}
              <div className="p-4 sm:p-6 bg-[#032317]/90 backdrop-blur-md border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 z-20">
                
                {/* Room Selector Pills */}
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
                  {rooms.map((room, idx) => (
                    <button
                      key={room.id}
                      onClick={() => { setActiveRoomIndex(idx); setPanAngle(0); }}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                        activeRoomIndex === idx
                          ? 'bg-[#d4af37] text-black shadow-lg font-extrabold'
                          : 'bg-white/10 hover:bg-white/20 text-white'
                      }`}
                    >
                      <span>{lang === 'so' ? room.nameSo : room.nameEn}</span>
                    </button>
                  ))}
                </div>

                {/* Book Live Agent Tour Button */}
                <button
                  onClick={() => {
                    setSelectedProperty(virtualTourProp);
                    setVirtualTourProp(null);
                  }}
                  className="w-full md:w-auto px-5 py-3 rounded-2xl bg-white text-black font-extrabold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xl hover:bg-white/90"
                >
                  <Calendar className="w-4 h-4 text-[#d4af37]" />
                  <span>{lang === 'so' ? 'Ballanso Booqashada Tooska Ah' : 'Book In-Person Tour'}</span>
                </button>
              </div>

            </motion.div>
          </div>
        );
      })()}

      {/* Floating VIP Concierge Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsVIPOpen(!isVIPOpen)}
          className="px-4 py-3 rounded-full bg-[#0a1f15] text-white shadow-2xl border-2 border-[#d4af37] flex items-center gap-2.5 cursor-pointer font-bold text-xs"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-[#d4af37]" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -top-0.5 -right-0.5 animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute -top-0.5 -right-0.5" />
          </div>
          <span className="hidden sm:inline">{lang === 'so' ? 'VIP Khabiirka Guriga' : 'VIP Estate Concierge'}</span>
        </motion.button>
      </div>

      {/* VIP Concierge Modal Drawer */}
      {isVIPOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-[#e8e2d5] shadow-2xl relative text-[#11241a]"
          >
            <button
              onClick={() => setIsVIPOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#f4f0e6] cursor-pointer"
            >
              <X className="w-5 h-5 text-[#0a1f15]" />
            </button>

            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider mb-1 text-[#09422b]">
              <PhoneCall className="w-4 h-4 text-[#d4af37]" />
              <span>{lang === 'so' ? 'Khabiirka Guryaha VIP' : 'VIP Concierge Service'}</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#0a1f15] mb-2">
              {lang === 'so' ? 'La Hadal Khabiirka Guryaha' : 'Speak With Our Estate Director'}
            </h3>

            <p className="text-xs text-[#526359] leading-relaxed mb-6">
              {lang === 'so'
                ? 'Hel talo bixin gaar ah oo la xidhiidha iibka ama kirada filla cagaaran, iyo baabuur VIP gaar ah oo laguugu qaado booqashada.'
                : 'Request a private chauffeur luxury tour or speak directly with our senior eco-estate portfolio manager.'}
            </p>

            {!vipSuccess ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setVipSuccess(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-xs font-bold text-[#11241a] block mb-1">
                    {lang === 'so' ? 'Magacaaga Buuxa' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={vipName}
                    onChange={(e) => setVipName(e.target.value)}
                    placeholder="e.g. Muxammad Cumar"
                    className="w-full bg-[#f8f6f0] border border-[#e2dac9] rounded-xl p-3 text-xs font-bold text-[#11241a]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#11241a] block mb-1">
                    {lang === 'so' ? 'Nambarka Taleefonka (WhatsApp)' : 'Phone / WhatsApp'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={vipPhone}
                    onChange={(e) => setVipPhone(e.target.value)}
                    placeholder="+252 61 XXX XXXX"
                    className="w-full bg-[#f8f6f0] border border-[#e2dac9] rounded-xl p-3 text-xs font-bold text-[#11241a]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#11241a] block mb-1">
                    {lang === 'so' ? 'Adeegga Aad Dooneyso' : 'Requested VIP Service'}
                  </label>
                  <select
                    value={vipService}
                    onChange={(e) => setVipService(e.target.value)}
                    className="w-full bg-[#f8f6f0] border border-[#e2dac9] rounded-xl p-3 text-xs font-bold text-[#11241a]"
                  >
                    <option value="chauffeur">{lang === 'so' ? '🏎️ Baabuur VIP Lexus (Chauffeur Tour)' : '🏎️ VIP Lexus Chauffeur Tour'}</option>
                    <option value="call">{lang === 'so' ? '📞 Telefoon Call La Hadal Director-ka' : '📞 Direct Phone Consultation'}</option>
                    <option value="whatsapp">{lang === 'so' ? '💬 WhatsApp Instant Consultation' : '💬 WhatsApp Direct Chat'}</option>
                  </select>
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: activePalette.swatchPrimary }}
                  className="w-full py-3.5 text-white font-extrabold text-xs rounded-xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-2 hover:opacity-90"
                >
                  <Send className="w-4 h-4" style={{ color: activePalette.accentColor }} />
                  <span>{lang === 'so' ? 'Dir Codsiga VIP' : 'Submit VIP Request'}</span>
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-[#0a1f15] text-white text-center space-y-3 border border-[#d4af37]/40">
                <CheckCircle2 className="w-12 h-12 text-[#d4af37] mx-auto animate-bounce" />
                <h4 className="font-serif font-bold text-lg text-white">
                  {lang === 'so' ? 'Codsigaaga Waa La Hoolay!' : 'VIP Request Confirmed!'}
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  {lang === 'so'
                    ? `Mahadsanid ${vipName}! Khabiirka guryaha GreenHaven ayaa kugula soo xidhiidhi doona taleefonka ${vipPhone} 15-ka daqiiqo ee soo socda.`
                    : `Thank you ${vipName}! Our Senior Estate Director will contact you at ${vipPhone} within 15 minutes.`}
                </p>
                <button
                  onClick={() => {
                    setIsVIPOpen(false);
                    setVipSuccess(false);
                  }}
                  className="mt-2 px-6 py-2.5 rounded-xl bg-[#d4af37] text-black text-xs font-extrabold cursor-pointer"
                >
                  {lang === 'so' ? 'Aad Ban U Mahadsanahay' : 'Close'}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* In-Villa Dining Modal */}
      {isDiningOrderOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#e8e2d5] shadow-2xl relative text-[#11241a]"
          >
            <button
              onClick={() => { setIsDiningOrderOpen(false); setDiningOrderPlaced(false); }}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#f4f0e6] cursor-pointer"
            >
              <X className="w-5 h-5 text-[#0a1f15]" />
            </button>

            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider mb-1 text-[#09422b]">
              <ChefHat className="w-4 h-4 text-[#d4af37]" />
              <span>{lang === 'so' ? 'Dalabka Cuntada Filla-da (In-Villa Dining)' : 'In-Villa Dining Checkout'}</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#0a1f15] mb-2">
              {lang === 'so' ? 'Xaqiijinta Dalabka Maqaayadda' : 'Confirm Order Delivery'}
            </h3>

            {!diningOrderPlaced ? (
              <div className="space-y-4">
                {/* Order Summary Items */}
                <div className="p-4 rounded-2xl bg-[#f8f6f0] border border-[#e2dac9] space-y-2 max-h-40 overflow-y-auto">
                  {diningCart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center text-xs font-bold text-[#11241a]">
                      <span>{item.icon} {lang === 'so' ? item.titleSo : item.titleEn} (x{item.qty})</span>
                      <span>${item.price * item.qty}</span>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-[#e2dac9] flex justify-between text-sm font-extrabold text-[#0a1f15]">
                    <span>{lang === 'so' ? 'Warta Guud:' : 'Total:'}</span>
                    <span className="text-[#09422b]">${diningCart.reduce((a, b) => a + b.price * b.qty, 0)}</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#11241a] block mb-1">
                    {lang === 'so' ? 'Dooro Filla-da ama Suite-kaaga' : 'Select Your Villa / Suite'}
                  </label>
                  <select
                    value={diningVillaNo}
                    onChange={(e) => setDiningVillaNo(e.target.value)}
                    className="w-full bg-[#f8f6f0] border border-[#e2dac9] rounded-xl p-3 text-xs font-bold text-[#11241a]"
                  >
                    <option value="Villa #101">Villa #101 - Glass Horizon</option>
                    <option value="Villa #102">Villa #102 - Emerald Palms</option>
                    <option value="Villa #105">Villa #105 - Pine Road Sanctuary</option>
                    <option value="Villa #108">Villa #108 - Serene Valley</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#11241a] block mb-1">
                    {lang === 'so' ? 'Fariin Gaar Ah / Talooyinka Tagayrka' : 'Special Culinary Instructions'}
                  </label>
                  <input
                    type="text"
                    value={diningNotes}
                    onChange={(e) => setDiningNotes(e.target.value)}
                    placeholder={lang === 'so' ? 'm.s. Xawaash yar, Biyo diiran keen...' : 'e.g. Extra lemon, no spicy sauce...'}
                    className="w-full bg-[#f8f6f0] border border-[#e2dac9] rounded-xl p-3 text-xs font-bold text-[#11241a]"
                  />
                </div>

                <button
                  onClick={() => setDiningOrderPlaced(true)}
                  style={{ backgroundColor: activePalette.swatchPrimary }}
                  className="w-full py-3.5 text-white font-extrabold text-xs rounded-xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-2 hover:opacity-90"
                >
                  <Utensils className="w-4 h-4 text-[#d4af37]" />
                  <span>{lang === 'so' ? 'Toos U Dir Dalabka Kitchen-ka' : 'Send Order To Kitchen'}</span>
                </button>
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-[#0a1f15] text-white text-center space-y-3 border border-[#d4af37]/40">
                <ChefHat className="w-12 h-12 text-[#d4af37] mx-auto animate-bounce" />
                <h4 className="font-serif font-bold text-lg text-white">
                  {lang === 'so' ? 'Dalabkaaga Waa La Hoolay!' : 'Kitchen Order Confirmed!'}
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  {lang === 'so'
                    ? `Mahadsanid! Tagayrka GreenHaven Bistro wuxuu bilaabay karinta cuntadaada. Waxaa si toos ah laguugu keeni doonaa ${diningVillaNo} 20 daqiiqo gudahood.`
                    : `Thank you! Executive Chef has received your order and is preparing it now. Delivery to ${diningVillaNo} in ~20 minutes.`}
                </p>
                <button
                  onClick={() => {
                    setIsDiningOrderOpen(false);
                    setDiningOrderPlaced(false);
                    setDiningCart([]);
                  }}
                  className="mt-2 px-6 py-2.5 rounded-xl bg-[#d4af37] text-black text-xs font-extrabold cursor-pointer"
                >
                  {lang === 'so' ? 'U Ku Noqo Website-ka' : 'Back to Website'}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}

    </div>
  );
}
