import { Rss } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="flex justify-center items-center p-4 bg-gradient-to-r from-cyan-500 to-blue-700">
            <p className="text-white flex items-center">© nash1111 <a href="/rss" className="ml-2"><Rss /></a></p>
        </footer>
    );
};