import { Container, Link, Text } from "@/components/ui";

export default function Footer() {
  return (
    <Container>
      <Text>&copy; 2023 CourseCentre. All rights reserved.</Text>
      <Link href="/terms">Terms of Service</Link>
      <Link href="/privacy">Privacy Policy</Link>
    </Container>
  );
}
