export const experiences = [
  {
    id: 'cns',
    title: 'CNS Communications – Alternance',
    dates: 'Octobre 2024 – Maintenant',
    teaser: "J'ai développé une plateforme d'observabilité Open source sur Kubernetes",
    companyLogo: '/assets/logos/cns.png',
    tags: ['Kubernetes', 'ArgoCD', 'Opentelemetry', 'Grafana', 'Prometheus', 'Python'],
    githubLink: 'https://github.com/ValT78/observability-platform',
    images: [
      '/assets/exp/cns-dashboard.png',
      '/assets/exp/cns-architecture.png'
    ],
    details: [
      {
        title: 'Objectif',
        text: "Récupérer <strong>l'ENSEMBLE</strong> des <u>métriques</u>, <u>traces</u> et <u>logs</u> de l'entreprise, de les uniformiser et de les visualiser sur une plateforme <strong>centralisée</strong>. <br>Cela permet par exemple de correler les données des firewalls avec leur logs sur le même Dashboard. <br>Initialement, tout était dispersé sur divers outils incompatibles.",
      },
      {
        title: 'Une plateforme Open Source',
        text: "<u>OpenTelemetry</u> et Alloy m'ont permis de collecter et transformer les données pour les rendre compatibles entre elles.<br><u>Grafana</u> pour la visualisation.<br><u>Prometheus</u> et <u>Opensearch</u> pour le stockage (et l'analyse des données).<br>Des scripts <u>Python</u> m'ont permis d'utiliser les APIs des outils tiers pour la collecte.",
      },
      {
        title: 'Déploiement sur Kubernetes',
        text: "La plateforme fonctionne sur Kubernetes en respectant la philosophie <strong>GitOps</strong> avec <u>ArgoCD</u>. Je suis passé par les Helms charts officiels quand c'était possible pour déployer les différents outils.",
      }
    ]
  },
  {
    id: 'cern',
    title: 'CERN – Stage international',
    dates: 'Juin – Septembre 2024',
    teaser: 'Automatisation et monitoring pour compresser le cloud du CERN',
    companyLogo: '/assets/logos/cern.png',
    tags: ['Linux', 'Bash', 'Grafana', 'Puppet'],
    githubLink: 'https://github.com/ValT78/cern-automation',
    images: [
      '/assets/exp/cern-infra.png',
      '/assets/exp/cern-dataflow.png'
    ],
    details: [
      {
        title: 'Compresser 8Po de données',
        text: "Une nouvelle fonctionnalité de <strong>compression</strong> a été ajoutée sur l'outil utilisé pour gérer les données de scientifiques. Mon rôle était de l'implémenter et d'automatiser la compression des donnéees via du scripting Bash.",
      },
      {
        title: 'Monitoring à échelle',
        text: 'Déploiement de Prometheus et Grafana pour la supervision de services distribués. Compression de 8 Po de données.'
      }
    ]
  }
];
