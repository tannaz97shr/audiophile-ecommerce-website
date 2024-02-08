"use client";

import InputNumber from "@/components/UI/NumberInput";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <InputNumber initialValue={0} />
    </main>
  );
}
