const InfiniteScroll = () => {
    const languageIcons = [
        { id: 1, name: "HTML5", src: "/images/html.svg" },
        { id: 2, name: "CSS3", src: "/images/css.svg" },
        { id: 3, name: "WordPress", src: "/images/wordpress.svg" },
        { id: 4, name: "React", src: "/images/react.svg" },
        { id: 5, name: "MySQL", src: "/images/mysql.svg" },
        { id: 6, name: "Vue", src: "/images/vue.svg" },
        { id: 7, name: "JavaScript", src: "/images/javascript.svg" },
        { id: 8, name: "TypeScript", src: "/images/typescript.svg" },
        { id: 9, name: "Node.js", src: "/images/nodejs.svg" },
        { id: 10, name: "Python", src: "/images/python.svg" },
        { id: 11, name: "Java", src: "/images/java.svg" },
        { id: 12, name: "PHP", src: "/images/php.svg" },
        { id: 13, name: "Tailwind", src: "/images/tailwind.svg" },
        { id: 14, name: "Express", src: "/images/expressjs.svg" },
        { id: 15, name: "Next", src: "/images/nextjs.svg" },
        { id: 16, name: "Photoshop", src: "/images/photoshop.svg" },
        { id: 17, name: "Figma", src: "/images/figma.svg" },
    ];

    // Duplicate icons for a seamless loop
    const allIcons = [...languageIcons, ...languageIcons];
    
    return (
        <div className="relative overflow-hidden bg-white dark:bg-[#121212] w-[20rem] lg:w-[30rem] md:w-[30rem] sm:w-[30rem] border-2 border-gray-100 dark:border-[#121212] rounded-xl">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white dark:from-[#121212] z-10"></div>
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white dark:from-[#121212] z-10"></div>

            {/* Infinite scrolling logos */}
            <div className="flex overflow-hidden">
                <ul className="flex items-center animate-infinite-scroll gap-16 bg-white dark:bg-[#121212] py-4 whitespace-nowrap">
                    {allIcons.map((icon, index) => (
                        <li key={`${icon.id}-${index}`} className="flex items-center gap-2 flex-shrink-0">
                            <div className="flex items-center gap-2 group transition-all duration-300">
                                <img src={icon.src} alt={icon.name} className="h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-60" width="30" height="30" loading="lazy" />
                                <span className="text-lg font-medium text-[#1e1e1e] dark:text-[#959595]">{icon.name}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InfiniteScroll;