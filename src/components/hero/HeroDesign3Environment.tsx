export default function HeroDesign3Environment() {
  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Static cinematic FNAR environment.
          Copy the supplied image to:
          public/images/fnar-design3-hero.svg
      */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/fnar-design3-hero.svg')",
          backgroundPosition: 'center center',
          transform: 'scale(1.015)',
        }}
      />

      {/* Left-side suppression layer.
          The artwork already contains static network details here.
          This navy veil pushes them back so the LIVE Design 2 network
          remains visually dominant. */}
      <div
        className="absolute inset-y-0 left-0 w-[64%]"
        style={{
          background:
            'linear-gradient(90deg, rgba(9,22,42,.58) 0%, rgba(13,30,53,.43) 38%, rgba(15,34,58,.18) 72%, transparent 100%)',
        }}
      />

      {/* Quiet the right side enough for Arabic hero copy to stay legible,
          without flattening the architecture. */}
      <div
        className="absolute inset-y-0 right-0 w-[47%]"
        style={{
          background:
            'linear-gradient(270deg, rgba(10,24,45,.62) 0%, rgba(13,29,51,.38) 48%, transparent 100%)',
        }}
      />

      {/* Keep the bright threshold cinematic rather than blown out. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 57% 61%, transparent 0%, transparent 14%, rgba(8,20,38,.06) 31%, rgba(7,17,33,.17) 100%)',
        }}
      />

      {/* Fine FNAR technical grid. Very subtle: the moving signal system
          should be the first thing the eye reads. */}
      <div
        className="absolute inset-0 hidden opacity-[0.055] md:block"
        style={{
          backgroundImage:
            'linear-gradient(rgba(132,164,177,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(132,164,177,.16) 1px, transparent 1px)',
          backgroundSize: '92px 92px',
          maskImage:
            'linear-gradient(to right, black 0%, black 48%, transparent 76%)',
          WebkitMaskImage:
            'linear-gradient(to right, black 0%, black 48%, transparent 76%)',
        }}
      />

      {/* Bottom depth keeps the transition area grounded. */}
      <div
        className="absolute inset-x-0 bottom-0 h-[38%]"
        style={{
          background:
            'linear-gradient(to top, rgba(5,14,28,.48) 0%, rgba(7,18,34,.16) 52%, transparent 100%)',
        }}
      />

      {/* Edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(3,11,24,.22), transparent 20%, transparent 78%, rgba(3,11,24,.26))',
        }}
      />

      {/* Mobile crop protection. */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(8,20,38,.16), rgba(8,20,38,.42))',
        }}
      />
    </div>
  );
}
