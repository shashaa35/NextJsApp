import { Card, Grid, Text } from "@/components/ui";

type PopularTopicsProps = {
  topics: string[];
};

export default function PopularTopics({ topics }: PopularTopicsProps) {
  return (
    <Grid>
      {topics.map((topic) => (
        <Card key={topic}>
          <Text>{topic}</Text>
        </Card>
      ))}
    </Grid>
  );
}
