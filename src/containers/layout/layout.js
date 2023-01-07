import Footer from "./footer";
import Header from "./header";

const Layout = ({children}) => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
 
export default Layout;