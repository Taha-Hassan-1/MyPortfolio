export type ProjectType = 'unity' | 'web';

export interface ProjectLink {
  /** Button text, e.g. "Download", "itch.io", "GitHub", "Live demo" */
  label: string;
  url: string;
}

export interface Project {
  /** Unique URL-friendly id, e.g. "space-runner" */
  slug: string;
  title: string;
  type: ProjectType;
  description: string;
  /** Tech/genre tags, e.g. ["C#", "3D", "Shader"] or ["React", "API"] */
  tags: string[];
  /**
   * Thumbnail path. Put images in `public/images/` and reference them
   * relative to the site base using `import.meta.env.BASE_URL`, e.g.
   * `${import.meta.env.BASE_URL}images/space-runner.png`.
   */
  image: string;
  links: ProjectLink[];
  year?: number;
}
