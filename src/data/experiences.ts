export const experiences = [
  {
    id: 'cns',
    title: 'CNS Communications - Alternance',
    dates: 'Octobre 2024 - Maintenant',
    teaser: "J'ai développé une plateforme d'observabilité Open source sur Kubernetes",
    companyLogo: '/logos/cns.png',
    tags: ['Kubernetes', 'ArgoCD', 'Opentelemetry', 'Grafana', 'Prometheus', 'Python'],
    githubLink: 'https://github.com/ValT78/observability-platform',
    images: [
      '/exp/cns-dashboard.png',
      '/exp/cns-architecture.png'
    ],
    details: [
      {
        title: 'Objectif',
        text: "Récupérer <strong>l'ENSEMBLE</strong> des <u>métriques</u>, <u>traces</u> et <u>logs</u> de l'entreprise, de les uniformiser et de les visualiser sur une plateforme <strong>centralisée</strong>. <br>Cela permet par exemple de correler les données des firewalls avec leur logs sur le même Dashboard. <br>Initialement, tout était dispersé sur divers outils incompatibles.",
      },
      {
        title: 'Technos Open Source',
        text: "<u>OpenTelemetry</u> et Alloy m'ont permis de collecter et transformer les données pour les rendre compatibles entre elles.<br><u>Grafana</u> pour la visualisation.<br><u>Prometheus</u> et <u>Opensearch</u> pour le stockage (et l'analyse des données).<br>Des scripts <u>Python</u> m'ont permis d'utiliser les APIs des outils tiers pour la collecte.",
      },
      {
        title: 'Déploiement sur Kubernetes',
        text: "La plateforme fonctionne sur Kubernetes en respectant la philosophie <strong>GitOps</strong> avec <u>ArgoCD</u>. Je suis passé par les Helms charts officiels quand c'était possible pour déployer les différents outils.",
      }
    ]
  },
  {
    id: 'enedis',
    title: 'Enedis - Freelance',
    dates: 'Décembre - Avril 2025',
    teaser: "Création d'un jeu Unity pour sensibiliser aux écogestes sur l'économie d'électricité",
    companyLogo: '/logos/enedis.png',
    tags: ['Unity', 'C#'],
    githubLink: 'https://github.com/ValT78/EnedisGame',
    images: [
      '/exp/cern-infra.png',
      '/exp/cern-dataflow.png'
    ],
    details: [
      {
        title: 'Objectif',
        text: "Créer un jeu vidéo pour sensibiliser aux écogestes et à l'économie d'électricité.",
      },
    ]
  },
  {
    id: 'minet',
    title: 'MiNET -  Association fournissant internet à 800 adhérents',
    dates: '2022 - 2024',
    teaser: "Une infrastructure réseau et des services web, gérés par des étudiants. J'étais <strong>responsable Web et Formations</strong>.",
    companyLogo: '/logos/minet.avif',
    tags: ['Linux', 'Bash', 'Grafana', 'Puppet'],
    githubLink: 'https://github.com/ValT78/cern-automation',
    images: [
      '/exp/cern-infra.png',
      '/exp/cern-dataflow.png'
    ],
    details: [
      {
        title: 'Infrastructure 8 bâtiments',
        text: "Il fallait quotidiennement gérer les incidents, superviser l'infrastructure et gérer les sauvegardes. <br>J'ai pris part au remplacement des switches réseau, configuré des PCs d'usine, et participé à la migration de l'intranet vers <u>Sharepoint</u> en utilisant <u>Powershell</u>.",
      },
      {
        title: 'Monitoring à échelle',
        text: 'Déploiement de Prometheus et Grafana pour la supervision de services distribués. Compression de 8 Po de données.'
      },
      {
        title: 'Création et maintient des services webs',
        text: "Se référer à mes projets : j'ai mis à jour plusieurs services frontend+backend et ajouté des fonctionnalités. J'ai créé formations.minet.net"
      }
    ]
  },
  {
    id: 'cern',
    title: 'CERN - Stage international',
    dates: 'Juin - Septembre 2024',
    teaser: 'Automatisation et monitoring pour compresser le cloud du CERN',
    companyLogo: '/logos/cern.png',
    tags: ['Linux', 'Bash', 'Grafana', 'Puppet'],
    githubLink: 'https://github.com/ValT78/cern-automation',
    images: [
      '/exp/cern-infra.png',
      '/exp/cern-dataflow.png'
    ],
    details: [
      {
        title: 'Compresser 8Po de données',
        text: "Nouvelle fonctionnalité de <strong>compression</strong> ajoutée sur le cloud utilisé par les scientifiques du CERN : Mon rôle était de l'implémenter et d'automatiser la compression des donnéees via du <u>scripting Bash</u>.",
      },
      {
        title: 'Monitoring et scalabilité',
        text: "Monitoring de la progression de la compression grâce à Prometheus et Grafana. Déploiement de plusieurs VMs en parallèle avec Puppet pour accélérer le processus"
      }
    ]
  },
  {
    id: 'picquette',
    title: 'Picquette - Freelance',
    dates: 'Juin - Août 2024',
    teaser: "Création d'une application Windows de A à Z",
    companyLogo: '/logos/picquette.png',
    tags: ['Flutter', 'Frontend', 'Gestion de Projet'],
    githubLink: 'https://github.com/ValT78/Contrapp',
    images: [
      '/exp/cern-infra.png',
      '/exp/cern-dataflow.png'
    ],
    details: [
      {
        title: 'Objectif',
        text: "Rédiger un contrat est long et assez redondant. Mes clients souhaitaient une application pratique et esthétique, où l'on peut rentrer facilement les informations nécessaires. L'application génère ensuite un PDF à partir d'un template.",
      },
      {
        title: 'Gestion de projet',
        text: "Nous avons rédigé le cahier des charges ensemble.<br>J'ai réalisé une maquette pour valider le design et les fonctionnalités.<br>Puis le développement a commencé : en <strong>Flutter</strong>, avec un point de suivi hebdomadaire.",
      }
    ]
  },
  {
    id: 'desserts',
    title: 'Mademoiselle Desserts - Stage',
    dates: 'Juillet - Août 2023',
    teaser: "Infogérence et supervision de l'infrastructure",
    companyLogo: '/logos/md.png',
    tags: ['Réseau', 'Powershell', 'Sharepoint'],
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
];
