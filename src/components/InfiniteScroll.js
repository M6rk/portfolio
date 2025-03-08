const InfiniteScroll = () => {
    const languageIcons = [
        { name: "React", src: "/images/react.svg" },
        { name: "HTML5", src: "/images/html.svg" },
        { name: "CSS3", src: "/images/css.svg" },
        { name: "MySQL", src: "/images/mysql.svg" },
        { name: "Vue", src: "/images/vue.svg" },
        { name: "JavaScript", src: "/images/javascript.svg" },
        { name: "TypeScript", src: "/images/typescript.svg" },
        { name: "Node.js", src: "/images/nodejs.svg" },
        { name: "Python", src: "/images/python.svg" },
        { name: "Java", src: "/images/java.svg" },
        { name: "PHP", src: "/images/php.svg" },
        { name: "Tailwind", src: "/images/tailwind.svg" }
    ];
    return (
        
        <div className="flex justify-center w-full bg-white">
            <div className="relative overflow-hidden w-[30rem]">
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white z-10"></div>
                <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white z-10"></div>

                {/* Infinite scrolling logos */}
                <div className="overflow-hidden">
                    <ul className="flex whitespace-nowrap animate-infinite-scroll gap-4 bg-white py-4">
                        {[...languageIcons, ...languageIcons].map((icon, index) => (
                            <li key={`${icon.name}-${index}`} className="flex-shrink-0 flex items-center gap-2">
                                <img src={icon.src} alt={icon.name} className="w-12 h-12" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default InfiniteScroll;