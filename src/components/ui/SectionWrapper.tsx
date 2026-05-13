type Props = {
  children: React.ReactNode;
  id?: string;
  bgColor?: string;
}

export default function SectionWrapper({ children, id, bgColor }: Props) {
  return (
    <section id={id} className={`min-h-screen ${bgColor ?? ''}`}>
      <div className="container mx-auto px-4 space-y-10 pt-10">
        {children}
      </div>
    </section>
  )
}
