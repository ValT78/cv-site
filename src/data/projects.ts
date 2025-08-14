export const projects = [
  {
    title: "Projets DevOps",
    projects: [
  {
    id: 'formations',
    title: "formations.minet.net",
    teaser: "Site web d'hébergements des formations dispensées par l'association MiNET (j'en ai réalisé certaines :p)",
    imageUrl: '/logos/md.png',
    tags: ['Frontend: Astro', 'Backend: Python', 'CICD Gitlab', 'nginx'],
    link: 'https://formations.minet.net',
    images: [
      '/exp/cern-infra.png',
      '/exp/cern-dataflow.png'
    ],
    details: [
      {
        title: "Qu'est ce ?",
        text: "Nous dispensons des formations pour nos adhérents, et les stockons sur un Nextcloud interne. Ce site web rend les formations accessibles à tous en ligne.",
      },
      {
        title: "Frontend + Backend",
        text: "Réalisé avec le framework web <u>Astro</u>. Il récupère les images et pdf via l'API de notre serveur <u>Nextcloud</u> avec un script<u>Python</u> exécuté régulièrement via <u>cron</u>.",
      },
      {
        title: "CICD et déploiement",
        text: " J'ai déployé moi même le site sur une VM avec <u>nginx</u>. Le code source est sur Gitlab, avec une <u>pipeline CICD</u> pour tester puis déployer automatiquement le site à chaque commit. ",
      },
    ]
  },
  {
    id: 'hosting',
    title: "Mise à jour du IAAS de MiNET : hosting.minet.net",
    teaser: "J'ai ajouté optimisé, documenté, et ajouté des features sur notre plateforme d'hébergement de VM pour nos adhérents.",
    tags: ["Frontend: Angular", "Backend: Flask", "OpenAPI", "Proxmox", "IAAS", "CICD Gitlab", "Jenkins"],
    imageUrl: "/projects/cern-automation.png",
    link: "https://github.com/ValT78/cern-automation",
    images: [
      '/exp/cern-infra.png',
      '/exp/cern-dataflow.png'
    ],
    details: [
      {
        title: "Qu'est ce ?",
        text: "Nous mettons à disposition des VM Proxmox pour nos adhérents. Hosting est l'interface web qui permet d'interagir avec.",
      },
      {
        title: "MàJ une Application Fullstack",
        text: "Développé en <u>Angular</u>, avec un backend <u>Python</u> utilisant <u>Flask</u>, <u>Connexion</u>, et l'API de <u>Proxmox</u>, et une base de données <u>MariaDB</u>. Les 2 communiquent avec une API de 50 endpoints. Je me suis chargé de mettre à jour les dépendances du projet.",
      },
      {
        title: "S'adapter à une stack existante",
        text: "J'ai appris à appréhender rapidement ce nouvel environnement, en y apportant des optimisations à tous les niveaux, divisant par 2 les temps de chargement. Tous mon code est testé avec <u>pytest</u>, et adapté à la pipeline <u>Gitlab CICD</u>.",
      },
      {
        title: "Documentation",
        text: "Plusieurs fonctionnalités ont été ajoutées sur le pannel admin. Puis je me suis chargé de documenter l'ensemble du projet, pour qu'un débutant puisse facilement ajouter des fonctionnalités.",
      },
    ]
  },
  {
    id: 'mlops',
    title: "MLOps sur Kubernetes pour des thésards en IA",
    teaser: "J'ai déployé un cluster de GPU sur Kubernetes de A à Z",
    tags: ["Kubernetes", "Argo Workflow", "MLOps", "Automatisation", "ArgoCD", "Helm", "Linus", "CiCD Gitlab", "Harbor"],
    imageUrl: "/projects/cern-automation.png",
    link: "https://github.com/ValT78/cern-automation",
    images: [
      '/exp/cern-infra.png',
      '/exp/cern-dataflow.png'
    ],
    details: [
      {
        title: "Objectif",
        text: "En recherche, il est nécessaire de répéter les mêmes expériences en faisant juste varier les paramètres. Mon rôle a été de créer l'environnement et d'automatiser la plupart des tâches de Machine Learning, pour que les thésards puissent se concentrer sur la recherche.",
      },
      {
        title: "Pipelines pour l'IA avec Argo",
        text: "J'ai installé Argo Workflow : un logiciel de gestion de pipelines pour le machine learning, tirant plainement partie de Kubernetes. J'ai créé des templates, pour exécuter des jobs en parallèle sur les différents GPU. Le tout connecté à une base de données <u>Minio</u>.",
      },
      {
        title: "Construction automatique d'images Docker",
        text: "Grâce au CiCD Gitlab, les thésards construisent automatiquement des containers, en pushant juste les fichiers nécessaires. Elles sont stockées dans un registre privé <u>Harbor</u>.",
      },
      {
        title: "Gestion du cluster : GitOps",
        text: "J'utilise ArgoCD pour déployer automatiquement tous mes fichiers de confs : l'entièreté du cluster est versionné sur Gitlab. Je me base sur des Helms Charts communautaire pour déployer les applications.",

      },
    ]
  },
    ],
  },
  {
  title: "Créateur de Jeux",
  projects: [
  {
    id: 'cell',
    title: "Vice Président du CELL",
    teaser: "Club de création de jeux de l'école. Organisation de formation. Participation à 9 Game Jams (création d'un jeu en équipe en 48h).",
    tags: ["Kubernetes", "ArgoCD", "Prometheus", "Grafana"],
    imageUrl: "/k8s-cluster.png",
    link: "https://github.com/ton-utilisateur/k8s-ia"
  },
  {
    id: 'rupture',
    title: "Rupture : Jeu Unreal Engine",
    teaser: "En équipe de 4, nous voulions faire ressentir la dépendance de nos sociétés aux ressources naturels, à travers une aventure ultra-réaliste et immersive.",
    tags: ["Unreal Engine", "Scénarisation", "Ansible", "Python"],
    imageUrl: "/observabilite.png",
    link: "https://github.com/ton-utilisateur/monitoring-platform",
    images: [
      '/exp/cern-infra.png',
      '/exp/cern-dataflow.png'
    ],
    details: [
      {
        title: "6 mois de travail",
        text: "Je me suis chargé de rédiger 15 pages de scénario, dépeignant un univers pré-apocalyptique, 4 personnages, et 10 figurants. On découvre une ville futuriste dépendante de la technologie, ce qui va causer son effondrement.",
      },
      {
        title: "Un Open World 3D",
        text: "Le jeu alterne entre des cinématique 3D, des mini jeux, et des phases en Open World (J'ai réalisé entièrement ce dernier). Les graphismes très réalises participent à rendre l'univers crédible.",
      },
      {
        title: "Unreal et outils no code",
        text: "Pour le développement, j'ai choisi d'utiliser les intégrations no code de Unreal, qui m'ont permis de développer plusieurs segments du jeu en un temps réduit.",
      },
      {
        title: "Vrais acteurs et animations IA",
        text: "Les dialogues ont tous été enregistré par notre entourage, pour en ressentir l'impact dans le jeu. Nous avons également filmé les mouvements de leur visage, pour animer les personnages dans le jeu grâce à une IA spécialisée",
      },
    ]
  },
  {
    id: 'evolis',
    title: "Evolis",
    teaser: "Jeu simulant une évolution Darwiniste en Rust.",
    tags: ["Unity", "C#", "GameDesign"],
    imageUrl: "/unity-game.png",
    link: "https://github.com/ton-utilisateur/ecogame",
    images: [
      '/exp/cern-infra.png',
      '/exp/cern-dataflow.png'
    ],
    details: [
      {
        title: "Jeu 0 joueur",
        text: " J'ai créé un environnement de plus en plus complexe grâce au moteur Bevy, afin d'observer des comportements émergeants.",
      },
      {
        title: "Évolution Darwinienne",
        text: "les créatures se reproduisent en partageant leurs gènes (leur stats) entre elles, avec possibilité de mutation. Elles s'adaptent à leur environnement, et se battent pour survivre.",
      },
    ]
  },
  {
    id: 'xcube',
    title: "XCube : application Android",
    teaser: "Imaginez Tic Tac Toe, mais équilibré pour les 2 joueurs, et avec une rejouabilite infinie !",
    tags: ["Java", "MachineLearning", "GameDesign"],
    imageUrl: "/itchio.png",
    link: "https://github.com/ton-utilisateur/ecogame",
    images: [
      '/exp/cern-infra.png',
      '/exp/cern-dataflow.png'
    ],
    details: [
      {
        title: "But du jeu",
        text: "Le détail des règles est sur Github. Voici le SEUL jeu 2 joueurs, nécessitant uniquement un stylo et un tableau/feuille, qui ne possède pas de stratégie évidente pour gagner à tous les coups : des heures de fun sans matériel",
      },
      {
        title: "Application Android",
        text: "J'ai recodé cette application en <u>Java</u> pour Android. On peut jouer à 2 en local, ou chacun sur une instance de l'application grâce à un serveur distant.",
      },
      {
        title: "Machine Learning",
        text: "Une IA a été implémentée pour jouer contre le joueur 1. Elle utilise un algorithme de minimax, évitant de hardcoder des stratégies.",
      },
    ]
  },
]},
  {
    title: "Compétences et Certifications",
    projects: [
      {
        id: 'cybersecurity',
    title: "Autoformation en Cybersécurité",
    teaser: "J'adore résoudre des challenges, notamment en Cryptographie et en Web.",
    tags: ["CTF", "Hacking", "Cryptographie"],
    imageUrl: "/ctf.png",
    link: "https://github.com/ton-utilisateur/ecogame",
    images: [
      '/exp/cern-infra.png',
      '/exp/cern-dataflow.png'
    ],
    details: [
      {
        title: "CTF",
        text: "Participation à des compétitions de cyber sécurité comme le 404CTF (300ème / 3000 participants)",
      },
      {
        title: "Formations ",
        text: "Résolution de challenge sur les sites Hackropole.fr et cryptohack.com",
      },
    ]
  },
  {
    id: 'docker-k8s',
    title: "Cours de Docker et Kubernetes ",
    teaser: "J'ai suivi le cours Udemy pour passer la CKA (Certification Kubernetes)",
    tags: ["Kubernetes", "Docker"],
    imageUrl: "/certifications.png",
    link: "https://github.com/ton-utilisateur/ecogame",
  },
  {
    id: 'ccna',
    title: "CCNA : Certification Cisco",
    teaser: "Notions avancées d'architecture et de configuration réseau : TPs sur le routage, VLANs, QoS, IPv6, etc.",
    tags: ["Réseau", "Cisco"],
    imageUrl: "/ccna.png",
    link: "https://github.com/ton-utilisateur/ecogame"
  }
]}]

