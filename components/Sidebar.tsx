import { links } from "@/lib/data"
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <aside className="bg-white h-full w-full overflow-hidden"> 
      <h1 className="text-[#007AFF] text-2xl font-extrabold text-center
      mt-3">
        Big <span className="text-[#24CCB8]">Bazzar</span>
      </h1>
      <ul className="mt-5 lg:mt-10 w-[88%] mx-auto">
        {links.map(link => (
          <li key={link.title} className={`flex items-center gap-2 py-2 px-3 rounded-md z-10
          mb-3 
          ${pathname === link.path ? "bg-[#007AFF] text-white shadow-lg" : "text-[#818891]"}`}>
            <span>{link.icon}</span>
            <p className="text-sm">{link.title}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

