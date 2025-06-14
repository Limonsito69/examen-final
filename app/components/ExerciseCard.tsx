import ImageCard from "./ImageCard";
import Title from "./Titulo";
import Text from "./Text";
import IconArrow from "./IconArrow";

interface Props {
  title: string;
  description: string;
  image: string;
}

const ExerciseCard = ({ title, description, image }: Props) => (
  <div
    style={{
      background: "#1c1c1e",
      borderRadius: "12px",
      padding: "12px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "12px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <ImageCard src={image} alt={title} />
      <div>
        <Title text={title} />
        <Text text={description} />
      </div>
    </div>
    <IconArrow />
  </div>
);

export default ExerciseCard;
