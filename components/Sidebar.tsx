import { links } from "@/lib/data"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="bg-white h-full w-full overflow-hidden shadow-md"> 
      <h1 className="text-[#007AFF] text-2xl font-extrabold text-center
      mt-3">
        Big <span className="text-[#24CCB8]">Bazzar</span>
      </h1>
      <ul className="mt-5 lg:mt-10 w-[88%] mx-auto">
        {links.map(link => (
          <Link href={`${link.path}`} key={link.title} className={`flex items-center gap-2 py-2 px-3
          rounded-md z-10 mb-3 cursor-pointer
          ${pathname === link.path ? "bg-[#007AFF] text-white shadow-lg" : "text-[#818891]"}`}>
            <span>{link.icon}</span>
            <p className="text-sm font-bold">{link.title}</p>
          </Link>
        ))}
      </ul>
    </aside>
  );
}

