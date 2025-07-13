import Image from "next/image";
import Link from 'next/link';

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <Link href="//srcspatna.com" className="border p-5 rounded-2xl">
                        <Image src="/logo.png" alt="My Image" width={150} height={150} className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110" />
                    </Link>
                </div>
            </main>
        </div>
    );
}
