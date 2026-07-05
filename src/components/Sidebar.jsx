import {
  Mail,
  Phone,
  MapPin,
  Download,
} from "lucide-react";

import portfolioData from "../data/portfolioData.js";

export default function Sidebar() {
  return (
    <aside
      className="
      lg:sticky
      lg:top-8
      h-fit
      "
    >
      <div
        className="
        bg-[#181818]
        border
        border-[#2a2a2a]
        rounded-3xl
        p-6

        lg:max-h-[calc(100vh-2rem)]
        overflow-y-auto

        overflow-y-auto
        scrollbar-thin
        scrollbar-thumb-transparent
        scrollbar-track-transparent
        "
      >
        {/* Profile */}

        <img
          src="/profile.jpg"
          alt="Mridul Kar"
          className="
          w-full
          h-[280px]
          object-cover
          rounded-2xl
          "
        />

        <h2 className="text-3xl font-black mt-5">
          {portfolioData.personal.name}
        </h2>

        <p className="text-orange-500 mt-1">
          {portfolioData.personal.title}
        </p>

        <p
          className="
          text-gray-400
          text-sm
          mt-4
          leading-7
          "
        >
          {portfolioData.personal.description}
        </p>

        

        {/* Divider */}

        <div className="h-px my-6" />

        {/* Social */}

        <div className="flex justify-center gap-4 mt-6">

          {portfolioData.social.map((social) => {

            const Icon = social.icon;

            return (

              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="
                w-12
                h-12
                rounded-xl
                bg-[#222]
                border
                border-[#333]
                flex
                items-center
                justify-center
                hover:border-orange-500
                hover:text-orange-500
                transition-all
                "
                title={social.name}
              >

                <Icon size={22} />

              </a>

            );

          })}

        </div>

        {/* Divider */}

        <div className="h-px my-6" />

        {/* Download */}

      <a
        href="/cv/Mridul-Kar-CV.pdf"
        download
        className="
          w-full
          mt-6
          bg-orange-500
          hover:bg-orange-600
          transition-all
          duration-300
          py-3.5
          rounded-xl
          font-semibold
          flex
          items-center
          justify-center
          gap-2
        "
      >
        <Download size={18} />
        Download CV
      </a>

        {/* Divider */}

        <div className="h-px my-6" />

        {/* Contact */}

        <div
          className="
          rounded-2xl
          bg-[#202020]
          border
          border-[#2c2c2c]
          p-5
          "
        >

          <h4
            className="
            text-lg
            font-semibold
            mb-5
            "
          >
            Contact
          </h4>

          <div className="space-y-5">

            <div className="flex gap-4">

              <div
                className="
                w-10
                h-10
                rounded-lg
                bg-[#262626]
                flex
                items-center
                justify-center
                "
              >
                <Mail
                  size={18}
                  className="text-orange-500"
                />
              </div>

              <div>

                <p className="text-xs text-gray-500">
                  Email
                </p>

                <p className="text-sm">
                  {portfolioData.personal.email}
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <div
                className="
                w-10
                h-10
                rounded-lg
                bg-[#262626]
                flex
                items-center
                justify-center
                "
              >
                <Phone
                  size={18}
                  className="text-orange-500"
                />
              </div>

              <div>

                <p className="text-xs text-gray-500">
                  Phone
                </p>

                <p className="text-sm">
                  {portfolioData.personal.phone}
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <div
                className="
                w-10
                h-10
                rounded-lg
                bg-[#262626]
                flex
                items-center
                justify-center
                "
              >
                <MapPin
                  size={18}
                  className="text-orange-500"
                />
              </div>

              <div>

                <p className="text-xs text-gray-500">
                  Location
                </p>

                <p className="text-sm">
                  {portfolioData.personal.location}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </aside>
  );
}