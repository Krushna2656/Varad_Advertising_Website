import React, { useState, useRef } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Sparkles,
  ChevronRight,
  Sun,
  Moon,
  Upload,
  Power,
  Shield,
  Send,
  Lock,
  Menu,
  X,
  Wrench,
  FolderOpen,
  LayoutDashboard,
  TrendingUp,
  Inbox
} from 'lucide-react';

// Brand Configuration
const BRAND_CONFIG = {
  name: "VARAD ADVERTISING",
  tagline: "The Perfect Advertising Solution",
  phone: "8767874817",
  phoneFormatted: "+91 87678 74817",
  email: "contact@varadadvertising.com",
  address: "Bolhai Mala, Colony No. 3, Jadhavwadi, Chikhali, Pune - 411062",
  city: "Pune & PCMC",
  whatsappUrl: (message) => `https://wa.me/918767874817?text=${encodeURIComponent(message)}`
};

// Official Circular Varad Logo Component matching client's artwork
const VaradLogoIcon = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 200 200" className={`${className} shrink-0 drop-shadow-md`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="96" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="3" />
    <path d="M100 20 L130 38 V72 L100 90 L70 72 V38 Z" fill="#F8FAFC" opacity="0.6" />
    <path d="M140 50 L170 68 V102 L140 120 L110 102 V68 Z" fill="#F8FAFC" opacity="0.5" />
    <path d="M60 50 L90 68 V102 L60 120 L30 102 V68 Z" fill="#F8FAFC" opacity="0.5" />

    <path d="M72 45 C75 25 60 20 54 35 C48 50 62 68 76 68 C80 58 70 50 72 45 Z" fill="#E62758" />
    <path d="M76 30 C86 16 75 10 68 20 C62 30 70 46 80 50 C82 42 74 36 76 30 Z" fill="#FA4616" />
    <path d="M54 50 C40 40 32 50 42 62 C50 72 68 70 70 60 C64 56 58 52 54 50 Z" fill="#F57C00" />
    <path d="M42 68 C30 65 26 78 38 86 C50 94 65 85 64 75 C56 74 48 70 42 68 Z" fill="#FFA726" />
    <path d="M38 90 C28 92 28 106 42 110 C56 112 66 98 60 88 C52 90 44 90 38 90 Z" fill="#FFB74D" />

    <circle cx="65" cy="85" r="13" fill="#D81B60" />
    <text x="65" y="85" fill="#FFFFFF" fontSize="6.5" fontWeight="900" textAnchor="middle" dominantBaseline="middle" fontFamily="sans-serif">
      वरद
    </text>
    <text x="65" y="91" fill="#FFFFFF" fontSize="4.5" fontWeight="700" textAnchor="middle" dominantBaseline="middle" fontFamily="sans-serif">
      ग्रुप
    </text>

    <g fill="#D81B60">
      <path d="M68 98 L138 98 C141 98 143 100 143 104 C143 106 140 107 137 107 L70 107 Z" />
      <path d="M72 105 C70 115 72 125 80 130 C88 135 96 128 96 118 C96 110 88 105 80 105 L72 105 Z M82 114 C86 114 89 117 89 121 C89 124 86 126 83 126 C80 126 78 124 78 120 C78 116 80 114 82 114 Z" />
      <path d="M99 105 C101 113 105 120 112 124 L104 135 L96 135 L104 122 C99 118 97 112 97 105 Z" />
      <path d="M117 105 L132 105 C136 114 133 122 125 125 C122 126 120 128 122 133 C127 142 145 152 160 146 C168 142 173 134 182 140 C175 152 160 156 148 152 C132 147 118 136 115 122 C113 115 114 109 117 105 Z" />
    </g>

    <text x="96" y="142" fill="#E65100" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="'Noto Sans Devanagari', sans-serif" letterSpacing="0.5">
      ॲडव्हरटायझिंग
    </text>

    <circle cx="120" cy="151" r="3.2" fill="#FFEB3B" />
    <circle cx="128" cy="151" r="3.2" fill="#E91E63" />
    <circle cx="136" cy="151" r="3.2" fill="#00BCD4" />
    <circle cx="144" cy="151" r="3.2" fill="#212121" />

    <text x="100" y="174" fill="#374151" fontSize="6.5" fontStyle="italic" fontWeight="600" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif">
      The Perfect Advertising Solution
    </text>
  </svg>
);

const IMAGES = {
  heroGold: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80",
  varadSign: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80",
  marathiMatoshri: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1000&q=80",
  diwaliNeon: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80",
  cafeLightbox: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
  titanStore: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1000&q=80",
  lenskartRetail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
  flexPrinter: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1000&q=80",
  outdoorBillboard: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1000&q=80"
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [photoManagerOpen, setPhotoManagerOpen] = useState(false);

  // Admin / Owner Authentication State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminPinModalOpen, setAdminPinModalOpen] = useState(false);
  const [adminPinInput, setAdminPinInput] = useState("");
  const [pinError, setPinError] = useState("");

  // Owner Inquiries / Orders State
  const [inquiries, setInquiries] = useState([
    {
      id: "ORD-1042",
      name: "Ramesh Shinde",
      phone: "9822334455",
      shopName: "Om Sai Jewellers",
      signType: "3D Acrylic LED Letters",
      dimensions: "12 x 3.5 Feet",
      date: "Today, 11:30 AM",
      status: "New Lead",
      message: "Need 24K gold mirror acrylic with warm halo backlight for new showroom."
    },
    {
      id: "ORD-1041",
      name: "Anil Gaikwad",
      phone: "9766554433",
      shopName: "Cafe Cream & Shakes",
      signType: "Silicone Neon Glow Sign",
      dimensions: "6 x 4 Feet",
      date: "Yesterday, 4:15 PM",
      status: "Site Visit Done",
      message: "Custom coffee cup neon shape in warm amber tone."
    },
    {
      id: "ORD-1040",
      name: "Dr. Sandeep More",
      phone: "9890123456",
      shopName: "More Multi-Specialty Clinic",
      signType: "ACP Elevation Cladding",
      dimensions: "20 x 4 Feet",
      date: "28 Oct 2026",
      status: "Fabrication",
      message: "Navy blue ACP cladding with routed white LED letters."
    }
  ]);

  // Dynamic Site Photos state
  const [siteImages, setSiteImages] = useState({
    heroGold: IMAGES.heroGold,
    varadSign: IMAGES.varadSign,
    marathiMatoshri: IMAGES.marathiMatoshri,
    diwaliNeon: IMAGES.diwaliNeon,
    cafeLightbox: IMAGES.cafeLightbox,
    titanStore: IMAGES.titanStore,
    lenskartRetail: IMAGES.lenskartRetail,
    flexPrinter: IMAGES.flexPrinter,
    outdoorBillboard: IMAGES.outdoorBillboard
  });

  const servicesList = [
    {
      id: "acrylic-3d",
      imageKey: "varadSign",
      name: "3D Acrylic LED Letters",
      category: "Storefront Signs",
      desc: "Laser-cut 3mm/5mm acrylic letters with Samsung LED modules inside. Waterproof & 5-year sun resistance.",
      badge: "Most Popular"
    },
    {
      id: "neon-signs",
      imageKey: "diwaliNeon",
      name: "Silicone Neon Glow Signs",
      category: "Interior & Festive",
      desc: "12V unbreakable flexible LED neon on clear acrylic backboard. Eye-catching glow for cafes, events & decor.",
      badge: "Trending"
    },
    {
      id: "acp-elevation",
      imageKey: "titanStore",
      name: "ACP Storefront Cladding",
      category: "Retail Facade",
      desc: "Complete shop front transformation using premium composite panels (ACP) with routed LED backlight lettering.",
      badge: "Architectural"
    },
    {
      id: "lightbox-board",
      imageKey: "cafeLightbox",
      name: "Backlit LED Lightbox Signs",
      category: "Cafes & Restaurants",
      desc: "Custom warm glow acrylic lightbox signboards with silhouette and edge-lit halo lighting.",
      badge: "Premium Finish"
    },
    {
      id: "flex-printing",
      imageKey: "flexPrinter",
      name: "Large Format Flex & Vinyl Printing",
      category: "High-Speed Print Factory",
      desc: "Heavy-duty outdoor flex banners, star flex, vinyl stickers & backlit cloth on advanced solvent printers.",
      badge: "In-House Machine"
    },
    {
      id: "hoardings",
      imageKey: "outdoorBillboard",
      name: "Hoardings & Highway Unipoles",
      category: "Mass Media",
      desc: "Giant high-visibility billboards and steel structures across Chikhali, Bhosari, and PCMC highways.",
      badge: "High Impact"
    }
  ];

  const portfolioList = [
    {
      id: 1,
      imageKey: "heroGold",
      title: "VARAD ADVERTISING HQ SIGN",
      category: "3D Metal & Acrylic Halo Lit",
      client: "Workshop Facade, Chikhali",
      spec: "Dual-color 3D Letters + Warm 3000K Silhouette Halo Backlight"
    },
    {
      id: 2,
      imageKey: "marathiMatoshri",
      title: "मातोश्री (MATOSHRI) SIGNBOARD",
      category: "Marathi Acrylic LED Sign",
      client: "Commercial Board, Pune",
      spec: "Devanagari Calligraphy CNC Cut Acrylic + Warm LED Glow"
    },
    {
      id: 3,
      imageKey: "titanStore",
      title: "TITAN SHOWROOM STOREFRONT",
      category: "ACP Facade & 3D Frontlit Letters",
      client: "Retail Showroom Installation",
      spec: "Deep Crimson Gloss ACP + High-Lumen Pure White LED Modules"
    },
    {
      id: 4,
      imageKey: "cafeLightbox",
      title: "CAFE AROMA LIGHTBOX",
      category: "Architectural Lightbox Sign",
      client: "Boutique Cafe & Bakery",
      spec: "Warm Amber Silhouette Silhouette Glow with Side Illumination"
    },
    {
      id: 5,
      imageKey: "diwaliNeon",
      title: "HAPPY DIWALI FESTIVE NEON",
      category: "Silicone LED Neon Art",
      client: "Interior & Event Decor",
      spec: "Handcrafted 12V Flame Neon Diya on Acrylic Base"
    },
    {
      id: 6,
      imageKey: "outdoorBillboard",
      title: "PREMIUM RESIDENTIAL HOARDING",
      category: "Outdoor Billboard & Star Flex",
      client: "Real Estate Highway Unipole",
      spec: "Heavy-duty Weatherproof Star Flex with Floodlight Mounting"
    }
  ];

  // Signboard Studio State
  const [boardText, setBoardText] = useState("VARAD ADVERTISING");
  const [taglineText, setTaglineText] = useState("24K GOLD • DIAMONDS • POLKI");
  const [signStyle, setSignStyle] = useState("frontlit");
  const [wallTexture, setWallTexture] = useState("slate");
  const [isNightMode, setIsNightMode] = useState(true);
  const [lightColor, setLightColor] = useState("#FF641F");
  const [boardLayout, setBoardLayout] = useState("split");
  const [uploadedImage, setUploadedImage] = useState(IMAGES.cafeLightbox);
  const [imageGlowOn, setImageGlowOn] = useState(true);

  // Quote Form State
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    shopName: "",
    signType: "3D Acrylic LED Letters",
    dimensions: "10 x 3 Feet",
    message: ""
  });

  const slotFileInputRef = useRef(null);
  const [activeSlotKey, setActiveSlotKey] = useState(null);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPinInput === "1234") {
      setIsAdminLoggedIn(true);
      setAdminPinModalOpen(false);
      setAdminPinInput("");
      setPinError("");
      setPhotoManagerOpen(true);
    } else {
      setPinError("Invalid PIN! Only owner/admin can change website images.");
    }
  };

  const openAdminOrPrompt = (action) => {
    if (isAdminLoggedIn) {
      if (typeof action === 'function') action();
      else setPhotoManagerOpen(true);
    } else {
      setPinError("");
      setAdminPinInput("");
      setAdminPinModalOpen(true);
    }
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = (msg) => {
    window.open(BRAND_CONFIG.whatsappUrl(msg), '_blank');
  };

  const handleSlotImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && activeSlotKey) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setSiteImages(prev => ({
          ...prev,
          [activeSlotKey]: ev.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerSlotUpload = (key) => {
    setActiveSlotKey(key);
    if (slotFileInputRef.current) {
      slotFileInputRef.current.click();
    }
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const newInquiry = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      name: quoteForm.name,
      phone: quoteForm.phone,
      shopName: quoteForm.shopName || "N/A",
      signType: quoteForm.signType,
      dimensions: quoteForm.dimensions || "Custom",
      date: "Just now",
      status: "New Lead",
      message: quoteForm.message || "Customer requested price quotation via web form."
    };
    setInquiries(prev => [newInquiry, ...prev]);

    const msg = `Hello Varad Advertising!\n\n*NEW SIGNAGE QUOTE REQUEST*\n- *Client Name:* ${quoteForm.name}\n- *Phone:* ${quoteForm.phone}\n- *Shop Name:* ${quoteForm.shopName || 'N/A'}\n- *Sign Type:* ${quoteForm.signType}\n- *Dimensions:* ${quoteForm.dimensions}\n- *Details:* ${quoteForm.message || 'Standard quote required'}\n\nPlease share price estimate and site visit schedule.`;
    openWhatsApp(msg);
  };

  const sendStudioToWhatsApp = () => {
    const msg = `Hello Varad Advertising!\n\nI designed my signboard in your Live Studio:\n- *Shop Title:* ${boardText}\n- *Tagline:* ${taglineText}\n- *Sign Style:* ${signStyle.toUpperCase()}\n- *Layout Mode:* ${boardLayout}\n- *Light Color:* ${lightColor}\n\nPlease quote me the fabrication price for this design.`;
    openWhatsApp(msg);
  };

  const getWallBg = () => {
    switch (wallTexture) {
      case 'brick':
        return isNightMode ? 'bg-[#181210]' : 'bg-[#7A3A28]';
      case 'wood':
        return isNightMode ? 'bg-[#151210]' : 'bg-[#4A3222]';
      case 'concrete':
        return isNightMode ? 'bg-[#1A1C1E]' : 'bg-[#6C757D]';
      case 'slate':
      default:
        return isNightMode ? 'bg-[#0B0D10]' : 'bg-[#2A2E35]';
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#191C22] font-sans antialiased flex flex-col selection:bg-[#FF641F] selection:text-white">
      
      {/* Hidden input for slot uploads */}
      <input
        type="file"
        ref={slotFileInputRef}
        onChange={handleSlotImageUpload}
        accept="image/*"
        className="hidden"
      />

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#111317] text-white/90 text-xs py-2 px-4 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF641F] animate-ping"></span>
            <span className="text-white font-semibold">VARAD ADVERTISING — In-House Signboard & Banner Factory</span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:inline text-xs text-gray-300">Jadhavwadi, Chikhali, Pune</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${BRAND_CONFIG.phone}`} className="text-gray-300 hover:text-white transition flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-[#FF641F]" />
              <span>{BRAND_CONFIG.phoneFormatted}</span>
            </a>
            <button
              onClick={() => openWhatsApp("Hello Varad Advertising, I would like to inquire about signboard prices.")}
              className="bg-[#FF641F] hover:bg-[#e85514] text-white px-2.5 py-0.5 rounded text-[11px] font-bold transition flex items-center gap-1"
            >
              <MessageSquare className="w-3 h-3 fill-white" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION HEADER */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-8 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <VaradLogoIcon className="w-12 h-12 group-hover:scale-105 transition-transform" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-black text-[#111317] tracking-tight">
                    VARAD ADVERTISING
                  </span>
                </div>
                <div className="text-[11px] font-bold text-[#E65100] tracking-wide">
                  The Perfect Advertising Solution
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 font-semibold text-sm">
              <button
                onClick={() => navigateTo('home')}
                className={`px-3 py-2 rounded-xl transition ${currentPage === 'home' ? 'text-[#FF641F] bg-orange-50 font-bold' : 'text-gray-700 hover:text-gray-950 hover:bg-gray-100'}`}
              >
                Home
              </button>
              <button
                onClick={() => navigateTo('services')}
                className={`px-3 py-2 rounded-xl transition ${currentPage === 'services' ? 'text-[#FF641F] bg-orange-50 font-bold' : 'text-gray-700 hover:text-gray-950 hover:bg-gray-100'}`}
              >
                Services
              </button>
              <button
                onClick={() => navigateTo('studio')}
                className={`px-3 py-2 rounded-xl transition flex items-center gap-1.5 ${currentPage === 'studio' ? 'text-[#FF641F] bg-orange-50 font-bold' : 'text-gray-700 hover:text-gray-950 hover:bg-gray-100'}`}
              >
                <Sparkles className="w-4 h-4 text-[#FF641F]" />
                <span>Live Studio</span>
              </button>
              <button
                onClick={() => navigateTo('portfolio')}
                className={`px-3 py-2 rounded-xl transition ${currentPage === 'portfolio' ? 'text-[#FF641F] bg-orange-50 font-bold' : 'text-gray-700 hover:text-gray-950 hover:bg-gray-100'}`}
              >
                Portfolio
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className={`px-3 py-2 rounded-xl transition ${currentPage === 'contact' ? 'text-[#FF641F] bg-orange-50 font-bold' : 'text-gray-700 hover:text-gray-950 hover:bg-gray-100'}`}
              >
                Contact & Factory
              </button>
            </nav>

            {/* Right Action & Owner Login */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => openWhatsApp("Hello Varad Advertising, I would like to get a free signboard quotation.")}
                className="bg-[#111317] hover:bg-[#FF641F] text-white px-4 py-2.5 rounded-full text-xs font-bold transition shadow flex items-center gap-1.5"
              >
                <span>Get Free Quote</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              {isAdminLoggedIn ? (
                <button
                  onClick={() => navigateTo('admin')}
                  className={`px-4 py-2 rounded-full text-xs font-black transition flex items-center gap-1.5 border ${
                    currentPage === 'admin'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow'
                      : 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                  }`}
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>Owner Dashboard</span>
                </button>
              ) : (
                <button
                  onClick={() => openAdminOrPrompt(() => navigateTo('admin'))}
                  className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-300 px-3.5 py-2 rounded-full text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
                  title="Owner & Admin Access"
                >
                  <Lock className="w-3.5 h-3.5 text-[#FF641F]" />
                  <span>Owner Login</span>
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 shadow-lg">
            <button
              onClick={() => navigateTo('home')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold text-gray-800 hover:bg-orange-50 hover:text-[#FF641F]"
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('services')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold text-gray-800 hover:bg-orange-50 hover:text-[#FF641F]"
            >
              Services (3D Acrylic, Neon, Flex)
            </button>
            <button
              onClick={() => navigateTo('studio')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold text-[#FF641F] bg-orange-50 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Live Signboard Studio</span>
            </button>
            <button
              onClick={() => navigateTo('portfolio')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold text-gray-800 hover:bg-orange-50 hover:text-[#FF641F]"
            >
              Our Portfolio & Gallery
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold text-gray-800 hover:bg-orange-50 hover:text-[#FF641F]"
            >
              Contact & Workshop Location
            </button>
            <div className="pt-2">
              {isAdminLoggedIn ? (
                <button
                  onClick={() => navigateTo('admin')}
                  className="w-full bg-emerald-700 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 mb-2 shadow"
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>Open Owner Dashboard</span>
                </button>
              ) : (
                <button
                  onClick={() => openAdminOrPrompt(() => navigateTo('admin'))}
                  className="w-full bg-zinc-900 text-white hover:bg-zinc-800 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 mb-2"
                >
                  <Lock className="w-3.5 h-3.5 text-[#FF641F]" />
                  <span>Owner Login (View Orders & Leads)</span>
                </button>
              )}
              <a
                href={BRAND_CONFIG.whatsappUrl("Hello Varad Advertising, I would like to order a signboard.")}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 rounded-xl text-xs font-bold"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp (+91 87678 74817)</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN ROUTED VIEWS */}
      <main className="flex-grow">
        
        {/* VIEW 1: HOME PAGE */}
        {currentPage === 'home' && (
          <div>
            {/* HERO SECTION */}
            <section className="relative bg-gradient-to-b from-white to-gray-50 py-16 lg:py-24 border-b border-gray-200 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Hero Content */}
                  <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#FF641F] text-xs font-bold tracking-wide">
                      <span className="w-2 h-2 rounded-full bg-[#FF641F] animate-ping"></span>
                      DIRECT FACTORY PRICES • JADHAVWADI CHIKHALI
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-black text-[#111317] tracking-tight leading-tight">
                      Premium Signage. <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF641F] via-[#E65100] to-amber-600">
                        Powerful Branding.
                      </span>
                    </h1>

                    <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                      We manufacture illuminated 3D LED letters, silicone flex neon signs, ACP storefront claddings, and large-format flex banners. Handcrafted with high-grade Samsung waterproof LEDs.
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                      <button
                        onClick={() => navigateTo('studio')}
                        className="bg-[#FF641F] hover:bg-[#e85514] text-white px-7 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 flex items-center gap-2 text-sm"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Live Signboard Studio</span>
                      </button>

                      <button
                        onClick={() => navigateTo('portfolio')}
                        className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-800 px-6 py-3.5 rounded-full font-bold transition text-sm flex items-center gap-2"
                      >
                        <span>View Portfolio</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>

                    {/* Trust Highlights */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                      <div>
                        <div className="text-2xl font-black text-gray-900">100%</div>
                        <div className="text-xs text-gray-500 font-semibold">In-House Production</div>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-gray-900">IP67</div>
                        <div className="text-xs text-gray-500 font-semibold">Waterproof LEDs</div>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-gray-900">Pune</div>
                        <div className="text-xs text-gray-500 font-semibold">& PCMC Installation</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Hero Graphic Showcase */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 group">
                      <img
                        src={siteImages.heroGold}
                        alt="3D Gold Letters Sign Board Installation"
                        className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700 opacity-95"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = IMAGES.heroGold;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                      
                      {/* Floating Badge */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-gray-200 shadow flex items-center gap-2.5">
                        <VaradLogoIcon className="w-9 h-9" />
                        <div className="text-left">
                          <div className="text-[10px] font-black tracking-wider text-[#FF641F]">VARAD WORKSHOP</div>
                          <div className="text-xs font-bold text-gray-900">Pune & PCMC Service</div>
                        </div>
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 text-left">
                        <span className="bg-[#FF641F] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                          Featured Installation
                        </span>
                        <h3 className="text-xl font-black">Solid Gold 3D Letters with Warm Backlight</h3>
                        <p className="text-xs text-gray-300">
                          Precision laser-bent metal letters with commercial IP67 Samsung warm LED back-bleed.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* QUICK SERVICES PREVIEW */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                <div>
                  <span className="text-[#FF641F] font-bold text-xs uppercase tracking-widest">WHAT WE MANUFACTURE</span>
                  <h2 className="text-3xl font-black text-gray-900 mt-1">Our Core Signage Lineup</h2>
                </div>
                <div className="flex items-center gap-4">
                  {isAdminLoggedIn && (
                    <button
                      onClick={() => setPhotoManagerOpen(true)}
                      className="text-xs bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition"
                    >
                      <Upload className="w-3.5 h-3.5 text-[#FF641F]" />
                      <span>Change Lineup Images</span>
                    </button>
                  )}
                  <button
                    onClick={() => navigateTo('services')}
                    className="text-sm font-bold text-[#FF641F] hover:underline flex items-center gap-1"
                  >
                    <span>Explore all services</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesList.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-52 overflow-hidden bg-gray-100">
                        <img
                          src={siteImages[item.imageKey] || item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <span className="absolute top-3 left-3 bg-[#111317] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                          {item.badge}
                        </span>
                        {isAdminLoggedIn && (
                          <button
                            onClick={() => triggerSlotUpload(item.imageKey)}
                            className="absolute bottom-2 right-2 bg-black/75 hover:bg-[#FF641F] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow backdrop-blur-sm transition"
                          >
                            <Upload className="w-3 h-3" />
                            <span>Change Image</span>
                          </button>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="text-[11px] font-bold text-[#FF641F] uppercase tracking-wider">{item.category}</div>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{item.name}</h3>
                        <p className="text-gray-500 text-xs mt-2 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <button
                        onClick={() => openWhatsApp(`Hello Varad Advertising, I would like to get details for ${item.name}.`)}
                        className="w-full bg-gray-100 hover:bg-[#FF641F] hover:text-white text-gray-800 text-xs font-bold py-2.5 rounded-xl transition flex items-center justify-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Enquire on WhatsApp</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* VIEW 2: LIVE SIGNBOARD STUDIO */}
        {currentPage === 'studio' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#FF641F] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                INTERACTIVE DESIGN TOOL
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900">
                Design Your Signboard Live
              </h1>
              <p className="text-gray-500 text-xs sm:text-sm">
                Type your brand name, select illumination styles, upload logos, and send the mockup directly to WhatsApp.
              </p>
            </div>

            {/* CONTROLS BAR */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Shop / Business Name</label>
                  <input
                    type="text"
                    value={boardText}
                    onChange={(e) => setBoardText(e.target.value)}
                    placeholder="e.g. VARAD ADVERTISING"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF641F] focus:border-transparent text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Tagline / Subtitle</label>
                  <input
                    type="text"
                    value={taglineText}
                    onChange={(e) => setTaglineText(e.target.value)}
                    placeholder="e.g. 24K GOLD • DIAMONDS • POLKI"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF641F] focus:border-transparent text-sm font-semibold"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500">Sign Style:</span>
                  {['frontlit', 'neon', 'steel'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setSignStyle(st)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition ${
                        signStyle === st
                          ? 'bg-[#111317] text-white shadow'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {st === 'frontlit' ? '3D Acrylic Glow' : st === 'neon' ? 'Silicone Neon' : 'Brushed Steel'}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsNightMode(!isNightMode)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                      isNightMode ? 'bg-indigo-950 text-indigo-200' : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {isNightMode ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
                    <span>{isNightMode ? 'Night Mode (Lights ON)' : 'Daylight Mode'}</span>
                  </button>

                  <button
                    onClick={() => setImageGlowOn(!imageGlowOn)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                      imageGlowOn ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    <Power className="w-3.5 h-3.5" />
                    <span>Poster Backlight {imageGlowOn ? 'ON' : 'OFF'}</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500">Light Color:</span>
                  {[
                    { color: '#FF641F', name: 'Electric Orange' },
                    { color: '#FFB800', name: 'Warm Amber' },
                    { color: '#00F0FF', name: 'Ice Cyan' },
                    { color: '#FFFFFF', name: 'Pure White' },
                    { color: '#FF007A', name: 'Neon Pink' }
                  ].map((c) => (
                    <button
                      key={c.color}
                      onClick={() => setLightColor(c.color)}
                      style={{ backgroundColor: c.color }}
                      className={`w-6 h-6 rounded-full border-2 transition transform hover:scale-110 ${
                        lightColor === c.color ? 'border-black scale-110 shadow-md' : 'border-gray-200'
                      }`}
                      title={c.name}
                    />
                  ))}
                </div>

                <button
                  onClick={sendStudioToWhatsApp}
                  className="bg-[#FF641F] hover:bg-[#e85514] text-white px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send Design for WhatsApp Quote</span>
                </button>
              </div>
            </div>

            {/* REALISTIC ARCHITECTURAL SIGNBOARD DISPLAY */}
            <div className={`relative rounded-3xl p-6 sm:p-14 pt-12 min-h-[480px] flex items-center justify-center transition-all duration-700 shadow-2xl overflow-visible border-8 border-[#1A1E26] ${getWallBg()}`}>
              <div className="absolute top-2 left-1/4 w-8 h-3 bg-zinc-700 rounded-t shadow"></div>
              <div className="absolute top-2 right-1/4 w-8 h-3 bg-zinc-700 rounded-t shadow"></div>
              
              {isNightMode && (
                <>
                  <div className="absolute top-5 left-1/4 w-40 h-64 -translate-x-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none blur-xl"></div>
                  <div className="absolute top-5 right-1/4 w-40 h-64 -translate-x-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none blur-xl"></div>
                </>
              )}

              <div className="relative w-full max-w-4xl bg-[#14171E] border-2 border-zinc-700 rounded-2xl p-6 sm:p-10 pt-10 sm:pt-12 shadow-2xl overflow-visible">
                <div className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full bg-zinc-500 border border-zinc-300 z-10"></div>
                <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-zinc-500 border border-zinc-300 z-10"></div>
                <div className="absolute bottom-3 left-3 w-2.5 h-2.5 rounded-full bg-zinc-500 border border-zinc-300 z-10"></div>
                <div className="absolute bottom-3 right-3 w-2.5 h-2.5 rounded-full bg-zinc-500 border border-zinc-300 z-10"></div>

                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1A1E26] text-[#FF641F] border border-orange-500/40 px-4 py-1 rounded-full text-[10px] sm:text-[11px] font-black tracking-widest flex items-center gap-2 shadow-xl z-20 whitespace-nowrap">
                  <VaradLogoIcon className="w-4 h-4 shrink-0" />
                  <span>MANUFACTURED BY VARAD ADVERTISING</span>
                </div>

                <div className={`grid items-center gap-6 mt-2 ${boardLayout === 'split' ? 'grid-cols-1 md:grid-cols-12' : 'grid-cols-1'}`}>
                  <div className={`text-center ${boardLayout === 'split' ? 'md:col-span-8 md:text-left' : 'w-full'}`}>
                    <h2
                      className={`font-black tracking-tight text-3xl sm:text-5xl lg:text-6xl transition-all duration-300 ${
                        signStyle === 'neon'
                          ? 'font-serif tracking-widest'
                          : 'font-sans'
                      }`}
                      style={{
                        color: signStyle === 'steel' ? '#E2E8F0' : lightColor,
                        textShadow: isNightMode && imageGlowOn
                          ? `0 0 10px ${lightColor}, 0 0 25px ${lightColor}, 0 0 50px ${lightColor}`
                          : '2px 2px 4px rgba(0,0,0,0.8)'
                      }}
                    >
                      {boardText || "VARAD ADVERTISING"}
                    </h2>

                    {taglineText && (
                      <p
                        className="mt-3 text-xs sm:text-base font-bold tracking-widest uppercase transition-all"
                        style={{
                          color: isNightMode && imageGlowOn ? '#FFFFFF' : '#9CA3AF',
                          textShadow: isNightMode && imageGlowOn
                            ? `0 0 8px rgba(255,255,255,0.8)`
                            : 'none'
                        }}
                      >
                        {taglineText}
                      </p>
                    )}

                    <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
                      <span className="text-[10px] font-semibold text-zinc-400 bg-black/40 px-2.5 py-1 rounded border border-white/10">
                        {signStyle.toUpperCase()} ILLUMINATION
                      </span>
                      <span className="text-[10px] font-semibold text-zinc-400 bg-black/40 px-2.5 py-1 rounded border border-white/10">
                        SAMSUNG IP67 WATERPROOF
                      </span>
                    </div>
                  </div>

                  {(boardLayout === 'split' || boardLayout === 'full') && (
                    <div className={`relative ${boardLayout === 'split' ? 'md:col-span-4' : 'mt-4 max-w-md mx-auto w-full'}`}>
                      <div
                        className={`rounded-xl overflow-hidden border-2 transition-all duration-500 relative ${
                          imageGlowOn && isNightMode
                            ? 'border-white shadow-[0_0_35px_rgba(255,255,255,0.4)]'
                            : 'border-zinc-700 opacity-60'
                        }`}
                        style={{
                          boxShadow: imageGlowOn && isNightMode ? `0 0 30px ${lightColor}` : 'none'
                        }}
                      >
                        <img
                          src={uploadedImage}
                          alt="Signboard Banner Graphic"
                          className="w-full h-44 object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = IMAGES.cafeLightbox;
                          }}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${imageGlowOn && isNightMode ? 'from-black/40 to-transparent' : 'bg-black/60'}`}></div>
                        
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-white font-bold">
                          <span>BACKLIT POSTER</span>
                          <span className={`px-1.5 py-0.5 rounded text-[9px] ${imageGlowOn ? 'bg-emerald-600' : 'bg-red-600'}`}>
                            {imageGlowOn ? 'LIGHT ON' : 'LIGHT OFF'}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: SERVICES */}
        {currentPage === 'services' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[#FF641F] font-bold text-xs uppercase tracking-widest">COMPLETE SIGNAGE CATALOG</span>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-1">Our Manufacturing Services</h1>
              <p className="text-gray-500 text-sm mt-2">All signs are fabricated with computerized CNC & fiber lasers in our Chikhali factory.</p>
              {isAdminLoggedIn && (
                <div className="pt-3">
                  <button
                    onClick={() => setPhotoManagerOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs transition"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#FF641F]" />
                    <span>Owner Mode: Replace Service Photos</span>
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((srv) => (
                <div key={srv.id} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between">
                  <div>
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={siteImages[srv.imageKey]}
                        alt={srv.name}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-black/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                        {srv.badge}
                      </span>
                      {isAdminLoggedIn && (
                        <button
                          onClick={() => triggerSlotUpload(srv.imageKey)}
                          className="absolute bottom-2 right-2 bg-black/75 hover:bg-[#FF641F] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow backdrop-blur-sm transition"
                        >
                          <Upload className="w-3 h-3" />
                          <span>Change Image</span>
                        </button>
                      )}
                    </div>
                    <div className="p-6">
                      <span className="text-[10px] font-bold text-[#FF641F] uppercase">{srv.category}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-1">{srv.name}</h3>
                      <p className="text-gray-500 text-xs mt-2 leading-relaxed">{srv.desc}</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => openWhatsApp(`Hello Varad Advertising, I would like to enquire about ${srv.name}.`)}
                      className="w-full bg-[#111317] hover:bg-[#FF641F] text-white text-xs font-bold py-3 rounded-xl transition flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>Request Free Quote</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: PORTFOLIO */}
        {currentPage === 'portfolio' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[#FF641F] font-bold text-xs uppercase tracking-widest">RECENT WORK SHOWCASE</span>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-1">Our Installed Projects</h1>
              <p className="text-gray-500 text-sm mt-2">Explore commercial boards, restaurant signs, and outdoor advertisements fabricated by us.</p>
              {isAdminLoggedIn && (
                <div className="pt-3">
                  <button
                    onClick={() => setPhotoManagerOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs transition"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#FF641F]" />
                    <span>Owner Mode: Replace Project Photos</span>
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioList.map((proj) => (
                <div key={proj.id} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition group">
                  <div className="relative h-64 overflow-hidden bg-gray-900">
                    <img
                      src={siteImages[proj.imageKey]}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    {isAdminLoggedIn && (
                      <button
                        onClick={() => triggerSlotUpload(proj.imageKey)}
                        className="absolute top-3 right-3 bg-black/75 hover:bg-[#FF641F] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow backdrop-blur-sm transition z-10"
                      >
                        <Upload className="w-3 h-3" />
                        <span>Change Image</span>
                      </button>
                    )}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-bold text-[#FF641F] bg-black/60 px-2 py-0.5 rounded">{proj.category}</span>
                      <h3 className="font-black text-lg mt-1">{proj.title}</h3>
                      <p className="text-[11px] text-gray-300 mt-0.5">{proj.client}</p>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between border-t border-gray-100 bg-gray-50">
                    <span className="text-[10px] text-gray-500 font-semibold">{proj.spec}</span>
                    <button
                      onClick={() => openWhatsApp(`Hello Varad Advertising, I like your work on ${proj.title}. Can you share pricing for a similar project?`)}
                      className="text-xs font-bold text-[#FF641F] hover:underline"
                    >
                      Enquire Similar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 5: CONTACT & WORKSHOP */}
        {currentPage === 'contact' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[#FF641F] font-bold text-xs uppercase tracking-widest">GET IN TOUCH</span>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-1">Visit Factory or Get Quote</h1>
              <p className="text-gray-500 text-sm mt-2">Our workshop is located in Jadhavwadi, Chikhali. Walk in to see acrylic letter samples in person.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b pb-4">
                  <VaradLogoIcon className="w-12 h-12" />
                  <div>
                    <h3 className="text-xl font-black text-gray-900 leading-tight">VARAD ADVERTISING</h3>
                    <span className="text-xs text-[#E65100] font-bold">The Perfect Advertising Solution</span>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-gray-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FF641F] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">Workshop Address:</div>
                      <p className="text-gray-600 mt-0.5">{BRAND_CONFIG.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#FF641F] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">Direct Phone / WhatsApp:</div>
                      <a href={`tel:${BRAND_CONFIG.phone}`} className="text-gray-900 font-bold hover:underline block text-sm">
                        {BRAND_CONFIG.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#FF641F] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">Working Hours:</div>
                      <p className="text-gray-600 mt-0.5">Monday – Sunday: 9:00 AM – 9:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={BRAND_CONFIG.whatsappUrl("Hello Varad Advertising! I want to visit your workshop.")}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-2xl font-bold text-sm shadow transition"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>WhatsApp Direct (+91 87678 74817)</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-black text-gray-900">Request Quotation & Site Survey</h3>
                <p className="text-gray-500 text-xs mt-1">Fill this quick form to send your project requirements directly to our estimation team.</p>

                <form onSubmit={handleQuoteSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={quoteForm.name}
                        onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                        placeholder="e.g. Ramesh Shinde"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#FF641F] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={quoteForm.phone}
                        onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#FF641F] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Shop / Business Name</label>
                      <input
                        type="text"
                        value={quoteForm.shopName}
                        onChange={(e) => setQuoteForm({ ...quoteForm, shopName: e.target.value })}
                        placeholder="e.g. Om Sai Jewellers"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#FF641F] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Signage Type</label>
                      <select
                        value={quoteForm.signType}
                        onChange={(e) => setQuoteForm({ ...quoteForm, signType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#FF641F] focus:border-transparent"
                      >
                        <option value="3D Acrylic LED Letters">3D Acrylic LED Letters</option>
                        <option value="Silicone Neon Glow Sign">Silicone Neon Glow Sign</option>
                        <option value="ACP Elevation Cladding">ACP Elevation Cladding</option>
                        <option value="Backlit Lightbox Board">Backlit Lightbox Board</option>
                        <option value="Large Flex Banner Printing">Large Flex Banner Printing</option>
                        <option value="Hoarding & Outdoor Billboard">Hoarding & Outdoor Billboard</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Approximate Dimensions (Width x Height)</label>
                    <input
                      type="text"
                      value={quoteForm.dimensions}
                      onChange={(e) => setQuoteForm({ ...quoteForm, dimensions: e.target.value })}
                      placeholder="e.g. 10 x 3 Feet"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#FF641F] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Project Details / Message</label>
                    <textarea
                      rows={3}
                      value={quoteForm.message}
                      onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                      placeholder="Specify font style, light preference or urgent delivery requirements..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#FF641F] focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FF641F] hover:bg-[#e85514] text-white py-3.5 rounded-xl font-bold text-sm shadow transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Quote Request on WhatsApp</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 6: OWNER DASHBOARD & ORDERS CONSOLE */}
        {currentPage === 'admin' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
            <div className="bg-[#14171E] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#FF641F] flex items-center justify-center shadow-lg">
                  <LayoutDashboard className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl font-black">Owner Management Portal</h1>
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                      Live
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                    VARAD ADVERTISING • Jadhavwadi Chikhali • Leads, Customer Orders & Media Control
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setPhotoManagerOpen(true)}
                  className="flex-1 sm:flex-none bg-orange-600 hover:bg-orange-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow"
                >
                  <Upload className="w-4 h-4" />
                  <span>Update Photos</span>
                </button>
                <button
                  onClick={() => {
                    setIsAdminLoggedIn(false);
                    navigateTo('home');
                  }}
                  className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-4 py-2.5 rounded-xl text-xs font-bold transition"
                >
                  Logout
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 uppercase">Total Inquiries</span>
                  <Inbox className="w-4 h-4 text-[#FF641F]" />
                </div>
                <div className="text-3xl font-black text-gray-900">{inquiries.length}</div>
                <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+100% web inquiries active</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 uppercase">Fabrication Jobs</span>
                  <Wrench className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-3xl font-black text-gray-900">12</div>
                <div className="text-[11px] text-gray-500 font-semibold">Active in Chikhali Factory</div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 uppercase">WhatsApp Route</span>
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-xl font-black text-gray-900">+91 87678 74817</div>
                <div className="text-[11px] text-emerald-600 font-semibold">Direct WhatsApp Connected</div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 uppercase">Website Status</span>
                  <Shield className="w-4 h-4 text-indigo-600" />
                </div>
                <div className="text-xl font-black text-emerald-700">Protected</div>
                <div className="text-[11px] text-gray-500 font-semibold">Visitors cannot edit pictures</div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-black text-gray-900">Customer Orders & Inquiries</h3>
                  <p className="text-gray-500 text-xs mt-0.5">Real-time quote requests sent by clients through the website.</p>
                </div>
                <span className="bg-orange-100 text-[#FF641F] text-xs font-bold px-3 py-1 rounded-full">
                  {inquiries.length} Active Leads
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-gray-600">
                  <thead className="bg-gray-50 text-gray-800 uppercase font-bold text-[10px] tracking-wider border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4">Client & Shop</th>
                      <th className="px-6 py-4">Required Signage</th>
                      <th className="px-6 py-4">Dimensions</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Date / Time</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 font-medium">
                    {inquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-gray-50/70 transition">
                        <td className="px-6 py-4">
                          <div className="font-bold text-gray-900 text-sm">{inq.name}</div>
                          <div className="text-xs text-[#FF641F] font-bold">{inq.shopName}</div>
                          <a href={`tel:${inq.phone}`} className="text-gray-500 hover:underline flex items-center gap-1 mt-0.5">
                            <Phone className="w-3 h-3 text-gray-400" />
                            <span>{inq.phone}</span>
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-bold text-gray-800">{inq.signType}</div>
                          <div className="text-gray-500 line-clamp-1 max-w-xs text-[11px] mt-0.5">{inq.message}</div>
                        </td>
                        <td className="px-6 py-4 font-bold text-gray-700">
                          {inq.dimensions}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-black ${
                            inq.status === 'New Lead'
                              ? 'bg-amber-100 text-amber-800'
                              : inq.status === 'Fabrication'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {inq.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
                          {inq.date}
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <button
                            onClick={() => openWhatsApp(`Hello ${inq.name}, I am replying from Varad Advertising regarding your enquiry for ${inq.signType} (${inq.dimensions}). When can we schedule a site survey?`)}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition inline-flex items-center gap-1 shadow-sm"
                          >
                            <MessageSquare className="w-3 h-3 fill-white" />
                            <span>Reply WhatsApp</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF641F] flex items-center justify-center font-bold">
                    <FolderOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-base">Media & Picture Replacement</h4>
                    <p className="text-xs text-gray-500">Quickly upload fresh board photographs</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  You can change the pictures for 3D Gold Letters, Marathi Boards, Neon Signs, and Machine Photos anytime from your local computer or phone.
                </p>
                <button
                  onClick={() => setPhotoManagerOpen(true)}
                  className="w-full bg-[#111317] hover:bg-[#FF641F] text-white py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow"
                >
                  <Upload className="w-4 h-4 text-[#FF641F]" />
                  <span>Open Photo Manager Dialog</span>
                </button>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-base">Workshop Information Check</h4>
                    <p className="text-xs text-gray-500">Live contact points shown on the website</p>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-gray-700 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div><strong>Address:</strong> Bolhai Mala Colony No. 3, Jadhavwadi, Chikhali, Pune</div>
                  <div><strong>Phone:</strong> +91 87678 74817</div>
                  <div><strong>WhatsApp Link:</strong> wa.me/918767874817</div>
                </div>
                <button
                  onClick={() => navigateTo('home')}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl text-xs font-bold transition"
                >
                  Return to Website Public View
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ADMIN / OWNER PIN MODAL */}
      {adminPinModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-[#FF641F] flex items-center justify-center">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-black text-base text-gray-900">Owner Access</h3>
                  <p className="text-[11px] text-gray-500">Enter PIN to manage website photos</p>
                </div>
              </div>
              <button
                onClick={() => setAdminPinModalOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 text-gray-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Enter 4-Digit Owner PIN</label>
                <input
                  type="password"
                  autoFocus
                  maxLength={6}
                  value={adminPinInput}
                  onChange={(e) => setAdminPinInput(e.target.value)}
                  placeholder="Demo PIN: 1234"
                  className="w-full text-center tracking-widest text-lg font-black px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF641F] focus:border-transparent"
                />
                {pinError && (
                  <p className="text-red-600 text-xs mt-1.5 font-medium">{pinError}</p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setAdminPinModalOpen(false)}
                  className="w-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-xl font-bold text-xs transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-[#FF641F] hover:bg-[#e85514] text-white py-2.5 rounded-xl font-bold text-xs transition shadow"
                >
                  Unlock Access
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PHOTO UPLOADER & MANAGER MODAL (OWNER ONLY) */}
      {photoManagerOpen && isAdminLoggedIn && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-[#FF641F]" />
                <div>
                  <h3 className="font-black text-lg text-gray-900">Owner Photo Manager</h3>
                  <p className="text-xs text-gray-500">Only you can view and edit these images</p>
                </div>
              </div>
              <button
                onClick={() => setPhotoManagerOpen(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-900 flex items-center justify-between">
              <div>
                🔒 <strong>Owner Session Active:</strong> Normal website visitors will not see any "Change Image" buttons.
              </div>
              <button
                onClick={() => {
                  setIsAdminLoggedIn(false);
                  setPhotoManagerOpen(false);
                }}
                className="bg-zinc-800 text-white px-2.5 py-1 rounded text-[10px] font-bold ml-2"
              >
                Logout
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { key: 'heroGold', label: 'Homepage Hero Photo (3D Gold Letters)', current: siteImages.heroGold },
                { key: 'varadSign', label: 'Acrylic LED Signboard', current: siteImages.varadSign },
                { key: 'marathiMatoshri', label: 'Marathi Signboard (मातोश्री)', current: siteImages.marathiMatoshri },
                { key: 'diwaliNeon', label: 'Silicone Neon Sign (Happy Diwali)', current: siteImages.diwaliNeon },
                { key: 'cafeLightbox', label: 'Cafe Lightbox Board (Cafe Aroma)', current: siteImages.cafeLightbox },
                { key: 'titanStore', label: 'ACP Elevation Storefront (Titan)', current: siteImages.titanStore },
                { key: 'flexPrinter', label: 'Flex Banner Printer Machine', current: siteImages.flexPrinter },
                { key: 'outdoorBillboard', label: 'Outdoor Hoarding Billboard', current: siteImages.outdoorBillboard }
              ].map((slot) => (
                <div key={slot.key} className="border border-gray-200 rounded-2xl p-3 flex flex-col justify-between space-y-2 bg-gray-50">
                  <div className="flex items-center gap-3">
                    <img
                      src={slot.current}
                      alt={slot.label}
                      className="w-16 h-14 rounded-lg object-cover border border-gray-300"
                    />
                    <div className="text-xs font-bold text-gray-800 line-clamp-2">
                      {slot.label}
                    </div>
                  </div>
                  <button
                    onClick={() => triggerSlotUpload(slot.key)}
                    className="w-full bg-[#111317] hover:bg-[#252932] text-white text-xs font-bold py-2 rounded-xl transition flex items-center justify-center gap-1.5 shadow"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#FF641F]" />
                    <span>Upload New Photo</span>
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setPhotoManagerOpen(false)}
                className="bg-[#FF641F] hover:bg-[#e85514] text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow"
              >
                Done / View Live Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={BRAND_CONFIG.whatsappUrl("Hello Varad Advertising! I want to get a quote for a shop board.")}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-700 text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-2xl transition transform hover:scale-110 group"
        aria-label="WhatsApp Chat"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
        <span className="absolute right-16 bg-[#111317] text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Chat on WhatsApp (+91 87678 74817)
        </span>
      </a>

      {/* FOOTER */}
      <footer className="bg-white text-gray-600 border-t border-gray-200 pt-12 pb-24 lg:pb-10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-3">
                <VaradLogoIcon className="w-10 h-10" />
                <div>
                  <span className="text-xl font-black text-[#111317] block leading-tight">VARAD ADVERTISING</span>
                  <span className="text-[10px] text-[#E65100] font-semibold">The Perfect Advertising Solution</span>
                </div>
              </div>
              <p className="leading-relaxed text-gray-500">
                In-house manufacturing of 3D Acrylic letters, waterproof LED signs, silicone flex neon, ACP elevations, and flex banners.
              </p>
              <div className="text-gray-900 font-bold">
                Serving Chikhali, Jadhavwadi, Bhosari, PCMC & Pune.
              </div>
            </div>

            <div className="lg:col-span-3 space-y-2">
              <h4 className="font-bold text-gray-900 text-sm">Quick Links</h4>
              <ul className="space-y-1.5 text-gray-500">
                <li><button onClick={() => navigateTo('home')} className="hover:text-[#FF641F] transition">Home</button></li>
                <li><button onClick={() => navigateTo('services')} className="hover:text-[#FF641F] transition">Services</button></li>
                <li><button onClick={() => navigateTo('studio')} className="hover:text-[#FF641F] transition">Live Signboard Studio</button></li>
                <li><button onClick={() => navigateTo('portfolio')} className="hover:text-[#FF641F] transition">Our Portfolio</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-[#FF641F] transition">Contact & Factory</button></li>
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-2">
              <h4 className="font-bold text-gray-900 text-sm">Workshop Address</h4>
              <p className="text-gray-500 leading-relaxed">
                Bolhai Mala, Colony No. 3, Jadhavwadi, Chikhali, Pune - 411062
              </p>
              <div className="pt-1">
                <a
                  href={`tel:${BRAND_CONFIG.phone}`}
                  className="font-bold text-[#FF641F] hover:underline"
                >
                  +91 87678 74817
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-400">
            <div>© 2026 VARAD ADVERTISING. All rights reserved.</div>
            <div className="text-gray-500">
              The Perfect Advertising Solution • Jadhavwadi, Chikhali
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;