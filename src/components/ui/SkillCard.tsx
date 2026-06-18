type SkillCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};


export default function SkillCard({ icon: Icon, label}: SkillCardProps) {
  return (
    <li className="cursor-pointer flex items-center gap-x-2 border-[1.5px] border-accent bg-accent/10 rounded-lg p-2 shadow-2xl transition-all ease-in-out duration-300">
      <Icon className="size-6" />
          <p className="font-light">{label}</p>
    </li>
  );
}
