import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
    const { data: session, status } = useSession();

    return (
        <div className="bg-white w-full shadow-lg">
            <nav className="flex justify-between py-4 mb-6 max-w-screen-xl mx-auto">
                <h1 className="font-bold">
                    <Link href="/">TodoList App</Link>
                </h1>
                <ul className="flex items-center gap-x-6">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/protected-ssr">Protected ssr</Link>
                    </li>
                    {status === "loading" ? (
                        <div>loading</div>
                    ) : session ? (
                        <>
                            <li>
                                <Link href="/profile/">Profile</Link>
                            </li>

                            <li>
                                <button onClick={() => signOut("github")}>
                                    Sign out
                                </button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <button onClick={() => signIn("github")}>
                                Sign in
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Header;
