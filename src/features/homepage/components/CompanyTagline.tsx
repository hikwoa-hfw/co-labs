import { cormorant } from "@/app/font"
import { TextAnimate } from "@/components/magicui/text-animate"

const words = "Where Innovation Meets Collaboration"

const CompanyTagline = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className={`${cormorant.className} text-center`}>
        <TextAnimate
          animation="blurInUp"
          by="character"
          duration={2.5}
          once
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-tight"
        >
          {`"${" "}${words}${" "}"`}
        </TextAnimate>
      </div>
    </section>
  )
}

export default CompanyTagline

