// Create a text component in style of shadcn
function Text({ children }: { children: React.ReactNode }) {
  return <span className="text-base font-medium leading-none">{children}</span>;
}

export { Text };
