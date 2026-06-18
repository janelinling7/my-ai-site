import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Sparkles, ShieldCheck, Microscope, 
  ArrowRight, Star, Quote, ChevronRight, ChevronLeft,
  Calendar, Phone, User
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import logoImg from '../imports/yazhengsuo-logo.png';

// --- Unsplash Images ---
const HERO_BG = "/images/hero-bg.jpg";
const SERVICE_1 = "https://images.unsplash.com/photo-1700760933574-9f0f4ea9aa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMHNraW5jYXJlJTIwY2xpbmljfGVufDF8fHx8MTc4MTY4NDk1MHww&ixlib=rb-4.1.0&q=80&w=1080";
const SERVICE_2 = "https://images.unsplash.com/photo-1655026392641-bf283a5f12d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHNlcnVtJTIwZmFjZXxlbnwxfHx8fDE3ODE2ODQ5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const SERVICE_3 = "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3ODE1MjkxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080";
const TEAM_1 = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3ODE1MjA2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const TEAM_2 = "https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZlbWFsZSUyMGRvY3RvcnxlbnwxfHx8fDE3ODE2ODQ5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const CASE_1 = "https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmZWN0JTIwY2xlYXIlMjBza2luJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzgxNjg0OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#141210] text-[#FAF9F6] font-['Noto_Sans_SC',sans-serif] selection:bg-[#B8941D]/30 selection:text-[#FAF9F6] overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#141210]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <ImageWithFallback src={logoImg} alt="亚整所 Logo" className="h-10 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-col">
              <span className="font-['Playfair_Display',serif] text-xl font-semibold tracking-wider text-[#B8941D]">YAZHENG</span>
              <span className="text-xs tracking-[0.3em] text-[#A8B5C1] mt-0.5">医疗美容</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {['关于品牌', '核心项目', '专家团队', '真实案例', '口碑见证'].map((item) => (
              <a key={item} href={`#${item}`} className="relative group text-sm tracking-widest hover:text-[#D4AF37] transition-colors">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gradient-to-r from-[#B8941D] to-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <CTAButton text="预约专属方案" />
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-[#FAF9F6]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#141210] pt-24 px-6"
          >
            <div className="flex flex-col gap-8 text-center">
              {['关于品牌', '核心项目', '专家团队', '真实案例', '口碑见证'].map((item) => (
                <a key={item} href={`#${item}`} onClick={() => setMobileMenuOpen(false)} className="text-xl tracking-widest text-[#FAF9F6] hover:text-[#B8941D]">
                  {item}
                </a>
              ))}
              <div className="mt-8 flex justify-center">
                <CTAButton text="预约专属方案" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Animated Background */}
        <motion.div 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#141210]/60 via-[#141210]/40 to-[#141210] z-10" />
          <ImageWithFallback src={HERO_BG} alt="Luxury spa facial" className="w-full h-full object-cover" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-['Playfair_Display',serif] italic text-[#B8941D] text-xl md:text-2xl mb-6 tracking-wide"
          >
            Redefining Aesthetic Excellence
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] leading-tight mb-8"
          >
            时光雕刻<br/>
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#B8941D] via-[#D4AF37] to-[#B8941D]">自然之美</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <CTAButton text="开启焕变之旅" size="lg" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] tracking-[0.3em] text-[#A8B5C1] uppercase font-['Montserrat',sans-serif]">Discover</span>
          <div className="w-[1px] h-12 bg-[#A8B5C1]/30 overflow-hidden relative">
            <motion.div 
              animate={{ y: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-full bg-[#B8941D]"
            />
          </div>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section id="关于品牌" className="py-32 px-6 lg:px-12 bg-[#141210] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-6xl"
        >
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl tracking-[0.15em] mb-4 font-light">
              <span className="text-[#B8941D] font-['Playfair_Display',serif] italic mr-4">Brand</span>
              核心优势
            </h2>
            <div className="w-12 h-[1px] bg-[#B8941D] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16">
            <FeatureCard 
              icon={<Sparkles className="w-8 h-8 text-[#D4AF37]" />}
              title="高定美学体系"
              desc="拒绝流水线操作，每一位客户都由美学专家团队进行1V1深度面诊，定制专属比例与轮廓方案。"
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-[#D4AF37]" />}
              title="严苛安全标准"
              desc="采用国际FDA及CFDA双重认证的尖端仪器与材料，万级层流手术室，为您的焕变保驾护航。"
            />
            <FeatureCard 
              icon={<Microscope className="w-8 h-8 text-[#D4AF37]" />}
              title="前沿抗衰技术"
              desc="同步全球顶尖医疗美容科技，汇聚行业核心技术，打造微创、自然、持久的年轻化体验。"
            />
          </div>
        </motion.div>
      </section>

      {/* Star Projects */}
      <section id="核心项目" className="py-32 px-6 lg:px-12 bg-gradient-to-b from-[#141210] to-[#1A1816] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-6xl"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl tracking-[0.15em] mb-4 font-light">
                <span className="text-[#B8941D] font-['Playfair_Display',serif] italic mr-4">Signature</span>
                明星项目
              </h2>
              <div className="w-12 h-[1px] bg-[#B8941D]"></div>
            </div>
            <a href="#" className="flex items-center gap-2 text-sm text-[#A8B5C1] hover:text-[#D4AF37] transition-colors group">
              查看全部项目
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard 
              img={SERVICE_1}
              title="光电抗衰"
              subtitle="Laser & Energy Devices"
              desc="热玛吉 / 超声炮 / 欧洲之星"
            />
            <ProjectCard 
              img={SERVICE_2}
              title="轮廓微整"
              subtitle="Facial Contouring"
              desc="玻尿酸填充 / 肉毒素除皱"
            />
            <ProjectCard 
              img={SERVICE_3}
              title="再生医学"
              subtitle="Regenerative Medicine"
              desc="童颜针 / 胶原蛋白抗衰"
            />
          </div>
        </motion.div>
      </section>

      {/* Expert Team */}
      <section id="专家团队" className="py-32 px-6 lg:px-12 bg-[#141210] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-6xl"
        >
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl tracking-[0.15em] mb-4 font-light">
              <span className="text-[#B8941D] font-['Playfair_Display',serif] italic mr-4">Experts</span>
              医疗团队
            </h2>
            <div className="w-12 h-[1px] bg-[#B8941D] mx-auto"></div>
            <p className="text-[#A8B5C1] mt-6 tracking-wider text-sm">汇聚国内外资深医疗专家，平均从业15年以上</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <TeamCard 
              img={TEAM_1}
              name="Dr. Alexander Chen"
              title="医疗院长 / 首席注射专家"
              certs={["美国Allergan全球注射导师", "国际整形美容医学会(ISAPS)会员"]}
              desc="在面部年轻化及轮廓美学重塑领域造诣深厚，推崇“少即是多”的自然美学理念。"
            />
            <TeamCard 
              img={TEAM_2}
              name="Dr. Sarah Lin"
              title="光电抗衰中心主任"
              certs={["热玛吉/超声炮官方双重认证医师", "中华医学会医学美学分会委员"]}
              desc="擅长联合光电与微创手段，针对不同肤质与衰老程度定制全生命周期抗衰方案。"
            />
          </div>
        </motion.div>
      </section>

      {/* Real Cases & Testimonials */}
      <section id="口碑见证" className="py-32 px-6 lg:px-12 bg-gradient-to-t from-[#141210] to-[#1A1816] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Visual Case */}
            <div className="relative aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden group">
              <ImageWithFallback src={CASE_1} alt="Perfect Skin Case" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/90 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-[#D4AF37] text-sm tracking-widest mb-2 flex items-center gap-2">
                    <div className="w-4 h-[1px] bg-[#D4AF37]"></div>
                    全脸年轻化综合方案
                  </div>
                  <h3 className="text-2xl font-light tracking-wider">30天肌肤焕变记录</h3>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h2 className="text-3xl md:text-4xl tracking-[0.15em] mb-4 font-light">
                <span className="text-[#B8941D] font-['Playfair_Display',serif] italic mr-4">Reviews</span>
                客户口碑
              </h2>
              <div className="w-12 h-[1px] bg-[#B8941D] mb-12"></div>
              
              <div className="space-y-10">
                <Testimonial 
                  text="这里的环境像高端会所一样私密放松。医生没有过度推销，而是仔细评估了我的骨相，做完后身边的朋友都说我变年轻了，但又看不出具体动了哪里，这种感觉太棒了。"
                  author="Ms. Wang, 互联网高管"
                />
                <Testimonial 
                  text="光电中心的护士非常温柔，林医生操作时非常严谨。他们对痛感管理做得很到位，整个疗程下来舒适度超乎想象，效果也超出预期。"
                  author="Mrs. Li, 全职太太"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Booking Form Footer Section */}
      <footer id="预约" className="relative py-32 bg-[#0A0908] overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#B8941D]/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 max-w-4xl relative z-10"
        >
          <div className="bg-[#141210] border border-[#B8941D]/20 p-10 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="text-center mb-12">
              <h2 className="text-3xl tracking-[0.15em] font-light mb-4">预约面诊</h2>
              <p className="text-[#A8B5C1] text-sm tracking-widest">留下您的联系方式，我们的美学顾问将尽快与您联系</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A8B5C1]/50" />
                  <input type="text" placeholder="您的姓名" className="w-full bg-transparent border-b border-[#333] py-4 pl-12 pr-4 text-[#FAF9F6] focus:outline-none focus:border-[#B8941D] transition-colors placeholder:text-[#A8B5C1]/30 tracking-widest" />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A8B5C1]/50" />
                  <input type="tel" placeholder="联系电话" className="w-full bg-transparent border-b border-[#333] py-4 pl-12 pr-4 text-[#FAF9F6] focus:outline-none focus:border-[#B8941D] transition-colors placeholder:text-[#A8B5C1]/30 tracking-widest" />
                </div>
              </div>
              
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A8B5C1]/50" />
                <select className="w-full bg-transparent border-b border-[#333] py-4 pl-12 pr-4 text-[#FAF9F6] focus:outline-none focus:border-[#B8941D] transition-colors appearance-none cursor-pointer tracking-widest">
                  <option value="" className="bg-[#141210] text-[#A8B5C1]">选择意向项目</option>
                  <option value="光电" className="bg-[#141210]">光电抗衰</option>
                  <option value="微整" className="bg-[#141210]">轮廓微整</option>
                  <option value="再生" className="bg-[#141210]">再生医学</option>
                  <option value="其他" className="bg-[#141210]">其他咨询</option>
                </select>
              </div>

              <div className="pt-8 flex justify-center">
                <CTAButton text="提交预约" size="lg" className="w-full md:w-auto md:px-20" />
              </div>
            </form>
          </div>
        </motion.div>
        
        <div className="mt-20 text-center text-[#A8B5C1]/40 text-xs tracking-widest">
          <p>© {new Date().getFullYear()} YAZHENG 医疗美容. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}

// --- Components ---

function CTAButton({ text, size = 'md', className = '' }: { text: string, size?: 'md' | 'lg', className?: string }) {
  return (
    <button className={`
      relative overflow-hidden group 
      bg-gradient-to-r from-[#B8941D] to-[#D4AF37] 
      text-[#141210] font-medium tracking-widest
      transition-all duration-300 hover:shadow-[0_0_20px_rgba(184,148,29,0.4)] hover:-translate-y-0.5
      ${size === 'lg' ? 'px-10 py-4 text-base' : 'px-8 py-3 text-sm'}
      ${className}
    `}>
      <span className="relative z-10">{text}</span>
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent z-0"></div>
    </button>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-20 h-20 rounded-full border border-[#B8941D]/30 flex items-center justify-center mb-6 group-hover:border-[#B8941D] group-hover:bg-[#B8941D]/5 transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-xl tracking-[0.1em] mb-4 text-[#FAF9F6]">{title}</h3>
      <p className="text-[#A8B5C1] text-sm leading-[1.8] tracking-wider font-light">{desc}</p>
    </div>
  );
}

function ProjectCard({ img, title, subtitle, desc }: { img: string, title: string, subtitle: string, desc: string }) {
  return (
    <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer border border-[#333] hover:border-[#B8941D]/50 transition-colors duration-500">
      <ImageWithFallback src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/40 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h4 className="font-['Playfair_Display',serif] text-[#B8941D] text-sm italic mb-2">{subtitle}</h4>
        <h3 className="text-2xl tracking-widest mb-3">{title}</h3>
        <p className="text-[#A8B5C1] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{desc}</p>
        <div className="mt-6 w-8 h-[1px] bg-[#B8941D] group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
}

function TeamCard({ img, name, title, certs, desc }: { img: string, name: string, title: string, certs: string[], desc: string }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-[#1A1816] border border-[#333] hover:border-[#B8941D]/30 transition-colors duration-500 group">
      <div className="md:w-2/5 aspect-[3/4] overflow-hidden">
        <ImageWithFallback src={img} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
      </div>
      <div className="p-8 md:p-10 md:w-3/5 flex flex-col justify-center">
        <h3 className="font-['Playfair_Display',serif] text-2xl text-[#FAF9F6] mb-1">{name}</h3>
        <p className="text-[#B8941D] text-sm tracking-widest mb-6">{title}</p>
        
        <div className="space-y-2 mb-6">
          {certs.map((cert, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-[#A8B5C1] tracking-wider">
              <Star className="w-3 h-3 text-[#B8941D]" />
              <span>{cert}</span>
            </div>
          ))}
        </div>
        
        <p className="text-sm text-[#A8B5C1] leading-[1.8] font-light">{desc}</p>
      </div>
    </div>
  );
}

function Testimonial({ text, author }: { text: string, author: string }) {
  return (
    <div className="relative pl-10 border-l border-[#B8941D]/30 py-2">
      <Quote className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 text-[#B8941D]/20" />
      <p className="text-[#FAF9F6] text-base leading-[2] tracking-wider font-light italic mb-4">"{text}"</p>
      <p className="text-[#A8B5C1] text-sm tracking-widest font-medium">— {author}</p>
    </div>
  );
}
