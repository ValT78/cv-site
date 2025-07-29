
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
    tags: ["", "<u>Frontend: Angular</u>", "<u>Backend: Flask</u>", "<u>OpenAPI</u>", "<u>Proxmox</u>", "<u>IAAS</u>", "<u>CICD Gitlab</u>", "<u>Jenkins</u>"],
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
        text: "En recherche, il est nécessaire de répéter les mêmes expériences en faisant juste varier les paramètres. Mon rôle a été de créer leur environnement et d'automatiser la plupart de leur tâches, pour qu'ils puissent se concentrer sur la recherche.",
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
      {
        title: "CCNA : Certification Cisco",
        description: "Notions avancées d'architechture et de configuration réseau : TPs sur le routage, VLANs, QoS, IPv6, etc.",
        tags: ["Linux", "Bash", "Grafana", "Puppet"],
        imageUrl: "/projects/ccna.png",
        link: "https://github.com/ValT78/cern-automation"
      },
      {
        title: "Cours Docker + CKA",
        description: "Cours et labs sur Udemy : notion avancées sur les Container Docker et Kubernetes",
        tags: ["Docker", "Kubernetes", "Helm"],
        imageUrl: "../projects/cka.webp",
        link: "https://github.com/ValT78/cern-automation"
      },
    ],
  },
  {
  title: "Créateur de Jeux",
  projects: [
  {
    title: "Vice Président du CELL",
    description: "Club de création de jeux de l'école. Organisation de formation. Participation à 9 Game Jams (création d'un jeu en équipe en 48h).",
    tags: ["Kubernetes", "ArgoCD", "Prometheus", "Grafana"],
    imageUrl: "/k8s-cluster.png",
    link: "https://github.com/ton-utilisateur/k8s-ia"
  },
  {
    title: "Rupture : jeu écologique",
    description: "Objectif : Faire ressentir la dépendance de nos sociétés aux ressources naturels de manière immersive. <br>6 mois de travail, 15 pages de dialogues, de vrais personnes utilisés pour modéliser, animer et enregistrer les voix des personnages. Nous avons créé un Open World sur Unreal Engine 5 pour servir l'histoire et l'expérience de jeu.",
    tags: ["ELK", "Grafana", "Ansible", "Python"],
    imageUrl: "/observabilite.png",
    link: "https://github.com/ton-utilisateur/monitoring-platform"
  },
  {
    title: "Evolis - Jeu Evolutif",
    description: "Simuler des créatures évoluant en autonomie selon des règles darwiniennes <strong>(en Rust)</strong> <br>Obtention de comportements émergents.",
    tags: ["Unity", "C#", "GameDesign"],
    imageUrl: "/unity-game.png",
    link: "https://github.com/ton-utilisateur/ecogame"
  }]},
];

//CCNA et CKA

// Itch et la participation à des Game Jams
// Le jeu sur Unreal Engine
// Evolis en Rust
// Vice Président CELL 

//Projet cluster 

//404 CTF
//Hackropole
//Cryptohack