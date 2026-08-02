import Link from "next/link";
import { Flame } from "lucide-react";
import { FaGithub } from "react-icons/fa";


export function Footer() {
  return (
    <footer
      className="
        border-t
        border-border
        py-12
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
          px-6
        "
      >

        <div
          className="
            flex
            flex-col
            gap-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          {/* Brand */}

          <div>

            <Link
              href="/"
              className="
                flex
                items-center
                gap-2
                font-semibold
                tracking-tight
                text-foreground
              "
            >
              <Flame
                size={22}
                className="text-[#FF7A00]"
              />

              Agni SDK
            </Link>


            <p
              className="
                mt-3
                max-w-sm
                text-sm
                text-zinc-400
              "
            >
              A TypeScript-first runtime for
              building reliable AI agents.
            </p>

          </div>



          {/* Links */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-6
              text-sm
              text-zinc-400
            "
          >

            <Link
              href="#architecture"
              className="
                transition
                hover:text-foreground
              "
            >
              Architecture
            </Link>


            <Link
              href="#features"
              className="
                transition
                hover:text-foreground
              "
            >
              Features
            </Link>


            <Link
              href="#docs"
              className="
                transition
                hover:text-foreground
              "
            >
              Docs
            </Link>


            <Link
              href="https://github.com"
              target="_blank"
              className="
                flex
                items-center
                gap-2
                transition
                hover:text-foreground
              "
            >
              <FaGithub
               size={16} />

              GitHub
            </Link>

          </div>

        </div>



        {/* Bottom */}

        <div
          className="
            mt-10
            border-t
            border-border
            pt-8
            text-sm
            text-zinc-500
          "
        >
          © {new Date().getFullYear()} Agni SDK.
          Built for developers building the future of AI agents.
        </div>


      </div>

    </footer>
  );
}