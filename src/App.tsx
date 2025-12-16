import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Github, Linkedin, Mail, MapPin, Phone, Globe, Code, Briefcase, Award, ArrowRight } from 'lucide-react';
import profileImage from './assets/profile.png';
import aboutImage from "./assets/a-propos.jpg";
import interventionImage from "./assets/mobile-intervention.jpg";
import callImage from "./assets/call-center.png";
import bibliothequeImage from "./assets/bibliohtheque.png";
import devImage from "./assets/dev-web.png";
import projectManagementImage from "./assets/project-managementok.png";
import mobileDevImage from "./assets/mobile-dev.png";
import mobileMoneyImage from "./assets/mobile-money.jpg";
import ticketCT from "./assets/ticket_CT2025.png";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    image: string;
    category: string;
    description: string;
    technologies: string[];
    details: string;
  } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'experience', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'Application mobile de gestion des interventions',
      image: interventionImage,
      category: 'Application mobile',
      description: 'Application mobile pour améliorer l\'efficacité de la gestion des interventions de dépannage avec suivi rigoureux des tickets.',
      technologies: ['Flutter', 'Node.js', 'Express.js', 'SQL Server', 'API REST', 'JWT'],
      details: `Objectif : Optimiser le traitement des incidents sur le terrain à travers une application mobile dédiée.

Rôles utilisateurs :
• USER : Consultation, traitement et mise à jour des tickets
• SUPERVISOR : Supervision des opérations et coordination
• ADMIN : Administration des comptes et accès

Fonctionnalités principales :
1. Filtrage des tickets par zone et centre de distribution
2. Consultation détaillée avec historique complet
3. Traitement en temps réel avec géolocalisation
4. Gestion des articles et outils utilisés
5. Workflow validé par superviseur`
    },
    {
      title: 'Bibliothèque Numérique',
      image: bibliothequeImage,
      category: 'Application Web',
      description: 'Plateforme centralisée d\'accès à une bibliothèque numérique riche en contenus pédagogiques pour étudiants.',
      technologies: ['React.js', 'Material UI', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL'],
      details: `Plateforme éducative moderne offrant :

Pour les étudiants :
• Consultation de livres numériques et examens
• Recherche avancée multi-critères
• Système de favoris et historique
• Téléchargement sécurisé

Pour les enseignants :
• Dépôt de documents pédagogiques
• Gestion des métadonnées
• Suivi des consultations

Architecture moderne avec API REST sécurisée et interface responsive.`
    },
    {
      title: 'Intranet Ministère',
      image: devImage,
      category: 'Application web',
      description: 'Application web sécurisée pour gestion centralisée de fichiers sensibles avec authentification renforcée.',
      technologies: ['PHP', 'JavaScript', 'MySQL', 'Linux', 'JWT', 'HTTPS', 'SSL/TLS'],
      details: `Système haute sécurité avec :

Sécurité :
• Authentification multi-facteurs
• Chiffrement SSL/TLS
• Gestion des droits

Fonctionnalités :
• Accès sécurisé aux documents
• Téléchargement contrôlé
• Traçabilité des accès
• Interface intuitive

Architecture REST déployée sur infrastructure Linux sécurisée.`
    },
    {
      title: 'Gestion de Projets Collaboratifs',
      image: projectManagementImage,
      category: 'Application web',
      description: 'Plateforme moderne de gestion de projets avec collaboration en temps réel et analytics avancés.',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Socket.io', 'JWT'],
      details: `Solution complète de project management :

Fonctionnalités clés :
• Dashboard interactif temps réel
• Vue Kanban et calendrier
• Gestion d'équipes et rôles
• Rapports et analytics
• Notifications push
• Chat intégré

Architecture scalable avec WebSockets pour collaboration instantanée.`
    },
    {
      title: 'Gestion des Tickets GLPI Mobile',
      // image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      image: ticketCT,
      category: 'Application mobile',
      description: 'Application mobile (version 2.0) interfacée avec GLPI pour optimiser la gestion des tickets de support en mobilité. Elle permet aux utilisateurs de suivre, traiter et transférer des tickets directement depuis leur smartphone, tout en recevant des notifications en temps réel.',
      technologies: ['Flutter', 'Dart', 'Push Notifications', 'API REST GLPI'],
      details: `Application mobile pour support technique :

Dashboard :
• Statistiques en temps réel
• Camembert de répartition
• Taux de résolution

Gestion :
• Liste triée par urgence
• Recherche avancée
• Transfert de tickets
• Historique des tickets
• Notifications instantanée

Interface moderne et intuitive pour traitement rapide des demandes.`
    },
    {
      title: "Centre d'Appels SONABEL",
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
      category: "Intégration Call Center",
      description: "Mise en place d’un centre d’appels pour la Société Nationale d’Électricité du Burkina Faso (SONABEL) afin d’améliorer son service client.",
      technologies: ['Altitude (Enghouse)', 'Scripts personnalisés', 'SQL Server', 'Procédures stockées'],
      details: `Solution call center complète :

Plateforme Altitude avec :
• Interface intuitive et interactive qui guide les agents tout au long de l’appel.
• Affichage automatique des informations des abonnés dès la réception de l’appel, facilitant une prise en charge efficace
• Recueil structuré des demandes
• Génération automatique de tickets
• Gestion des rôles (Agent, Superviseur, Suivi) 
• Suivi jusqu'à résolution

Cette solution a permis à la SONABEL d’optimiser la gestion des appels entrants, de mieux suivre les demandes clients et d’améliorer la qualité de son service client.`
    },
    {
      title: 'Intégration Mobile Money & Services',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      category: 'Intégration Mobile Money',
      description: 'Intégration sécurisée de services critiques : Mobile Money, IVR intelligent et récupération PUK.',
      technologies: ['.NET', 'C#', 'cURL', 'PowerShell', 'OpenSSL', 'API'],
      details: `Intégration complète de services :

Services intégrés :
• Transfert Mobile Money (SPTRANSFER)
• Paiement USSD/Web (DEBIT)
• SMART IVR
• Récupération PUK via API

Sécurité :
• Certificats SSL (CSR, racine, intermédiaire)
• Communication HTTPS sécurisée
• Tests de connectivité validés

APIs robustes et conformes aux normes de sécurité exigées.`
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="relative">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ibrahim CAMARA
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'experience', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    activeSection === item 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {activeSection === item && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-3">
              {['home', 'about', 'skills', 'experience', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors capitalize font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    👋 Bienvenue sur mon portfolio
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Ingénieur Développeur
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Full Stack & Mobile
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Spécialisé en développement web et mobile avec plus de 14 ans d'expérience. 
                  Passionné par l'innovation et l'excellence technique.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-medium flex items-center gap-2"
                >
                  Me Contacter
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                {/* <a
                  href="/CV/CURRICULUM VITAE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300 font-medium"
                >
                  Télécharger CV
                </a> */}
              </div>

              <div className="flex gap-6 pt-4">
                <a href="https://www.linkedin.com/in/ibrahim-camara/" className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600">
                  <Linkedin size={24} />
                </a>
                {/* <a href="https://github.com" className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600">
                  <Github size={24} />
                </a> */}
                <a href="mailto:camsoib01@gmail.com" className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              À Propos de Moi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                alt="About"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-96"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Concepteur & Ingénieur Développeur Full Stack & Mobile
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ingénieur développeur full stack et mobile avec plus de 14 ans d’expérience, j’interviens sur l’ensemble du cycle de vie des applications, de la conception à la mise en production.
J’ai évolué progressivement du développement freelance à des rôles d’ingénieur, puis de chef de projet, avant de me spécialiser dans des architectures full stack modernes, cloud et mobile.
Mon expertise couvre le backend (Node.js, Nest.js, .NET Core,  PHP), le frontend (React.js, Next.js, TypeScript, Tailwind CSS), ainsi que le mobile (React Native, Flutter).
Je dispose également d’une solide maîtrise des bases de données relationnelles et NoSQL (PostgreSQL, SQL Server, MySQL, MongoDB, DynamoDB).
              </p>
              <p className="text-gray-600 leading-relaxed">
                Habitué aux environnements AWS, aux pratiques DevOps / CI-CD et aux méthodologies Agile / Scrum, je mets un fort accent sur la qualité logicielle, les tests, le debugging et l’optimisation des performances, afin de livrer des solutions robustes, évolutives et orientées valeur métier.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                  <Code className="mx-auto mb-3 text-blue-600" size={32} />
                  <div className="text-3xl font-bold text-gray-900">14+</div>
                  <div className="text-sm text-gray-600 mt-1">Années d'expérience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                  <Briefcase className="mx-auto mb-3 text-purple-600" size={32} />
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600 mt-1">Projets réalisés</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                  <Award className="mx-auto mb-3 text-indigo-600" size={32} />
                  <div className="text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600 mt-1">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Compétences Techniques
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { name: 'Node.js / Express.js / Nest.js / PHP', level: 92, color: 'from-green-500 to-emerald-500' },
              { name: '.NET Core', level: 90, color: 'from-purple-500 to-indigo-500' },
              { name: 'React.js / Next.js / Tailwind CSS / TypeScript', level: 93, color: 'from-blue-500 to-cyan-500' },
              { name: 'React Native / Flutter', level: 92, color: 'from-sky-500 to-blue-500' },
              { name: 'PostgreSQL / SQL Server / MySQL / MongoDB / DynamoDB', level: 93, color: 'from-indigo-500 to-purple-500' },
              { name: 'AWS Cloud', level: 90, color: 'from-orange-500 to-red-500' },
              { name: 'CI/CD & DevOps', level: 90, color: 'from-teal-500 to-green-500' },
              { name: 'Scrum / Agile', level: 90, color: 'from-pink-500 to-rose-500' },
            ].map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Parcours Professionnel
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Award className="text-blue-600" size={28} />
                Formation & diplômes
              </h3>
              {[
                { title: 'Diplôme d\'Ingénieur Informatique Bac + 5', org: 'GROUPE CEFIAT', year: '2010-2013' },
                { title: 'BTS option NTIC', org: 'GROUPE LOKO', year: '2008-2009' },
                { title: 'Baccalauréat Série D', org: 'Lycée Municipal', year: '2007' },
              ].map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200 hover:border-blue-600 transition-colors group">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-[9px] group-hover:scale-125 transition-transform"></div>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-600 font-medium">{item.org}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.year}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Code className="text-indigo-600" size={28} />
                Formation Additionnelle
              </h3>
              {[
                {
                  title: 'Cloud & AWS',
                  org: '· AWS DynamoDB (NoSQL) · AWS AppSync (GraphQL APIs) · Introduction to Amazon Q Developer',
                  year: '2023–2025'
                },
                {
                  title: 'Développement Frontend & UX',
                  org: 'Collaboration Design–Développement avec Figma (lecture de maquettes, handoff, design systems)',
                  year: '2023'
                },
                {
                  title: 'Télécoms & Systèmes',
                  org: 'Certifications Call Center (développement de scripts personnalisés) · EI – Altitude : ACP System Administrator · EI – Altitude : ACP Technical Support',
                  year: '2023'
                },
                {
                  title: 'Méthodologies & Qualité logicielle',
                  org: 'Scrum et Agilité : Le Guide Complet · Tests unitaires et d’intégration avec React Testing Library · Debugging et optimisation des performances applicatives',
                  year: '2021–2022'
                },
                {
                  title: 'Bases de données',
                  org: 'MongoDB : Devenir Expert du NoSQL',
                  year: '2020'
                },
                { title: 'Formations Techniques – Tunisie',
                  org: 'SQL Server 2008 R2   HybridCommunication Server   Configuration de balises GPS', 
                  year: '2019' },
              ].map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-indigo-200 hover:border-indigo-600 transition-colors group">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-indigo-600 rounded-full -translate-x-[9px] group-hover:scale-125 transition-transform"></div>
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-600 font-medium">{item.org}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.year}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Briefcase className="text-purple-600" size={28} />
                Expérience
              </h3>
              {[
                { title: 'Ingénieur Développeur Full Stack & Mobile', org: 'COMAFRIQUE TECHNOLOGIES', year: '2021-Present' },
                { title: 'Ingénieur Développeur / Chef de projet', org: 'COMAFRIQUE TECHNOLOGIES', year: '2019-2021' },
                { title: 'Ingénieur Développeur / Data Analyst', org: 'COMAFRIQUE TECHNOLOGIES', year: '2015-2019' },
                { title: 'Responsable Informatique (infra + dev + support)', org: 'ECOLE DE MODE EM2T', year: '2014-2015' },
                { title: 'Développeur freelance', org: '', year: '2010-2014' },
              ].map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-purple-200 hover:border-purple-600 transition-colors group">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full -translate-x-[9px] group-hover:scale-125 transition-transform"></div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-600 font-medium">{item.org}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quelques Projets Réalisés
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez une sélection de mes projets les plus significatifs ; d'autres, confidentiels, ne peuvent être présentés ici.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                    Voir détails
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contactez-moi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              N'hésitez pas à me contacter pour discuter de vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: MapPin, title: 'Adresse', value: 'Abidjan, CÔTE D\'IVOIRE', color: 'from-red-500 to-pink-500' },
              { icon: Phone, title: 'Téléphone', value: '+225 0779046607', color: 'from-green-500 to-emerald-500' },
              { icon: Mail, title: 'Email', value: 'camsoib01@gmail.com', color: 'from-blue-500 to-cyan-500' },
              { icon: Globe, title: 'Site web', value: 'camsoib.github.io', color: 'from-purple-500 to-indigo-500', link: 'https://camsoib.github.io/github.io/' },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="text-white" size={28} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h4>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
                  >
                    {item.value}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <p className="text-gray-700 font-medium">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/ibrahim-camara"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={28} />
              </a>
              {/* <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
              >
                <Github size={28} />
              </a> */}
              <a
                href="mailto:camsoib01@gmail.com"
                className="group p-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ibrahim CAMARA
              </h3>
              <p className="text-gray-400">Ingénieur Développeur Full Stack & Mobile</p>
            </div>
            <div className="flex gap-6">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Accueil</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">À propos</a>
              <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 Ibrahim CAMARA. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-center z-10">
              <h3 className="text-2xl font-bold text-gray-900 pr-8">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
              >
                <X size={28} className="text-gray-600" />
              </button>
            </div>

            <div className="p-8">
              <div className="relative mb-8 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-slate-50 to-blue-50">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  // className="w-full h-96 object-cover"
                  className="w-full h-96 object-contain"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full text-sm font-semibold shadow-lg">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Description</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-xl text-sm font-medium border border-blue-200 hover:shadow-md transition-shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Détails du projet</h4>
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6">
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {selectedProject.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}} />
    </div>
  );
}

export default App;