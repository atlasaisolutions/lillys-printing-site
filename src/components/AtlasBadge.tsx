import { useState } from "react";

const AtlasBadge = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href="https://atlasservice.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 right-0 top-1/2 -translate-y-1/2 flex items-center group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`
          flex items-center gap-2 bg-foreground text-background shadow-[0_4px_20px_rgba(0,0,0,0.3)] 
          border-l border-t border-b border-white/10 rounded-l-full py-3 pl-5 pr-4
          transition-all duration-300 ease-in-out transform
          ${isHovered ? "translate-x-0" : "translate-x-[calc(100%-70px)]"}
        `}
            >
                <span
                    className={`
            text-[10px] uppercase tracking-wider font-medium text-background/80 whitespace-nowrap
            transition-all duration-300
            ${isHovered ? "opacity-100 mr-2" : "opacity-0 w-0 overflow-hidden"}
          `}
                >
                    Powered & Optimized by
                </span>
                <span className="font-heading font-bold text-lg tracking-tight">Atlas.</span>
            </div>
        </a>
    );
};

export default AtlasBadge;
