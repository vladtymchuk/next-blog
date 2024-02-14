// blog/page.tsx
// page for blog posts

import { Metadata } from "next"
import Link from "next/link";


async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60
        }
    })

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}

export const metadata: Metadata = {
    title: "Blog",
    description: "Blog posts",
}

export default async function Blog() {
    const posts = await getData();

    return (
        <>
            <h1>Blog</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}