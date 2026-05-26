/**
 * ⭐ PROJECT CONFIG — Edit this file to add new projects to your portfolio.
 *
 * To add a new project:
 *   1. Copy one of the existing project blocks below
 *   2. Give it a unique `slug` (this becomes the URL: /projects/your-slug)
 *   3. Fill in the details
 *   4. Drop your thumbnail/hero images into src/imports/ or src/assets/
 *   5. The new card will automatically appear on the home page,
 *      and clicking it will open the case study page.
 */

export interface ProjectData {
  /** URL slug — e.g. "kolo" → /projects/kolo */
  slug: string;

  /** Card title shown on the home page */
  title: string;

  /** Company or client name */
  company: string;

  /** Project category (e.g. "Live QNA", "Group Bill Splitting") */
  category: string;

  /** Tag pills shown on the card (1 or 2 tags) */
  tags: Array<{
    label: string;
    /** Background color for the tag. Use null for an outlined style. */
    bgColor: string | null;
  }>;

  /** Which thumbnail animation variant to use on the home page card.
   *  For now: 'kolo' | 'gpay' | 'kirana' | 'generic'
   *  New projects default to 'generic' until a custom thumbnail is built. */
  thumbnailVariant: 'kolo' | 'gpay' | 'kirana' | 'generic';

  /** Hero/banner image path for the case study page */
  heroImage?: string;

  /** Short overview paragraph for the case study page */
  overview?: string;

  /** Case study content sections — you'll fill these in from your Figma designs */
  sections?: Array<{
    heading: string;
    body: string;
    image?: string;
  }>;
}

export const projects: ProjectData[] = [
  {
    slug: 'kolo',
    title: '150% increase in weekly engagement',
    company: 'Kolo.app',
    category: 'Live QNA',
    tags: [{ label: 'Engagement optimisation', bgColor: '#f0f0f0' }],
    thumbnailVariant: 'kolo',
    overview:
      'Redesigned the live Q&A experience to drive a 150% increase in weekly user engagement through improved interaction patterns and real-time feedback loops.',
    sections: [
      {
        heading: 'The Challenge',
        body: 'Kolo.app needed to increase weekly active engagement with their live Q&A feature. Users were dropping off before asking or answering questions.',
      },
      {
        heading: 'The Approach',
        body: 'Conducted user research to identify friction points, then redesigned the interaction flow with a focus on reducing time-to-first-action and adding social proof elements.',
      },
      {
        heading: 'The Outcome',
        body: 'The redesigned experience led to a 150% increase in weekly engagement, with users spending 2.3x more time in live sessions.',
      },
    ],
  },
  {
    slug: 'gpay',
    title: 'Simplifying unequal bill splitting',
    company: 'Google Pay',
    category: 'Group Bill Splitting',
    tags: [
      { label: 'Personal project', bgColor: null },
      { label: 'Retention optimisation', bgColor: '#ececec' },
    ],
    thumbnailVariant: 'gpay',
    overview:
      'A concept project exploring how Google Pay could simplify the awkward experience of splitting bills unequally among friends.',
    sections: [
      {
        heading: 'The Challenge',
        body: 'Splitting bills equally is simple, but real-world dining rarely works that way. Existing solutions make unequal splits tedious and error-prone.',
      },
      {
        heading: 'The Approach',
        body: 'Designed an intuitive drag-to-adjust interface that lets users visually allocate portions, with smart suggestions based on item selection.',
      },
      {
        heading: 'The Outcome',
        body: 'The concept demonstrated a 40% reduction in time-to-complete for unequal bill splits compared to existing flows.',
      },
    ],
  },
  {
    slug: 'kirana',
    title: 'Loyalty program for Kirana store owners',
    company: 'Kirana club',
    category: 'In-app landing page',
    tags: [{ label: 'Conversion and retention', bgColor: '#ececec' }],
    thumbnailVariant: 'kirana',
    overview:
      'Designed an in-app landing page to onboard Kirana store owners into a loyalty program, driving both conversion and long-term retention.',
    sections: [
      {
        heading: 'The Challenge',
        body: 'Kirana Club needed to convert store owners browsing the app into loyalty program participants, while keeping the onboarding frictionless.',
      },
      {
        heading: 'The Approach',
        body: 'Created a focused landing page with clear value propositions, social proof from other store owners, and a simplified sign-up flow.',
      },
      {
        heading: 'The Outcome',
        body: 'The landing page achieved a 35% conversion rate with strong retention metrics in the first 30 days.',
      },
    ],
  },
];
