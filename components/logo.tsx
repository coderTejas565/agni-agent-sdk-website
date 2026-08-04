import Link from "next/link";


export function Logo() {

  return (

    <Link
      href="/"
      aria-label="Agni SDK home"
      className="group flex items-center gap-2"
    >

      {/* Brand mark */}

      <div
        className="
          relative
          flex
         h-5
          w-10
        
          items-center
          justify-center
          rounded-xl
          transition-all
          duration-300
          group-hover:bg-[#FF7A00]/5
        "
      >

        <svg
          width="32"
          height="32"
          viewBox="0 0 100 100"
          role="img"
          aria-hidden="true"
        >

          <path
            d="M38 25 L20 50 L38 75"
            fill="none"
            stroke="currentColor"
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground"
          />


          <path
            d="M62 25 L80 50 L62 75"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground"
          />


          <circle
            cx="50"
            cy="50"
            r="8"
            fill="#FF7A00"
            className="
              origin-center
              transition-transform
              duration-200
              group-hover:scale-110
            "
          />

        </svg>

      </div>


      {/* Text */}

      <div className="leading-none">

        <div
          className="
            text-foreground
            text-[18px]
            font-semibold
            tracking-tight
          "
        >
          Agni SDK
        </div>

      </div>


    </Link>

  );
}