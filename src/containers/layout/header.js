import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-white w-full shadow-lg">
            <nav className="flex justify-between py-4 mb-6 max-w-screen-xl mx-auto">
            <h1 className="font-bold">
                <Link href="/">TodoList App</Link>
            </h1>
            <ul className="flex items-center gap-x-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/todos/">Todos</Link></li>
                <li><Link href="/profile/">Profile</Link></li>
                <li><Link href="#">Sign in</Link></li>
                <li><Link href="#">Sign out</Link></li>
            </ul>
        </nav>
        </div>
        
    );
};

export default Header;
