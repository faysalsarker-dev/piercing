import { Star } from "lucide-react";

export default function GoogleRatingSection() {
  return (
    <section className="card-color py-10 px-4 md:px-16 lg:px-24 text-white my-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        
        {/* Screenshot */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/ratting.jpg" 
            alt="Google-betyg skärmdump" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold  mb-4">
            Högt betyg på Google
          </h2>

          <div className="flex items-center gap-2 mb-3">
            <div className="flex text-yellow-400">
              {Array(5).fill().map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold ">
              4.9 / 5.0
            </span>
          </div>

          <p className=" mb-6">
            Vi är stolta över att ha ett fantastiskt betyg från våra kunder på Google. 
            Läs deras recensioner och se varför så många väljer oss!
          </p>

          <a 
            href="https://www.google.com/maps/place/Piercing+S%C3%B6dermalm/@59.313286,18.077588,16z/data=!4m6!3m5!1s0x465f77fcd11d453d:0xeabf111cb28a4da0!8m2!3d59.3132858!4d18.0775879!16s%2Fg%2F11lf0t638p?hl=sv&entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Visa på Google
          </a>
        </div>
      </div>
    </section>
  );
}
