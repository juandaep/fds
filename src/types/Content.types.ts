type ContentProps = {
  children: React.ReactNode;
};

type ContentTitleProps = ContentProps & {
  title: string;
};

type ContentSectionProps = ContentProps & {
  id?: string;
  sectionKey?: string;
};
