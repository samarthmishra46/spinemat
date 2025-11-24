export function VideoRunning() {
  const videos = [
    "https://res.cloudinary.com/dqyizevct/video/upload/v1763996749/WhatsApp_Video_2025-11-24_at_12.59.18_PM_sp2zd1.mp4",
    "https://res.cloudinary.com/dqyizevct/video/upload/v1764005165/Spinemat_script_7_jvi0yg.mp4",
    "https://res.cloudinary.com/dqyizevct/video/upload/v1764004997/WhatsApp_Video_2025-11-24_at_12.56.54_PM_kwxaum.mp4",
    "https://res.cloudinary.com/dqyizevct/video/upload/v1764005556/Spinemat_script_1_1_piu0i4.mp4",
    "https://res.cloudinary.com/dqyizevct/video/upload/v1764005027/WhatsApp_Video_2025-11-24_at_12.59.17_PM_nvhjcm.mp4",
        "https://res.cloudinary.com/dqyizevct/video/upload/v1764005589/Spinemat_Script_5_1_lp9s6n.mp4",
    
  ];

  return (
    <div className="relative w-full overflow-hidden mt-6 sm:w-full md:max-w-4xl lg:max-w-6xl mx-auto mb-3">
      {/* Left Blur */}
      <div className="absolute top-0 left-0 h-full w-20 
                      bg-gradient-to-r from-[#E1E7FB] to-transparent z-10"></div>

      {/* Right Blur */}
      <div className="absolute top-0 right-0 h-full w-20 
                      bg-gradient-to-l from-[#f3f2fa] to-transparent z-10"></div>

      {/* Marquee Wrapper */}
      <div className="flex whitespace-nowrap animate_marquee">
        {[...videos, ...videos].map((src, idx) => (
          <div key={idx} className="flex-shrink-0 w-32 sm:w-40 md:w-48 px-4">
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
