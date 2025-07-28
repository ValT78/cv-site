
export const projects = [
  {
    title: "Réseau et DevOps",
    projects: [
  {
    id: 'formations',
    title: "Site d'hébergement des formations",
    teaser: "J'ai réalisé ce site connecté à notre Nextcloud qui affiche les formations (j'en ai réalisé certaines)",
    imageUrl: '/logos/md.png',
    tags: ['Frontend', 'Astro', 'Backend', 'Python', 'CICD Gitlab', 'nginx'],
    githubLink: 'https://github.com/ValT78/Contrapp',
    images: [
      '/exp/cern-infra.png',
      '/exp/cern-dataflow.png'
    ],
    details: [
      {
        title: "Premier stage formateur",
        text: "J'ai assisté l'équipe informatique dans ces tâches quotidiennes :<br>Gestion des incidents, supervision de l'infrastructure et gestion des sauvegardes.",
      },
      {
        title: 'Missions réalisées',
        text: "J'ai pris part au remplacement des switches réseau, configuré des PCs d'usine, et participé à la migration de l'intranet vers <u>Sharepoint</u> en utilisant <u>Powershell</u>.",
      }
    ]
  }
      {
        title: "CCNA : Certification Cisco",
        description: "Notions avancées d'architechture et de configuration réseau : TPs sur le routage, VLANs, QoS, IPv6, etc.",
        tags: ["Linux", "Bash", "Grafana", "Puppet"],
        imageUrl: "/assets/cern-infra.png",
        link: "ahttps://github.com/ValT78/cern-automation"
      },
      {
        title: "Cours Docker + CKA",
        description: "Cours et labs sur Udemy : notion avancées sur les Container Docker et Kubernetes",
        tags: ["Docker", "Kubernetes", "Helm"],
        imageUrl: "/assets/cern-infra.png",
        link: "ahttps://github.com/ValT78/cern-automation"
      },
      {
        title: "MLOps et gestion de mon cluster Kube",
        description: "Des thésards en IA ont fait appel à moi pour déployer un cluster de GPU sur Kubernetes. Le but est de créer des pipelines pour automatiser l'entraînement de modèles IA, et la construction automatique d'image Docker.<br>Cela m'a appris à monter mon propre cluster, et le mettre au service d'autrui pour cimplifier leur quotidien.",
        tags: ["Kubernetes", "Bash", "Grafana", "Puppet"],
        imageUrl: "/assets/cern-infra.png",
        link: "ahttps://github.com/ValT78/cern-automation"
      }
    ],
  },
  {
  title: "Créateur de Jeux",
  projects: [
  {
    title: "Vice Président du CELL",
    description: "Club de création de jeux de l'école. Organisation de formation. Participation à 9 Game Jams (création d'un jeu en équipe en 48h).",
    tags: ["Kubernetes", "ArgoCD", "Prometheus", "Grafana"],
    imageUrl: "/assets/k8s-cluster.png",
    link: "https://github.com/ton-utilisateur/k8s-ia"
  },
  {
    title: "Rupture : jeu écologique",
    description: "Objectif : Faire ressentir la dépendance de nos sociétés aux ressources naturels de manière immersive. <br>6 mois de travail, 15 pages de dialogues, de vrais personnes utilisés pour modéliser, animer et enregistrer les voix des personnages. Nous avons créé un Open World sur Unreal Engine 5 pour servir l'histoire et l'expérience de jeu.",
    tags: ["ELK", "Grafana", "Ansible", "Python"],
    imageUrl: "/assets/observabilite.png",
    link: "https://github.com/ton-utilisateur/monitoring-platform"
  },
  {
    title: "Evolis - Jeu Evolutif",
    description: "Simuler des créatures évoluant en autonomie selon des règles darwiniennes <strong>(en Rust)</strong> <br>Obtention de comportements émergents.",
    tags: ["Unity", "C#", "GameDesign"],
    imageUrl: "/assets/unity-game.png",
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