import NavButton from "@/components/nav_button";
import NavigationLinks from "@/configs/navigation_link";

export default function NavBar() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 ">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            {NavigationLinks.map((data) => {
                return <NavButton data={data} key={data.title}/>
            })}
        </div>
    </div>
  )
}
