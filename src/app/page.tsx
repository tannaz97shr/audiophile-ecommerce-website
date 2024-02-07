import Input from "@/components/UI/Input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Input label="name" placeholder="insert your name" error="wrong format" />
    </main>
  );
}
