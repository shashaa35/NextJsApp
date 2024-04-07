// components/SearchBar.tsx
import { Button, Input } from "@/components/ui";
import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Search courses..."
        value={query}
        onChange={handleInputChange}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}
