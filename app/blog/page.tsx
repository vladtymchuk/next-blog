// blog/page.tsx
// page for blog posts
'use client'

import { getAllPosts } from "@/services/getPosts";
import { PostSearch } from "@/components/PostSearch";
import { useEffect, useState } from "react";
import { Posts } from "@/components/Posts";

export default function Blog() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllPosts()
            .then(setPosts)
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            <h1>Blog</h1>
            <PostSearch onSearch={setPosts}/>
            {loading ? <h3>Loading...</h3> : <Posts posts={posts}/>}
        </>
    )
}
