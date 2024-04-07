import { Grid } from "@/components/ui";
import CategoryListItem from "./CategoryListItem/CategoryListItem";

type Category = {
  id: string;
  name: string;
  description: string;
};

type CategoryListProps = {
  categories: Category[];
};

export default function CategoryList({ categories }: CategoryListProps) {
  return (
    <Grid>
      {categories.map((category) => (
        <CategoryListItem key={category.id} category={category} />
      ))}
    </Grid>
  );
}
