import { Link, useParams } from 'wouter';
import { useI18n } from '../i18n';
import { projects } from '../data/projects';

export function ProjectDetail() {
  const params = useParams<{ id: string }>();
  const { language, t } = useI18n();
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    return (
      <main className="simple-page">
        <div className="simple-page__inner">
          <p className="section-number">(404)</p>
          <h1>{t.project.notFound}</h1>
          <Link href="/" className="text-link">
            {t.project.back}
          </Link>
        </div>
      </main>
    );
  }

  const copy = project.copy[language];

  return (
    <main className="project-page">
      <article className="project-page__inner">
        <section className="project-hero" aria-labelledby="project-title">
          <div className="project-copy-block">
            <h1 id="project-title">{copy.title}</h1>
            <p className="project-subtitle">{copy.client}</p>
            <p className="project-description">{copy.description}</p>
            <dl className="project-details">
              <div>
                <dt>{t.project.role}</dt>
                <dd>{copy.role}</dd>
              </div>
              <div>
                <dt>{t.project.year}</dt>
                <dd>{project.year}</dd>
              </div>
            </dl>
          </div>

          <div className="video-frame">
            <iframe
              src={project.videoUrl}
              title={copy.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <section className="frames-section" aria-labelledby="frames-title">
          <h2 id="frames-title" className="sr-only">
            {t.project.frames}
          </h2>
          <div className="frames-grid">
            {project.images.map((image, index) => (
              <img key={image} src={image} alt={t.project.frameAlt(copy.title, index + 1)} />
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
