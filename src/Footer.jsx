import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">Developed by <a href="https://github.com/codewithjihad1" class="hover:underline">CodeWithJihad</a>.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://www.facebook.com/jihad793" class="hover:underline me-4 md:me-6">Facebook</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/codewithjihad/" class="hover:underline me-4 md:me-6">Twitter</a>
                </li>
                <li>
                    <a href="www.linkedin.com/in/codewithjihad1" class="hover:underline">Linkedin</a>
                </li>
            </ul>
            </div>
        </footer>
    );
};

export default Footer;