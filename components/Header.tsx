'use client';
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";
import {useRouter} from "next/dist/client/router";


const Header = () => {
    const  router = useRouter();
    const  handleSignOut = async () => {
        router.push("/sign-in");

    }
    const user = {name: 'john' , email: 'contact@jsmastery.com'};

  return (
 <header className= "sticky top-0 header">
        <div className= "container header-wrapper">
            <link href= "/">
                <Image
                    src="/assets/icons/logo.svg"
                    alt="Signalist logo"
                    width={140}
                    height={32}
                    className="h-8 w-auto cursor-pointer"
                />
            </link>

            <nav className= "Hidden sm:block">
                <NavItems />
            </nav>

            <UserDropdown />
        </div>
 </header>
  );
};

export default Header;
