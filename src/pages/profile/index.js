import Layout from "@/containers/layout/layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Profile = () => {
    const router = useRouter();

    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/") ;
        },
    });

    if (status === "loading") {
        return (
            <Layout>
                <p>loading...</p>
            </Layout>
        );
    }
    return (
        <Layout>
            <h1>{session?.user.name} welcome to Profile page</h1>
        </Layout>
    );
};

export default Profile;
