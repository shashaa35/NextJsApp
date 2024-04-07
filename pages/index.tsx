import Footer from "@/app/Layout/Footer/Footer";
import Layout from "@/app/Layout/Layout";
import CategoryList from "@/app/Layout/Main/CategoryList/CategoryList";
import PopularTopics from "@/app/Layout/Main/PopularTopics/PopularTopic";
import SearchBar from "@/app/Layout/Main/SearchBar/SearchBar";
import Navbar from "@/app/Layout/Navigation/Navbar/Navbar";
import { useState } from "react";

// Mock data for categories
const mockCategories = [
  { id: "1", name: "Data Science", description: "Data Science description" },
  {
    id: "2",
    name: "Programming & Development",
    description: "Programming & Development description",
  },
  {
    id: "3",
    name: "Artificial Intelligence",
    description: "Artificial Intelligence description",
  },
  { id: "4", name: "Business", description: "Business description" },
  {
    id: "5",
    name: "Autonomous Systems",
    description: "Autonomous Systems description",
  },
  {
    id: "6",
    name: "Product Management",
    description: "Product Management description",
  },
  {
    id: "7",
    name: "Cloud Computing",
    description: "Cloud Computing description",
  },
];

// Mock method to simulate fetching categories from an API
async function getCategoriesFromAPI() {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockCategories;
}

// Mock data for popular topics
const mockPopularTopics = [
  "Free Certificates",
  "Ivy League",
  "Stanford",
  "Best of All Time",
  "Computer Science",
  "Sustainability",
  "MIT",
  "Google",
  "Amazon",
  "Business",
  "Best Courses Guides",
  "Upskill with Tech Giants",
];

// Mock method to simulate fetching popular topics from an API
async function getPopularTopics() {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockPopularTopics;
}

// Mock method to simulate searching courses from an API
async function searchCoursesFromAPI(query: string) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Filter mockCategories based on the query
  return mockCategories.filter((category) =>
    category.name.toLowerCase().includes(query.toLowerCase())
  );
}

export async function getServerSideProps() {
  // Fetch data from API or local files
  const categories = await getCategoriesFromAPI();
  const popularTopics = await getPopularTopics();

  // Pass data to the page component as props
  return {
    props: {
      categories,
      popularTopics,
    },
  };
}

interface Category {
  id: string;
  name: string;
  description: string;
}

interface Props {
  categories: Category[];
  popularTopics: string[];
}

export default function Home({ categories, popularTopics }: Props) {
  const [searchResults, setSearchResults] = useState(categories);

  const handleSearch = async (query: string) => {
    // Perform the search API call here
    const results = await searchCoursesFromAPI(query);
    setSearchResults(results);
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <PopularTopics topics={popularTopics} />
      <CategoryList categories={categories} />
      <Footer />
    </Layout>
  );
}
