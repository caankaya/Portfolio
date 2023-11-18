function About() {
  return (
    <div className="main">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <img src="/about.png" className="max-w-sm rounded-lg shadow-2xl mt-auto" />
          </div>
          <div>
            <h2 className="text-5xl font-bold">C'est qui lui ?</h2>
            <p className="py-6">
              Je suis Can 🙋, un développeur spécialisé en JavaScript et React ⚛. J'ai récemment terminé une formation
              intensive🎓 de 6 mois, où j'ai acquis des compétences solides en développement front-end et backend. J'ai
              travaillé sur des projets concrets collaborant avec d'autres développeurs  et j'ai utilisé des
              technologies telles que PostgreSQL 🐘 Node.js et Sequelize pour créer des applications web complètes 🌐
            </p>
            <h2 className="text-5xl font-bold">Keskilséfaire ?</h2>
            <p className="py-6">
              Maquetter une application @Wireframes
              <br />
              Rédiger le détail des fonctionnalités d'une application web ou mobile @User stories
              <br />
              Réaliser une interface statique et adaptable @Responsive Design
              <br />
              Développer une interface utilisateur web dynamique @Intéractions
              <br />
              Créer une base de données @MCD | MLD | MPD
              <br />
              Développer les composants accès aux donées @ORM | @dataMapper
            </p>
            <h2 className="text-5xl font-bold">Tu sé utilisé quoi ?</h2>
            <p className="py-6">
              ReactJS | React Native | Redux
              <br />
              HTML | CSS | Javascript | Typescript
              <br />
              NodeJS | PostgreSQL | Sequelize
              <br />
              TailwindCSS | SASS
              <br />
              NextJS
              <br />
              Vitest | React Testing Library
              <br />
              Adobe Photoshop | Premier Pro
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
