import banner from "../../public/images/banner.png"

export default function Home() {
  return (
    <div>
      <img src={banner} alt="banner" className="w-full md:max-h-[250px]" />
    </div>
  )
}
