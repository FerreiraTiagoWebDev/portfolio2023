import Button from "@ui/Button";

export interface ICard {
  image: any;
  title: string;
  subTitle: string;
}

export const Card: React.FC<ICard> = ({ image, title, subTitle }: ICard) => {
  return (
    <div className="flex w-full bg-base-100 shadow-xl m-4 rounded-lg">
      <div className="flex items-center justify-center rounded-3xl w-44 h-42 relative">
        {image}
      </div>
      <hr />
      <div className="card-body">
        <h2 className="card-title">{title || "Title"}</h2>
        <p>{subTitle || "Subtitle"}</p>
        <div className="card-actions justify-end">
          <Button size="small">Explore</Button>
        </div>
      </div>
    </div>
  );
};
