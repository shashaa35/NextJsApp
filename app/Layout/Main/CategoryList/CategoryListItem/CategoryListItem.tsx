import { Card } from "@/components/ui";

type Category = {
  id: string;
  name: string;
  description: string;
};

type CategoryListItemProps = {
  category: Category;
};

export default function CategoryListItem({ category }: CategoryListItemProps) {
  return (
    <Card>
      <span>{category.name}</span>
      <span>{category.description}</span>
    </Card>
  );
}
