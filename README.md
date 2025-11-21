🌟 Anish Jadhav Memorial Foundation (AJMF) Website Frontend 
🌟📝 Project OverviewThis is the official frontend repository for the Anish Jadhav Memorial Foundation (AJMF) Skilling Institute website.The website's primary goal is to showcase the foundation's mission—empowering underprivileged youth through skills training—and to highlight the facilities, residential programs (in collaboration with NavGurukul), and opportunities for partnership and donation.The design emphasizes a clean, modern, and trustworthy aesthetic, featuring key sections like an interactive campus tour, a "Day in the Life" routine, and transparent details on infrastructure and sustainability.
🚀 Key FeaturesResponsive Design: Built using React and Tailwind CSS for optimal viewing on all devices.Visual Campus Tour: An attractive, interactive photo gallery with dynamic effects to showcase the campus.Holistic Experience: Detailed sections covering the daily residential life, including academics, meals, and cultural activities.Modern UI: Utilizes a professional color palette (Saffron, White, Dark Gray) and dynamic components (e.g., 3D hover cards, sticky capacity bar).Performance: Developed using modern JavaScript/React and bundled efficiently with Vite.🛠 Tech StackCategoryTechnologyFrameworkReactBuild ToolViteStylingTailwind CSSLanguageJavaScript (JSX)💻 Getting Started (Local Setup)Follow these steps to get the project up and running on your local machine for development and testing.PrerequisitesYou must have Node.js (which includes npm) installed on your system.1. Clone the RepositoryClone the project to your local machine and navigate into the project directory:Bashgit clone <YOUR_REPOSITORY_URL>
cd AJMF_WEBSITE_FRONTEND
2. Install DependenciesInstall all necessary project packages using npm:Bashnpm install
# or, using Yarn:
# yarn install
3. Run the Development ServerStart the local development server:Bashnpm run dev
# or, using Yarn:
# yarn dev
The site will typically open in your browser at http://localhost:5173/ (or another port specified by Vite).📂 Project StructureThe project follows a standard modern React structure:AJMF_WEBSITE_FRONTEND/
├── public/
│   ├── images/         # All static assets (AJMF.jpeg, classroom.jpeg, etc.)
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── layout/     # Header, Footer components
│   │   ├── reusable/   # SectionHeader, FeatureCard, RoutineStep, etc.
│   │   └── specific/   # Components unique to a single page (e.g., Hero.jsx)
│   ├── pages/          # Main route components (Campus.jsx, Home.jsx, About.jsx)
│   ├── App.css         # Global styles (including Tailwind imports and custom classes)
│   └── App.jsx         # Main application file where routes are defined
└── ...
🎨 Design and CustomizationThe core UI styling and custom classes are managed across src/App.css and Tailwind configuration.Colors: Custom CSS variables or classes (e.g., .text-ajmf-primary, .bg-ajmf-secondary) define the Saffron/Gray palette.Images: To change the gallery images, update the paths within the relevant CSS classes (e.g., background-image: url(...)) in your stylesheets. Ensure new images are placed in the /public/images folder.3D Hover: The dynamic 3D effects on elements like Feature Cards are controlled by Tailwind utility classes (e.g., [perspective:1000px], group-hover:rotate-x-3).
🤝 ContributionWe welcome contributions to help improve the AJMF website and enhance its mission!Fork the repository.Create a new feature branch (git checkout -b feature/amazing-feature).Commit your changes (git commit -m 'Feat: Add an Amazing Feature').Push to the branch (git push origin feature/amazing-feature).Open a Pull Request.
