export const experiences = [
  {
    id: 'cns',
    title: 'CNS Communications – Alternance',
    dates: 'Octobre 2024 – Maintenant',
    teaser: "J'ai développé une plateforme d'observabilité complète, Open source, sur Kubernetes",
    companyLogo: '/assets/logos/cns.png',
    tags: ['Kubernetes', 'ArgoCD', 'Grafana', 'ELK'],
    githubLink: 'https://github.com/ValT78/observability-platform',
    images: [
      '/assets/exp/cns-dashboard.png',
      '/assets/exp/cns-architecture.png'
    ],
    details: [
      {
        title: 'Contexte',
        text: "L'objectif était de récupérer l'ENSEMBLE des métriques, traces et logs de l'entreprise, de les uniformiser et de les visualiser sur une plateforme centralisée. <br>Cela permet par exemple de correler les données des firewalls avec leur logs sur le même Dashboard. <br>Initialement, tout était dispersé sur divers outils incompatibles.",
      },
      {
        title: 'Une plateforme Open Source',
        text: "J'ai utilisé OpenTelemetry pour la collecte des données, Grafana pour la visualisation, Loki et Promtail pour les logs, et Prometheus pour les métriques. J'ai également intégré ArgoCD pour le déploiement continu de l'infrastructure.",
      },
      {
        title: 'Déploiement sur Kubernetes',
        text: "J'ai créé l'ensemble des manifests Kubernetes en suivant la philosophie GitOps avec ArgoCD. J'ai également utilisé les Helms charts officiels pour les outils comme Grafana, Loki, Promtail, etc.",
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
