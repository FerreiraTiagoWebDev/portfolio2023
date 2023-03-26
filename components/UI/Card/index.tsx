import Button from "@ui/Button";
import Image from "next/image";

export interface ICard {
  imagePath: string;
  title: string;
  subTitle: string;
}

export const Card: React.FC<ICard> = ({
  imagePath,
  title,
  subTitle,
}: ICard) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-4">
      <Image
        src={`/assets/images/${imagePath}`}
        alt={imagePath || "No preview"}
        width={150}
        height={50}
      />
      <div className="card-body">
        <h2 className="card-title">{title || "Title"}</h2>
        <p>{subTitle || "Subtitle"}</p>
        <div className="card-actions justify-end">
          <Button className="secondary">Explore</Button>
        </div>
      </div>
    </div>
  );
};
