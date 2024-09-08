import { Container, Icons } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import { UserButton, } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Typography } from "@mui/material";
import Link from "next/link";

const Navbar = async () => {

    const user = await currentUser();

    return (
        <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
            <Container reverse>
                <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
                    <div className="flex items-start">
                        <Link href="/" className="flex items-center gap-2">
                        <Typography sx={{ fontWeight: "bold", color: "#0A79DF" ,fontSize:"21px"}}>
                            <span className="md:text-3xl font-bold ">
                                
                                SmartLearn
                            </span></Typography>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        {user ? (
                            <UserButton />
                        ) : (
                            <>
                                <Link href="/sign-in" className={buttonVariants({ size: "sm", variant: "ghost" })}>
                                    Login
                                </Link>
                                <Link href="/sign-up" className={buttonVariants({ size: "sm", className: "hidden md:flex" })}>
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </header>
    )
};

export default Navbar
