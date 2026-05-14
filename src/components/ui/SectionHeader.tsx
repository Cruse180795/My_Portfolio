type Props = {
  children: React.ReactNode;
}

export default function SectionHeader({ children }: Props) {
  return (
    <h1 className="text-center text-3xl">
      {children}
    </h1>
  );
}
