import { maxWidthProp } from "../../utils/propClasses";

export interface SectionProps {
  children: React.ReactNode;
  maxWidth?: keyof typeof maxWidthProp;
}

export const Section = ({ children, maxWidth = "7xl" }: SectionProps) => {
  return (
    <section
      className={`${maxWidthProp[maxWidth]} prose prose-dark md:prose-lg mx-auto block w-full`}
    >
      {children}
    </section>
  );
};
