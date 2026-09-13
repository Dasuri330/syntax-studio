export interface featuredProject {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  /**
   * Determines which illustrated mockup shows in the LEFT card.
   * 'medical' | 'permit' | 'dashboard' have custom illustrations.
   * Leave blank or use 'generic' for any new project without a custom one —
   * it will automatically fall back to a generic code-window visual.
   */
  visualType?: 'medical' | 'permit' | 'dashboard' | 'generic';
  /**
   * Path/URL to an actual screenshot of the project, shown in the RIGHT
   * panel by default. When the user clicks "View details" on the card,
   * this image fades out and is replaced by the description. If omitted,
   * a simple placeholder is shown instead.
   */
  image?: string;
}
