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
        { name: "Tailwind", src: "/images/tailwind.svg" },
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
        { name: "Tailwind", src: "/images/tailwind.svg" },
        
        
    ];
    return (
        
        <div className="relative overflow-hidden bg-white w-[20rem] lg:w-[30rem] md:w-[30rem] sm:w-[30rem] border-2 border-gray-100 rounded-xl">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white z-10"></div>
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white z-10"></div>

            {/* Infinite scrolling logos */}
            <ul className="flex items-center animate-infinite-scroll gap-4 bg-white py-4">
                {languageIcons.map((icon) => (
                    <li className="flex items-center gap-2">
                        <img src={icon.src} alt={icon.name} className="max-w-10 lg:max-w-12 md:max-w-12 sm:max-w-12" />
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default InfiniteScroll;