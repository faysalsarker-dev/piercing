import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import mapImage from "../assets/map.png"; // Make sure this path is correct

export default function Contact() {
  return (
    <section className="py-16 px-4 background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Hör av dig – Vi finns här för dig!</h3>
            <p className="mb-6">
              För mer information eller förfrågningar om våra behandlingar & priser är du välkommen att kontakta oss!
            </p>

            <div className="space-y-3">
              <p>
                <strong>E-post:</strong>{" "}
                <a href="mailto:klippsodermalm1@gmail.com" className="link link-primary">
                  klippsodermalm1@gmail.com
                </a>
              </p>
              <p>
                📞 <strong>Telefon:</strong>{" "}
                <span>
                  <a href="tel:086415057" className="hover:underline">08-6415057</a> eller{" "}
                  <a href="tel:0739842237" className="hover:underline">0739-842237</a>
                </span>
              </p>
              <p>
                📍 <strong>Adress:</strong><br />
                Klipp Södermalm<br />
                Åsögatan 128<br />
                11624 Stockholm, Sweden
              </p>
              <p>
                <strong>Öppettider:</strong><br />
                Mån–Fre: 10:00–18:00<br />
                Lördag: 10:00–15:00<br />
                Söndag: Stängt
              </p>
            </div>

            <div
              className="mt-10 flex justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a
                href="https://www.facebook.com/SalongKlippSodermalm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white/40 hover:bg-white/30 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 ring-1 ring-white/30"
              >
                <FaFacebookF className="text-blue-600 text-2xl drop-shadow-sm" />
              </a>
              <a
                href="https://www.instagram.com/klippsodermalm?igsh=MXBtcXI4OXJlNmsxZQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white/40 hover:bg-white/30 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 ring-1 ring-white/30"
              >
                <FaInstagram className="text-pink-500 text-2xl drop-shadow-sm" />
              </a>
              <a
                href="https://www.tiktok.com/@klippsodermalm?_t=ZN-8xMi2fNDXTa&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white/40 hover:bg-white/30 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 ring-1 ring-white/30"
              >
                <FaTiktok className="text-gray-200 text-2xl drop-shadow-sm" />
              </a>
            </div>
          </div>

          {/* Map Preview */}
          <div className="rounded-lg overflow-hidden shadow-lg" id="map-container">
            <a
              href="https://www.google.com/maps/dir//Piercing+S%C3%B6dermalm+%C3%85s%C3%B6gatan+128+116+24+Stockholm+Sverige/@59.3132957,18.0775831,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x465f77fcd11d453d:0xeabf111cb28a4da0!2m2!1d18.0775831!2d59.3132957!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visa vägbeskrivning till Piercing Södermalm"
            >
              <img
                src={mapImage}
                alt="Visa karta till Piercing Södermalm"
                className="w-full h-auto rounded-lg hover:opacity-90 transition"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
