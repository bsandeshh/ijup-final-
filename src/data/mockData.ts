import { Paper, EditorialMember, JournalInfo } from '../types';

export const MOCK_PAPERS: Paper[] = [
  {
    id: '1',
    title: 'Quantum Computing Applications in Modern Cryptography',
    abstract: 'This paper explores the implications of quantum computing advancements on modern cryptographic systems. We present a comprehensive analysis of how quantum algorithms, particularly Shor\'s and Grover\'s algorithms, threaten current encryption standards. Furthermore, we investigate post-quantum cryptography solutions designed to withstand attacks from quantum computers, with a focus on lattice-based, hash-based, and code-based cryptographic schemes.',
    authors: [
      { id: 'a1', name: 'Dr. Sarah Chen', affiliation: 'MIT', isCorresponding: true },
      { id: 'a2', name: 'Prof. David Nakamoto', affiliation: 'Stanford University', isCorresponding: false },
      { id: 'a3', name: 'Dr. Alan Rodriguez', affiliation: 'IBM Quantum Research', isCorresponding: false }
    ],
    keywords: ['Quantum Computing', 'Cryptography', 'Shor\'s Algorithm', 'Post-Quantum', 'Cybersecurity'],
    publicationDate: '2025-01-15',
    doi: '10.1234/ijup.2025.01.001',
    status: 'published',
    pdfUrl: '/papers/quantum-cryptography.pdf',
    journalVolume: '12',
    journalIssue: '1',
    pageRange: '12-28'
  },
  {
    id: '2',
    title: 'Machine Learning Approaches for Climate Change Prediction Models',
    abstract: 'This research paper presents novel machine learning techniques for improving climate change prediction models. We compare traditional statistical methods with advanced deep learning architectures, demonstrating a 27% improvement in prediction accuracy across multiple climate variables. Our approach incorporates multimodal data from satellite imagery, ocean sensors, and atmospheric measurements to create more robust predictive models.',
    authors: [
      { id: 'b1', name: 'Dr. Maria Gonzalez', affiliation: 'University of California, Berkeley', isCorresponding: true },
      { id: 'b2', name: 'Dr. Thomas Wright', affiliation: 'NASA Climate Research Division', isCorresponding: false }
    ],
    keywords: ['Machine Learning', 'Climate Change', 'Predictive Modeling', 'Deep Learning', 'Environmental Science'],
    publicationDate: '2024-12-05',
    doi: '10.1234/ijup.2024.12.003',
    status: 'published',
    pdfUrl: '/papers/ml-climate-prediction.pdf',
    journalVolume: '11',
    journalIssue: '4',
    pageRange: '87-102'
  },
  {
    id: '3',
    title: 'Advancements in CRISPR-Cas9 Gene Editing for Inherited Disease Treatment',
    abstract: 'This paper reviews recent advancements in CRISPR-Cas9 gene editing technology for treating inherited diseases. We discuss improvements in delivery methods, precision, and reduced off-target effects. The paper includes case studies of clinical trials utilizing CRISPR therapy for sickle cell anemia, cystic fibrosis, and Huntington\'s disease, highlighting both successes and remaining challenges in the field.',
    authors: [
      { id: 'c1', name: 'Prof. Jennifer Liu', affiliation: 'Harvard Medical School', isCorresponding: true },
      { id: 'c2', name: 'Dr. Robert Martinez', affiliation: 'Broad Institute', isCorresponding: false },
      { id: 'c3', name: 'Dr. Sophia Kim', affiliation: 'Seoul National University', isCorresponding: false },
      { id: 'c4', name: 'Dr. Michael Chen', affiliation: 'Beijing Genomics Institute', isCorresponding: false }
    ],
    keywords: ['CRISPR-Cas9', 'Gene Editing', 'Genetic Disorders', 'Bioethics', 'Clinical Trials'],
    publicationDate: '2024-11-22',
    doi: '10.1234/ijup.2024.11.008',
    status: 'published',
    pdfUrl: '/papers/crispr-advances.pdf',
    journalVolume: '11',
    journalIssue: '3',
    pageRange: '145-163'
  },
  {
    id: '4',
    title: 'Sustainable Materials for Next-Generation Solar Cells',
    abstract: 'This study investigates eco-friendly and sustainable materials for improving solar cell efficiency. We explore perovskite-based photovoltaics, organic solar cells, and new composite materials that reduce environmental impact while enhancing energy conversion efficiency. Our research includes comprehensive lifecycle assessments and economic viability studies for commercial applications.',
    authors: [
      { id: 'd1', name: 'Dr. James Wilson', affiliation: 'National Renewable Energy Laboratory', isCorresponding: true },
      { id: 'd2', name: 'Prof. Aisha Patel', affiliation: 'Indian Institute of Technology, Delhi', isCorresponding: false },
      { id: 'd3', name: 'Dr. Emma Johnson', affiliation: 'University of Cambridge', isCorresponding: false }
    ],
    keywords: ['Solar Energy', 'Sustainable Materials', 'Perovskites', 'Photovoltaics', 'Renewable Energy'],
    publicationDate: '2024-10-30',
    doi: '10.1234/ijup.2024.10.012',
    status: 'published',
    pdfUrl: '/papers/sustainable-solar.pdf',
    journalVolume: '11',
    journalIssue: '2',
    pageRange: '34-52'
  },
  {
    id: '5',
    title: 'Neural Interfaces: Bridging Human Cognition and Artificial Intelligence',
    abstract: 'This paper examines the evolving landscape of neural interfaces designed to create direct communication pathways between the human brain and artificial intelligence systems. We discuss recent advances in non-invasive brain-computer interfaces, challenges in signal processing and interpretation, and ethical considerations for cognitive privacy and autonomy in an era of increasing brain-technology integration.',
    authors: [
      { id: 'e1', name: 'Dr. Benjamin Lee', affiliation: 'Neuralink Research', isCorresponding: true },
      { id: 'e2', name: 'Prof. Clara Oswald', affiliation: 'University College London', isCorresponding: false },
      { id: 'e3', name: 'Dr. Nathan Drake', affiliation: 'Montreal Neurological Institute', isCorresponding: false }
    ],
    keywords: ['Neural Interfaces', 'Brain-Computer Interface', 'Cognitive Science', 'Artificial Intelligence', 'Neuroethics'],
    publicationDate: '2024-09-15',
    doi: '10.1234/ijup.2024.09.005',
    status: 'published',
    pdfUrl: '/papers/neural-interfaces.pdf',
    journalVolume: '11',
    journalIssue: '1',
    pageRange: '72-91'
  }
];

export const EDITORIAL_MEMBERS: EditorialMember[] = [
  {
    id: '1',
    name: 'Dr. S. S. Bellale',
    title: 'Principal',
    affiliation: ' Dayanand Science Collage, Latur',
    role: 'Editor-in-Chief',
    bio: 'Mathematician with 26+ years of expertise in Nonlinear Analysis, with nearly 58 international publications across the USA, Europe, Singapore, Australia, and more. Founder of BMSD Society, promoting research and education for over 22 years.',
    photoUrl: '/ediotrial.board pic/s s bellale photo.jpg',
    email: 'sidhesh.bellale@gmail.com'
  },
  {
    id: '2',
    name: 'Dr. J. S. Dargad',
    title: 'Former Principal ',
    affiliation: 'Dayanand Science Collage, Latur',
    role: 'Editor-in-Chief',
    bio: 'With nearly 29 years as a Principal, expert in Science, Technology, and Educational Management, skilled in leadership and driving academic excellence.',
    photoUrl: '/ediotrial.board pic/dargad photo.jpg',
    email: 'jsdargad@rediffmail.com'
  },
  {
    id: '3',
    name: 'Mr. Sandesh Bellale',
    title: 'Dept. of Electronic and telecommunication',
    affiliation: 'VIT, Pune',
    role: 'Managing Editor',
    bio: 'Responsible for managing and leading the entire team, overseeing all operations and processes of the International Journal of Universal Print (IJUP) to ensure smooth publication and quality control.',
    photoUrl: '/ediotrial.board pic/sandesh photo.jpg',
    email: 'sandeshbellale2020@gmail.com'
  },
  {
    id: '4',
    name: 'Dr. Prafulla S. Katkar,',
    title: 'Department of Biology,',
    affiliation: 'University of Rome "Tor Vergata", Via Della Ricerca Scientifica, Rome, Italy',
    role: 'Section Editor',
    bio: 'Expert in inorganic biochemistry with key research on human DNA topoisomerase inhibitors, contributing to therapeutic advances in molecular medicine and genetic regulation.',
    photoUrl: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    email: 'javid@amu.ac.in'
  },
  {
    id: '5',
    name: 'Dr. L. V. Thakre',
    title: 'Electronics and Computer Sciences',
    affiliation: 'Head, Physics Dept. at Dayanaand Science Collage, latur',
    role: 'Section Editor',
    bio: 'A retired professor with about 38 years of rich academic experience, now actively engaged in exploring new avenues of research. With a strong foundation in teaching and scholarly work, currently focused on contributing to advanced research and knowledge creation in the field.',
    photoUrl: '/cover.pages/Science & Technology.JPG',
    email: 'thakrelalit@yahoo.com'
  },
  {
    id: '6',
    name: 'Dr. J. K. Kim',
    title: 'Department of Mathematics',
    affiliation: 'Kyungnam University Masan Kyungnam, South-Korea.',
    role: 'Section Editor',
    bio: 'Renowned Korean mathematician with 40+ years of expertise in Constructive Mathematical Analysis. Known for advancing rigorous methods in real analysis and logic, he remains an influential figure in global mathematical research.',
    photoUrl: '/ediotrial.board pic/j k kim photo.jpg',
    email: 'jongkyuk@kyungnam.ac.kr'
  }

];

export const JOURNAL_INFO: JournalInfo = {
  title: 'International Journal of Universal Print',
  issn: '2456-7890',
  description: 'The International Journal of Universal Print (IJUP) is a peer-reviewed, open-access journal dedicated to publishing high-quality research across multiple disciplines. Our journal aims to disseminate innovative research, foster academic dialogue, and advance knowledge in fields ranging from natural sciences to humanities. IJUP employs a rigorous double-blind peer review process to ensure the highest standards of academic integrity and research quality.',
  aims: [
    'To publish original, high-quality research that contributes significantly to its field',
    'To provide a platform for interdisciplinary research and collaboration',
    'To ensure rapid dissemination of important findings through an efficient review process',
    'To promote open access to scientific knowledge for researchers worldwide',
    'To maintain the highest standards of academic integrity and ethical publishing practices'
  ],
  scope: [
    'Computer Science and Artificial Intelligence',
    'Life Sciences and Biotechnology',
    'Environmental Sciences and Sustainability',
    'Physics and Quantum Technologies',
    'Engineering and Materials Science',
    'Social Sciences and Humanities',
    'Medical Sciences and Healthcare'
  ],
  indexing: [
    'Web of Science',
    'Scopus',
    'PubMed',
    'IEEE Xplore',
    'Google Scholar',
    'Directory of Open Access Journals (DOAJ)'
  ]
};