import { useParams, Link } from 'react-router';
import { projects } from '../../data/projects';

/**
 * Project / Case Study Page — Reusable template
 *
 * Reads the `:slug` from the URL, finds the matching project in the
 * data config, and renders the case study. You'll replace this layout
 * with your actual Figma designs.
 */
export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  // 404 state
  if (!project) {
    return (
      <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[160px]">
        <p className="font-['SF_Pro_Display:Semibold',sans-serif] text-[48px] text-[#1e1e1e] mb-[24px]">
          Project not found
        </p>
        <p className="font-['SF_Pro_Text:Regular',sans-serif] text-[20px] text-[rgba(30,30,30,0.54)] mb-[48px]">
          The project you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="bg-[#111] px-[24px] py-[14px] rounded-[16px] font-['SF_Pro_Text:Regular',sans-serif] text-[18px] text-white hover:text-[#ffb811] transition-colors duration-300 no-underline"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="content-stretch flex flex-col items-center px-[80px] py-[80px] relative">
      <div className="max-w-[800px] w-full">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-[8px] font-['SF_Pro_Text:Regular',sans-serif] text-[16px] text-[rgba(30,30,30,0.54)] hover:text-[#f60] transition-colors duration-200 mb-[48px] no-underline"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to work
        </Link>

        {/* Project header */}
        <div className="flex flex-col gap-[20px] mb-[48px]">
          <p className="font-['SF_Pro_Display:Semibold',sans-serif] text-[44px] text-[#1e1e1e] leading-[1.2] tracking-[0.88px]">
            {project.title}
          </p>

          <div className="flex items-center gap-[12px]">
            <span className="font-['SF_Pro_Text:Regular',sans-serif] text-[20px] text-[rgba(30,30,30,0.54)]">
              {project.company}
            </span>
            <div className="w-[1px] h-[20px] bg-[rgba(30,30,30,0.2)]" />
            <span className="font-['SF_Pro_Text:Regular',sans-serif] text-[20px] text-[rgba(30,30,30,0.54)]">
              {project.category}
            </span>
          </div>

          {/* Tags */}
          <div className="flex gap-[12px] flex-wrap">
            {project.tags.map((tag, i) => (
              <div
                key={i}
                className="px-[14px] py-[8px] rounded-[24px] shrink-0"
                style={{
                  background: tag.bgColor ?? 'transparent',
                  border: tag.bgColor ? 'none' : '1px solid rgba(0,0,0,0.12)',
                }}
              >
                <span className="font-['SF_Pro_Text:Regular',sans-serif] text-[14px] text-[#1e1e1e]">
                  {tag.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image placeholder */}
        <div className="w-full rounded-[20px] overflow-hidden bg-[#e8e8e8] mb-[64px]" style={{ aspectRatio: '800 / 480' }}>
          {project.heroImage ? (
            <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="font-['SF_Pro_Text:Regular',sans-serif] text-[16px] text-[rgba(30,30,30,0.4)]">
                Hero image — replace with your Figma design
              </p>
            </div>
          )}
        </div>

        {/* Overview */}
        {project.overview && (
          <div className="mb-[64px]">
            <p className="font-['SF_Pro_Display:Semibold',sans-serif] text-[28px] text-[#1e1e1e] mb-[20px] tracking-[0.56px]">
              Overview
            </p>
            <p className="font-['SF_Pro_Text:Regular',sans-serif] text-[18px] text-[rgba(30,30,30,0.82)] leading-[1.7]">
              {project.overview}
            </p>
          </div>
        )}

        {/* Content sections */}
        {project.sections?.map((section, i) => (
          <div key={i} className="mb-[56px]">
            <p className="font-['SF_Pro_Display:Semibold',sans-serif] text-[24px] text-[#1e1e1e] mb-[16px] tracking-[0.48px]">
              {section.heading}
            </p>
            <p className="font-['SF_Pro_Text:Regular',sans-serif] text-[18px] text-[rgba(30,30,30,0.82)] leading-[1.7]">
              {section.body}
            </p>
            {section.image && (
              <div className="mt-[32px] w-full rounded-[16px] overflow-hidden">
                <img src={section.image} alt={section.heading} className="w-full object-cover" />
              </div>
            )}
          </div>
        ))}

        {/* Divider */}
        <div className="h-px w-full bg-[rgba(30,30,30,0.1)] my-[48px]" />

        {/* Next project navigation */}
        {(() => {
          const currentIndex = projects.findIndex((p) => p.slug === slug);
          const nextProject = projects[(currentIndex + 1) % projects.length];
          return (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="flex items-center justify-between group no-underline"
            >
              <div>
                <p className="font-['SF_Pro_Text:Regular',sans-serif] text-[14px] text-[rgba(30,30,30,0.54)] mb-[8px] uppercase tracking-[1.5px]">
                  Next project
                </p>
                <p className="font-['SF_Pro_Display:Semibold',sans-serif] text-[28px] text-[#1e1e1e] group-hover:text-[#f60] transition-colors duration-200 tracking-[0.56px]">
                  {nextProject.title}
                </p>
                <p className="font-['SF_Pro_Text:Regular',sans-serif] text-[18px] text-[rgba(30,30,30,0.54)] mt-[4px]">
                  {nextProject.company}
                </p>
              </div>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[rgba(30,30,30,0.3)] group-hover:text-[#f60] transition-colors duration-200 group-hover:translate-x-[4px] transition-transform">
                <path d="M12 6L22 16L12 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          );
        })()}
      </div>
    </div>
  );
}
