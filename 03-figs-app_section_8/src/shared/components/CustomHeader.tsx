interface Props {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title, description }: Props) => {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};
