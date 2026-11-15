// =====================================================
//  SARANYAAPP – SITE CONTENT
//  இந்த file-ல் மட்டும் மாற்றினால் போதும் (text, links, projects).
// =====================================================

export const brand = {
  name: 'SaranyaApp',
  developer: 'Saranya',
  designation: 'Freelance Flutter & Web Developer',
  tagline: 'Turning Ideas Into Digital Solutions.',
}

export const contact = {
  email: 'saranyawebsitedeveloper@gmail.com',
  mailto: 'mailto:saranyawebsitedeveloper@gmail.com',
  // LinkedIn / GitHub உருவாக்கியதும் இங்கே URL போடுங்கள்.
  // காலியாக இருந்தால் website-ல் "Coming soon" என்று காட்டும் (fake link இல்லை).
  linkedin: '',
  github: '',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const services = [
  {
    icon: 'Smartphone',
    title: 'Flutter App Development',
    text: 'Cross-platform Android and iOS apps built with Flutter, designed around how your business actually works.',
  },
  {
    icon: 'LayoutTemplate',
    title: 'Mobile App UI Improvements',
    text: 'Already have an app? I can refine screens, spacing and flows so it feels cleaner and easier to use.',
  },
  {
    icon: 'Flame',
    title: 'Firebase Integration',
    text: 'Authentication, cloud database and real-time data sync connected to your Flutter or web app.',
  },
  {
    icon: 'Globe',
    title: 'Website Development',
    text: 'Fast, responsive business websites that look professional on phones, tablets and desktops.',
  },
  {
    icon: 'BarChart3',
    title: 'Business Dashboard',
    text: 'Simple dashboards to track income, expenses, customers and monthly performance in one place.',
  },
  {
    icon: 'Sheet',
    title: 'Google Sheets Automation',
    text: 'Connect your app or form to Google Sheets so records are saved and organised automatically.',
  },
  {
    icon: 'Store',
    title: 'Small Business Digital Solutions',
    text: 'Practical tools for boutiques, shops and entrepreneurs who want to move from paper to digital.',
  },
  {
    icon: 'Bot',
    title: 'Python Automation',
    text: 'Small automation scripts for repetitive tasks. Currently in practice and learning stage.',
    badge: 'Learning',
  },
]

export const projects = [
  {
    id: 'tailoring',
    status: 'Built Application',
    statusTone: 'teal',
    title: 'Tailoring Order Management Application',
    tech: ['Flutter', 'Firebase'],
    text: 'A mobile app that helps a tailoring business manage customers, orders, measurements, delivery dates and payments from one place.',
    features: [
      'Customer management',
      'Order creation',
      'Measurements',
      'Delivery tracking',
      'Payment tracking',
      'Pending balance',
      'Order status',
      'Dashboard',
    ],
    visual: 'phone',
  },
  {
    id: 'dashboard',
    status: 'Concept Project',
    statusTone: 'amber',
    title: 'Small Business Management Dashboard',
    tech: ['Dashboard Design', 'Concept'],
    text: 'A concept design showing how a small business owner could track money and customers in a single clear dashboard. This is a concept, not a delivered client project.',
    features: [
      'Income and expenses',
      'Customer records',
      'Monthly reports',
      'Business dashboard',
    ],
    visual: 'dashboard',
  },
  {
    id: 'website',
    status: 'Service Demo',
    statusTone: 'blue',
    title: 'Business Website Development',
    tech: ['React', 'Tailwind CSS'],
    text: 'A demonstration of the responsive business websites I build: clean layout, clear calls to action and a great mobile experience.',
    features: [
      'Responsive layout',
      'Fast loading',
      'Clear contact and enquiry options',
      'SEO-ready structure',
    ],
    visual: 'browser',
  },
]

export const skillGroups = [
  {
    title: 'Mobile',
    items: ['Flutter', 'Dart', 'Mobile UI'],
  },
  {
    title: 'Backend & Data',
    items: ['Firebase', 'Supabase', 'PostgreSQL', 'Google Sheets Integration'],
  },
  {
    title: 'Web',
    items: ['React', 'Tailwind CSS', 'Responsive Websites'],
  },
]

export const learning = ['Python', 'Node.js', 'Automation']

export const techStack = [
  'Flutter',
  'Dart',
  'Firebase',
  'Supabase',
  'PostgreSQL',
  'Google Sheets',
  'React',
  'Vite',
  'Tailwind CSS',
]