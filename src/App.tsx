import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Github, Linkedin, Mail, MapPin, Phone, Globe, Code, Briefcase, Award, ArrowRight } from 'lucide-react';
import profileImage from './assets/profile.png';
import profileImage2 from './assets/profile2.png';
import aboutImage from "./assets/a-propos.jpg";
import interventionImage from "./assets/mobile-intervention.jpg";
import callImage from "./assets/call-center.png";
import bibliothequeImage from "./assets/bibliohtheque.png";
import devImage from "./assets/dev-web.png";
import devImage3 from "./assets/dev-web3.png";
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

//   const projects = [
//     {
//       title: 'Application mobile de gestion des interventions',
//       image: interventionImage,
//       category: 'Application mobile',
//       description: 'Application mobile pour améliorer l\'efficacité de la gestion des interventions de dépannage avec suivi rigoureux des tickets.',
//       technologies: ['Flutter', 'Node.js', 'Express.js', 'SQL Server', 'API REST', 'JWT'],
//       details: `Objectif : Optimiser le traitement des incidents sur le terrain à travers une application mobile dédiée.

// Rôles utilisateurs :
// • USER : Consultation, traitement et mise à jour des tickets
// • SUPERVISOR : Supervision des opérations et coordination
// • ADMIN : Administration des comptes et accès

// Fonctionnalités principales :
// 1. Filtrage des tickets par zone et centre de distribution
// 2. Consultation détaillée avec historique complet
// 3. Traitement en temps réel avec géolocalisation
// 4. Gestion des articles et outils utilisés
// 5. Workflow validé par superviseur`
//     },
//     {
//       title: 'Bibliothèque Numérique',
//       image: bibliothequeImage,
//       category: 'Application Web',
//       description: 'Plateforme centralisée d\'accès à une bibliothèque numérique riche en contenus pédagogiques pour étudiants.',
//       technologies: ['React.js', 'Material UI', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL'],
//       details: `Plateforme éducative moderne offrant :

// Pour les étudiants :
// • Consultation de livres numériques et examens
// • Recherche avancée multi-critères
// • Système de favoris et historique
// • Téléchargement sécurisé

// Pour les enseignants :
// • Dépôt de documents pédagogiques
// • Gestion des métadonnées
// • Suivi des consultations

// Architecture moderne avec API REST sécurisée et interface responsive.`
//     },
//     {
//       title: 'Intranet Ministère',
//       image: devImage,
//       category: 'Application web',
//       description: 'Application web sécurisée pour gestion centralisée de fichiers sensibles avec authentification renforcée.',
//       technologies: ['PHP', 'JavaScript', 'MySQL', 'Linux', 'JWT', 'HTTPS', 'SSL/TLS'],
//       details: `Système haute sécurité avec :

// Sécurité :
// • Authentification multi-facteurs
// • Chiffrement SSL/TLS
// • Gestion des droits

// Fonctionnalités :
// • Accès sécurisé aux documents
// • Téléchargement contrôlé
// • Traçabilité des accès
// • Interface intuitive

// Architecture REST déployée sur infrastructure Linux sécurisée.`
//     },
//     {
//       title: 'Gestion de Projets Collaboratifs',
//       image: projectManagementImage,
//       category: 'Application web',
//       description: 'Plateforme moderne de gestion de projets avec collaboration en temps réel et analytics avancés.',
//       technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Socket.io', 'JWT'],
//       details: `Solution complète de project management :

// Fonctionnalités clés :
// • Dashboard interactif temps réel
// • Vue Kanban et calendrier
// • Gestion d'équipes et rôles
// • Rapports et analytics
// • Notifications push
// • Chat intégré

// Architecture scalable avec WebSockets pour collaboration instantanée.`
//     },
//     {
//       title: 'Gestion des Tickets GLPI Mobile',
//       // image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
//       image: ticketCT,
//       category: 'Application mobile',
//       description: 'Application mobile (version 2.0) interfacée avec GLPI pour optimiser la gestion des tickets de support en mobilité. Elle permet aux utilisateurs de suivre, traiter et transférer des tickets directement depuis leur smartphone, tout en recevant des notifications en temps réel.',
//       technologies: ['Flutter', 'Dart', 'Push Notifications', 'API REST GLPI'],
//       details: `Application mobile pour support technique :

// Dashboard :
// • Statistiques en temps réel
// • Camembert de répartition
// • Taux de résolution

// Gestion :
// • Liste triée par urgence
// • Recherche avancée
// • Transfert de tickets
// • Historique des tickets
// • Notifications instantanée

// Interface moderne et intuitive pour traitement rapide des demandes.`
//     },
//     {
//       title: "Centre d'Appels SONABEL",
//       image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
//       category: "Intégration Call Center",
//       description: "Mise en place d’un centre d’appels pour la Société Nationale d’Électricité du Burkina Faso (SONABEL) afin d’améliorer son service client.",
//       technologies: ['Altitude (Enghouse)', 'Scripts personnalisés', 'SQL Server', 'Procédures stockées'],
//       details: `Solution call center complète :

// Plateforme Altitude avec :
// • Interface intuitive et interactive qui guide les agents tout au long de l’appel.
// • Affichage automatique des informations des abonnés dès la réception de l’appel, facilitant une prise en charge efficace
// • Recueil structuré des demandes
// • Génération automatique de tickets
// • Gestion des rôles (Agent, Superviseur, Suivi) 
// • Suivi jusqu'à résolution

// Cette solution a permis à la SONABEL d’optimiser la gestion des appels entrants, de mieux suivre les demandes clients et d’améliorer la qualité de son service client.`
//     },
//     {
//       title: 'Intégration Mobile Money & Services',
//       image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
//       category: 'Intégration Mobile Money',
//       description: 'Intégration sécurisée de services critiques : Mobile Money, IVR intelligent et récupération PUK.',
//       technologies: ['.NET', 'C#', 'cURL', 'PowerShell', 'OpenSSL', 'API'],
//       details: `Intégration complète de services :

// Services intégrés :
// • Transfert Mobile Money (SPTRANSFER)
// • Paiement USSD/Web (DEBIT)
// • SMART IVR
// • Récupération PUK via API

// Sécurité :
// • Certificats SSL (CSR, racine, intermédiaire)
// • Communication HTTPS sécurisée
// • Tests de connectivité validés

// APIs robustes et conformes aux normes de sécurité exigées.`
//     }
//   ];


const projects = [
  {
    title: 'Supervision et gestion des quotas téléphoniques',
    image: devImage3,
    category: 'Télécoms & Intégration de systèmes',
    description:
      'Conception et intégration d’une solution de supervision des consommations téléphoniques et de contrôle des quotas, interfacée avec Cisco CUCM. La solution combine le traitement des requêtes de contrôle d’appels, l’application des règles de quotas et l’observation des événements téléphoniques.',
    technologies: [
      'Node.js',
      'Express.js',
      'Java Spring Boot',
      'Cisco CUCM',
      'CURRI',
      'XACML',
      'JTAPI',
      'Active Directory',
      'PostgreSQL'
    ],
    details: `Contexte métier :
Améliorer le contrôle des consommations téléphoniques, le suivi des quotas et la traçabilité des appels dans un environnement multi-entités.

Architecture et intégration :
• Intégration de Cisco CUCM avec un service Node.js/Express pour le traitement des requêtes CURRI/XACML
• Analyse des attributs de contrôle d’appel et application des règles de quotas
• Production des décisions Permit / Deny et des obligations de contrôle associées, notamment maxcallduration
• Développement d’un bridge Java Spring Boot s’appuyant sur JTAPI pour observer les événements téléphoniques
• Notification des événements d’appel au service applicatif et exécution des actions téléphoniques prises en charge
• Utilisation d’Active Directory comme référentiel d’identité et de PostgreSQL pour la persistance des données, selon le périmètre documenté

Fonctionnalités et contrôles :
• Contrôle des appels selon les règles et quotas applicables
• Prise en compte des événements téléphoniques
• Suivi des consommations et des données de contrôle
• Traçabilité des traitements et vérification des scénarios fonctionnels

Validation :
Tests fonctionnels couvrant notamment les appels autorisés ou refusés, les quotas insuffisants et les situations d’épuisement du quota.

Présentation anonymisée : les paramètres de production, adresses réseau, extensions et configurations sensibles ne sont pas exposés.`
  },
  {
    title: 'Intégration Mobile Money & Services',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    category: 'Intégration API & Services télécoms',
    description:
      'Intégration de services télécoms et de paiement nécessitant des échanges applicatifs sécurisés, des mécanismes de connectivité fiables et l’interconnexion avec des API métier.',
    technologies: [
      '.NET',
      'C#',
      'cURL',
      'PowerShell',
      'OpenSSL',
      'API REST',
      'HTTPS',
      'SSL/TLS'
    ],
    details: `Contexte métier :
Interconnecter plusieurs services télécoms et de paiement avec les systèmes applicatifs concernés.

Services intégrés :
• Transfert Mobile Money (SPTRANSFER)
• Paiement USSD/Web (DEBIT)
• SMART IVR
• Récupération PUK via API

Contribution technique :
• Intégration des services à travers les interfaces API disponibles
• Utilisation d’outils de diagnostic et de tests de connectivité
• Préparation et vérification des éléments de certificats nécessaires aux communications sécurisées
• Contrôle des échanges HTTPS et des certificats SSL/TLS

Objectif technique :
Contribuer à l’interopérabilité des services et à la fiabilité des communications entre les applications.

Les informations d’accès, paramètres d’intégration et détails sensibles des services ne sont pas publiés.`
  },
  {
    title: "Centre d'appels SONABEL",
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
    category: 'Télécoms & Intégration Call Center',
    description:
      'Contribution à l’intégration et à la personnalisation d’une solution de centre de contact pour structurer le traitement des appels entrants et améliorer le suivi des demandes clients de la Société Nationale d’Électricité du Burkina Faso.',
    technologies: [
      'Altitude / Enghouse',
      'Scripts personnalisés',
      'SQL Server',
      'Procédures stockées'
    ],
    details: `Contexte métier :
Structurer la prise en charge des appels entrants et faciliter le suivi des demandes des clients.

Contribution technique :
• Personnalisation des scripts de la plateforme de centre de contact
• Exploitation des données nécessaires à la prise en charge des appelants
• Intégration des informations utiles au traitement des demandes
• Contribution aux mécanismes de création et de suivi des tickets

Fonctionnalités :
• Affichage des informations utiles à l’agent lors de l’appel
• Recueil structuré des demandes clients
• Génération et suivi des tickets
• Gestion des rôles opérationnels : agent, superviseur et suivi
• Suivi des demandes jusqu’à leur résolution

Valeur métier :
Structuration du traitement des appels et amélioration de la traçabilité des demandes clients.`
  },
  {
    title: 'Application mobile de gestion des interventions',
    image: interventionImage,
    category: 'Application mobile',
    description:
      'Application mobile destinée à faciliter la gestion des interventions de dépannage, le suivi des tickets et la coordination des opérations sur le terrain.',
    technologies: [
      'Flutter',
      'Node.js',
      'Express.js',
      'SQL Server',
      'API REST',
      'JWT'
    ],
    details: `Objectif :
Optimiser le traitement des interventions de terrain à travers une application mobile dédiée.

Rôles utilisateurs :
• USER : consultation, traitement et mise à jour des tickets
• SUPERVISOR : supervision des opérations et coordination
• ADMIN : administration des comptes et des accès

Fonctionnalités principales :
• Filtrage des tickets par zone et centre de distribution
• Consultation détaillée des tickets et de leur historique
• Traitement des interventions avec géolocalisation
• Gestion des articles et des outils utilisés
• Workflow de validation par un superviseur

Architecture technique :
Application Flutter interfacée avec un backend Node.js/Express, une base SQL Server et des API REST. L’authentification s’appuie sur JWT selon le périmètre applicatif.`
  },
  {
    title: 'Gestion des Tickets GLPI Mobile',
    image: ticketCT,
    category: 'Application mobile & Intégration API',
    description:
      'Application mobile Flutter interfacée avec GLPI pour faciliter la consultation, le traitement et le transfert des tickets de support depuis un smartphone, avec prise en charge des notifications.',
    technologies: [
      'Flutter',
      'Dart',
      'API REST GLPI',
      'Push Notifications'
    ],
    details: `Objectif :
Faciliter l’accès aux fonctions de support et au suivi des tickets en mobilité.

Fonctionnalités principales :
• Tableau de bord et indicateurs de suivi
• Visualisation des tickets selon leur urgence
• Recherche et consultation des demandes
• Transfert des tickets
• Consultation de l’historique
• Notifications relatives aux tickets

Intégration :
Application mobile connectée à GLPI via son API REST.

Valeur métier :
Faciliter le suivi des demandes de support et permettre aux utilisateurs concernés d’interagir avec les tickets en mobilité.`
  },
  {
    title: 'Intranet ministériel',
    image: devImage,
    category: 'Application web & Sécurité applicative',
    description:
      'Développement d’une application web destinée à centraliser l’accès à des documents sensibles, avec gestion des autorisations et mécanismes de sécurisation des échanges.',
    technologies: [
      'PHP',
      'JavaScript',
      'MySQL',
      'Linux',
      'JWT',
      'HTTPS',
      'SSL/TLS'
    ],
    details: `Objectif :
Centraliser l’accès aux documents tout en contrôlant les autorisations des utilisateurs.

Fonctionnalités :
• Accès sécurisé aux documents
• Téléchargement contrôlé
• Gestion des droits d’accès
• Traçabilité des accès
• Interface web de consultation et de gestion

Environnement technique :
Application PHP et JavaScript reposant sur MySQL et déployée dans un environnement Linux.

Sécurité :
Utilisation de communications HTTPS et de mécanismes de contrôle d’accès selon la configuration déployée.

Les informations sur l’organisation cliente, les documents et l’infrastructure sensible ne sont pas exposées.`
  },
  {
    title: 'Bibliothèque numérique',
    image: bibliothequeImage,
    category: 'Application web',
    description:
      'Plateforme web centralisant l’accès à des ressources numériques et pédagogiques pour les étudiants et les enseignants, avec recherche, gestion documentaire et accès aux contenus.',
    technologies: [
      'React.js',
      'Material UI',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MySQL',
      'API REST'
    ],
    details: `Objectif :
Faciliter la consultation, la recherche et la gestion des ressources pédagogiques au sein d’une plateforme centralisée.

Fonctionnalités pour les étudiants :
• Consultation de livres numériques et d’examens
• Recherche multicritère
• Gestion des favoris et de l’historique
• Accès aux documents disponibles

Fonctionnalités pour les enseignants :
• Dépôt de documents pédagogiques
• Gestion des métadonnées
• Suivi des consultations

Architecture technique :
Interface React avec Material UI et Tailwind CSS, backend Node.js/Express, base de données MySQL et API REST.`
  },
  {
    title: 'Gestion de projets collaboratifs',
    image: projectManagementImage,
    category: 'Application web & Collaboration',
    description:
      'Plateforme web de gestion de projets visant à centraliser le suivi des tâches, la coordination des équipes et la consultation des indicateurs d’avancement.',
    technologies: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'PostgreSQL',
      'Socket.io',
      'JWT'
    ],
    details: `Objectif :
Centraliser les activités de gestion de projets et faciliter la collaboration entre les membres d’une équipe.

Fonctionnalités :
• Tableau de bord de suivi
• Vues Kanban et calendrier
• Gestion des équipes et des rôles
• Rapports et indicateurs
• Notifications
• Messagerie intégrée

Environnement technique :
Interface React/TypeScript, backend Node.js, base PostgreSQL et Socket.io pour les échanges en temps réel lorsque cette fonctionnalité est activée.

La description présente le périmètre fonctionnel du projet sans divulguer de données internes.`
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
                  Technical Solution Lead
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Applications, APIs & Intégration SI
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ingénieur informatique avec plus de 14 ans d’expérience dans la conception, le développement et l’intégration de solutions applicatives. J’allie expertise Full Stack et Mobile, maîtrise des API et des systèmes d’information pour concevoir des solutions robustes, évolutives et alignées sur les besoins métier.
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
                    src={profileImage2}
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
                Technical Solution Lead | Applications, APIs & Intégration SI
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ingénieur informatique avec plus de 14 ans d’expérience dans la conception, le développement et l’évolution de solutions applicatives. Mon parcours m’a conduit du développement logiciel à la coordination de projets techniques, avec une expertise couvrant le backend, le frontend, le mobile et l’intégration des systèmes d’information.

J’interviens sur l’ensemble du cycle de vie des applications, de l’analyse des besoins et de la conception technique jusqu’au développement, à l’intégration, aux tests et à la mise en production. Je m’appuie notamment sur Node.js, NestJS, Express.js, .NET Core, PHP, React, Next.js, TypeScript, React Native et Flutter pour concevoir des solutions adaptées aux enjeux métier.

Mon expérience couvre également les API REST, SOAP et GraphQL, les bases de données relationnelles et NoSQL (PostgreSQL, SQL Server, MySQL, MongoDB et DynamoDB), ainsi que les environnements cloud et les pratiques CI/CD. J’interviens aussi sur des problématiques d’intégration applicative et de télécoms, notamment autour des solutions de téléphonie et de centre de contact.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Attaché à la qualité logicielle, à la sécurité, à la maintenabilité et à la performance, je privilégie une approche pragmatique orientée fiabilité des solutions et valeur métier. Mon objectif est de concevoir et de faire évoluer des applications robustes, évolutives et interopérables, tout en contribuant à la coordination technique et à la réussite des projets.
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
              { name: 'Backend & APIs - Node.js / Express.js / NestJS / PHP', level: 92, color: 'from-green-500 to-emerald-500' },
              { name: 'Architecture applicative & Intégration SI - REST / SOAP / GraphQL', level: 90, color: 'from-indigo-500 to-blue-500' },
              { name: 'Frontend - React.js / Next.js / TypeScript / Tailwind CSS', level: 90, color: 'from-blue-500 to-cyan-500' },
              { name: 'Applications mobiles - React Native / Flutter', level: 88, color: 'from-sky-500 to-blue-500' },
              { name: 'Développement .NET - C# / .NET Core', level: 88, color: 'from-purple-500 to-indigo-500'},
              { name: 'Bases de données - PostgreSQL / SQL Server / MySQL / MongoDB / DynamoDB', level: 92, color: 'from-indigo-500 to-purple-500' },
              { name: 'Cloud & DevOps - AWS / Docker / CI/CD / Git', level: 85, color: 'from-orange-500 to-red-500'},
              { name: 'Télécoms & Intégration - Cisco CUCM / CURRI / XACML / JTAPI', level: 85, color: 'from-teal-500 to-green-500' },
              { name: 'Sécurité applicative - JWT / OAuth 2.0 / RBAC', level: 85, color: 'from-rose-500 to-pink-500' },
              { name: 'Méthodes & Qualité - Scrum / Agile / Tests / CI-CD', level: 88, color: 'from-pink-500 to-rose-500'}
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
                  title: 'Cloud, APIs & Services AWS',
                  org: 'AWS DynamoDB (NoSQL) · AWS AppSync (API GraphQL) · Introduction à Amazon Q Developer',
                  year: '2023–2025'
                },
                {
                  title: 'Télécoms, CTI & Intégration des systèmes',
                  org: 'Solutions Call Center et développement de scripts personnalisés · Altitude : ACP System Administrator · Altitude : ACP Technical Support',
                  year: '2023'
                },
                {
                  title: 'Intégration des Systèmes & Interopérabilité des Applications',
                  org: 'Intégration des solutions applicatives · Interconnexion des systèmes d’information · Échanges de données entre applications et services',
                  year: '2023'
                },
                {
                  title: 'Qualité logicielle, Tests & Méthodes Agiles',
                  org: 'Scrum et méthodes agiles · Tests unitaires et d’intégration avec React Testing Library · Débogage et optimisation des performances applicatives',
                  year: '2021–2022'
                },
                {
                  title: 'Bases de données & Technologies NoSQL',
                  org: 'MongoDB : approfondissement du modèle NoSQL · Modélisation et gestion des données',
                  year: '2020'
                },
                {
                  title: 'Systèmes d’information & Technologies télécoms',
                  org: 'SQL Server 2008 R2 · Hybrid Communication Server · Configuration de balises GPS',
                  year: '2019'
                },
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
                { title: 'Technical Solution Lead | Senior Full Stack & Mobile Engineer', org: 'COMAFRIQUE TECHNOLOGIES', year: '2021-Present' },
                { title: 'Lead Technical Project Engineer | Innovation & Application Development', org: 'COMAFRIQUE TECHNOLOGIES', year: '2019-2021' },
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
              Projets & Réalisations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez une sélection de projets illustrant mon expertise en conception de solutions applicatives, développement Full Stack et Mobile, intégration d’API et interconnexion de systèmes d’information. Certains projets étant soumis à des obligations de confidentialité, leur présentation est volontairement limitée aux éléments non sensibles.
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
      
<section id="contact" className="py-24 md:py-32 bg-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <span className="inline-block text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">
        Restons en contact
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Échangeons sur vos projets
      </h2>

      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>

      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Vous recherchez une expertise en développement applicatif,
        intégration d’API ou systèmes d’information ? Je suis ouvert
        aux opportunités professionnelles, aux collaborations techniques
        et aux projets innovants.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 gap-6">
      {[
        {
          icon: MapPin,
          title: 'Localisation',
          value: "Abidjan, Côte d’Ivoire",
          color: 'from-red-500 to-pink-500',
          description: 'Localisation professionnelle',
        },
        {
          icon: Phone,
          title: 'Téléphone',
          value: '+225 07 79 04 66 07',
          href: 'tel:+2250779046607',
          color: 'from-green-500 to-emerald-500',
          description: 'Appel téléphonique',
        },
        {
          icon: Mail,
          title: 'E-mail professionnel',
          value: 'camsoib01@gmail.com',
          href: 'mailto:camsoib01@gmail.com',
          color: 'from-blue-500 to-cyan-500',
          description: 'Me contacter par e-mail',
        },
        {
          icon: Globe,
          title: 'Portfolio',
          value: 'camsoib.github.io',
          href: 'https://camsoib.github.io/github.io/',
          color: 'from-purple-500 to-indigo-500',
          description: 'Découvrir mes projets',
        },
      ].map((item, index) => {
        const CardIcon = item.icon;

        return (
          <div
            key={index}
            className="group bg-gradient-to-br from-slate-50 to-blue-50
              border border-slate-100 p-6 md:p-8 rounded-2xl
              hover:shadow-xl hover:border-blue-100
              transition-all duration-300 hover:-translate-y-1"
          >
            <div
              className={`w-14 h-14 bg-gradient-to-r ${item.color}
                rounded-xl flex items-center justify-center mb-5
                group-hover:scale-110 transition-transform duration-300`}
            >
              <CardIcon className="text-white" size={26} />
            </div>

            <h3 className="font-bold text-gray-900 text-lg mb-2">
              {item.title}
            </h3>

            {item.href ? (
              <a
                href={item.href}
                className="inline-flex items-center gap-2 text-blue-700
                  font-semibold break-all hover:text-blue-900
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-blue-500 rounded"
                aria-label={`${item.description} : ${item.value}`}
              >
                {item.value}
                <ArrowRight
                  size={16}
                  className="shrink-0 transition-transform
                    group-hover:translate-x-1"
                />
              </a>
            ) : (
              <p className="text-gray-700 font-semibold">
                {item.value}
              </p>
            )}

            <p className="text-sm text-gray-500 mt-2">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>

    <div className="mt-14 md:mt-16 text-center">
      <p className="text-gray-700 font-semibold mb-5">
        Retrouvez-moi également en ligne
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/ibrahim-camara"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Consulter mon profil LinkedIn"
          title="LinkedIn"
          className="group p-4 bg-gradient-to-r from-blue-600 to-blue-700
            text-white rounded-full shadow-md hover:shadow-xl
            hover:scale-110 transition-all duration-300
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          <Linkedin size={26} />
        </a>

        <a
          href="mailto:camsoib01@gmail.com"
          aria-label="M'envoyer un e-mail"
          title="E-mail"
          className="group p-4 bg-gradient-to-r from-purple-600 to-purple-700
            text-white rounded-full shadow-md hover:shadow-xl
            hover:scale-110 transition-all duration-300
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-purple-500 focus-visible:ring-offset-2"
        >
          <Mail size={26} />
        </a>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Au plaisir d’échanger avec vous sur vos projets et vos enjeux techniques.
      </p>
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
              <p className="text-gray-400">Technical Solution Lead | Applications, APIs & Intégration SI</p>
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