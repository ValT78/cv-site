export const experiences = [
  {
    id: 'cns',
    title: 'CNS Communications – Alternance',
    dates: 'Octobre 2024 – Maintenant',
    teaser: 'Développement d’une plateforme d’observabilité complète sur Kubernetes.',
    companyLogo: '/assets/logos/cns.png',
    tags: ['Kubernetes', 'ArgoCD', 'Grafana', 'ELK'],
    githubLink: 'https://github.com/ValT78/observability-platform',
    images: [
      '/assets/exp/cns-dashboard.png',
      '/assets/exp/cns-architecture.png'
    ],
    details: [
      {
        title: 'Déploiement Kubernetes',
        text: 'Mise en place d’un cluster avec Rancher et Helm. Utilisation d’Argo CD pour le déploiement GitOps de services d’observabilité.'
      },
      {
        title: 'Stack complète',
        text: 'Collecte de métriques, traces et logs via OpenTelemetry, Grafana Loki, Prometheus, ELK. Création de dashboards personnalisés.'
      }
    ]
  },
  {
    id: 'cern',
    title: 'CERN – Stage international',
    dates: 'Juin – Septembre 2024',
    teaser: 'Automatisation et monitoring de systèmes à très grande échelle.',
    companyLogo: '/assets/logos/cern.png',
    tags: ['Puppet', 'Linux', 'Prometheus', 'Python'],
    githubLink: 'https://github.com/ValT78/cern-automation',
    images: [
      '/assets/exp/cern-infra.png',
      '/assets/exp/cern-dataflow.png'
    ],
    details: [
      {
        title: 'Infrastructure CERN',
        text: 'Refonte d’une partie de l’automatisation avec Puppet, scripts Bash et Python pour plus de flexibilité sur des nœuds critiques.'
      },
      {
        title: 'Monitoring à échelle',
        text: 'Déploiement de Prometheus et Grafana pour la supervision de services distribués. Compression de 8 Po de données.'
      }
    ]
  }
];
