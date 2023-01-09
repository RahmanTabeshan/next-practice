import Layout from "@/containers/layout/layout";
import { getSession, useSession } from "next-auth/react";

const Protected = () => {
    const{data:session,status} = useSession() ;
    console.log(session)
    return (
        <Layout>
            <h1>protected page</h1>
        </Layout>
    );
};

export default Protected;

export const getServerSideProps = async (contex)=>{
    const session = await getSession(contex) ;
    if(!session){
        return{
            redirect:{
                destination:"/",
                permanent:false
            }
        }
    }
    return{
        props:{
            session:session,
        }
    }
}
