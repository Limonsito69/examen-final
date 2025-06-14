import ExerciseCard from "./ExerciseCard";

const workouts = [
  {
    title: "Puxada frontal",
    description: "3 séries x 12 repetições",
    image: "/image0.svg",
  },
  {
    title: "Remada curvada",
    description: "3 séries x 12 repetições",
    image: "/image1.svg",
  },
  {
    title: "Remada unilateral",
    description: "3 séries x 12 repetições",
    image: "/image2.svg",
  },
  {
    title: "Levantamento terra",
    description: "3 séries x 12 repetições",
    image: "/image3.svg",
  },
];

const WorkoutList = () => (
  <div style={{ padding: "20px" }}>
    {workouts.map((w, i) => (
      <ExerciseCard
        key={i}
        title={w.title}
        description={w.description}
        image={w.image}
      />
    ))}
  </div>
);

export default WorkoutList;
