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
                    <a href="https://github.com/FullStackDevloperShubham" target="_blank" class="text-white">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.48 2 12c0 4.418 2.865 8.167 6.839 9.49.5.093.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.154-1.109-1.462-1.109-1.462-.906-.62.07-.607.07-.607 1 .07 1.528 1.028 1.528 1.028.89 1.525 2.34 1.085 2.91.83.091-.646.35-1.085.636-1.335-2.22-.252-4.555-1.11-4.555-4.942 0-1.09.39-1.982 1.03-2.68-.104-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.026a9.56 9.56 0 0 1 2.5-.34c.85.004 1.705.114 2.5.34 1.91-1.296 2.75-1.026 2.75-1.026.544 1.376.202 2.393.1 2.646.64.698 1.03 1.59 1.03 2.68 0 3.842-2.34 4.687-4.566 4.935.36.31.68.92.68 1.857 0 1.34-.012 2.42-.012 2.75 0 .267.18.58.69.48C19.14 20.16 22 16.418 22 12c0-5.52-4.48-10-10-10z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/shubham-gaikwad-62499329a/" target="_blank" class="hover:text-gray-400">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" class="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;