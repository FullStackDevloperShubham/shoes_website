const Footer = () => {
    return (
        <footer class="bg-gray-900 text-white py-6">
            <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                {/* <!-- Developer Info --> */}
                <div class="text-center md:text-left">
                    <h2 class="text-xl font-semibold">Shubham - Full Stack Developer</h2>
                    <p class="text-gray-400">"Transforming ideas into seamless digital solutions that captivate and perform."</p>
                </div>

                {/* <!-- Contact Info --> */}
                <div class="mt-4 md:mt-0">
                    <p class="flex items-center gap-2">
                        📞 <a href="tel:+91 7385911875" class="text-gray-300 hover:text-white">&#43;91&nbsp;7385911875</a>
                    </p>
                    <p class="flex items-center gap-2">
                        ✉️ <a href="" class="text-gray-300 hover:text-white">shubhamfullstackdeveloper@gmail.com
                        </a>
                    </p>
                </div>

                {/* <!-- Social Links --> */}
                <div class="mt-4 md:mt-0 flex gap-4">
                    <a href="https://github.com/yourgithub" target="_blank" class="hover:text-gray-400">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" class="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com/in/yourlinkedin" target="_blank" class="hover:text-gray-400">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" class="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;