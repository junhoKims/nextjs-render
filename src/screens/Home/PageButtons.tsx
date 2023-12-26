"use client"

import { useRouter } from "next/navigation";

function PageButtons() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push('/pagessg')}>ssg</button>
      <button onClick={() => router.push('/pagessr')}>ssr</button>
    </div>
  )
}

export default PageButtons;