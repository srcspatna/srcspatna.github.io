export default function Footer() {
    return (
        <footer className="bg-gray-800 p-4 text-white text-center text-sm mt-auto">
            <div className="container mx-auto">
                &copy; {new Date().getFullYear()} SRCS. All rights reserved.
            </div>
        </footer>
    );
}