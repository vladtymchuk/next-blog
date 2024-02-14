// blog/[id]/page.tsx
// page for blog post

import { Metadata } from "next"

type Props = {
    params: {
        id: string
    }
}
async function getData(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
    return res.json()
}
export async function generateMetadata ({
    params: { id }
}: Props): Promise<Metadata> {
    const post = await getData(id);
    return {
        title: `${post.title} | Blog`,
    }
}



export default async function BlogPost({params: { id }}: Props) {
    const post = await getData(id);
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>

    )
}