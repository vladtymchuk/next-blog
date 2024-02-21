import Link from "next/link"

const Posts = ({posts}: any) => {
    return (
        <ul>
        {posts.map((post: any) => (
            <li key={post.id}>
                <Link href={`/blog/${post.id}`}>
                    {post.title}
                </Link>
            </li>
        ))}
    </ul>
    )
}

export {Posts}