import { useState } from 'react';
import { Menu, X, ChevronDown, Github, Linkedin, Mail, MapPin, Phone, Globe } from 'lucide-react';
import profilImage from "./assets/profile.png";
import aboutImage from "./assets/a-propos.jpg";
import interventionImage from "./assets/mobile-intervention-reserse.jpg";
import callImage from "./assets/call-center.png";
import bibliothequeImage from "./assets/bibliohtheque.png";
import devImage from "./assets/dev-web.png";
import projectManagementImage from "./assets/project-managementok.png";
import mobileDevImage from "./assets/mobile-dev.png";
import mobileMoneyImage from "./assets/mobile-money.jpg";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    image: string;
    category: string;
    description: string;
    technologies: string[];
    details: string;
  } | null>(null);

  const projects = [
    {
      title: 'Application mobile de gestion des interventions de dépannage sur le terrain',
      image: interventionImage,
      category: 'Application mobile',
      description: 'Cette application mobile a été conçue pour améliorer l’efficacité de la gestion des interventions de dépannage. Elle permet un suivi rigoureux des tickets d’intervention créés suite à des pannes signalées par les abonnés.',
      technologies: ['Flutter', 'Node.js', 'Express.js', 'SQL Server', 'Procédures stockées', 'API REST sécurisée (JWT, HTTPS)'],
      details: `L’objectif : Optimiser le traitement des incidents sur le terrain à travers une application mobile dédiée aux équipes d’intervention.
    
     Rôles utilisateurs :
    - USER : Consultation, traitement et mise à jour des tickets d’intervention.
    - SUPERVISOR : Supervision des opérations et coordination des équipes techniques.
    - ADMIN : Administration des comptes utilisateurs et des accès.
    
     Public visé :
    - Techniciens de maintenance
    - Responsables d’exploitation
    - Administrateurs système
    
     Fonctionnalités principales :
    1. Filtrage des tickets d’intervention
       - Sélection par zone (exploitation) et centre de distribution.
       - Organisation des tickets en trois onglets :
         - Distribution CD : Tickets nouvellement assignés.
         - En cours : Tickets dont l’intervention a été démarrée puis reportée.
         - Terminées : Tickets traités et en attente de validation ou clôture.
    
    2. Consultation détaillée des tickets
       - Informations du ticket : numéro, date, type, urgence, adresse précise, etc.
       - Données de l’abonné : nom, section, numéro compteur, type de compteur, etc.
       - Historique du ticket : évolution complète depuis sa création.
       - Historique des interventions précédentes.
    
    3. Traitement et mise à jour des interventions
       - Ajout des éléments lors de l’intervention :
         - Causes réelles de la panne.
         - Articles ou outils utilisés avec quantités.
         - Commentaires techniques.
       - Actions possibles :
         * Terminer : Le ticket passe en “En attente de clôture”.
         * Reporter : Le ticket reste en “En cours d’intervention”.
    
     Exemple d’utilisation :
    Un technicien d’intervention se connecte à l’application mobile, filtre les tickets en fonction de sa zone d’intervention, sélectionne un ticket nouvellement assigné, démarre l’intervention, renseigne les causes de la panne ainsi que les articles utilisés, puis marque le ticket comme "Terminé" pour qu’il soit validé par un superviseur.`,
    }    
    ,
    {
      title: 'Bibliothèque Numérique',
      image: bibliothequeImage,
      category: 'Application Web',
      description: "Cette application web vise à offrir aux étudiants une plateforme centralisée d'accès à une bibliothèque numérique riche en contenus pédagogiques : livres numériques, sujets d’examens et devoirs, tous classés par thématique et niveau.",
      technologies: ['React.js', 'Material UI', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'API REST'],
      details: `
    
    Public cible :
    - Étudiants de collèges, lycées et universités
    - Enseignants (accès dédié pour le dépôt de contenu)
    - Administrateurs (supervision des contenus et des utilisateurs)
    
    Fonctionnalités principales :
    
    Pour les étudiants :
    - Création de compte et authentification
    - Consultation de livres numériques et sujets d’examens
    - Recherche avancée avec filtres par catégorie, niveau ou thématique
    - Téléchargement des documents
    - Ajout de documents aux favoris pour consultation rapide
    
    Pour les enseignants :
    - Dépôt de documents pédagogiques (livres, sujets, devoirs)
    - Saisie des métadonnées : titre, description, niveau, thématique
    
    Pour les administrateurs :
    - Gestion des comptes utilisateurs (étudiants et enseignants)
    - Validation, suppression ou mise à jour des contenus déposés
    - Suivi des consultations et des téléchargements
    `
    }
    ,
    {
      title: 'Intranet Ministère',
      image: devImage,
      category: 'Application web',
      description: 'Application web sécurisée, exclusivement réservée aux utilisateurs habilités. Cette application permet une gestion centralisée et sécurisée de certains fichiers à caractères sensibles que nous ne nommerons pas.',
      technologies: [
        'PHP',
        'JavaScript',
        'CSS',
        'MySQL',
        'Linux',
        'API REST sécurisée (JWT, HTTPS)',
        'SSL/TLS'
      ],
      details: `Objectif
    L'application permet aux utilisateurs disposant des accréditations nécessaires de se connecter via un login et un mot de passe. Les principales fonctionnalités incluent :
    
    - Accès sécurisé à l'application pour les utilisateurs autorisés.
    - Récupération et affichage des fichiers spécifiques.
    - Possibilité de télécharger les fichiers.
    
    Ce projet a été entièrement développé en PHP avec une architecture REST, sécurisé par JWT et HTTPS, et hébergé sur un serveur Linux.
    
    Public visé
    - Utilisateurs accrédités du Ministère
    - Administrateurs système
    - Développeurs et ingénieurs en sécurité
    
    Sécurité et Confidentialité
    L'application est conçue avec une priorité absolue sur la sécurité et la confidentialité des données. Les mesures de sécurité comprennent :
    - Authentification par login et mot de passe pour garantir que seuls les utilisateurs autorisés ont accès.
    - Utilisation de protocoles de communication sécurisés (HTTPS) pour toutes les interactions avec l'application.
    - Stockage sécurisé des fichiers audio et des informations des utilisateurs.
    
    Fonctionnalités Clés
    - Connexion Sécurisée : Authentification stricte pour accéder à l'application, garantissant que seules les personnes accréditées peuvent y accéder.
    - Gestion des fichiers : Affichage et organisation des fichiers dans une interface claire et intuitive.
    - Téléchargement : Option de téléchargement pour une analyse ou un archivage ultérieur.
    `
    }    
    ,
    {
      title: 'Application de Gestion de Projets Collaboratifs',
      image: projectManagementImage,
      category: 'Application web',
      description: 'Application web moderne et intuitive permettant une gestion complète des projets au sein d’une organisation. Cette plateforme est conçue pour optimiser la planification, le suivi des tâches, la collaboration en équipe et l’analyse des performances.',
      technologies: [
        'React.js',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Socket.io',
        'Authentification JWT',
        'Gestion des rôles'
      ],
      details: `
    Objectif
    Cette application permet aux différents profils utilisateurs (chefs de projets, collaborateurs, managers) de planifier, suivre et collaborer en temps réel sur l’avancement des projets.
    
    Public visé
    - Entreprises ou structures souhaitant centraliser la gestion de projets.
    - Équipes techniques, marketing ou transverses.
    - Responsables de planification, chefs d’équipe, analystes projets.
    
    Collaboration et Productivité
    La plateforme vise à fluidifier la communication entre les membres d’une équipe projet, tout en offrant une vision claire et en temps réel de l’état d’avancement. Des indicateurs clés et des rapports visuels facilitent le pilotage et la prise de décisions stratégiques.
    
    Fonctionnalités clés
    - Dashboard interactif : affichage global des projets, suivi de l’avancement et des membres actifs.
    - Vue calendrier : planification visuelle des échéances et événements.
    - Gestion des équipes : visualisation et statistiques par membre et par projet.
    - Suivi des tâches : création, assignation, progression et clôture des tâches.
    - Rapports dynamiques : génération de statistiques pour évaluer la productivité et la performance par projet ou par équipe.
    `
    }
    ,
    {
      title: 'Application Mobile de Gestion des Tickets',
      image: mobileDevImage,
      category: 'Application mobile',
      description: "Application mobile interfacée avec GLPI (Gestionnaire Libre de Parc Informatique), développée pour optimiser la gestion des tickets de support. Elle permet aux utilisateurs de suivre, traiter et transférer des tickets directement depuis leur smartphone, tout en recevant des notifications en temps réel.",
      technologies: ['Flutter', 'Dart', 'Notifications Push', 'API REST GLPI'],
      details: `
    
    Objectif
    Faciliter le suivi et le traitement des tickets techniques en mobilité, tout en assurant une réactivité accrue grâce à l’intégration avec l’API REST de GLPI.
    
    Public visé
    - Utilisateurs finaux de COMAFRIQUE TECHNOLOGIES
    - Administrateurs GLPI
    - Responsables du support technique
    
    Fonctionnalités clés
    
      Dashboard interactif
    - Affichage d’un camembert représentant la répartition des tickets.
    - Nombre total de tickets résolus et en attente.
    - Taux de résolution global.
    - Liste des derniers tickets en attente de traitement.
    
      Affichage des tickets
    - Tri automatique du plus récent au plus ancien.
    - Affichage du niveau d'urgence pour chaque ticket.
    - Détail complet de chaque ticket : ID, dates de création et résolution, statut, demandeur, destinataire, etc.
    - Fonction de recherche avancée pour retrouver un ticket spécifique.
    
      Transfert de tickets
    - Transfert d’un ticket à un autre utilisateur via un menu déroulant contenant les noms et prénoms des utilisateurs enregistrés dans GLPI.
    - Ajout de descriptions ou commentaires lors de la résolution d’un ticket.
    
    **Notifications push**
    - Réception instantanée de notifications lors de l’assignation ou la mise à jour d’un ticket.
    
    Conclusion
    L’application mobile de gestion des tickets de COMAFRIQUE TECHNOLOGIES améliore l’efficacité opérationnelle des équipes techniques, tout en garantissant un traitement rapide et structuré des demandes via une interface simple, moderne et intuitive.
    `
    }
    ,
    {
      title: "Interface d'un agent lors de la réception d'appel",
      image: callImage,
      category: "Intégration Call Center",
      description: "Mise en place d’un centre d’appels pour la Société Nationale d’Électricité du Burkina Faso (SONABEL) afin d’améliorer son service client.",
      technologies: [
        "Plateforme Altitude (Enghouse Company)",
        "Scripts personnalisés",
        "SQL Server",
        "Procédures stockées"
      ],
      details: `Le centre d’appels repose sur une interface scriptée qui guide les agents lors des appels entrants. Cette interface permet de :
    
    - Fournir des informations aux clients.
    - Recueillir les préoccupations des clients.
    - Stocker les informations relatives aux interactions.
    - Générer des tickets pour assurer le suivi des problèmes.
    
      Plateforme Utilisée  
    Le système s’appuie sur la solution Altitude d’Enghouse Company, intégrée avec des scripts personnalisés pour automatiser et structurer les échanges entre l’agent et le client.
    
      Fonctionnalités Clés  
    - Interface Utilisateur pour les Agents : Une interface intuitive et interactive qui guide les agents tout au long de l’appel.
    - Affichage des Informations Client : Les données du client s’affichent automatiquement dès la réception de l’appel, facilitant une prise en charge efficace.
    - Recueil Structuré des Préoccupations : L’interface permet de documenter les demandes des clients de manière claire et organisée.
    - Gestion Automatisée des Tickets : Un ticket est généré à chaque interaction, avec un suivi intégré jusqu’à résolution.
    
      Processus d’Appel  
    1. Réception de l’appel : L’interface affiche les informations du client et le script adapté au contexte.  
    2. Assistance et Information : L’agent suit le script pour répondre aux besoins du client.  
    3. Documentation : Les préoccupations du client sont saisies dans le système.  
    4. Création de Ticket : Un ticket est automatiquement généré, contenant les détails du problème et les actions prévues.
    
    Cette solution a permis à la SONABEL d’optimiser la gestion des appels entrants, de mieux suivre les demandes clients et d’améliorer la qualité de son service client.`
    }
    ,
    {
      title: 'Intégration sécurisée Mobile Money, SMART IVR & API PUK Request',
      image: mobileMoneyImage,
      category: 'Intégration Mobile Money',
      description: 'Intégration de plusieurs services critiques (Mobile Money, IVR, récupération de PUK) en établissant une communication sécurisée entre les serveurs du client et ceux de notre entreprise.',
      technologies: ['.NET', 'C#', 'cURL', 'PowerShell', 'OpenSSL', 'API'],
      details: `Dans ce projet, j’ai assuré l’intégration de services critiques pour un partenaire stratégique, notamment le transfert d’argent Mobile Money, l'IVR intelligent (SMART IVR), et la récupération de code PUK via API.
L’objectif principal était d’établir une connexion sécurisée entre les serveurs du client et notre infrastructure.

 Mes contributions principales :
Génération et gestion de certificats SSL (CSR, certificats racine & intermédiaire).
Installation et configuration sécurisée des certificats sur nos serveurs.
Tests de connectivité entre les serveurs avec validation des échanges HTTPS.
Adaptation du fichier hosts pour assurer une résolution sécurisée.
Implémentation des principales APIs :
SPTRANSFER : Transfert de fonds
DEBIT : Paiement initié via USSD ou web
GETTRANSACTIONSTATUS, REFUND, VALIDATEACCOUNTHOLDER, etc.

 Résultat :
Une communication fiable et sécurisée entre les systèmes, permettant au client de proposer des services digitaux robustes et intégrés, tout en respectant les normes de sécurité exigées.
 `},
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">Ibrahim CAMARA</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'experience', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`${
                    activeSection === item ? 'text-blue-600' : 'text-gray-600'
                  } hover:text-blue-600 capitalize`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'about', 'skills', 'experience', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-10 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Ingénieur Développeur Full Stack
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Spécialisé en développement web et mobile avec plus de 10 ans d'expérience
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Me Contacter
                </button>
                <a
  href="/github.io/CV/cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
>
  Voir mon CV
</a>

              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={profilImage}
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">À Propos</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={aboutImage}
                alt="About"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Concepteur, développeur Web & mobile</h3>
              <p className="text-gray-600 mb-6">
              Je suis un développeur passionné et déterminé, animé par la volonté constante d’exceller dans chacune de mes missions. Cette exigence de rigueur et de performance s’est traduite dès mon parcours académique, où j’ai eu l’honneur d’être major de promotion et de recevoir une mention Bien lors de ma soutenance de fin d’études.

Aujourd’hui, je mets cette même énergie au service du monde professionnel, en m’impliquant pleinement dans les projets auxquels je participe et en cherchant toujours à apporter une réelle valeur ajoutée à l’entreprise.

Mon profil est résolument full stack et polyvalent : je maîtrise des technologies telles que .NET, C#, PHP, API REST, HTML5, CSS3, JavaScript, avec une expertise particulière en React.js, Node.js et Express.js. Je suis également compétent en bases de données (PostgreSQL, SQL Server, MySQL, MongoDB) et en développement mobile avec Flutter.

Je suis à l’aise avec la modélisation MERISE/UML, et j’ai une bonne pratique des outils de gestion de projet comme Jira. En parallèle, je possède une bonne maîtrise de l’anglais, ce qui me permet de collaborer efficacement dans des environnements multiculturels ou internationaux.

Je combine ainsi une formation solide, une véritable passion pour le développement et une approche orientée résultats. Mon objectif est simple : contribuer activement à des projets ambitieux et innovants, et accompagner les équipes vers l’excellence.
              </p>
              {/* <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="font-semibold">Email:</p>
                  <p className="text-gray-600">camsoib01@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold">Téléphone:</p>
                  <p className="text-gray-600">+225 0779046607</p>
                </div>
                <div>
                  <p className="font-semibold">Localisation:</p>
                  <p className="text-gray-600">Abidjan, CÔTE D'IVOIRE</p>
                </div>
                <div>
                  <p className="font-semibold">Expérience:</p>
                  <p className="text-gray-600">10+ ans</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Compétences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Node.js/Express.js/Nest.js</span>
                  <span>95%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-blue-600 rounded" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">.Net</span>
                  <span>90%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-blue-600 rounded" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">PHP</span>
                  <span>90%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-blue-600 rounded" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">React.js/Next.js</span>
                  <span>95%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-blue-600 rounded" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Flutter/Dart</span>
                  <span>95%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-blue-600 rounded" style={{ width: '95%' }}></div>
                </div>
              </div>
              
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">PostgreSQL/SQL Server/MySQL/MongoDB</span>
                  <span>95%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-blue-600 rounded" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">AWS</span>
                  <span>90%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-blue-600 rounded" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">CI/CD</span>
                  <span>90%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-blue-600 rounded" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Scrum</span>
                  <span>90%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-blue-600 rounded" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">DevOps</span>
                  <span>90%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-blue-600 rounded" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Expérience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Formation</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold">Formations IT</h4>
                  <p className="text-gray-600">TUNAV Tunisie | 2019</p>
                </div>
                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold">Diplôme d'Ingénieur en Informatique</h4>
                  <p className="text-gray-600">GROUPE CEFIAT | 2010 - 2012</p>
                </div>
                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold">Diplôme de Brevet de Technicien Supérieur option NTIC</h4>
                  <p className="text-gray-600">GROUPE LOKO | 2008 - 2009</p>
                </div>
                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold">Baccalauréat Série D</h4>
                  <p className="text-gray-600">Lycée Municipal de Marcory | 2007</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Parcours Professionnel</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold">Ingénieur Développeur Full stack grands comptes</h4>
                  <p className="text-gray-600">COMAFRIQUE TECHNOLOGIES | 2021 - Present</p>
                </div>
                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold">Développeur d’application / Chef de projet</h4>
                  <p className="text-gray-600">COMAFRIQUE TECHNOLOGIES | 2019 - 2021</p>
                </div>
                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold">Développeur d’application/ Data Analyst</h4>
                  <p className="text-gray-600">COMAFRIQUE TECHNOLOGIES | 2015 - 2019</p>
                </div>
                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold">Responsable Informatique</h4>
                  <p className="text-gray-600">ECOLE DE MODE TIDIANE T. (EM2T) | 2014 - 2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Portfolio : Quelques Projets sélectionnés</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Contact</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="text-blue-600" size={24} />
                  <div>
                    <h4 className="font-semibold">Adresse</h4>
                    <p className="text-gray-600">Abidjan, CÔTE D'IVOIRE</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-600" size={24} />
                  <div>
                    <h4 className="font-semibold">Téléphone</h4>
                    <p className="text-gray-600">+225 0779046607</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-600" size={24} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">camsoib01@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex space-x-4">
                <a href="https://github.com/camsoib" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ibrahim-camara" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}
      {/* Contact Section */}
<section id="contact" className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Contact</h2>
    <div className="space-y-8 text-center">
      <div className="flex items-center justify-center space-x-4">
        <MapPin className="text-blue-600" size={24} />
        <div>
          <h4 className="font-semibold">Adresse</h4>
          <p className="text-gray-600">Abidjan, CÔTE D'IVOIRE</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <Phone className="text-blue-600" size={24} />
        <div>
          <h4 className="font-semibold">Téléphone</h4>
          <p className="text-gray-600">+225 0779046607</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <Mail className="text-blue-600" size={24} />
        <div>
          <h4 className="font-semibold">Email</h4>
          <p className="text-gray-600">camsoib01@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <Globe className="text-blue-600" size={24} />
        <div>
          <h4 className="font-semibold">Site web</h4>
          <a
            href="https://camsoib.github.io/github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            camsoib.github.io
          </a>
        </div>
      </div>
      <div className="flex justify-center space-x-6 mt-6">
        {/* <a
          href="https://github.com/camsoib"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600"
        >
          <Github size={28} />
        </a> */}
        <a
          href="https://www.linkedin.com/in/ibrahim-camara"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600"
        >
          <Linkedin size={28} />
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Ibrahim CAMARA. Tous droits réservés.</p>
        </div>
      </footer>

      {/* Project Modal */}
{selectedProject && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg w-[90vw] h-[100vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
          <button 
            onClick={() => setSelectedProject(null)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={28} />
          </button>
        </div>
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="w-full h-[50vh] object-contain rounded-lg mb-6"
        />
        <div className="space-y-4">
          <p className="text-gray-600">{selectedProject.description}</p>
          <div>
            <h4 className="font-semibold mb-2">Technologies utilisées:</h4>
            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Détails du projet:</h4>
            <p className="text-gray-600 whitespace-pre-line">{selectedProject.details}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default App;