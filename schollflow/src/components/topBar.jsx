import react from "react";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";
function TopBar(){
        return(
            <header className="w-max-10 sticky top-0 border-b flex items-center px-5 bg-transparent w-full h-25  backdrop-blur-sm ">
               <div className=" w-max-200">
                <Image
                alt={"logo"}
                src={'/chat.png'}
                width={200}
                height={200}
                />
                </div>
                <div className="ml-10 w-120 h-10 flex items-center justify-center">
                    <ul className="flex space-x-2 text-xl font-extrabold text-[#0c0c0c] ">
                        <li>Quem somos nós?</li>
                        <Separator
                        className={'bg-[#3f9fff59]'}
                        orientation="vertical"/>
                        <li>Nossa equipe</li>
                       <Separator
                         className={'bg-[#3f9fff59]'}
                        orientation="vertical"/>
                        <li>Feedbacks</li>
                        <Separator
                          className={'bg-[#3f9fff59]'}
                        orientation="vertical"/>
                        <li>Suporte</li>
                    </ul>
                </div>
                <div className=" w-100 h-full items-center flex  gap-5  ml-50 flex-row-reverse">
                   <Link href={'/signup'}> <Button className={'w-30 h-10  border-2 border-[#3fa0ff] hover:border-[#fcfcfe] text-[#3FA0FF] bg-[#fcfcfe] transition-colors hover:bg-[#3FA0FF] hover:text-[#fcfcfe]'}
                    >Cadastre-se</Button></Link>
                    <Link href={'/login'}><Button className={'w-25 h-10 border-2 border-[#fcfcfe] hover:border-[#3fa0ff] bg-[#3FA0FF] transition-colors hover:bg-[#fcfcfe] hover:text-[#3FA0FF]'} >Login</Button>
                </Link>
                </div>
            </header>
        )
}
export default TopBar